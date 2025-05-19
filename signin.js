import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbjwB8BGzzGeg3hYkNDMTIWY5kQ6xaTZQ",
  authDomain: "inceptor-7c036.firebaseapp.com",
  projectId: "inceptor-7c036",
  storageBucket: "inceptor-7c036.appspot.com",
  messagingSenderId: "251784547484",
  appId: "1:251784547484:web:46ce4a6da235ac75723159",
  measurementId: "G-10BE1RRDC2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  // Check if user is already logged in
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    const userData = JSON.parse(currentUser);
    console.log("User already logged in:", userData);
    // Uncomment the line below if you want to auto-redirect logged in users
    // window.location.href = "sload.html";
  }

  // Function to update last login time
  function updateLastLogin(userData) {
    userData.lastLogin = new Date().toISOString();
    localStorage.setItem("currentUser", JSON.stringify(userData));
    
    // Also update in the users array
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map(user => {
      if (user.email === userData.email) {
        return { ...user, lastLogin: userData.lastLogin };
      }
      return user;
    });
    
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  const googleButton = document.getElementById("google-signin");
  if (googleButton) {
    googleButton.addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("Google user:", user);

        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const existingUser = users.find(u => u.email === user.email);
        
        if (existingUser) {
          // User exists, update last login and sign in
          updateLastLogin(existingUser);
          
          // Try to send to backend if it exists
          try {
            const response = await fetch("http://localhost:5000/signin", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: user.email,
                signupMethod: "google",
              }),
            });
            
            if (response.ok) {
              console.log("Backend authentication successful");
            }
          } catch (backendError) {
            console.log("Backend not available, using localStorage only");
          }
          
          alert(`Welcome back, ${existingUser.firstName}! You signed in using Google.`);
          window.location.href = "sload.html";
        } else {
          // User doesn't exist, create new account
          const newUser = {
            firstName: user.displayName ? user.displayName.split(" ")[0] : "",
            lastName: user.displayName ? user.displayName.split(" ").slice(1).join(" ") : "",
            email: user.email,
            countryCode: "",
            phone: user.phoneNumber || "",
            password: "", // No password for Google sign-in
            signupMethod: "google",
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
          };
          
          // Add to users array
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));
          
          // Set as current user
          localStorage.setItem("currentUser", JSON.stringify(newUser));
          
          alert(`Welcome, ${newUser.firstName}! Your account has been created with Google.`);
          window.location.href = "sload.html";
        }
      } catch (error) {
        console.error("Google Sign-In Error:", error);
        alert(`Sign-In Failed: ${error.message}`);
      }
    });
  }

  const twitterButton = document.getElementById("twitter-signin");
  if (twitterButton) {
    twitterButton.addEventListener("click", () => {
      alert("Twitter sign-in is not implemented yet.");
    });
  }

  const facebookButton = document.getElementById("facebook-signin");
  if (facebookButton) {
    facebookButton.addEventListener("click", () => {
      alert("Facebook sign-in is not implemented yet.");
    });
  }

  const signinForm = document.querySelector("form");
  if (signinForm) {
    signinForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const termsChecked = document.getElementById("terms").checked;

      if (!email || !password || !termsChecked) {
        alert("Please enter your email, password, and agree to the terms.");
        return;
      }

      // Check credentials against localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        // Update last login time
        updateLastLogin(user);
        
        // Try to authenticate with backend if it exists
        try {
          const response = await fetch("http://localhost:5000/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              email, 
              password, 
              signupMethod: "manual" 
            }),
          });
          
          if (response.ok) {
            console.log("Backend authentication successful");
          }
        } catch (error) {
          console.log("Backend not available, using localStorage only");
        }
        
        alert(`Welcome back, ${user.firstName}! You signed in successfully.`);
        window.location.href = "sload.html";
      } else {
        // Check if email exists but password is wrong
        const emailExists = users.some(u => u.email === email);
        
        if (emailExists) {
          alert("Incorrect password. Please try again.");
        } else {
          alert("User not found. Please sign up first.");
        }
      }
    });
  }
});

// Function to toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.querySelector(".toggle-password");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.classList.remove("fa-eye-slash");
    toggleBtn.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    toggleBtn.classList.remove("fa-eye");
    toggleBtn.classList.add("fa-eye-slash");
  }
}

// Make togglePassword available globally
window.togglePassword = togglePassword;