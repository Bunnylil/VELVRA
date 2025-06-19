document.addEventListener("DOMContentLoaded", () => {
  
  const checkoutData = JSON.parse(sessionStorage.getItem("checkoutData"));

  if (!checkoutData) {
    alert("No checkout data found. Please add items to your cart first.");
    window.location.href = "cart.html";
    return;
  }

  
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselDots = document.querySelector(".carousel-controls");

  
  carouselInner.innerHTML = "";
  carouselDots.innerHTML = "";

  
  checkoutData.items.forEach((item, index) => {
    
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

    
    const videoHtml = item.video
      ? `<video autoplay loop muted playsinline class="carousel-video">
           <source src="${item.video}" type="video/mp4">
           Your browser does not support the video tag.
         </video>`
      : `<div class="placeholder-video">No video available</div>`;

    carouselItem.innerHTML = `
      ${videoHtml}
      <div class="carousel-caption">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
        <p>Size: ${item.size || "N/A"}</p>
        <p>Color: ${item.color || "N/A"}</p>
      </div>
    `;
    carouselInner.appendChild(carouselItem);

  
    const dot = document.createElement("span");
    dot.className = `carousel-dot ${index === 0 ? "active" : ""}`;
    dot.setAttribute("data-index", index);
    carouselDots.appendChild(dot);
  });

 
  document.querySelectorAll(".order-summary").forEach((summary) => {
    summary.innerHTML = `
      <h4>Order Summary</h4>
      <div class="summary-item">
        <span>Subtotal</span>
        <span>$${checkoutData.subtotal.toFixed(2)}</span>
      </div>
      ${
        checkoutData.couponApplied
          ? `
      <div class="summary-item">
        <span>Discount (${checkoutData.couponCode})</span>
        <span class="discount">-$${checkoutData.discount.toFixed(2)}</span>
      </div>
      `
          : ""
      }
      <div class="summary-item">
        <span>Shipping</span>
        <span>${checkoutData.shipping === "free" ? "FREE" : "$15.00"}</span>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-item total">
        <span>Total Payment</span>
        <span>$${checkoutData.total.toFixed(2)}</span>
      </div>
    `;
  });

  
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".carousel-dot");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  function showSlide(index) {
    
    if (index >= items.length) index = 0;
    if (index < 0) index = items.length - 1;

    
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);

      
      const video = item.querySelector("video");
      if (video) {
        video.pause();
      }
    });

   
    const activeVideo = items[index].querySelector("video");
    if (activeVideo) {
      activeVideo.play();
    }

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });
  }

 
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const index = Number.parseInt(this.getAttribute("data-index"));
      showSlide(index);
    });
  });

  
  let carouselInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);

  
  carouselInner.addEventListener("mouseenter", () => {
    clearInterval(carouselInterval);
  });

  carouselInner.addEventListener("mouseleave", () => {
    carouselInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
  });

  
  const paymentMethods = document.querySelectorAll(".payment-method");
  paymentMethods.forEach((method) => {
    method.addEventListener("click", function () {
      const methodName = this.getAttribute("data-method");

      paymentMethods.forEach((m) => m.classList.remove("active"));
      this.classList.add("active");

      document.querySelectorAll(".payment-content-item").forEach((item) => {
        item.classList.remove("active");
      });
      document.getElementById(`${methodName}-content`).classList.add("active");
    });
  });

  
  document.querySelectorAll(".pay-now-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      
    
      const orderData = {
        ...checkoutData,
        paymentMethod: document.querySelector(".payment-method.active").getAttribute("data-method"),
        date: new Date().toISOString(),
        orderId: "ORD-" + Math.floor(Math.random() * 1000000),
      };
      
      
      sessionStorage.setItem("orderData", JSON.stringify(orderData));
      
     
      sessionStorage.removeItem("cart");
      sessionStorage.removeItem("checkoutData");
      
      
      window.location.href = "order-now.html";
    });
  });

  
  document.querySelectorAll(".payment-form").forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

    });
  });
});