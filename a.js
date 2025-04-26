// Color Selection Handler - Independent Script
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const colorOptions = document.querySelectorAll('.color-option');
    const mainVideo = document.getElementById('mainVideo');
    const productTitle = document.querySelector('.product-title');
    const styleName = document.querySelector('.style-name');
    const priceSection = document.querySelector('.price-section .total-price');
    
    // Color data with associated videos and prices
    const colorData = {
        'black': {
            videos: [
                'videos/vid1 (1).mp4',
                'videos/vid1 (2).mp4',
                'videos/vid1 (3).mp4',
                'videos/vid1 (4).mp4',
                'videos/vid1 (5).mp4',
                'videos/vid1 (6).mp4'
            ],
            name: 'Vibram Gamble Black',
            price: '$95'
        },
        'brown': {
            videos: [
                'videos/vid1 (2).mp4',
                'videos/vid1 (3).mp4',
                'videos/vid1 (4).mp4',
                'videos/vid1 (5).mp4',
                'videos/vid1 (6).mp4',
                'videos/vid1 (1).mp4'
            ],
            name: 'Vibram Gamble Brown',
            price: '$105'
        },
        'tan': {
            videos: [
                'videos/vid1 (3).mp4',
                'videos/vid1 (4).mp4',
                'videos/vid1 (5).mp4',
                'videos/vid1 (6).mp4',
                'videos/vid1 (1).mp4',
                'videos/vid1 (2).mp4'
            ],
            name: 'Vibram Gamble Tan',
            price: '$110'
        },
        'navy': {
            videos: [
                'videos/vid1 (4).mp4',
                'videos/vid1 (5).mp4',
                'videos/vid1 (6).mp4',
                'videos/vid1 (1).mp4',
                'videos/vid1 (2).mp4',
                'videos/vid1 (3).mp4'
            ],
            name: 'Vibram Gamble Navy',
            price: '$115'
        },
        'blue': {
            videos: [
                'videos/vid1 (5).mp4',
                'videos/vid1 (6).mp4',
                'videos/vid1 (1).mp4',
                'videos/vid1 (2).mp4',
                'videos/vid1 (3).mp4',
                'videos/vid1 (4).mp4'
            ],
            name: 'Vibram Gamble Blue',
            price: '$120'
        },
        'pink': {
            videos: [
                'videos/vid1 (6).mp4',
                'videos/vid1 (1).mp4',
                'videos/vid1 (2).mp4',
                'videos/vid1 (3).mp4',
                'videos/vid1 (4).mp4',
                'videos/vid1 (5).mp4'
            ],
            name: 'Vibram Gamble Pink',
            price: '$125'
        }
    };

    // Initialize with first color
    let currentColor = 'black';
    let currentAngle = 0; // First video angle
    
    // Color selection handler
    colorOptions.forEach(color => {
        color.addEventListener('click', function() {
            // Update selected color UI
            document.querySelector('.color-option.selected').classList.remove('selected');
            this.classList.add('selected');
            
            // Get the selected color
            currentColor = this.dataset.color;
            
            // Reset to first angle when color changes
            currentAngle = 0;
            
            // Update the main video
            updateMainVideo();
            
            // Update product information
            updateProductInfo();
            
            // Update thumbnail videos
            updateThumbnails();
        });
    });
    
    // Update the main video display
    function updateMainVideo() {
        if (colorData[currentColor] && colorData[currentColor].videos[currentAngle]) {
            // Clear existing sources
            while (mainVideo.firstChild) {
                mainVideo.removeChild(mainVideo.firstChild);
            }
            
            // Create new source
            const newSource = document.createElement('source');
            newSource.src = colorData[currentColor].videos[currentAngle];
            newSource.type = 'video/mp4';
            mainVideo.appendChild(newSource);
            mainVideo.load();
            mainVideo.play().catch(e => console.log('Autoplay prevented:', e));
        }
    }
    
    // Update product information (name, price)
    function updateProductInfo() {
        if (colorData[currentColor]) {
            // Update product title
            productTitle.textContent = 'Classic Derby ' + currentColor.charAt(0).toUpperCase() + currentColor.slice(1);
            
            // Update style name and price
            styleName.innerHTML = `${colorData[currentColor].name} <span class="style-price">${colorData[currentColor].price}</span>`;
            
            // Update total price
            priceSection.textContent = `$ ${colorData[currentColor].price.replace('$', '')}.-`;
        }
    }
    
    // Update thumbnail videos for the current color
    function updateThumbnails() {
        const thumbnails = document.querySelectorAll('.thumbnail');
        
        thumbnails.forEach((thumb, index) => {
            // Clear existing video
            const videoElement = thumb.querySelector('video');
            if (videoElement) {
                while (videoElement.firstChild) {
                    videoElement.removeChild(videoElement.firstChild);
                }
                
                // Add new source if video exists for this angle
                if (colorData[currentColor] && colorData[currentColor].videos[index]) {
                    const newSource = document.createElement('source');
                    newSource.src = colorData[currentColor].videos[index];
                    newSource.type = 'video/mp4';
                    videoElement.appendChild(newSource);
                    videoElement.load();
                    videoElement.play().catch(e => console.log('Autoplay prevented:', e));
                    
                    // Update data attributes
                    thumb.dataset.videoSet = currentColor;
                    thumb.dataset.angle = (index + 1).toString();
                }
            }
            
            // Update active state
            thumb.classList.remove('active');
            if (index === currentAngle) {
                thumb.classList.add('active');
            }
        });
    }
    
    // Initialize the color selection functionality
    function initializeColorSelection() {
        // Set click event for the first color to ensure it's selected
        if (colorOptions.length > 0) {
            colorOptions[0].classList.add('selected');
        }
        
        // Update all elements with the initial color
        updateMainVideo();
        updateProductInfo();
        updateThumbnails();
    }
    
    // Start the initialization
    initializeColorSelection();
});

// Size Selection Handler
document.addEventListener('DOMContentLoaded', function() {
    const sizeOptions = document.querySelectorAll('.size-option');
    
    sizeOptions.forEach(size => {
        size.addEventListener('click', function() {
            // Remove selected class from all sizes
            document.querySelectorAll('.size-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Add selected class to clicked size
            this.classList.add('selected');
        });
    });
});

// Cart and Favorites Functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.add-to-cart');
    const favoriteBtn = document.querySelector('.favorite-btn');
    
    // Add to Cart
    addToCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const selectedColor = document.querySelector('.color-option.selected').dataset.color;
        const selectedSize = document.querySelector('.size-option.selected').textContent;
        const productName = document.querySelector('.product-title').textContent;
        const price = document.querySelector('.style-price').textContent;
        
        // Here you would typically send this data to your backend
        console.log('Added to cart:', {
            product: productName,
            color: selectedColor,
            size: selectedSize,
            price: price
        });
        
        // Visual feedback
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 500);
        
        // Show confirmation (you might want to use a more elegant notification system)
        alert(`${productName} (${selectedColor}, size ${selectedSize}) added to cart!`);
    });
    
    // Add to Favorites
    favoriteBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const productName = document.querySelector('.product-title').textContent;
        
        // Toggle favorite state
        const isFavorite = this.classList.contains('favorited');
        
        if (isFavorite) {
            this.classList.remove('favorited');
            this.innerHTML = '<i class="far fa-heart"></i>';
            console.log('Removed from favorites:', productName);
        } else {
            this.classList.add('favorited');
            this.innerHTML = '<i class="fas fa-heart"></i>';
            console.log('Added to favorites:', productName);
        }
    });
});

// Expandable Product Details
document.addEventListener('DOMContentLoaded', function() {
    const tabHeaders = document.querySelectorAll('.details-header');
    const tabs = document.querySelectorAll('.tab');
    
    // Initialize all content as hidden
    tabHeaders.forEach(header => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        // Start with content collapsed
        content.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
        
        // Set click handler
        header.addEventListener('click', function() {
            const isHidden = content.style.display === 'none';
            
            // Toggle content visibility
            content.style.display = isHidden ? 'block' : 'none';
            
            // Rotate icon
            icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
    
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and panels
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding panel (but keep its content collapsed)
            const panelId = this.textContent.trim().toLowerCase().replace(/ /g, '-');
            const panel = document.getElementById(panelId);
            panel.classList.add('active');
            
            // Collapse all details when switching tabs
            const headers = panel.querySelectorAll('.details-header');
            headers.forEach(header => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('i');
                content.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            });
        });
    });
    
    // Activate first tab by default but keep its content collapsed
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        const firstPanel = document.querySelector('.tab-panel');
        if (firstPanel) {
            firstPanel.classList.add('active');
        }
    }
});