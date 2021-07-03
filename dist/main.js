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
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.universe = new _universe__WEBPACK_IMPORTED_MODULE_0__["default"](col, row);
    this.paused = false;
    this.scale = 10;
    this.fps = 5;
    this.registerEvents();
    this.startAnimating(this.fps);
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
      var saveButton = document.querySelector("#save");
      var loadButton = document.querySelector("#load");
      pauseButton.addEventListener("click", function () {
        _this.paused = !_this.paused;
      });
      saveButton.addEventListener("click", function () {
        localStorage.setItem("savedUniverse", JSON.stringify(_this.universe.grid));
      });
      loadButton.addEventListener("click", function () {
        var loadedUniverse = JSON.parse(localStorage.getItem("savedUniverse"));

        if (loadedUniverse.length !== _this.universe.grid.length) {
          alert("saved grid size does not match");
        } else {
          _this.universe.grid = JSON.parse(localStorage.getItem("savedUniverse"));
        }
      });
    } // this function will start animating our universe

  }, {
    key: "bigBang",
    value: function bigBang() {
      // draws universe
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

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
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/game */ "./scripts/game.js");


document.addEventListener("DOMContentLoaded", function () {
  console.log("GAME OF LIFE START!");
  var row = prompt("Please enter grid height", "100");
  var col = prompt("Please enter grid width", "100");
  var canvas = document.getElementById("canvas");
  canvas.width = col * 10;
  canvas.height = row * 10; // will tell us the size of our grid/universe.
  // const col = 100;
  // const row = 100;

  var newGame = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, col, row);
});

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jZWxsLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3VuaXZlcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguY3NzP2EwNTIiXSwibmFtZXMiOlsiQ2VsbCIsInN0YXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiR2FtZSIsImNhbnZhcyIsImNvbCIsInJvdyIsImN0eCIsImdldENvbnRleHQiLCJ1bml2ZXJzZSIsIlVuaXZlcnNlIiwicGF1c2VkIiwic2NhbGUiLCJmcHMiLCJyZWdpc3RlckV2ZW50cyIsInN0YXJ0QW5pbWF0aW5nIiwicGF1c2VCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzYXZlQnV0dG9uIiwibG9hZEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdyaWQiLCJsb2FkZWRVbml2ZXJzZSIsInBhcnNlIiwiZ2V0SXRlbSIsImxlbmd0aCIsImFsZXJ0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJpIiwiaiIsImJlZ2luUGF0aCIsInJlY3QiLCJzdHJva2UiLCJmaWxsUmVjdCIsImZwc0ludGVydmFsIiwidGhlbiIsIkRhdGUiLCJub3ciLCJzdGFydFRpbWUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImVsYXBzZWQiLCJiaWdCYW5nIiwicHJvZ3Jlc3MiLCJBcnJheSIsIm5leHRHcmlkIiwiayIsImwiLCJudW1OZWlnaGJvcnMiLCJjb3VudE5laWdoYm9ycyIsImNvbnNvbGUiLCJsb2ciLCJtIiwibiIsImNvdW50IiwicHJvbXB0IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdHYW1l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cUJBQVo7QUFDQSxNQUFNckQsR0FBRyxHQUFHeUQsTUFBTSxDQUFDLDBCQUFELEVBQTZCLEtBQTdCLENBQWxCO0FBQ0EsTUFBTTFELEdBQUcsR0FBRzBELE1BQU0sQ0FBQyx5QkFBRCxFQUE0QixLQUE1QixDQUFsQjtBQUNBLE1BQU0zRCxNQUFNLEdBQUdhLFFBQVEsQ0FBQytDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBNUQsUUFBTSxDQUFDNkIsS0FBUCxHQUFlNUIsR0FBRyxHQUFHLEVBQXJCO0FBQ0FELFFBQU0sQ0FBQzhCLE1BQVAsR0FBZ0I1QixHQUFHLEdBQUcsRUFBdEIsQ0FOc0QsQ0FRdEQ7QUFDQTtBQUNBOztBQUNBLE1BQU0yRCxPQUFPLEdBQUcsSUFBSTlELHFEQUFKLENBQVNDLE1BQVQsRUFBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixDQUFoQjtBQUNILENBWkQsRTs7Ozs7Ozs7Ozs7QUNIQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gZ2VuZXJhdGVzIHJhbmRvbSBpbnQgYmV0d2VlbiAwIGFuZCAxXG4gICAgICAgIHRoaXMuc3RhdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIH1cbn0iLCJpbXBvcnQgVW5pdmVyc2UgZnJvbSAnLi91bml2ZXJzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnVuaXZlcnNlID0gbmV3IFVuaXZlcnNlKGNvbCwgcm93KTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDEwO1xuICAgICAgICB0aGlzLmZwcyA9IDU7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGluZyh0aGlzLmZwcyk7XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoNSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXVzZVwiKTtcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZVwiKTtcbiAgICAgICAgY29uc3QgbG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZFwiKTtcblxuICAgICAgICBwYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWRVbml2ZXJzZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVuaXZlcnNlLmdyaWQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGxvYWRlZFVuaXZlcnNlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmVkVW5pdmVyc2VcIikpO1xuXG4gICAgICAgICAgICBpZiAobG9hZGVkVW5pdmVyc2UubGVuZ3RoICE9PSB0aGlzLnVuaXZlcnNlLmdyaWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJzYXZlZCBncmlkIHNpemUgZG9lcyBub3QgbWF0Y2hcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bml2ZXJzZS5ncmlkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmVkVW5pdmVyc2VcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHdpbGwgc3RhcnQgYW5pbWF0aW5nIG91ciB1bml2ZXJzZVxuICAgIGJpZ0JhbmcoKSB7XG4gICAgICAgIC8vIGRyYXdzIHVuaXZlcnNlXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2w7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjZWxsIGlzIERFQUQgKFdISVRFIFNRVUFSRVMpIDBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bml2ZXJzZS5ncmlkW2ldW2pdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5yZWN0KGogKiB0aGlzLnNjYWxlLCBpICogdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy51bml2ZXJzZS5ncmlkW2ldW2pdID09PSAxKSB7IC8vIGlmIGNlbGwgaXMgQUxJVkUgKEJMQUNLIFNRVUFSRVMpIDFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoaiAqIHRoaXMuc2NhbGUsIGkgKiB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcblxuICAgIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAgICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCAmJiAhdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5iaWdCYW5nKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnVuaXZlcnNlLmdyaWQpXG4gICAgICAgICAgICB0aGlzLnVuaXZlcnNlLnByb2dyZXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2wsIHJvdykge1xuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcbiAgICAgICAgdGhpcy5yb3cgPSByb3c7XG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBBcnJheSgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFtpXSA9IG5ldyBBcnJheShjb2wpXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW2ldW2pdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9ncmVzcygpIHtcblxuICAgICAgICAvLyBtYWtlIGNvcHkgb2YgdGhlIGdyaWRcbiAgICAgICAgbGV0IG5leHRHcmlkID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5yb3c7IGsrKykge1xuICAgICAgICAgICAgbmV4dEdyaWRba10gPSBuZXcgQXJyYXkodGhpcy5jb2wpXG4gICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHRoaXMuY29sOyBsKyspIHtcbiAgICAgICAgICAgICAgICBuZXh0R3JpZFtrXVtsXSA9IHRoaXMuZ3JpZFtrXVtsXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3c7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bU5laWdoYm9ycyA9IHRoaXMuY291bnROZWlnaGJvcnMoaSwgaik7XG4gICAgICAgICAgICAgICAgLy8gaWYgbGVzcyB0aGFuIDIgbmVpZ2hib3JzOyBraWxsIHRoZSBjZWxsXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFtpXVtqXSA9PT0gMSAmJiBudW1OZWlnaGJvcnMgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRHcmlkW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0gJHtqfSBkaWVzIGZyb20gbG93IHBvcHVsYXRpb25gKVxuICAgICAgICAgICAgICAgIC8vIGlmIG1vcmUgdGhhbiAzIG5laWdoYm9yczsga2lsbCBkdWUgdG8gb3ZlcnBvcHVsYXRpb25cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZFtpXVtqXSA9PT0gMSAmJiBudW1OZWlnaGJvcnMgPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRHcmlkW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0gJHtqfSBkaWVzIGZyb20gb3ZlcnBvcHVsYXRpb25gKTtcbiAgICAgICAgICAgICAgICAvLyBpZiBjZWxsIGlzIGRlYWQsIGJ1dCBoYXMgZXhhY3RseSAzIG5laWdoYm9ycywgcmV2aXZlc1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkW2ldW2pdID09PSAwICYmIG51bU5laWdoYm9ycyA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0R3JpZFtpXVtqXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9ICR7an0gcmV2aXZlcyBmcm9tIDMgbmVpZ2hib3JzYClcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb3B5IGJhY2sgdGhlIGNoYW5nZXMgaW50byB0aGUgb3JpZ2luYWwgZ3JpZFxuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHRoaXMucm93OyBtKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgdGhpcy5jb2w7IG4rKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbbV1bbl0gIT09IG5leHRHcmlkW21dW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFttXVtuXSA9IG5leHRHcmlkW21dW25dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY291bnROZWlnaGJvcnMocm93LCBjb2wpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHJvdyAke3Jvd31gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGNvbCAke2NvbH1gKTtcbiAgICAgICAgLy8gY2hlY2sgZG93blxuICAgICAgICBpZiAocm93ICsgMSA8IHRoaXMucm93ICYmIHRoaXMuZ3JpZFtyb3cgKyAxXVtjb2xdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG5cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayB1cFxuICAgICAgICBpZiAocm93IC0gMSA+PSAwICYmIHRoaXMuZ3JpZFtyb3cgLSAxXVtjb2xdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG5cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBsZWZ0XG4gICAgICAgIGlmIChjb2wgLSAxID49IDAgJiYgdGhpcy5ncmlkW3Jvd11bY29sIC0gMV0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcblxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHJpZ2h0XG4gICAgICAgIGlmIChjb2wgKyAxIDwgdGhpcy5jb2wgJiYgdGhpcy5ncmlkW3Jvd11bY29sICsgMV0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgdXAgbGVmdFxuICAgICAgICBpZiAoKHJvdyAtIDEgPj0gMCAmJiBjb2wgLSAxID49IDApICYmIHRoaXMuZ3JpZFtyb3cgLSAxXVtjb2wgLSAxXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdXAgcmlnaHRcbiAgICAgICAgaWYgKChyb3cgLSAxID49IDAgJiYgY29sICsgMSA8IHRoaXMuY29sKSAmJiB0aGlzLmdyaWRbcm93IC0gMV1bY29sICsgMV0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgICAgIFxuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgLy9jaGVjayBkb3duIGxlZnRcbiAgICAgICAgaWYgKChyb3cgKyAxIDwgdGhpcy5yb3cgJiYgY29sIC0gMSA+PSAwKSAmJiB0aGlzLmdyaWRbcm93ICsgMV1bY29sIC0gMV0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgZG93biByaWdodFxuICAgICAgICBpZiAoKHJvdyArIDEgPCB0aGlzLnJvdyAmJiBjb2wgKyAxIDwgdGhpcy5jb2wpICYmIHRoaXMuZ3JpZFtyb3cgKyAxXVtjb2wgKyAxXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbn0iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tICcuLi9zY3JpcHRzL2dhbWUnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdBTUUgT0YgTElGRSBTVEFSVCFcIik7XG4gICAgY29uc3Qgcm93ID0gcHJvbXB0KFwiUGxlYXNlIGVudGVyIGdyaWQgaGVpZ2h0XCIsIFwiMTAwXCIpO1xuICAgIGNvbnN0IGNvbCA9IHByb21wdChcIlBsZWFzZSBlbnRlciBncmlkIHdpZHRoXCIsIFwiMTAwXCIpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IGNvbCAqIDEwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSByb3cgKiAxMDtcbiAgICBcbiAgICAvLyB3aWxsIHRlbGwgdXMgdGhlIHNpemUgb2Ygb3VyIGdyaWQvdW5pdmVyc2UuXG4gICAgLy8gY29uc3QgY29sID0gMTAwO1xuICAgIC8vIGNvbnN0IHJvdyA9IDEwMDtcbiAgICBjb25zdCBuZXdHYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjb2wsIHJvdyk7XG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=