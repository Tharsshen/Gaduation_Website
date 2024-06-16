/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/backgroundbrown.png":
/*!*************************************!*\
  !*** ./src/img/backgroundbrown.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "45740976a3d5f7801a7cebba1fa8c29f.png");

/***/ }),

/***/ "./src/img/hat.png":
/*!*************************!*\
  !*** ./src/img/hat.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a167283e1e6c613bb25aea6e27c12d6.png");

/***/ }),

/***/ "./src/img/hillsnew.png":
/*!******************************!*\
  !*** ./src/img/hillsnew.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9fd18a569cc3e581e020de445b91d09a.png");

/***/ }),

/***/ "./src/img/platformnew.png":
/*!*********************************!*\
  !*** ./src/img/platformnew.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c6d9fb4fbf57e0f1ec138ad375e29647.png");

/***/ }),

/***/ "./src/img/smalltallnew.png":
/*!**********************************!*\
  !*** ./src/img/smalltallnew.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "52201c3f356037f9ceaae260454ddaf9.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/yogenspritestandleft.png":
/*!******************************************!*\
  !*** ./src/img/yogenspritestandleft.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cd45cfd8b638d6114c2e0d9855b48de5.png");

/***/ }),

/***/ "./src/img/yogenspritestandright.png":
/*!*******************************************!*\
  !*** ./src/img/yogenspritestandright.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4b28bbff092529ac883fa19e7aa5623e.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platformnew_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platformnew.png */ "./src/img/platformnew.png");
/* harmony import */ var _img_hillsnew_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hillsnew.png */ "./src/img/hillsnew.png");
/* harmony import */ var _img_backgroundbrown_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/backgroundbrown.png */ "./src/img/backgroundbrown.png");
/* harmony import */ var _img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/smalltallnew.png */ "./src/img/smalltallnew.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_yogenspritestandleft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/yogenspritestandleft.png */ "./src/img/yogenspritestandleft.png");
/* harmony import */ var _img_yogenspritestandright_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/yogenspritestandright.png */ "./src/img/yogenspritestandright.png");
/* harmony import */ var _img_hat_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/hat.png */ "./src/img/hat.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d'); // Function to resize the canvas

function resizeCanvas() {
  canvas.width = 1024;
  canvas.height = 576;
} // Initial resize


resizeCanvas(); // Resize the canvas when the window is resized

window.addEventListener('resize', resizeCanvas);
var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

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
    this.image = createImage(_img_yogenspritestandright_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_yogenspritestandright_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_img_yogenspritestandleft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 177,
        width: 127.875 / 2 - 10
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 341,
        width: 199 / 2 - 3
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
    this.width = this.sprites.stand.width;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      this.frames++;
      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y; // Apply gravity if player is within canvas height

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } // Platform collision detection


      platforms.forEach(function (platform) {
        if (_this.position.y + _this.height <= platform.position.y && _this.position.y + _this.height + _this.velocity.y >= platform.position.y && _this.position.x + _this.width >= platform.position.x && _this.position.x <= platform.position.x + platform.width) {
          _this.velocity.y = 0;
          _this.position.y = platform.position.y - _this.height;
        }
      });
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var Hat = /*#__PURE__*/function () {
  function Hat(x, y) {
    _classCallCheck(this, Hat);

    this.initialPosition = {
      x: x,
      y: y
    };
    this.position = {
      x: this.initialPosition.x,
      y: this.initialPosition.y
    };
    this.width = 80; // Adjust width as needed

    this.height = 80; // Adjust height as needed

    this.image = createImage(_img_hat_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
    this.collected = false;
  }

  _createClass(Hat, [{
    key: "draw",
    value: function draw() {
      if (!this.collected) {
        c.save(); // Save the current state

        c.shadowBlur = 20; // Set the blur level

        c.shadowColor = 'white'; // Set the shadow color

        c.drawImage(this.image, this.position.x - scrollOffset, this.position.y, this.width, this.height);
        c.restore(); // Restore the state
      }
    }
  }]);

  return Hat;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platformnew_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var hatObject = new Hat(15200, 400);
var currentKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platformImage = createImage(_img_platformnew_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 8.8 + 300 - 18 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 8.8 + 500 - 18 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 8.8 + 900 - 18 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 14 + 900 - 385 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 14 + 1100 - 385 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 16 + 1300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 16 + 1500 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 16 + 1900 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 19 + 1680 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 19 + 1980 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_smalltallnew_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 700 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 750 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 750 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 750 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 + 750 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * +750 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 10 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 12 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 13 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 15 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 16 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 19 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 20 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 22 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 23 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 24 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 25 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 26 + 1100 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 27 + 1100 - 2,
    y: 470,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_backgroundbrown_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hillsnew_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  hatObject.draw();
  drawHomeButton(); // Sprite Switching

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
  } // Hat collection check


  if (!hatObject.collected && player.position.x < hatObject.position.x + hatObject.width && player.position.x + player.width > hatObject.position.x && player.position.y < hatObject.position.y + hatObject.height && player.position.y + player.height > hatObject.position.y) {
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
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  } // Check for win condition


  if (!hatObject.collected && player.position.x + scrollOffset >= hatObject.position.x && player.position.x + scrollOffset <= hatObject.position.x + hatObject.width) {
    hatObject.collected = true;
    location.replace("win.html");
  } // Lose Condition


  if (player.position.y > canvas.height) {
    init();
  }
} // Function to display the win screen


function showWinScreen() {
  var winScreen = document.getElementById('winScreen');
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
  c.restore(); // Draw text inside the circle

  c.fillStyle = 'black';
  c.font = 'bold 20px Arial';
  c.textAlign = 'center';
  c.fillText('Home', 50, 55);
} // Event listener to handle clicks on Home button


canvas.addEventListener('click', function (event) {
  var rect = canvas.getBoundingClientRect();
  var mouseX = event.clientX - rect.left;
  var mouseY = event.clientY - rect.top; // Check if click is inside the home button circle

  if (Math.sqrt(Math.pow(mouseX - 50, 2) + Math.pow(mouseY - 50, 2)) <= 30) {
    window.location.href = 'graduation.html';
  }
}); // Start the animation loop

animate();
addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      // 'A' key
      console.log('left');
      keys.left.pressed = true;
      currentKey = 'left';
      break;

    case 68:
      // 'D' key
      console.log('right');
      keys.right.pressed = true;
      currentKey = 'right';
      break;

    case 87:
      // 'W' key
      console.log('up');
      player.velocity.y -= 25; // Adjust jump velocity for better control

      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      // 'A' key
      console.log('left');
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    case 68:
      // 'D' key
      console.log('right');
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    case 87:
      // 'W' key
      console.log('up');
      break;
  }
}); // Add touch controls for mobile devices

function createTouchControl(id, direction) {
  var control = document.createElement('div');
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

var leftControl = createTouchControl('left-control', '←');
var rightControl = createTouchControl('right-control', '→');
var jumpControl = createTouchControl('jump-control', '↑'); // Position the controls

leftControl.style.bottom = '20px';
leftControl.style.left = '20px';
rightControl.style.bottom = '20px';
rightControl.style.left = '120px';
jumpControl.style.bottom = '120px';
jumpControl.style.left = '70px'; // Add touch event listeners

leftControl.addEventListener('touchstart', function () {
  keys.left.pressed = true;
  player.currentSprite = player.sprites.run.left;
  player.currentCropWidth = player.sprites.run.cropWidth;
  player.width = player.sprites.run.width;
});
leftControl.addEventListener('touchend', function () {
  keys.left.pressed = false;
  player.currentSprite = player.sprites.stand.left;
  player.currentCropWidth = player.sprites.stand.cropWidth;
  player.width = player.sprites.stand.width;
});
rightControl.addEventListener('touchstart', function () {
  keys.right.pressed = true;
  player.currentSprite = player.sprites.run.right;
  player.currentCropWidth = player.sprites.run.cropWidth;
  player.width = player.sprites.run.width;
});
rightControl.addEventListener('touchend', function () {
  keys.right.pressed = false;
  player.currentSprite = player.sprites.stand.right;
  player.currentCropWidth = player.sprites.stand.cropWidth;
  player.width = player.sprites.stand.width;
});
jumpControl.addEventListener('touchstart', function () {
  player.velocity.y -= 25;
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map