import platform from '../img/platform.png';
import hills from '../img/hills.png';
import background from '../img/background.png';
import platformSmallTall from '../img/platformSmallTall.png';

import spriteRunLeft from '../img/Yogen run left new.png';
import spriteRunRight from '../img/Yogen run right new.png';
import spriteStandLeft from '../img/standleft.png';
import spriteStandRight from '../img/standright.png';
import spriteJumpLeft from '../img/YogenJumpLeftNew.png';  
import spriteJumpRight from '../img/YogenJumpRightNew.png';  

import hat from '../img/hat.png';
import leftArrowImage from '../img/leftArrow.png';
import rightArrowImage from '../img/rightArrow.png';
import jumpImage from '../img/upArrow.png';


var audio = new Audio('gameaudio2.mp3');
audio.play();
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// Function to resize the canvas
function resizeCanvas() {
    canvas.width = 1024;
    canvas.height = 576;
}

// Initial resize
resizeCanvas();

// Resize the canvas when the window is resized
window.addEventListener('resize', resizeCanvas);

const gravity = 1.5;

class Player {
    constructor() {
        this.speed = 15;
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 0, y: 0 };
        this.width = 66;
        this.height = 150;
        this.frames = 0;
        this.sprites = {
            stand: {
                right: createImage(spriteStandRight),
                left: createImage(spriteStandLeft),
                cropWidth: 341,
                width: (199 / 2) - 3
            },
            run: {
                right: createImage(spriteRunRight),
                left: createImage(spriteRunLeft),
                cropWidth: 341,
                width: (199 / 2) - 3
            },
            jump: {
                right: createImage(spriteJumpRight),
                left: createImage(spriteJumpLeft),
                cropWidth: 341,
                width: (199 / 2) - 3
            }
        };
        this.currentSprite = this.sprites.stand.right;
        this.currentCropWidth = this.sprites.stand.cropWidth;
        this.width = this.sprites.stand.width;
    }

    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    update() {
        this.frames++;
        if (this.frames > 0) this.frames = 0;

        if (
            (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left) &&
            this.frames % 30 === 0
        ) {
            this.frames = 0;
        } else if (
            (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left) &&
            this.frames % 10 === 0
        ) {
            this.frames = 0;
        }

        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }

        platforms.forEach((platform) => {
            if (
                this.position.y + this.height <= platform.position.y &&
                this.position.y + this.height + this.velocity.y >= platform.position.y &&
                this.position.x + this.width >= platform.position.x &&
                this.position.x <= platform.position.x + platform.width
            ) {
                this.velocity.y = 0;
                this.position.y = platform.position.y - this.height;

                // Reset sprite to standing after landing
                if (this.currentSprite === this.sprites.jump.right) {
                    this.currentSprite = this.sprites.stand.right;
                } else if (this.currentSprite === this.sprites.jump.left) {
                    this.currentSprite = this.sprites.stand.left;
                }
            }
        });
    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        };

        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}

class GenericObject {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        };

        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}

class Hat {
    constructor(x, y) {
        this.initialPosition = {
            x,
            y
        };
        this.position = {
            x: this.initialPosition.x,
            y: this.initialPosition.y
        };
        this.width = 80; 
        this.height = 80; 
        this.image = createImage(hat);
        this.collected = false;
    }

    draw() {
        if (!this.collected) {
            c.save(); 
            c.shadowBlur = 20; 
            c.shadowColor = 'white'; 
            c.drawImage(this.image, this.position.x - scrollOffset, this.position.y, this.width, this.height);
            c.restore(); 
        }
    }
}


function createImage(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    return image;
}

let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall);

let player = new Player();
let platforms = [];
let genericObjects = [];
let hatObject = new Hat(15200, 400);
let currentKey;

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
};

let scrollOffset = 0;

function init() {
    platformImage = createImage(platform);

    player = new Player();
    platforms = [
        new Platform({
            x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 8.8 + 300 - 18 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 8.8 + 500 - 18 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 8.8 + 900 - 18 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 14 + 900 - 385 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 14 + 1100 - 385 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 16 + 1300 - 2 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 16 + 1500 - 2 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 16 + 1900 - 2 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 19 + 1680 - 2 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 19 + 1980 - 2 + platformImage.width - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),

        new Platform({
            x: -1,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width - 3,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 2 + 100,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 3 + 300,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 4 + 300 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 5 + 700 - 2,
            y: 470,
            image: platformImage
        }),
        
        new Platform({
            x: platformImage.width * 5 + 750 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 6 + 750 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 7 + 750 - 2,
            y: 470,
            image: platformImage
        }),
        
        new Platform({
            x: platformImage.width * 8 + 750 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width *  + 750 - 2,
            y: 470,
            image: platformImage
        }),

        new Platform({
            x: platformImage.width * 10 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 11 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        
        new Platform({
            x: platformImage.width * 12 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width *  13 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 15 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 16 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        
        new Platform({
            x: platformImage.width * 19 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 20 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 22 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 23 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 24 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 25 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 26 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 27 + 1100 - 2,
            y: 470,
            image: platformImage
        })
       
    ];

    genericObjects = [
        new GenericObject({
            x: -1,
            y: -1,
            image: createImage(background)
        }),
        new GenericObject({
            x: -1,
            y: -1,
            image: createImage(hills)
        })
    ];

    scrollOffset = 0;
}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    genericObjects.forEach(genericObject => {
        genericObject.draw();
    });
    platforms.forEach(platform => {
        platform.draw();
    });
    hatObject.draw();

    drawHomeButton();

    // Sprite Switching
    if (keys.right.pressed && currentKey === 'right' && player.currentSprite !== player.sprites.run.right) {
        player.frames = 1;
        player.currentSprite = player.sprites.run.right;
        player.currentCropWidth = player.sprites.run.cropWidth;
        player.width = player.sprites.run.width;
    } else if (keys.left.pressed && currentKey === 'left' && player.currentSprite !== player.sprites.run.left) {
        player.frames = 1;
        player.currentSprite = player.sprites.run.left;
        player.currentCropWidth = player.sprites.run.cropWidth;
        player.width = player.sprites.run.width;
    } else if (!keys.right.pressed && !keys.left.pressed && player.currentSprite === player.sprites.run.right) {
        player.frames = 1;
        player.currentSprite = player.sprites.stand.right;
        player.currentCropWidth = player.sprites.stand.cropWidth;
        player.width = player.sprites.stand.width;
    } else if (!keys.right.pressed && !keys.left.pressed && player.currentSprite === player.sprites.run.left) {
        player.frames = 1;
        player.currentSprite = player.sprites.stand.left;
        player.currentCropWidth = player.sprites.stand.cropWidth;
        player.width = player.sprites.stand.width;
    }

    // Hat collection check
    if (!hatObject.collected &&
        player.position.x < hatObject.position.x + hatObject.width &&
        player.position.x + player.width > hatObject.position.x &&
        player.position.y < hatObject.position.y + hatObject.height &&
        player.position.y + player.height > hatObject.position.y) {
        hatObject.collected = true;
        showWinScreen();
        console.log('Hat collected!');
    }

    player.update();

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed;
    } else if (keys.left.pressed && player.position.x > 50) {
        player.velocity.x = -player.speed;
    } else {
        player.velocity.x = 0;

        if (keys.right.pressed) {
            scrollOffset += player.speed;
            platforms.forEach(platform => {
                platform.position.x -= player.speed;
            });
            genericObjects.forEach(genericObject => {
                genericObject.position.x -= player.speed * 0.66;
            });
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed;
            platforms.forEach(platform => {
                platform.position.x += player.speed;
            });
            genericObjects.forEach(genericObject => {
                genericObject.position.x += player.speed * 0.66;
            });
        }
    }

    // Check for win condition
    if (
        !hatObject.collected &&
        player.position.x + scrollOffset >= hatObject.position.x &&
        player.position.x + scrollOffset <= hatObject.position.x + hatObject.width
    ) {
        hatObject.collected = true;
        location.replace("win.html");
    }

    // Lose Condition
    if (player.position.y > canvas.height) {
        init();
    }
}

// Function to display the win screen
function showWinScreen() {
    const winScreen = document.getElementById('winScreen');
    winScreen.style.display = 'block';
}




function drawHomeButton() {
    // Draw transparent yellow circle
    c.save();
    c.globalAlpha = 0.3; // Set transparency level
    c.fillStyle = 'yellow';
    c.beginPath();
    c.arc(50, 50, 30, 0, Math.PI * 2);
    c.fill();
    c.closePath();
    c.restore();

    // Draw text inside the circle
    c.fillStyle = 'black';
    c.font = 'bold 20px Arial';
    c.textAlign = 'center';
    c.fillText('Home', 50, 55);
}

// Event listener to handle clicks on Home button
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if click is inside the home button circle
    if (Math.sqrt((mouseX - 50) ** 2 + (mouseY - 50) ** 2) <= 30) {
        window.location.href = 'graduation.html';
    }
});

// Start the animation loop
animate();

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65: // 'A' key
            console.log('left');
            keys.left.pressed = true;
            currentKey = 'left';
            break;

        case 68: // 'D' key
            console.log('right');
            keys.right.pressed = true;
            currentKey = 'right';
            break;

        case 87: // 'W' key
            console.log('up');
            player.velocity.y -= 25; // Adjust jump velocity for better control
            if (currentKey === 'right') {
                player.currentSprite = player.sprites.jump.right;
            } else if (currentKey === 'left') {
                player.currentSprite = player.sprites.jump.left;
            }
            break;
    }
});

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65: // 'A' key
            console.log('left');
            keys.left.pressed = false;
            player.currentSprite = player.sprites.stand.left;
            player.currentCropWidth = player.sprites.stand.cropWidth;
            player.width = player.sprites.stand.width;
            break;

        case 68: // 'D' key
            console.log('right');
            keys.right.pressed = false;
            player.currentSprite = player.sprites.stand.right;
            player.currentCropWidth = player.sprites.stand.cropWidth;
            player.width = player.sprites.stand.width;
            break;

        case 87: // 'W' key
            console.log('up');
            break;
    }

});



function createTouchControl(id, imageSrc) {
    const control = document.createElement('div');
    control.id = id;
    control.className = 'touch-control'; // Add a class for styling
    const image = new Image();
    image.src = imageSrc;
    control.style.backgroundImage = `url(${imageSrc})`;
    control.style.backgroundSize = 'cover';
    document.body.appendChild(control);
    return control;
}

const leftControl = createTouchControl('left-control', leftArrowImage);
const rightControl = createTouchControl('right-control', rightArrowImage);
const jumpControl = createTouchControl('jump-control', jumpImage);

// Apply common styles initially
const touchControlStyles = {
    position: 'absolute',
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // This line is optional if you want to keep some background color behind the image
    borderRadius: '50%',
    zIndex: '10',
    touchAction: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    textAlign: 'center'
};

// Function to set styles for controls
function setControlStyles(control, styles) {
    for (let style in styles) {
        control.style[style] = styles[style];
    }
}

// Position controls
function positionControls() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isLandscape = screenWidth > screenHeight;

    // Adjust positions based on screen size and orientation
    if (screenWidth >= 768 && screenWidth <= 1024) {
        if (isLandscape) {
            // Tablet in landscape mode
            setControlStyles(leftControl, {
                ...touchControlStyles,
                bottom: '20%', // Move upwards more for landscape
                left: '20px'
            });

            setControlStyles(rightControl, {
                ...touchControlStyles,
                bottom: '20%', // Move upwards more for landscape
                left: '100px'
            });

            setControlStyles(jumpControl, {
                ...touchControlStyles,
                bottom: '20%', // Move upwards more for landscape
                right: '20px'
            });
        } else {
            // Tablet in portrait mode
            setControlStyles(leftControl, {
                ...touchControlStyles,
                bottom: '60px', // Move upwards for better visibility
                left: '20px'
            });

            setControlStyles(rightControl, {
                ...touchControlStyles,
                bottom: '60px', // Move upwards for better visibility
                left: '100px'
            });

            setControlStyles(jumpControl, {
                ...touchControlStyles,
                bottom: '60px', // Move upwards for better visibility
                right: '20px'
            });
        }
    } else {
        // Smaller screens (phones)
        const controlSize = screenWidth <= 400 ? '50px' : '60px';
        const fontSize = screenWidth <= 400 ? '16px' : '18px';

        setControlStyles(leftControl, {
            ...touchControlStyles,
            bottom: '10%',
            left: '5%',
            width: controlSize,
            height: controlSize,
            fontSize: fontSize
        });

        setControlStyles(rightControl, {
            ...touchControlStyles,
            bottom: '10%',
            left: `calc(10% + ${controlSize})`,
            width: controlSize,
            height: controlSize,
            fontSize: fontSize
        });

        setControlStyles(jumpControl, {
            ...touchControlStyles,
            bottom: '10%',
            right: '5%',
            width: controlSize,
            height: controlSize,
            fontSize: fontSize
        });
    }

    // Show or hide controls based on screen width
    if (screenWidth > 1024) {
        leftControl.style.display = 'none';
        rightControl.style.display = 'none';
        jumpControl.style.display = 'none';
    } else {
        leftControl.style.display = 'flex';
        rightControl.style.display = 'flex';
        jumpControl.style.display = 'flex';
    }
}

// Call positionControls initially and on window resize
positionControls();
window.addEventListener('resize', positionControls);

// Add touch event listeners (assuming these are defined elsewhere)
leftControl.addEventListener('touchstart', () => {
    keys.left.pressed = true;
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
});

leftControl.addEventListener('touchend', () => {
    keys.left.pressed = false;
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
});

rightControl.addEventListener('touchstart', () => {
    keys.right.pressed = true;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
});

rightControl.addEventListener('touchend', () => {
    keys.right.pressed = false;
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
});

jumpControl.addEventListener('touchstart', () => {
    player.velocity.y -= 25;
});
