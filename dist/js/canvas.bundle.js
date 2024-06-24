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

/***/ "./src/img/Yogen run left new.png":
/*!****************************************!*\
  !*** ./src/img/Yogen run left new.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5b4f12b387569edc22c45affef6fb92c.png");

/***/ }),

/***/ "./src/img/Yogen run right new.png":
/*!*****************************************!*\
  !*** ./src/img/Yogen run right new.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2daecfb9a9841b4de09ee724623b348.png");

/***/ }),

/***/ "./src/img/YogenJumpLeftNew.png":
/*!**************************************!*\
  !*** ./src/img/YogenJumpLeftNew.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "00c3197944a3aa4182cb592fb237d299.png");

/***/ }),

/***/ "./src/img/YogenJumpRightNew.png":
/*!***************************************!*\
  !*** ./src/img/YogenJumpRightNew.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c2a897fd0e8aa9f93ce721df5cd2f933.png");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

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

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/leftArrow.png":
/*!*******************************!*\
  !*** ./src/img/leftArrow.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fa7a472b432f6ee8c50826c24d7b4802.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/rightArrow.png":
/*!********************************!*\
  !*** ./src/img/rightArrow.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "660d6ee2cca08be0da6ce6ae2252c9b8.png");

/***/ }),

/***/ "./src/img/standleft.png":
/*!*******************************!*\
  !*** ./src/img/standleft.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "92d0fbb6061fc65dc9ca5d46664323fa.png");

/***/ }),

/***/ "./src/img/standright.png":
/*!********************************!*\
  !*** ./src/img/standright.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5c4e4b1a8f995fc135c4f9f6a8202055.png");

/***/ }),

/***/ "./src/img/upArrow.png":
/*!*****************************!*\
  !*** ./src/img/upArrow.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "851beafe40ef6df14507d5a07d31cd7c.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_Yogen_run_left_new_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/Yogen run left new.png */ "./src/img/Yogen run left new.png");
/* harmony import */ var _img_Yogen_run_right_new_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Yogen run right new.png */ "./src/img/Yogen run right new.png");
/* harmony import */ var _img_standleft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/standleft.png */ "./src/img/standleft.png");
/* harmony import */ var _img_standright_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/standright.png */ "./src/img/standright.png");
/* harmony import */ var _img_YogenJumpLeftNew_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/YogenJumpLeftNew.png */ "./src/img/YogenJumpLeftNew.png");
/* harmony import */ var _img_YogenJumpRightNew_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/YogenJumpRightNew.png */ "./src/img/YogenJumpRightNew.png");
/* harmony import */ var _img_hat_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/hat.png */ "./src/img/hat.png");
/* harmony import */ var _img_leftArrow_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/leftArrow.png */ "./src/img/leftArrow.png");
/* harmony import */ var _img_rightArrow_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/rightArrow.png */ "./src/img/rightArrow.png");
/* harmony import */ var _img_upArrow_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/upArrow.png */ "./src/img/upArrow.png");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }















var audio = new Audio('gameaudio2.mp3');
audio.play();
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

    this.speed = 15;
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
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_standright_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_img_standleft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 341,
        width: 199 / 2 - 3
      },
      run: {
        right: createImage(_img_Yogen_run_right_new_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_img_Yogen_run_left_new_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 341,
        width: 199 / 2 - 3
      },
      jump: {
        right: createImage(_img_YogenJumpRightNew_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        left: createImage(_img_YogenJumpLeftNew_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
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
      if (this.frames > 0) this.frames = 0;

      if ((this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left) && this.frames % 30 === 0) {
        this.frames = 0;
      } else if ((this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left) && this.frames % 10 === 0) {
        this.frames = 0;
      }

      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }

      platforms.forEach(function (platform) {
        if (_this.position.y + _this.height <= platform.position.y && _this.position.y + _this.height + _this.velocity.y >= platform.position.y && _this.position.x + _this.width >= platform.position.x && _this.position.x <= platform.position.x + platform.width) {
          _this.velocity.y = 0;
          _this.position.y = platform.position.y - _this.height; // Reset sprite to standing after landing

          if (_this.currentSprite === _this.sprites.jump.right) {
            _this.currentSprite = _this.sprites.stand.right;
          } else if (_this.currentSprite === _this.sprites.jump.left) {
            _this.currentSprite = _this.sprites.stand.left;
          }
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
    this.width = 80;
    this.height = 80;
    this.image = createImage(_img_hat_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
    this.collected = false;
  }

  _createClass(Hat, [{
    key: "draw",
    value: function draw() {
      if (!this.collected) {
        c.save();
        c.shadowBlur = 20;
        c.shadowColor = 'white';
        c.drawImage(this.image, this.position.x - scrollOffset, this.position.y, this.width, this.height);
        c.restore();
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

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 8.8 + 300 - 18 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 8.8 + 500 - 18 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 8.8 + 900 - 18 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 14 + 900 - 385 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 14 + 1100 - 385 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 16 + 1300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 16 + 1500 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 16 + 1900 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 19 + 1680 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 19 + 1980 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
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
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
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

      if (currentKey === 'right') {
        player.currentSprite = player.sprites.jump.right;
      } else if (currentKey === 'left') {
        player.currentSprite = player.sprites.jump.left;
      }

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
});

function createTouchControl(id, imageSrc) {
  var control = document.createElement('div');
  control.id = id;
  control.className = 'touch-control'; // Add a class for styling

  var image = new Image();
  image.src = imageSrc;
  control.style.backgroundImage = "url(".concat(imageSrc, ")");
  control.style.backgroundSize = 'cover';
  document.body.appendChild(control);
  return control;
}

var leftControl = createTouchControl('left-control', _img_leftArrow_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
var rightControl = createTouchControl('right-control', _img_rightArrow_png__WEBPACK_IMPORTED_MODULE_12__["default"]);
var jumpControl = createTouchControl('jump-control', _img_upArrow_png__WEBPACK_IMPORTED_MODULE_13__["default"]); // Apply common styles initially

var touchControlStyles = {
  position: 'absolute',
  width: '60px',
  height: '60px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // This line is optional if you want to keep some background color behind the image
  borderRadius: '50%',
  zIndex: '10',
  touchAction: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '18px',
  textAlign: 'center'
}; // Function to set styles for controls

function setControlStyles(control, styles) {
  for (var style in styles) {
    control.style[style] = styles[style];
  }
} // Position controls


function positionControls() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var isLandscape = screenWidth > screenHeight; // Adjust positions based on screen size and orientation

  if (screenWidth >= 768 && screenWidth <= 1024) {
    if (isLandscape) {
      // Tablet in landscape mode
      setControlStyles(leftControl, _objectSpread({}, touchControlStyles, {
        bottom: '20%',
        // Move upwards more for landscape
        left: '20px'
      }));
      setControlStyles(rightControl, _objectSpread({}, touchControlStyles, {
        bottom: '20%',
        // Move upwards more for landscape
        left: '100px'
      }));
      setControlStyles(jumpControl, _objectSpread({}, touchControlStyles, {
        bottom: '20%',
        // Move upwards more for landscape
        right: '20px'
      }));
    } else {
      // Tablet in portrait mode
      setControlStyles(leftControl, _objectSpread({}, touchControlStyles, {
        bottom: '60px',
        // Move upwards for better visibility
        left: '20px'
      }));
      setControlStyles(rightControl, _objectSpread({}, touchControlStyles, {
        bottom: '60px',
        // Move upwards for better visibility
        left: '100px'
      }));
      setControlStyles(jumpControl, _objectSpread({}, touchControlStyles, {
        bottom: '60px',
        // Move upwards for better visibility
        right: '20px'
      }));
    }
  } else {
    // Smaller screens (phones)
    var controlSize = screenWidth <= 400 ? '50px' : '60px';
    var fontSize = screenWidth <= 400 ? '16px' : '18px';
    setControlStyles(leftControl, _objectSpread({}, touchControlStyles, {
      bottom: '10%',
      left: '5%',
      width: controlSize,
      height: controlSize,
      fontSize: fontSize
    }));
    setControlStyles(rightControl, _objectSpread({}, touchControlStyles, {
      bottom: '10%',
      left: "calc(10% + ".concat(controlSize, ")"),
      width: controlSize,
      height: controlSize,
      fontSize: fontSize
    }));
    setControlStyles(jumpControl, _objectSpread({}, touchControlStyles, {
      bottom: '10%',
      right: '5%',
      width: controlSize,
      height: controlSize,
      fontSize: fontSize
    }));
  } // Show or hide controls based on screen width


  if (screenWidth > 1024) {
    leftControl.style.display = 'none';
    rightControl.style.display = 'none';
    jumpControl.style.display = 'none';
  } else {
    leftControl.style.display = 'flex';
    rightControl.style.display = 'flex';
    jumpControl.style.display = 'flex';
  }
} // Call positionControls initially and on window resize


positionControls();
window.addEventListener('resize', positionControls); // Add touch event listeners (assuming these are defined elsewhere)

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