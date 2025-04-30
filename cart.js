// Initialize cart from localStorage
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const FREE_SHIPPING_THRESHOLD = 200.0;

function updateCartSummary() {
  let subtotal = 0;

  cartItems.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  const shippingOption = document.querySelector(
    'input[name="shipping"]:checked'
  ).value;
  let shippingCost = 0;

  if (shippingOption === "express") {
    shippingCost = 15.0;
  }

  const total = subtotal + shippingCost;

  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("total").textContent = `$${total.toFixed(2)}`;

  updateProgressBar(subtotal);
}

function updateProgressBar(subtotal) {
  const progressBar = document.getElementById("progress-bar");
  const progressAmount = document.getElementById("progress-amount");

  const remainingAmount = FREE_SHIPPING_THRESHOLD - subtotal;

  if (remainingAmount <= 0) {
    progressBar.style.width = "100%";
    progressAmount.textContent = "You have free shipping!";
  } else {
    const progressPercentage = (subtotal / FREE_SHIPPING_THRESHOLD) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressAmount.textContent = `Shop for $${remainingAmount.toFixed(
      2
    )} more to enjoy FREE Shipping`;
  }
}

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCartItems();
  updateCartSummary();
}

function updateQuantity(index, change) {
  const newQuantity = cartItems[index].quantity + change;
  if (newQuantity > 0) {
    cartItems[index].quantity = newQuantity;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCartItems();
    updateCartSummary();
  }
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `
            <tr>
                <td colspan="4" class="empty-cart">Your cart is empty</td>
            </tr>
        `;
    return;
  }

  cartItems.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>
                <video autoplay loop muted playsinline class="cart-item-video">
                    <source src="${item.video}" type="video/mp4">
                </video>
                <div class="product-info">
                    <p>${item.name}</p>
                    <p>Color: ${item.color}</p>
                    <p>Size: ${item.size}</p>
                    <span class="remove-text" onclick="removeItem(${index})">Remove</span>
                </div>
            </td>
            <td>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;

    cartItemsContainer.appendChild(row);
  });
}

function applyCoupon() {
  const couponCode = document.getElementById("coupon-input").value.trim();

  if (couponCode === "DISCOUNT10") {
    const subtotal = parseFloat(
      document.getElementById("subtotal").textContent.replace("$", "")
    );
    const discount = subtotal * 0.1;
    const discountedTotal = subtotal - discount;
    document.getElementById("total").textContent = `$${discountedTotal.toFixed(
      2
    )}`;
    alert("Coupon applied! 10% discount");
  } else {
    alert("Invalid coupon code");
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  renderCartItems();
  updateCartSummary();

  // Add event listeners for shipping options
  const shippingOptions = document.querySelectorAll('input[name="shipping"]');
  shippingOptions.forEach((option) => {
    option.addEventListener("change", updateCartSummary);
  });
});
