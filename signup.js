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
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Function to save user data to localStorage
  function saveUserToLocalStorage(userData) {
    // Save current user data
    localStorage.setItem("currentUser", JSON.stringify(userData));
    
    // Add to users array for multiple users
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Check if user with this email already exists
    const userExists = existingUsers.some(user => user.email === userData.email);
    
    if (!userExists) {
      existingUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUsers));
    }
  }

  const passwordInput = document.getElementById("password");
  if (passwordInput) {
    passwordInput.addEventListener("input", function () {
      const password = this.value;
      const strengthDots = document.querySelectorAll(".strength-dot");
      let strength = 0;

      if (password.length >= 8) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[\W_]/.test(password)) strength++;

      strengthDots.forEach((dot, index) => {
        dot.classList.toggle("active", index < strength);
      });
    });
  }

  const togglePasswordBtn = document.querySelector(".toggle-password");
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener("click", () => {
      passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
      togglePasswordBtn.classList.toggle("fa-eye");
      togglePasswordBtn.classList.toggle("fa-eye-slash");
    });
  }

  const googleButton = document.getElementById("google-signin");
  if (googleButton) {
    googleButton.addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const userData = {
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

        // Save to localStorage
        saveUserToLocalStorage(userData);

        // Optional: Still try to send to backend if it exists
        try {
          const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });
          
          // If backend is available, process its response
          if (response.ok) {
            const data = await response.json();
            console.log("Backend response:", data);
          }
        } catch (backendError) {
          // Backend not available, continue with localStorage only
          console.log("Backend not available, using localStorage only");
        }

        alert(`Welcome, ${user.displayName}! Redirecting...`);
        window.location.href = "signin.html";
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

  const signupButton = document.getElementById("signup-btn");
  if (signupButton) {
    signupButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const countryCode = document.getElementById("countryCode").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const password = document.getElementById("password").value;
      const termsChecked = document.getElementById("terms").checked;

      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !termsChecked
      ) {
        alert("Please fill in all fields and agree to the terms.");
        return;
      }

      const userData = {
        firstName,
        lastName,
        email,
        countryCode,
        phone,
        password, // In a real app, you should never store plain text passwords
        signupMethod: "manual",
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };

      // Save to localStorage
      saveUserToLocalStorage(userData);

      // Optional: Still try to send to backend if it exists
      try {
        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
        
        // If backend is available, process its response
        if (response.ok) {
          const data = await response.json();
          console.log("Backend response:", data);
        }
      } catch (error) {
        // Backend not available, continue with localStorage only
        console.log("Backend not available, using localStorage only");
      }

      alert("Sign up successful! Redirecting...");
      window.location.href = "signin.html";
    });
  }

  // Check if user is already logged in
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    const userData = JSON.parse(currentUser);
    console.log("User already logged in:", userData);
    // You can redirect or show a message here
  }
});


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


window.togglePassword = togglePassword;