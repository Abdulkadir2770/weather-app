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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_onPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/onPageLoad */ \"./src/modules/onPageLoad.js\");\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n\r\n\r\n\r\n\r\n\r\nconst display = (() => {\r\n    const form = document.querySelector(\".form\");\r\n    const btn = document.querySelector(\"#btn\");\r\n\r\n    form.addEventListener(\"submit\", function(event) {\r\n        event.preventDefault();\r\n    });\r\n\r\n    // button\r\n    btn.addEventListener(\"click\", async () => {\r\n        const displayedBox = document.querySelector(\".displayedResultBox\");\r\n        displayedBox.style.display = \"block\";\r\n\r\n        const city = document.querySelector(\"#cityName\");\r\n        const input = document.querySelector(\"#city-choice\");\r\n        city.innerText = input.value;\r\n\r\n        // display nothing if the city is not provided\r\n        if(input.value === \"\") {\r\n            displayedBox.style.display = \"none\";\r\n        };\r\n        const weather = await _modules_weather__WEBPACK_IMPORTED_MODULE_1__.weatherData.getData(input.value);\r\n        _modules_view__WEBPACK_IMPORTED_MODULE_2__.view.setSearchResult(weather);\r\n    })\r\n\r\n\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/onPageLoad.js":
/*!***********************************!*\
  !*** ./src/modules/onPageLoad.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nconst pageLoad = (() => {\r\n    const container = document.querySelector(\".container\")\r\n\r\n    container.innerHTML = `\r\n        <nav>\r\n            <div>\r\n                <img src=\"./assets/imgs/cloudy.png\" />\r\n            </div>\r\n            <h1>Weather App</h1>\r\n        </nav>\r\n\r\n        <main>\r\n            <form class=\"form\">\r\n                <input type=\"text\" id=\"city-choice\" name=\"city-choice\" placeholder=\"Enter city name\">\r\n                <button type=\"#\" id=\"btn\">Search</button>\r\n            </form>\r\n            <div class=\"displayedResultBox\">\r\n                <h1 id=\"cityName\"></h1>\r\n                <h4 id=\"temperature\"></h4>\r\n                <p id=\"feelsLike\"></p>\r\n                <p id=\"humidity\"></p>\r\n                <p id=\"wind\"></p>\r\n            </div>\r\n        </main>\r\n    `;\r\n\r\n    function submitForm(event) {\r\n        event.preventDefault();\r\n    };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/onPageLoad.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"view\": () => (/* binding */ view)\n/* harmony export */ });\nconst view = (() => {\r\n    function setSearchResult(weatherData) {\r\n        if (!weatherData) return;\r\n    \r\n        const cityName = document.getElementById(\"cityName\");\r\n        const temperature = document.getElementById(\"temperature\");\r\n        const feelsLike = document.getElementById(\"feelsLike\");\r\n        const humidity = document.getElementById(\"humidity\");\r\n        const wind = document.getElementById(\"wind\");\r\n    \r\n        cityName.textContent = `${weatherData.cityName}`;\r\n        temperature.textContent = `${weatherData.temperature} °C`;\r\n        feelsLike.textContent = `Fells like: ${weatherData.feelsLike} °C`;\r\n        humidity.textContent = `Humidity: ${weatherData.humidity} %`;\r\n        wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;\r\n      }\r\n    \r\n      return { setSearchResult };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/view.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weatherData\": () => (/* binding */ weatherData)\n/* harmony export */ });\nconst weatherData = (() => {\r\n    function convertData(data) {\r\n        const {\r\n          name: cityName,\r\n          main: { temp: temperature, feels_like: feelsLike, humidity },\r\n          wind: { speed: windSpeed },\r\n        } = data;\r\n        return { cityName, temperature, feelsLike, humidity, windSpeed };\r\n      }\r\n    \r\n      async function getData(city) {\r\n        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2a55435c1aefc2d658414111e388415c`;\r\n        try {\r\n          const response = await fetch(endpoint, { mode: \"cors\" });\r\n          if (!response.ok) {\r\n            throw new Error(`City ${city} not found`);\r\n        }\r\n\r\n          const data = convertData(await response.json());\r\n          return data;\r\n        } catch (error) {\r\n          alert(error);\r\n          return null;\r\n        }\r\n      }\r\n      return { getData };\r\n})();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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