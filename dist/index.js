(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n    <div class=\\\"card\\\" data-v-dwrw8oltd >\\n       {{title}}\\n       \\n       <br>\\n        {{body}}\\n    </div>\\n</div>\\n\\n<style>\\n    .card[data-v-dwrw8oltd] {\\n        color: white;\\n        padding: 10px;\\n        height: 150px;\\n        background-color: red;\\n        border-radius: 5px;\\n    }\\n</style>\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar default_1 = /** @class */ (function () {\n    function default_1(container) {\n        this.container = container;\n        this.name = 'test';\n        this.type = 'game';\n        this.requireVersion = '0.0.1';\n        this.showOnStart = true;\n        this.template = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n        this.data = {\n            title: 'Chargement...',\n            body: '00 : 00 : 00'\n        };\n        console.log('Construtor');\n        console.log(container);\n    }\n    default_1.prototype.init = function () {\n        var _this = this;\n        console.log('MODULE DEV LOADED');\n        setInterval(function () {\n            var date = new Date();\n            _this.data.body = date.getHours() + ' - ' + date.getMinutes() + ' - ' + date.getSeconds();\n            setTimeout(function () {\n                var date = new Date();\n                _this.data.body = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();\n            }, 500);\n        }, 1000);\n    };\n    default_1.prototype.start = function () {\n        var _this = this;\n        console.log('MODULE STARTED');\n        var userService = this.container.get('UserService');\n        userService.get().then(function (res) {\n            _this.data.title = \"L'horloge de - \" + res.name;\n        });\n    };\n    return default_1;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_1);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ })));