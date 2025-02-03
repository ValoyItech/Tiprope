function toggleMenu() {
    var menu = document.getElementById("menu-overlay");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function generateGallery() {
    let galleryContainer = document.querySelector(".gallery-container");
    for (let i = 1; i <= 10; i++) {
        let img = document.createElement("img");
        img.src = `Images/m${i}.jpg`;
        img.alt = `Project ${i}`;
        galleryContainer.appendChild(img);
    }
}
function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    // Toggle the visibility of the mobile menu
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block"; // Show the menu
    } else {
        menu.style.display = "none"; // Hide the menu
    }
}
function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
}

// Close the mobile menu when a link is clicked or when user clicks anywhere outside the menu
function closeMenu() {
    document.getElementById('mobile-menu').style.display = 'none';
}

// Close the mobile menu when user clicks anywhere outside the menu
document.addEventListener('click', function(event) {
    var menu = document.getElementById('mobile-menu');
    var menuIcon = document.querySelector('.menu-icon');
    // Check if the click is outside the mobile menu and the menu icon
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = 'none'; // Hide the menu
    }
});
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) {
        document.getElementById("desktop-menu").style.display = "flex";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slideshow-track");
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function moveSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSlidePosition();
    }

    function jumpToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
    }

    prevBtn.addEventListener("click", () => moveSlide(-1));
    nextBtn.addEventListener("click", () => moveSlide(1));
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => jumpToSlide(index));
    });

    updateSlidePosition(); // Initialize first slide position
});
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slideshow-track");
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    
    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, 5000); // Auto-slide every 5s

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    function jumpToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
        resetAutoSlide();
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    nextButton.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            jumpToSlide(index);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll("h2, h3, p, img, .name-address, .contact-info, .slideshow-track .slide, footer");

    function revealOnScroll() {
        animatedElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.style.animationPlayState = "running";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});