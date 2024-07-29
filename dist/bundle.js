/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

:root {
    --bg-dark-blue-color: rgb(77, 0, 128);
    --bg-light-purple-color: rgb(255, 0, 255);
    --bg-light-purple-color-lighter: rgb(253, 90, 253);
}

html {
    height: 100%;
    font-weight: 400;
    font-size: 16px;
}

::-webkit-scrollbar {
    width: 8px;
    /* height: 6px; */
}

::-webkit-scrollbar-track {
    background: var(--bg-dark-blue-color);
}

::-webkit-scrollbar-thumb {
    background: var(--bg-light-purple-color);
    border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--bg-light-purple-color-lighter);
}

body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(circle at top , var(--bg-dark-blue-color), black);
    background-repeat: no-repeat;
    background-attachment: fixed;
    scrollbar-width: thin;
    scrollbar-color: var(--bg-light-purple-color) var(--bg-light-purple-color);
}

li {
    list-style: none;
    text-wrap: wrap;
}

.max-width {
    width: 100%;
    max-width: 1230px;
    padding: 20px 30px;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

#site-title {
    color: white;
    font-size: 3rem;
    font-weight: 600;
}

@media (max-width: 430px) {
    #site-title {
        font-size: 2rem;
        font-weight: 600;
    }
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 380px;
}

#location-search {
    padding: 10px 15px;
    border: none;
    border-radius: 20px;
    font-size: inherit;
    width: 100%;
    box-shadow: 0px 0px 15px 1px var(--bg-light-purple-color);
    transition: all .3s;
}

#location-search:focus {
    outline: none;
}

@keyframes ForwardAnimation {
    0% {
        background-position: 0%;
    }
    50% {
        background-position: 50%;
    }
    100% {
        background-position: 100%;
    }
}

@keyframes BackwardAnimation {
    0% {
        background-position: 100%;
    }
    50% {
        background-position: 50%;
    }
    100% {
        background-position: 0%;
    }
}

.animated-btn {
    padding: 10px 25px;
    border-radius: 20px;
    border: none;
    font-size: inherit;
    background: linear-gradient(90deg, var(--bg-dark-blue-color), var(--bg-light-purple-color), var(--bg-dark-blue-color));
    background-size: 200% 100%;
    background-position: 0%;
    color: white;
    animation: BackwardAnimation .2s linear forwards;
}

.animated-btn:hover {
    cursor: pointer;
    animation: ForwardAnimation .2s linear forwards;
}

main {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
}

#main-heading {
    text-align: center;
    color: white;
    font-size: 2.5rem;
    align-self: center;
}

#city-name {
    color: var(--bg-light-purple-color);
    text-shadow: 0px 0px 5px var(--bg-light-purple-color);
}

section {
    width: 100%;
}

.temp-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 30px;
    max-width: 32rem;
    border: 2px solid var(--bg-light-purple-color-lighter);
    border-radius: 20px;
    box-shadow: 0px 0px 20px 1px var(--bg-light-purple-color);
    padding: 20px;
    color: white;
}

@media (max-width: 810px) {
    .temp-box {
        max-width: none;
    }
}

#toggle-week-temp-view {
    padding: 20px 25px;
    border-radius: 30px;
}

.day-and-weather {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.day, .date {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--bg-light-purple-color);
}

.weather-icon {
    width: 80px;
}

.weather-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
}

.detail-heading {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--bg-light-purple-color);
}

#week-weather {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
    gap: 30px;
}

#week-weather > div[class="temp-box"] {
    max-width: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,qCAAqC;IACrC,yCAAyC;IACzC,kDAAkD;AACtD;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,wCAAwC;IACxC,kBAAkB;AACtB;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6EAA6E;IAC7E,4BAA4B;IAC5B,4BAA4B;IAC5B,qBAAqB;IACrB,0EAA0E;AAC9E;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI;QACI,eAAe;QACf,gBAAgB;IACpB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,yDAAyD;IACzD,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,yBAAyB;IAC7B;AACJ;;AAEA;IACI;QACI,yBAAyB;IAC7B;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,uBAAuB;IAC3B;AACJ;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,sHAAsH;IACtH,0BAA0B;IAC1B,uBAAuB;IACvB,YAAY;IACZ,gDAAgD;AACpD;;AAEA;IACI,eAAe;IACf,+CAA+C;AACnD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,qDAAqD;AACzD;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;IAClB,SAAS;IACT,gBAAgB;IAChB,sDAAsD;IACtD,mBAAmB;IACnB,yDAAyD;IACzD,aAAa;IACb,YAAY;AAChB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;AACvC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,6DAA6D;IAC7D,SAAS;AACb;;AAEA;IACI,eAAe;AACnB","sourcesContent":["*, *::after, *::before {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n}\r\n\r\n:root {\r\n    --bg-dark-blue-color: rgb(77, 0, 128);\r\n    --bg-light-purple-color: rgb(255, 0, 255);\r\n    --bg-light-purple-color-lighter: rgb(253, 90, 253);\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n    /* height: 6px; */\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: var(--bg-dark-blue-color);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--bg-light-purple-color);\r\n    border-radius: 6px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: var(--bg-light-purple-color-lighter);\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background: radial-gradient(circle at top , var(--bg-dark-blue-color), black);\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: var(--bg-light-purple-color) var(--bg-light-purple-color);\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n    text-wrap: wrap;\r\n}\r\n\r\n.max-width {\r\n    width: 100%;\r\n    max-width: 1230px;\r\n    padding: 20px 30px;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#site-title {\r\n    color: white;\r\n    font-size: 3rem;\r\n    font-weight: 600;\r\n}\r\n\r\n@media (max-width: 430px) {\r\n    #site-title {\r\n        font-size: 2rem;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    width: 380px;\r\n}\r\n\r\n#location-search {\r\n    padding: 10px 15px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    font-size: inherit;\r\n    width: 100%;\r\n    box-shadow: 0px 0px 15px 1px var(--bg-light-purple-color);\r\n    transition: all .3s;\r\n}\r\n\r\n#location-search:focus {\r\n    outline: none;\r\n}\r\n\r\n@keyframes ForwardAnimation {\r\n    0% {\r\n        background-position: 0%;\r\n    }\r\n    50% {\r\n        background-position: 50%;\r\n    }\r\n    100% {\r\n        background-position: 100%;\r\n    }\r\n}\r\n\r\n@keyframes BackwardAnimation {\r\n    0% {\r\n        background-position: 100%;\r\n    }\r\n    50% {\r\n        background-position: 50%;\r\n    }\r\n    100% {\r\n        background-position: 0%;\r\n    }\r\n}\r\n\r\n.animated-btn {\r\n    padding: 10px 25px;\r\n    border-radius: 20px;\r\n    border: none;\r\n    font-size: inherit;\r\n    background: linear-gradient(90deg, var(--bg-dark-blue-color), var(--bg-light-purple-color), var(--bg-dark-blue-color));\r\n    background-size: 200% 100%;\r\n    background-position: 0%;\r\n    color: white;\r\n    animation: BackwardAnimation .2s linear forwards;\r\n}\r\n\r\n.animated-btn:hover {\r\n    cursor: pointer;\r\n    animation: ForwardAnimation .2s linear forwards;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    gap: 2rem;\r\n}\r\n\r\n#main-heading {\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 2.5rem;\r\n    align-self: center;\r\n}\r\n\r\n#city-name {\r\n    color: var(--bg-light-purple-color);\r\n    text-shadow: 0px 0px 5px var(--bg-light-purple-color);\r\n}\r\n\r\nsection {\r\n    width: 100%;\r\n}\r\n\r\n.temp-box {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: start;\r\n    gap: 30px;\r\n    max-width: 32rem;\r\n    border: 2px solid var(--bg-light-purple-color-lighter);\r\n    border-radius: 20px;\r\n    box-shadow: 0px 0px 20px 1px var(--bg-light-purple-color);\r\n    padding: 20px;\r\n    color: white;\r\n}\r\n\r\n@media (max-width: 810px) {\r\n    .temp-box {\r\n        max-width: none;\r\n    }\r\n}\r\n\r\n#toggle-week-temp-view {\r\n    padding: 20px 25px;\r\n    border-radius: 30px;\r\n}\r\n\r\n.day-and-weather {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.day, .date {\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    color: var(--bg-light-purple-color);\r\n}\r\n\r\n.weather-icon {\r\n    width: 80px;\r\n}\r\n\r\n.weather-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    align-items: start;\r\n}\r\n\r\n.detail-heading {\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    color: var(--bg-light-purple-color);\r\n}\r\n\r\n#week-weather {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));\r\n    gap: 30px;\r\n}\r\n\r\n#week-weather > div[class=\"temp-box\"] {\r\n    max-width: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/JS/currentWeatherSection.js":
/*!*****************************************!*\
  !*** ./src/JS/currentWeatherSection.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentWeatherSection)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/JS/weather.js");


function currentWeatherSection() {
    const weatherObj = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherObj)();

    const section = document.createElement('section');
    section.id = 'weather-today';

    const tempBox = document.createElement('div');
    tempBox.setAttribute('class', 'temp-box');

    const dayAndWeather = document.createElement('div');
    dayAndWeather.setAttribute('class', 'day-and-weather');

    const day = document.createElement('span');
    day.setAttribute('class', 'day');
    day.innerText = weatherObj.day;
    dayAndWeather.appendChild(day);

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('class', 'weather-icon');
    weatherIcon.alt = 'Error';
    weatherIcon.src = weatherObj.icon;
    dayAndWeather.appendChild(weatherIcon);

    const list = document.createElement('ul');
    list.setAttribute('class', 'weather-details');

    const temp = document.createElement('li');
    temp.setAttribute('class', 'detail temperature');
    const heading1 = document.createElement('span');
    heading1.setAttribute('class', 'detail-heading');
    heading1.innerText = 'Temperature: ';
    temp.appendChild(heading1);
    const tempDesc = document.createElement('span');
    tempDesc.innerHTML = `${weatherObj.temperature} &deg;F`;
    temp.appendChild(tempDesc);
    list.appendChild(temp);

    const wind = document.createElement('li');
    wind.setAttribute('class', 'detail');
    const heading2 = document.createElement('span');
    heading2.setAttribute('class', 'detail-heading');
    heading2.innerText = 'Wind Speed: ';
    wind.appendChild(heading2);
    const windDesc = document.createElement('span');
    windDesc.innerHTML = `${weatherObj.windSpeed} MPH`;
    wind.appendChild(windDesc);
    list.appendChild(wind);

    const humidity = document.createElement('li');
    humidity.setAttribute('class', 'detail');
    const heading3 = document.createElement('span');
    heading3.setAttribute('class', 'detail-heading');
    heading3.innerText = 'Humidity: ';
    humidity.appendChild(heading3);
    const humidDesc = document.createElement('span');
    humidDesc.innerHTML = `${weatherObj.humidity}%`;
    humidity.appendChild(humidDesc);
    list.appendChild(humidity);

    const description = document.createElement('li');
    description.setAttribute('class', 'detail');
    const heading4 = document.createElement('span');
    heading4.setAttribute('class', 'detail-heading');
    heading4.innerText = 'Description: ';
    description.appendChild(heading4);
    const descDesc = document.createElement('span');
    descDesc.innerHTML = `${weatherObj.description}`;
    description.appendChild(descDesc);
    list.appendChild(description);

    tempBox.appendChild(dayAndWeather);
    tempBox.appendChild(list);

    section.appendChild(tempBox);

    return section;
}

/***/ }),

/***/ "./src/JS/fetchWeather.js":
/*!********************************!*\
  !*** ./src/JS/fetchWeather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/JS/weather.js");


function getRequest(cityName) {
    return new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/today/next7days?unitGroup=us&key=CWUNNQ9A45KQA5YP6G6JEXHRD`, {mode: 'cors'});
}

async function fetchWeather(cityName) {
    const request = getRequest(cityName);

    try {
        const response = await fetch(request);
        if (!response.ok) {
            console.log(`HTTP Error: ${response.status}`);
            return;
        }
        const result = await response.json();
        (0,_weather__WEBPACK_IMPORTED_MODULE_0__.initializeWeatherObj)(result);
    } catch (error) {
        console.log(`Fetch Error: ${error}`);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);

/***/ }),

/***/ "./src/JS/header.js":
/*!**************************!*\
  !*** ./src/JS/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHeader)
/* harmony export */ });
/* harmony import */ var _fetchWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather */ "./src/JS/fetchWeather.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/JS/main.js");



async function uponFormSubmittion(event) {
    event.preventDefault();
    
    const searchBox = document.getElementById('location-search');
    const cityName = searchBox.value;
    if (cityName === "" || cityName === null) {
        alert("No City Name Entered. Try Again!");
        return;
    }
    searchBox.value = null;
    await (0,_fetchWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName);
    (0,_main__WEBPACK_IMPORTED_MODULE_1__.updateMainSection)();
}

function getHeader() {
    const header = document.createElement('header');
    header.setAttribute('class', 'max-width');

    const siteTitle = document.createElement('span');
    siteTitle.id = 'site-title';
    siteTitle.innerText = 'Weather App';
    header.appendChild(siteTitle);

    const form = document.createElement('form');
    form.action = '#';

    const search = document.createElement('input');
    search.type = 'search';
    search.name = 'location';
    search.id = 'location-search';
    search.placeholder = 'Search Location';
    form.appendChild(search);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.id = 'search-btn';
    submit.setAttribute('class', 'animated-btn');
    submit.value = 'Search';
    form.appendChild(submit);
    form.addEventListener('submit', uponFormSubmittion);

    header.appendChild(form);

    return header;
}

/***/ }),

/***/ "./src/JS/main.js":
/*!************************!*\
  !*** ./src/JS/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMain),
/* harmony export */   updateMainSection: () => (/* binding */ updateMainSection)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/JS/weather.js");
/* harmony import */ var _currentWeatherSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentWeatherSection */ "./src/JS/currentWeatherSection.js");
/* harmony import */ var _weekWeatherSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekWeatherSection */ "./src/JS/weekWeatherSection.js");




function addWeekWeather() {
    const main = document.querySelector('main');
    const nextWeekWeather = (0,_weekWeatherSection__WEBPACK_IMPORTED_MODULE_2__["default"])();
    main.appendChild(nextWeekWeather);
    const btn = document.getElementById('toggle-week-temp-view');
    btn.innerText = "Hide Next 7 Days' Forecast";
}

function removeWeekWeather() {
    const main = document.querySelector('main');
    main.removeChild(main.lastChild);
    const btn = document.getElementById('toggle-week-temp-view');
    btn.innerText = "View Next 7 Days' Forecast";
}

function updateMainSection() {
    let hideWeeklyWeather = false;
    const main = document.querySelector('main');
    while (main.childElementCount > 1) {
        main.removeChild(main.lastChild);
    }
    const weather = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherObj)();
    document.getElementById('city-name').innerText = weather.resolvedAddress;
    const todayWeather = (0,_currentWeatherSection__WEBPACK_IMPORTED_MODULE_1__["default"])();
    main.appendChild(todayWeather);

    const weekWeatherPreviewBtn = document.createElement('button');
    weekWeatherPreviewBtn.id = 'toggle-week-temp-view';
    weekWeatherPreviewBtn.setAttribute('class', 'animated-btn');
    weekWeatherPreviewBtn.innerText = "View Next 7 Days' Forecast";
    weekWeatherPreviewBtn.addEventListener('click', () => {
        if (!hideWeeklyWeather) {
            addWeekWeather();
            hideWeeklyWeather = true;
        }
        else {
            removeWeekWeather();
            hideWeeklyWeather = false;
        }
    });
    main.appendChild(weekWeatherPreviewBtn);
}



function getMain() {
    const main = document.createElement('main');
    main.setAttribute('class', 'max-width');
    
    const heading = document.createElement('h1');
    heading.id = 'main-heading';
    heading.innerText = 'Weather In ';
    const cityName = document.createElement('span');
    cityName.id = 'city-name';
    cityName.innerText = '???';
    heading.appendChild(cityName);

    main.appendChild(heading);

    return main;
}

/***/ }),

/***/ "./src/JS/weather.js":
/*!***************************!*\
  !*** ./src/JS/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherArray: () => (/* binding */ getWeatherArray),
/* harmony export */   getWeatherObj: () => (/* binding */ getWeatherObj),
/* harmony export */   initializeWeatherObj: () => (/* binding */ initializeWeatherObj)
/* harmony export */ });
/* harmony import */ var _assets_sun_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sun.png */ "./src/assets/sun.png");
/* harmony import */ var _assets_partly_cloudy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/partly-cloudy.png */ "./src/assets/partly-cloudy.png");
/* harmony import */ var _assets_clouds_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/clouds.png */ "./src/assets/clouds.png");
/* harmony import */ var _assets_heavy_rain_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/heavy-rain.png */ "./src/assets/heavy-rain.png");
/* harmony import */ var _assets_storm_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/storm.png */ "./src/assets/storm.png");






let weatherObj = undefined;

class WEATHER {
    constructor () {
        this.day = undefined;
        this.date = undefined;
        this.temperature = undefined;
        this.humidity = undefined;
        this.windSpeed = undefined;
        this.resolvedAddress = undefined;
        this.description = undefined;
        this.icon = undefined;
    }

    set (jsonData) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        this.day = days[new Date().getDay()];
        this.resolvedAddress = jsonData.resolvedAddress;
        this.description = jsonData.description;
        this.temperature = jsonData.currentConditions.temp;
        this.humidity = jsonData.currentConditions.humidity;
        this.windSpeed = jsonData.currentConditions.windspeed;
        this.icon = setIcon(jsonData.currentConditions.icon);
    }
};

class WEATHER_ARRAY {
    constructor () {
        this.weatherArray = [];
    }

    set (jsonData) {
        for (let i = 0; i < 7; i++) {
            this.weatherArray[i] = new WEATHER();
            this.weatherArray[i].date = jsonData.days[i + 1].datetime;
            this.weatherArray[i].description = jsonData.days[i + 1].description;
            this.weatherArray[i].temperature = jsonData.days[i + 1].temp;
            this.weatherArray[i].humidity = jsonData.days[i + 1].humidity;
            this.weatherArray[i].windSpeed = jsonData.days[i + 1].windspeed;
            this.weatherArray[i].icon = setIcon(jsonData.days[i + 1].icon);
        }
    }
};

function setIcon(weather) {
    switch (weather) {
        case 'clear-day':
        case 'clear-night':
            return _assets_sun_png__WEBPACK_IMPORTED_MODULE_0__;
        case 'cloudy':
        case 'partly-cloudy-day':
        case 'partly-cloudy-night':
            return _assets_clouds_png__WEBPACK_IMPORTED_MODULE_2__;
        case 'partly-cloudy-day':
            return _assets_partly_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;
        case 'rain':
        case 'showers-day':
        case 'showers-night':
            return _assets_heavy_rain_png__WEBPACK_IMPORTED_MODULE_3__;
        case 'thunder-rain':
        case 'thunder-showers-day':
        case 'thunder-showers-night':
            return _assets_storm_png__WEBPACK_IMPORTED_MODULE_4__;
    }
}

let Data = undefined;

function initializeWeatherObj(jsonData) {
    weatherObj = new WEATHER ();
    weatherObj.set(jsonData);
    Data = jsonData;
    console.log(Data);
}

function getWeatherObj() { return weatherObj; }

function getWeatherArray() {
    let weatherArray = new WEATHER_ARRAY();
    weatherArray.set(Data);
    return weatherArray;
}



/***/ }),

/***/ "./src/JS/weekWeatherSection.js":
/*!**************************************!*\
  !*** ./src/JS/weekWeatherSection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weekWeatherSection)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/JS/weather.js");


function getTempBox(arr, index) {
    const tempBox = document.createElement('div');
    tempBox.setAttribute('class', 'temp-box');

    const dayAndWeather = document.createElement('div');
    dayAndWeather.setAttribute('class', 'day-and-weather');

    const Date = document.createElement('span');
    Date.setAttribute('class', 'date');
    Date.innerText = arr.weatherArray[index].date;
    dayAndWeather.appendChild(Date);

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('class', 'weather-icon');
    weatherIcon.alt = 'Error';
    weatherIcon.src = arr.weatherArray[index].icon;
    dayAndWeather.appendChild(weatherIcon);

    const list = document.createElement('ul');
    list.setAttribute('class', 'weather-details');

    const temp = document.createElement('li');
    temp.setAttribute('class', 'detail temperature');
    const heading1 = document.createElement('span');
    heading1.setAttribute('class', 'detail-heading');
    heading1.innerText = 'Temperature: ';
    temp.appendChild(heading1);
    const tempDesc = document.createElement('span');
    tempDesc.innerHTML = `${arr.weatherArray[index].temperature} &deg;F`;
    temp.appendChild(tempDesc);
    list.appendChild(temp);

    const wind = document.createElement('li');
    wind.setAttribute('class', 'detail');
    const heading2 = document.createElement('span');
    heading2.setAttribute('class', 'detail-heading');
    heading2.innerText = 'Wind Speed: ';
    wind.appendChild(heading2);
    const windDesc = document.createElement('span');
    windDesc.innerHTML = `${arr.weatherArray[index].windSpeed} MPH`;
    wind.appendChild(windDesc);
    list.appendChild(wind);

    const humidity = document.createElement('li');
    humidity.setAttribute('class', 'detail');
    const heading3 = document.createElement('span');
    heading3.setAttribute('class', 'detail-heading');
    heading3.innerText = 'Humidity: ';
    humidity.appendChild(heading3);
    const humidDesc = document.createElement('span');
    humidDesc.innerHTML = `${arr.weatherArray[index].humidity}%`;
    humidity.appendChild(humidDesc);
    list.appendChild(humidity);

    const description = document.createElement('li');
    description.setAttribute('class', 'detail');
    const heading4 = document.createElement('span');
    heading4.setAttribute('class', 'detail-heading');
    heading4.innerText = 'Description: ';
    description.appendChild(heading4);
    const descDesc = document.createElement('span');
    descDesc.innerHTML = `${arr.weatherArray[index].description}`;
    description.appendChild(descDesc);
    list.appendChild(description);

    tempBox.appendChild(dayAndWeather);
    tempBox.appendChild(list);

    return tempBox;
}

function weekWeatherSection() {
    const weatherArray = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherArray)();
    const section = document.createElement('section');
    section.id = 'week-weather';
    for (let i = 0; i < 7; i++) {
        let tempBox = getTempBox(weatherArray, i);
        section.appendChild(tempBox);
    }
    return section;
}

/***/ }),

/***/ "./src/assets/clouds.png":
/*!*******************************!*\
  !*** ./src/assets/clouds.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15eb556cd941ec7fc2b4.png";

/***/ }),

/***/ "./src/assets/heavy-rain.png":
/*!***********************************!*\
  !*** ./src/assets/heavy-rain.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d05e09379e6a6a9b19f3.png";

/***/ }),

/***/ "./src/assets/partly-cloudy.png":
/*!**************************************!*\
  !*** ./src/assets/partly-cloudy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "048eacc725e9a07d44f9.png";

/***/ }),

/***/ "./src/assets/storm.png":
/*!******************************!*\
  !*** ./src/assets/storm.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34ba1304792a31b7d163.png";

/***/ }),

/***/ "./src/assets/sun.png":
/*!****************************!*\
  !*** ./src/assets/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27a5d8395620746ff965.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/JS/header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/JS/main.js");




function start() {
    const body = document.body;

    const header = (0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
    body.appendChild(header);

    const main = (0,_main__WEBPACK_IMPORTED_MODULE_2__["default"])();
    body.appendChild(main);
}

start();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FB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azovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9KUy9jdXJyZW50V2VhdGhlclNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9KUy9mZXRjaFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9KUy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9KUy9tYWluLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvSlMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL0pTL3dlZWtXZWF0aGVyU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL0pTL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIC0tYmctZGFyay1ibHVlLWNvbG9yOiByZ2IoNzcsIDAsIDEyOCk7XHJcbiAgICAtLWJnLWxpZ2h0LXB1cnBsZS1jb2xvcjogcmdiKDI1NSwgMCwgMjU1KTtcclxuICAgIC0tYmctbGlnaHQtcHVycGxlLWNvbG9yLWxpZ2h0ZXI6IHJnYigyNTMsIDkwLCAyNTMpO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIC8qIGhlaWdodDogNnB4OyAqL1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWRhcmstYmx1ZS1jb2xvcik7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctbGlnaHQtcHVycGxlLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3ItbGlnaHRlcik7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHRvcCAsIHZhcigtLWJnLWRhcmstYmx1ZS1jb2xvciksIGJsYWNrKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3IpIHZhcigtLWJnLWxpZ2h0LXB1cnBsZS1jb2xvcik7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4jc2l0ZS10aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAgICNzaXRlLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG59XHJcblxyXG4jbG9jYXRpb24tc2VhcmNoIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAxcHggdmFyKC0tYmctbGlnaHQtcHVycGxlLWNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxuXHJcbiNsb2NhdGlvbi1zZWFyY2g6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBGb3J3YXJkQW5pbWF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBCYWNrd2FyZEFuaW1hdGlvbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlZC1idG4ge1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYmctZGFyay1ibHVlLWNvbG9yKSwgdmFyKC0tYmctbGlnaHQtcHVycGxlLWNvbG9yKSwgdmFyKC0tYmctZGFyay1ibHVlLWNvbG9yKSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBCYWNrd2FyZEFuaW1hdGlvbiAuMnMgbGluZWFyIGZvcndhcmRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWQtYnRuOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFuaW1hdGlvbjogRm9yd2FyZEFuaW1hdGlvbiAuMnMgbGluZWFyIGZvcndhcmRzO1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4jbWFpbi1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4jY2l0eS1uYW1lIHtcclxuICAgIGNvbG9yOiB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWJnLWxpZ2h0LXB1cnBsZS1jb2xvcik7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZW1wLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIGdhcDogMzBweDtcclxuICAgIG1heC13aWR0aDogMzJyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3ItbGlnaHRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDFweCB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMHB4KSB7XHJcbiAgICAudGVtcC1ib3gge1xyXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuI3RvZ2dsZS13ZWVrLXRlbXAtdmlldyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uZGF5LWFuZC13ZWF0aGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kYXksIC5kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHZhcigtLWJnLWxpZ2h0LXB1cnBsZS1jb2xvcik7XHJcbn1cclxuXHJcbi53ZWF0aGVyLWljb24ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi53ZWF0aGVyLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmRldGFpbC1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3IpO1xyXG59XHJcblxyXG4jd2Vlay13ZWF0aGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyLjVyZW0sIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4jd2Vlay13ZWF0aGVyID4gZGl2W2NsYXNzPVwidGVtcC1ib3hcIl0ge1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHlDQUF5QztJQUN6QyxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2RUFBNkU7SUFDN0UsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsMEVBQTBFO0FBQzlFOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlEQUF5RDtJQUN6RCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzSEFBc0g7SUFDdEgsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixzREFBc0Q7SUFDdEQsbUJBQW1CO0lBQ25CLHlEQUF5RDtJQUN6RCxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZEQUE2RDtJQUM3RCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tYmctZGFyay1ibHVlLWNvbG9yOiByZ2IoNzcsIDAsIDEyOCk7XFxyXFxuICAgIC0tYmctbGlnaHQtcHVycGxlLWNvbG9yOiByZ2IoMjU1LCAwLCAyNTUpO1xcclxcbiAgICAtLWJnLWxpZ2h0LXB1cnBsZS1jb2xvci1saWdodGVyOiByZ2IoMjUzLCA5MCwgMjUzKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG4gICAgLyogaGVpZ2h0OiA2cHg7ICovXFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrLWJsdWUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctbGlnaHQtcHVycGxlLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctbGlnaHQtcHVycGxlLWNvbG9yLWxpZ2h0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wICwgdmFyKC0tYmctZGFyay1ibHVlLWNvbG9yKSwgYmxhY2spO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tYmctbGlnaHQtcHVycGxlLWNvbG9yKSB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHRleHQtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm1heC13aWR0aCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEyMzBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpdGUtdGl0bGUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxyXFxuICAgICNzaXRlLXRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAzODBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLXNlYXJjaCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMXB4IHZhcigtLWJnLWxpZ2h0LXB1cnBsZS1jb2xvcik7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbi1zZWFyY2g6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIEZvcndhcmRBbmltYXRpb24ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIEJhY2t3YXJkQW5pbWF0aW9uIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGVkLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYmctZGFyay1ibHVlLWNvbG9yKSwgdmFyKC0tYmctbGlnaHQtcHVycGxlLWNvbG9yKSwgdmFyKC0tYmctZGFyay1ibHVlLWNvbG9yKSk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBhbmltYXRpb246IEJhY2t3YXJkQW5pbWF0aW9uIC4ycyBsaW5lYXIgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRlZC1idG46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGFuaW1hdGlvbjogRm9yd2FyZEFuaW1hdGlvbiAuMnMgbGluZWFyIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNtYWluLWhlYWRpbmcge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NpdHktbmFtZSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3IpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYmctbGlnaHQtcHVycGxlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1ib3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDMycmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3ItbGlnaHRlcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAxcHggdmFyKC0tYmctbGlnaHQtcHVycGxlLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODEwcHgpIHtcXHJcXG4gICAgLnRlbXAtYm94IHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jdG9nZ2xlLXdlZWstdGVtcC12aWV3IHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWFuZC13ZWF0aGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRheSwgLmRhdGUge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZy1saWdodC1wdXJwbGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWhlYWRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJnLWxpZ2h0LXB1cnBsZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN3ZWVrLXdlYXRoZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyLjVyZW0sIDFmcikpO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiN3ZWVrLXdlYXRoZXIgPiBkaXZbY2xhc3M9XFxcInRlbXAtYm94XFxcIl0ge1xcclxcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0V2VhdGhlck9iaiB9IGZyb20gXCIuL3dlYXRoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbnRXZWF0aGVyU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBnZXRXZWF0aGVyT2JqKCk7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIHNlY3Rpb24uaWQgPSAnd2VhdGhlci10b2RheSc7XHJcblxyXG4gICAgY29uc3QgdGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVtcEJveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAtYm94Jyk7XHJcblxyXG4gICAgY29uc3QgZGF5QW5kV2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGF5QW5kV2VhdGhlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RheS1hbmQtd2VhdGhlcicpO1xyXG5cclxuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RheScpO1xyXG4gICAgZGF5LmlubmVyVGV4dCA9IHdlYXRoZXJPYmouZGF5O1xyXG4gICAgZGF5QW5kV2VhdGhlci5hcHBlbmRDaGlsZChkYXkpO1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB3ZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXItaWNvbicpO1xyXG4gICAgd2VhdGhlckljb24uYWx0ID0gJ0Vycm9yJztcclxuICAgIHdlYXRoZXJJY29uLnNyYyA9IHdlYXRoZXJPYmouaWNvbjtcclxuICAgIGRheUFuZFdlYXRoZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXItZGV0YWlscycpO1xyXG5cclxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCB0ZW1wZXJhdHVyZScpO1xyXG4gICAgY29uc3QgaGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBoZWFkaW5nMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbC1oZWFkaW5nJyk7XHJcbiAgICBoZWFkaW5nMS5pbm5lclRleHQgPSAnVGVtcGVyYXR1cmU6ICc7XHJcbiAgICB0ZW1wLmFwcGVuZENoaWxkKGhlYWRpbmcxKTtcclxuICAgIGNvbnN0IHRlbXBEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGVtcERlc2MuaW5uZXJIVE1MID0gYCR7d2VhdGhlck9iai50ZW1wZXJhdHVyZX0gJmRlZztGYDtcclxuICAgIHRlbXAuYXBwZW5kQ2hpbGQodGVtcERlc2MpO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuXHJcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHdpbmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcclxuICAgIGNvbnN0IGhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgaGVhZGluZzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwtaGVhZGluZycpO1xyXG4gICAgaGVhZGluZzIuaW5uZXJUZXh0ID0gJ1dpbmQgU3BlZWQ6ICc7XHJcbiAgICB3aW5kLmFwcGVuZENoaWxkKGhlYWRpbmcyKTtcclxuICAgIGNvbnN0IHdpbmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgd2luZERlc2MuaW5uZXJIVE1MID0gYCR7d2VhdGhlck9iai53aW5kU3BlZWR9IE1QSGA7XHJcbiAgICB3aW5kLmFwcGVuZENoaWxkKHdpbmREZXNjKTtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQod2luZCk7XHJcblxyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaHVtaWRpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcclxuICAgIGNvbnN0IGhlYWRpbmczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgaGVhZGluZzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwtaGVhZGluZycpO1xyXG4gICAgaGVhZGluZzMuaW5uZXJUZXh0ID0gJ0h1bWlkaXR5OiAnO1xyXG4gICAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaGVhZGluZzMpO1xyXG4gICAgY29uc3QgaHVtaWREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgaHVtaWREZXNjLmlubmVySFRNTCA9IGAke3dlYXRoZXJPYmouaHVtaWRpdHl9JWA7XHJcbiAgICBodW1pZGl0eS5hcHBlbmRDaGlsZChodW1pZERlc2MpO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcclxuICAgIGNvbnN0IGhlYWRpbmc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgaGVhZGluZzQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwtaGVhZGluZycpO1xyXG4gICAgaGVhZGluZzQuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xyXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaGVhZGluZzQpO1xyXG4gICAgY29uc3QgZGVzY0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkZXNjRGVzYy5pbm5lckhUTUwgPSBgJHt3ZWF0aGVyT2JqLmRlc2NyaXB0aW9ufWA7XHJcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjRGVzYyk7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICB0ZW1wQm94LmFwcGVuZENoaWxkKGRheUFuZFdlYXRoZXIpO1xyXG4gICAgdGVtcEJveC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRlbXBCb3gpO1xyXG5cclxuICAgIHJldHVybiBzZWN0aW9uO1xyXG59IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYXRoZXJPYmogfSBmcm9tIFwiLi93ZWF0aGVyXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRSZXF1ZXN0KGNpdHlOYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7Y2l0eU5hbWV9L3RvZGF5L25leHQ3ZGF5cz91bml0R3JvdXA9dXMma2V5PUNXVU5OUTlBNDVLUUE1WVA2RzZKRVhIUkRgLCB7bW9kZTogJ2NvcnMnfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihjaXR5TmFtZSkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGdldFJlcXVlc3QoY2l0eU5hbWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBIVFRQIEVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaW5pdGlhbGl6ZVdlYXRoZXJPYmoocmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEZldGNoIEVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaFdlYXRoZXI7IiwiaW1wb3J0IGZldGNoV2VhdGhlciBmcm9tIFwiLi9mZXRjaFdlYXRoZXJcIjtcclxuaW1wb3J0IHsgdXBkYXRlTWFpblNlY3Rpb24gfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cG9uRm9ybVN1Ym1pdHRpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbi1zZWFyY2gnKTtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gc2VhcmNoQm94LnZhbHVlO1xyXG4gICAgaWYgKGNpdHlOYW1lID09PSBcIlwiIHx8IGNpdHlOYW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoXCJObyBDaXR5IE5hbWUgRW50ZXJlZC4gVHJ5IEFnYWluIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZWFyY2hCb3gudmFsdWUgPSBudWxsO1xyXG4gICAgYXdhaXQgZmV0Y2hXZWF0aGVyKGNpdHlOYW1lKTtcclxuICAgIHVwZGF0ZU1haW5TZWN0aW9uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWF4LXdpZHRoJyk7XHJcblxyXG4gICAgY29uc3Qgc2l0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc2l0ZVRpdGxlLmlkID0gJ3NpdGUtdGl0bGUnO1xyXG4gICAgc2l0ZVRpdGxlLmlubmVyVGV4dCA9ICdXZWF0aGVyIEFwcCc7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2l0ZVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5hY3Rpb24gPSAnIyc7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHNlYXJjaC50eXBlID0gJ3NlYXJjaCc7XHJcbiAgICBzZWFyY2gubmFtZSA9ICdsb2NhdGlvbic7XHJcbiAgICBzZWFyY2guaWQgPSAnbG9jYXRpb24tc2VhcmNoJztcclxuICAgIHNlYXJjaC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggTG9jYXRpb24nO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWFyY2gpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgc3VibWl0LmlkID0gJ3NlYXJjaC1idG4nO1xyXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYW5pbWF0ZWQtYnRuJyk7XHJcbiAgICBzdWJtaXQudmFsdWUgPSAnU2VhcmNoJztcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdXBvbkZvcm1TdWJtaXR0aW9uKTtcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufSIsImltcG9ydCB7IGdldFdlYXRoZXJPYmogfSBmcm9tIFwiLi93ZWF0aGVyXCI7XHJcbmltcG9ydCBjdXJyZW50V2VhdGhlclNlY3Rpb24gZnJvbSBcIi4vY3VycmVudFdlYXRoZXJTZWN0aW9uXCI7XHJcbmltcG9ydCB3ZWVrV2VhdGhlclNlY3Rpb24gZnJvbSBcIi4vd2Vla1dlYXRoZXJTZWN0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRXZWVrV2VhdGhlcigpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICBjb25zdCBuZXh0V2Vla1dlYXRoZXIgPSB3ZWVrV2VhdGhlclNlY3Rpb24oKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmV4dFdlZWtXZWF0aGVyKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtd2Vlay10ZW1wLXZpZXcnKTtcclxuICAgIGJ0bi5pbm5lclRleHQgPSBcIkhpZGUgTmV4dCA3IERheXMnIEZvcmVjYXN0XCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVdlZWtXZWF0aGVyKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS13ZWVrLXRlbXAtdmlldycpO1xyXG4gICAgYnRuLmlubmVyVGV4dCA9IFwiVmlldyBOZXh0IDcgRGF5cycgRm9yZWNhc3RcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTWFpblNlY3Rpb24oKSB7XHJcbiAgICBsZXQgaGlkZVdlZWtseVdlYXRoZXIgPSBmYWxzZTtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICB3aGlsZSAobWFpbi5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdlYXRoZXIgPSBnZXRXZWF0aGVyT2JqKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lJykuaW5uZXJUZXh0ID0gd2VhdGhlci5yZXNvbHZlZEFkZHJlc3M7XHJcbiAgICBjb25zdCB0b2RheVdlYXRoZXIgPSBjdXJyZW50V2VhdGhlclNlY3Rpb24oKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVyKTtcclxuXHJcbiAgICBjb25zdCB3ZWVrV2VhdGhlclByZXZpZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHdlZWtXZWF0aGVyUHJldmlld0J0bi5pZCA9ICd0b2dnbGUtd2Vlay10ZW1wLXZpZXcnO1xyXG4gICAgd2Vla1dlYXRoZXJQcmV2aWV3QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYW5pbWF0ZWQtYnRuJyk7XHJcbiAgICB3ZWVrV2VhdGhlclByZXZpZXdCdG4uaW5uZXJUZXh0ID0gXCJWaWV3IE5leHQgNyBEYXlzJyBGb3JlY2FzdFwiO1xyXG4gICAgd2Vla1dlYXRoZXJQcmV2aWV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICghaGlkZVdlZWtseVdlYXRoZXIpIHtcclxuICAgICAgICAgICAgYWRkV2Vla1dlYXRoZXIoKTtcclxuICAgICAgICAgICAgaGlkZVdlZWtseVdlYXRoZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVtb3ZlV2Vla1dlYXRoZXIoKTtcclxuICAgICAgICAgICAgaGlkZVdlZWtseVdlYXRoZXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQod2Vla1dlYXRoZXJQcmV2aWV3QnRuKTtcclxufVxyXG5cclxuZXhwb3J0IHt1cGRhdGVNYWluU2VjdGlvbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYXgtd2lkdGgnKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkaW5nLmlkID0gJ21haW4taGVhZGluZyc7XHJcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9ICdXZWF0aGVyIEluICc7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNpdHlOYW1lLmlkID0gJ2NpdHktbmFtZSc7XHJcbiAgICBjaXR5TmFtZS5pbm5lclRleHQgPSAnPz8/JztcclxuICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcbn0iLCJpbXBvcnQgc3VubnkgZnJvbSAnLi4vYXNzZXRzL3N1bi5wbmcnO1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5IGZyb20gJy4uL2Fzc2V0cy9wYXJ0bHktY2xvdWR5LnBuZyc7XHJcbmltcG9ydCBjbG91ZHkgZnJvbSAnLi4vYXNzZXRzL2Nsb3Vkcy5wbmcnO1xyXG5pbXBvcnQgcmFpbiBmcm9tICcuLi9hc3NldHMvaGVhdnktcmFpbi5wbmcnO1xyXG5pbXBvcnQgc3Rvcm0gZnJvbSAnLi4vYXNzZXRzL3N0b3JtLnBuZyc7XHJcblxyXG5sZXQgd2VhdGhlck9iaiA9IHVuZGVmaW5lZDtcclxuXHJcbmNsYXNzIFdFQVRIRVIge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZGF5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy53aW5kU3BlZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlZEFkZHJlc3MgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmljb24gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IChqc29uRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRheXMgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXVxyXG4gICAgICAgIHRoaXMuZGF5ID0gZGF5c1tuZXcgRGF0ZSgpLmdldERheSgpXTtcclxuICAgICAgICB0aGlzLnJlc29sdmVkQWRkcmVzcyA9IGpzb25EYXRhLnJlc29sdmVkQWRkcmVzcztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0ganNvbkRhdGEuZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXA7XHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLmh1bWlkaXR5O1xyXG4gICAgICAgIHRoaXMud2luZFNwZWVkID0ganNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkO1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IHNldEljb24oanNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMuaWNvbik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBXRUFUSEVSX0FSUkFZIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXJBcnJheSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCAoanNvbkRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXJBcnJheVtpXSA9IG5ldyBXRUFUSEVSKCk7XHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlckFycmF5W2ldLmRhdGUgPSBqc29uRGF0YS5kYXlzW2kgKyAxXS5kYXRldGltZTtcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVyQXJyYXlbaV0uZGVzY3JpcHRpb24gPSBqc29uRGF0YS5kYXlzW2kgKyAxXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVyQXJyYXlbaV0udGVtcGVyYXR1cmUgPSBqc29uRGF0YS5kYXlzW2kgKyAxXS50ZW1wO1xyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXJBcnJheVtpXS5odW1pZGl0eSA9IGpzb25EYXRhLmRheXNbaSArIDFdLmh1bWlkaXR5O1xyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXJBcnJheVtpXS53aW5kU3BlZWQgPSBqc29uRGF0YS5kYXlzW2kgKyAxXS53aW5kc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlckFycmF5W2ldLmljb24gPSBzZXRJY29uKGpzb25EYXRhLmRheXNbaSArIDFdLmljb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldEljb24od2VhdGhlcikge1xyXG4gICAgc3dpdGNoICh3ZWF0aGVyKSB7XHJcbiAgICAgICAgY2FzZSAnY2xlYXItZGF5JzpcclxuICAgICAgICBjYXNlICdjbGVhci1uaWdodCc6XHJcbiAgICAgICAgICAgIHJldHVybiBzdW5ueTtcclxuICAgICAgICBjYXNlICdjbG91ZHknOlxyXG4gICAgICAgIGNhc2UgJ3BhcnRseS1jbG91ZHktZGF5JzpcclxuICAgICAgICBjYXNlICdwYXJ0bHktY2xvdWR5LW5pZ2h0JzpcclxuICAgICAgICAgICAgcmV0dXJuIGNsb3VkeTtcclxuICAgICAgICBjYXNlICdwYXJ0bHktY2xvdWR5LWRheSc6XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHk7XHJcbiAgICAgICAgY2FzZSAncmFpbic6XHJcbiAgICAgICAgY2FzZSAnc2hvd2Vycy1kYXknOlxyXG4gICAgICAgIGNhc2UgJ3Nob3dlcnMtbmlnaHQnOlxyXG4gICAgICAgICAgICByZXR1cm4gcmFpbjtcclxuICAgICAgICBjYXNlICd0aHVuZGVyLXJhaW4nOlxyXG4gICAgICAgIGNhc2UgJ3RodW5kZXItc2hvd2Vycy1kYXknOlxyXG4gICAgICAgIGNhc2UgJ3RodW5kZXItc2hvd2Vycy1uaWdodCc6XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9ybTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IERhdGEgPSB1bmRlZmluZWQ7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplV2VhdGhlck9iaihqc29uRGF0YSkge1xyXG4gICAgd2VhdGhlck9iaiA9IG5ldyBXRUFUSEVSICgpO1xyXG4gICAgd2VhdGhlck9iai5zZXQoanNvbkRhdGEpO1xyXG4gICAgRGF0YSA9IGpzb25EYXRhO1xyXG4gICAgY29uc29sZS5sb2coRGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXJPYmooKSB7IHJldHVybiB3ZWF0aGVyT2JqOyB9XHJcblxyXG5mdW5jdGlvbiBnZXRXZWF0aGVyQXJyYXkoKSB7XHJcbiAgICBsZXQgd2VhdGhlckFycmF5ID0gbmV3IFdFQVRIRVJfQVJSQVkoKTtcclxuICAgIHdlYXRoZXJBcnJheS5zZXQoRGF0YSk7XHJcbiAgICByZXR1cm4gd2VhdGhlckFycmF5O1xyXG59XHJcblxyXG5leHBvcnQge2luaXRpYWxpemVXZWF0aGVyT2JqLCBnZXRXZWF0aGVyT2JqLCBnZXRXZWF0aGVyQXJyYXl9OyIsImltcG9ydCB7IGdldFdlYXRoZXJBcnJheSB9IGZyb20gXCIuL3dlYXRoZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGdldFRlbXBCb3goYXJyLCBpbmRleCkge1xyXG4gICAgY29uc3QgdGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVtcEJveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAtYm94Jyk7XHJcblxyXG4gICAgY29uc3QgZGF5QW5kV2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGF5QW5kV2VhdGhlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RheS1hbmQtd2VhdGhlcicpO1xyXG5cclxuICAgIGNvbnN0IERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZScpO1xyXG4gICAgRGF0ZS5pbm5lclRleHQgPSBhcnIud2VhdGhlckFycmF5W2luZGV4XS5kYXRlO1xyXG4gICAgZGF5QW5kV2VhdGhlci5hcHBlbmRDaGlsZChEYXRlKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgd2VhdGhlckljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWF0aGVyLWljb24nKTtcclxuICAgIHdlYXRoZXJJY29uLmFsdCA9ICdFcnJvcic7XHJcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBhcnIud2VhdGhlckFycmF5W2luZGV4XS5pY29uO1xyXG4gICAgZGF5QW5kV2VhdGhlci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1kZXRhaWxzJyk7XHJcblxyXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsIHRlbXBlcmF0dXJlJyk7XHJcbiAgICBjb25zdCBoZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGhlYWRpbmcxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsLWhlYWRpbmcnKTtcclxuICAgIGhlYWRpbmcxLmlubmVyVGV4dCA9ICdUZW1wZXJhdHVyZTogJztcclxuICAgIHRlbXAuYXBwZW5kQ2hpbGQoaGVhZGluZzEpO1xyXG4gICAgY29uc3QgdGVtcERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZW1wRGVzYy5pbm5lckhUTUwgPSBgJHthcnIud2VhdGhlckFycmF5W2luZGV4XS50ZW1wZXJhdHVyZX0gJmRlZztGYDtcclxuICAgIHRlbXAuYXBwZW5kQ2hpbGQodGVtcERlc2MpO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuXHJcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHdpbmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcclxuICAgIGNvbnN0IGhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgaGVhZGluZzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwtaGVhZGluZycpO1xyXG4gICAgaGVhZGluZzIuaW5uZXJUZXh0ID0gJ1dpbmQgU3BlZWQ6ICc7XHJcbiAgICB3aW5kLmFwcGVuZENoaWxkKGhlYWRpbmcyKTtcclxuICAgIGNvbnN0IHdpbmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgd2luZERlc2MuaW5uZXJIVE1MID0gYCR7YXJyLndlYXRoZXJBcnJheVtpbmRleF0ud2luZFNwZWVkfSBNUEhgO1xyXG4gICAgd2luZC5hcHBlbmRDaGlsZCh3aW5kRGVzYyk7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKHdpbmQpO1xyXG5cclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGh1bWlkaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsJyk7XHJcbiAgICBjb25zdCBoZWFkaW5nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGhlYWRpbmczLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsLWhlYWRpbmcnKTtcclxuICAgIGhlYWRpbmczLmlubmVyVGV4dCA9ICdIdW1pZGl0eTogJztcclxuICAgIGh1bWlkaXR5LmFwcGVuZENoaWxkKGhlYWRpbmczKTtcclxuICAgIGNvbnN0IGh1bWlkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGh1bWlkRGVzYy5pbm5lckhUTUwgPSBgJHthcnIud2VhdGhlckFycmF5W2luZGV4XS5odW1pZGl0eX0lYDtcclxuICAgIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkRGVzYyk7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCcpO1xyXG4gICAgY29uc3QgaGVhZGluZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBoZWFkaW5nNC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbC1oZWFkaW5nJyk7XHJcbiAgICBoZWFkaW5nNC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICc7XHJcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nNCk7XHJcbiAgICBjb25zdCBkZXNjRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRlc2NEZXNjLmlubmVySFRNTCA9IGAke2Fyci53ZWF0aGVyQXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9ufWA7XHJcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjRGVzYyk7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICB0ZW1wQm94LmFwcGVuZENoaWxkKGRheUFuZFdlYXRoZXIpO1xyXG4gICAgdGVtcEJveC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcbiAgICByZXR1cm4gdGVtcEJveDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2Vla1dlYXRoZXJTZWN0aW9uKCkge1xyXG4gICAgY29uc3Qgd2VhdGhlckFycmF5ID0gZ2V0V2VhdGhlckFycmF5KCk7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgc2VjdGlvbi5pZCA9ICd3ZWVrLXdlYXRoZXInO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICBsZXQgdGVtcEJveCA9IGdldFRlbXBCb3god2VhdGhlckFycmF5LCBpKTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRlbXBCb3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlY3Rpb247XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2V0SGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IGdldE1haW4gZnJvbSAnLi9tYWluJztcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZ2V0SGVhZGVyKCk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGdldE1haW4oKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcbn1cclxuXHJcbnN0YXJ0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9