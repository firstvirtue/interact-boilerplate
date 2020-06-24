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

/***/ "./src/js/blob.js":
/*!************************!*\
  !*** ./src/js/blob.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blob; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Blob = function Blob(ctx) {
  _classCallCheck(this, Blob);

  var circ = 7.5 * (Math.sqrt(2) - 1) / 3;
  var c = circ;
  var count = Math.PI;
  var ctx = ctx;

  this.func = function drawBezierCircle(cx, cy, r) {
    var c;
    var offsetX = 20 * Math.sin(count);
    var offsetY = 15 * Math.cos(count * 2);
    r = r / 2;
    count += 0.01;
    ctx.translate(cx, cy); // translate to centerpoint

    ctx.beginPath(); // top right

    c = circ + 0.2 * Math.sin(count);
    ctx.moveTo(offsetX + 0, offsetY + -r);
    ctx.bezierCurveTo(offsetX + c * r, offsetY + -r, offsetX + r, offsetY + -c * r, offsetX + r, offsetY + 0); // bottom right

    c = circ + 0.2 * Math.cos(count);
    ctx.bezierCurveTo(offsetX + r, offsetY + c * r, offsetX + c * r, offsetY + r, offsetX + 0, offsetY + r); // bottom left

    c = circ + 0.2 * Math.sin(count * 2);
    ctx.bezierCurveTo(offsetX + -c * r, offsetY + r, offsetX + -r, offsetY + c * r, offsetX + -r, offsetY + 0); // top left

    c = circ + 0.2 * Math.cos(count + 1);
    ctx.bezierCurveTo(offsetX + -r, offsetY + -c * r, offsetX + -c * r, offsetY + -r, offsetX + 0, offsetY + -r);
    ctx.fillStyle = "#f1f3f5";
    ctx.fill();
  };
};



/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/js/vector.js");
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blob */ "./src/js/blob.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var devicePixelRatio = window.devicePixelRatio || 1;
c.scale(devicePixelRatio, devicePixelRatio); // FIXME: Not working

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var indicator;
var mouse = {
  x: document.documentElement.clientWidth / 2,
  y: document.documentElement.clientHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
var blob = new _blob__WEBPACK_IMPORTED_MODULE_2__["default"](c); // Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  init();
}); // document.querySelector('.btn--bezier').addEventListener('click', () => {
//   indicator.setState('bezier');
// })
// document.querySelector('.btn--linear').addEventListener('click', () => {
//   indicator.setState('default');
// })

var Indicator = /*#__PURE__*/function () {
  function Indicator() {
    _classCallCheck(this, Indicator);

    this.bars = [];
    this.length = 92; // window.width / unit

    this.unit = 8;
    this.state = 'default';
  }

  _createClass(Indicator, [{
    key: "resize",
    value: function resize() {}
  }, {
    key: "init",
    value: function init() {
      for (var i = 0; i < this.length; i++) {
        var bar = new Bar(this.length, this.unit, document.documentElement.clientWidth * 0.7 + i * this.unit);
        this.bars.push(bar);
      }
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
    }
  }, {
    key: "draw",
    value: function draw(c) {
      var _this = this;

      c.beginPath();
      c.moveTo(this.bars[0].position.x, this.bars[0].position.y);
      this.bars.forEach(function (el, i) {
        if (_this.state === 'bezier') {
          el.updateCircle(i);
          el.drawLine(c);
        } else {
          el.update();
          el.draw(c);
        }
      });
      c.fill();
    }
  }]);

  return Indicator;
}();

var Bar = /*#__PURE__*/function () {
  function Bar(length, unit, x) {
    _classCallCheck(this, Bar);

    this.unit = unit;
    this.length = length;
    this.height = Math.random() * 10 + 5;
    this.baroffset = 0.4;
    this.currentHeight = 1;
    this.position = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](x, 600);
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, -1 * (Math.random() + 10));
    this.acceleration = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    this.destination = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
  }

  _createClass(Bar, [{
    key: "resize",
    value: function resize() {}
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "update",
    value: function update() {
      // add power
      this.position.x = this.position.x - 2; // 초기화

      if (this.position.x <= 0) {
        this.position.x = this.length * this.unit;
        this.currentHeight = 1;
      } // Height


      if (this.position.x < document.documentElement.clientWidth / 2) {
        if (this.currentHeight <= this.height) {
          this.currentHeight += this.baroffset;
        }
      }
    } // just one

  }, {
    key: "draw",
    value: function draw(c) {
      // end
      // console.log(this.currentHeight);
      c.fillRect(this.position.x, this.position.y, 2, this.currentHeight);
    }
  }, {
    key: "updateBezier",
    value: function updateBezier() {
      this.integrate(0.5 * 0.8);
    } // just one

  }, {
    key: "drawBezier",
    value: function drawBezier(c) {
      c.lineTo(this.position.x, this.position.y); // console.log(this.position);
    }
  }, {
    key: "integrate",
    value: function integrate(duration) {
      this.position.addScaledVector(this.velocity, duration);
    }
  }, {
    key: "updateCircle",
    value: function updateCircle(idx) {
      this.destination.x = Math.cos(idx / this.length * 360) * 100 + 200;
      this.destination.y = Math.sin(idx / this.length * 360) * 100 + 200;
      var sub = this.destination.subtract(this.position);
      var step = sub.magnitude() * 0.03 * 0.4;
      sub.normalize(); // Add power

      var power = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](sub.x * step, sub.y * step);
      this.position = this.position.add(power); // Interpolation lerp
      // const power = new Vector(this.lerp(this.position.x, this.destination.x, 0.03 * 0.4), this.lerp(this.position.y, this.destination.y, 0.03 * 0.4))
      // this.position = power;
    }
  }, {
    key: "drawLine",
    value: function drawLine(c) {
      c.lineTo(this.position.x, this.position.y); // c.fillRect(this.position.x, this.position.y, 2, this.currentHeight);
    }
  }, {
    key: "lerp",
    value: function lerp(min, max, fraction) {
      return (max - min) * fraction + min;
    }
  }]);

  return Bar;
}(); // Objects


var _Object = /*#__PURE__*/function () {
  function _Object(x, y, radius, color) {
    _classCallCheck(this, _Object);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  } // draw() {
  // c.beginPath()
  // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
  // c.fillStyle = this.color
  // c.fill()
  // c.closePath()
  // }


  _createClass(_Object, [{
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return _Object;
}(); // Implementation


var objects;

function init() {
  objects = [];

  for (var i = 0; i < 400; i++) {// objects.push()
  }

  indicator = new Indicator();
  indicator.init();
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y); // objects.forEach(object => {
  //  object.update()
  // })

  c.save();
  c.setTransform(1, 0, 0, 1, 0, 0);
  blob.func(canvas.width / 2, canvas.height / 2 - 100, canvas.width * 0.8);
  c.restore();
  c.fillStyle = '#495057';
  indicator.draw(c);
}

init();
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ }),

/***/ "./src/js/vector.js":
/*!**************************!*\
  !*** ./src/js/vector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
2차원 벡터 클래스, three.js 사용 이전에 만든 클래스로 three.js에서 사용하는 벡터 클래스로 대체 가능
*/


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector = /*#__PURE__*/function () {
  function Vector(x, y) {
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
    this.z = z;
  }

  _createClass(Vector, [{
    key: "normalize",
    value: function normalize() {
      var m = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      this.x /= m;
      this.y /= m;
      this.z /= m;
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
  }, {
    key: "addScaledVector",
    value: function addScaledVector(vector, scale) {
      this.x += vector.x * scale;
      this.y += vector.y * scale;
      this.z += vector.z * scale;
    }
  }, {
    key: "negative",
    value: function negative() {
      return new Vector(-this.x, -this.y, -this.z);
    }
  }, {
    key: "add",
    value: function add(v) {
      if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);else return new Vector(this.x + v, this.y + v, this.z + v);
    }
  }, {
    key: "subtract",
    value: function subtract(vector) {
      var v = new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
      return v;
    }
  }, {
    key: "multiply",
    value: function multiply(v) {
      if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);else return new Vector(this.x * v, this.y * v, this.z * v);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    }
  }]);

  return Vector;
}();

/* harmony default export */ __webpack_exports__["default"] = (Vector);

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map