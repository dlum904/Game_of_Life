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
    this.paused = true;
    this.scale = 10;
    this.fps = 15;
    this.registerEvents();
    this.bigBang();
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
      var that = this;
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
      this.canvas.addEventListener("click", function (e) {
        // if the cell is 1 set it to 0, else set it 1.
        _this.universe.grid[Math.floor(e.offsetY / 10)][Math.floor(e.offsetX / 10)] = _this.universe.grid[Math.floor(e.offsetY / 10)][Math.floor(e.offsetX / 10)] === 1 ? 0 : 1;

        _this.bigBang();
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
        // this.grid[i][j] = Math.floor(Math.random() * 2);
        this.grid[i][j] = 0;
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
            nextGrid[i][j] = 0; // if more than 3 neighbors; kill due to overpopulation
          } else if (this.grid[i][j] === 1 && numNeighbors > 3) {
            nextGrid[i][j] = 0; // if cell is dead, but has exactly 3 neighbors, revives
          } else if (this.grid[i][j] === 0 && numNeighbors === 3) {
            nextGrid[i][j] = 1;
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
      var count = 0; // check down

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jZWxsLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3VuaXZlcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguY3NzP2EwNTIiXSwibmFtZXMiOlsiQ2VsbCIsInN0YXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiR2FtZSIsImNhbnZhcyIsImNvbCIsInJvdyIsImN0eCIsImdldENvbnRleHQiLCJ1bml2ZXJzZSIsIlVuaXZlcnNlIiwicGF1c2VkIiwic2NhbGUiLCJmcHMiLCJyZWdpc3RlckV2ZW50cyIsImJpZ0JhbmciLCJzdGFydEFuaW1hdGluZyIsInBhdXNlQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2F2ZUJ1dHRvbiIsImxvYWRCdXR0b24iLCJ0aGF0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ3JpZCIsImxvYWRlZFVuaXZlcnNlIiwicGFyc2UiLCJnZXRJdGVtIiwibGVuZ3RoIiwiYWxlcnQiLCJlIiwib2Zmc2V0WSIsIm9mZnNldFgiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImkiLCJqIiwiYmVnaW5QYXRoIiwicmVjdCIsInN0cm9rZSIsImZpbGxSZWN0IiwiZnBzSW50ZXJ2YWwiLCJ0aGVuIiwiRGF0ZSIsIm5vdyIsInN0YXJ0VGltZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiZWxhcHNlZCIsInByb2dyZXNzIiwiQXJyYXkiLCJuZXh0R3JpZCIsImsiLCJsIiwibnVtTmVpZ2hib3JzIiwiY291bnROZWlnaGJvcnMiLCJtIiwibiIsImNvdW50IiwiY29uc29sZSIsImxvZyIsInBy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LEdBQUcsR0FBRyxDQUFOLEdBQVUsS0FBS0EsR0FBZixJQUFzQkQsR0FBRyxHQUFHLENBQU4sR0FBVSxLQUFLQSxHQUF0QyxJQUE4QyxLQUFLdUIsSUFBTCxDQUFVdEIsR0FBRyxHQUFHLENBQWhCLEVBQW1CRCxHQUFHLEdBQUcsQ0FBekIsTUFBZ0MsQ0FBbEYsRUFBcUY7QUFDakYyRCxhQUFLLElBQUksQ0FBVDtBQUNIOztBQUNELGFBQU9BLEtBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOUMsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RDBDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0EsTUFBTTVELEdBQUcsR0FBRzZELE1BQU0sQ0FBQywwQkFBRCxFQUE2QixLQUE3QixDQUFsQjtBQUNBLE1BQU05RCxHQUFHLEdBQUc4RCxNQUFNLENBQUMseUJBQUQsRUFBNEIsS0FBNUIsQ0FBbEI7QUFDQSxNQUFNL0QsTUFBTSxHQUFHYyxRQUFRLENBQUNrRCxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQWhFLFFBQU0sQ0FBQ2tDLEtBQVAsR0FBZWpDLEdBQUcsR0FBRyxFQUFyQjtBQUNBRCxRQUFNLENBQUNtQyxNQUFQLEdBQWdCakMsR0FBRyxHQUFHLEVBQXRCLENBTnNELENBUXREO0FBQ0E7QUFDQTs7QUFDQSxNQUFNK0QsT0FBTyxHQUFHLElBQUlsRSxxREFBSixDQUFTQyxNQUFULEVBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsQ0FBaEI7QUFDSCxDQVpELEU7Ozs7Ozs7Ozs7O0FDSEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGdlbmVyYXRlcyByYW5kb20gaW50IGJldHdlZW4gMCBhbmQgMVxuICAgICAgICB0aGlzLnN0YXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICB9XG59IiwiaW1wb3J0IFVuaXZlcnNlIGZyb20gJy4vdW5pdmVyc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbCwgcm93KSB7XG4gICAgICAgIHRoaXMuY29sID0gY29sO1xuICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy51bml2ZXJzZSA9IG5ldyBVbml2ZXJzZShjb2wsIHJvdyk7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDEwO1xuICAgICAgICB0aGlzLmZwcyA9IDE1O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmlnQmFuZygpO1xuICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKHRoaXMuZnBzKTtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGluZyg1KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhdXNlXCIpO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlXCIpO1xuICAgICAgICBjb25zdCBsb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2FkXCIpO1xuXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgcGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICAgICAgICB9KTtcblxuICAgICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVkVW5pdmVyc2VcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy51bml2ZXJzZS5ncmlkKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBsb2FkZWRVbml2ZXJzZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZFVuaXZlcnNlXCIpKTtcblxuICAgICAgICAgICAgaWYgKGxvYWRlZFVuaXZlcnNlLmxlbmd0aCAhPT0gdGhpcy51bml2ZXJzZS5ncmlkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwic2F2ZWQgZ3JpZCBzaXplIGRvZXMgbm90IG1hdGNoXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5pdmVyc2UuZ3JpZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZFVuaXZlcnNlXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgY2VsbCBpcyAxIHNldCBpdCB0byAwLCBlbHNlIHNldCBpdCAxLlxuICAgICAgICAgICAgdGhpcy51bml2ZXJzZS5ncmlkW01hdGguZmxvb3IoZS5vZmZzZXRZIC8gMTApXVtNYXRoLmZsb29yKGUub2Zmc2V0WCAvIDEwKV0gPSB0aGlzLnVuaXZlcnNlLmdyaWRbTWF0aC5mbG9vcihlLm9mZnNldFkgLyAxMCldW01hdGguZmxvb3IoZS5vZmZzZXRYIC8gMTApXSA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAgICAgdGhpcy5iaWdCYW5nKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiB3aWxsIHN0YXJ0IGFuaW1hdGluZyBvdXIgdW5pdmVyc2VcbiAgICBiaWdCYW5nKCkge1xuICAgICAgICAvLyBkcmF3cyB1bml2ZXJzZVxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2VsbCBpcyBERUFEIChXSElURSBTUVVBUkVTKSAwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdmVyc2UuZ3JpZFtpXVtqXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgucmVjdChqICogdGhpcy5zY2FsZSwgaSAqIHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudW5pdmVyc2UuZ3JpZFtpXVtqXSA9PT0gMSkgeyAvLyBpZiBjZWxsIGlzIEFMSVZFIChCTEFDSyBTUVVBUkVTKSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KGogKiB0aGlzLnNjYWxlLCBpICogdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG5cbiAgICBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gICAgXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwgJiYgIXRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuYmlnQmFuZygpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51bml2ZXJzZS5ncmlkKVxuICAgICAgICAgICAgdGhpcy51bml2ZXJzZS5wcm9ncmVzcygpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzZSB7XG4gICAgY29uc3RydWN0b3IoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbaV0gPSBuZXcgQXJyYXkoY29sKVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2w7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ3JpZFtpXVtqXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2dyZXNzKCkge1xuXG4gICAgICAgIC8vIG1ha2UgY29weSBvZiB0aGUgZ3JpZFxuICAgICAgICBsZXQgbmV4dEdyaWQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLnJvdzsgaysrKSB7XG4gICAgICAgICAgICBuZXh0R3JpZFtrXSA9IG5ldyBBcnJheSh0aGlzLmNvbClcbiAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgdGhpcy5jb2w7IGwrKykge1xuICAgICAgICAgICAgICAgIG5leHRHcmlkW2tdW2xdID0gdGhpcy5ncmlkW2tdW2xdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtTmVpZ2hib3JzID0gdGhpcy5jb3VudE5laWdoYm9ycyhpLCBqKTtcbiAgICAgICAgICAgICAgICAvLyBpZiBsZXNzIHRoYW4gMiBuZWlnaGJvcnM7IGtpbGwgdGhlIGNlbGxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW2ldW2pdID09PSAxICYmIG51bU5laWdoYm9ycyA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEdyaWRbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIC8vIGlmIG1vcmUgdGhhbiAzIG5laWdoYm9yczsga2lsbCBkdWUgdG8gb3ZlcnBvcHVsYXRpb25cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZFtpXVtqXSA9PT0gMSAmJiBudW1OZWlnaGJvcnMgPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRHcmlkW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICAvLyBpZiBjZWxsIGlzIGRlYWQsIGJ1dCBoYXMgZXhhY3RseSAzIG5laWdoYm9ycywgcmV2aXZlc1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkW2ldW2pdID09PSAwICYmIG51bU5laWdoYm9ycyA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0R3JpZFtpXVtqXSA9IDE7XG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29weSBiYWNrIHRoZSBjaGFuZ2VzIGludG8gdGhlIG9yaWdpbmFsIGdyaWRcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCB0aGlzLnJvdzsgbSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHRoaXMuY29sOyBuKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW21dW25dICE9PSBuZXh0R3JpZFttXVtuXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbbV1bbl0gPSBuZXh0R3JpZFttXVtuXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvdW50TmVpZ2hib3JzKHJvdywgY29sKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIC8vIGNoZWNrIGRvd25cbiAgICAgICAgaWYgKHJvdyArIDEgPCB0aGlzLnJvdyAmJiB0aGlzLmdyaWRbcm93ICsgMV1bY29sXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHVwXG4gICAgICAgIGlmIChyb3cgLSAxID49IDAgJiYgdGhpcy5ncmlkW3JvdyAtIDFdW2NvbF0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBsZWZ0XG4gICAgICAgIGlmIChjb2wgLSAxID49IDAgJiYgdGhpcy5ncmlkW3Jvd11bY29sIC0gMV0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayByaWdodFxuICAgICAgICBpZiAoY29sICsgMSA8IHRoaXMuY29sICYmIHRoaXMuZ3JpZFtyb3ddW2NvbCArIDFdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdXAgbGVmdFxuICAgICAgICBpZiAoKHJvdyAtIDEgPj0gMCAmJiBjb2wgLSAxID49IDApICYmIHRoaXMuZ3JpZFtyb3cgLSAxXVtjb2wgLSAxXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHVwIHJpZ2h0XG4gICAgICAgIGlmICgocm93IC0gMSA+PSAwICYmIGNvbCArIDEgPCB0aGlzLmNvbCkgJiYgdGhpcy5ncmlkW3JvdyAtIDFdW2NvbCArIDFdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICAvL2NoZWNrIGRvd24gbGVmdFxuICAgICAgICBpZiAoKHJvdyArIDEgPCB0aGlzLnJvdyAmJiBjb2wgLSAxID49IDApICYmIHRoaXMuZ3JpZFtyb3cgKyAxXVtjb2wgLSAxXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgZG93biByaWdodFxuICAgICAgICBpZiAoKHJvdyArIDEgPCB0aGlzLnJvdyAmJiBjb2wgKyAxIDwgdGhpcy5jb2wpICYmIHRoaXMuZ3JpZFtyb3cgKyAxXVtjb2wgKyAxXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG59IiwiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vc2NyaXB0cy9nYW1lJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJHQU1FIE9GIExJRkUgU1RBUlQhXCIpO1xuICAgIGNvbnN0IHJvdyA9IHByb21wdChcIlBsZWFzZSBlbnRlciBncmlkIGhlaWdodFwiLCBcIjEwMFwiKTtcbiAgICBjb25zdCBjb2wgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgZ3JpZCB3aWR0aFwiLCBcIjEwMFwiKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSBjb2wgKiAxMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gcm93ICogMTA7XG4gICAgXG4gICAgLy8gd2lsbCB0ZWxsIHVzIHRoZSBzaXplIG9mIG91ciBncmlkL3VuaXZlcnNlLlxuICAgIC8vIGNvbnN0IGNvbCA9IDEwMDtcbiAgICAvLyBjb25zdCByb3cgPSAxMDA7XG4gICAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY29sLCByb3cpO1xufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9