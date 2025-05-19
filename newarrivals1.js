document.addEventListener('DOMContentLoaded', function() {
    
    const userContainer = document.querySelector('.user-container');
    const userDropdown = document.querySelector('.user-dropdown');
    
    if (userContainer) {[]
      userContainer.addEventListener('click', function(e) {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
        
        
        document.querySelectorAll('.user-dropdown').forEach(dropdown => {
          if (dropdown !== userDropdown && dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
          }
        });
      });
    }
  
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.setAttribute('aria-expanded', navMenu.classList.contains('active'));
      });
    }
  
    
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.user-dropdown')) {
        document.querySelectorAll('.user-dropdown').forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
      
      if (!e.target.closest('.menu-toggle') && !e.target.closest('.nav-menu')) {
        if (navMenu) navMenu.classList.remove('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.user-dropdown').forEach(dropdown => {
          dropdown.classList.remove('active');
        });
        
        if (navMenu) {
          navMenu.classList.remove('active');
          if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  
    
    function handleResize() {
      
      if (window.innerWidth >= 992 && navMenu) {
        navMenu.classList.remove('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  
    window.addEventListener('resize', handleResize);
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('cyclingVideo');
    const videoSources = [
      "images/vid1 (1).mp4",
      "images/vid1 (2).mp4",
      "images/vid1 (3).mp4",
      "images/vid1 (4).mp4",
      "images/vid1 (5).mp4",
      "images/vid1 (6).mp4"
    ];
    
    let currentVideoIndex = 0;
    let isChanging = false; 
    
    function changeVideo() {
      if (isChanging) return;
      isChanging = true;
      
      
      videoElement.classList.add('fade-out');
      
      setTimeout(() => {
        
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        videoElement.src = videoSources[currentVideoIndex];
        
        
        const playPromise = videoElement.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              videoElement.classList.remove('fade-out');
              isChanging = false;
            })
            .catch(e => {
              console.log("Video play error:", e);
              isChanging = false;
            });
        } else {
          
          videoElement.classList.remove('fade-out');
          isChanging = false;
        }
      }, 500); 
    }
    
    
    videoElement.addEventListener('loadeddata', function() {
      
      const nextIndex = (currentVideoIndex + 1) % videoSources.length;
      const nextVideo = new Video();
      nextVideo.src = videoSources[nextIndex];
    });
    
    
    setInterval(changeVideo, 15000);
    
    
    videoElement.addEventListener('ended', changeVideo);
  });


  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      document.querySelector('.nav-menu').classList.remove('active');
    }
  });

  const videoMap = {
    red: "images/vid1 (6).mp4",
    black: "images/vid1 (1).mp4",
    blue: "images/vid1 (3).mp4"
  };

  const colorOptions = document.querySelectorAll('.color-option');
  const video = document.getElementById('productVideo2');
  const videoSource = video.querySelector('source');

  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove 'selected' class from all
      colorOptions.forEach(opt => opt.classList.remove('selected'));

      // Add 'selected' to clicked
      option.classList.add('selected');

      // Get the color
      const color = option.getAttribute('data-color');

      // Change the video source
      const newSrc = videoMap[color];
      videoSource.setAttribute('src', newSrc);
      video.load();
    });
  });

  const TIMER_KEY = "offerEndTime";
  const DEFAULT_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  const timerElement = document.getElementById("discountTimer");

  // Check if we already have a saved end time
  let offerEndTime = localStorage.getItem(TIMER_KEY);

  if (!offerEndTime) {
    
    offerEndTime = new Date().getTime() + DEFAULT_DURATION;
    localStorage.setItem(TIMER_KEY, offerEndTime);
  } else {
    offerEndTime = parseInt(offerEndTime, 10);
  }

  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = offerEndTime - now;

    if (distance <= 0) {
      timerElement.textContent = "Offer expired";
      localStorage.removeItem(TIMER_KEY); 
    }

    const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

    timerElement.textContent = `Offer ends in: ${hours}:${minutes}:${seconds}`;
  };

  updateTimer();
  setInterval(updateTimer, 1000);