document.addEventListener('DOMContentLoaded', () => {
    // *********** FADE-IN ON SCROLL ***********
    
    // Select all project items
    const projectItems = document.querySelectorAll('.project-item');
    
    // Hide them initially
    projectItems.forEach(item => {
      item.classList.add('hidden');
    });
    
    // Create Intersection Observer for fade-in
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    projectItems.forEach(item => {
      observer.observe(item);
    });
    
    // *********** MOBILE MENU TOGGLE ***********
    
    const nav = document.querySelector('.main-nav');
    const header = document.querySelector('.site-header');
    
    // If no toggle button is found, create it
    let toggleBtn = document.querySelector('.menu-toggle');
    if (!toggleBtn) {
      toggleBtn = document.createElement('button');
      toggleBtn.className = 'menu-toggle';
      toggleBtn.innerHTML = '&#9776;'; // Hamburger icon
      header.insertBefore(toggleBtn, nav);
    }
    
    // Toggle nav menu on smaller screens
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  });
  