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
        // alert(`you clicked ${e.offsetX} x ${e.offsetY}`)
        _this.universe.grid[Math.floor(e.offsetY / 10)][Math.floor(e.offsetX / 10)] = 1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jZWxsLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3VuaXZlcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguY3NzP2EwNTIiXSwibmFtZXMiOlsiQ2VsbCIsInN0YXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiR2FtZSIsImNhbnZhcyIsImNvbCIsInJvdyIsImN0eCIsImdldENvbnRleHQiLCJ1bml2ZXJzZSIsIlVuaXZlcnNlIiwicGF1c2VkIiwic2NhbGUiLCJmcHMiLCJyZWdpc3RlckV2ZW50cyIsImJpZ0JhbmciLCJzdGFydEFuaW1hdGluZyIsInBhdXNlQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2F2ZUJ1dHRvbiIsImxvYWRCdXR0b24iLCJ0aGF0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ3JpZCIsImxvYWRlZFVuaXZlcnNlIiwicGFyc2UiLCJnZXRJdGVtIiwibGVuZ3RoIiwiYWxlcnQiLCJlIiwib2Zmc2V0WSIsIm9mZnNldFgiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImkiLCJqIiwiYmVnaW5QYXRoIiwicmVjdCIsInN0cm9rZSIsImZpbGxSZWN0IiwiZnBzSW50ZXJ2YWwiLCJ0aGVuIiwiRGF0ZSIsIm5vdyIsInN0YXJ0VGltZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiZWxhcHNlZCIsInByb2dyZXNzIiwiQXJyYXkiLCJuZXh0R3JpZCIsImsiLCJsIiwibnVtTmVpZ2hib3JzIiwiY291bnROZWlnaGJvcnMiLCJtIiwibiIsImNvdW50IiwiY29uc29sZSIsImxvZyIsInByb21wdCIsImdldEVsZW1lbnRCeUlkIiwibmV3R2FtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxJLEdBQ2pCLGdCQUFjO0FBQUE7O0FBQ1Y7QUFDQSxPQUFLQyxLQUFMLEdBQWFDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBYjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkw7O0lBRXFCQyxJO0FBQ2pCLGdCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QkMsR0FBekIsRUFBOEI7QUFBQTs7QUFDMUIsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0csR0FBTCxHQUFXSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsaURBQUosQ0FBYUwsR0FBYixFQUFrQkMsR0FBbEIsQ0FBaEI7QUFDQSxTQUFLSyxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLQyxjQUFMO0FBQ0EsU0FBS0MsT0FBTDtBQUNBLFNBQUtDLGNBQUwsQ0FBb0IsS0FBS0gsR0FBekI7QUFDSDs7OztXQUVELGlCQUFRO0FBQ0osV0FBS0YsTUFBTCxHQUFjLElBQWQ7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCxXQUFLQSxNQUFMLEdBQWMsS0FBZDtBQUNBLFdBQUtLLGNBQUwsQ0FBb0IsQ0FBcEI7QUFDSDs7O1dBRUQsMEJBQWlCO0FBQUE7O0FBQ2IsVUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7QUFDQSxVQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFuQjtBQUNBLFVBQU1FLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQW5CO0FBRUEsVUFBSUcsSUFBSSxHQUFHLElBQVg7QUFDQUwsaUJBQVcsQ0FBQ00sZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUN4QyxhQUFJLENBQUNaLE1BQUwsR0FBYyxDQUFDLEtBQUksQ0FBQ0EsTUFBcEI7QUFDSCxPQUZEO0FBSUFTLGdCQUFVLENBQUNHLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07QUFDdkNDLG9CQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUksQ0FBQ2xCLFFBQUwsQ0FBY21CLElBQTdCLENBQXRDO0FBQ0gsT0FGRDtBQUlBUCxnQkFBVSxDQUFDRSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3ZDLFlBQUlNLGNBQWMsR0FBR0gsSUFBSSxDQUFDSSxLQUFMLENBQVdOLFlBQVksQ0FBQ08sT0FBYixDQUFxQixlQUFyQixDQUFYLENBQXJCOztBQUVBLFlBQUlGLGNBQWMsQ0FBQ0csTUFBZixLQUEwQixLQUFJLENBQUN2QixRQUFMLENBQWNtQixJQUFkLENBQW1CSSxNQUFqRCxFQUF5RDtBQUNyREMsZUFBSyxDQUFDLGdDQUFELENBQUw7QUFDSCxTQUZELE1BRU87QUFDSCxlQUFJLENBQUN4QixRQUFMLENBQWNtQixJQUFkLEdBQXFCRixJQUFJLENBQUNJLEtBQUwsQ0FBV04sWUFBWSxDQUFDTyxPQUFiLENBQXFCLGVBQXJCLENBQVgsQ0FBckI7QUFDSDtBQUNKLE9BUkQ7QUFVQSxXQUFLM0IsTUFBTCxDQUFZbUIsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBQ1csQ0FBRCxFQUFPO0FBQ3pDO0FBQ0EsYUFBSSxDQUFDekIsUUFBTCxDQUFjbUIsSUFBZCxDQUFtQjVCLElBQUksQ0FBQ0MsS0FBTCxDQUFXaUMsQ0FBQyxDQUFDQyxPQUFGLEdBQVksRUFBdkIsQ0FBbkIsRUFBK0NuQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2lDLENBQUMsQ0FBQ0UsT0FBRixHQUFZLEVBQXZCLENBQS9DLElBQTZFLENBQTdFOztBQUNBLGFBQUksQ0FBQ3JCLE9BQUw7QUFDSCxPQUpEO0FBS0gsSyxDQUVEOzs7O1dBQ0EsbUJBQVU7QUFDTjtBQUNBLFdBQUtSLEdBQUwsQ0FBUzhCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2pDLE1BQUwsQ0FBWWtDLEtBQXJDLEVBQTRDLEtBQUtsQyxNQUFMLENBQVltQyxNQUF4RDs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2xDLEdBQXpCLEVBQThCa0MsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3BDLEdBQXpCLEVBQThCb0MsQ0FBQyxFQUEvQixFQUFtQztBQUMvQjtBQUNBLGNBQUksS0FBS2hDLFFBQUwsQ0FBY21CLElBQWQsQ0FBbUJZLENBQW5CLEVBQXNCQyxDQUF0QixNQUE2QixDQUFqQyxFQUFvQztBQUNoQyxpQkFBS2xDLEdBQUwsQ0FBU21DLFNBQVQ7QUFDQSxpQkFBS25DLEdBQUwsQ0FBU29DLElBQVQsQ0FBY0YsQ0FBQyxHQUFHLEtBQUs3QixLQUF2QixFQUE4QjRCLENBQUMsR0FBRyxLQUFLNUIsS0FBdkMsRUFBOEMsS0FBS0EsS0FBbkQsRUFBMEQsS0FBS0EsS0FBL0Q7QUFDQSxpQkFBS0wsR0FBTCxDQUFTcUMsTUFBVDtBQUNILFdBSkQsTUFJTyxJQUFJLEtBQUtuQyxRQUFMLENBQWNtQixJQUFkLENBQW1CWSxDQUFuQixFQUFzQkMsQ0FBdEIsTUFBNkIsQ0FBakMsRUFBb0M7QUFBRTtBQUN6QyxpQkFBS2xDLEdBQUwsQ0FBU3NDLFFBQVQsQ0FBa0JKLENBQUMsR0FBRyxLQUFLN0IsS0FBM0IsRUFBa0M0QixDQUFDLEdBQUcsS0FBSzVCLEtBQTNDLEVBQWtELEtBQUtBLEtBQXZELEVBQThELEtBQUtBLEtBQW5FO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7OztXQUlELHdCQUFlQyxHQUFmLEVBQW9CO0FBQ2hCLFdBQUtpQyxXQUFMLEdBQW1CLE9BQU9qQyxHQUExQjtBQUNBLFdBQUtrQyxJQUFMLEdBQVlDLElBQUksQ0FBQ0MsR0FBTCxFQUFaO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixLQUFLSCxJQUF0QjtBQUNBLFdBQUtJLE9BQUw7QUFDSDs7O1dBRUQsbUJBQVU7QUFDTkMsMkJBQXFCLENBQUMsS0FBS0QsT0FBTCxDQUFhRSxJQUFiLENBQWtCLElBQWxCLENBQUQsQ0FBckI7QUFDQSxXQUFLSixHQUFMLEdBQVdELElBQUksQ0FBQ0MsR0FBTCxFQUFYO0FBQ0EsV0FBS0ssT0FBTCxHQUFlLEtBQUtMLEdBQUwsR0FBVyxLQUFLRixJQUEvQjs7QUFDQSxVQUFJLEtBQUtPLE9BQUwsR0FBZSxLQUFLUixXQUFwQixJQUFtQyxDQUFDLEtBQUtuQyxNQUE3QyxFQUFxRDtBQUNqRCxhQUFLb0MsSUFBTCxHQUFZLEtBQUtFLEdBQUwsR0FBWSxLQUFLSyxPQUFMLEdBQWUsS0FBS1IsV0FBNUM7QUFDQSxhQUFLL0IsT0FBTCxHQUZpRCxDQUdqRDs7QUFDQSxhQUFLTixRQUFMLENBQWM4QyxRQUFkO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZMOztJQUNxQjdDLFE7QUFDakIsb0JBQVlMLEdBQVosRUFBaUJDLEdBQWpCLEVBQXNCO0FBQUE7O0FBQ2xCLFNBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtzQixJQUFMLEdBQVksSUFBSTRCLEtBQUosRUFBWjs7QUFDQSxTQUFLLElBQUloQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbEMsR0FBcEIsRUFBeUJrQyxDQUFDLEVBQTFCLEVBQThCO0FBQzFCLFdBQUtaLElBQUwsQ0FBVVksQ0FBVixJQUFlLElBQUlnQixLQUFKLENBQVVuRCxHQUFWLENBQWY7O0FBQ0EsV0FBSyxJQUFJb0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3BDLEdBQXBCLEVBQXlCb0MsQ0FBQyxFQUExQixFQUE4QjtBQUMxQjtBQUNBLGFBQUtiLElBQUwsQ0FBVVksQ0FBVixFQUFhQyxDQUFiLElBQWtCLENBQWxCO0FBQ0g7QUFDSjtBQUNKOzs7O1dBRUQsb0JBQVc7QUFFUDtBQUNBLFVBQUlnQixRQUFRLEdBQUcsSUFBSUQsS0FBSixFQUFmOztBQUNBLFdBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLcEQsR0FBekIsRUFBOEJvRCxDQUFDLEVBQS9CLEVBQW1DO0FBQy9CRCxnQkFBUSxDQUFDQyxDQUFELENBQVIsR0FBYyxJQUFJRixLQUFKLENBQVUsS0FBS25ELEdBQWYsQ0FBZDs7QUFDQSxhQUFLLElBQUlzRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUt0RCxHQUF6QixFQUE4QnNELENBQUMsRUFBL0IsRUFBbUM7QUFDL0JGLGtCQUFRLENBQUNDLENBQUQsQ0FBUixDQUFZQyxDQUFaLElBQWlCLEtBQUsvQixJQUFMLENBQVU4QixDQUFWLEVBQWFDLENBQWIsQ0FBakI7QUFDSDtBQUNKOztBQUVELFdBQUssSUFBSW5CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2xDLEdBQXpCLEVBQThCa0MsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3BDLEdBQXpCLEVBQThCb0MsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixjQUFJbUIsWUFBWSxHQUFHLEtBQUtDLGNBQUwsQ0FBb0JyQixDQUFwQixFQUF1QkMsQ0FBdkIsQ0FBbkIsQ0FEK0IsQ0FFL0I7O0FBQ0EsY0FBSSxLQUFLYixJQUFMLENBQVVZLENBQVYsRUFBYUMsQ0FBYixNQUFvQixDQUFwQixJQUF5Qm1CLFlBQVksR0FBRyxDQUE1QyxFQUErQztBQUMzQ0gsb0JBQVEsQ0FBQ2pCLENBQUQsQ0FBUixDQUFZQyxDQUFaLElBQWlCLENBQWpCLENBRDJDLENBRS9DO0FBQ0MsV0FIRCxNQUdPLElBQUksS0FBS2IsSUFBTCxDQUFVWSxDQUFWLEVBQWFDLENBQWIsTUFBb0IsQ0FBcEIsSUFBeUJtQixZQUFZLEdBQUcsQ0FBNUMsRUFBK0M7QUFDbERILG9CQUFRLENBQUNqQixDQUFELENBQVIsQ0FBWUMsQ0FBWixJQUFpQixDQUFqQixDQURrRCxDQUV0RDtBQUNDLFdBSE0sTUFHQSxJQUFJLEtBQUtiLElBQUwsQ0FBVVksQ0FBVixFQUFhQyxDQUFiLE1BQW9CLENBQXBCLElBQXlCbUIsWUFBWSxLQUFLLENBQTlDLEVBQWlEO0FBQ3BESCxvQkFBUSxDQUFDakIsQ0FBRCxDQUFSLENBQVlDLENBQVosSUFBaUIsQ0FBakI7QUFFSDs7QUFBQTtBQUNKO0FBQ0osT0ExQk0sQ0E0QlA7OztBQUNBLFdBQUssSUFBSXFCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3hELEdBQXpCLEVBQThCd0QsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzFELEdBQXpCLEVBQThCMEQsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixjQUFJLEtBQUtuQyxJQUFMLENBQVVrQyxDQUFWLEVBQWFDLENBQWIsTUFBb0JOLFFBQVEsQ0FBQ0ssQ0FBRCxDQUFSLENBQVlDLENBQVosQ0FBeEIsRUFBd0M7QUFDcEMsaUJBQUtuQyxJQUFMLENBQVVrQyxDQUFWLEVBQWFDLENBQWIsSUFBa0JOLFFBQVEsQ0FBQ0ssQ0FBRCxDQUFSLENBQVlDLENBQVosQ0FBbEI7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7O1dBRUQsd0JBQWV6RCxHQUFmLEVBQW9CRCxHQUFwQixFQUF5QjtBQUNyQixVQUFJMkQsS0FBSyxHQUFHLENBQVosQ0FEcUIsQ0FFckI7O0FBQ0EsVUFBSTFELEdBQUcsR0FBRyxDQUFOLEdBQVUsS0FBS0EsR0FBZixJQUFzQixLQUFLc0IsSUFBTCxDQUFVdEIsR0FBRyxHQUFHLENBQWhCLEVBQW1CRCxHQUFuQixNQUE0QixDQUF0RCxFQUF5RDtBQUNyRDJELGFBQUssSUFBSSxDQUFUO0FBQ0gsT0FMb0IsQ0FNckI7OztBQUNBLFVBQUkxRCxHQUFHLEdBQUcsQ0FBTixJQUFXLENBQVgsSUFBZ0IsS0FBS3NCLElBQUwsQ0FBVXRCLEdBQUcsR0FBRyxDQUFoQixFQUFtQkQsR0FBbkIsTUFBNEIsQ0FBaEQsRUFBbUQ7QUFDL0MyRCxhQUFLLElBQUksQ0FBVDtBQUNILE9BVG9CLENBVXJCOzs7QUFDQSxVQUFJM0QsR0FBRyxHQUFHLENBQU4sSUFBVyxDQUFYLElBQWdCLEtBQUt1QixJQUFMLENBQVV0QixHQUFWLEVBQWVELEdBQUcsR0FBRyxDQUFyQixNQUE0QixDQUFoRCxFQUFtRDtBQUMvQzJELGFBQUssSUFBSSxDQUFUO0FBQ0gsT0Fib0IsQ0FjckI7OztBQUNBLFVBQUkzRCxHQUFHLEdBQUcsQ0FBTixHQUFVLEtBQUtBLEdBQWYsSUFBc0IsS0FBS3VCLElBQUwsQ0FBVXRCLEdBQVYsRUFBZUQsR0FBRyxHQUFHLENBQXJCLE1BQTRCLENBQXRELEVBQXlEO0FBQ3JEMkQsYUFBSyxJQUFJLENBQVQ7QUFDSCxPQWpCb0IsQ0FrQnJCOzs7QUFDQSxVQUFLMUQsR0FBRyxHQUFHLENBQU4sSUFBVyxDQUFYLElBQWdCRCxHQUFHLEdBQUcsQ0FBTixJQUFXLENBQTVCLElBQWtDLEtBQUt1QixJQUFMLENBQVV0QixHQUFHLEdBQUcsQ0FBaEIsRUFBbUJELEdBQUcsR0FBRyxDQUF6QixNQUFnQyxDQUF0RSxFQUF5RTtBQUNyRTJELGFBQUssSUFBSSxDQUFUO0FBQ0gsT0FyQm9CLENBc0JyQjs7O0FBQ0EsVUFBSzFELEdBQUcsR0FBRyxDQUFOLElBQVcsQ0FBWCxJQUFnQkQsR0FBRyxHQUFHLENBQU4sR0FBVSxLQUFLQSxHQUFoQyxJQUF3QyxLQUFLdUIsSUFBTCxDQUFVdEIsR0FBRyxHQUFHLENBQWhCLEVBQW1CRCxHQUFHLEdBQUcsQ0FBekIsTUFBZ0MsQ0FBNUUsRUFBK0U7QUFDM0UyRCxhQUFLLElBQUksQ0FBVDtBQUNILE9BekJvQixDQTBCckI7OztBQUNBLFVBQUsxRCxHQUFHLEdBQUcsQ0FBTixHQUFVLEtBQUtBLEdBQWYsSUFBc0JELEdBQUcsR0FBRyxDQUFOLElBQVcsQ0FBbEMsSUFBd0MsS0FBS3VCLElBQUwsQ0FBVXRCLEdBQUcsR0FBRyxDQUFoQixFQUFtQkQsR0FBRyxHQUFHLENBQXpCLE1BQWdDLENBQTVFLEVBQStFO0FBQzNFMkQsYUFBSyxJQUFJLENBQVQ7QUFDSCxPQTdCb0IsQ0E4QnJCOzs7QUFDQSxVQUFLMUQsR0FBRyxHQUFHLENBQU4sR0FBVSxLQUFLQSxHQUFmLElBQXNCRCxHQUFHLEdBQUcsQ0FBTixHQUFVLEtBQUtBLEdBQXRDLElBQThDLEtBQUt1QixJQUFMLENBQVV0QixHQUFHLEdBQUcsQ0FBaEIsRUFBbUJELEdBQUcsR0FBRyxDQUF6QixNQUFnQyxDQUFsRixFQUFxRjtBQUNqRjJELGFBQUssSUFBSSxDQUFUO0FBQ0g7O0FBQ0QsYUFBT0EsS0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE5QyxRQUFRLENBQUNLLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3REMEMsU0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQSxNQUFNNUQsR0FBRyxHQUFHNkQsTUFBTSxDQUFDLDBCQUFELEVBQTZCLEtBQTdCLENBQWxCO0FBQ0EsTUFBTTlELEdBQUcsR0FBRzhELE1BQU0sQ0FBQyx5QkFBRCxFQUE0QixLQUE1QixDQUFsQjtBQUNBLE1BQU0vRCxNQUFNLEdBQUdjLFFBQVEsQ0FBQ2tELGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBaEUsUUFBTSxDQUFDa0MsS0FBUCxHQUFlakMsR0FBRyxHQUFHLEVBQXJCO0FBQ0FELFFBQU0sQ0FBQ21DLE1BQVAsR0FBZ0JqQyxHQUFHLEdBQUcsRUFBdEIsQ0FOc0QsQ0FRdEQ7QUFDQTtBQUNBOztBQUNBLE1BQU0rRCxPQUFPLEdBQUcsSUFBSWxFLHFEQUFKLENBQVNDLE1BQVQsRUFBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixDQUFoQjtBQUNILENBWkQsRTs7Ozs7Ozs7Ozs7QUNIQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gZ2VuZXJhdGVzIHJhbmRvbSBpbnQgYmV0d2VlbiAwIGFuZCAxXG4gICAgICAgIHRoaXMuc3RhdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIH1cbn0iLCJpbXBvcnQgVW5pdmVyc2UgZnJvbSAnLi91bml2ZXJzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnVuaXZlcnNlID0gbmV3IFVuaXZlcnNlKGNvbCwgcm93KTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlID0gMTA7XG4gICAgICAgIHRoaXMuZnBzID0gMTU7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaWdCYW5nKCk7XG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcodGhpcy5mcHMpO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKDUpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGF1c2VcIik7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVcIik7XG4gICAgICAgIGNvbnN0IGxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRcIik7XG5cbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBwYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWRVbml2ZXJzZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVuaXZlcnNlLmdyaWQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGxvYWRlZFVuaXZlcnNlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmVkVW5pdmVyc2VcIikpO1xuXG4gICAgICAgICAgICBpZiAobG9hZGVkVW5pdmVyc2UubGVuZ3RoICE9PSB0aGlzLnVuaXZlcnNlLmdyaWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJzYXZlZCBncmlkIHNpemUgZG9lcyBub3QgbWF0Y2hcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bml2ZXJzZS5ncmlkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmVkVW5pdmVyc2VcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGFsZXJ0KGB5b3UgY2xpY2tlZCAke2Uub2Zmc2V0WH0geCAke2Uub2Zmc2V0WX1gKVxuICAgICAgICAgICAgdGhpcy51bml2ZXJzZS5ncmlkW01hdGguZmxvb3IoZS5vZmZzZXRZIC8gMTApXVtNYXRoLmZsb29yKGUub2Zmc2V0WCAvIDEwKV0gPSAxO1xuICAgICAgICAgICAgdGhpcy5iaWdCYW5nKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiB3aWxsIHN0YXJ0IGFuaW1hdGluZyBvdXIgdW5pdmVyc2VcbiAgICBiaWdCYW5nKCkge1xuICAgICAgICAvLyBkcmF3cyB1bml2ZXJzZVxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2VsbCBpcyBERUFEIChXSElURSBTUVVBUkVTKSAwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdmVyc2UuZ3JpZFtpXVtqXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgucmVjdChqICogdGhpcy5zY2FsZSwgaSAqIHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudW5pdmVyc2UuZ3JpZFtpXVtqXSA9PT0gMSkgeyAvLyBpZiBjZWxsIGlzIEFMSVZFIChCTEFDSyBTUVVBUkVTKSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KGogKiB0aGlzLnNjYWxlLCBpICogdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG5cbiAgICBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gICAgXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwgJiYgIXRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuYmlnQmFuZygpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51bml2ZXJzZS5ncmlkKVxuICAgICAgICAgICAgdGhpcy51bml2ZXJzZS5wcm9ncmVzcygpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzZSB7XG4gICAgY29uc3RydWN0b3IoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbaV0gPSBuZXcgQXJyYXkoY29sKVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2w7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ3JpZFtpXVtqXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2dyZXNzKCkge1xuXG4gICAgICAgIC8vIG1ha2UgY29weSBvZiB0aGUgZ3JpZFxuICAgICAgICBsZXQgbmV4dEdyaWQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLnJvdzsgaysrKSB7XG4gICAgICAgICAgICBuZXh0R3JpZFtrXSA9IG5ldyBBcnJheSh0aGlzLmNvbClcbiAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgdGhpcy5jb2w7IGwrKykge1xuICAgICAgICAgICAgICAgIG5leHRHcmlkW2tdW2xdID0gdGhpcy5ncmlkW2tdW2xdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtTmVpZ2hib3JzID0gdGhpcy5jb3VudE5laWdoYm9ycyhpLCBqKTtcbiAgICAgICAgICAgICAgICAvLyBpZiBsZXNzIHRoYW4gMiBuZWlnaGJvcnM7IGtpbGwgdGhlIGNlbGxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW2ldW2pdID09PSAxICYmIG51bU5laWdoYm9ycyA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEdyaWRbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIC8vIGlmIG1vcmUgdGhhbiAzIG5laWdoYm9yczsga2lsbCBkdWUgdG8gb3ZlcnBvcHVsYXRpb25cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZFtpXVtqXSA9PT0gMSAmJiBudW1OZWlnaGJvcnMgPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRHcmlkW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICAvLyBpZiBjZWxsIGlzIGRlYWQsIGJ1dCBoYXMgZXhhY3RseSAzIG5laWdoYm9ycywgcmV2aXZlc1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkW2ldW2pdID09PSAwICYmIG51bU5laWdoYm9ycyA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0R3JpZFtpXVtqXSA9IDE7XG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29weSBiYWNrIHRoZSBjaGFuZ2VzIGludG8gdGhlIG9yaWdpbmFsIGdyaWRcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCB0aGlzLnJvdzsgbSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHRoaXMuY29sOyBuKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW21dW25dICE9PSBuZXh0R3JpZFttXVtuXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbbV1bbl0gPSBuZXh0R3JpZFttXVtuXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvdW50TmVpZ2hib3JzKHJvdywgY29sKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIC8vIGNoZWNrIGRvd25cbiAgICAgICAgaWYgKHJvdyArIDEgPCB0aGlzLnJvdyAmJiB0aGlzLmdyaWRbcm93ICsgMV1bY29sXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHVwXG4gICAgICAgIGlmIChyb3cgLSAxID49IDAgJiYgdGhpcy5ncmlkW3JvdyAtIDFdW2NvbF0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBsZWZ0XG4gICAgICAgIGlmIChjb2wgLSAxID49IDAgJiYgdGhpcy5ncmlkW3Jvd11bY29sIC0gMV0gPT09IDEpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayByaWdodFxuICAgICAgICBpZiAoY29sICsgMSA8IHRoaXMuY29sICYmIHRoaXMuZ3JpZFtyb3ddW2NvbCArIDFdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdXAgbGVmdFxuICAgICAgICBpZiAoKHJvdyAtIDEgPj0gMCAmJiBjb2wgLSAxID49IDApICYmIHRoaXMuZ3JpZFtyb3cgLSAxXVtjb2wgLSAxXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHVwIHJpZ2h0XG4gICAgICAgIGlmICgocm93IC0gMSA+PSAwICYmIGNvbCArIDEgPCB0aGlzLmNvbCkgJiYgdGhpcy5ncmlkW3JvdyAtIDFdW2NvbCArIDFdID09PSAxKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxXG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICAvL2NoZWNrIGRvd24gbGVmdFxuICAgICAgICBpZiAoKHJvdyArIDEgPCB0aGlzLnJvdyAmJiBjb2wgLSAxID49IDApICYmIHRoaXMuZ3JpZFtyb3cgKyAxXVtjb2wgLSAxXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgZG93biByaWdodFxuICAgICAgICBpZiAoKHJvdyArIDEgPCB0aGlzLnJvdyAmJiBjb2wgKyAxIDwgdGhpcy5jb2wpICYmIHRoaXMuZ3JpZFtyb3cgKyAxXVtjb2wgKyAxXSA9PT0gMSkge1xuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG59IiwiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vc2NyaXB0cy9nYW1lJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJHQU1FIE9GIExJRkUgU1RBUlQhXCIpO1xuICAgIGNvbnN0IHJvdyA9IHByb21wdChcIlBsZWFzZSBlbnRlciBncmlkIGhlaWdodFwiLCBcIjEwMFwiKTtcbiAgICBjb25zdCBjb2wgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgZ3JpZCB3aWR0aFwiLCBcIjEwMFwiKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSBjb2wgKiAxMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gcm93ICogMTA7XG4gICAgXG4gICAgLy8gd2lsbCB0ZWxsIHVzIHRoZSBzaXplIG9mIG91ciBncmlkL3VuaXZlcnNlLlxuICAgIC8vIGNvbnN0IGNvbCA9IDEwMDtcbiAgICAvLyBjb25zdCByb3cgPSAxMDA7XG4gICAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY29sLCByb3cpO1xufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9