/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ \"./src/modules/burger.js\");\n\n\n\n\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://diplom-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/burger.js":
/*!*******************************!*\
  !*** ./src/modules/burger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar burger = function burger() {\n  var hiddenSmall = document.querySelector('.hidden-small');\n  var hiddenLarge = document.querySelector('.hidden-large');\n  var topMenu = document.querySelector('.top-menu');\n  var popupMenu = document.querySelector('.popup-menu');\n  var arrow = document.getElementById('totop');\n  var arrowPoint = document.getElementById('clubs').offsetTop;\n  var topMenuOffset = topMenu.offsetTop;\n  arrow.style.display = 'none';\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu-button') && target.tagName.toLowerCase() === 'img') {\n      popupMenu.style.display = 'flex';\n    } else if ((target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'img') && target.closest('.popup-menu')) {\n      popupMenu.style.display = 'none';\n    }\n  });\n\n  var scrollFixation = function scrollFixation() {\n    if (window.scrollY > topMenuOffset) {\n      topMenu.style.position = 'fixed';\n      topMenu.style.top = '0';\n    } else {\n      topMenu.style.position = 'initial';\n    }\n  };\n\n  window.addEventListener('resize', function () {\n    if (window.innerWidth < 768) {\n      hiddenSmall.style.display = 'none';\n      hiddenLarge.style.display = 'block';\n      window.addEventListener('scroll', scrollFixation);\n    } else {\n      hiddenSmall.style.display = 'flex';\n      hiddenLarge.style.display = 'none';\n      window.removeEventListener('scroll', scrollFixation);\n      topMenu.style.position = 'initial';\n    }\n  });\n\n  if (window.innerWidth < 768) {\n    window.addEventListener('scroll', scrollFixation);\n  } // Arrow\n\n\n  window.addEventListener('scroll', function () {\n    if (window.scrollY > arrowPoint) {\n      arrow.style.display = 'block';\n    } else {\n      arrow.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://diplom-project/./src/modules/burger.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar header = function header() {\n  var clubList = document.querySelector('.club-select ul');\n  var freeVisitForm = document.getElementById('free_visit_form');\n  var callbackForm = document.getElementById('callback_form');\n  var gift = document.getElementById('gift');\n  var giftIcon = document.querySelector('.fixed-gift');\n  clubList.classList.add('club-list');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.club-select')) {\n      if (clubList.style.display === 'none' || !clubList.style.display) {\n        clubList.style.display = 'inline';\n      } else {\n        clubList.style.display = 'none';\n      }\n    } else if (target.classList.contains('open-popup')) {\n      freeVisitForm.style.display = 'block';\n    } else if (target.classList.contains('callback-btn')) {\n      callbackForm.style.display = 'block';\n    } else if (target.closest('.fixed-gift')) {\n      gift.style.display = 'block';\n      giftIcon.style.display = 'none';\n    } else if (target.matches('.close_icon, .overlay, .close-btn')) {\n      target.closest('.popup').style.display = 'none';\n    } else {\n      if (clubList.style.display !== 'none') {\n        clubList.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://diplom-project/./src/modules/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;