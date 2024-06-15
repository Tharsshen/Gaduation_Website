/* Base Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    color: white;
    background-color: #1a1a1a;
    overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Header */
header {
    background-color: orange;
    color: black;
    padding: 20px 0;
    text-align: center;
}

header .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
}

header h1 {
    margin: 0;
    font-size: 2.5em;
}

header p {
    margin: 10px 0 0;
    font-size: 1.2em;
}

/* Video Container */
.video-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: calc(100% - 20px); /* Adjusting width to compensate for padding */
    margin: 30px auto;
    padding: 0 20px;
}

.video-container video {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    margin-left: -22px; /* Move the video to the left by 10px */
}

/* Sections */
section {
    padding: 50px 20px;
    margin: 20px 0;
    background-color: #333;
    border-radius: 8px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

section .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
}

h2 {
    color: orange;
    text-align: center;
    margin-bottom: 20px;
}

#intro, #testimonials, #invitation {
    background-color: #444;
}

/* Gallery Section */
#gallery .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

#gallery img {
    width: 100%;
    border-radius: 8px;
}

/* Form Styles */
form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
}

label, input, button {
    margin: 10px 0;
}

input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    background-color: orange;
    border: none;
    padding: 10px;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
}

button:hover {
    background-color: darkorange;
}

/* Testimonial */
.testimonial {
    background-color: #555;
    padding: 20px;
    border-radius: 8px;
    margin: 10px 0;
}

/* Footer */
footer {
    background-color: #222;
    color: #ccc;
    text-align: center;
    padding: 20px 0;
}

/* Card Styles */
.card {
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    position: relative;
    transform: scale(1);
    transition: transform 0.3s;
}

.card.flip {
    transform: rotateY(180deg);
}

.card .front, .card .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card .back {
    background-color: orange;
    color: white;
    transform: rotateY(180deg);
}

.card .front {
    background-color: white;
    color: black;
}

/* Gift Card */
.gift-card {
    background-color: #444;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.gift-card-content {
    position: relative;
    z-index: 2;
}

.gift-card .icon {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
}

.gift-card .gift-image {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
}

.animated-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: orange;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.animated-btn:hover {
    transform: scale(1.1);
}

/* Popup */
.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: #fff;
    color: black;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    max-width: 500px;
    width: 80%;
    animation: popupFadeIn 0.5s;
}

@keyframes popupFadeIn {
    from {
        transform: scale(0.5);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 24px;
    color: #333;
}

/* Slider */
.slider {
    position: relative;
    max-width: 800px;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    height: 500px;
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
    height: 100%;
    transition: opacity 0.5s ease-in-out;
    object-fit: cover;
}

.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* Interactive Game */
#interactive-game {
    background-image: url('Pics/game background.png');
    background-size: 80%; /* Shrink the background image to 80% of its original size */
    background-position: center;
    background-repeat: no-repeat; /* Prevent background image from repeating */
    height: 600px;
    margin: 20px 0;
    border-radius: 8px;
}

#interactive-game .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.play-btn {
    display: block;
    width: 300px;
    height: 100px;
    background-color: red;
    color: black;
    border-radius: 40px;
    font-size: 60px;
    text-align: center;
    line-height: 100px;
    text-decoration: none;
    position: relative;
    top: 150px;
    left: -10px; /* Move the button 10px to the left */
    border: 10px solid black;
}

.play-btn:hover {
    background-color: darkred;
}

.play-text {
    font-family: Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
}

.vt323-regular {
    font-family: "VT323", monospace;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    header h1 {
        font-size: 2em;
    }

    header p {
        font-size: 1em;
    }

    .video-container {
        width: 100vw; /* Full width of the viewport */
        margin: 0 -20px; /* Negative margin to stick to the left side */
        padding: 0 10px;
    }

    .video-container video {
        margin-left: 20px; /* Move the video 20px to the right */
    }

    section {
        padding: 30px 10px;
    }

    form {
        max-width: 300px;
    }

    .card {
        width: 80px;
        height: 80px;
        font-size: 20px;
    }

    .play-btn {
        width: 250px;
        height: 80px;
        font-size: 50px;
        line-height: 80px;
    }
}

@media (max-width: 768px) {
    header h1 {
        font-size: 1.8em;
    }

    header p {
        font-size: 0.9em;
    }

    .video-container {
        width: 100vw; /* Full width of the viewport */
        margin: 0 -20px; /* Negative margin to stick to the left side */
        padding: 0 5px;
    }

    .video-container video {
        margin-left: 20px; /* Move the video 20px to the right */
    }

    section {
        padding: 20px 5px;
    }

    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    form {
        max-width: 250px;
    }

    .card {
        width: 70px;
        height: 70px;
        font-size: 18px;
    }

    .play-btn {
        width: 200px;
        height: 70px;
        font-size: 40px;
        line-height: 70px;
    }
}

@media (max-width: 480px) {
    header h1 {
        font-size: 1.5em;
    }

    header p {
        font-size: 0.8em;
    }

    .video-container {
        width: 100vw; /* Full width of the viewport */
        margin: 0 -20px; /* Negative margin to stick to the left side */
        padding: 0 2px;
        margin: 10px auto;
    }

    .video-container video {
        margin-left: 20px; /* Move the video 20px to the right */
    }

    section {
        padding: 10px 2px;
    }

    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }

    form {
        max-width: 200px;
    }

    .card {
        width: 60px;
        height: 60px;
        font-size: 16px;
    }

    .play-btn {
        width: 150px;
        height: 60px;
        font-size: 30px;
        line-height: 60px;
    }
}
