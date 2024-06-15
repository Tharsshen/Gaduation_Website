// Scroll Animations
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Memory Card Game - Disabling for mobile version
// Since the memory card game might not be suitable for smaller screens, we'll skip it for now.

// Popup for Gift Card
document.addEventListener('DOMContentLoaded', () => {
    const congratsBtn = document.getElementById('congrats-btn');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    congratsBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// Send Invitation via WhatsApp
document.getElementById('invitation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = `Hi ${name}, you are invited to Yogendran Govikrishnan's graduation ceremony!`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});

// Gallery Slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Optionally, add auto slide functionality
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds
});

