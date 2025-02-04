document.addEventListener("DOMContentLoaded", function () {
    // Menu Toggle Function
    function toggleMenu() {
        document.body.classList.toggle("open-menu");
        document.querySelector(".menu-toggle").classList.toggle("open");
    }

    // Attach event listener to menu toggle button
    let menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    } else {
        console.error("Menu toggle button not found.");
    }

    // Slideshow Functionality
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].style.opacity = 0; // Hide current slide
        currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
        slides[currentSlide].style.opacity = 1; // Show next slide
    }

    // Show first slide initially
    slides.forEach(slide => (slide.style.opacity = 0));
    if (slides.length > 0) {
        slides[0].style.opacity = 1;
    }

    // Change image every 3 seconds
    setInterval(showNextSlide, 3000);
});
