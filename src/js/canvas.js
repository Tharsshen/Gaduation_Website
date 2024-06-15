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
        }),
        new Platform({
            x: platformImage.width * 28 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 29 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 30 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 31 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 32 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 33 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 34 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 35 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 36 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 37 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 38 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 39 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 40 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 41 + 1100 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 42 + 1100 - 2,
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

    hatObject.draw(); // Draw the hat

    player.update();

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed;
    } else if (
        (keys.left.pressed && player.position.x > 100) ||
        (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
    ) {
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

    // win condition
    if (scrollOffset > platformImage.width * 5 + 300 - 2) {
        console.log('you win');
    }

    // lose condition
    if (player.position.y > canvas.height) {
        console.log('you lose');
        init();
    }

    // Hat collision detection
    if (
        !hatObject.collected &&
        player.position.x < hatObject.position.x + hatObject.width &&
        player.position.x + player.width > hatObject.position.x &&
        player.position.y < hatObject.position.y + hatObject.height &&
        player.position.y + player.height > hatObject.position.y
    ) {
        hatObject.collected = true;
        console.log('Hat collected!');
    }
}

// Handle touch events for mobile controls
function handleTouchStart(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;

    if (touchX < canvas.width / 3) {
        // Touching the left side
        keys.left.pressed = true;
        keys.right.pressed = false;
    } else if (touchX > (2 * canvas.width) / 3) {
        // Touching the right side
        keys.right.pressed = true;
        keys.left.pressed = false;
    } else {
        // Touching the middle
        player.velocity.y = -20; // Jump
    }
}

function handleTouchEnd(event) {
    event.preventDefault();
    keys.left.pressed = false;
    keys.right.pressed = false;
}

// Add touch event listeners
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchend', handleTouchEnd);

init();
animate();

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = true;
            break;

        case 83:
            console.log('down');
            break;

        case 68:
            keys.right.pressed = true;
            break;

        case 87:
            player.velocity.y -= 20;
            break;
    }
});

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = false;
            break;

        case 83:
            console.log('down');
            break;

        case 68:
            keys.right.pressed = false;
            break;

        case 87:
            console.log('up');
            break;
    }
});
