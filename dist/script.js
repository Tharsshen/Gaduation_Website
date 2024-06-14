// script.js

// Scroll Animations
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Memory Card Game
document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        { name: 'A', id: 1 },
        { name: 'A', id: 2 },
        { name: 'B', id: 3 },
        { name: 'B', id: 4 },
        { name: 'C', id: 5 },
        { name: 'C', id: 6 },
        { name: 'D', id: 7 },
        { name: 'D', id: 8 }
    ];

    const gameContainer = document.getElementById('game-container');
    let firstCard, secondCard;
    let hasFlippedCard = false;
    let lockBoard = false;

    // Shuffle cards
    cardsArray.sort(() => 0.5 - Math.random());

    // Create cards
    cardsArray.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name;

        const front = document.createElement('div');
        front.classList.add('front');
        front.textContent = '?';

        const back = document.createElement('div');
        back.classList.add('back');
        back.textContent = item.name;

        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
});

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
