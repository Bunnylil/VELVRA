document.addEventListener('DOMContentLoaded', function() {
    // Load product data from localStorage
    const productData = JSON.parse(localStorage.getItem('currentProduct'));
    
    if (productData) {
        // Initialize the page with the product data
        initializeProductPage(productData);
    } else {
        // Fallback to default product if none is selected
        initializeDefaultProduct();
    }

    // Initialize all interactive components
    initializeColorSelection();
    initializeSizeSelection();
    initializeCartAndFavorites();
    initializeExpandableDetails();
    initializeThumbnailClickHandlers();
});

function initializeProductPage(product) {
    // Set basic product information
    document.querySelector('.art-number').textContent = `ART ${product.id.toString().padStart(3, '0')}`;
    document.querySelector('.product-title').textContent = product.name;
    
    // Set style and price (using first color by default)
    const firstColor = product.colors[0];
    const firstColorName = firstColor.charAt(0).toUpperCase() + firstColor.slice(1);
    document.querySelector('.style-name').innerHTML = 
        `${product.brand} ${product.model} <span class="style-price">$${product.price}</span>`;
    document.querySelector('.total-price').textContent = `$ ${product.price}.-`;

    // Set product details
    const detailsContent = document.querySelector('#product-details .details-content');
    detailsContent.innerHTML = '';
    product.details.forEach(detail => {
        detailsContent.innerHTML += `<p>${detail}</p>`;
    });

    // Initialize size options
    const sizeOptionsContainer = document.querySelector('.size-options');
    sizeOptionsContainer.innerHTML = '';
    product.sizes.forEach(size => {
        sizeOptionsContainer.innerHTML += `
            <div class="size-option" data-size="${size}">${size}</div>
        `;
    });

    // Initialize color options
    const colorOptionsContainer = document.querySelector('.color-options');
    colorOptionsContainer.innerHTML = '';
    
    product.colors.forEach((color, index) => {
        const colorName = color.charAt(0).toUpperCase() + color.slice(1);
        colorOptionsContainer.innerHTML += `
            <div class="color-option ${color} ${index === 0 ? 'selected' : ''}" 
                 data-color="${color}" 
                 data-video-set="${index + 1}" 
                 title="${colorName}">
                <div class="color-swatch"></div>
            </div>
        `;
    });

    // Initialize video thumbnails for the first color
    if (product.videosets && product.videosets[firstColor]) {
        updateVideoThumbnails(product.videosets[firstColor]);
    } else {
        // Fallback to default videos if none specified
        const defaultVideos = [
            'videos/default1.mp4',
            'videos/default2.mp4',
            'videos/default3.mp4',
            'videos/default4.mp4',
            'videos/default5.mp4',
            'videos/default6.mp4'
        ];
        updateVideoThumbnails(defaultVideos);
    }

    // Initialize size selection after creating the elements
    initializeSizeSelection();
}

function initializeDefaultProduct() {
    // Fallback product data if none is selected
    const defaultProduct = {
        id: '001',
        name: 'Classic Derby',
        brand: 'Vibram',
        model: 'Gamble',
        price: 95,
        colors: ['black', 'brown'],
        sizes: [38, 39, 40, 41, 42],
        videosets: {
            'black': [
                'videos/vid1 (1).mp4',
                'videos/vid1 (2).mp4',
                'videos/vid1 (3).mp4',
                'videos/vid1 (4).mp4',
                'videos/vid1 (5).mp4',
                'videos/vid1 (6).mp4'
            ],
            'brown': [
                'videos/vid2 (1).mp4',
                'videos/vid2 (2).mp4',
                'videos/vid2 (3).mp4',
                'videos/vid2 (4).mp4',
                'videos/vid2 (5).mp4',
                'videos/vid2 (6).mp4'
            ]
        },
        details: [
            "Premium leather upper for durability and style",
            "Vibram outsole for superior traction",
            "Padded collar for ankle support",
            "Breathable mesh lining",
            "Handcrafted with attention to detail",
            "Available in multiple colors"
        ]
    };

    initializeProductPage(defaultProduct);
}

function updateVideoThumbnails(videos) {
    const thumbnailsContainer = document.querySelector('.video-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    videos.forEach((video, index) => {
        thumbnailsContainer.innerHTML += `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" 
                 data-angle="${index + 1}" 
                 data-video-set="1">
                <video autoplay loop muted playsinline>
                    <source src="${video}" type="video/mp4">
                </video>
            </div>
        `;
    });
    
    // Set the main video to the first thumbnail
    if (videos.length > 0) {
        const mainVideo = document.getElementById('mainVideo');
        mainVideo.innerHTML = `<source src="${videos[0]}" type="video/mp4">`;
        mainVideo.load();
        mainVideo.play().catch(e => console.log('Autoplay prevented:', e));
    }

    // Update pagination dots
    updatePaginationDots(videos.length);
}

function updatePaginationDots(count) {
    const dotsContainer = document.querySelector('.pagination-dots');
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        dotsContainer.innerHTML += `
            <span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
        `;
    }
}

function initializeThumbnailClickHandlers() {
    document.addEventListener('click', function(e) {
        // Handle thumbnail clicks
        if (e.target.closest('.thumbnail')) {
            const thumbnail = e.target.closest('.thumbnail');
            const videoSrc = thumbnail.querySelector('video source').src;
            const mainVideo = document.getElementById('mainVideo');
            
            // Update active thumbnail
            document.querySelector('.thumbnail.active').classList.remove('active');
            thumbnail.classList.add('active');
            
            // Update main video
            mainVideo.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
            mainVideo.load();
            mainVideo.play().catch(e => console.log('Autoplay prevented:', e));
            
            // Update active dot
            const index = Array.from(document.querySelectorAll('.thumbnail')).indexOf(thumbnail);
            updateActiveDot(index);
        }
        
        // Handle dot clicks
        if (e.target.classList.contains('dot')) {
            const index = parseInt(e.target.dataset.index);
            const thumbnails = document.querySelectorAll('.thumbnail');
            
            if (thumbnails[index]) {
                // Simulate click on the corresponding thumbnail
                thumbnails[index].click();
            }
        }
    });
}

function updateActiveDot(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function initializeColorSelection() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.color-option')) {
            const colorOption = e.target.closest('.color-option');
            const selectedColor = colorOption.dataset.color;
            
            // Update selected color UI
            document.querySelector('.color-option.selected').classList.remove('selected');
            colorOption.classList.add('selected');
            
            // Get product data
            const productData = JSON.parse(localStorage.getItem('currentProduct')) || {};
            
            // Update the main video and thumbnails if videos exist for this color
            if (productData.videosets && productData.videosets[selectedColor]) {
                updateVideoThumbnails(productData.videosets[selectedColor]);
            }
            
            // Update product information
            const colorName = selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1);
            document.querySelector('.product-title').textContent = `${productData.name} ${colorName}`;
            
            // For demo purposes, we'll adjust the price based on color
            const priceAdjustments = {
                'black': 0,
                'brown': 10,
                'tan': 15,
                'navy': 20,
                'blue': 25,
                'pink': 30
            };
            const adjustedPrice = (productData.price || 95) + (priceAdjustments[selectedColor] || 0);
            
            document.querySelector('.style-name').innerHTML = 
                `${productData.brand} ${productData.model} ${colorName} <span class="style-price">$${adjustedPrice}</span>`;
            document.querySelector('.total-price').textContent = `$ ${adjustedPrice}.-`;
        }
    });
}

function initializeSizeSelection() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('size-option')) {
            // Remove selected class from all sizes
            document.querySelectorAll('.size-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Add selected class to clicked size
            e.target.classList.add('selected');
        }
    });
    
    // Select the middle size by default (or first if only one)
    const sizeOptions = document.querySelectorAll('.size-option');
    if (sizeOptions.length > 0) {
        const defaultSizeIndex = Math.floor(sizeOptions.length / 2);
        sizeOptions[defaultSizeIndex].classList.add('selected');
    }
}

function initializeCartAndFavorites() {
    const addToCartBtn = document.querySelector('.add-to-cart');
    const favoriteBtn = document.querySelector('.favorite-btn');
    
    addToCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const productData = JSON.parse(localStorage.getItem('currentProduct')) || {};
        const selectedColor = document.querySelector('.color-option.selected').dataset.color;
        const selectedSize = document.querySelector('.size-option.selected').textContent;
        const productName = document.querySelector('.product-title').textContent;
        const price = document.querySelector('.style-price').textContent;
        
        // Here you would typically send this data to your backend
        console.log('Added to cart:', {
            productId: productData.id,
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
        
        // Show confirmation
        alert(`${productName} (${selectedColor}, size ${selectedSize}) added to cart!`);
    });
    
    favoriteBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const productData = JSON.parse(localStorage.getItem('currentProduct')) || {};
        const productName = productData.name || 'Product';
        
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
}

function initializeExpandableDetails() {
    document.querySelectorAll('.details-header').forEach(header => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        // Start with content collapsed
        content.style.display = 'none';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
        
        header.addEventListener('click', function() {
            const isHidden = content.style.display === 'none';
            
            // Toggle content visibility
            content.style.display = isHidden ? 'block' : 'none';
            
            // Toggle icon
            if (isHidden) {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        });
    });
    
    // Activate first tab by default
    const firstTabPanel = document.querySelector('.tab-panel');
    if (firstTabPanel) {
        firstTabPanel.classList.add('active');
    }
}