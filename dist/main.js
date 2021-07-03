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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/cell.js":
/*!*************************!*\
  !*** ./scripts/cell.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cell; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function Cell() {
  _classCallCheck(this, Cell);

  // generates random int between 0 and 1
  this.state = Math.floor(Math.random() * 2);
};



/***/ }),

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _universe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universe */ "./scripts/universe.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(canvas, col, row) {
    _classCallCheck(this, Game);

    this.col = col;
    this.row = row;
    this.ctx = canvas.getContext("2d");
    this.universe = new _universe__WEBPACK_IMPORTED_MODULE_0__["default"](col, row);
    this.paused = false;
    this.scale = 10;
    this.registerEvents();
    this.startAnimating(5);
  }

  _createClass(Game, [{
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "resume",
    value: function resume() {
      this.paused = false;
      this.startAnimating(5);
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      var pauseButton = document.querySelector("#pause");
      pauseButton.addEventListener("click", function () {
        _this.paused = !_this.paused;
      });
    } // this function will start animating our universe

  }, {
    key: "bigBang",
    value: function bigBang() {
      // draws universe
      this.ctx.clearRect(0, 0, 1920, 1080);

      for (var i = 0; i < this.row; i++) {
        for (var j = 0; j < this.col; j++) {
          // if the cell is DEAD (WHITE SQUARES) 0
          if (this.universe.grid[i][j] === 0) {
            this.ctx.beginPath();
            this.ctx.rect(j * this.scale, i * this.scale, this.scale, this.scale);
            this.ctx.stroke();
          } else if (this.universe.grid[i][j] === 1) {
            // if cell is ALIVE (BLACK SQUARES) 1
            this.ctx.fillRect(j * this.scale, i * this.scale, this.scale, this.scale);
          }
        }
      }
    }
  }, {
    key: "startAnimating",
    value: function startAnimating(fps) {
      this.fpsInterval = 1000 / fps;
      this.then = Date.now();
      this.startTime = this.then;
      this.animate();
    }
  }, {
    key: "animate",
    value: function animate() {
      requestAnimationFrame(this.animate.bind(this));
      this.now = Date.now();
      this.elapsed = this.now - this.then;

      if (this.elapsed > this.fpsInterval && !this.paused) {
        this.then = this.now - this.elapsed % this.fpsInterval;
        this.bigBang(); // console.log(this.universe.grid)

        this.universe.progress();
      }
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./scripts/universe.js":
/*!*****************************!*\
  !*** ./scripts/universe.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Universe; });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./scripts/cell.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Universe = /*#__PURE__*/function () {
  function Universe(col, row) {
    _classCallCheck(this, Universe);

    this.col = col;
    this.row = row;
    this.grid = new Array();

    for (var i = 0; i < row; i++) {
      this.grid[i] = new Array(col);

      for (var j = 0; j < col; j++) {
        this.grid[i][j] = Math.floor(Math.random() * 2);
      }
    }
  }

  _createClass(Universe, [{
    key: "progress",
    value: function progress() {
      // make copy of the grid
      var nextGrid = new Array();

      for (var k = 0; k < this.row; k++) {
        nextGrid[k] = new Array(this.col);

        for (var l = 0; l < this.col; l++) {
          nextGrid[k][l] = this.grid[k][l];
        }
      }

      for (var i = 0; i < this.row; i++) {
        for (var j = 0; j < this.col; j++) {
          var numNeighbors = this.countNeighbors(i, j); // if less than 2 neighbors; kill the cell

          if (this.grid[i][j] === 1 && numNeighbors < 2) {
            nextGrid[i][j] = 0;
            console.log("".concat(i, " ").concat(j, " dies from low population")); // if more than 3 neighbors; kill due to overpopulation
          } else if (this.grid[i][j] === 1 && numNeighbors > 3) {
            nextGrid[i][j] = 0;
            console.log("".concat(i, " ").concat(j, " dies from overpopulation")); // if cell is dead, but has exactly 3 neighbors, revives
          } else if (this.grid[i][j] === 0 && numNeighbors === 3) {
            nextGrid[i][j] = 1;
            console.log("".concat(i, " ").concat(j, " revives from 3 neighbors"));
          }

          ;
        }
      } // copy back the changes into the original grid


      for (var m = 0; m < this.row; m++) {
        for (var n = 0; n < this.col; n++) {
          if (this.grid[m][n] !== nextGrid[m][n]) {
            this.grid[m][n] = nextGrid[m][n];
          }
        }
      }
    }
  }, {
    key: "countNeighbors",
    value: function countNeighbors(row, col) {
      var count = 0; // console.log(`row ${row}`);
      // console.log(`col ${col}`);
      // check down

      if (row + 1 < this.row && this.grid[row + 1][col] === 1) {
        count += 1;
      } // check up


      if (row - 1 >= 0 && this.grid[row - 1][col] === 1) {
        count += 1;
      } // check left


      if (col - 1 >= 0 && this.grid[row][col - 1] === 1) {
        count += 1;
      } // check right


      if (col + 1 < this.col && this.grid[row][col + 1] === 1) {
        count += 1;
      } // check up left


      if (row - 1 >= 0 && col - 1 >= 0 && this.grid[row - 1][col - 1] === 1) {
        count += 1;
      } // check up right


      if (row - 1 >= 0 && col + 1 < this.col && this.grid[row - 1][col + 1] === 1) {
        count += 1;
      } //check down left


      if (row + 1 < this.row && col - 1 >= 0 && this.grid[row + 1][col - 1] === 1) {
        count += 1;
      } //check down right


      if (row + 1 < this.row && col + 1 < this.col && this.grid[row + 1][col + 1] === 1) {
        count += 1;
      }

      return count;
    }
  }]);

  return Universe;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/game */ "./scripts/game.js");

document.addEventListener("DOMContentLoaded", function () {
  console.log("GAME OF LIFE START!");
  var canvas = document.getElementById("canvas");
  canvas.width = 1920;
  canvas.height = 1080; // will tell us the size of our grid/universe.  TODO: allow user to input this value

  var col = 100;
  var row = 100;
  var newGame = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, col, row);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jZWxsLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3VuaXZlcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDZWxsIiwic3RhdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJHYW1lIiwiY2FudmFzIiwiY29sIiwicm93IiwiY3R4IiwiZ2V0Q29udGV4dCIsInVuaXZlcnNlIiwiVW5pdmVyc2UiLCJwYXVzZWQiLCJzY2FsZSIsInJlZ2lzdGVyRXZlbnRzIiwic3RhcnRBbmltYXRpbmciLCJwYXVzZUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhclJlY3QiLCJpIiwiaiIsImdyaWQiLCJiZWdpblBhdGgiLCJyZWN0Iiwic3Ryb2tlIiwiZmlsbFJlY3QiLCJmcHMiLCJmcHNJbnRlcnZhbCIsInRoZW4iLCJEYXRlIiwibm93Iiwic3RhcnRUaW1lIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJlbGFwc2VkIiwiYmlnQmFuZyIsInByb2dyZXNzIiwiQXJyYXkiLCJuZXh0R3JpZCIsImsiLCJsIiwibnVtTmVpZ2hib3JzIiwiY291bnROZWlnaGJvcnMiLCJjb25zb2xlIiwibG9nIiwibSIsIm4iLCJjb3VudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJuZXdHYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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VCxDQUF3QixRQUF4QixDQUFmO0FBQ0E5QyxRQUFNLENBQUMrQyxLQUFQLEdBQWUsSUFBZjtBQUNBL0MsUUFBTSxDQUFDZ0QsTUFBUCxHQUFnQixJQUFoQixDQUxzRCxDQU90RDs7QUFDQSxNQUFNL0MsR0FBRyxHQUFHLEdBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUcsR0FBWjtBQUNBLE1BQU0rQyxPQUFPLEdBQUcsSUFBSWxELHFEQUFKLENBQVNDLE1BQVQsRUFBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixDQUFoQjtBQUNILENBWEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gZ2VuZXJhdGVzIHJhbmRvbSBpbnQgYmV0d2VlbiAwIGFuZCAxXG4gICAgICAgIHRoaXMuc3RhdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIH1cbn0iLCJpbXBvcnQgVW5pdmVyc2UgZnJvbSAnLi91bml2ZXJzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMudW5pdmVyc2UgPSBuZXcgVW5pdmVyc2UoY29sLCByb3cpO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjYWxlID0gMTA7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGluZyg1KTtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGluZyg1KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhdXNlXCIpO1xuICAgICAgICBwYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiB3aWxsIHN0YXJ0IGFuaW1hdGluZyBvdXIgdW5pdmVyc2VcbiAgICBiaWdCYW5nKCkge1xuICAgICAgICAvLyBkcmF3cyB1bml2ZXJzZVxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgMTkyMCwgMTA4MClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2VsbCBpcyBERUFEIChXSElURSBTUVVBUkVTKSAwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdmVyc2UuZ3JpZFtpXVtqXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgucmVjdChqICogdGhpcy5zY2FsZSwgaSAqIHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudW5pdmVyc2UuZ3JpZFtpXVtqXSA9PT0gMSkgeyAvLyBpZiBjZWxsIGlzIEFMSVZFIChCTEFDSyBTUVVBUkVTKSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KGogKiB0aGlzLnNjYWxlLCBpICogdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG5cbiAgICBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gICAgXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwgJiYgIXRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuYmlnQmFuZygpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51bml2ZXJzZS5ncmlkKVxuICAgICAgICAgICAgdGhpcy51bml2ZXJzZS5wcm9ncmVzcygpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzZSB7XG4gICAgY29uc3RydWN0b3IoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbaV0gPSBuZXcgQXJyYXkoY29sKVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2w7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3MoKSB7XG5cbiAgICAgICAgLy8gbWFrZSBjb3B5IG9mIHRoZSBncmlkXG4gICAgICAgIGxldCBuZXh0R3JpZCA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMucm93OyBrKyspIHtcbiAgICAgICAgICAgIG5leHRHcmlkW2tdID0gbmV3IEFycmF5KHRoaXMuY29sKVxuICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCB0aGlzLmNvbDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgbmV4dEdyaWRba11bbF0gPSB0aGlzLmdyaWRba11bbF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2w7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBudW1OZWlnaGJvcnMgPSB0aGlzLmNvdW50TmVpZ2hib3JzKGksIGopO1xuICAgICAgICAgICAgICAgIC8vIGlmIGxlc3MgdGhhbiAyIG5laWdoYm9yczsga2lsbCB0aGUgY2VsbFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbaV1bal0gPT09IDEgJiYgbnVtTmVpZ2hib3JzIDwgMikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0R3JpZFtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9ICR7an0gZGllcyBmcm9tIGxvdyBwb3B1bGF0aW9uYClcbiAgICAgICAgICAgICAgICAvLyBpZiBtb3JlIHRoYW4gMyBuZWlnaGJvcnM7IGtpbGwgZHVlIHRvIG92ZXJwb3B1bGF0aW9uXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdyaWRbaV1bal0gPT09IDEgJiYgbnVtTmVpZ2hib3JzID4gMykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0R3JpZFtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9ICR7an0gZGllcyBmcm9tIG92ZXJwb3B1bGF0aW9uYCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgY2VsbCBpcyBkZWFkLCBidXQgaGFzIGV4YWN0bHkgMyBuZWlnaGJvcnMsIHJldml2ZXNcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZFtpXVtqXSA9PT0gMCAmJiBudW1OZWlnaGJvcnMgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEdyaWRbaV1bal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSAke2p9IHJldml2ZXMgZnJvbSAzIG5laWdoYm9yc2ApXG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29weSBiYWNrIHRoZSBjaGFuZ2VzIGludG8gdGhlIG9yaWdpbmFsIGdyaWRcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCB0aGlzLnJvdzsgbSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHRoaXMuY29sOyBuKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW21dW25dICE9PSBuZXh0R3JpZFttXVtuXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbbV1bbl0gPSBuZXh0R3JpZFttXVtuXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvdW50TmVpZ2hib3JzKHJvdywgY29sKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGByb3cgJHtyb3d9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBjb2wgJHtjb2x9YCk7XG4gICAgICAgIC8vIGNoZWNrIGRvd25cbiAgICAgICAgaWYgKHJvdyArIDEgPCB0aGlzLnJvdyAmJiB0aGlzLmdyaWRbcm93ICsgMV1bY29sXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdXBcbiAgICAgICAgaWYgKHJvdyAtIDEgPj0gMCAmJiB0aGlzLmdyaWRbcm93IC0gMV1bY29sXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgbGVmdFxuICAgICAgICBpZiAoY29sIC0gMSA+PSAwICYmIHRoaXMuZ3JpZFtyb3ddW2NvbCAtIDFdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG5cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayByaWdodFxuICAgICAgICBpZiAoY29sICsgMSA8IHRoaXMuY29sICYmIHRoaXMuZ3JpZFtyb3ddW2NvbCArIDFdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIHVwIGxlZnRcbiAgICAgICAgaWYgKChyb3cgLSAxID49IDAgJiYgY29sIC0gMSA+PSAwKSAmJiB0aGlzLmdyaWRbcm93IC0gMV1bY29sIC0gMV0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHVwIHJpZ2h0XG4gICAgICAgIGlmICgocm93IC0gMSA+PSAwICYmIGNvbCArIDEgPCB0aGlzLmNvbCkgJiYgdGhpcy5ncmlkW3JvdyAtIDFdW2NvbCArIDFdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG4gICAgICAgICAgICBcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIC8vY2hlY2sgZG93biBsZWZ0XG4gICAgICAgIGlmICgocm93ICsgMSA8IHRoaXMucm93ICYmIGNvbCAtIDEgPj0gMCkgJiYgdGhpcy5ncmlkW3JvdyArIDFdW2NvbCAtIDFdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvL2NoZWNrIGRvd24gcmlnaHRcbiAgICAgICAgaWYgKChyb3cgKyAxIDwgdGhpcy5yb3cgJiYgY29sICsgMSA8IHRoaXMuY29sKSAmJiB0aGlzLmdyaWRbcm93ICsgMV1bY29sICsgMV0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vc2NyaXB0cy9nYW1lJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJHQU1FIE9GIExJRkUgU1RBUlQhXCIpXG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKVxuICAgIGNhbnZhcy53aWR0aCA9IDE5MjA7XG4gICAgY2FudmFzLmhlaWdodCA9IDEwODA7XG4gICAgXG4gICAgLy8gd2lsbCB0ZWxsIHVzIHRoZSBzaXplIG9mIG91ciBncmlkL3VuaXZlcnNlLiAgVE9ETzogYWxsb3cgdXNlciB0byBpbnB1dCB0aGlzIHZhbHVlXG4gICAgY29uc3QgY29sID0gMTAwO1xuICAgIGNvbnN0IHJvdyA9IDEwMDtcbiAgICBjb25zdCBuZXdHYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjb2wsIHJvdyk7XG59KSJdLCJzb3VyY2VSb290IjoiIn0=