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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/pmx.ts":
/*!********************!*\
  !*** ./lib/pmx.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pmx; });
function pmx(tagName, attributes) {
    if (attributes === void 0) { attributes = {}; }
    var elem = document.createElement(tagName);
    if (attributes) {
        for (var attributeName in attributes.attrs) {
            elem.setAttribute(attributeName, attributes.attrs[attributeName]);
        }
        if (attributes.id) {
            elem.setAttribute("id", attributes.id);
        }
        if (attributes.classList) {
            for (var _i = 0, _a = attributes.classList; _i < _a.length; _i++) {
                var className = _a[_i];
                elem.classList.add(className);
            }
        }
        if (attributes.children) {
            for (var _b = 0, _c = attributes.children; _b < _c.length; _b++) {
                var child = _c[_b];
                elem.appendChild(child);
            }
        }
        else if (attributes.text) {
            elem.textContent = attributes.text;
        }
        else if (attributes.html) {
            elem.innerHTML = attributes.html;
        }
        if (attributes.style) {
            for (var property in attributes.style) {
                elem.style.setProperty(property, attributes.style[property]);
            }
        }
    }
    return elem;
}


/***/ }),

/***/ "./src/elem/cardElem.ts":
/*!******************************!*\
  !*** ./src/elem/cardElem.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_pmx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/pmx */ "./lib/pmx.ts");
/* harmony import */ var _interpolateElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolateElem */ "./src/elem/interpolateElem.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CardElem = /** @class */ (function (_super) {
    __extends(CardElem, _super);
    function CardElem(params, headingLevel) {
        if (headingLevel === void 0) { headingLevel = 2; }
        var _this = this;
        var headingTag = "h" + headingLevel;
        _this = _super.call(this, "<" + headingTag + ">${heading}</" + headingTag + "><p>${body}<p>") || this;
        _this.element = Object(_lib_pmx__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { classList: ["card"] });
        _this.setParams(params);
        return _this;
    }
    return CardElem;
}(_interpolateElem__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (CardElem);


/***/ }),

/***/ "./src/elem/elem.ts":
/*!**************************!*\
  !*** ./src/elem/elem.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Elem = /** @class */ (function () {
    function Elem() {
    }
    Elem.sanitize = function (html) {
        var d = document.createElement("div");
        d.innerHTML = html;
        return d.textContent;
    };
    Elem.escape = function (text) {
        var d = document.createElement("div");
        d.textContent = text;
        return d.innerHTML;
    };
    Elem.prototype.getElement = function () {
        return this.element;
    };
    Elem.prototype.addElem = function (elem) {
        this.element.appendChild(elem.getElement());
    };
    Elem.prototype.appendTo = function (parentElement) {
        parentElement.appendChild(this.element);
    };
    Elem.prototype.appendToHead = function (parentElement) {
        if (parentElement.children.length === 0)
            this.appendTo(parentElement);
        else
            parentElement.insertBefore(this.element, parentElement.children[0]);
    };
    return Elem;
}());
/* harmony default export */ __webpack_exports__["default"] = (Elem);


/***/ }),

/***/ "./src/elem/interpolateElem.ts":
/*!*************************************!*\
  !*** ./src/elem/interpolateElem.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elem */ "./src/elem/elem.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * TODO: refactor the interpolation algorithm so that not the whole innerHTML needs to be replaced.
 * i.e. upon construction, for each child in template, copy the relevant part of the template into an associated field (e.g. dataset or a private dictionary),
 * and upon interpolation use each element's corresponding template to replace its own innerHTML instead of replacing the whole innerHTML
 * more expensive during construction but cheaper during updates (of course, confirm with benchmarks...)
 */
var InterpolateElem = /** @class */ (function (_super) {
    __extends(InterpolateElem, _super);
    function InterpolateElem(template) {
        var _this = _super.call(this) || this;
        _this.params = {};
        _this.template = template;
        return _this;
    }
    InterpolateElem.prototype.escapeRegEx = function (str) {
        // https://stackoverflow.com/a/6969486
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };
    InterpolateElem.prototype.interpolate = function () {
        var result = this.template;
        for (var key in this.params) {
            result = result.replace(new RegExp(this.escapeRegEx("${" + key + "}"), "g"), this.params[key].toString());
        }
        this.element.innerHTML = result;
    };
    InterpolateElem.prototype.setParams = function (params) {
        for (var key in params) {
            this.params[key] = params[key];
        }
        this.interpolate();
    };
    InterpolateElem.prototype.getParams = function () {
        return this.params;
    };
    InterpolateElem.prototype.setTemplate = function (template) {
        this.template = template;
    };
    return InterpolateElem;
}(_elem__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (InterpolateElem);


/***/ }),

/***/ "./src/elem/siteCardElem.ts":
/*!**********************************!*\
  !*** ./src/elem/siteCardElem.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardElem */ "./src/elem/cardElem.ts");
/* harmony import */ var _elem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elem */ "./src/elem/elem.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SiteCardElem = /** @class */ (function (_super) {
    __extends(SiteCardElem, _super);
    function SiteCardElem(info) {
        var _this = _super.call(this, {}, 2) || this;
        _this.element.classList.add("site-card");
        _this.setParams(_this.processSiteInfo(info));
        return _this;
    }
    SiteCardElem.prototype.processSiteInfo = function (info) {
        return {
            heading: _elem__WEBPACK_IMPORTED_MODULE_1__["default"].escape(info.title),
            body: _elem__WEBPACK_IMPORTED_MODULE_1__["default"].escape(info.url)
        };
    };
    return SiteCardElem;
}(_cardElem__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SiteCardElem);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elem_siteCardElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elem/siteCardElem */ "./src/elem/siteCardElem.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

document.addEventListener("DOMContentLoaded", function () { return __awaiter(void 0, void 0, void 0, function () {
    var topSites, _i, topSites_1, info, card;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, browser.topSites.get()];
            case 1:
                topSites = _a.sent();
                for (_i = 0, topSites_1 = topSites; _i < topSites_1.length; _i++) {
                    info = topSites_1[_i];
                    card = new _elem_siteCardElem__WEBPACK_IMPORTED_MODULE_0__["default"](info);
                    card.appendTo(document.body);
                }
                return [2 /*return*/];
        }
    });
}); });


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL3BteC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbS9jYXJkRWxlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbS9lbGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtL2ludGVycG9sYXRlRWxlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbS9zaXRlQ2FyZEVsZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQWUsU0FBUyxHQUFHLENBQUMsT0FBZSxFQUFFLFVBQTJCO0lBQTNCLDRDQUEyQjtJQUNwRSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUUxQyxJQUFJLFVBQVUs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCOEM7QUFFL0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFOzs7O29CQUN6QixxQkFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTs7Z0JBQXZDLFFBQVEsR0FBRyxTQUE0QjtnQkFDN0MsV0FBeUIsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO29CQUFsQixJQUFJO29CQUNILElBQUksR0FBRyxJQUFJLDBEQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNoQzs7OztLQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW50ZXJmYWNlIEF0dHJpYnV0ZXMge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGNsYXNzTGlzdD86IHN0cmluZ1tdO1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgaHRtbD86IHN0cmluZztcbiAgICBjaGlsZHJlbj86IE5vZGVbXTtcbiAgICBzdHlsZT86IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gICAgfTtcbiAgICBhdHRycz86IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG14KHRhZ05hbWU6IHN0cmluZywgYXR0cmlidXRlczogQXR0cmlidXRlcyA9IHt9KTogSFRNTEVsZW1lbnQge1xuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuXG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzLmF0dHJzKSB7XG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVzLmF0dHJzW2F0dHJpYnV0ZU5hbWVdKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMuaWQpIHtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYXR0cmlidXRlcy5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0cmlidXRlcy5jbGFzc0xpc3QpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNsYXNzTmFtZSBvZiBhdHRyaWJ1dGVzLmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGF0dHJpYnV0ZXMuY2hpbGRyZW4pIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlcy50ZXh0KSB7XG4gICAgICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gYXR0cmlidXRlcy50ZXh0O1xuICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXMuaHRtbCkge1xuICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmh0bWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0cmlidXRlcy5zdHlsZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gYXR0cmlidXRlcy5zdHlsZSkge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIGF0dHJpYnV0ZXMuc3R5bGVbcHJvcGVydHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZWxlbTtcbn1cbiIsImltcG9ydCBwbXggZnJvbSBcIi4uLy4uL2xpYi9wbXhcIjtcbmltcG9ydCBJbnRlcnBvbGF0ZUVsZW0sIHsgUGFyYW1zIH0gZnJvbSBcIi4vaW50ZXJwb2xhdGVFbGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRFbGVtIGV4dGVuZHMgSW50ZXJwb2xhdGVFbGVtIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IFBhcmFtcywgaGVhZGluZ0xldmVsOiBudW1iZXIgPSAyKSB7XG4gICAgICAgIGNvbnN0IGhlYWRpbmdUYWcgPSBgaCR7aGVhZGluZ0xldmVsfWA7XG4gICAgICAgIHN1cGVyKGA8JHtoZWFkaW5nVGFnfT5cXCR7aGVhZGluZ308LyR7aGVhZGluZ1RhZ30+PHA+XFwke2JvZHl9PHA+YCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHBteChcImRpdlwiLCB7IGNsYXNzTGlzdDogW1wiY2FyZFwiXSB9KTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbXMocGFyYW1zKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBFbGVtIHtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBzdGF0aWMgc2FuaXRpemUoaHRtbDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiBkLnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIHN0YXRpYyBlc2NhcGUodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGQuaW5uZXJIVE1MO1xuICAgIH1cblxuICAgIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cblxuICAgIGFkZEVsZW0oZWxlbTogRWxlbSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbS5nZXRFbGVtZW50KCkpO1xuICAgIH1cblxuICAgIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBhcHBlbmRUb0hlYWQocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB0aGlzLmFwcGVuZFRvKHBhcmVudEVsZW1lbnQpO1xuICAgICAgICBlbHNlIHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZWxlbWVudCwgcGFyZW50RWxlbWVudC5jaGlsZHJlblswXSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEVsZW0gZnJvbSBcIi4vZWxlbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtcyB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG4vKipcbiAqIFRPRE86IHJlZmFjdG9yIHRoZSBpbnRlcnBvbGF0aW9uIGFsZ29yaXRobSBzbyB0aGF0IG5vdCB0aGUgd2hvbGUgaW5uZXJIVE1MIG5lZWRzIHRvIGJlIHJlcGxhY2VkLlxuICogaS5lLiB1cG9uIGNvbnN0cnVjdGlvbiwgZm9yIGVhY2ggY2hpbGQgaW4gdGVtcGxhdGUsIGNvcHkgdGhlIHJlbGV2YW50IHBhcnQgb2YgdGhlIHRlbXBsYXRlIGludG8gYW4gYXNzb2NpYXRlZCBmaWVsZCAoZS5nLiBkYXRhc2V0IG9yIGEgcHJpdmF0ZSBkaWN0aW9uYXJ5KSxcbiAqIGFuZCB1cG9uIGludGVycG9sYXRpb24gdXNlIGVhY2ggZWxlbWVudCdzIGNvcnJlc3BvbmRpbmcgdGVtcGxhdGUgdG8gcmVwbGFjZSBpdHMgb3duIGlubmVySFRNTCBpbnN0ZWFkIG9mIHJlcGxhY2luZyB0aGUgd2hvbGUgaW5uZXJIVE1MXG4gKiBtb3JlIGV4cGVuc2l2ZSBkdXJpbmcgY29uc3RydWN0aW9uIGJ1dCBjaGVhcGVyIGR1cmluZyB1cGRhdGVzIChvZiBjb3Vyc2UsIGNvbmZpcm0gd2l0aCBiZW5jaG1hcmtzLi4uKVxuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBJbnRlcnBvbGF0ZUVsZW0gZXh0ZW5kcyBFbGVtIHtcbiAgICBwcml2YXRlIHBhcmFtczogUGFyYW1zID0ge307XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlc2NhcGVSZWdFeChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82OTY5NDg2XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW50ZXJwb2xhdGUoKSB7XG4gICAgICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnBhcmFtcykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmVzY2FwZVJlZ0V4KGBcXCR7JHtrZXl9fWApLCBcImdcIiksIHRoaXMucGFyYW1zW2tleV0udG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICB9XG5cbiAgICBzZXRQYXJhbXMocGFyYW1zOiBQYXJhbXMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXNba2V5XSA9IHBhcmFtc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW50ZXJwb2xhdGUoKTtcbiAgICB9XG5cbiAgICBnZXRQYXJhbXMoKTogUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICAgIH1cblxuICAgIHNldFRlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cbn1cbiIsImltcG9ydCBDYXJkRWxlbSBmcm9tIFwiLi9jYXJkRWxlbVwiO1xuaW1wb3J0IEVsZW0gZnJvbSBcIi4vZWxlbVwiO1xuXG50eXBlIFNpdGVJbmZvID0gYnJvd3Nlci50b3BTaXRlcy5Nb3N0VmlzaXRlZFVSTDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l0ZUNhcmRFbGVtIGV4dGVuZHMgQ2FyZEVsZW0ge1xuICAgIHByaXZhdGUgcHJvY2Vzc1NpdGVJbmZvKGluZm86IFNpdGVJbmZvKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkaW5nOiBFbGVtLmVzY2FwZShpbmZvLnRpdGxlKSxcbiAgICAgICAgICAgIGJvZHk6IEVsZW0uZXNjYXBlKGluZm8udXJsKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGluZm86IFNpdGVJbmZvKSB7XG4gICAgICAgIHN1cGVyKHt9LCAyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaXRlLWNhcmRcIik7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1zKHRoaXMucHJvY2Vzc1NpdGVJbmZvKGluZm8pKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2l0ZUNhcmRFbGVtIGZyb20gXCIuL2VsZW0vc2l0ZUNhcmRFbGVtXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0b3BTaXRlcyA9IGF3YWl0IGJyb3dzZXIudG9wU2l0ZXMuZ2V0KCk7XG4gICAgZm9yIChsZXQgaW5mbyBvZiB0b3BTaXRlcykge1xuICAgICAgICBjb25zdCBjYXJkID0gbmV3IFNpdGVDYXJkRWxlbShpbmZvKTtcbiAgICAgICAgY2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=