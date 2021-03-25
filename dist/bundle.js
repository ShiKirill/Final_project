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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ \"./src/modules/burger.js\");\n/* harmony import */ var _modules_addDots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addDots */ \"./src/modules/addDots.js\");\n/* harmony import */ var _modules_addArrows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addArrows */ \"./src/modules/addArrows.js\");\n/* harmony import */ var _modules_mainSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mainSlider */ \"./src/modules/mainSlider.js\");\n/* harmony import */ var _modules_gallerySlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/gallerySlider */ \"./src/modules/gallerySlider.js\");\n\n\n\n\n\n\n\n\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_addDots__WEBPACK_IMPORTED_MODULE_2__.default)('.main-slider');\n(0,_modules_addArrows__WEBPACK_IMPORTED_MODULE_3__.default)('.gallery-slider');\n(0,_modules_addDots__WEBPACK_IMPORTED_MODULE_2__.default)('.gallery-slider');\n(0,_modules_mainSlider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_gallerySlider__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n//# sourceURL=webpack://diplom-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addArrows.js":
/*!**********************************!*\
  !*** ./src/modules/addArrows.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addArrows = function addArrows(sliderSelector) {\n  var slider = document.querySelector(sliderSelector);\n  var leftArrow = document.createElement('div');\n  var rightArrow = document.createElement('div');\n  leftArrow.classList.add('slider-arrow');\n  rightArrow.classList.add('slider-arrow');\n  leftArrow.classList.add('prev');\n  rightArrow.classList.add('next');\n  leftArrow.innerHTML = \"<span><img src=\\\"images/arrow-left.png\\\" alt=\\\"left arrow\\\"></span>\";\n  rightArrow.innerHTML = \"<span><img src=\\\"images/arrow-right.png\\\" alt=\\\"right arrow\\\"></span>\";\n  slider.appendChild(leftArrow);\n  slider.appendChild(rightArrow);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addArrows);\n\n//# sourceURL=webpack://diplom-project/./src/modules/addArrows.js?");

/***/ }),

/***/ "./src/modules/addDots.js":
/*!********************************!*\
  !*** ./src/modules/addDots.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addDots = function addDots(sliderSelector) {\n  var slider = document.querySelector(sliderSelector);\n  var slide = slider.querySelectorAll('.slide');\n  var ul = document.createElement('ul');\n  ul.classList.add('slider-dots');\n  var firstDot = \"<li class = \\\"slick-active\\\"><button class=\\\"dot\\\"></button></li>\";\n  var dot = \"<li><button class=\\\"dot\\\"></button></li>\";\n\n  for (var i = 0; i < slide.length; i++) {\n    if (i === 0) {\n      ul.innerHTML += firstDot;\n    } else {\n      ul.innerHTML += dot;\n    }\n  }\n\n  slider.appendChild(ul);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDots);\n\n//# sourceURL=webpack://diplom-project/./src/modules/addDots.js?");

/***/ }),

/***/ "./src/modules/burger.js":
/*!*******************************!*\
  !*** ./src/modules/burger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar burger = function burger() {\n  var hiddenSmall = document.querySelector('.hidden-small');\n  var hiddenLarge = document.querySelector('.hidden-large');\n  var topMenu = document.querySelector('.top-menu');\n  var popupMenu = document.querySelector('.popup-menu');\n  var arrow = document.getElementById('totop');\n  var arrowPoint = document.getElementById('clubs').offsetTop;\n  var topMenuOffset = topMenu.offsetTop;\n  arrow.style.display = 'none';\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu-button') && target.tagName.toLowerCase() === 'img') {\n      popupMenu.style.display = 'flex';\n    } else if ((target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'img') && target.closest('.popup-menu')) {\n      popupMenu.style.display = 'none';\n    }\n  });\n\n  var scrollFixation = function scrollFixation() {\n    if (window.scrollY > topMenuOffset) {\n      topMenu.style.position = 'fixed';\n      topMenu.style.top = '0';\n    } else {\n      topMenu.style.position = 'initial';\n    }\n  };\n\n  window.addEventListener('resize', function () {\n    if (window.innerWidth < 768) {\n      hiddenSmall.style.display = 'none';\n      hiddenLarge.style.display = 'block';\n      window.addEventListener('scroll', scrollFixation);\n    } else {\n      hiddenSmall.style.display = 'flex';\n      hiddenLarge.style.display = 'none';\n      window.removeEventListener('scroll', scrollFixation);\n      topMenu.style.position = 'initial';\n    }\n  });\n\n  if (window.innerWidth < 768) {\n    window.addEventListener('scroll', scrollFixation);\n  } // Arrow\n\n\n  window.addEventListener('scroll', function () {\n    if (window.scrollY > arrowPoint) {\n      arrow.style.display = 'block';\n    } else {\n      arrow.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://diplom-project/./src/modules/burger.js?");

/***/ }),

/***/ "./src/modules/gallerySlider.js":
/*!**************************************!*\
  !*** ./src/modules/gallerySlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar gallerySlider = function gallerySlider() {\n  var slider = document.querySelector('.gallery-slider');\n  var slide = slider.querySelectorAll('.slide');\n  var dot = slider.querySelectorAll('.slider-dots li');\n  var interval;\n  var currentSlide = 0;\n  slide[0].classList.add('active');\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    if (elem[index].tagName.toLowerCase() === 'li') {\n      elem[index].classList.remove(strClass);\n    } else if (elem[index].classList.contains('slide')) {\n      elem[index].classList.remove(strClass);\n    }\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    if (elem[index].tagName.toLowerCase() === 'li') {\n      elem[index].classList.add(strClass);\n    } else if (elem[index].classList.contains('slide')) {\n      elem[index].classList.add(strClass);\n    }\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'active');\n    prevSlide(dot, currentSlide, 'slick-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'active');\n    nextSlide(dot, currentSlide, 'slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!(target.matches('.dot') || target.closest('.slider-arrow'))) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'active');\n    prevSlide(dot, currentSlide, 'slick-active');\n\n    if (target.closest('.next')) {\n      currentSlide++;\n    } else if (target.closest('.prev')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (item, index) {\n        if (item === target.closest('li')) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'active');\n    nextSlide(dot, currentSlide, 'slick-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.closest('.slider-arrow') || target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.closest('.slider-arrow') || target.matches('.dot')) {\n      startSlide(1500);\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallerySlider);\n\n//# sourceURL=webpack://diplom-project/./src/modules/gallerySlider.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar header = function header() {\n  var clubList = document.querySelector('.club-select ul');\n  var freeVisitForm = document.getElementById('free_visit_form');\n  var callbackForm = document.getElementById('callback_form');\n  var gift = document.getElementById('gift');\n  var giftIcon = document.querySelector('.fixed-gift');\n  clubList.classList.add('club-list');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.club-select')) {\n      if (clubList.style.display === 'none' || !clubList.style.display) {\n        clubList.style.display = 'inline';\n      } else {\n        clubList.style.display = 'none';\n      }\n    } else if (target.classList.contains('open-popup')) {\n      freeVisitForm.style.display = 'block';\n    } else if (target.classList.contains('callback-btn')) {\n      callbackForm.style.display = 'block';\n    } else if (target.closest('.fixed-gift')) {\n      gift.style.display = 'block';\n      giftIcon.style.display = 'none';\n    } else if (target.matches('.close_icon, .overlay, .close-btn')) {\n      target.closest('.popup').style.display = 'none';\n    } else {\n      if (clubList.style.display !== 'none') {\n        clubList.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://diplom-project/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/mainSlider.js":
/*!***********************************!*\
  !*** ./src/modules/mainSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mainSlider = function mainSlider() {\n  var slider = document.querySelector('.main-slider');\n  var slide = slider.querySelectorAll('.slide');\n  var dot = slider.querySelectorAll('.slider-dots li');\n  var interval;\n  var currentSlide = 0;\n\n  var prevSlide = function prevSlide(elem, index) {\n    var strClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n\n    if (elem[index].tagName.toLowerCase() === 'li') {\n      elem[index].classList.remove('slick-active');\n    } else {\n      elem[index].style.display = 'none';\n    }\n  };\n\n  var nextSlide = function nextSlide(elem, index) {\n    var strClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n\n    if (elem[index].tagName.toLowerCase() === 'li') {\n      elem[index].classList.add('slick-active');\n    } else {\n      elem[index].style.display = 'flex';\n    }\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide);\n    prevSlide(dot, currentSlide, 'slick-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide);\n    nextSlide(dot, currentSlide, 'slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide);\n    prevSlide(dot, currentSlide, 'slick-active');\n\n    if (target.matches('.dot')) {\n      dot.forEach(function (item, index) {\n        if (item === target.closest('li')) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide);\n    nextSlide(dot, currentSlide, 'slick-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('.dot')) {\n      startSlide(1500);\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSlider);\n\n//# sourceURL=webpack://diplom-project/./src/modules/mainSlider.js?");

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