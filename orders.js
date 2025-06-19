document.addEventListener('DOMContentLoaded', function() {
  
  const checkoutData = JSON.parse(sessionStorage.getItem('checkoutData')) || {};
  const cartItems = checkoutData.items || [];
  const total = checkoutData.total || 0;
  
  
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
  
  
  const tbody = document.querySelector('.order-details tbody');
  tbody.innerHTML = ''; 
  
  cartItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$ ${item.price.toFixed(2)}</td>
    `;
    tbody.appendChild(row);
  });
  
  
  document.querySelector('.total-price .price').textContent = `$ ${total.toFixed(2)}`;

  
  const toggleCarouselBtn = document.getElementById('toggleCarousel');
  const carouselSide = document.getElementById('carouselSide');
  const mainContainer = document.getElementById('mainContainer');
  const carouselContainer = document.getElementById('carouselContainer');
  const dotsContainer = document.getElementById('carouselDots');
  
  let currentItem = 0;
  let carouselInterval;

  
  function initializeCarousel() {
    carouselContainer.innerHTML = ''; 
    dotsContainer.innerHTML = ''; 

    cartItems.forEach((item, index) => {
      
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      
      
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

      
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.dataset.index = index;
      dot.addEventListener('click', () => showItem(index));
      dotsContainer.appendChild(dot);
    });

    
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

    
    if (carouselItems.length > 0) {
      showItem(0);
    }

    
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

    if (carouselSide.style.display !== 'none') {
      startCarousel();
    }
  }

 
  initializeCarousel();
});


console.log("Orders page script initialized");