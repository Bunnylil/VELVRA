document.addEventListener("DOMContentLoaded", () => {
  
  const accordionItems = document.querySelectorAll(".accordion-item")

 
  accordionItems.forEach((item) => {
    
    if (!item.querySelector(".accordion-content")) {
      const contentDiv = document.createElement("div")
      contentDiv.className = "accordion-content"

      
      const headerText = item.querySelector(".accordion-header h3").textContent

      switch (headerText) {
        case "How To Track Your Order?":
          contentDiv.innerHTML = `
            <p>You can track your order by following these steps:</p>
            <ol>
              <li>Log in to your VELVRA account</li>
              <li>Go to "My Orders" in your account dashboard</li>
              <li>Find your order and click on "Track Order"</li>
              <li>You'll see the current status and location of your package</li>
            </ol>
            <p>Alternatively, you can use the tracking number provided in your shipping confirmation email.</p>
          `
          break

        case "How to Cancel Your Order?":
          contentDiv.innerHTML = `
            <p>To cancel your order:</p>
            <ul>
              <li>Orders can only be canceled within 1 hour of placing them</li>
              <li>Go to "My Orders" in your account dashboard</li>
              <li>Select the order you wish to cancel</li>
              <li>Click the "Cancel Order" button</li>
              <li>Follow the prompts to complete the cancellation</li>
            </ul>
            <p>If more than 1 hour has passed, please contact our customer service for assistance.</p>
          `
          break

        case "How to Return Your Order?":
          contentDiv.innerHTML = `
            <p>Our return process is simple:</p>
            <ol>
              <li>Log in to your account and go to "My Orders"</li>
              <li>Select the order with items you want to return</li>
              <li>Click "Return Items" and select which products to return</li>
              <li>Choose your preferred return method (drop-off or pickup)</li>
              <li>Print the return label and attach it to your package</li>
              <li>Drop off your package at the designated location or schedule a pickup</li>
            </ol>
            <p>Returns must be initiated within 30 days of delivery.</p>
          `
          break

        case "Our Refund Policy?":
          contentDiv.innerHTML = `
            <p>VELVRA's refund policy includes:</p>
            <ul>
              <li>Full refunds for unworn items returned within 30 days</li>
              <li>Store credit for items returned between 31-60 days</li>
              <li>Refunds are processed within 5-7 business days after we receive your return</li>
              <li>Original shipping costs are non-refundable</li>
              <li>Sale items marked as "Final Sale" cannot be returned</li>
            </ul>
            <p>For more details, please visit our complete <a href="#">Refund Policy</a> page.</p>
          `
          break

        default:
          contentDiv.innerHTML = `<p>More information will be provided soon.</p>`
      }

      
      item.appendChild(contentDiv)
    }

    
    const header = item.querySelector(".accordion-header")
    header.addEventListener("click", () => {
      
      const isActive = item.classList.toggle("active")

      
      const icon = header.querySelector("i")
      if (isActive) {
        icon.classList.remove("fa-plus")
        icon.classList.add("fa-minus")
      } else {
        icon.classList.remove("fa-minus")
        icon.classList.add("fa-plus")
      }

      
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active")
          const otherIcon = otherItem.querySelector(".accordion-header i")
          otherIcon.classList.remove("fa-minus")
          otherIcon.classList.add("fa-plus")
        }
      })
    })
  })
})

      
      document.addEventListener('DOMContentLoaded', function() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
          const question = item.querySelector('.faq-question');
          
          question.addEventListener('click', () => {
            
            item.classList.toggle('active');
            
            
            faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                otherItem.classList.remove('active');
              }
            });
          });
        });
      });
    