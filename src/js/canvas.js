import platform from '../img/platformnew.png';
import hills from '../img/hills.png';
import background from '../img/backgroundbrown.png';
import platformSmallTall from '../img/smalltallnew.png';

import spriteRunLeft from '../img/spriteRunLeft.png';
import spriteRunRight from '../img/spriteRunRight.png';
import spriteStandLeft from '../img/yogenspritestandleft.png';
import spriteStandRight from '../img/yogenspritestandright.png';
import hat from '../img/hat.png';

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
        this.speed = 10;
        this.position = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 0
        };

        this.width = 66;
        this.height = 150;

        this.image = createImage(spriteStandRight);
        this.frames = 0;
        this.sprites = {
            stand: {
                right: createImage(spriteStandRight),
                left: createImage(spriteStandLeft),
                cropWidth: 177,
                width: (127.875 / 2) - 10
            },
            run: {
                right: createImage(spriteRunRight),
                left: createImage(spriteRunLeft),
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
        if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;
        else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;

        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Apply gravity if player is within canvas height
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }

        // Platform collision detection
        platforms.forEach(platform => {
            if (
                this.position.y + this.height <= platform.position.y &&
                this.position.y + this.height + this.velocity.y >= platform.position.y &&
                this.position.x + this.width >= platform.position.x &&
                this.position.x <= platform.position.x + platform.width
            ) {
                this.velocity.y = 0;
                this.position.y = platform.position.y - this.height;
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
        this.width = 80; // Adjust width as needed
        this.height = 80; // Adjust height as needed
        this.image = createImage(hat);
        this.collected = false;
    }

    draw() {
        if (!this.collected) {
            c.save(); // Save the current state
            c.shadowBlur = 20; // Set the blur level
            c.shadowColor = 'white'; // Set the shadow color
            c.drawImage(this.image, this.position.x - scrollOffset, this.position.y, this.width, this.height);
            c.restore(); // Restore the state
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
            x: platformImage.width * 4 + 750 - 2,
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
            x: platformImage.width * 9 + 750 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 10 + 750 - 2,
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
            x: platformImage.width * 13 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 14 + 1100 - 2,
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
            x: platformImage.width * 17 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 18 + 1100 - 2,
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
            x: platformImage.width * 21 + 1100 - 2,
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

// Add touch controls for mobile devices
function createTouchControl(id, direction) {
    const control = document.createElement('div');
    control.id = id;
    control.style.position = 'fixed';
    control.style.width = '80px';
    control.style.height = '80px';
    control.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    control.style.borderRadius = '50%';
    control.style.zIndex = '10';
    control.style.touchAction = 'none';
    control.style.display = 'flex';
    control.style.alignItems = 'center';
    control.style.justifyContent = 'center';
    control.style.color = 'white';
    control.style.fontSize = '24px';
    control.innerText = direction;
    document.body.appendChild(control);
    return control;
}

const leftControl = createTouchControl('left-control', '←');
const rightControl = createTouchControl('right-control', '→');
const jumpControl = createTouchControl('jump-control', '↑');

// Position the controls
leftControl.style.bottom = '20px';
leftControl.style.left = '20px';
rightControl.style.bottom = '20px';
rightControl.style.left = '120px';
jumpControl.style.bottom = '120px';
jumpControl.style.left = '70px';

// Add touch event listeners
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
    player.velocity.y -= 25;
});