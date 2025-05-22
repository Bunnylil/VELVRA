document.addEventListener('DOMContentLoaded', function() {
  // Get checkout data from sessionStorage
  const checkoutData = JSON.parse(sessionStorage.getItem('checkoutData')) || {};
  const cartItems = checkoutData.items || [];
  const total = checkoutData.total || 0;
  
  // Payment method functionality
  const paymentMethods = {
    mastercard: {
      name: "Mastercard",
      content: "Payment processed via Mastercard ending in **** 5678"
    },
    visa: {
      name: "Visa",
      content: "Payment processed via Visa ending in **** 1234"
    },
    directexpress: {
      name: "Direct Express",
      content: "Payment processed via Direct Express"
    },
    paypal: {
      name: "PayPal",
      content: "Payment processed via PayPal account: user@example.com"
    }
  };

  // Initialize payment method selection
  const paymentMethodElements = document.querySelectorAll('.payment-method');
  const paymentContentElement = document.getElementById('paymentContent');

  paymentMethodElements.forEach(method => {
    method.addEventListener('click', () => {
      paymentMethodElements.forEach(m => m.classList.remove('active'));
      method.classList.add('active');
      const methodName = method.getAttribute('data-method');
      paymentContentElement.textContent = paymentMethods[methodName].content;
    });
  });
  
  // Update the order details table
  const tbody = document.querySelector('.order-details tbody');
  tbody.innerHTML = ''; // Clear existing rows
  
  cartItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$ ${item.price.toFixed(2)}</td>
    `;
    tbody.appendChild(row);
  });
  
  // Update the total price from cart summary
  document.querySelector('.total-price .price').textContent = `$ ${total.toFixed(2)}`;

  // Carousel functionality
  const toggleCarouselBtn = document.getElementById('toggleCarousel');
  const carouselSide = document.getElementById('carouselSide');
  const mainContainer = document.getElementById('mainContainer');
  const carouselContainer = document.getElementById('carouselContainer');
  const dotsContainer = document.getElementById('carouselDots');
  
  let currentItem = 0;
  let carouselInterval;

  // Initialize carousel with product videos
  function initializeCarousel() {
    carouselContainer.innerHTML = ''; // Clear existing items
    dotsContainer.innerHTML = ''; // Clear existing dots

    cartItems.forEach((item, index) => {
      // Create carousel item with video instead of image
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      
      // Check if item has video property and use it
      if (item.video) {
        carouselItem.innerHTML = `
          <video autoplay loop muted playsinline class="carousel-image">
            <source src="${item.video}" type="video/mp4">
          </video>
          <div class="item-details">
            <p>${item.name}</p>
            ${item.color ? `<p>Color: ${item.color}</p>` : ''}
            ${item.size ? `<p>Size: ${item.size}</p>` : ''}
          </div>
        `;
      } else if (item.image) {
        // Fallback to image if no video is available
        carouselItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="carousel-image">
          <div class="item-details">
            <p>${item.name}</p>
            ${item.color ? `<p>Color: ${item.color}</p>` : ''}
            ${item.size ? `<p>Size: ${item.size}</p>` : ''}
          </div>
        `;
      }
      
      carouselContainer.appendChild(carouselItem);

      // Create dot
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.dataset.index = index;
      dot.addEventListener('click', () => showItem(index));
      dotsContainer.appendChild(dot);
    });

    // If no items were added (empty cart), add a placeholder
    if (cartItems.length === 0) {
      const placeholderItem = document.createElement('div');
      placeholderItem.className = 'carousel-item active';
      placeholderItem.innerHTML = `
        <div class="empty-carousel">
          <p>No items in your order</p>
        </div>
      `;
      carouselContainer.appendChild(placeholderItem);
    }

    // Get references to the newly created elements
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselDots = document.querySelectorAll('.carousel-dot');

    function showItem(index) {
      carouselItems.forEach(item => item.classList.remove('active'));
      carouselDots.forEach(dot => dot.classList.remove('active'));
      
      carouselItems[index].classList.add('active');
      if (carouselDots[index]) {
        carouselDots[index].classList.add('active');
      }
      currentItem = index;
    }

    function nextItem() {
      const itemsCount = carouselItems.length;
      if (itemsCount > 0) {
        currentItem = (currentItem + 1) % itemsCount;
        showItem(currentItem);
      }
    }

    function startCarousel() {
      stopCarousel();
      if (carouselItems.length > 1) {
        carouselInterval = setInterval(nextItem, 3000);
      }
    }

    function stopCarousel() {
      clearInterval(carouselInterval);
    }

    // Initialize first item
    if (carouselItems.length > 0) {
      showItem(0);
    }

    // Toggle carousel visibility
    toggleCarouselBtn.addEventListener('click', () => {
      const isVisible = carouselSide.style.display !== 'none';
      
      if (isVisible) {
        carouselSide.style.display = 'none';
        toggleCarouselBtn.textContent = 'View Product Images';
        mainContainer.style.maxWidth = '600px';
        stopCarousel();
      } else {
        carouselSide.style.display = 'block';
        toggleCarouselBtn.textContent = 'Hide Product Images';
        mainContainer.style.maxWidth = '1200px';
        startCarousel();
      }
    });

    // Start carousel if images are visible by default
    if (carouselSide.style.display !== 'none') {
      startCarousel();
    }
  }

  // Initialize the carousel
  initializeCarousel();
});

// Log to show the script is running
console.log("Orders page script initialized");