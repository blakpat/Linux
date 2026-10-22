(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@ng-bootstrap/ng-bootstrap"), require("tabby-core"), require("tabby-settings"), (function webpackLoadOptionalExternalModule() { try { return require("fs"); } catch(e) {} }()), require("rxjs"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "@ng-bootstrap/ng-bootstrap", "tabby-core", "tabby-settings", "fs", "rxjs"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@ng-bootstrap/ng-bootstrap"), require("tabby-core"), require("tabby-settings"), (function webpackLoadOptionalExternalModule() { try { return require("fs"); } catch(e) {} }()), require("rxjs")) : factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["@ng-bootstrap/ng-bootstrap"], root["tabby-core"], root["tabby-settings"], root["fs"], root["rxjs"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, (__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_forms__, __WEBPACK_EXTERNAL_MODULE__ng_bootstrap_ng_bootstrap__, __WEBPACK_EXTERNAL_MODULE_tabby_core__, __WEBPACK_EXTERNAL_MODULE_tabby_settings__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_rxjs__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/editProfileGroupModal.component.pug":
/*!************************************************************!*\
  !*** ./src/components/editProfileGroupModal.component.pug ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var req = __webpack_require__(/*! !!./node_modules/pug-loader/index.js!./src/components/editProfileGroupModal.component.pug */ "./node_modules/pug-loader/index.js!./src/components/editProfileGroupModal.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/components/editProfileModal.component.pug":
/*!*******************************************************!*\
  !*** ./src/components/editProfileModal.component.pug ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var req = __webpack_require__(/*! !!./node_modules/pug-loader/index.js!./src/components/editProfileModal.component.pug */ "./node_modules/pug-loader/index.js!./src/components/editProfileModal.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/components/homepageSettingsTab.pug":
/*!************************************************!*\
  !*** ./src/components/homepageSettingsTab.pug ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var req = __webpack_require__(/*! !!./node_modules/pug-loader/index.js!./src/components/homepageSettingsTab.pug */ "./node_modules/pug-loader/index.js!./src/components/homepageSettingsTab.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/components/homepageTab.pug":
/*!****************************************!*\
  !*** ./src/components/homepageTab.pug ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var req = __webpack_require__(/*! !!./node_modules/pug-loader/index.js!./src/components/homepageTab.pug */ "./node_modules/pug-loader/index.js!./src/components/homepageTab.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./node_modules/clone-deep/index.js":
/*!******************************************!*\
  !*** ./node_modules/clone-deep/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Module dependenices
 */

const clone = __webpack_require__(/*! shallow-clone */ "./node_modules/shallow-clone/index.js");
const typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");
const isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default: {
      return clone(val);
    }
  }
}

function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}

function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/homepageSettingsTab.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/homepageSettingsTab.scss ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `a.og-tac-a {
  color: rgb(13, 110, 253);
  text-decoration: underline;
}
a.og-tac-a:hover {
  color: rgba(13, 109, 253, 0.671);
  text-decoration: underline;
  cursor: pointer;
  text-decoration: dotted;
}`, "",{"version":3,"sources":["webpack://./src/components/homepageSettingsTab.scss"],"names":[],"mappings":"AAAA;EACI,wBAAA;EACA,0BAAA;AACJ;AACI;EAEI,gCAAA;EACA,0BAAA;EACA,eAAA;EACA,uBAAA;AAAR","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/homepageTab.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/homepageTab.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1.5rem 2rem;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.content .header-section {
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 0.5rem;
}
.content .header-section h3 {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--bs-body-color);
}
.content .header-section .form-control {
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  transition: all 0.3s;
}
.content .header-section .form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.15);
}
.content .scroll-container {
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 1rem;
  padding-right: 8px;
}
.content .scroll-container .group-title {
  position: sticky;
  top: 0;
  z-index: 5;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--bs-body-color);
  background: var(--body-bg);
  padding-bottom: 0.5rem;
  border-bottom: none;
}
.content .scroll-container .connection-group {
  display: grid;
  gap: 12px;
  margin-bottom: 2.5rem;
  grid-template-columns: repeat(auto-fill, minmax(160px, 280px));
}
@media (max-width: 400px) {
  .content .scroll-container .connection-group {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 1400px) {
  .content .scroll-container .connection-group {
    grid-template-columns: repeat(6, minmax(160px, 350px));
  }
}
.content .scroll-container .connection-group .card {
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 90px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--theme-bg-less-2);
  border-radius: 8px;
  background: var(--body-bg);
}
.content .scroll-container .connection-group .card .card-body {
  padding: 1rem 0.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content .scroll-container .connection-group .card .card-body .icon {
  width: 1.25rem;
  height: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}
.content .scroll-container .connection-group .card .card-body .icon ::ng-deep svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
.content .scroll-container .connection-group .card .card-body h6 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  padding-right: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content .scroll-container .connection-group .card .card-body .info-text p {
  font-size: 0.85rem;
  margin: 0;
  color: var(--theme-fg);
  opacity: 0.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content .scroll-container .connection-group .card .card-options {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  z-index: 5;
}
.content .scroll-container .connection-group .card:hover, .content .scroll-container .connection-group .card.show {
  background-color: var(--theme-secondary);
}
.content .scroll-container::-webkit-scrollbar {
  width: 6px;
}
.content .scroll-container::-webkit-scrollbar-thumb {
  background: #ced4da;
  border-radius: 10px;
}
.content .footer-help {
  flex-shrink: 0;
  padding: 1rem 0;
  margin-top: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 1.5rem;
  color: var(--text-muted);
  font-size: 0.85rem;
}
.content .footer-help .help-item {
  display: flex;
  align-items: center;
}
.content .footer-help .help-item kbd {
  background-color: #eee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  color: #333;
  display: inline-block;
  font-size: 0.85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  margin-right: 6px;
  white-space: nowrap;
}

::ng-deep .dropdown-menu {
  z-index: 1050;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: none;
  min-width: 120px;
}

/* UX-PREMIUM */
.content {
  max-width: 1500px;
  margin: 0 auto;
  padding: 1.75rem 2.25rem 1rem;
}
.content .header-section { margin-bottom: 0.25rem; }
.content .header-section h3 {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
}
.content .header-section .btn {
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.5rem 1rem;
  transition: transform .15s ease, box-shadow .15s ease, background-color .15s ease;
}
.content .header-section .btn:hover { transform: translateY(-1px); }
.content .header-section .btn-primary { box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35); }
.content .header-section .form-control {
  border-radius: 12px;
  padding: 0.8rem 1.25rem 0.8rem 2.9rem;
  font-size: 0.95rem;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='11' cy='11' r='8'/><line x1='21' y1='21' x2='16.65' y2='16.65'/></svg>");
  background-repeat: no-repeat;
  background-position: 16px center;
}
.content .header-section .form-control:focus {
  background-color: rgba(255, 255, 255, 0.07);
  border-color: rgba(129, 140, 248, 0.7);
  box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.16);
}
.content .scroll-container { margin-top: 0.75rem; padding-right: 10px; }
.content .scroll-container .group-title {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.7rem 0.35rem 0.55rem;
  border-bottom: none;
  background: linear-gradient(to bottom, var(--body-bg) 70%, transparent);
  transition: opacity .15s ease;
}
.content .scroll-container .group-title:hover { opacity: 0.8; }
.content .scroll-container .connection-group {
  gap: 14px;
  margin-bottom: 1.75rem;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}
@media (min-width: 1400px) {
  .content .scroll-container .connection-group {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
}
.content .scroll-container .connection-group .card {
  height: 84px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.02));
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  animation: ux-card-in .35s ease both;
  transition: transform .18s cubic-bezier(.4, 0, .2, 1), box-shadow .18s ease, border-color .18s ease, background .18s ease;
}
.content .scroll-container .connection-group .card::before {
  content: "";
  position: absolute;
  left: 0; top: 14%; bottom: 14%;
  width: 3px;
  border-radius: 0 3px 3px 0;
  background: var(--accent, rgba(255, 255, 255, 0.25));
  opacity: 0.55;
  transition: opacity .18s ease, top .18s ease, bottom .18s ease;
}
.content .scroll-container .connection-group .card:hover,
.content .scroll-container .connection-group .card.show {
  transform: translateY(-3px);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04));
  border-color: var(--accent, rgba(129, 140, 248, 0.6));
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
}
.content .scroll-container .connection-group .card:hover::before { opacity: 1; top: 8%; bottom: 8%; }
.content .scroll-container .connection-group .card:active { transform: translateY(-1px) scale(0.99); }
.content .scroll-container .connection-group .card .card-body { padding: 0.9rem 1rem 0.9rem 1.1rem; }
.content .scroll-container .connection-group .card .card-body h6 {
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: 0.005em;
}
.content .scroll-container .connection-group .card .card-body .icon { font-size: 1.05rem; opacity: 0.9; }
.content .scroll-container .connection-group .card .card-body .info-text p {
  font-size: 0.78rem;
  opacity: 0.55;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.content .scroll-container .connection-group .card .card-options {
  opacity: 0;
  transition: opacity .15s ease;
}
.content .scroll-container .connection-group .card:hover .card-options,
.content .scroll-container .connection-group .card .card-options:focus-within { opacity: 1; }
.content .scroll-container .connection-group > div:nth-child(2) .card { animation-delay: .03s; }
.content .scroll-container .connection-group > div:nth-child(3) .card { animation-delay: .06s; }
.content .scroll-container .connection-group > div:nth-child(4) .card { animation-delay: .09s; }
.content .scroll-container .connection-group > div:nth-child(5) .card { animation-delay: .12s; }
.content .scroll-container .connection-group > div:nth-child(n+6) .card { animation-delay: .15s; }
@keyframes ux-card-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.content .scroll-container::-webkit-scrollbar { width: 8px; }
.content .scroll-container::-webkit-scrollbar-track { background: transparent; }
.content .scroll-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.14);
  border-radius: 10px;
}
.content .scroll-container::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.28); }
.content .footer-help { border-top: 1px solid rgba(255, 255, 255, 0.06); }
.content .footer-help .help-item kbd {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: inherit;
  box-shadow: none;
  border-radius: 5px;
  padding: 2px 6px;
}
.content .card.p-3 { animation: ux-card-in .25s ease both; }

.content .header-section .d-flex.align-items-center { flex-shrink: 0; }
.content .header-section .btn { display: inline-flex; align-items: center; white-space: nowrap; }
.ux-lang-item:hover { background: rgba(255, 255, 255, 0.09) !important; }
.ux-privacy-blur { filter: blur(6px) !important; user-select: none !important; }
.btn-privacy-active { background: rgba(245, 158, 11, 0.22) !important; border-color: #f59e0b !important; color: #fbbf24 !important; box-shadow: 0 0 10px rgba(245, 158, 11, 0.25) !important; }
@media (prefers-reduced-motion: reduce) {
  .content .scroll-container .connection-group .card { animation: none; transition: none; }
}
`, "",{"version":3,"sources":["webpack://./src/components/homepageTab.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,oBAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;AACF;AACE;EACE,cAAA;EAEA,WAAA;EACA,qBAAA;AAAJ;AAEI;EAAK,iBAAA;EAAmB,gBAAA;EAAkB,2BAAA;AAG9C;AAFI;EACE,kBAAA;EAAoB,wBAAA;EACpB,oBAAA;AAKN;AAJM;EAAU,qBAAA;EAAuB,gDAAA;AAQvC;AAJE;EACE,YAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AAMJ;AAJI;EACE,gBAAA;EAAkB,MAAA;EAAQ,UAAA;EAC1B,iBAAA;EAAmB,gBAAA;EAAkB,2BAAA;EACrC,0BAAA;EACA,sBAAA;EAAwB,kDAAA;AAW9B;AARI;EACE,aAAA;EACA,SAAA;EACA,qBAAA;EAKA,8DAAA;AAMN;AAHM;EAXF;IAYI,0BAAA;EAMN;AACF;AAHM;EAhBF;IAmBI,sDAAA;EAIN;AACF;AAFM;EACE,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,sBAAA;EAEA,WAAA;EAEA,wCAAA;EACA,kBAAA;EACA,0BAAA;AAER;AAAQ;EACE,qBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AAEV;AADU;EACI,cAAA;EACA,eAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AAGd;AAAc;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAElB;AAEU;EACE,iBAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AAAZ;AAIY;EACE,kBAAA;EACA,SAAA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AAFd;AAOQ;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,UAAA;AALV;AAQQ;EACE,wCAAA;AANV;AAWI;EAAuB,UAAA;AAR3B;AASI;EAA6B,mBAAA;EAAqB,mBAAA;AALtD;AAOE;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,yCAAA;EAGA,aAAA;EACA,WAAA;EACA,wBAAA;EACA,kBAAA;AAPJ;AASI;EACE,aAAA;EACA,mBAAA;AAPN;AASM;EACE,sBAAA;EACA,kBAAA;EACA,yBAAA;EACA,wCAAA;EACA,WAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AAPR;;AAaA;EACE,aAAA;EACA,yCAAA;EACA,YAAA;EACA,gBAAA;AAVF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/kind-of/index.js":
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}


/***/ }),

/***/ "./node_modules/natural-orderby/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/natural-orderby/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compare: () => (/* binding */ compare),
/* harmony export */   orderBy: () => (/* binding */ orderBy)
/* harmony export */ });
/**
 * natural-orderby v5.0.0
 *
 * Copyright (c) Olaf Ennen
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var compareNumbers = function compareNumbers(numberA, numberB) {
  if (numberA < numberB) {
    return -1;
  }
  if (numberA > numberB) {
    return 1;
  }
  return 0;
};

var compareUnicode = function compareUnicode(stringA, stringB, locale) {
  var result = stringA.localeCompare(stringB, locale);
  return result ? result / Math.abs(result) : 0;
};

var RE_NUMBERS = /(^0x[\da-fA-F]+$|^([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?!\.\d+)(?=\D|\s|$))|\d+)/g;
var RE_LEADING_OR_TRAILING_WHITESPACES = /^\s+|\s+$/g; // trim pre-post whitespace
var RE_WHITESPACES = /\s+/g; // normalize all whitespace to single ' ' character
var RE_INT_OR_FLOAT = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/; // identify integers and floats
var RE_DATE = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[/-]\d{1,4}[/-]\d{1,4}|^\w+, \w+ \d+, \d{4})/; // identify date strings
var RE_LEADING_ZERO = /^0+[1-9]{1}[0-9]*$/;
// eslint-disable-next-line no-control-regex
var RE_UNICODE_CHARACTERS = /[^\x00-\x80]/;

var stringCompare = function stringCompare(stringA, stringB) {
  if (stringA < stringB) {
    return -1;
  }
  if (stringA > stringB) {
    return 1;
  }
  return 0;
};

var compareChunks = function compareChunks(chunksA, chunksB, locale) {
  var lengthA = chunksA.length;
  var lengthB = chunksB.length;
  var size = Math.min(lengthA, lengthB);
  for (var i = 0; i < size; i++) {
    var chunkA = chunksA[i];
    var chunkB = chunksB[i];
    if (chunkA.normalizedString !== chunkB.normalizedString) {
      if (chunkA.normalizedString === '' !== (chunkB.normalizedString === '')) {
        // empty strings have lowest value
        return chunkA.normalizedString === '' ? -1 : 1;
      }
      if (chunkA.parsedNumber !== undefined && chunkB.parsedNumber !== undefined) {
        // compare numbers
        var result = compareNumbers(chunkA.parsedNumber, chunkB.parsedNumber);
        if (result === 0) {
          // compare string value, if parsed numbers are equal
          // Example:
          // chunkA = { parsedNumber: 1, normalizedString: "001" }
          // chunkB = { parsedNumber: 1, normalizedString: "01" }
          // chunkA.parsedNumber === chunkB.parsedNumber
          // chunkA.normalizedString < chunkB.normalizedString
          return stringCompare(chunkA.normalizedString, chunkB.normalizedString);
        }
        return result;
      } else if (chunkA.parsedNumber !== undefined || chunkB.parsedNumber !== undefined) {
        // number < string
        return chunkA.parsedNumber !== undefined ? -1 : 1;
      } else if (RE_UNICODE_CHARACTERS.test(chunkA.normalizedString + chunkB.normalizedString)) {
        // use locale comparison only if one of the chunks contains unicode characters
        return compareUnicode(chunkA.normalizedString, chunkB.normalizedString, locale);
      } else {
        // use common string comparison for performance reason
        return stringCompare(chunkA.normalizedString, chunkB.normalizedString);
      }
    }
  }
  // if the chunks are equal so far, the one which has more chunks is greater than the other one
  if (lengthA > size || lengthB > size) {
    return lengthA <= size ? -1 : 1;
  }
  return 0;
};

var compareOtherTypes = function compareOtherTypes(valueA, valueB) {
  if (!valueA.chunks ? valueB.chunks : !valueB.chunks) {
    return !valueA.chunks ? 1 : -1;
  }
  if (valueA.isNaN ? !valueB.isNaN : valueB.isNaN) {
    return valueA.isNaN ? -1 : 1;
  }
  if (valueA.isSymbol ? !valueB.isSymbol : valueB.isSymbol) {
    return valueA.isSymbol ? -1 : 1;
  }
  if (valueA.isObject ? !valueB.isObject : valueB.isObject) {
    return valueA.isObject ? -1 : 1;
  }
  if (valueA.isArray ? !valueB.isArray : valueB.isArray) {
    return valueA.isArray ? -1 : 1;
  }
  if (valueA.isFunction ? !valueB.isFunction : valueB.isFunction) {
    return valueA.isFunction ? -1 : 1;
  }
  if (valueA.isNull ? !valueB.isNull : valueB.isNull) {
    return valueA.isNull ? -1 : 1;
  }
  return 0;
};

var compareValues = function compareValues(valueA, valueB, locale) {
  if (valueA.value === valueB.value) {
    return 0;
  }
  if (valueA.parsedNumber !== undefined && valueB.parsedNumber !== undefined) {
    return compareNumbers(valueA.parsedNumber, valueB.parsedNumber);
  }
  if (valueA.chunks && valueB.chunks) {
    return compareChunks(valueA.chunks, valueB.chunks, locale);
  }
  return compareOtherTypes(valueA, valueB);
};

var normalizeAlphaChunk = function normalizeAlphaChunk(chunk) {
  return chunk.replace(RE_WHITESPACES, ' ').replace(RE_LEADING_OR_TRAILING_WHITESPACES, '');
};

var parseNumber = function parseNumber(value) {
  if (value.length !== 0) {
    var parsedNumber = Number(value.replace(/_/g, ''));
    if (!Number.isNaN(parsedNumber)) {
      return parsedNumber;
    }
  }
  return undefined;
};

var normalizeNumericChunk = function normalizeNumericChunk(chunk, index, chunks) {
  if (RE_INT_OR_FLOAT.test(chunk)) {
    // don´t parse a number, if there´s a preceding decimal point
    // to keep significance
    // e.g. 1.0020, 1.020
    if (!RE_LEADING_ZERO.test(chunk) || index === 0 || chunks[index - 1] !== '.') {
      return parseNumber(chunk) || 0;
    }
  }
  return undefined;
};

var createChunkMap = function createChunkMap(chunk, index, chunks) {
  return {
    parsedNumber: normalizeNumericChunk(chunk, index, chunks),
    normalizedString: normalizeAlphaChunk(chunk)
  };
};

var createChunks = function createChunks(value) {
  return value.replace(RE_NUMBERS, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
};

var createChunkMaps = function createChunkMaps(value) {
  var chunksMaps = createChunks(value).map(createChunkMap);
  return chunksMaps;
};

var isFunction = function isFunction(value) {
  return typeof value === 'function';
};

var isNaN = function isNaN(value) {
  return Number.isNaN(value) || value instanceof Number && Number.isNaN(value.valueOf());
};

var isNull = function isNull(value) {
  return value === null;
};

var isObject = function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Number) && !(value instanceof String) && !(value instanceof Boolean) && !(value instanceof Date);
};

var isSymbol = function isSymbol(value) {
  return typeof value === 'symbol';
};

var isUndefined = function isUndefined(value) {
  return value === undefined;
};

var parseDate = function parseDate(value) {
  try {
    var parsedDate = Date.parse(value);
    if (!Number.isNaN(parsedDate)) {
      if (RE_DATE.test(value)) {
        return parsedDate;
      }
    }
    return undefined;
  } catch (_unused) {
    return undefined;
  }
};

var numberify = function numberify(value) {
  var parsedNumber = parseNumber(value);
  if (parsedNumber !== undefined) {
    return parsedNumber;
  }
  return parseDate(value);
};

var stringify = function stringify(value) {
  if (typeof value === 'boolean' || value instanceof Boolean) {
    return Number(value).toString();
  }
  if (typeof value === 'number' || value instanceof Number) {
    return value.toString();
  }
  if (value instanceof Date) {
    return value.getTime().toString();
  }
  if (typeof value === 'string' || value instanceof String) {
    return value.toLowerCase().replace(RE_LEADING_OR_TRAILING_WHITESPACES, '');
  }
  return '';
};

var getMappedValueRecord = function getMappedValueRecord(value) {
  if (typeof value === 'string' || value instanceof String || (typeof value === 'number' || value instanceof Number) && !isNaN(value) || typeof value === 'boolean' || value instanceof Boolean || value instanceof Date) {
    var stringValue = stringify(value);
    var parsedNumber = numberify(stringValue);
    var chunks = createChunkMaps(parsedNumber ? "" + parsedNumber : stringValue);
    return {
      parsedNumber: parsedNumber,
      chunks: chunks,
      value: value
    };
  }
  return {
    isArray: Array.isArray(value),
    isFunction: isFunction(value),
    isNaN: isNaN(value),
    isNull: isNull(value),
    isObject: isObject(value),
    isSymbol: isSymbol(value),
    isUndefined: isUndefined(value),
    value: value
  };
};

var baseCompare = function baseCompare(options) {
  return function (valueA, valueB) {
    var a = getMappedValueRecord(valueA);
    var b = getMappedValueRecord(valueB);
    var result = compareValues(a, b, options.locale);
    return result * (options.order === 'desc' ? -1 : 1);
  };
};

var isValidOrder = function isValidOrder(value) {
  return typeof value === 'string' && (value === 'asc' || value === 'desc');
};
var getOptions = function getOptions(customOptions) {
  var order = 'asc';
  var locale; // = 'en';
  if (typeof customOptions === 'string' && isValidOrder(customOptions)) {
    order = customOptions;
  } else if (customOptions && typeof customOptions === 'object') {
    if (customOptions.order && isValidOrder(customOptions.order)) {
      order = customOptions.order;
    }
    if (customOptions.locale && customOptions.locale.length > 0) {
      locale = customOptions.locale;
    }
  }
  return {
    order: order,
    locale: locale
  };
};

/**
 * Creates a compare function that defines the natural sort order considering
 * the given `options` which may be passed to [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
 */
function compare(options) {
  var validatedOptions = getOptions(options);
  return baseCompare(validatedOptions);
}

var compareMultiple = function compareMultiple(recordA, recordB, orders, locale) {
  var indexA = recordA.index,
    valuesA = recordA.values;
  var indexB = recordB.index,
    valuesB = recordB.values;
  var length = valuesA.length;
  var ordersLength = orders.length;
  for (var i = 0; i < length; i++) {
    var order = i < ordersLength ? orders[i] : null;
    if (order && typeof order === 'function') {
      var result = order(valuesA[i].value, valuesB[i].value);
      if (result) {
        return result;
      }
    } else {
      var _result = compareValues(valuesA[i], valuesB[i], locale);
      if (_result) {
        return _result * (order === 'desc' ? -1 : 1);
      }
    }
  }
  return indexA - indexB;
};

var createIdentifierFn = function createIdentifierFn(identifier) {
  if (typeof identifier === 'function') {
    // identifier is already a lookup function
    return identifier;
  }
  return function (value) {
    if (Array.isArray(value)) {
      var index = Number(identifier);
      if (Number.isInteger(index)) {
        return value[index];
      }
    } else if (value && typeof value === 'object') {
      var result = Object.getOwnPropertyDescriptor(value, identifier);
      return result == null ? void 0 : result.value;
    }
    return value;
  };
};

var getElementByIndex = function getElementByIndex(collection, index) {
  return collection[index];
};

var getValueByIdentifier = function getValueByIdentifier(value, getValue) {
  return getValue(value);
};

var baseOrderBy = function baseOrderBy(collection, identifiers, orders, locale) {
  var identifierFns = identifiers.length ? identifiers.map(createIdentifierFn) : [function (value) {
    return value;
  }];

  // temporary array holds elements with position and sort-values
  var mappedCollection = collection.map(function (element, index) {
    var values = identifierFns.map(function (identifier) {
      return getValueByIdentifier(element, identifier);
    }).map(getMappedValueRecord);
    return {
      index: index,
      values: values
    };
  });

  // iterate over values and compare values until a != b or last value reached
  mappedCollection.sort(function (recordA, recordB) {
    return compareMultiple(recordA, recordB, orders, locale);
  });
  return mappedCollection.map(function (element) {
    return getElementByIndex(collection, element.index);
  });
};

var getIdentifiers = function getIdentifiers(identifiers) {
  if (!identifiers) {
    return [];
  }
  var identifierList = !Array.isArray(identifiers) ? [identifiers] : [].concat(identifiers);
  if (identifierList.some(function (identifier) {
    return typeof identifier !== 'string' && typeof identifier !== 'number' && typeof identifier !== 'function';
  })) {
    return [];
  }
  return identifierList;
};

var getOrders = function getOrders(orders) {
  if (!orders) {
    return [];
  }
  var orderList = !Array.isArray(orders) ? [orders] : [].concat(orders);
  if (orderList.some(function (order) {
    return order !== 'asc' && order !== 'desc' && typeof order !== 'function';
  })) {
    return [];
  }
  return orderList;
};

/**
 * Creates an array of elements, natural sorted by specified identifiers and
 * the corresponding sort orders. This method implements a stable sort
 * algorithm, which means the original sort order of equal elements is
 * preserved.
 */
function orderBy(collection, identifiers, orders, locale) {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }
  var validatedIdentifiers = getIdentifiers(identifiers);
  var validatedOrders = getOrders(orders);
  return baseOrderBy(collection, validatedIdentifiers, validatedOrders, locale);
}




/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/components/editProfileGroupModal.component.pug":
/*!***********************************************************************************************!*\
  !*** ./node_modules/pug-loader/index.js!./src/components/editProfileGroupModal.component.pug ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E\u003Ch3 class=\"m-0\"\u003E{{group.name}}\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-body\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-12 col-lg-4\"\u003E\u003Cdiv class=\"mb-3\"\u003E\u003Clabel translate\u003EName\u003C\u002Flabel\u003E\u003Cinput class=\"form-control\" type=\"text\" autofocus [(ngModel)]=\"group.name\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-12 col-lg-8\"\u003E\u003Cdiv class=\"form-line content-box\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"title\" translate\u003EDefault profile group settings\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\" translate\u003EThese apply to all profiles of a given type in this group\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"list-group mt-3 mb-3 content-box\"\u003E\u003Ca class=\"list-group-item list-group-item-action d-flex align-items-center\" (click)=\"editDefaults(provider)\" *ngFor=\"let provider of providers\"\u003E{{provider.name|translate}}\u003Cdiv class=\"me-auto\"\u003E\u003C\u002Fdiv\u003E\u003Cbutton class=\"btn btn-link hover-reveal ms-1\" (click)=\"$event.stopPropagation(); deleteDefaults(provider)\"\u003E\u003Ci class=\"fas fa-trash-arrow-up\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-footer\"\u003E\u003Cbutton class=\"btn btn-primary\" (click)=\"save()\" translate\u003ESave\u003C\u002Fbutton\u003E\u003Cbutton class=\"btn btn-danger\" (click)=\"cancel()\" translate\u003ECancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/components/editProfileModal.component.pug":
/*!******************************************************************************************!*\
  !*** ./node_modules/pug-loader/index.js!./src/components/editProfileModal.component.pug ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"modal-header\" *ngIf=\"defaultsMode === &quot;disabled&quot;\"\u003E\u003Ch3 class=\"m-0\"\u003E{{profile.name}}\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-header\" *ngIf=\"defaultsMode !== &quot;disabled&quot;\"\u003E\u003Ch3 class=\"m-0\" translate=\"Defaults for {type}\" [translateParams]=\"{type: profileProvider.name}\"\u003E\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-body\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-12 col-lg-4\"\u003E\u003Cdiv class=\"mb-3\" *ngIf=\"defaultsMode === &quot;disabled&quot;\"\u003E\u003Clabel translate\u003EName\u003C\u002Flabel\u003E\u003Cinput class=\"form-control\" type=\"text\" autofocus [(ngModel)]=\"profile.name\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mb-3\" *ngIf=\"defaultsMode === &quot;disabled&quot;\"\u003E\u003Clabel translate\u003EGroup\u003C\u002Flabel\u003E\u003Cinput class=\"form-control\" type=\"text\" alwaysVisibleTypeahead placeholder=\"Ungrouped\" [(ngModel)]=\"profileGroup\" [ngbTypeahead]=\"groupTypeahead\" [inputFormatter]=\"groupFormatter\" [resultFormatter]=\"groupFormatter\" [editable]=\"false\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mb-3\" *ngIf=\"defaultsMode === &quot;disabled&quot;\"\u003E\u003Clabel translate\u003EIcon\u003C\u002Flabel\u003E\u003Cdiv class=\"input-group\"\u003E\u003Cinput class=\"form-control\" type=\"text\" alwaysVisibleTypeahead [(ngModel)]=\"profile.icon\" [ngbTypeahead]=\"iconSearch\" [resultTemplate]=\"rt\"\u003E\u003Cdiv class=\"input-group-text\"\u003E\u003Cprofile-icon [icon]=\"profile.icon\" [color]=\"profile.color\"\u003E\u003C\u002Fprofile-icon\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cng-template #rt let-r=\"result\" let-t=\"term\"\u003E\u003Ci [class]=\"&quot;fa-fw &quot; + r\"\u003E\u003C\u002Fi\u003E\u003Cngb-highlight class=\"ms-2\" [result]=\"r\" [term]=\"t\"\u003E\u003C\u002Fngb-highlight\u003E\u003C\u002Fng-template\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-line\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"title\" translate\u003EColor\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cinput class=\"form-control w-50\" type=\"text\" [(ngModel)]=\"profile.color\" placeholder=\"#000000\" [ngbTypeahead]=\"colorsAutocomplete\" [resultFormatter]=\"colorsFormatter\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-line\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"title\" translate\u003EDisable dynamic tab title\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\" translate\u003EConnection name will be used instead\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ctoggle [(ngModel)]=\"profile.disableDynamicTitle\"\u003E\u003C\u002Ftoggle\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-line\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"title\" translate\u003EWhen a session ends\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\" *ngIf=\"profile.behaviorOnSessionEnd == &quot;auto&quot;\" translate\u003EOnly close the tab when session is explicitly terminated\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cselect class=\"form-control\" [(ngModel)]=\"profile.behaviorOnSessionEnd\"\u003E\u003Coption ngValue=\"auto\" translate\u003EAuto\u003C\u002Foption\u003E\u003Coption ngValue=\"keep\" translate\u003EKeep\u003C\u002Foption\u003E\u003Coption *ngIf=\"isConnectable()\" ngValue=\"reconnect\" translate\u003EReconnect\u003C\u002Foption\u003E\u003Coption ngValue=\"close\" translate\u003EClose\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-line\" *ngIf=\"isConnectable()\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"title\" translate\u003EClear terminal after connection\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ctoggle [(ngModel)]=\"profile.clearServiceMessagesOnConnect\"\u003E\u003C\u002Ftoggle\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mb-4\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-12 col-lg-8\" *ngIf=\"this.profileProvider.settingsComponent\"\u003E\u003Cng-template #placeholder\u003E\u003C\u002Fng-template\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-footer\"\u003E\u003Cbutton class=\"btn btn-primary\" (click)=\"save()\" translate\u003ESave\u003C\u002Fbutton\u003E\u003Cbutton class=\"btn btn-danger\" (click)=\"cancel()\" translate\u003ECancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/components/homepageSettingsTab.pug":
/*!***********************************************************************************!*\
  !*** ./node_modules/pug-loader/index.js!./src/components/homepageSettingsTab.pug ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Ch3 translate=\"opaqueglasshomepage.settings.title\"\u003E\u003C\u002Fh3\u003E\u003Ch3 translate=\"opaqueglasshomepage.settings.general\"\u003E\u003C\u002Fh3\u003E\u003Cdiv class=\"form-line\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"title\" translate=\"opaqueglasshomepage.settings.auto_init\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\" translate=\"opaqueglasshomepage.settings.auto_init_desc\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cselect class=\"form-control\" [(ngModel)]=\"config.store.ogHomepagePlugin.autoInit\" (ngModelChange)=\"config.save()\"\u003E\u003Coption *ngFor=\"let opt of autoInitList\" [value]=\"opt.label\"\u003E{{ translate.instant(opt.label) }}\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003Ch3 translate=\"opaqueglasshomepage.appearance.title\"\u003E\u003C\u002Fh3\u003E\u003Cdiv class=\"form-line\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"title\" translate=\"opaqueglasshomepage.settings.btnOnLeftToolbar\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\" translate=\"opaqueglasshomepage.settings.btnOnLeftToolbar_desc\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ctoggle [(ngModel)]=\"config.store.ogHomepagePlugin.btnOnLeftToolbar\" (ngModelChange)=\"config.save()\"\u003E\u003C\u002Ftoggle\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-line\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"title\" translate=\"opaqueglasshomepage.settings.homepageBtnWeight\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\" translate=\"opaqueglasshomepage.settings.homepageBtnWeight_desc\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cinput class=\"form-control\" type=\"number\" [(ngModel)]=\"config.store.ogHomepagePlugin.homepageBtnWeight\" (ngModelChange)=\"config.save()\"\u003E\u003C\u002Fdiv\u003E\u003Ch3 translate=\"opaqueglasshomepage.debug.title\"\u003E\u003C\u002Fh3\u003E\u003Cdiv class=\"form-line\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"title\" translate=\"opaqueglasshomepage.debug.enable_debug\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\" translate=\"opaqueglasshomepage.debug.log_level_desc\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cinput class=\"form-control\" type=\"number\" max=\"4\" min=\"-2\" [(ngModel)]=\"config.store.ogHomepagePlugin.debugLevel\" (ngModelChange)=\"config.save()\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-of-setting\"\u003E\u003Cdiv\u003E \u003Cspan translate=\"opaqueglasshomepage.support.give_star_prefix\"\u003E \u003C\u002Fspan\u003E\u003Ca class=\"og-tac-a\" (click)=\"openGithub()\" translate=\"opaqueglasshomepage.support.give_star_link\"\u003E\u003C\u002Fa\u003E\u003Cspan translate=\"opaqueglasshomepage.support.give_star_suffix\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/components/homepageTab.pug":
/*!***************************************************************************!*\
  !*** ./node_modules/pug-loader/index.js!./src/components/homepageTab.pug ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"header-section\"\u003E\u003Cdiv class=\"d-flex justify-content-between align-items-center\"\u003E\u003Ch3 translate=\"opaqueglasshomepage.ui.connections\"\u003E\u003C\u002Fh3\u003E\u003Cdiv class=\"d-flex align-items-center\"\u003E\u003Cdiv class=\"position-relative me-2\" id=\"og-ux-lang-container\"\u003E\u003Cbutton class=\"btn btn-outline-secondary\" id=\"og-ux-lang-btn\" (click)=\"toggleLanguageMenu($event)\" [title]=\"t('langTitle')\"\u003E\u003Ci class=\"fas fa-globe me-2\"\u003E\u003C\u002Fi\u003E\u003Cspan\u003E{{ getUiLangLabel() }}\u003C\u002Fspan\u003E\u003Ci class=\"fas fa-caret-down ms-2\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003Cdiv *ngIf=\"showLanguageMenu\" id=\"og-ux-lang-menu\" style=\"position:absolute;right:0;top:calc(100% + 6px);min-width:250px;z-index:1050;padding:6px;border-radius:12px;background:rgba(24,26,40,0.98);border:1px solid rgba(255,255,255,0.14);box-shadow:0 12px 32px rgba(0,0,0,0.5);\"\u003E\u003Cbutton *ngFor=\"let l of getLanguages()\" class=\"ux-lang-item\" style=\"display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 12px;border:none;border-radius:8px;background:transparent;color:inherit;font-size:0.88rem;text-align:left;cursor:pointer;\" (click)=\"setUiLang(l.code)\"\u003E\u003Cspan\u003E{{ l.name }}\u003C\u002Fspan\u003E\u003Ci *ngIf=\"isUiLang(l.code)\" class=\"fas fa-check\" style=\"color:#4ade80;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003Cdiv style=\"height:1px;background:rgba(255,255,255,0.1);margin:6px 4px;\"\u003E\u003C\u002Fdiv\u003E\u003Cbutton class=\"ux-lang-item\" style=\"display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 12px;border:none;border-radius:8px;background:transparent;color:inherit;font-size:0.88rem;text-align:left;cursor:pointer;\" (click)=\"applyToTabby()\"\u003E\u003Cspan\u003E\u003Ci class=\"fas fa-sync-alt me-2\"\u003E\u003C\u002Fi\u003E{{ t('applyTabby') }}\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cbutton class=\"btn btn-outline-secondary me-2\" id=\"og-ux-cat-btn\" (click)=\"toggleCategorySettings($event)\" [title]=\"t('categoriesTitle')\"\u003E\u003Ci class=\"fas fa-palette me-1\"\u003E\u003C\u002Fi\u003E\u003Cspan\u003E{{ t('categories') }}\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cbutton class=\"btn btn-outline-secondary me-2\" [class.btn-privacy-active]=\"privacyMode\" id=\"og-ux-privacy-btn\" (click)=\"togglePrivacyMode()\" [title]=\"privacyMode ? t('privacyOn') : t('privacyOff')\"\u003E\u003Ci class=\"fas me-1\" [class.fa-eye-slash]=\"privacyMode\" [class.fa-eye]=\"!privacyMode\"\u003E\u003C\u002Fi\u003E\u003Cspan\u003E{{ t('privacy') }}\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cbutton class=\"btn btn-primary\" (click)=\"createConnection()\"\u003E\u003Ci class=\"fas fa-plus me-2\"\u003E\u003C\u002Fi\u003E\u003Cspan translate=\"opaqueglasshomepage.ui.newprofile\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-group my-3\"\u003E\u003Cinput class=\"form-control\" #ogchsearchInput type=\"text\" [placeholder]=\"'opaqueglasshomepage.ui.searchPlaceholder' | translate\" [(ngModel)]=\"searchQuery\" (input)=\"searchConnections()\" (keyup.enter)=\"onSearchEnter()\" (keyup.control.enter)=\"onQuickConnect()\" (keyup.meta.enter)=\"onQuickConnect()\" (compositionend)=\"onCompositionEnd($event)\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card p-3 my-3 og-ux-cat-panel\" id=\"og-ux-cat-panel\" *ngIf=\"showCategorySettings\" style=\"background: rgba(30, 32, 48, 0.95); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.4);\"\u003E\u003Cdiv class=\"d-flex justify-content-between align-items-center mb-2\"\u003E\u003Ch6 class=\"m-0 text-white\"\u003E\u003Ci class=\"fas fa-sliders-h me-2 text-info\"\u003E\u003C\u002Fi\u003E{{ t('panelTitle') }}\u003C\u002Fh6\u003E\u003Cbutton class=\"btn btn-sm btn-link text-muted\" (click)=\"showCategorySettings = false\"\u003E×\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Csmall class=\"text-muted mb-3 d-block\"\u003E{{ t('panelHint') }}\u003C\u002Fsmall\u003E\u003Cdiv class=\"d-flex gap-2 mb-3\"\u003E\u003Cbutton class=\"btn btn-sm btn-outline-secondary\" style=\"border-radius:8px;font-size:0.8rem;\" (click)=\"showAllGroups()\"\u003E\u003Ci class=\"fas fa-eye me-1\"\u003E\u003C\u002Fi\u003E{{ t('showAll') }}\u003C\u002Fbutton\u003E\u003Cbutton class=\"btn btn-sm btn-outline-secondary\" style=\"border-radius:8px;font-size:0.8rem;\" (click)=\"resetGroupColors()\"\u003E\u003Ci class=\"fas fa-undo me-1\"\u003E\u003C\u002Fi\u003E{{ t('resetColors') }}\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex flex-wrap gap-2\"\u003E\u003Cdiv *ngFor=\"let g of (allGroups || groups)\" class=\"d-flex align-items-center p-2 rounded\" style=\"background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);\"\u003E\u003Cinput type=\"checkbox\" [checked]=\"!isGroupHidden(g)\" (change)=\"toggleGroupVisibility(g)\" class=\"form-check-input me-2\" style=\"cursor: pointer;\" [title]=\"t('toggleVis') + ' ' + g.name\"\u003E\u003Cinput type=\"color\" [value]=\"getGroupColor(g)\" (change)=\"setGroupColor(g, $event.target.value)\" class=\"me-2\" style=\"width: 24px; height: 24px; border: none; border-radius: 4px; cursor: pointer; padding: 0; background: transparent;\"\u003E\u003Cspan [style.color]=\"getGroupColor(g)\" style=\"font-weight: 600; font-size: 0.88rem;\"\u003E{{ g.name }}\u003C\u002Fspan\u003E\u003Cspan class=\"badge bg-secondary ms-2\" style=\"font-size: 0.68rem;\"\u003E{{ g.connections?.length }}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"scroll-container\"\u003E\u003Cdiv *ngFor=\"let group of groups\" [hidden]=\"isGroupHidden(group)\"\u003E\u003Cdiv class=\"d-flex justify-content-between align-items-center my-1\"\u003E\u003Ch5 class=\"group-title m-0\" [title]=\"group.name\" (click)=\"toggleGroupCollapse(group)\" style=\"cursor: pointer; user-select: none; display: flex; align-items: center; padding: 6px 0; flex: 1;\" [style.color]=\"getGroupColor(group)\"\u003E\u003Ci class=\"fas fa-fw me-2\" [class.fa-chevron-down]=\"!group.collapsed\" [class.fa-chevron-right]=\"group.collapsed\" [style.color]=\"getGroupColor(group)\"\u003E\u003C\u002Fi\u003E\u003Cspan [style.color]=\"getGroupColor(group)\" style=\"font-weight: 600;\"\u003E{{ group.name }}\u003C\u002Fspan\u003E\u003Cspan class=\"badge ms-2\" [style.background-color]=\"getGroupColor(group) === '#ffffff' ? 'rgba(255, 255, 255, 0.16)' : getGroupColor(group)\" [style.color]=\"getGroupColor(group) === '#ffffff' ? '#ffffff' : '#0f172a'\" style=\"font-size: 0.72rem; font-weight: 600; border-radius: 6px; padding: 2px 8px; border: 1px solid rgba(255,255,255,0.1);\"\u003E{{ group.connections?.length }}\u003C\u002Fspan\u003E\u003C\u002Fh5\u003E\u003Cdiv class=\"d-flex align-items-center gap-2\" (click)=\"$event.stopPropagation()\"\u003E\u003Cinput type=\"color\" [value]=\"getGroupColor(group)\" (change)=\"setGroupColor(group, $event.target.value)\" [title]=\"t('pickColor')\" style=\"width: 22px; height: 22px; border: none; border-radius: 4px; cursor: pointer; padding: 0; background: transparent; opacity: 0.75;\"\u003E\u003Cbutton class=\"btn btn-sm btn-link text-muted p-0\" (click)=\"toggleGroupVisibility(group)\" [title]=\"t('hideCat')\" style=\"opacity: 0.65;\"\u003E\u003Ci class=\"fas fa-eye-slash\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"connection-group\" [hidden]=\"group.collapsed\"\u003E\u003Cdiv *ngFor=\"let conn of group.connections\"\u003E\u003Cdiv class=\"card clickable-card\" [style.--accent]=\"getGroupColor(group) === '#ffffff' ? 'rgba(255,255,255,0.35)' : getGroupColor(group)\" (click)=\"openConnection(conn)\"\u003E\u003Cdiv class=\"card-options\" (click)=\"$event.stopPropagation()\"\u003E\u003Cdiv ngbDropdown placement=\"bottom-end\" container=\"body\"\u003E\u003Cbutton class=\"btn btn-link text-muted\" ngbDropdownToggle\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003Cdiv ngbDropdownMenu\u003E\u003C!-- ... 菜单项--\u003E\u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editConnection(conn)\"\u003E\u003Ci class=\"fas fa-fw fa-edit me-2\"\u003E\u003C\u002Fi\u003E\u003Cspan translate\u003EEdit\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"cloneConnection(conn)\"\u003E\u003Ci class=\"fas fa-fw fa-copy me-2\"\u003E\u003C\u002Fi\u003E\u003Cspan translate\u003EDuplicate\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteConnection(conn)\"\u003E\u003Ci class=\"fas fa-fw fa-trash me-2\"\u003E\u003C\u002Fi\u003E\u003Cspan translate\u003EDelete\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-body\"\u003E\u003Cdiv class=\"d-flex align-items-center\"\u003E\u003Ci class=\"icon fa-fw\" *ngIf=\"conn.icon &amp;&amp; !conn.icon.startsWith('&lt;')\" [class]=\"conn.icon\" [style.color]=\"conn.color\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"icon\" *ngIf=\"conn.icon &amp;&amp; conn.icon.startsWith('&lt;')\" [fastHtmlBind]=\"conn.icon\" [style.color]=\"conn.color\"\u003E\u003C\u002Fdiv\u003E\u003Ch6 class=\"ms-2\" [class.ux-privacy-blur]=\"privacyMode\" [title]=\"privacyMode ? '***' : conn.name\"\u003E{{ conn.name }}\u003C\u002Fh6\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info-text\" [class.ux-privacy-blur]=\"privacyMode\"\u003E\u003Cp class=\"mb-0\"\u003E{{ conn.type }}, {{ conn.options?.host || 'N\u002FA' }}, {{ conn.options?.user || 'N\u002FA' }}\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-help\" translate=\"opaqueglasshomepage.ui.help\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
}

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '',
    className,
    padding = '',
    escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '',
    padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
}

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (
    val === false ||
    val == null ||
    (!val && (key === 'class' || key === 'style'))
  ) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if (
    (type === 'object' || type === 'function') &&
    typeof val.toJSON === 'function'
  ) {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + "='" + val.replace(/'/g, '&#39;') + "'";
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse) {
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
}

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html) {
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        escape = '&quot;';
        break;
      case 38:
        escape = '&amp;';
        break;
      case 60:
        escape = '&lt;';
        break;
      case 62:
        escape = '&gt;';
        break;
      default:
        continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
}

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  var context, lines, start, end;
  try {
    str = str || (__webpack_require__(/*! fs */ "fs").readFileSync)(filename, {encoding: 'utf8'});
    context = 3;
    lines = str.split('\n');
    start = Math.max(lineno - context, 0);
    end = Math.min(lines.length, lineno + context);
  } catch (ex) {
    err.message +=
      ' - could not read from ' + filename + ' (' + ex.message + ')';
    pug_rethrow(err, null, lineno);
    return;
  }

  // Error context
  context = lines
    .slice(start, end)
    .map(function(line, i) {
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
    })
    .join('\n');

  // Alter exception message
  err.path = filename;
  try {
    err.message =
      (filename || 'Pug') +
      ':' +
      lineno +
      '\n' +
      context +
      '\n\n' +
      err.message;
  } catch (e) {}
  throw err;
}


/***/ }),

/***/ "./src/static/i18n.yaml":
/*!******************************!*\
  !*** ./src/static/i18n.yaml ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("opaqueglasshomepage:\n  settings:\n    title:\n      en_US: \"Connection Homepage\"\n      zh_CN: \"连接主页插件设置\"\n    general:\n      en_US: \"General\"\n      zh_CN: \"通用设置\"\n    auto_init:\n      en_US: \"Auto Start\"\n      zh_CN: \"自动启动\"\n    auto_init_desc:\n      en_US: \"Automatically open the homepage when Tabby starts. The startup homepage is optional; in addition to the homepage created by this plugin, the Profile Selector can also be used.\"\n      zh_CN: \"在Tabby启动时，自动打开主页。启动的主页是可选的，在选择框了解更多。\"\n    enable_on_startup:\n      en_US: \"Enable completion when startup\"\n      zh_CN: \"在Tabby启动后，启用命令补全提示\"\n    enable_on_startup_desc:\n      en_US: \"When disabled, the autocomplete menu will not appear automatically, and users will need to enable the feature manually. You can manually control the auto-completion feature via the bird icon in the toolbar. Green means it is enabled.\"\n      zh_CN: \"禁用后，自动完成菜单不会自动出现，用户需要手动启用该功能。您可以通过工具栏中的小鸟图标手动控制自动完成功能。绿色意味着已启用。\"\n    menu_show_item_max:\n      en_US: Max Hint Item Count\n      zh_CN: 提示菜单显示数量限制\n    menu_show_item_max_desc:\n      en_US: When there are enough matches, regardless of the settings, at least 3 items of each enabled type will be displayed.\n      zh_CN: 匹配数量足够的情况下，无论如何设定，各启用类型至少显示3个。\n    option_plugin:\n      en_US: \"Homepage created by this plugin\"\n      zh_CN: \"本插件创建的主页\"\n    option_original:\n      en_US: Tabby's Profiles & Connections\n      zh_CN: Tabby设置-配置和连接选项卡\n    option_disable:\n      en_US: Disable\n      zh_CN: 禁用\n    option_profile_selector:\n      en_US: Tabby's Profile Selector\n      zh_CN: Tabby配置文件选择器\n    btnOnLeftToolbar:\n      en_US: \"Show homepage button on the left toolbar\"\n      zh_CN: \"在左侧工具栏显示主页按钮\"\n    btnOnLeftToolbar_desc:\n      en_US: \"When enabled, a homepage button will be added to the left toolbar for quick access. Restart Tabby for the changes to take effect.\"\n      zh_CN: \"启用后，在左侧工具栏会增加一个主页按钮，方便快速访问。修改此项后需要重启Tabby才能生效。\"\n    homepageBtnWeight:\n      en_US: \"Homepage button weight\"\n      zh_CN: \"主页按钮权重\"\n    homepageBtnWeight_desc:\n      en_US: \"The weight of the homepage button in the toolbar. The smaller the value, the more forward it is displayed. The default value is 0. Adjusting this value may cause the button to be displayed in an unexpected position, please adjust it with caution. Restart Tabby for the changes to take effect.\"\n      zh_CN: \"工具栏中主页按钮的权重，值越小越靠前显示。默认值为0，调整此值可能会导致按钮显示在意想不到的位置，请谨慎调整。修改此项后需要重启Tabby才能生效。\"\n\n\n  # AI相关设置\n  ai:\n    title:\n      en_US: \"AI\"\n      zh_CN: \"AI\"\n    openai_base_url:\n      en_US: \"Open AI Base URL\"\n      zh_CN: \"Open AI Base URL\"\n    openai_key:\n      en_US: \"Open AI Key\"\n      zh_CN: \"Open AI Key\"\n    openai_key_desc:\n      en_US: \"Note that all information will be saved in plain text locally\"\n      zh_CN: \"请注意所有信息将明文保存在本地\"\n    openai_model:\n      en_US: \"Open AI Model name\"\n      zh_CN: \"Open AI 模型名称\"\n\n  # 外观设置\n  appearance:\n    title:\n      en_US: \"Appearance\"\n      zh_CN: \"外观\"\n    font_size:\n      en_US: \"Font size\"\n      zh_CN: \"字体大小\"\n\n  # 历史记录设置\n  history:\n    title:\n      en_US: \"History\"\n      zh_CN: \"历史记录\"\n    manage_desc:\n      en_US: \"Open \\\"Developer Tools\\\", \\\"Application\\\", \\\"Storage\\\" \\\"Indexed DB\\\" in the list on the left, and manage the saved history in \\\"og_tac_HistoryDB\\\".\"\n      zh_CN: \"打开\\\"开发者工具\\\"，\\\"应用\\\"，左侧列表中的\\\"存储\\\"\\\"Indexed DB\\\"，\\\"og_tac_HistoryDB\\\"中管理已保存的历史记录。\"\n    enable:\n      en_US: \"Enable the history of user input commands\"\n      zh_CN: \"启用用户输入命令历史\"\n    enable_desc:\n      en_US: \"Turning this off will still create the database (but without recording history) and will not clear the history that was previously saved.\"\n      zh_CN: \"关闭此项，仍然会创建历史记录数据库（但不记录历史），先前记录的历史不会被自动清除。\"\n    count_regexp:\n      en_US: \"Record input commands matched by regular expressions\"\n      zh_CN: \"记录由正则表达式匹配到的命令\"\n    count_regexp_desc:\n      en_US: \"It may record incorrect or incomplete commands. When disabled, only input commands matched by the prompt escape sequence will be saved.\"\n      zh_CN: \"可能记录到错误或不完整的命令。禁用后，只保存由prompt转义序列匹配的输入命令。\"\n\n  arguments:\n    title:\n      en_US: \"Arguments Complete\"\n      zh_CN: \"参数提示\"\n    manage_desc:\n      en_US: \"The preset content matched by the argument prompts is generated by AI and has not been reviewed by the developers. Please carefully verify the correctness of the argument prompts. The current functionality is still under testing, and during argument input completion, it may not check for or remove/partially remove existing content. If you encounter any bugs, please provide feedback. If you need more argument prompts, please submit a PR.\"\n      zh_CN: \"参数提示匹配到的预设内容由AI生成，开发者没有进行检查，请注意检查内容的正确性；目前功能仍在测试，参数输入上屏时，可能不会判断删除/部分删除已有内容。如有bug请反馈，如需要更多参数提示请PR。\"\n    enable:\n      en_US: \"Enable Arguments Complete\"\n      zh_CN: \"启用命令参数提示补全\"\n    enable_desc:\n      en_US: \"\"\n      zh_CN: \"\"\n\n  # 调试设置\n  debug:\n    title:\n      en_US: \"Debug\"\n      zh_CN: \"调试\"\n    enable_debug:\n      en_US: \"Enable debug mode and detailed logs\"\n      zh_CN: \"显示详细日志和调错信息\"\n    log_level_desc:\n      en_US: \"0 All, 1 log, 2 warn, 3 ErrorOnly, 4 No log\"\n      zh_CN: \"0 输出全部日志，1 输出日志，2 输出警告，3 仅输出错误，4 不输出日志\"\n\n  # 通用UI\n  ui:\n    newprofile:\n      en_US: New Profile\n      zh_CN: 新连接\n    connections:\n      en_US: Profiles & Connections\n      zh_CN: 配置和连接\n    searchPlaceholder:\n      en_US: Search connections...\n      zh_CN: 输入并检索连接\n    loading:\n      en_US: \"Loading...\"\n      zh_CN: \"加载中...\"\n    help:\n      en_US: \"Press Enter to connect to the first search result when results are displayed. Enter the address and press Ctrl+Enter to connect quickly.\"\n      zh_CN: \"按下Enter则连接第一个检索结果；输入地址后按下 Ctrl+Enter 快速连接\"\n    searchResult:\n      en_US: \"Search Result\"\n      zh_CN: \"检索结果\"\n\n  # 支持和反馈\n  support:\n    give_star_prefix:\n      en_US: \"⭐ If this project helps you, please\"\n      zh_CN: \"⭐ 如果这个项目对你有帮助，请\"\n    give_star_link:\n      en_US: \"give it a star!\"\n      zh_CN: \"点亮Star。\"\n    give_star_suffix:\n      en_US: \"Your support is greatly appreciated and motivates me to keep improving it. 😊\"\n      zh_CN: \"感谢你的支持！这将鼓励我继续改进它。😊\"\n    issue_prefix:\n      en_US: \"💡 If you encounter any issues,\"\n      zh_CN: \"💡 如果遇到问题，\"\n    issue_link:\n      en_US: \"please open an issue on GitHub!\"\n      zh_CN: \"请到Github创建issue\"\n    issue_suffix:\n      en_US: \"😊\"\n      zh_CN: \"😊\"\n\n  # 测试用例\n  test:\n    en_US: \"test\"\n    zh_CN: \"testA\"");

/***/ }),

/***/ "./node_modules/shallow-clone/index.js":
/*!*********************************************!*\
  !*** ./node_modules/shallow-clone/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const valueOf = Symbol.prototype.valueOf;
const typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default: {
      return val;
    }
  }
}

function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : (/\w+$/.exec(val) || void 0);
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}

function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}

function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}

function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}

function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;


/***/ }),

/***/ "./src/icons/house.svg":
/*!*****************************!*\
  !*** ./src/icons/house.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--bs-body-color)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-house-icon lucide-house\"><path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" style=\"fill: none;\"></path><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" style=\"fill: none;\"></path></svg>"

/***/ }),

/***/ "./src/components/homepageSettingsTab.scss":
/*!*************************************************!*\
  !*** ./src/components/homepageSettingsTab.scss ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./homepageSettingsTab.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/homepageSettingsTab.scss");

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/components/homepageTab.scss":
/*!*****************************************!*\
  !*** ./src/components/homepageTab.scss ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./homepageTab.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/homepageTab.scss");

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/buttonProvider.ts":
/*!*******************************!*\
  !*** ./src/buttonProvider.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonProvider: () => (/* binding */ ButtonProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var services_signalService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/signalService */ "./src/services/signalService.ts");
/* harmony import */ var components_homepageTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/homepageTab */ "./src/components/homepageTab.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let ButtonProvider = class ButtonProvider extends tabby_core__WEBPACK_IMPORTED_MODULE_2__.ToolbarButtonProvider {
    // private menuStatusNS: Subject<void> = new Subject<void>();
    // public menuStatus$ = this.menuStatusNS.asObservable();
    constructor(hotkeys, hostWnd, app, ngbModal, signalService, configService) {
        var _a, _b;
        super();
        this.hostWnd = hostWnd;
        this.app = app;
        this.ngbModal = ngbModal;
        this.signalService = signalService;
        this.configService = configService;
        this.currentStatus = (_b = (_a = configService.store) === null || _a === void 0 ? void 0 : _a.ogAutoCompletePlugin) === null || _b === void 0 ? void 0 : _b.enableCompleteWithCompleteStart;
        // 仅注册在 ToolbarButtonProvider 中有效？
        hotkeys.hotkey$.subscribe((hotkey) => __awaiter(this, void 0, void 0, function* () {
            if (hotkey === 'oghomepage_open') {
                this.openHomepage();
            }
        }));
    }
    openDevTools() {
        this.hostWnd.openDevTools();
    }
    openHomepage() {
        const homepageTab = this.app.tabs.find(tab => tab instanceof components_homepageTab__WEBPACK_IMPORTED_MODULE_4__.HomepageTabComponent);
        if (homepageTab) {
            this.app.selectTab(homepageTab);
        }
        else {
            this.app.openNewTabRaw({
                type: components_homepageTab__WEBPACK_IMPORTED_MODULE_4__.HomepageTabComponent,
            });
        }
    }
    provide() {
        return [];
        // const that = this;
        // if (this.configService.store.ogHomepagePlugin?.btnOnLeftToolbar === true) {
        //     return [];
        // }
        // return [{
        //     icon: require('./icons/house.svg'),
        //     weight: 5,
        //     title: 'Open Homepage',
        //     touchBarNSImage: 'NSTouchBarComposeTemplate',
        //     click: async () => {
        //         that.openHomepage();
        //     }
        // }];
    }
};
ButtonProvider = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_2__.HotkeysService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.HostWindowService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.AppService,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal,
        services_signalService__WEBPACK_IMPORTED_MODULE_3__.MySignalService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.ConfigService])
], ButtonProvider);



/***/ }),

/***/ "./src/commandProvider.ts":
/*!********************************!*\
  !*** ./src/commandProvider.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageCommandProvider: () => (/* binding */ HomepageCommandProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var services_signalService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/signalService */ "./src/services/signalService.ts");
/* harmony import */ var components_homepageTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/homepageTab */ "./src/components/homepageTab.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let HomepageCommandProvider = class HomepageCommandProvider extends tabby_core__WEBPACK_IMPORTED_MODULE_2__.CommandProvider {
    // private menuStatusNS: Subject<void> = new Subject<void>();
    // public menuStatus$ = this.menuStatusNS.asObservable();
    constructor(hotkeys, hostWnd, app, ngbModal, signalService, configService, translate) {
        var _a, _b;
        super();
        this.hostWnd = hostWnd;
        this.app = app;
        this.ngbModal = ngbModal;
        this.signalService = signalService;
        this.configService = configService;
        this.translate = translate;
        this.currentStatus = (_b = (_a = configService.store) === null || _a === void 0 ? void 0 : _a.ogAutoCompletePlugin) === null || _b === void 0 ? void 0 : _b.enableCompleteWithCompleteStart;
    }
    openHomepage() {
        const homepageTab = this.app.tabs.find(tab => tab instanceof components_homepageTab__WEBPACK_IMPORTED_MODULE_4__.HomepageTabComponent);
        if (homepageTab) {
            this.app.selectTab(homepageTab);
        }
        else {
            this.app.openNewTabRaw({
                type: components_homepageTab__WEBPACK_IMPORTED_MODULE_4__.HomepageTabComponent,
            });
        }
    }
    provide() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            const that = this;
            const showLocations = [tabby_core__WEBPACK_IMPORTED_MODULE_2__.CommandLocation.StartPage];
            if ((_a = this.configService.store.ogHomepagePlugin) === null || _a === void 0 ? void 0 : _a.btnOnLeftToolbar) {
                showLocations.push(tabby_core__WEBPACK_IMPORTED_MODULE_2__.CommandLocation.LeftToolbar);
            }
            else {
                showLocations.push(tabby_core__WEBPACK_IMPORTED_MODULE_2__.CommandLocation.RightToolbar);
            }
            return [
                {
                    id: 'ogHomepage:open-homepage',
                    locations: showLocations,
                    label: this.translate.instant('Open Homepage'),
                    icon: __webpack_require__(/*! ./icons/house.svg */ "./src/icons/house.svg"),
                    weight: (_c = (_b = this.configService.store.ogHomepagePlugin) === null || _b === void 0 ? void 0 : _b.homepageBtnWeight) !== null && _c !== void 0 ? _c : 0,
                    run: () => __awaiter(this, void 0, void 0, function* () {
                        that.openHomepage();
                    }),
                },
            ];
        });
    }
};
HomepageCommandProvider = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_2__.HotkeysService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.HostWindowService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.AppService,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal,
        services_signalService__WEBPACK_IMPORTED_MODULE_3__.MySignalService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.ConfigService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService])
], HomepageCommandProvider);



/***/ }),

/***/ "./src/components/editProfileGroupModal.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/editProfileGroupModal.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfileGroupModalComponent: () => (/* binding */ EditProfileGroupModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */



/** @hidden */
let EditProfileGroupModalComponent = class EditProfileGroupModalComponent {
    constructor(modalInstance, platform, translate) {
        this.modalInstance = modalInstance;
        this.platform = platform;
        this.translate = translate;
    }
    save() {
        this.modalInstance.close({ group: this.group });
    }
    cancel() {
        this.modalInstance.dismiss();
    }
    editDefaults(provider) {
        this.modalInstance.close({ group: this.group, provider });
    }
    deleteDefaults(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if ((yield this.platform.showMessageBox({
                type: 'warning',
                message: this.translate.instant('Restore settings to inherited defaults ?'),
                buttons: [
                    this.translate.instant('Delete'),
                    this.translate.instant('Keep'),
                ],
                defaultId: 1,
                cancelId: 1,
            })).response === 0) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                (_a = this.group.defaults) === null || _a === void 0 ? true : delete _a[provider.id];
            }
        });
    }
};
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    __metadata("design:type", Object)
], EditProfileGroupModalComponent.prototype, "group", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    __metadata("design:type", Array)
], EditProfileGroupModalComponent.prototype, "providers", void 0);
EditProfileGroupModalComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: __webpack_require__(/*! ./editProfileGroupModal.component.pug */ "./src/components/editProfileGroupModal.component.pug"),
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.PlatformService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService])
], EditProfileGroupModalComponent);



/***/ }),

/***/ "./src/components/editProfileModal.component.ts":
/*!******************************************************!*\
  !*** ./src/components/editProfileModal.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfileModalComponent: () => (/* binding */ EditProfileModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */



// @ts-ignore

const iconsData = __webpack_require__(/*! ../icons/icons.json */ "./src/icons/icons.json");
const iconsClassList = Object.keys(iconsData).map(icon => iconsData[icon].map(style => `fa${style[0]} fa-${icon}`)).flat();
/** @hidden */
let EditProfileModalComponent = class EditProfileModalComponent {
    constructor(injector, componentFactoryResolver, profilesService, modalInstance) {
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.profilesService = profilesService;
        this.modalInstance = modalInstance;
        this.defaultsMode = 'disabled';
        this.colorsAutocomplete = text$ => text$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((q) => tabby_core__WEBPACK_IMPORTED_MODULE_3__.TAB_COLORS
            .filter(x => !q || x.name.toLowerCase().startsWith(q.toLowerCase()))
            .map(x => x.value)));
        this.colorsFormatter = value => {
            var _a, _b;
            return (_b = (_a = tabby_core__WEBPACK_IMPORTED_MODULE_3__.TAB_COLORS.find(x => x.value === value)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : value;
        };
        this.groupTypeahead = (text$) => text$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(q => this.groups.filter(g => !q || g.name.toLowerCase().includes(q.toLowerCase()))));
        this.groupFormatter = (g) => g.name;
        this.iconSearch = (text$) => text$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(term => iconsClassList.filter(v => v.toLowerCase().includes(term.toLowerCase())).slice(0, 10)));
        if (this.defaultsMode === 'disabled') {
            this.profilesService.getProfileGroups().then(groups => {
                this.groups = groups;
                this.profileGroup = groups.find(g => g.id === this.profile.group);
            });
        }
    }
    ngOnInit() {
        this._profile = this.profile;
        this.profile = this.profilesService.getConfigProxyForProfile(this.profile, { skipGlobalDefaults: this.defaultsMode === 'enabled', skipGroupDefaults: this.defaultsMode === 'group' });
    }
    ngAfterViewInit() {
        const componentType = this.profileProvider.settingsComponent;
        if (componentType) {
            setTimeout(() => {
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
                const componentRef = componentFactory.create(this.injector);
                this.settingsComponentInstance = componentRef.instance;
                this.settingsComponentInstance.profile = this.profile;
                this.placeholder.insert(componentRef.hostView);
            });
        }
    }
    save() {
        var _a, _b;
        if (!this.profileGroup) {
            this.profile.group = undefined;
        }
        else {
            this.profile.group = this.profileGroup.id;
        }
        (_b = (_a = this.settingsComponentInstance) === null || _a === void 0 ? void 0 : _a.save) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.profile.__cleanup();
        this.modalInstance.close(this._profile);
    }
    cancel() {
        this.modalInstance.dismiss();
    }
    isConnectable() {
        return this.profileProvider instanceof tabby_core__WEBPACK_IMPORTED_MODULE_3__.ConnectableProfileProvider;
    }
};
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    __metadata("design:type", Object)
], EditProfileModalComponent.prototype, "profile", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    __metadata("design:type", tabby_core__WEBPACK_IMPORTED_MODULE_3__.ProfileProvider)
], EditProfileModalComponent.prototype, "profileProvider", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    __metadata("design:type", Function)
], EditProfileModalComponent.prototype, "settingsComponent", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    __metadata("design:type", String)
], EditProfileModalComponent.prototype, "defaultsMode", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    __metadata("design:type", Object)
], EditProfileModalComponent.prototype, "profileGroup", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild)('placeholder', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef }),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef)
], EditProfileModalComponent.prototype, "placeholder", void 0);
EditProfileModalComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        template: __webpack_require__(/*! ./editProfileModal.component.pug */ "./src/components/editProfileModal.component.pug"),
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver,
        tabby_core__WEBPACK_IMPORTED_MODULE_3__.ProfilesService,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal])
], EditProfileModalComponent);



/***/ }),

/***/ "./src/components/homepageSettingsTab.ts":
/*!***********************************************!*\
  !*** ./src/components/homepageSettingsTab.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageSettingsTabComponent: () => (/* binding */ HomepageSettingsTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HomepageSettingsTabComponent = class HomepageSettingsTabComponent {
    constructor(config, translate, platform) {
        this.config = config;
        this.translate = translate;
        this.platform = platform;
        this.AUTO_INIT_OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_1__.AUTO_INIT_OPTIONS;
        this.autoInitList = Object.entries(_constants__WEBPACK_IMPORTED_MODULE_1__.AUTO_INIT_OPTIONS).map(([key, label]) => ({
            key,
            label
        }));
        // console.log(this.translate.instant('Application'));
    }
    openGithub() {
        this.platform.openExternal('https://github.com/OpaqueGlass/tabby-connection-homepage');
    }
    openNewIssue() {
        this.platform.openExternal('https://github.com/OpaqueGlass/tabby-connection-homepage/issues/new/choose');
    }
    saveToLocalStorage() {
        this.config.save();
        window.localStorage.setItem("oghp_config_backup", JSON.stringify(this.config.store.ogAutoCompletePlugin));
    }
};
HomepageSettingsTabComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: __webpack_require__(/*! ./homepageSettingsTab.pug */ "./src/components/homepageSettingsTab.pug"),
        styles: [__webpack_require__(/*! ./homepageSettingsTab.scss */ "./src/components/homepageSettingsTab.scss")]
    }),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_2__.ConfigService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService,
        tabby_core__WEBPACK_IMPORTED_MODULE_2__.PlatformService])
], HomepageSettingsTabComponent);



/***/ }),

/***/ "./src/components/homepageTab.ts":
/*!***************************************!*\
  !*** ./src/components/homepageTab.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageTabComponent: () => (/* binding */ HomepageTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.mjs");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var services_profileManagementService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/profileManagementService */ "./src/services/profileManagementService.ts");
/* harmony import */ var services_myLogService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/myLogService */ "./src/services/myLogService.ts");
/* harmony import */ var natural_orderby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! natural-orderby */ "./node_modules/natural-orderby/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const OG_UX_I18N = {"es": {"name": "Español", "langTitle": "Idioma de la interfaz", "categories": "Categorías", "categoriesTitle": "Configurar categorías y colores", "panelTitle": "Configuración de categorías (visibilidad y color)", "panelHint": "Marca las categorías visibles y elige el color de cada una:", "toggleVis": "Ocultar / mostrar", "pickColor": "Elegir color de categoría", "hideCat": "Ocultar categoría", "showAll": "Mostrar todas", "resetColors": "Restablecer colores", "auto": "Automático (idioma de Tabby)", "applyTabby": "Aplicar también al idioma de Tabby", "privacy": "Pixelar", "privacyOn": "Modo privacidad activo (datos pixelados). Clic para mostrar", "privacyOff": "Activar modo privacidad (pixelar nombres, IPs y usuarios)"}, "en": {"name": "English", "langTitle": "Interface language", "categories": "Categories", "categoriesTitle": "Configure categories and colors", "panelTitle": "Category settings (visibility and color)", "panelHint": "Tick the visible categories and pick a color for each one:", "toggleVis": "Hide / show", "pickColor": "Pick category color", "hideCat": "Hide category", "showAll": "Show all", "resetColors": "Reset colors", "auto": "Automatic (Tabby language)", "applyTabby": "Also apply to Tabby language", "privacy": "Blur Data", "privacyOn": "Privacy mode active (data blurred). Click to reveal", "privacyOff": "Enable privacy mode (blur names, IPs and usernames)"}, "fr": {"name": "Français", "langTitle": "Langue de l'interface", "categories": "Catégories", "categoriesTitle": "Configurer les catégories et les couleurs", "panelTitle": "Paramètres des catégories (visibilité et couleur)", "panelHint": "Cochez les catégories visibles et choisissez une couleur pour chacune :", "toggleVis": "Masquer / afficher", "pickColor": "Choisir la couleur", "hideCat": "Masquer la catégorie", "showAll": "Tout afficher", "resetColors": "Réinitialiser les couleurs", "auto": "Automatique (langue de Tabby)", "applyTabby": "Appliquer aussi à la langue de Tabby", "privacy": "Flouter", "privacyOn": "Mode confidentialité actif (données floutées). Cliquer pour afficher", "privacyOff": "Activer le mode confidentialité (flouter les données)"}, "de": {"name": "Deutsch", "langTitle": "Oberflächensprache", "categories": "Kategorien", "categoriesTitle": "Kategorien und Farben konfigurieren", "panelTitle": "Kategorieeinstellungen (Sichtbarkeit und Farbe)", "panelHint": "Sichtbare Kategorien auswählen und jeweils eine Farbe festlegen:", "toggleVis": "Ausblenden / einblenden", "pickColor": "Kategoriefarbe wählen", "hideCat": "Kategorie ausblenden", "showAll": "Alle anzeigen", "resetColors": "Farben zurücksetzen", "auto": "Automatisch (Tabby-Sprache)", "applyTabby": "Auch auf Tabby-Sprache anwenden", "privacy": "Verpixeln", "privacyOn": "Datenschutzmodus aktiv (Daten verpixelt). Klicken zum Anzeigen", "privacyOff": "Datenschutzmodus aktivieren (Daten verpixeln)"}, "pt": {"name": "Português", "langTitle": "Idioma da interface", "categories": "Categorias", "categoriesTitle": "Configurar categorias e cores", "panelTitle": "Configuração de categorias (visibilidade e cor)", "panelHint": "Marque as categorias visíveis e escolha a cor de cada uma:", "toggleVis": "Ocultar / mostrar", "pickColor": "Escolher cor da categoria", "hideCat": "Ocultar categoria", "showAll": "Mostrar todas", "resetColors": "Repor cores", "auto": "Automático (idioma do Tabby)", "applyTabby": "Aplicar também ao idioma do Tabby", "privacy": "Desfocar", "privacyOn": "Modo de privacidade ativo (dados desfocados). Clique para revelar", "privacyOff": "Ativar modo de privacidade (desfocar nomes, IPs e utilizadores)"}, "it": {"name": "Italiano", "langTitle": "Lingua dell'interfaccia", "categories": "Categorie", "categoriesTitle": "Configura categorie e colori", "panelTitle": "Impostazioni categorie (visibilità e colore)", "panelHint": "Spunta le categorie visibili e scegli il colore di ciascuna:", "toggleVis": "Nascondi / mostra", "pickColor": "Scegli il colore", "hideCat": "Nascondi categoria", "showAll": "Mostra tutte", "resetColors": "Ripristina colori", "auto": "Automatico (lingua di Tabby)", "applyTabby": "Applica anche alla lingua di Tabby", "privacy": "Sfoca", "privacyOn": "Modalità privacy attiva (dati sfocati). Clicca per mostrare", "privacyOff": "Attiva modalità privacy (sfoca nomi, IP e utenti)"}};
let HomepageTabComponent = class HomepageTabComponent extends tabby_core__WEBPACK_IMPORTED_MODULE_1__.BaseTabComponent {
    constructor(profilesService, profileMgr, translate, logger, injector, notificationService) {
        super(injector);
        this.profilesService = profilesService;
        this.profileMgr = profileMgr;
        this.translate = translate;
        this.logger = logger;
        this.notificationService = notificationService;
        this.injector = injector;
        this.connections = []; // 原始的连接列表
        this.groups = []; // 根据分组后的数据
        this.allGroups = []; // 全部分组数据（用于搜索还原）
        this.searchQuery = ''; // 搜索查询输入内容
        this.fuse = null; // Fuse.js 搜索实例
        this.searchDebounceTimer = null; // 防抖定时器引用
        this.showCategorySettings = false;
        this.showLanguageMenu = false;
        let pStored = false;
        try { pStored = window.localStorage.getItem('tabby_homepage_privacy') === 'true'; } catch (e) {}
        this.privacyMode = pStored;
        this._windowClickListener = (event) => {
            if (this.showLanguageMenu || this.showCategorySettings) {
                this.onDocumentClick(event);
            }
        };
        window.addEventListener('click', this._windowClickListener, true);
        this.setTitle('Homepage');
        this.icon = 'fas fa-house';
        this.focused$.subscribe(() => {
            // 当标签页获得焦点时，刷新分组数据
            this.refreshGroups(false);
            this.searchConnections();
            this.logger.log('Homepage tab focused, refreshed groups and search.');
        });
    }
    ngOnDestroy() {
        if (this._windowClickListener) {
            window.removeEventListener('click', this._windowClickListener, true);
        }
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            // 初始化连接列表
            const allProfiles = yield this.profilesService.getProfiles();
            this.connections = allProfiles;
            // 初始化分组
            this.refreshGroups();
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
        }, 0);
    }
    refreshGroups() {
        return __awaiter(this, arguments, void 0, function* (refreshAll = true) {
            // 1. 并发获取数据
            const [recentProfiles, fetchedGroups] = yield Promise.all([
                this.profilesService.getRecentProfiles(),
                this.profilesService.getProfileGroups({
                    includeProfiles: true,
                    includeNonUserGroup: this.config.store.terminal.showBuiltinProfiles
                })
            ]);
            // 定义内部处理函数：清洗数据并进行组内升序排序
            const processConnections = (profiles) => {
                const processed = (profiles || []).map(conn => {
                    const iconValue = conn.icon || 'fas fa-desktop';
                    return Object.assign(Object.assign({}, conn), { icon: iconValue, isHTML: iconValue.trim().startsWith('<svg') });
                });
                // 连接内部按照名称 (name) 升序排序
                return (0,natural_orderby__WEBPACK_IMPORTED_MODULE_4__.orderBy)(processed, [v => v.name]);
            };
            // 2. 构建 "Recent" 分组 (Recent 始终排第一，不参与后续的分组排序)
            let collapsedList = [];
            try { collapsedList = JSON.parse(window.localStorage.getItem('tabby_collapsed_groups') || '[]'); } catch(e) {}
            const recentGroup = {
                id: 'recent',
                name: this.translate.instant('Recent'),
                collapsed: collapsedList.includes('recent'),
                connections: processConnections(recentProfiles)
            };
            // 3. 处理并映射普通分组
            let mappedGroups = fetchedGroups.map(group => ({
                id: group.id,
                name: group.name,
                collapsed: collapsedList.includes(group.id) || collapsedList.includes(group.name),
                connections: processConnections(group.profiles)
            })).filter(group => group.connections.length > 0);
            // 4. 分组排序逻辑
            const getGroupWeight = (id) => {
                if (id === 'ungrouped')
                    return 1;
                if (id.startsWith('Imported-from-'))
                    return 2;
                if (id === 'built-in')
                    return 3;
                return 0; // 普通分组权重最低，排在前面
            };
            mappedGroups = (0,natural_orderby__WEBPACK_IMPORTED_MODULE_4__.orderBy)(mappedGroups, [
                v => getGroupWeight(v.id), // 首先按权重排序 (0 < 1 < 2 < 3)
                // 首先按权重排序 (0 < 1 < 2 < 3)
                v => v.name // 权重相同时（即都是普通分组时），按名称升序
            ]);
            // 5. 合并数据：确保 Recent 在首位
            const finalGroups = [];
            if (recentGroup.connections.length > 0) {
                finalGroups.push(recentGroup);
            }
            finalGroups.push(...mappedGroups);
            this.allGroups = finalGroups;
            if (refreshAll) {
                this.groups = [...this.allGroups];
            }
            this.logger.log('Refreshed and sorted groups:', this.groups);
        });
    }
    onCompositionEnd(event) {
        this.searchQuery = event.target.value;
        this.searchConnections();
    }
    searchConnections() {
        // 清除之前的定时器
        if (this.searchDebounceTimer) {
            clearTimeout(this.searchDebounceTimer);
        }
        // 设置 300ms 延迟执行
        this.searchDebounceTimer = setTimeout(() => {
            const query = this.searchQuery.trim().toLowerCase();
            if (!query) {
                this.groups = [...this.allGroups];
                return;
            }
            // 注意：不要开启 useTokenSearch。fuse.js 的倒排索引分词器使用 /\b\w+\b/g，
            // 中文不属于 \w，会被切成 0 个 token，导致中文始终搜不到结果。
            // 这里改用逐字符的 Bitap 模糊匹配（对 CJK 有效），
            // 多关键词场景由下面手动分词后取交集来实现。
            this.fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.connections, {
                keys: ['name', 'options.host', 'options.user'],
                threshold: 0.3,
                ignoreLocation: true,
            });
            const tokens = query.split(/\s+/).filter(token => token.length > 0);
            let matchedItems = null;
            for (const token of tokens) {
                const hits = new Set(this.fuse.search(token).map(result => result.item));
                matchedItems = matchedItems === null
                    ? [...hits]
                    : matchedItems.filter(item => hits.has(item));
            }
            matchedItems = matchedItems !== null && matchedItems !== void 0 ? matchedItems : [];
            this.logger.log("query", query, "matched", matchedItems);
            this.groups = [{
                    id: 'search-results',
                    name: this.translate.instant('opaqueglasshomepage.ui.searchResult'),
                    connections: matchedItems
                }];
            // 重置定时器引用
            this.searchDebounceTimer = null;
        }, 300);
    }
    getUiLang() {
        let l = null;
        try { l = window.localStorage.getItem('tabby_homepage_lang'); } catch (e) {}
        if (!l || !OG_UX_I18N[l]) {
            let tl = 'es';
            try { tl = String((this.config && this.config.store && this.config.store.language) || navigator.language || 'es').slice(0, 2).toLowerCase(); } catch (e) {}
            l = OG_UX_I18N[tl] ? tl : 'en';
        }
        return l;
    }
    t(key) {
        const d = OG_UX_I18N[this.getUiLang()] || OG_UX_I18N.en;
        return d[key] !== undefined ? d[key] : (OG_UX_I18N.en[key] || key);
    }
    getUiLangLabel() { return (OG_UX_I18N[this.getUiLang()] || OG_UX_I18N.en).name; }
    isUiLang(code) {
        let stored = null;
        try { stored = window.localStorage.getItem('tabby_homepage_lang'); } catch (e) {}
        return code === 'auto' ? (!stored || !OG_UX_I18N[stored]) : stored === code;
    }
    getLanguages() {
        return [{ code: 'auto', name: this.t('auto') }].concat(Object.keys(OG_UX_I18N).map(c => ({ code: c, name: OG_UX_I18N[c].name })));
    }
    setUiLang(code) {
        try {
            if (code === 'auto') window.localStorage.removeItem('tabby_homepage_lang');
            else window.localStorage.setItem('tabby_homepage_lang', code);
        } catch (e) {}
        this.showLanguageMenu = false;
    }
    applyToTabby() {
        const map = { es: 'es-ES', en: 'en-US', fr: 'fr-FR', de: 'de-DE', pt: 'pt-PT', it: 'it-IT' };
        try {
            this.config.store.language = map[this.getUiLang()] || 'en-US';
            this.config.save();
        } catch (e) {}
        this.showLanguageMenu = false;
    }
    toggleLanguageMenu(event) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
        this.showLanguageMenu = !this.showLanguageMenu;
        this.showCategorySettings = false;
    }
    togglePrivacyMode() {
        this.privacyMode = !this.privacyMode;
        try {
            window.localStorage.setItem('tabby_homepage_privacy', String(this.privacyMode));
        } catch (e) {}
    }
    toggleCategorySettings(event) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
        this.showCategorySettings = !this.showCategorySettings;
        this.showLanguageMenu = false;
    }
    onDocumentClick(event) {
        try {
            const target = event && event.target;
            if (!target) return;
            let changed = false;

            if (this.showLanguageMenu) {
                const langContainer = document.getElementById('og-ux-lang-container');
                const isInsideLang = Boolean((target.closest && (target.closest('#og-ux-lang-container') || target.closest('#og-ux-lang-btn') || target.closest('#og-ux-lang-menu'))) || (langContainer && langContainer.contains(target)));
                if (!isInsideLang) {
                    this.showLanguageMenu = false;
                    changed = true;
                }
            }

            if (this.showCategorySettings) {
                const catPanel = document.getElementById('og-ux-cat-panel');
                const catBtn = document.getElementById('og-ux-cat-btn');
                const isInsideCat = Boolean((target.closest && (target.closest('#og-ux-cat-panel') || target.closest('#og-ux-cat-btn') || target.closest('.og-ux-cat-panel'))) || (catPanel && catPanel.contains(target)) || (catBtn && catBtn.contains(target)));
                if (!isInsideCat) {
                    this.showCategorySettings = false;
                    changed = true;
                }
            }

            if (changed) {
                try {
                    const cd = this.injector && this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
                    if (cd) {
                        cd.markForCheck();
                        cd.detectChanges();
                    }
                } catch (e) {}
            }
        } catch (e) {}
    }
    onDocumentKeydown(event) {
        if (event && event.key === 'Escape') {
            if (this.showLanguageMenu || this.showCategorySettings) {
                this.showLanguageMenu = false;
                this.showCategorySettings = false;
                try {
                    const cd = this.injector && this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
                    if (cd) {
                        cd.markForCheck();
                        cd.detectChanges();
                    }
                } catch (e) {}
            }
        }
    }
    showAllGroups() { try { window.localStorage.setItem('tabby_hidden_groups', '[]'); } catch (e) {} }
    resetGroupColors() { try { window.localStorage.removeItem('tabby_group_colors'); } catch (e) {} }
    isGroupHidden(group) {
        try {
            const list = JSON.parse(window.localStorage.getItem('tabby_hidden_groups') || '[]');
            const key = group.id || group.name;
            return list.includes(key);
        } catch (e) { return false; }
    }
    toggleGroupVisibility(group) {
        try {
            let list = JSON.parse(window.localStorage.getItem('tabby_hidden_groups') || '[]');
            const key = group.id || group.name;
            const idx = list.indexOf(key);
            if (idx === -1) {
                list.push(key);
            } else {
                list.splice(idx, 1);
            }
            window.localStorage.setItem('tabby_hidden_groups', JSON.stringify(list));
        } catch (e) {}
    }
    getGroupColor(group) {
        try {
            const colors = JSON.parse(window.localStorage.getItem('tabby_group_colors') || '{}');
            const key = group.id || group.name;
            if (colors[key]) return colors[key];
            if (colors[group.name]) return colors[group.name];
        } catch (e) {}
        return '#ffffff';
    }
    setGroupColor(group, color) {
        try {
            const colors = JSON.parse(window.localStorage.getItem('tabby_group_colors') || '{}');
            const key = group.id || group.name;
            colors[key] = color;
            colors[group.name] = color;
            window.localStorage.setItem('tabby_group_colors', JSON.stringify(colors));
        } catch (e) {}
    }
    toggleGroupCollapse(group) {
        group.collapsed = !group.collapsed;
        try {
            let list = JSON.parse(window.localStorage.getItem('tabby_collapsed_groups') || '[]');
            const key = group.id || group.name;
            const idx = list.indexOf(key);
            if (group.collapsed && idx === -1) {
                list.push(key);
            } else if (!group.collapsed && idx !== -1) {
                list.splice(idx, 1);
            }
            window.localStorage.setItem('tabby_collapsed_groups', JSON.stringify(list));
        } catch (e) {}
        if (this.allGroups) {
            const m = this.allGroups.find(g => (g.id && g.id === group.id) || g.name === group.name);
            if (m) m.collapsed = group.collapsed;
        }
    }
    openConnection(conn) {
        this.profilesService.launchProfile(conn);
    }
    createConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.profileMgr.newProfile();
            yield this.refreshData(); // 操作完成后刷新列表
        });
    }
    editConnection(conn) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.profileMgr.editProfile(conn);
            yield this.refreshData();
        });
    }
    deleteConnection(conn) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.profileMgr.deleteProfile(conn);
            yield this.refreshData();
        });
    }
    cloneConnection(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            // 直接将当前的连接作为基准传入，profileMgr 会处理复制逻辑
            yield this.profileMgr.newProfile(connection);
            yield this.refreshData();
        });
    }
    // 封装一个统一的刷新逻辑
    refreshData() {
        return __awaiter(this, void 0, void 0, function* () {
            const allProfiles = yield this.profilesService.getProfiles();
            this.connections = allProfiles;
            yield this.refreshGroups();
        });
    }
    onSearchEnter() {
        const query = this.searchQuery.trim();
        // 只有在有输入内容且当前有搜索结果时才执行
        if (query && this.groups.length > 0) {
            // 找到第一个分组中的第一个连接
            const firstGroup = this.groups[0];
            if (firstGroup.connections && firstGroup.connections.length > 0) {
                const firstConn = firstGroup.connections[0];
                this.openConnection(firstConn);
            }
        }
    }
    onQuickConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.searchQuery.trim();
            if (query) {
                const providers = this.profilesService.getProviders();
                const parts = query.split(" ");
                let protocol = "ssh";
                let address = query;
                if (parts.length > 1) {
                    protocol = parts[0];
                    address = parts.slice(1).join(" ");
                }
                let flag = false;
                for (const provider of providers) {
                    if (provider.id === protocol || provider.name.toLowerCase() === protocol.toLowerCase()) {
                        // @ts-ignore
                        const result = yield provider.quickConnect(address);
                        if (result) {
                            this.openConnection(result);
                            flag = true;
                            break;
                        }
                    }
                }
                if (!flag) {
                    this.notificationService.info("No matching protocol provider found.");
                }
            }
        });
    }
};
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('ogchsearchInput'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)
], HomepageTabComponent.prototype, "searchInput", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(),
    __metadata("design:type", Object)
], HomepageTabComponent.prototype, "searchQuery", void 0);
HomepageTabComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: __webpack_require__(/*! ./homepageTab.pug */ "./src/components/homepageTab.pug"),
        styles: [__webpack_require__(/*! ./homepageTab.scss */ "./src/components/homepageTab.scss")],
        host: {
            'style': 'display: block; width: 100%;',
            '(document:click)': 'onDocumentClick($event)',
            '(document:keydown.escape)': 'onDocumentKeydown($event)'
        }
    }),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_1__.ProfilesService,
        services_profileManagementService__WEBPACK_IMPORTED_MODULE_2__.ProfileManagementService,
        tabby_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService,
        services_myLogService__WEBPACK_IMPORTED_MODULE_3__.MyLogger,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector,
        tabby_core__WEBPACK_IMPORTED_MODULE_1__.NotificationsService])
], HomepageTabComponent);



/***/ }),

/***/ "./src/configProvider.ts":
/*!*******************************!*\
  !*** ./src/configProvider.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageConfigProvider: () => (/* binding */ HomepageConfigProvider)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_1__);


/** @hidden */
class HomepageConfigProvider extends tabby_core__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider {
    constructor() {
        super(...arguments);
        this.defaults = {
            ogHomepagePlugin: {
                debugLevel: 3,
                autoInit: _constants__WEBPACK_IMPORTED_MODULE_0__.AUTO_INIT_OPTIONS.PLUGIN,
                doubleClickToOpen: false,
                btnOnLeftToolbar: true,
                homepageBtnWeight: 0,
            },
            hotkeys: {
                'oghomepage_open': [],
            },
        };
    }
}


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTO_INIT_OPTIONS: () => (/* binding */ AUTO_INIT_OPTIONS)
/* harmony export */ });
const AUTO_INIT_OPTIONS = {
    // 值（翻译内容）不能修改！，不然会影响已有用户的设置
    PLUGIN: 'opaqueglasshomepage.settings.option_plugin',
    ORIGINAL: 'opaqueglasshomepage.settings.option_original',
    PROFILE_SELECTOR: 'opaqueglasshomepage.settings.option_profile_selector',
    DISABLE: 'opaqueglasshomepage.settings.option_disable'
};


/***/ }),

/***/ "./src/hotkeyProvider.ts":
/*!*******************************!*\
  !*** ./src/hotkeyProvider.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoCompleteHotkeyProvider: () => (/* binding */ AutoCompleteHotkeyProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/** @hidden */
let AutoCompleteHotkeyProvider = class AutoCompleteHotkeyProvider extends tabby_core__WEBPACK_IMPORTED_MODULE_1__.HotkeyProvider {
    constructor() {
        super();
        this.hotkeys = [
            {
                id: 'oghomepage_open',
                name: 'Open Homepage',
            }
        ];
    }
    provide() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                ...this.hotkeys
            ];
        });
    }
};
AutoCompleteHotkeyProvider = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __metadata("design:paramtypes", [])
], AutoCompleteHotkeyProvider);



/***/ }),

/***/ "./src/services/myLogService.ts":
/*!**************************************!*\
  !*** ./src/services/myLogService.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyLogger: () => (/* binding */ MyLogger)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MyLogger = class MyLogger {
    constructor(log, configService) {
        var _a, _b, _c;
        this.configService = configService;
        this.logLevel = 3;
        this.name = 'connection-homepage';
        // tabby的Logger不支持,继续传参，只能类似%d这样的模板字符串，我们这边还是自定义省心点
        this.logLevel = (_c = (_b = (_a = configService.store) === null || _a === void 0 ? void 0 : _a.ogHomepagePlugin) === null || _b === void 0 ? void 0 : _b.debugLevel) !== null && _c !== void 0 ? _c : 3;
        configService.changed$.subscribe(() => {
            this.setLogLevel(configService.store.ogHomepagePlugin.debugLevel);
        });
    }
    setLogLevel(level) {
        this.logLevel = level;
    }
    getLogLevel() {
        return this.logLevel;
    }
    messyDebug(...args) {
        if (this.logLevel <= -1) {
            console.debug(`%c[${this.name}] `, "color: #aaa", ...args);
        }
    }
    debug(...args) {
        if (this.logLevel <= 0) {
            console.debug(`%c[${this.name}] `, "color: #aaa", ...args);
        }
    }
    log(...args) {
        if (this.logLevel <= 1) {
            console.info(`%c[${this.name}] `, "color: #aaa", ...args);
        }
    }
    warn(...args) {
        if (this.logLevel <= 2) {
            console.warn(`%c[${this.name}] `, "color: #aaa", ...args);
        }
    }
    error(...args) {
        if (this.logLevel <= 3) {
            console.error(`%c[${this.name}] `, "color: #aaa", ...args);
        }
    }
};
MyLogger = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_1__.LogService,
        tabby_core__WEBPACK_IMPORTED_MODULE_1__.ConfigService])
], MyLogger);



/***/ }),

/***/ "./src/services/profileManagementService.ts":
/*!**************************************************!*\
  !*** ./src/services/profileManagementService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileManagementService: () => (/* binding */ ProfileManagementService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clone-deep */ "./node_modules/clone-deep/index.js");
/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clone_deep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_editProfileModal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/editProfileModal.component */ "./src/components/editProfileModal.component.ts");
/* harmony import */ var components_editProfileGroupModal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/editProfileGroupModal.component */ "./src/components/editProfileGroupModal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ProfileManagementService_1;






let ProfileManagementService = ProfileManagementService_1 = class ProfileManagementService {
    constructor(config, profilesService, selector, ngbModal, platform, translate, profileProviders) {
        this.config = config;
        this.profilesService = profilesService;
        this.selector = selector;
        this.ngbModal = ngbModal;
        this.platform = platform;
        this.translate = translate;
        this.profileProviders = profileProviders;
    }
    isProfileBlacklisted(profile) {
        return profile.id && this.config.store.profileBlacklist.includes(profile.id);
    }
    newProfile(base) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!base) {
                let profiles = yield this.profilesService.getProfiles();
                profiles = profiles.filter(p => !this.isProfileBlacklisted(p));
                profiles.sort((a, b) => { var _a, _b; return ((_a = a.weight) !== null && _a !== void 0 ? _a : 0) - ((_b = b.weight) !== null && _b !== void 0 ? _b : 0); });
                base = yield this.selector.show(this.translate.instant('Select a base profile to use as a template'), profiles.map(p => {
                    var _a;
                    return ({
                        icon: p.icon,
                        description: (_a = this.profilesService.getDescription(p)) !== null && _a !== void 0 ? _a : undefined,
                        name: p.group ? `${this.profilesService.resolveProfileGroupName(p.group)} / ${p.name}` : p.name,
                        result: p,
                    });
                })).catch(() => undefined);
                if (!base)
                    return;
            }
            const baseProfile = clone_deep__WEBPACK_IMPORTED_MODULE_2___default()(base);
            delete baseProfile.id;
            if (base.isTemplate) {
                baseProfile.name = '';
            }
            else if (!base.isBuiltin) {
                baseProfile.name = this.translate.instant('{name} copy', base);
            }
            baseProfile.isBuiltin = false;
            baseProfile.isTemplate = false;
            const result = yield this.showProfileEditModal(baseProfile);
            if (!result)
                return;
            if (!result.name) {
                const cfgProxy = this.profilesService.getConfigProxyForProfile(result);
                result.name = (_b = (_a = this.profilesService.providerForProfile(result)) === null || _a === void 0 ? void 0 : _a.getSuggestedName(cfgProxy)) !== null && _b !== void 0 ? _b : this.translate.instant('{name} copy', base);
            }
            yield this.profilesService.newProfile(result);
            yield this.config.save();
        });
    }
    editProfile(profile) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.showProfileEditModal(profile);
            if (!result)
                return;
            yield this.profilesService.writeProfile(result);
            yield this.config.save();
        });
    }
    deleteProfile(profile) {
        return __awaiter(this, void 0, void 0, function* () {
            const choice = yield this.platform.showMessageBox({
                type: 'warning',
                message: this.translate.instant('Delete "{name}"?', profile),
                buttons: [
                    this.translate.instant('Delete'),
                    this.translate.instant('Keep'),
                ],
                defaultId: 1,
                cancelId: 1,
            });
            if (choice.response === 0) {
                yield this.profilesService.deleteProfile(profile);
                yield this.config.save();
            }
        });
    }
    showProfileEditModal(profile) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = this.ngbModal.open(_components_editProfileModal_component__WEBPACK_IMPORTED_MODULE_4__.EditProfileModalComponent, { size: 'lg' });
            const provider = this.profilesService.providerForProfile(profile);
            if (!provider) {
                throw new Error('Cannot edit a profile without a provider');
            }
            modal.componentInstance.profile = clone_deep__WEBPACK_IMPORTED_MODULE_2___default()(profile);
            modal.componentInstance.profileProvider = provider;
            const result = yield modal.result.catch(() => null);
            if (!result)
                return null;
            result.type = provider.id;
            return result;
        });
    }
    newProfileGroup() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = this.ngbModal.open(tabby_core__WEBPACK_IMPORTED_MODULE_3__.PromptModalComponent);
            modal.componentInstance.prompt = this.translate.instant('New group name');
            const result = yield modal.result.catch(() => null);
            if (result === null || result === void 0 ? void 0 : result.value.trim()) {
                yield this.profilesService.newProfileGroup({ id: '', name: result.value });
                yield this.config.save();
            }
        });
    }
    editProfileGroup(group) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.showProfileGroupEditModal(group);
            if (!result) {
                return;
            }
            yield this.profilesService.writeProfileGroup(ProfileManagementService_1.collapsableIntoPartialProfileGroup(result));
            yield this.config.save();
        });
    }
    showProfileGroupEditModal(group) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = this.ngbModal.open(components_editProfileGroupModal_component__WEBPACK_IMPORTED_MODULE_5__.EditProfileGroupModalComponent, { size: 'lg' });
            modal.componentInstance.group = clone_deep__WEBPACK_IMPORTED_MODULE_2___default()(group);
            modal.componentInstance.providers = this.profileProviders;
            const result = yield modal.result.catch(() => null);
            if (!result) {
                return null;
            }
            if (result.provider) {
                return this.editProfileGroupDefaults(result.group, result.provider);
            }
            return result.group;
        });
    }
    editProfileGroupDefaults(group, provider) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const modal = this.ngbModal.open(_components_editProfileModal_component__WEBPACK_IMPORTED_MODULE_4__.EditProfileModalComponent, { size: 'lg' });
            const model = (_b = (_a = group.defaults) === null || _a === void 0 ? void 0 : _a[provider.id]) !== null && _b !== void 0 ? _b : {};
            model.type = provider.id;
            modal.componentInstance.profile = Object.assign({}, model);
            modal.componentInstance.profileProvider = provider;
            modal.componentInstance.defaultsMode = 'group';
            const result = yield modal.result.catch(() => null);
            if (result) {
                // Fully replace the config
                for (const k in model) {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete model[k];
                }
                Object.assign(model, result);
                if (!group.defaults) {
                    group.defaults = {};
                }
                group.defaults[provider.id] = model;
            }
            return this.showProfileGroupEditModal(group);
        });
    }
    deleteProfileGroup(group) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if ((yield this.platform.showMessageBox({
                type: 'warning',
                message: this.translate.instant('Delete "{name}"?', group),
                buttons: [
                    this.translate.instant('Delete'),
                    this.translate.instant('Keep'),
                ],
                defaultId: 1,
                cancelId: 1,
            })).response === 0) {
                let deleteProfiles = false;
                if (((_b = (_a = group.profiles) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0 && (yield this.platform.showMessageBox({
                    type: 'warning',
                    message: this.translate.instant('Delete the group\'s profiles?'),
                    buttons: [
                        this.translate.instant('Move to "Ungrouped"'),
                        this.translate.instant('Delete'),
                    ],
                    defaultId: 0,
                    cancelId: 0,
                })).response !== 0) {
                    deleteProfiles = true;
                }
                yield this.profilesService.deleteProfileGroup(group, { deleteProfiles });
                yield this.config.save();
            }
        });
    }
    static collapsableIntoPartialProfileGroup(group) {
        const g = Object.assign({}, group);
        delete g.collapsed;
        return g;
    }
    static intoPartialCollapsableProfileGroup(group, collapsed) {
        const collapsableGroup = Object.assign(Object.assign({}, group), { collapsed });
        return collapsableGroup;
    }
};
ProfileManagementService = ProfileManagementService_1 = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({ providedIn: 'root' }),
    __param(6, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject)(tabby_core__WEBPACK_IMPORTED_MODULE_3__.ProfileProvider)),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_3__.ConfigService,
        tabby_core__WEBPACK_IMPORTED_MODULE_3__.ProfilesService,
        tabby_core__WEBPACK_IMPORTED_MODULE_3__.SelectorService,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal,
        tabby_core__WEBPACK_IMPORTED_MODULE_3__.PlatformService,
        tabby_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService, Array])
], ProfileManagementService);



/***/ }),

/***/ "./src/services/signalService.ts":
/*!***************************************!*\
  !*** ./src/services/signalService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MySignalService: () => (/* binding */ MySignalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MySignalService = class MySignalService {
    constructor() {
        this.menuStatusNS = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.menuStatus$ = this.menuStatusNS.asObservable();
        this.startCompleteNowNS = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.startCompleteNow$ = this.startCompleteNowNS.asObservable();
    }
    changeMenuStatus() {
        this.menuStatusNS.next();
    }
    hintNow() {
        this.startCompleteNowNS.next();
    }
};
MySignalService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({ providedIn: 'root' })
], MySignalService);



/***/ }),

/***/ "./src/services/translateService.ts":
/*!******************************************!*\
  !*** ./src/services/translateService.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageTranslateService: () => (/* binding */ HomepageTranslateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/dist/js-yaml.mjs");
/* harmony import */ var _static_i18n_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/i18n.yaml */ "./src/static/i18n.yaml");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HomepageTranslateService = class HomepageTranslateService {
    constructor(translate) {
        this.translate = translate;
    }
    initMyTranslate() {
        const supportedLangs = this.translate.getLangs().length > 0
            ? this.translate.getLangs()
            : ['en', 'zh-CN', 'ja-JP'];
        const data = js_yaml__WEBPACK_IMPORTED_MODULE_2__["default"].load(_static_i18n_yaml__WEBPACK_IMPORTED_MODULE_3__["default"]);
        const transform = (obj) => {
            const result = {};
            const recurse = (current, path) => {
                if (typeof current === "object" && !Array.isArray(current)) {
                    const keys = Object.keys(current);
                    const allStrings = keys.every(k => typeof current[k] === "string");
                    if (allStrings) {
                        // 找到英文原文作为兜底内容 (优先 en_US, 其次 en, 实在没有取第一个)
                        const fallbackContent = current['en_US'] || current['en'] || current[keys[0]];
                        // 遍历所有支持的语言，确保每个语言都有值
                        supportedLangs.forEach(lang => {
                            // 转换 key 格式以匹配 YAML 中的下划线风格 (如 en-US -> en_US)
                            const yamlLangKey = lang.replace("-", "_");
                            const content = current[yamlLangKey] || fallbackContent;
                            if (!result[lang])
                                result[lang] = {};
                            setByPath(result[lang], path, content);
                        });
                    }
                    else {
                        keys.forEach(k => recurse(current[k], path.concat(k)));
                    }
                }
            };
            const setByPath = (obj, path, value) => {
                let cur = obj;
                for (let i = 0; i < path.length - 1; i++) {
                    if (!cur[path[i]])
                        cur[path[i]] = {};
                    cur = cur[path[i]];
                }
                cur[path[path.length - 1]] = value;
            };
            recurse(obj, []);
            return result;
        };
        const result = transform(data);
        // 2. 注入翻译数据
        Object.keys(result).forEach(lang => {
            // 注入原始语言
            this.translate.setTranslation(lang, result[lang], true);
            // 特殊处理：如果注入的是 en-US，额外同步给 en-UK (保留您原有的逻辑)
            if (lang === "en-US" || lang === "en_US") {
                this.translate.setTranslation("en-UK", result[lang], true);
            }
        });
    }
};
HomepageTranslateService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({ providedIn: 'root' }),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService])
], HomepageTranslateService);



/***/ }),

/***/ "./src/settingsTabProvider.ts":
/*!************************************!*\
  !*** ./src/settingsTabProvider.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageSettingsTabProvider: () => (/* binding */ HomepageSettingsTabProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tabby_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabby-settings */ "tabby-settings");
/* harmony import */ var tabby_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabby_settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_homepageSettingsTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepageSettingsTab */ "./src/components/homepageSettingsTab.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/** @hidden */
let HomepageSettingsTabProvider = class HomepageSettingsTabProvider extends tabby_settings__WEBPACK_IMPORTED_MODULE_1__.SettingsTabProvider {
    constructor() {
        super(...arguments);
        this.id = 'ogconnecthomepage';
        // icon
        this.title = 'Connect Homepage';
    }
    getComponentType() {
        return _components_homepageSettingsTab__WEBPACK_IMPORTED_MODULE_2__.HomepageSettingsTabComponent;
    }
};
HomepageSettingsTabProvider = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()
], HomepageSettingsTabProvider);



/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__angular_forms__;

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap":
/*!*********************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__ng_bootstrap_ng_bootstrap__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_fs__ === 'undefined') { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ }),

/***/ "tabby-core":
/*!*****************************!*\
  !*** external "tabby-core" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_tabby_core__;

/***/ }),

/***/ "tabby-settings":
/*!*********************************!*\
  !*** external "tabby-settings" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_tabby_settings__;

/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.mjs":
/*!********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ entry_default)
/* harmony export */ });
/**
 * Fuse.js v7.5.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2026 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
//#region src/helpers/typeGuards.ts
function isArray(value) {
	return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
function baseToString(value) {
	if (typeof value == "string") return value;
	if (typeof value === "bigint") return value.toString();
	const result = value + "";
	return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function toString(value) {
	return value == null ? "" : baseToString(value);
}
function isString(value) {
	return typeof value === "string";
}
function isNumber(value) {
	return typeof value === "number";
}
function isBoolean(value) {
	return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
	return typeof value === "object";
}
function isObjectLike(value) {
	return isObject(value) && value !== null;
}
function isDefined(value) {
	return value !== void 0 && value !== null;
}
function isBlank(value) {
	return !value.trim().length;
}
function getTag(value) {
	return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}

//#endregion
//#region src/core/errorMessages.ts
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const INVALID_DOC_INDEX = "Invalid doc index: must be a non-negative integer within the bounds of the docs array";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
const FUSE_MATCH_TOKEN_SEARCH_UNSUPPORTED = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.";

//#endregion
//#region src/tools/KeyStore.ts
const hasOwn = Object.prototype.hasOwnProperty;
var KeyStore = class {
	constructor(keys) {
		this._keys = [];
		this._keyMap = {};
		let totalWeight = 0;
		keys.forEach((key) => {
			const obj = createKey(key);
			this._keys.push(obj);
			this._keyMap[obj.id] = obj;
			totalWeight += obj.weight;
		});
		this._keys.forEach((key) => {
			key.weight /= totalWeight;
		});
	}
	get(keyId) {
		return this._keyMap[keyId];
	}
	keys() {
		return this._keys;
	}
	toJSON() {
		return JSON.stringify(this._keys);
	}
};
function createKey(key) {
	let path = null;
	let id = null;
	let src = null;
	let weight = 1;
	let getFn = null;
	if (isString(key) || isArray(key)) {
		src = key;
		path = createKeyPath(key);
		id = createKeyId(key);
	} else {
		if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
		const name = key.name;
		src = name;
		if (hasOwn.call(key, "weight") && key.weight !== void 0) {
			weight = key.weight;
			if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(createKeyId(name)));
		}
		path = createKeyPath(name);
		id = createKeyId(name);
		getFn = key.getFn ?? null;
	}
	return {
		path,
		id,
		weight,
		src,
		getFn
	};
}
function createKeyPath(key) {
	return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
	return isArray(key) ? key.join(".") : key;
}

//#endregion
//#region src/helpers/get.ts
function get(obj, path) {
	const list = [];
	let arr = false;
	const deepGet = (obj, path, index, arrayIndex) => {
		if (!isDefined(obj)) return;
		if (!path[index]) list.push(arrayIndex !== void 0 ? {
			v: obj,
			i: arrayIndex
		} : obj);
		else {
			const value = obj[path[index]];
			if (!isDefined(value)) return;
			if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value) || typeof value === "bigint")) list.push(arrayIndex !== void 0 ? {
				v: toString(value),
				i: arrayIndex
			} : toString(value));
			else if (isArray(value)) {
				arr = true;
				for (let i = 0, len = value.length; i < len; i += 1) deepGet(value[i], path, index + 1, i);
			} else if (path.length) deepGet(value, path, index + 1, arrayIndex);
		}
	};
	deepGet(obj, isString(path) ? path.split(".") : path, 0);
	return arr ? list : list[0];
}

//#endregion
//#region src/core/config.ts
const MatchOptions = {
	includeMatches: false,
	findAllMatches: false,
	minMatchCharLength: 1
};
const BasicOptions = {
	isCaseSensitive: false,
	ignoreDiacritics: false,
	includeScore: false,
	keys: [],
	shouldSort: true,
	sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
const FuzzyOptions = {
	location: 0,
	threshold: .6,
	distance: 100
};
const AdvancedOptions = {
	useExtendedSearch: false,
	useTokenSearch: false,
	tokenize: void 0,
	tokenMatch: "any",
	getFn: get,
	ignoreLocation: false,
	ignoreFieldNorm: false,
	fieldNormWeight: 1
};
const Config = Object.freeze({
	...BasicOptions,
	...MatchOptions,
	...FuzzyOptions,
	...AdvancedOptions
});

//#endregion
//#region src/tools/fieldNorm.ts
function isWordSeparator(code) {
	return code >= 9 && code <= 13 || code === 32 || code === 160;
}
function norm(weight = 1, mantissa = 3) {
	const cache = /* @__PURE__ */ new Map();
	const m = Math.pow(10, mantissa);
	return {
		get(value) {
			let numTokens = 0;
			let inWord = false;
			for (let i = 0; i < value.length; i++) if (!isWordSeparator(value.charCodeAt(i))) {
				if (!inWord) {
					numTokens++;
					inWord = true;
				}
			} else inWord = false;
			if (numTokens === 0) numTokens = 1;
			if (cache.has(numTokens)) return cache.get(numTokens);
			const n = Math.round(m / Math.pow(numTokens, .5 * weight)) / m;
			cache.set(numTokens, n);
			return n;
		},
		clear() {
			cache.clear();
		}
	};
}

//#endregion
//#region src/tools/FuseIndex.ts
var FuseIndex = class {
	constructor({ getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
		this.norm = norm(fieldNormWeight, 3);
		this.getFn = getFn;
		this.isCreated = false;
		this.docs = [];
		this.keys = [];
		this._keysMap = {};
		this.setIndexRecords();
	}
	setSources(docs = []) {
		this.docs = docs;
	}
	setIndexRecords(records = []) {
		this.records = records;
	}
	setKeys(keys = []) {
		this.keys = keys;
		this._keysMap = {};
		keys.forEach((key, idx) => {
			this._keysMap[key.id] = idx;
		});
	}
	create() {
		if (this.isCreated || !this.docs.length) return;
		this.isCreated = true;
		const len = this.docs.length;
		this.records = new Array(len);
		let recordCount = 0;
		if (isString(this.docs[0])) for (let i = 0; i < len; i++) {
			const record = this._createStringRecord(this.docs[i], i);
			if (record) this.records[recordCount++] = record;
		}
		else for (let i = 0; i < len; i++) this.records[recordCount++] = this._createObjectRecord(this.docs[i], i);
		this.records.length = recordCount;
		this.norm.clear();
	}
	add(doc, docIndex) {
		if (!Number.isInteger(docIndex) || docIndex < 0) throw new Error(INVALID_DOC_INDEX);
		if (isString(doc)) {
			const record = this._createStringRecord(doc, docIndex);
			if (record) this.records.push(record);
			return record;
		}
		const record = this._createObjectRecord(doc, docIndex);
		this.records.push(record);
		return record;
	}
	removeAt(idx) {
		if (!Number.isInteger(idx) || idx < 0) throw new Error(INVALID_DOC_INDEX);
		for (let i = 0, len = this.records.length; i < len; i += 1) if (this.records[i].i === idx) {
			this.records.splice(i, 1);
			break;
		}
		for (let i = 0, len = this.records.length; i < len; i += 1) if (this.records[i].i > idx) this.records[i].i -= 1;
	}
	removeAll(indices) {
		const toRemove = /* @__PURE__ */ new Set();
		for (const v of indices) if (Number.isInteger(v) && v >= 0) toRemove.add(v);
		if (toRemove.size === 0) return;
		this.records = this.records.filter((r) => !toRemove.has(r.i));
		const sorted = Array.from(toRemove).sort((a, b) => a - b);
		for (const record of this.records) {
			let lo = 0;
			let hi = sorted.length;
			while (lo < hi) {
				const mid = lo + hi >>> 1;
				if (sorted[mid] < record.i) lo = mid + 1;
				else hi = mid;
			}
			record.i -= lo;
		}
	}
	getValueForItemAtKeyId(item, keyId) {
		return item[this._keysMap[keyId]];
	}
	size() {
		return this.records.length;
	}
	_createStringRecord(doc, docIndex) {
		if (!isDefined(doc) || isBlank(doc)) return null;
		return {
			v: doc,
			i: docIndex,
			n: this.norm.get(doc)
		};
	}
	_createObjectRecord(doc, docIndex) {
		const record = {
			i: docIndex,
			$: {}
		};
		for (let keyIndex = 0, keyLen = this.keys.length; keyIndex < keyLen; keyIndex++) {
			const key = this.keys[keyIndex];
			const value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
			if (!isDefined(value)) continue;
			if (isArray(value)) {
				const subRecords = [];
				for (let i = 0, len = value.length; i < len; i += 1) {
					const item = value[i];
					if (!isDefined(item)) continue;
					if (isString(item)) {
						if (!isBlank(item)) {
							const subRecord = {
								v: item,
								i,
								n: this.norm.get(item)
							};
							subRecords.push(subRecord);
						}
					} else if (isDefined(item.v)) {
						const text = isString(item.v) ? item.v : toString(item.v);
						if (!isBlank(text)) {
							const subRecord = {
								v: text,
								i: item.i,
								n: this.norm.get(text)
							};
							subRecords.push(subRecord);
						}
					}
				}
				record.$[keyIndex] = subRecords;
			} else if (isString(value) && !isBlank(value)) {
				const subRecord = {
					v: value,
					n: this.norm.get(value)
				};
				record.$[keyIndex] = subRecord;
			}
		}
		return record;
	}
	toJSON() {
		return {
			keys: this.keys.map(({ getFn, ...key }) => key),
			records: this.records
		};
	}
};
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
	const myIndex = new FuseIndex({
		getFn,
		fieldNormWeight
	});
	myIndex.setKeys(keys.map(createKey));
	myIndex.setSources(docs);
	myIndex.create();
	return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
	const { keys, records } = data;
	const myIndex = new FuseIndex({
		getFn,
		fieldNormWeight
	});
	myIndex.setKeys(keys);
	myIndex.setIndexRecords(records);
	return myIndex;
}

//#endregion
//#region src/search/bitap/convertMaskToIndices.ts
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
	const indices = [];
	let start = -1;
	let end = -1;
	let i = 0;
	for (let len = matchmask.length; i < len; i += 1) {
		const match = matchmask[i];
		if (match && start === -1) start = i;
		else if (!match && start !== -1) {
			end = i - 1;
			if (end - start + 1 >= minMatchCharLength) indices.push([start, end]);
			start = -1;
		}
	}
	if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([start, i - 1]);
	return indices;
}

//#endregion
//#region src/search/bitap/search.ts
function search(text, pattern, patternAlphabet, { location = Config.location, distance = Config.distance, threshold = Config.threshold, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, includeMatches = Config.includeMatches, ignoreLocation = Config.ignoreLocation } = {}) {
	if (pattern.length > 32) throw new Error(PATTERN_LENGTH_TOO_LARGE(32));
	const patternLen = pattern.length;
	const textLen = text.length;
	const expectedLocation = Math.max(0, Math.min(location, textLen));
	let currentThreshold = threshold;
	let bestLocation = expectedLocation;
	const calcScore = (errors, currentLocation) => {
		const accuracy = errors / patternLen;
		if (ignoreLocation) return accuracy;
		const proximity = Math.abs(expectedLocation - currentLocation);
		if (!distance) return proximity ? 1 : accuracy;
		return accuracy + proximity / distance;
	};
	const computeMatches = minMatchCharLength > 1 || includeMatches;
	const matchMask = computeMatches ? Array(textLen) : [];
	let index;
	while ((index = text.indexOf(pattern, bestLocation)) > -1) {
		const score = calcScore(0, index);
		currentThreshold = Math.min(score, currentThreshold);
		bestLocation = index + patternLen;
		if (computeMatches) {
			let i = 0;
			while (i < patternLen) {
				matchMask[index + i] = 1;
				i += 1;
			}
		}
	}
	bestLocation = -1;
	let lastBitArr = [];
	let finalScore = 1;
	let bestErrors = 0;
	let binMax = patternLen + textLen;
	const mask = 1 << patternLen - 1;
	for (let i = 0; i < patternLen; i += 1) {
		let binMin = 0;
		let binMid = binMax;
		while (binMin < binMid) {
			if (calcScore(i, expectedLocation + binMid) <= currentThreshold) binMin = binMid;
			else binMax = binMid;
			binMid = Math.floor((binMax - binMin) / 2 + binMin);
		}
		binMax = binMid;
		let start = Math.max(1, expectedLocation - binMid + 1);
		const finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
		const bitArr = Array(finish + 2);
		bitArr[finish + 1] = (1 << i) - 1;
		for (let j = finish; j >= start; j -= 1) {
			const currentLocation = j - 1;
			const charMatch = patternAlphabet[text[currentLocation]];
			bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
			if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
			if (bitArr[j] & mask) {
				finalScore = calcScore(i, currentLocation);
				if (finalScore <= currentThreshold) {
					currentThreshold = finalScore;
					bestLocation = currentLocation;
					bestErrors = i;
					if (bestLocation <= expectedLocation) break;
					start = Math.max(1, 2 * expectedLocation - bestLocation);
				}
			}
		}
		if (calcScore(i + 1, expectedLocation) > currentThreshold) break;
		lastBitArr = bitArr;
	}
	if (computeMatches && bestLocation >= 0) {
		const matchEnd = Math.min(textLen - 1, bestLocation + patternLen - 1 + bestErrors);
		for (let k = bestLocation; k <= matchEnd; k += 1) if (patternAlphabet[text[k]]) matchMask[k] = 1;
	}
	const result = {
		isMatch: bestLocation >= 0,
		score: Math.max(.001, finalScore)
	};
	if (computeMatches) {
		const indices = convertMaskToIndices(matchMask, minMatchCharLength);
		if (!indices.length) result.isMatch = false;
		else if (includeMatches) result.indices = indices;
	}
	return result;
}

//#endregion
//#region src/search/bitap/createPatternAlphabet.ts
function createPatternAlphabet(pattern) {
	const mask = {};
	for (let i = 0, len = pattern.length; i < len; i += 1) {
		const char = pattern.charAt(i);
		mask[char] = (mask[char] || 0) | 1 << len - i - 1;
	}
	return mask;
}

//#endregion
//#region src/helpers/mergeIndices.ts
function mergeIndices(indices) {
	if (indices.length <= 1) return indices;
	indices.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
	const merged = [indices[0]];
	for (let i = 1, len = indices.length; i < len; i += 1) {
		const last = merged[merged.length - 1];
		const curr = indices[i];
		if (curr[0] <= last[1] + 1) last[1] = Math.max(last[1], curr[1]);
		else merged.push(curr);
	}
	return merged;
}

//#endregion
//#region src/helpers/diacritics.ts
const NON_DECOMPOSABLE_MAP = {
	"ł": "l",
	"Ł": "L",
	"đ": "d",
	"Đ": "D",
	"ø": "o",
	"Ø": "O",
	"ħ": "h",
	"Ħ": "H",
	"ŧ": "t",
	"Ŧ": "T",
	"ı": "i",
	"ß": "ss"
};
const NON_DECOMPOSABLE_RE = new RegExp("[" + Object.keys(NON_DECOMPOSABLE_MAP).join("") + "]", "g");
const stripDiacritics = typeof String.prototype.normalize === "function" ? (str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(NON_DECOMPOSABLE_RE, (ch) => NON_DECOMPOSABLE_MAP[ch]) : (str) => str;

//#endregion
//#region src/search/bitap/index.ts
var BitapSearch = class {
	constructor(pattern, { location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreDiacritics = Config.ignoreDiacritics, ignoreLocation = Config.ignoreLocation } = {}) {
		this.options = {
			location,
			threshold,
			distance,
			includeMatches,
			findAllMatches,
			minMatchCharLength,
			isCaseSensitive,
			ignoreDiacritics,
			ignoreLocation
		};
		pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
		pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
		this.pattern = pattern;
		this.chunks = [];
		if (!this.pattern.length) return;
		const addChunk = (pattern, startIndex) => {
			this.chunks.push({
				pattern,
				alphabet: createPatternAlphabet(pattern),
				startIndex
			});
		};
		const len = this.pattern.length;
		if (len > 32) {
			let i = 0;
			const remainder = len % 32;
			const end = len - remainder;
			while (i < end) {
				addChunk(this.pattern.substr(i, 32), i);
				i += 32;
			}
			if (remainder) {
				const startIndex = len - 32;
				addChunk(this.pattern.substr(startIndex), startIndex);
			}
		} else addChunk(this.pattern, 0);
	}
	searchIn(text) {
		const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;
		text = isCaseSensitive ? text : text.toLowerCase();
		text = ignoreDiacritics ? stripDiacritics(text) : text;
		if (this.pattern === text) {
			if (text.length < this.options.minMatchCharLength) return {
				isMatch: false,
				score: 1
			};
			const result = {
				isMatch: true,
				score: 0
			};
			if (includeMatches) result.indices = [[0, text.length - 1]];
			return result;
		}
		const { location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation } = this.options;
		const allIndices = [];
		let totalScore = 0;
		let hasMatches = false;
		this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
			const { isMatch, score, indices } = search(text, pattern, alphabet, {
				location: location + startIndex,
				distance,
				threshold,
				findAllMatches,
				minMatchCharLength,
				includeMatches,
				ignoreLocation
			});
			if (isMatch) hasMatches = true;
			totalScore += score;
			if (isMatch && indices) allIndices.push(...indices);
		});
		const result = {
			isMatch: hasMatches,
			score: hasMatches ? totalScore / this.chunks.length : 1
		};
		if (hasMatches && includeMatches) result.indices = mergeIndices(allIndices);
		return result;
	}
};

//#endregion
//#region src/search/extended/matchers.ts
const MULTI_MATCH_TYPES = new Set(["fuzzy", "include"]);
function isInverse(type) {
	return type.startsWith("inverse");
}
const matchers = [
	{
		type: "exact",
		multiRegex: /^="(.*)"$/,
		singleRegex: /^=(.*)$/,
		create: (pattern) => ({
			type: "exact",
			search(text) {
				const isMatch = text === pattern;
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, pattern.length - 1]
				};
			}
		})
	},
	{
		type: "include",
		multiRegex: /^'"(.*)"$/,
		singleRegex: /^'(.*)$/,
		create: (pattern) => ({
			type: "include",
			search(text) {
				let location = 0;
				let index;
				const indices = [];
				const patternLen = pattern.length;
				while ((index = text.indexOf(pattern, location)) > -1) {
					location = index + patternLen;
					indices.push([index, location - 1]);
				}
				const isMatch = !!indices.length;
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices
				};
			}
		})
	},
	{
		type: "prefix-exact",
		multiRegex: /^\^"(.*)"$/,
		singleRegex: /^\^(.*)$/,
		create: (pattern) => ({
			type: "prefix-exact",
			search(text) {
				const isMatch = text.startsWith(pattern);
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, pattern.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-prefix-exact",
		multiRegex: /^!\^"(.*)"$/,
		singleRegex: /^!\^(.*)$/,
		create: (pattern) => ({
			type: "inverse-prefix-exact",
			search(text) {
				const isMatch = !text.startsWith(pattern);
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, text.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-suffix-exact",
		multiRegex: /^!"(.*)"\$$/,
		singleRegex: /^!(.*)\$$/,
		create: (pattern) => ({
			type: "inverse-suffix-exact",
			search(text) {
				const isMatch = !text.endsWith(pattern);
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, text.length - 1]
				};
			}
		})
	},
	{
		type: "suffix-exact",
		multiRegex: /^"(.*)"\$$/,
		singleRegex: /^(.*)\$$/,
		create: (pattern) => ({
			type: "suffix-exact",
			search(text) {
				const isMatch = text.endsWith(pattern);
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [text.length - pattern.length, text.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-exact",
		multiRegex: /^!"(.*)"$/,
		singleRegex: /^!(.*)$/,
		create: (pattern) => ({
			type: "inverse-exact",
			search(text) {
				const isMatch = text.indexOf(pattern) === -1;
				return {
					isMatch,
					score: isMatch ? 0 : 1,
					indices: [0, text.length - 1]
				};
			}
		})
	},
	{
		type: "fuzzy",
		multiRegex: /^"(.*)"$/,
		singleRegex: /^(.*)$/,
		create: (pattern, options = {}) => {
			const bitap = new BitapSearch(pattern, {
				location: options.location ?? Config.location,
				threshold: options.threshold ?? Config.threshold,
				distance: options.distance ?? Config.distance,
				includeMatches: options.includeMatches ?? Config.includeMatches,
				findAllMatches: options.findAllMatches ?? Config.findAllMatches,
				minMatchCharLength: options.minMatchCharLength ?? Config.minMatchCharLength,
				isCaseSensitive: options.isCaseSensitive ?? Config.isCaseSensitive,
				ignoreDiacritics: options.ignoreDiacritics ?? Config.ignoreDiacritics,
				ignoreLocation: options.ignoreLocation ?? Config.ignoreLocation
			});
			return {
				type: "fuzzy",
				search(text) {
					return bitap.searchIn(text);
				}
			};
		}
	}
];

//#endregion
//#region src/search/extended/parseQuery.ts
const matchersLen = matchers.length;
const ESCAPED_PIPE = "\0";
const OR_TOKEN = "|";
function tokenize(pattern) {
	const tokens = [];
	const len = pattern.length;
	let i = 0;
	while (i < len) {
		while (i < len && pattern[i] === " ") i++;
		if (i >= len) break;
		let j = i;
		while (j < len && pattern[j] !== " " && pattern[j] !== "\"") j++;
		if (j < len && pattern[j] === "\"") {
			j++;
			while (j < len) {
				if (pattern[j] === "\"") {
					const next = j + 1;
					if (next >= len || pattern[next] === " ") {
						j++;
						break;
					}
					if (pattern[next] === "$" && (next + 1 >= len || pattern[next + 1] === " ")) {
						j += 2;
						break;
					}
				}
				j++;
			}
			tokens.push(pattern.substring(i, j));
			i = j;
		} else {
			while (j < len && pattern[j] !== " ") j++;
			tokens.push(pattern.substring(i, j));
			i = j;
		}
	}
	return tokens;
}
function getMatch(pattern, exp) {
	const matches = pattern.match(exp);
	return matches ? matches[1] : null;
}
function parseQuery(pattern, options = {}) {
	return pattern.replace(/\\\|/g, ESCAPED_PIPE).split(OR_TOKEN).map((item) => {
		const query = tokenize(item.replace(/\u0000/g, "|").trim()).filter((item) => item && !!item.trim());
		const results = [];
		for (let i = 0, len = query.length; i < len; i += 1) {
			const queryItem = query[i];
			let found = false;
			let idx = -1;
			while (!found && ++idx < matchersLen) {
				const def = matchers[idx];
				const token = getMatch(queryItem, def.multiRegex);
				if (token) {
					results.push(def.create(token, options));
					found = true;
				}
			}
			if (found) continue;
			idx = -1;
			while (++idx < matchersLen) {
				const def = matchers[idx];
				const token = getMatch(queryItem, def.singleRegex);
				if (token) {
					results.push(def.create(token, options));
					break;
				}
			}
		}
		return results;
	});
}

//#endregion
//#region src/search/extended/index.ts
var ExtendedSearch = class {
	constructor(pattern, { isCaseSensitive = Config.isCaseSensitive, ignoreDiacritics = Config.ignoreDiacritics, includeMatches = Config.includeMatches, minMatchCharLength = Config.minMatchCharLength, ignoreLocation = Config.ignoreLocation, findAllMatches = Config.findAllMatches, location = Config.location, threshold = Config.threshold, distance = Config.distance } = {}) {
		this.query = null;
		this.options = {
			isCaseSensitive,
			ignoreDiacritics,
			includeMatches,
			minMatchCharLength,
			findAllMatches,
			ignoreLocation,
			location,
			threshold,
			distance
		};
		pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
		pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
		this.pattern = pattern;
		this.query = parseQuery(this.pattern, this.options);
	}
	static condition(_, options) {
		return options.useExtendedSearch;
	}
	searchIn(text) {
		const query = this.query;
		if (!query) return {
			isMatch: false,
			score: 1
		};
		const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;
		text = isCaseSensitive ? text : text.toLowerCase();
		text = ignoreDiacritics ? stripDiacritics(text) : text;
		let numMatches = 0;
		const allIndices = [];
		let totalScore = 0;
		let hasInverse = false;
		for (let i = 0, qLen = query.length; i < qLen; i += 1) {
			const searchers = query[i];
			allIndices.length = 0;
			numMatches = 0;
			hasInverse = false;
			for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
				const matcher = searchers[j];
				const { isMatch, indices, score } = matcher.search(text);
				if (isMatch) {
					numMatches += 1;
					totalScore += score;
					if (isInverse(matcher.type)) hasInverse = true;
					if (includeMatches) if (MULTI_MATCH_TYPES.has(matcher.type)) allIndices.push(...indices);
					else allIndices.push(indices);
				} else {
					totalScore = 0;
					numMatches = 0;
					allIndices.length = 0;
					hasInverse = false;
					break;
				}
			}
			if (numMatches) {
				const result = {
					isMatch: true,
					score: totalScore / numMatches
				};
				if (hasInverse) result.hasInverse = true;
				if (includeMatches) result.indices = mergeIndices(allIndices);
				return result;
			}
		}
		return {
			isMatch: false,
			score: 1
		};
	}
};

//#endregion
//#region src/core/register.ts
const registeredSearchers = [];
function register(...args) {
	registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
	for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
		const searcherClass = registeredSearchers[i];
		if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
	}
	return new BitapSearch(pattern, options);
}

//#endregion
//#region src/core/queryParser.ts
const LogicalOperator = {
	AND: "$and",
	OR: "$or"
};
const KeyType = {
	PATH: "$path",
	PATTERN: "$val"
};
const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query) => !!query[KeyType.PATH];
const isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query) => ({ [LogicalOperator.AND]: Object.keys(query).map((key) => ({ [key]: query[key] })) });
function parse(query, options, { auto = true } = {}) {
	const next = (query) => {
		if (isString(query)) {
			const obj = {
				keyId: null,
				pattern: query
			};
			if (auto) obj.searcher = createSearcher(query, options);
			return obj;
		}
		const keys = Object.keys(query);
		const isQueryPath = isPath(query);
		if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
		if (isLeaf(query)) {
			const key = isQueryPath ? query[KeyType.PATH] : keys[0];
			const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
			if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
			const obj = {
				keyId: createKeyId(key),
				pattern
			};
			if (auto) obj.searcher = createSearcher(pattern, options);
			return obj;
		}
		const node = {
			children: [],
			operator: keys[0]
		};
		keys.forEach((key) => {
			const value = query[key];
			if (isArray(value)) value.forEach((item) => {
				node.children.push(next(item));
			});
		});
		return node;
	};
	if (!isExpression(query)) query = convertToExplicit(query);
	return next(query);
}

//#endregion
//#region src/core/computeScore.ts
function computeScoreSingle(matches, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
	let totalScore = 1;
	matches.forEach(({ key, norm, score }) => {
		const weight = key ? key.weight : null;
		totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
	});
	return totalScore;
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
	results.forEach((result) => {
		result.score = computeScoreSingle(result.matches, { ignoreFieldNorm });
	});
}

//#endregion
//#region src/tools/MaxHeap.ts
var MaxHeap = class {
	constructor(limit, comparator) {
		this.limit = limit;
		this.heap = [];
		this.comparator = comparator;
	}
	get size() {
		return this.heap.length;
	}
	insert(item) {
		if (this.size < this.limit) {
			this.heap.push(item);
			this._bubbleUp(this.size - 1);
		} else if (this.comparator(item, this.heap[0]) < 0) {
			this.heap[0] = item;
			this._sinkDown(0);
		}
	}
	extractSorted() {
		return this.heap.sort(this.comparator);
	}
	_bubbleUp(i) {
		const heap = this.heap;
		while (i > 0) {
			const parent = i - 1 >> 1;
			if (this.comparator(heap[i], heap[parent]) <= 0) break;
			const tmp = heap[i];
			heap[i] = heap[parent];
			heap[parent] = tmp;
			i = parent;
		}
	}
	_sinkDown(i) {
		const heap = this.heap;
		const len = heap.length;
		let largest = i;
		do {
			i = largest;
			const left = 2 * i + 1;
			const right = 2 * i + 2;
			if (left < len && this.comparator(heap[left], heap[largest]) > 0) largest = left;
			if (right < len && this.comparator(heap[right], heap[largest]) > 0) largest = right;
			if (largest !== i) {
				const tmp = heap[i];
				heap[i] = heap[largest];
				heap[largest] = tmp;
			}
		} while (largest !== i);
	}
};

//#endregion
//#region src/core/formatMatches.ts
function formatMatches(result) {
	const matches = [];
	result.matches.forEach((match) => {
		if (!isDefined(match.indices) || !match.indices.length) return;
		const obj = {
			indices: match.indices,
			value: match.value
		};
		if (match.key) obj.key = match.key.id;
		if (match.idx > -1) obj.refIndex = match.idx;
		matches.push(obj);
	});
	return matches;
}

//#endregion
//#region src/core/format.ts
function format(results, docs, { includeMatches = Config.includeMatches, includeScore = Config.includeScore } = {}) {
	return results.map((result) => {
		const { idx } = result;
		const data = {
			item: docs[idx],
			refIndex: idx
		};
		if (includeMatches) data.matches = formatMatches(result);
		if (includeScore) data.score = result.score;
		return data;
	});
}

//#endregion
//#region src/search/token/analyzer.ts
const DEFAULT_TOKEN = /[\p{L}\p{M}\p{N}_]+/gu;
const warned = /* @__PURE__ */ new WeakSet();
function warnNonGlobal(regex) {
	if (!warned.has(regex)) {
		warned.add(regex);
		console.warn(`[Fuse] tokenize regex ${regex} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`);
	}
}
function resolveTokenize(tokenize) {
	if (typeof tokenize === "function") {
		let validated = false;
		return (text) => {
			const result = tokenize(text);
			if (!validated) {
				validated = true;
				if (!Array.isArray(result) || result.some((t) => typeof t !== "string")) throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(result) ? "array containing non-strings" : typeof result}.`);
			}
			return result;
		};
	}
	if (tokenize instanceof RegExp) {
		if (!tokenize.global) warnNonGlobal(tokenize);
		return (text) => text.match(tokenize) || [];
	}
	return (text) => text.match(DEFAULT_TOKEN) || [];
}
function createAnalyzer({ isCaseSensitive = false, ignoreDiacritics = false, tokenize } = {}) {
	const tokenizeFn = resolveTokenize(tokenize);
	return { tokenize(text) {
		if (!isCaseSensitive) text = text.toLowerCase();
		if (ignoreDiacritics) text = stripDiacritics(text);
		return tokenizeFn(text);
	} };
}

//#endregion
//#region src/search/token/index.ts
const MAX_MASK_TERMS = 31;
var TokenSearch = class {
	static condition(_, options) {
		return options.useTokenSearch;
	}
	constructor(pattern, options) {
		this.options = options;
		this.analyzer = createAnalyzer({
			isCaseSensitive: options.isCaseSensitive,
			ignoreDiacritics: options.ignoreDiacritics,
			tokenize: options.tokenize
		});
		const queryTerms = this.analyzer.tokenize(pattern);
		const { df, fieldCount } = options._invertedIndex;
		this.termSearchers = [];
		this.idfWeights = [];
		for (const term of queryTerms) {
			this.termSearchers.push(new BitapSearch(term, {
				location: options.location,
				threshold: options.threshold,
				distance: options.distance,
				includeMatches: options.includeMatches,
				findAllMatches: options.findAllMatches,
				minMatchCharLength: options.minMatchCharLength,
				isCaseSensitive: options.isCaseSensitive,
				ignoreDiacritics: options.ignoreDiacritics,
				ignoreLocation: true
			}));
			const docFreq = df.get(term) || 0;
			const idf = Math.log(1 + (fieldCount - docFreq + .5) / (docFreq + .5));
			this.idfWeights.push(idf);
		}
		this.combineAll = options.tokenMatch === "all";
		this.numTerms = this.termSearchers.length;
		this.useMask = this.numTerms <= 31;
	}
	searchIn(text) {
		if (!this.termSearchers.length) return {
			isMatch: false,
			score: 1
		};
		const allIndices = [];
		let weightedScore = 0;
		let maxPossibleScore = 0;
		let matchedCount = 0;
		let matchedMask = 0;
		const matchedTerms = this.combineAll && !this.useMask ? /* @__PURE__ */ new Set() : null;
		for (let i = 0; i < this.termSearchers.length; i++) {
			const result = this.termSearchers[i].searchIn(text);
			const idf = this.idfWeights[i];
			maxPossibleScore += idf;
			if (result.isMatch) {
				matchedCount++;
				weightedScore += idf * (1 - result.score);
				if (result.indices) allIndices.push(...result.indices);
				if (this.combineAll) if (this.useMask) matchedMask |= 1 << i;
				else matchedTerms.add(i);
			}
		}
		if (matchedCount === 0) return {
			isMatch: false,
			score: 1
		};
		const normalized = maxPossibleScore > 0 ? 1 - weightedScore / maxPossibleScore : 0;
		const searchResult = {
			isMatch: true,
			score: Math.max(.001, normalized)
		};
		if (this.options.includeMatches && allIndices.length) searchResult.indices = mergeIndices(allIndices);
		if (this.combineAll) {
			if (this.useMask) searchResult.matchedMask = matchedMask;
			else searchResult.matchedTerms = matchedTerms;
			searchResult.termCount = this.numTerms;
		}
		return searchResult;
	}
};

//#endregion
//#region src/search/token/InvertedIndex.ts
function addField(index, text, docIdx, analyzer) {
	const tokens = analyzer.tokenize(text);
	if (!tokens.length) return;
	index.fieldCount++;
	index.docFieldCount.set(docIdx, (index.docFieldCount.get(docIdx) || 0) + 1);
	const distinctTerms = new Set(tokens);
	let perDocTerms = index.docTermFieldHits.get(docIdx);
	if (!perDocTerms) {
		perDocTerms = /* @__PURE__ */ new Map();
		index.docTermFieldHits.set(docIdx, perDocTerms);
	}
	for (const term of distinctTerms) {
		perDocTerms.set(term, (perDocTerms.get(term) || 0) + 1);
		index.df.set(term, (index.df.get(term) || 0) + 1);
	}
}
function ingestRecord(index, record, keyCount, analyzer) {
	const { i: docIdx, v, $: fields } = record;
	if (v !== void 0) {
		addField(index, v, docIdx, analyzer);
		return;
	}
	if (!fields) return;
	for (let keyIdx = 0; keyIdx < keyCount; keyIdx++) {
		const value = fields[keyIdx];
		if (!value) continue;
		if (Array.isArray(value)) for (const sub of value) addField(index, sub.v, docIdx, analyzer);
		else addField(index, value.v, docIdx, analyzer);
	}
}
function buildInvertedIndex(records, keyCount, analyzer) {
	const index = {
		fieldCount: 0,
		df: /* @__PURE__ */ new Map(),
		docFieldCount: /* @__PURE__ */ new Map(),
		docTermFieldHits: /* @__PURE__ */ new Map()
	};
	for (const record of records) ingestRecord(index, record, keyCount, analyzer);
	return index;
}
function addToInvertedIndex(index, record, keyCount, analyzer) {
	ingestRecord(index, record, keyCount, analyzer);
}
function removeFromInvertedIndex(index, docIdx) {
	const fieldCount = index.docFieldCount.get(docIdx);
	if (fieldCount === void 0) return;
	index.fieldCount -= fieldCount;
	index.docFieldCount.delete(docIdx);
	const perDocTerms = index.docTermFieldHits.get(docIdx);
	if (!perDocTerms) return;
	for (const [term, hits] of perDocTerms) {
		const next = (index.df.get(term) || 0) - hits;
		if (next <= 0) index.df.delete(term);
		else index.df.set(term, next);
	}
	index.docTermFieldHits.delete(docIdx);
}
function removeAndShiftInvertedIndex(index, removedIndices) {
	if (removedIndices.length === 0) return;
	const sorted = Array.from(new Set(removedIndices)).sort((a, b) => a - b);
	for (const idx of sorted) removeFromInvertedIndex(index, idx);
	const shift = (oldIdx) => {
		let lo = 0;
		let hi = sorted.length;
		while (lo < hi) {
			const mid = lo + hi >>> 1;
			if (sorted[mid] < oldIdx) lo = mid + 1;
			else hi = mid;
		}
		return oldIdx - lo;
	};
	const firstRemoved = sorted[0];
	const shiftedDocFieldCount = /* @__PURE__ */ new Map();
	for (const [oldKey, count] of index.docFieldCount) shiftedDocFieldCount.set(oldKey > firstRemoved ? shift(oldKey) : oldKey, count);
	index.docFieldCount = shiftedDocFieldCount;
	const shiftedDocTermFieldHits = /* @__PURE__ */ new Map();
	for (const [oldKey, terms] of index.docTermFieldHits) shiftedDocTermFieldHits.set(oldKey > firstRemoved ? shift(oldKey) : oldKey, terms);
	index.docTermFieldHits = shiftedDocTermFieldHits;
}

//#endregion
//#region src/core/index.ts
var Fuse = class {
	constructor(docs, options, index) {
		this.options = {
			...Config,
			...options
		};
		if (this.options.useExtendedSearch && false){}
		if (this.options.useTokenSearch && false){}
		this._keyStore = new KeyStore(this.options.keys);
		this._docs = docs;
		this._myIndex = null;
		this._invertedIndex = null;
		this.setCollection(docs, index);
		this._lastQuery = null;
		this._lastSearcher = null;
	}
	_getSearcher(query) {
		if (this._lastQuery === query) return this._lastSearcher;
		const searcher = createSearcher(query, this._invertedIndex ? {
			...this.options,
			_invertedIndex: this._invertedIndex
		} : this.options);
		this._lastQuery = query;
		this._lastSearcher = searcher;
		return searcher;
	}
	setCollection(docs, index) {
		this._docs = docs;
		if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
		this._myIndex = index || createIndex(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
		if (this.options.useTokenSearch) {
			const analyzer = createAnalyzer({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			this._invertedIndex = buildInvertedIndex(this._myIndex.records, this._myIndex.keys.length, analyzer);
		}
		this._invalidateSearcherCache();
	}
	add(doc) {
		if (!isDefined(doc)) return;
		this._docs.push(doc);
		const record = this._myIndex.add(doc, this._docs.length - 1);
		if (this._invertedIndex && record) {
			const analyzer = createAnalyzer({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			addToInvertedIndex(this._invertedIndex, record, this._myIndex.keys.length, analyzer);
		}
		this._invalidateSearcherCache();
	}
	remove(predicate = () => false) {
		const results = [];
		const indicesToRemove = [];
		for (let i = 0, len = this._docs.length; i < len; i += 1) if (predicate(this._docs[i], i)) {
			results.push(this._docs[i]);
			indicesToRemove.push(i);
		}
		if (indicesToRemove.length) {
			if (this._invertedIndex) removeAndShiftInvertedIndex(this._invertedIndex, indicesToRemove);
			const toRemove = new Set(indicesToRemove);
			this._docs = this._docs.filter((_, i) => !toRemove.has(i));
			this._myIndex.removeAll(indicesToRemove);
			this._invalidateSearcherCache();
		}
		return results;
	}
	removeAt(idx) {
		if (!Number.isInteger(idx) || idx < 0 || idx >= this._docs.length) throw new Error(INVALID_DOC_INDEX);
		if (this._invertedIndex) removeAndShiftInvertedIndex(this._invertedIndex, [idx]);
		const doc = this._docs.splice(idx, 1)[0];
		this._myIndex.removeAt(idx);
		this._invalidateSearcherCache();
		return doc;
	}
	_invalidateSearcherCache() {
		this._lastQuery = null;
		this._lastSearcher = null;
	}
	getIndex() {
		return this._myIndex;
	}
	_normalizedKeys() {
		return this._myIndex.keys.map((key) => this._keyStore.get(key.id) || key);
	}
	search(query, options) {
		const { limit = -1 } = options || {};
		const { includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm } = this.options;
		if (isString(query) && !query.trim()) {
			let docs = this._docs.map((item, idx) => ({
				item,
				refIndex: idx
			}));
			if (isNumber(limit) && limit > -1) docs = docs.slice(0, limit);
			return docs;
		}
		const useHeap = shouldSort && isNumber(limit) && limit > 0 && isString(query);
		const comparator = sortFn;
		const stable = (a, b) => comparator(a, b) || a.idx - b.idx;
		let results;
		if (useHeap) {
			const heap = new MaxHeap(limit, stable);
			if (isString(this._docs[0])) this._searchStringList(query, {
				heap,
				ignoreFieldNorm
			});
			else this._searchObjectList(query, {
				heap,
				ignoreFieldNorm
			});
			results = heap.extractSorted();
		} else {
			results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
			computeScore(results, { ignoreFieldNorm });
			if (shouldSort) results.sort(isString(query) ? stable : comparator);
			if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
		}
		return format(results, this._docs, {
			includeMatches,
			includeScore
		});
	}
	_searchStringList(query, { heap, ignoreFieldNorm } = {}) {
		const searcher = this._getSearcher(query);
		const requireAllTokens = this.options.useTokenSearch && this.options.tokenMatch === "all";
		const { records } = this._myIndex;
		const results = heap ? null : [];
		records.forEach(({ v: text, i: idx, n: norm }) => {
			if (!isDefined(text)) return;
			const searchResult = searcher.searchIn(text);
			if (searchResult.isMatch) {
				const match = {
					score: searchResult.score,
					value: text,
					norm,
					indices: searchResult.indices
				};
				if (requireAllTokens) {
					match.matchedMask = searchResult.matchedMask;
					match.matchedTerms = searchResult.matchedTerms;
					match.termCount = searchResult.termCount;
				}
				const matches = [match];
				if (!requireAllTokens || this._coversAllTokens(matches)) {
					const result = {
						item: text,
						idx,
						matches
					};
					if (heap) {
						result.score = computeScoreSingle(result.matches, { ignoreFieldNorm });
						heap.insert(result);
					} else results.push(result);
				}
			}
		});
		return results;
	}
	_searchLogical(query) {
		const expression = parse(query, this.options);
		const keys = this._normalizedKeys();
		const evaluate = (node, item, idx) => {
			if (!("children" in node)) {
				const { keyId, searcher } = node;
				let matches;
				if (keyId === null) {
					matches = [];
					keys.forEach((key, keyIndex) => {
						matches.push(...this._findMatches({
							key,
							value: item[keyIndex],
							searcher
						}));
					});
				} else matches = this._findMatches({
					key: this._keyStore.get(keyId),
					value: this._myIndex.getValueForItemAtKeyId(item, keyId),
					searcher
				});
				if (matches && matches.length) return [{
					idx,
					item,
					matches
				}];
				return [];
			}
			const { children, operator } = node;
			const res = [];
			for (let i = 0, len = children.length; i < len; i += 1) {
				const child = children[i];
				const result = evaluate(child, item, idx);
				if (result.length) res.push(...result);
				else if (operator === LogicalOperator.AND) return [];
			}
			return res;
		};
		const records = this._myIndex.records;
		const resultMap = /* @__PURE__ */ new Map();
		const results = [];
		records.forEach(({ $: item, i: idx }) => {
			if (isDefined(item)) {
				const expResults = evaluate(expression, item, idx);
				if (expResults.length) {
					if (!resultMap.has(idx)) {
						resultMap.set(idx, {
							idx,
							item,
							matches: []
						});
						results.push(resultMap.get(idx));
					}
					expResults.forEach(({ matches }) => {
						resultMap.get(idx).matches.push(...matches);
					});
				}
			}
		});
		return results;
	}
	_searchObjectList(query, { heap, ignoreFieldNorm } = {}) {
		const searcher = this._getSearcher(query);
		const requireAllTokens = this.options.useTokenSearch && this.options.tokenMatch === "all";
		const { records } = this._myIndex;
		const keys = this._normalizedKeys();
		const results = heap ? null : [];
		records.forEach(({ $: item, i: idx }) => {
			if (!isDefined(item)) return;
			const matches = [];
			let anyKeyFailed = false;
			let hasInverse = false;
			keys.forEach((key, keyIndex) => {
				const keyMatches = this._findMatches({
					key,
					value: item[keyIndex],
					searcher
				});
				if (keyMatches.length) {
					matches.push(...keyMatches);
					if (keyMatches[0].hasInverse) hasInverse = true;
				} else anyKeyFailed = true;
			});
			if (hasInverse && anyKeyFailed) return;
			if (matches.length && (!requireAllTokens || this._coversAllTokens(matches))) {
				const result = {
					idx,
					item,
					matches
				};
				if (heap) {
					result.score = computeScoreSingle(result.matches, { ignoreFieldNorm });
					heap.insert(result);
				} else results.push(result);
			}
		});
		return results;
	}
	_findMatches({ key, value, searcher }) {
		if (!isDefined(value)) return [];
		const matches = [];
		if (isArray(value)) value.forEach(({ v: text, i: idx, n: norm }) => {
			if (!isDefined(text)) return;
			const searchResult = searcher.searchIn(text);
			if (searchResult.isMatch) {
				const match = {
					score: searchResult.score,
					key,
					value: text,
					idx,
					norm,
					indices: searchResult.indices,
					hasInverse: searchResult.hasInverse
				};
				if (searchResult.termCount !== void 0) {
					match.matchedMask = searchResult.matchedMask;
					match.matchedTerms = searchResult.matchedTerms;
					match.termCount = searchResult.termCount;
				}
				matches.push(match);
			}
		});
		else {
			const { v: text, n: norm } = value;
			const searchResult = searcher.searchIn(text);
			if (searchResult.isMatch) {
				const match = {
					score: searchResult.score,
					key,
					value: text,
					norm,
					indices: searchResult.indices,
					hasInverse: searchResult.hasInverse
				};
				if (searchResult.termCount !== void 0) {
					match.matchedMask = searchResult.matchedMask;
					match.matchedTerms = searchResult.matchedTerms;
					match.termCount = searchResult.termCount;
				}
				matches.push(match);
			}
		}
		return matches;
	}
	_coversAllTokens(matches) {
		const termCount = matches.length ? matches[0].termCount : void 0;
		if (termCount === void 0) return true;
		if (termCount <= 31) {
			let coverage = 0;
			for (let i = 0; i < matches.length; i++) coverage |= matches[i].matchedMask || 0;
			return coverage === 2 ** termCount - 1;
		}
		const coverage = /* @__PURE__ */ new Set();
		for (let i = 0; i < matches.length; i++) {
			const terms = matches[i].matchedTerms;
			if (terms) for (const t of terms) coverage.add(t);
		}
		return coverage.size === termCount;
	}
};

//#endregion
//#region src/entry.ts
Fuse.version = "7.5.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
Fuse.match = function(pattern, text, options) {
	if (options && options.useTokenSearch) throw new Error(FUSE_MATCH_TOKEN_SEARCH_UNSUPPORTED);
	return createSearcher(pattern, {
		...Config,
		...options
	}).searchIn(text);
};
Fuse.parseQuery = parse;
register(ExtendedSearch);
register(TokenSearch);
Fuse.use = function(...plugins) {
	plugins.forEach((plugin) => register(plugin));
};
var entry_default = Fuse;

//#endregion


/***/ }),

/***/ "./node_modules/js-yaml/dist/js-yaml.mjs":
/*!***********************************************!*\
  !*** ./node_modules/js-yaml/dist/js-yaml.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CORE_SCHEMA: () => (/* binding */ CORE_SCHEMA),
/* harmony export */   DEFAULT_SCHEMA: () => (/* binding */ DEFAULT_SCHEMA),
/* harmony export */   FAILSAFE_SCHEMA: () => (/* binding */ FAILSAFE_SCHEMA),
/* harmony export */   JSON_SCHEMA: () => (/* binding */ JSON_SCHEMA),
/* harmony export */   Schema: () => (/* binding */ Schema),
/* harmony export */   Type: () => (/* binding */ Type),
/* harmony export */   YAMLException: () => (/* binding */ YAMLException),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dump: () => (/* binding */ dump),
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   loadAll: () => (/* binding */ loadAll),
/* harmony export */   safeDump: () => (/* binding */ safeDump),
/* harmony export */   safeLoad: () => (/* binding */ safeLoad),
/* harmony export */   safeLoadAll: () => (/* binding */ safeLoadAll),
/* harmony export */   types: () => (/* binding */ types)
/* harmony export */ });

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var types = {
  binary:    binary,
  float:     float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: dump,
	YAMLException: YAMLException,
	types: types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jsYaml);



/***/ }),

/***/ "./src/icons/icons.json":
/*!******************************!*\
  !*** ./src/icons/icons.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"0":["s"],"1":["s"],"2":["s"],"3":["s"],"4":["s"],"5":["s"],"6":["s"],"7":["s"],"8":["s"],"9":["s"],"42-group":["b"],"500px":["b"],"a":["s"],"accessible-icon":["b"],"accusoft":["b"],"address-book":["s","r"],"address-card":["s","r"],"adn":["b"],"adversal":["b"],"affiliatetheme":["b"],"airbnb":["b"],"algolia":["b"],"align-center":["s"],"align-justify":["s"],"align-left":["s"],"align-right":["s"],"alipay":["b"],"amazon":["b"],"amazon-pay":["b"],"amilia":["b"],"anchor":["s"],"anchor-circle-check":["s"],"anchor-circle-exclamation":["s"],"anchor-circle-xmark":["s"],"anchor-lock":["s"],"android":["b"],"angellist":["b"],"angle-down":["s"],"angle-left":["s"],"angle-right":["s"],"angle-up":["s"],"angles-down":["s"],"angles-left":["s"],"angles-right":["s"],"angles-up":["s"],"angrycreative":["b"],"angular":["b"],"ankh":["s"],"app-store":["b"],"app-store-ios":["b"],"apper":["b"],"apple":["b"],"apple-pay":["b"],"apple-whole":["s"],"archway":["s"],"arrow-down":["s"],"arrow-down-1-9":["s"],"arrow-down-9-1":["s"],"arrow-down-a-z":["s"],"arrow-down-long":["s"],"arrow-down-short-wide":["s"],"arrow-down-up-across-line":["s"],"arrow-down-up-lock":["s"],"arrow-down-wide-short":["s"],"arrow-down-z-a":["s"],"arrow-left":["s"],"arrow-left-long":["s"],"arrow-pointer":["s"],"arrow-right":["s"],"arrow-right-arrow-left":["s"],"arrow-right-from-bracket":["s"],"arrow-right-long":["s"],"arrow-right-to-bracket":["s"],"arrow-right-to-city":["s"],"arrow-rotate-left":["s"],"arrow-rotate-right":["s"],"arrow-trend-down":["s"],"arrow-trend-up":["s"],"arrow-turn-down":["s"],"arrow-turn-up":["s"],"arrow-up":["s"],"arrow-up-1-9":["s"],"arrow-up-9-1":["s"],"arrow-up-a-z":["s"],"arrow-up-from-bracket":["s"],"arrow-up-from-ground-water":["s"],"arrow-up-from-water-pump":["s"],"arrow-up-long":["s"],"arrow-up-right-dots":["s"],"arrow-up-right-from-square":["s"],"arrow-up-short-wide":["s"],"arrow-up-wide-short":["s"],"arrow-up-z-a":["s"],"arrows-down-to-line":["s"],"arrows-down-to-people":["s"],"arrows-left-right":["s"],"arrows-left-right-to-line":["s"],"arrows-rotate":["s"],"arrows-spin":["s"],"arrows-split-up-and-left":["s"],"arrows-to-circle":["s"],"arrows-to-dot":["s"],"arrows-to-eye":["s"],"arrows-turn-right":["s"],"arrows-turn-to-dots":["s"],"arrows-up-down":["s"],"arrows-up-down-left-right":["s"],"arrows-up-to-line":["s"],"artstation":["b"],"asterisk":["s"],"asymmetrik":["b"],"at":["s"],"atlassian":["b"],"atom":["s"],"audible":["b"],"audio-description":["s"],"austral-sign":["s"],"autoprefixer":["b"],"avianex":["b"],"aviato":["b"],"award":["s"],"aws":["b"],"b":["s"],"baby":["s"],"baby-carriage":["s"],"backward":["s"],"backward-fast":["s"],"backward-step":["s"],"bacon":["s"],"bacteria":["s"],"bacterium":["s"],"bag-shopping":["s"],"bahai":["s"],"baht-sign":["s"],"ban":["s"],"ban-smoking":["s"],"bandage":["s"],"bandcamp":["b"],"barcode":["s"],"bars":["s"],"bars-progress":["s"],"bars-staggered":["s"],"baseball":["s"],"baseball-bat-ball":["s"],"basket-shopping":["s"],"basketball":["s"],"bath":["s"],"battery-empty":["s"],"battery-full":["s"],"battery-half":["s"],"battery-quarter":["s"],"battery-three-quarters":["s"],"battle-net":["b"],"bed":["s"],"bed-pulse":["s"],"beer-mug-empty":["s"],"behance":["b"],"bell":["s","r"],"bell-concierge":["s"],"bell-slash":["s","r"],"bezier-curve":["s"],"bicycle":["s"],"bilibili":["b"],"bimobject":["b"],"binoculars":["s"],"biohazard":["s"],"bitbucket":["b"],"bitcoin":["b"],"bitcoin-sign":["s"],"bity":["b"],"black-tie":["b"],"blackberry":["b"],"blender":["s"],"blender-phone":["s"],"blog":["s"],"blogger":["b"],"blogger-b":["b"],"bluetooth":["b"],"bluetooth-b":["b"],"bold":["s"],"bolt":["s"],"bolt-lightning":["s"],"bomb":["s"],"bone":["s"],"bong":["s"],"book":["s"],"book-atlas":["s"],"book-bible":["s"],"book-bookmark":["s"],"book-journal-whills":["s"],"book-medical":["s"],"book-open":["s"],"book-open-reader":["s"],"book-quran":["s"],"book-skull":["s"],"book-tanakh":["s"],"bookmark":["s","r"],"bootstrap":["b"],"border-all":["s"],"border-none":["s"],"border-top-left":["s"],"bore-hole":["s"],"bots":["b"],"bottle-droplet":["s"],"bottle-water":["s"],"bowl-food":["s"],"bowl-rice":["s"],"bowling-ball":["s"],"box":["s"],"box-archive":["s"],"box-open":["s"],"box-tissue":["s"],"boxes-packing":["s"],"boxes-stacked":["s"],"braille":["s"],"brain":["s"],"brazilian-real-sign":["s"],"bread-slice":["s"],"bridge":["s"],"bridge-circle-check":["s"],"bridge-circle-exclamation":["s"],"bridge-circle-xmark":["s"],"bridge-lock":["s"],"bridge-water":["s"],"briefcase":["s"],"briefcase-medical":["s"],"broom":["s"],"broom-ball":["s"],"brush":["s"],"btc":["b"],"bucket":["s"],"buffer":["b"],"bug":["s"],"bug-slash":["s"],"bugs":["s"],"building":["s","r"],"building-circle-arrow-right":["s"],"building-circle-check":["s"],"building-circle-exclamation":["s"],"building-circle-xmark":["s"],"building-columns":["s"],"building-flag":["s"],"building-lock":["s"],"building-ngo":["s"],"building-shield":["s"],"building-un":["s"],"building-user":["s"],"building-wheat":["s"],"bullhorn":["s"],"bullseye":["s"],"burger":["s"],"buromobelexperte":["b"],"burst":["s"],"bus":["s"],"bus-simple":["s"],"business-time":["s"],"buy-n-large":["b"],"buysellads":["b"],"c":["s"],"cable-car":["s"],"cake-candles":["s"],"calculator":["s"],"calendar":["s","r"],"calendar-check":["s","r"],"calendar-day":["s"],"calendar-days":["s","r"],"calendar-minus":["s","r"],"calendar-plus":["s","r"],"calendar-week":["s"],"calendar-xmark":["s","r"],"camera":["s"],"camera-retro":["s"],"camera-rotate":["s"],"campground":["s"],"canadian-maple-leaf":["b"],"candy-cane":["s"],"cannabis":["s"],"capsules":["s"],"car":["s"],"car-battery":["s"],"car-burst":["s"],"car-on":["s"],"car-rear":["s"],"car-side":["s"],"car-tunnel":["s"],"caravan":["s"],"caret-down":["s"],"caret-left":["s"],"caret-right":["s"],"caret-up":["s"],"carrot":["s"],"cart-arrow-down":["s"],"cart-flatbed":["s"],"cart-flatbed-suitcase":["s"],"cart-plus":["s"],"cart-shopping":["s"],"cash-register":["s"],"cat":["s"],"cc-amazon-pay":["b"],"cc-amex":["b"],"cc-apple-pay":["b"],"cc-diners-club":["b"],"cc-discover":["b"],"cc-jcb":["b"],"cc-mastercard":["b"],"cc-paypal":["b"],"cc-stripe":["b"],"cc-visa":["b"],"cedi-sign":["s"],"cent-sign":["s"],"centercode":["b"],"centos":["b"],"certificate":["s"],"chair":["s"],"chalkboard":["s"],"chalkboard-user":["s"],"champagne-glasses":["s"],"charging-station":["s"],"chart-area":["s"],"chart-bar":["s","r"],"chart-column":["s"],"chart-gantt":["s"],"chart-line":["s"],"chart-pie":["s"],"chart-simple":["s"],"check":["s"],"check-double":["s"],"check-to-slot":["s"],"cheese":["s"],"chess":["s"],"chess-bishop":["s","r"],"chess-board":["s"],"chess-king":["s","r"],"chess-knight":["s","r"],"chess-pawn":["s","r"],"chess-queen":["s","r"],"chess-rook":["s","r"],"chevron-down":["s"],"chevron-left":["s"],"chevron-right":["s"],"chevron-up":["s"],"child":["s"],"child-dress":["s"],"child-reaching":["s"],"child-rifle":["s"],"children":["s"],"chrome":["b"],"chromecast":["b"],"church":["s"],"circle":["s","r"],"circle-arrow-down":["s"],"circle-arrow-left":["s"],"circle-arrow-right":["s"],"circle-arrow-up":["s"],"circle-check":["s","r"],"circle-chevron-down":["s"],"circle-chevron-left":["s"],"circle-chevron-right":["s"],"circle-chevron-up":["s"],"circle-dollar-to-slot":["s"],"circle-dot":["s","r"],"circle-down":["s","r"],"circle-exclamation":["s"],"circle-h":["s"],"circle-half-stroke":["s"],"circle-info":["s"],"circle-left":["s","r"],"circle-minus":["s"],"circle-nodes":["s"],"circle-notch":["s"],"circle-pause":["s","r"],"circle-play":["s","r"],"circle-plus":["s"],"circle-question":["s","r"],"circle-radiation":["s"],"circle-right":["s","r"],"circle-stop":["s","r"],"circle-up":["s","r"],"circle-user":["s","r"],"circle-xmark":["s","r"],"city":["s"],"clapperboard":["s"],"clipboard":["s","r"],"clipboard-check":["s"],"clipboard-list":["s"],"clipboard-question":["s"],"clipboard-user":["s"],"clock":["s","r"],"clock-rotate-left":["s"],"clone":["s","r"],"closed-captioning":["s","r"],"cloud":["s"],"cloud-arrow-down":["s"],"cloud-arrow-up":["s"],"cloud-bolt":["s"],"cloud-meatball":["s"],"cloud-moon":["s"],"cloud-moon-rain":["s"],"cloud-rain":["s"],"cloud-showers-heavy":["s"],"cloud-showers-water":["s"],"cloud-sun":["s"],"cloud-sun-rain":["s"],"cloudflare":["b"],"cloudscale":["b"],"cloudsmith":["b"],"cloudversify":["b"],"clover":["s"],"cmplid":["b"],"code":["s"],"code-branch":["s"],"code-commit":["s"],"code-compare":["s"],"code-fork":["s"],"code-merge":["s"],"code-pull-request":["s"],"codepen":["b"],"codiepie":["b"],"coins":["s"],"colon-sign":["s"],"comment":["s","r"],"comment-dollar":["s"],"comment-dots":["s","r"],"comment-medical":["s"],"comment-slash":["s"],"comment-sms":["s"],"comments":["s","r"],"comments-dollar":["s"],"compact-disc":["s"],"compass":["s","r"],"compass-drafting":["s"],"compress":["s"],"computer":["s"],"computer-mouse":["s"],"confluence":["b"],"connectdevelop":["b"],"contao":["b"],"cookie":["s"],"cookie-bite":["s"],"copy":["s","r"],"copyright":["s","r"],"cotton-bureau":["b"],"couch":["s"],"cow":["s"],"cpanel":["b"],"creative-commons":["b"],"creative-commons-by":["b"],"creative-commons-nc":["b"],"creative-commons-nc-eu":["b"],"creative-commons-nc-jp":["b"],"creative-commons-nd":["b"],"creative-commons-pd":["b"],"creative-commons-pd-alt":["b"],"creative-commons-remix":["b"],"creative-commons-sa":["b"],"creative-commons-sampling":["b"],"creative-commons-sampling-plus":["b"],"creative-commons-share":["b"],"creative-commons-zero":["b"],"credit-card":["s","r"],"critical-role":["b"],"crop":["s"],"crop-simple":["s"],"cross":["s"],"crosshairs":["s"],"crow":["s"],"crown":["s"],"crutch":["s"],"cruzeiro-sign":["s"],"css3":["b"],"css3-alt":["b"],"cube":["s"],"cubes":["s"],"cubes-stacked":["s"],"cuttlefish":["b"],"d":["s"],"d-and-d":["b"],"d-and-d-beyond":["b"],"dailymotion":["b"],"dashcube":["b"],"database":["s"],"deezer":["b"],"delete-left":["s"],"delicious":["b"],"democrat":["s"],"deploydog":["b"],"deskpro":["b"],"desktop":["s"],"dev":["b"],"deviantart":["b"],"dharmachakra":["s"],"dhl":["b"],"diagram-next":["s"],"diagram-predecessor":["s"],"diagram-project":["s"],"diagram-successor":["s"],"diamond":["s"],"diamond-turn-right":["s"],"diaspora":["b"],"dice":["s"],"dice-d20":["s"],"dice-d6":["s"],"dice-five":["s"],"dice-four":["s"],"dice-one":["s"],"dice-six":["s"],"dice-three":["s"],"dice-two":["s"],"digg":["b"],"digital-ocean":["b"],"discord":["b"],"discourse":["b"],"disease":["s"],"display":["s"],"divide":["s"],"dna":["s"],"dochub":["b"],"docker":["b"],"dog":["s"],"dollar-sign":["s"],"dolly":["s"],"dong-sign":["s"],"door-closed":["s"],"door-open":["s"],"dove":["s"],"down-left-and-up-right-to-center":["s"],"down-long":["s"],"download":["s"],"draft2digital":["b"],"dragon":["s"],"draw-polygon":["s"],"dribbble":["b"],"dropbox":["b"],"droplet":["s"],"droplet-slash":["s"],"drum":["s"],"drum-steelpan":["s"],"drumstick-bite":["s"],"drupal":["b"],"dumbbell":["s"],"dumpster":["s"],"dumpster-fire":["s"],"dungeon":["s"],"dyalog":["b"],"e":["s"],"ear-deaf":["s"],"ear-listen":["s"],"earlybirds":["b"],"earth-africa":["s"],"earth-americas":["s"],"earth-asia":["s"],"earth-europe":["s"],"earth-oceania":["s"],"ebay":["b"],"edge":["b"],"edge-legacy":["b"],"egg":["s"],"eject":["s"],"elementor":["b"],"elevator":["s"],"ellipsis":["s"],"ellipsis-vertical":["s"],"ello":["b"],"ember":["b"],"empire":["b"],"envelope":["s","r"],"envelope-circle-check":["s"],"envelope-open":["s","r"],"envelope-open-text":["s"],"envelopes-bulk":["s"],"envira":["b"],"equals":["s"],"eraser":["s"],"erlang":["b"],"ethereum":["b"],"ethernet":["s"],"etsy":["b"],"euro-sign":["s"],"evernote":["b"],"exclamation":["s"],"expand":["s"],"expeditedssl":["b"],"explosion":["s"],"eye":["s","r"],"eye-dropper":["s"],"eye-low-vision":["s"],"eye-slash":["s","r"],"f":["s"],"face-angry":["s","r"],"face-dizzy":["s","r"],"face-flushed":["s","r"],"face-frown":["s","r"],"face-frown-open":["s","r"],"face-grimace":["s","r"],"face-grin":["s","r"],"face-grin-beam":["s","r"],"face-grin-beam-sweat":["s","r"],"face-grin-hearts":["s","r"],"face-grin-squint":["s","r"],"face-grin-squint-tears":["s","r"],"face-grin-stars":["s","r"],"face-grin-tears":["s","r"],"face-grin-tongue":["s","r"],"face-grin-tongue-squint":["s","r"],"face-grin-tongue-wink":["s","r"],"face-grin-wide":["s","r"],"face-grin-wink":["s","r"],"face-kiss":["s","r"],"face-kiss-beam":["s","r"],"face-kiss-wink-heart":["s","r"],"face-laugh":["s","r"],"face-laugh-beam":["s","r"],"face-laugh-squint":["s","r"],"face-laugh-wink":["s","r"],"face-meh":["s","r"],"face-meh-blank":["s","r"],"face-rolling-eyes":["s","r"],"face-sad-cry":["s","r"],"face-sad-tear":["s","r"],"face-smile":["s","r"],"face-smile-beam":["s","r"],"face-smile-wink":["s","r"],"face-surprise":["s","r"],"face-tired":["s","r"],"facebook":["b"],"facebook-f":["b"],"facebook-messenger":["b"],"fan":["s"],"fantasy-flight-games":["b"],"faucet":["s"],"faucet-drip":["s"],"fax":["s"],"feather":["s"],"feather-pointed":["s"],"fedex":["b"],"fedora":["b"],"ferry":["s"],"figma":["b"],"file":["s","r"],"file-arrow-down":["s"],"file-arrow-up":["s"],"file-audio":["s","r"],"file-circle-check":["s"],"file-circle-exclamation":["s"],"file-circle-minus":["s"],"file-circle-plus":["s"],"file-circle-question":["s"],"file-circle-xmark":["s"],"file-code":["s","r"],"file-contract":["s"],"file-csv":["s"],"file-excel":["s","r"],"file-export":["s"],"file-image":["s","r"],"file-import":["s"],"file-invoice":["s"],"file-invoice-dollar":["s"],"file-lines":["s","r"],"file-medical":["s"],"file-pdf":["s","r"],"file-pen":["s"],"file-powerpoint":["s","r"],"file-prescription":["s"],"file-shield":["s"],"file-signature":["s"],"file-video":["s","r"],"file-waveform":["s"],"file-word":["s","r"],"file-zipper":["s","r"],"fill":["s"],"fill-drip":["s"],"film":["s"],"filter":["s"],"filter-circle-dollar":["s"],"filter-circle-xmark":["s"],"fingerprint":["s"],"fire":["s"],"fire-burner":["s"],"fire-extinguisher":["s"],"fire-flame-curved":["s"],"fire-flame-simple":["s"],"firefox":["b"],"firefox-browser":["b"],"first-order":["b"],"first-order-alt":["b"],"firstdraft":["b"],"fish":["s"],"fish-fins":["s"],"flag":["s","r"],"flag-checkered":["s"],"flag-usa":["s"],"flask":["s"],"flask-vial":["s"],"flickr":["b"],"flipboard":["b"],"floppy-disk":["s","r"],"florin-sign":["s"],"fly":["b"],"folder":["s","r"],"folder-closed":["s","r"],"folder-minus":["s"],"folder-open":["s","r"],"folder-plus":["s"],"folder-tree":["s"],"font":["s"],"font-awesome":["s","r","b"],"fonticons":["b"],"fonticons-fi":["b"],"football":["s"],"fort-awesome":["b"],"fort-awesome-alt":["b"],"forumbee":["b"],"forward":["s"],"forward-fast":["s"],"forward-step":["s"],"foursquare":["b"],"franc-sign":["s"],"free-code-camp":["b"],"freebsd":["b"],"frog":["s"],"fulcrum":["b"],"futbol":["s","r"],"g":["s"],"galactic-republic":["b"],"galactic-senate":["b"],"gamepad":["s"],"gas-pump":["s"],"gauge":["s"],"gauge-high":["s"],"gauge-simple":["s"],"gauge-simple-high":["s"],"gavel":["s"],"gear":["s"],"gears":["s"],"gem":["s","r"],"genderless":["s"],"get-pocket":["b"],"gg":["b"],"gg-circle":["b"],"ghost":["s"],"gift":["s"],"gifts":["s"],"git":["b"],"git-alt":["b"],"github":["b"],"github-alt":["b"],"gitkraken":["b"],"gitlab":["b"],"gitter":["b"],"glass-water":["s"],"glass-water-droplet":["s"],"glasses":["s"],"glide":["b"],"glide-g":["b"],"globe":["s"],"gofore":["b"],"golang":["b"],"golf-ball-tee":["s"],"goodreads":["b"],"goodreads-g":["b"],"google":["b"],"google-drive":["b"],"google-pay":["b"],"google-play":["b"],"google-plus":["b"],"google-plus-g":["b"],"google-wallet":["b"],"gopuram":["s"],"graduation-cap":["s"],"gratipay":["b"],"grav":["b"],"greater-than":["s"],"greater-than-equal":["s"],"grip":["s"],"grip-lines":["s"],"grip-lines-vertical":["s"],"grip-vertical":["s"],"gripfire":["b"],"group-arrows-rotate":["s"],"grunt":["b"],"guarani-sign":["s"],"guilded":["b"],"guitar":["s"],"gulp":["b"],"gun":["s"],"h":["s"],"hacker-news":["b"],"hackerrank":["b"],"hammer":["s"],"hamsa":["s"],"hand":["s","r"],"hand-back-fist":["s","r"],"hand-dots":["s"],"hand-fist":["s"],"hand-holding":["s"],"hand-holding-dollar":["s"],"hand-holding-droplet":["s"],"hand-holding-hand":["s"],"hand-holding-heart":["s"],"hand-holding-medical":["s"],"hand-lizard":["s","r"],"hand-middle-finger":["s"],"hand-peace":["s","r"],"hand-point-down":["s","r"],"hand-point-left":["s","r"],"hand-point-right":["s","r"],"hand-point-up":["s","r"],"hand-pointer":["s","r"],"hand-scissors":["s","r"],"hand-sparkles":["s"],"hand-spock":["s","r"],"handcuffs":["s"],"hands":["s"],"hands-asl-interpreting":["s"],"hands-bound":["s"],"hands-bubbles":["s"],"hands-clapping":["s"],"hands-holding":["s"],"hands-holding-child":["s"],"hands-holding-circle":["s"],"hands-praying":["s"],"handshake":["s","r"],"handshake-angle":["s"],"handshake-simple":["s"],"handshake-simple-slash":["s"],"handshake-slash":["s"],"hanukiah":["s"],"hard-drive":["s","r"],"hashnode":["b"],"hashtag":["s"],"hat-cowboy":["s"],"hat-cowboy-side":["s"],"hat-wizard":["s"],"head-side-cough":["s"],"head-side-cough-slash":["s"],"head-side-mask":["s"],"head-side-virus":["s"],"heading":["s"],"headphones":["s"],"headphones-simple":["s"],"headset":["s"],"heart":["s","r"],"heart-circle-bolt":["s"],"heart-circle-check":["s"],"heart-circle-exclamation":["s"],"heart-circle-minus":["s"],"heart-circle-plus":["s"],"heart-circle-xmark":["s"],"heart-crack":["s"],"heart-pulse":["s"],"helicopter":["s"],"helicopter-symbol":["s"],"helmet-safety":["s"],"helmet-un":["s"],"highlighter":["s"],"hill-avalanche":["s"],"hill-rockslide":["s"],"hippo":["s"],"hips":["b"],"hire-a-helper":["b"],"hive":["b"],"hockey-puck":["s"],"holly-berry":["s"],"hooli":["b"],"hornbill":["b"],"horse":["s"],"horse-head":["s"],"hospital":["s","r"],"hospital-user":["s"],"hot-tub-person":["s"],"hotdog":["s"],"hotel":["s"],"hotjar":["b"],"hourglass":["s","r"],"hourglass-end":["s"],"hourglass-half":["s","r"],"hourglass-start":["s"],"house":["s"],"house-chimney":["s"],"house-chimney-crack":["s"],"house-chimney-medical":["s"],"house-chimney-user":["s"],"house-chimney-window":["s"],"house-circle-check":["s"],"house-circle-exclamation":["s"],"house-circle-xmark":["s"],"house-crack":["s"],"house-fire":["s"],"house-flag":["s"],"house-flood-water":["s"],"house-flood-water-circle-arrow-right":["s"],"house-laptop":["s"],"house-lock":["s"],"house-medical":["s"],"house-medical-circle-check":["s"],"house-medical-circle-exclamation":["s"],"house-medical-circle-xmark":["s"],"house-medical-flag":["s"],"house-signal":["s"],"house-tsunami":["s"],"house-user":["s"],"houzz":["b"],"hryvnia-sign":["s"],"html5":["b"],"hubspot":["b"],"hurricane":["s"],"i":["s"],"i-cursor":["s"],"ice-cream":["s"],"icicles":["s"],"icons":["s"],"id-badge":["s","r"],"id-card":["s","r"],"id-card-clip":["s"],"ideal":["b"],"igloo":["s"],"image":["s","r"],"image-portrait":["s"],"images":["s","r"],"imdb":["b"],"inbox":["s"],"indent":["s"],"indian-rupee-sign":["s"],"industry":["s"],"infinity":["s"],"info":["s"],"instagram":["b"],"instalod":["b"],"intercom":["b"],"internet-explorer":["b"],"invision":["b"],"ioxhost":["b"],"italic":["s"],"itch-io":["b"],"itunes":["b"],"itunes-note":["b"],"j":["s"],"jar":["s"],"jar-wheat":["s"],"java":["b"],"jedi":["s"],"jedi-order":["b"],"jenkins":["b"],"jet-fighter":["s"],"jet-fighter-up":["s"],"jira":["b"],"joget":["b"],"joint":["s"],"joomla":["b"],"js":["b"],"jsfiddle":["b"],"jug-detergent":["s"],"k":["s"],"kaaba":["s"],"kaggle":["b"],"key":["s"],"keybase":["b"],"keyboard":["s","r"],"keycdn":["b"],"khanda":["s"],"kickstarter":["b"],"kickstarter-k":["b"],"kip-sign":["s"],"kit-medical":["s"],"kitchen-set":["s"],"kiwi-bird":["s"],"korvue":["b"],"l":["s"],"land-mine-on":["s"],"landmark":["s"],"landmark-dome":["s"],"landmark-flag":["s"],"language":["s"],"laptop":["s"],"laptop-code":["s"],"laptop-file":["s"],"laptop-medical":["s"],"laravel":["b"],"lari-sign":["s"],"lastfm":["b"],"layer-group":["s"],"leaf":["s"],"leanpub":["b"],"left-long":["s"],"left-right":["s"],"lemon":["s","r"],"less":["b"],"less-than":["s"],"less-than-equal":["s"],"life-ring":["s","r"],"lightbulb":["s","r"],"line":["b"],"lines-leaning":["s"],"link":["s"],"link-slash":["s"],"linkedin":["b"],"linkedin-in":["b"],"linode":["b"],"linux":["b"],"lira-sign":["s"],"list":["s"],"list-check":["s"],"list-ol":["s"],"list-ul":["s"],"litecoin-sign":["s"],"location-arrow":["s"],"location-crosshairs":["s"],"location-dot":["s"],"location-pin":["s"],"location-pin-lock":["s"],"lock":["s"],"lock-open":["s"],"locust":["s"],"lungs":["s"],"lungs-virus":["s"],"lyft":["b"],"m":["s"],"magento":["b"],"magnet":["s"],"magnifying-glass":["s"],"magnifying-glass-arrow-right":["s"],"magnifying-glass-chart":["s"],"magnifying-glass-dollar":["s"],"magnifying-glass-location":["s"],"magnifying-glass-minus":["s"],"magnifying-glass-plus":["s"],"mailchimp":["b"],"manat-sign":["s"],"mandalorian":["b"],"map":["s","r"],"map-location":["s"],"map-location-dot":["s"],"map-pin":["s"],"markdown":["b"],"marker":["s"],"mars":["s"],"mars-and-venus":["s"],"mars-and-venus-burst":["s"],"mars-double":["s"],"mars-stroke":["s"],"mars-stroke-right":["s"],"mars-stroke-up":["s"],"martini-glass":["s"],"martini-glass-citrus":["s"],"martini-glass-empty":["s"],"mask":["s"],"mask-face":["s"],"mask-ventilator":["s"],"masks-theater":["s"],"mastodon":["b"],"mattress-pillow":["s"],"maxcdn":["b"],"maximize":["s"],"mdb":["b"],"medal":["s"],"medapps":["b"],"medium":["b"],"medrt":["b"],"meetup":["b"],"megaport":["b"],"memory":["s"],"mendeley":["b"],"menorah":["s"],"mercury":["s"],"message":["s","r"],"meta":["b"],"meteor":["s"],"microblog":["b"],"microchip":["s"],"microphone":["s"],"microphone-lines":["s"],"microphone-lines-slash":["s"],"microphone-slash":["s"],"microscope":["s"],"microsoft":["b"],"mill-sign":["s"],"minimize":["s"],"minus":["s"],"mitten":["s"],"mix":["b"],"mixcloud":["b"],"mixer":["b"],"mizuni":["b"],"mobile":["s"],"mobile-button":["s"],"mobile-retro":["s"],"mobile-screen":["s"],"mobile-screen-button":["s"],"modx":["b"],"monero":["b"],"money-bill":["s"],"money-bill-1":["s","r"],"money-bill-1-wave":["s"],"money-bill-transfer":["s"],"money-bill-trend-up":["s"],"money-bill-wave":["s"],"money-bill-wheat":["s"],"money-bills":["s"],"money-check":["s"],"money-check-dollar":["s"],"monument":["s"],"moon":["s","r"],"mortar-pestle":["s"],"mosque":["s"],"mosquito":["s"],"mosquito-net":["s"],"motorcycle":["s"],"mound":["s"],"mountain":["s"],"mountain-city":["s"],"mountain-sun":["s"],"mug-hot":["s"],"mug-saucer":["s"],"music":["s"],"n":["s"],"naira-sign":["s"],"napster":["b"],"neos":["b"],"network-wired":["s"],"neuter":["s"],"newspaper":["s","r"],"nfc-directional":["b"],"nfc-symbol":["b"],"nimblr":["b"],"node":["b"],"node-js":["b"],"not-equal":["s"],"note-sticky":["s","r"],"notes-medical":["s"],"npm":["b"],"ns8":["b"],"nutritionix":["b"],"o":["s"],"object-group":["s","r"],"object-ungroup":["s","r"],"octopus-deploy":["b"],"odnoklassniki":["b"],"oil-can":["s"],"oil-well":["s"],"old-republic":["b"],"om":["s"],"opencart":["b"],"openid":["b"],"opera":["b"],"optin-monster":["b"],"orcid":["b"],"osi":["b"],"otter":["s"],"outdent":["s"],"p":["s"],"padlet":["b"],"page4":["b"],"pagelines":["b"],"pager":["s"],"paint-roller":["s"],"paintbrush":["s"],"palette":["s"],"palfed":["b"],"pallet":["s"],"panorama":["s"],"paper-plane":["s","r"],"paperclip":["s"],"parachute-box":["s"],"paragraph":["s"],"passport":["s"],"paste":["s","r"],"patreon":["b"],"pause":["s"],"paw":["s"],"paypal":["b"],"peace":["s"],"pen":["s"],"pen-clip":["s"],"pen-fancy":["s"],"pen-nib":["s"],"pen-ruler":["s"],"pen-to-square":["s","r"],"pencil":["s"],"people-arrows":["s"],"people-carry-box":["s"],"people-group":["s"],"people-line":["s"],"people-pulling":["s"],"people-robbery":["s"],"people-roof":["s"],"pepper-hot":["s"],"perbyte":["b"],"percent":["s"],"periscope":["b"],"person":["s"],"person-arrow-down-to-line":["s"],"person-arrow-up-from-line":["s"],"person-biking":["s"],"person-booth":["s"],"person-breastfeeding":["s"],"person-burst":["s"],"person-cane":["s"],"person-chalkboard":["s"],"person-circle-check":["s"],"person-circle-exclamation":["s"],"person-circle-minus":["s"],"person-circle-plus":["s"],"person-circle-question":["s"],"person-circle-xmark":["s"],"person-digging":["s"],"person-dots-from-line":["s"],"person-dress":["s"],"person-dress-burst":["s"],"person-drowning":["s"],"person-falling":["s"],"person-falling-burst":["s"],"person-half-dress":["s"],"person-harassing":["s"],"person-hiking":["s"],"person-military-pointing":["s"],"person-military-rifle":["s"],"person-military-to-person":["s"],"person-praying":["s"],"person-pregnant":["s"],"person-rays":["s"],"person-rifle":["s"],"person-running":["s"],"person-shelter":["s"],"person-skating":["s"],"person-skiing":["s"],"person-skiing-nordic":["s"],"person-snowboarding":["s"],"person-swimming":["s"],"person-through-window":["s"],"person-walking":["s"],"person-walking-arrow-loop-left":["s"],"person-walking-arrow-right":["s"],"person-walking-dashed-line-arrow-right":["s"],"person-walking-luggage":["s"],"person-walking-with-cane":["s"],"peseta-sign":["s"],"peso-sign":["s"],"phabricator":["b"],"phoenix-framework":["b"],"phoenix-squadron":["b"],"phone":["s"],"phone-flip":["s"],"phone-slash":["s"],"phone-volume":["s"],"photo-film":["s"],"php":["b"],"pied-piper":["b"],"pied-piper-alt":["b"],"pied-piper-hat":["b"],"pied-piper-pp":["b"],"piggy-bank":["s"],"pills":["s"],"pinterest":["b"],"pinterest-p":["b"],"pix":["b"],"pizza-slice":["s"],"place-of-worship":["s"],"plane":["s"],"plane-arrival":["s"],"plane-circle-check":["s"],"plane-circle-exclamation":["s"],"plane-circle-xmark":["s"],"plane-departure":["s"],"plane-lock":["s"],"plane-slash":["s"],"plane-up":["s"],"plant-wilt":["s"],"plate-wheat":["s"],"play":["s"],"playstation":["b"],"plug":["s"],"plug-circle-bolt":["s"],"plug-circle-check":["s"],"plug-circle-exclamation":["s"],"plug-circle-minus":["s"],"plug-circle-plus":["s"],"plug-circle-xmark":["s"],"plus":["s"],"plus-minus":["s"],"podcast":["s"],"poo":["s"],"poo-storm":["s"],"poop":["s"],"power-off":["s"],"prescription":["s"],"prescription-bottle":["s"],"prescription-bottle-medical":["s"],"print":["s"],"product-hunt":["b"],"pump-medical":["s"],"pump-soap":["s"],"pushed":["b"],"puzzle-piece":["s"],"python":["b"],"q":["s"],"qq":["b"],"qrcode":["s"],"question":["s"],"quinscape":["b"],"quora":["b"],"quote-left":["s"],"quote-right":["s"],"r":["s"],"r-project":["b"],"radiation":["s"],"radio":["s"],"rainbow":["s"],"ranking-star":["s"],"raspberry-pi":["b"],"ravelry":["b"],"react":["b"],"reacteurope":["b"],"readme":["b"],"rebel":["b"],"receipt":["s"],"record-vinyl":["s"],"rectangle-ad":["s"],"rectangle-list":["s","r"],"rectangle-xmark":["s","r"],"recycle":["s"],"red-river":["b"],"reddit":["b"],"reddit-alien":["b"],"redhat":["b"],"registered":["s","r"],"renren":["b"],"repeat":["s"],"reply":["s"],"reply-all":["s"],"replyd":["b"],"republican":["s"],"researchgate":["b"],"resolving":["b"],"restroom":["s"],"retweet":["s"],"rev":["b"],"ribbon":["s"],"right-from-bracket":["s"],"right-left":["s"],"right-long":["s"],"right-to-bracket":["s"],"ring":["s"],"road":["s"],"road-barrier":["s"],"road-bridge":["s"],"road-circle-check":["s"],"road-circle-exclamation":["s"],"road-circle-xmark":["s"],"road-lock":["s"],"road-spikes":["s"],"robot":["s"],"rocket":["s"],"rocketchat":["b"],"rockrms":["b"],"rotate":["s"],"rotate-left":["s"],"rotate-right":["s"],"route":["s"],"rss":["s"],"ruble-sign":["s"],"rug":["s"],"ruler":["s"],"ruler-combined":["s"],"ruler-horizontal":["s"],"ruler-vertical":["s"],"rupee-sign":["s"],"rupiah-sign":["s"],"rust":["b"],"s":["s"],"sack-dollar":["s"],"sack-xmark":["s"],"safari":["b"],"sailboat":["s"],"salesforce":["b"],"sass":["b"],"satellite":["s"],"satellite-dish":["s"],"scale-balanced":["s"],"scale-unbalanced":["s"],"scale-unbalanced-flip":["s"],"schlix":["b"],"school":["s"],"school-circle-check":["s"],"school-circle-exclamation":["s"],"school-circle-xmark":["s"],"school-flag":["s"],"school-lock":["s"],"scissors":["s"],"screenpal":["b"],"screwdriver":["s"],"screwdriver-wrench":["s"],"scribd":["b"],"scroll":["s"],"scroll-torah":["s"],"sd-card":["s"],"searchengin":["b"],"section":["s"],"seedling":["s"],"sellcast":["b"],"sellsy":["b"],"server":["s"],"servicestack":["b"],"shapes":["s"],"share":["s"],"share-from-square":["s","r"],"share-nodes":["s"],"sheet-plastic":["s"],"shekel-sign":["s"],"shield":["s"],"shield-cat":["s"],"shield-dog":["s"],"shield-halved":["s"],"shield-heart":["s"],"shield-virus":["s"],"ship":["s"],"shirt":["s"],"shirtsinbulk":["b"],"shoe-prints":["s"],"shop":["s"],"shop-lock":["s"],"shop-slash":["s"],"shopify":["b"],"shopware":["b"],"shower":["s"],"shrimp":["s"],"shuffle":["s"],"shuttle-space":["s"],"sign-hanging":["s"],"signal":["s"],"signature":["s"],"signs-post":["s"],"sim-card":["s"],"simplybuilt":["b"],"sink":["s"],"sistrix":["b"],"sitemap":["s"],"sith":["b"],"sitrox":["b"],"sketch":["b"],"skull":["s"],"skull-crossbones":["s"],"skyatlas":["b"],"skype":["b"],"slack":["b"],"slash":["s"],"sleigh":["s"],"sliders":["s"],"slideshare":["b"],"smog":["s"],"smoking":["s"],"snapchat":["b"],"snowflake":["s","r"],"snowman":["s"],"snowplow":["s"],"soap":["s"],"socks":["s"],"solar-panel":["s"],"sort":["s"],"sort-down":["s"],"sort-up":["s"],"soundcloud":["b"],"sourcetree":["b"],"spa":["s"],"space-awesome":["b"],"spaghetti-monster-flying":["s"],"speakap":["b"],"speaker-deck":["b"],"spell-check":["s"],"spider":["s"],"spinner":["s"],"splotch":["s"],"spoon":["s"],"spotify":["b"],"spray-can":["s"],"spray-can-sparkles":["s"],"square":["s","r"],"square-arrow-up-right":["s"],"square-behance":["b"],"square-caret-down":["s","r"],"square-caret-left":["s","r"],"square-caret-right":["s","r"],"square-caret-up":["s","r"],"square-check":["s","r"],"square-dribbble":["b"],"square-envelope":["s"],"square-facebook":["b"],"square-font-awesome":["b"],"square-font-awesome-stroke":["b"],"square-full":["s","r"],"square-git":["b"],"square-github":["b"],"square-gitlab":["b"],"square-google-plus":["b"],"square-h":["s"],"square-hacker-news":["b"],"square-instagram":["b"],"square-js":["b"],"square-lastfm":["b"],"square-minus":["s","r"],"square-nfi":["s"],"square-odnoklassniki":["b"],"square-parking":["s"],"square-pen":["s"],"square-person-confined":["s"],"square-phone":["s"],"square-phone-flip":["s"],"square-pied-piper":["b"],"square-pinterest":["b"],"square-plus":["s","r"],"square-poll-horizontal":["s"],"square-poll-vertical":["s"],"square-reddit":["b"],"square-root-variable":["s"],"square-rss":["s"],"square-share-nodes":["s"],"square-snapchat":["b"],"square-steam":["b"],"square-tumblr":["b"],"square-twitter":["b"],"square-up-right":["s"],"square-viadeo":["b"],"square-vimeo":["b"],"square-virus":["s"],"square-whatsapp":["b"],"square-xing":["b"],"square-xmark":["s"],"square-youtube":["b"],"squarespace":["b"],"stack-exchange":["b"],"stack-overflow":["b"],"stackpath":["b"],"staff-snake":["s"],"stairs":["s"],"stamp":["s"],"stapler":["s"],"star":["s","r"],"star-and-crescent":["s"],"star-half":["s","r"],"star-half-stroke":["s","r"],"star-of-david":["s"],"star-of-life":["s"],"staylinked":["b"],"steam":["b"],"steam-symbol":["b"],"sterling-sign":["s"],"stethoscope":["s"],"sticker-mule":["b"],"stop":["s"],"stopwatch":["s"],"stopwatch-20":["s"],"store":["s"],"store-slash":["s"],"strava":["b"],"street-view":["s"],"strikethrough":["s"],"stripe":["b"],"stripe-s":["b"],"stroopwafel":["s"],"studiovinari":["b"],"stumbleupon":["b"],"stumbleupon-circle":["b"],"subscript":["s"],"suitcase":["s"],"suitcase-medical":["s"],"suitcase-rolling":["s"],"sun":["s","r"],"sun-plant-wilt":["s"],"superpowers":["b"],"superscript":["s"],"supple":["b"],"suse":["b"],"swatchbook":["s"],"swift":["b"],"symfony":["b"],"synagogue":["s"],"syringe":["s"],"t":["s"],"table":["s"],"table-cells":["s"],"table-cells-large":["s"],"table-columns":["s"],"table-list":["s"],"table-tennis-paddle-ball":["s"],"tablet":["s"],"tablet-button":["s"],"tablet-screen-button":["s"],"tablets":["s"],"tachograph-digital":["s"],"tag":["s"],"tags":["s"],"tape":["s"],"tarp":["s"],"tarp-droplet":["s"],"taxi":["s"],"teamspeak":["b"],"teeth":["s"],"teeth-open":["s"],"telegram":["b"],"temperature-arrow-down":["s"],"temperature-arrow-up":["s"],"temperature-empty":["s"],"temperature-full":["s"],"temperature-half":["s"],"temperature-high":["s"],"temperature-low":["s"],"temperature-quarter":["s"],"temperature-three-quarters":["s"],"tencent-weibo":["b"],"tenge-sign":["s"],"tent":["s"],"tent-arrow-down-to-line":["s"],"tent-arrow-left-right":["s"],"tent-arrow-turn-left":["s"],"tent-arrows-down":["s"],"tents":["s"],"terminal":["s"],"text-height":["s"],"text-slash":["s"],"text-width":["s"],"the-red-yeti":["b"],"themeco":["b"],"themeisle":["b"],"thermometer":["s"],"think-peaks":["b"],"thumbs-down":["s","r"],"thumbs-up":["s","r"],"thumbtack":["s"],"ticket":["s"],"ticket-simple":["s"],"tiktok":["b"],"timeline":["s"],"toggle-off":["s"],"toggle-on":["s"],"toilet":["s"],"toilet-paper":["s"],"toilet-paper-slash":["s"],"toilet-portable":["s"],"toilets-portable":["s"],"toolbox":["s"],"tooth":["s"],"torii-gate":["s"],"tornado":["s"],"tower-broadcast":["s"],"tower-cell":["s"],"tower-observation":["s"],"tractor":["s"],"trade-federation":["b"],"trademark":["s"],"traffic-light":["s"],"trailer":["s"],"train":["s"],"train-subway":["s"],"train-tram":["s"],"transgender":["s"],"trash":["s"],"trash-arrow-up":["s"],"trash-can":["s","r"],"trash-can-arrow-up":["s"],"tree":["s"],"tree-city":["s"],"trello":["b"],"triangle-exclamation":["s"],"trophy":["s"],"trowel":["s"],"trowel-bricks":["s"],"truck":["s"],"truck-arrow-right":["s"],"truck-droplet":["s"],"truck-fast":["s"],"truck-field":["s"],"truck-field-un":["s"],"truck-front":["s"],"truck-medical":["s"],"truck-monster":["s"],"truck-moving":["s"],"truck-pickup":["s"],"truck-plane":["s"],"truck-ramp-box":["s"],"tty":["s"],"tumblr":["b"],"turkish-lira-sign":["s"],"turn-down":["s"],"turn-up":["s"],"tv":["s"],"twitch":["b"],"twitter":["b"],"typo3":["b"],"u":["s"],"uber":["b"],"ubuntu":["b"],"uikit":["b"],"umbraco":["b"],"umbrella":["s"],"umbrella-beach":["s"],"uncharted":["b"],"underline":["s"],"uniregistry":["b"],"unity":["b"],"universal-access":["s"],"unlock":["s"],"unlock-keyhole":["s"],"unsplash":["b"],"untappd":["b"],"up-down":["s"],"up-down-left-right":["s"],"up-long":["s"],"up-right-and-down-left-from-center":["s"],"up-right-from-square":["s"],"upload":["s"],"ups":["b"],"usb":["b"],"user":["s","r"],"user-astronaut":["s"],"user-check":["s"],"user-clock":["s"],"user-doctor":["s"],"user-gear":["s"],"user-graduate":["s"],"user-group":["s"],"user-injured":["s"],"user-large":["s"],"user-large-slash":["s"],"user-lock":["s"],"user-minus":["s"],"user-ninja":["s"],"user-nurse":["s"],"user-pen":["s"],"user-plus":["s"],"user-secret":["s"],"user-shield":["s"],"user-slash":["s"],"user-tag":["s"],"user-tie":["s"],"user-xmark":["s"],"users":["s"],"users-between-lines":["s"],"users-gear":["s"],"users-line":["s"],"users-rays":["s"],"users-rectangle":["s"],"users-slash":["s"],"users-viewfinder":["s"],"usps":["b"],"ussunnah":["b"],"utensils":["s"],"v":["s"],"vaadin":["b"],"van-shuttle":["s"],"vault":["s"],"vector-square":["s"],"venus":["s"],"venus-double":["s"],"venus-mars":["s"],"vest":["s"],"vest-patches":["s"],"viacoin":["b"],"viadeo":["b"],"vial":["s"],"vial-circle-check":["s"],"vial-virus":["s"],"vials":["s"],"viber":["b"],"video":["s"],"video-slash":["s"],"vihara":["s"],"vimeo":["b"],"vimeo-v":["b"],"vine":["b"],"virus":["s"],"virus-covid":["s"],"virus-covid-slash":["s"],"virus-slash":["s"],"viruses":["s"],"vk":["b"],"vnv":["b"],"voicemail":["s"],"volcano":["s"],"volleyball":["s"],"volume-high":["s"],"volume-low":["s"],"volume-off":["s"],"volume-xmark":["s"],"vr-cardboard":["s"],"vuejs":["b"],"w":["s"],"walkie-talkie":["s"],"wallet":["s"],"wand-magic":["s"],"wand-magic-sparkles":["s"],"wand-sparkles":["s"],"warehouse":["s"],"watchman-monitoring":["b"],"water":["s"],"water-ladder":["s"],"wave-square":["s"],"waze":["b"],"weebly":["b"],"weibo":["b"],"weight-hanging":["s"],"weight-scale":["s"],"weixin":["b"],"whatsapp":["b"],"wheat-awn":["s"],"wheat-awn-circle-exclamation":["s"],"wheelchair":["s"],"wheelchair-move":["s"],"whiskey-glass":["s"],"whmcs":["b"],"wifi":["s"],"wikipedia-w":["b"],"wind":["s"],"window-maximize":["s","r"],"window-minimize":["s","r"],"window-restore":["s","r"],"windows":["b"],"wine-bottle":["s"],"wine-glass":["s"],"wine-glass-empty":["s"],"wirsindhandwerk":["b"],"wix":["b"],"wizards-of-the-coast":["b"],"wodu":["b"],"wolf-pack-battalion":["b"],"won-sign":["s"],"wordpress":["b"],"wordpress-simple":["b"],"worm":["s"],"wpbeginner":["b"],"wpexplorer":["b"],"wpforms":["b"],"wpressr":["b"],"wrench":["s"],"x":["s"],"x-ray":["s"],"xbox":["b"],"xing":["b"],"xmark":["s"],"xmarks-lines":["s"],"y":["s"],"y-combinator":["b"],"yahoo":["b"],"yammer":["b"],"yandex":["b"],"yandex-international":["b"],"yarn":["b"],"yelp":["b"],"yen-sign":["s"],"yin-yang":["s"],"yoast":["b"],"youtube":["b"],"z":["s"],"zhihu":["b"]}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tabby_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tabby-settings */ "tabby-settings");
/* harmony import */ var tabby_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tabby_settings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _configProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configProvider */ "./src/configProvider.ts");
/* harmony import */ var _settingsTabProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settingsTabProvider */ "./src/settingsTabProvider.ts");
/* harmony import */ var components_homepageSettingsTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/homepageSettingsTab */ "./src/components/homepageSettingsTab.ts");
/* harmony import */ var hotkeyProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hotkeyProvider */ "./src/hotkeyProvider.ts");
/* harmony import */ var buttonProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! buttonProvider */ "./src/buttonProvider.ts");
/* harmony import */ var services_translateService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! services/translateService */ "./src/services/translateService.ts");
/* harmony import */ var components_homepageTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/homepageTab */ "./src/components/homepageTab.ts");
/* harmony import */ var components_editProfileGroupModal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/editProfileGroupModal.component */ "./src/components/editProfileGroupModal.component.ts");
/* harmony import */ var components_editProfileModal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/editProfileModal.component */ "./src/components/editProfileModal.component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var commandProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! commandProvider */ "./src/commandProvider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
*  tabby-connection-homepage: A simple homepage plugin for tabby.
*  Copyright (C) 2026 OpaqueGlass and other developers
*
*  This program is free software: you can redistribute it and/or modify
*  it under the terms of the GNU Affero General Public License as published
*  by the Free Software Foundation, either version 3 of the License, or
*  (at your option) any later version.
*
*  This program is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU Affero General Public License for more details.
*
*  You should have received a copy of the GNU Affero General Public License
*  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/



















let HomepageModule = class HomepageModule {
    constructor(hostApp, app, config, translate, profilesService) {
        app.ready$.subscribe(() => {
            var _a, _b, _c, _d;
            translate.initMyTranslate();
            if (((_a = config.store.ogHomepagePlugin) === null || _a === void 0 ? void 0 : _a.autoInit) === false) {
                config.store.ogHomepagePlugin.autoInit = _constants__WEBPACK_IMPORTED_MODULE_15__.AUTO_INIT_OPTIONS.DISABLE;
                config.save();
            }
            else if (((_b = config.store.ogHomepagePlugin) === null || _b === void 0 ? void 0 : _b.autoInit) === true) {
                config.store.ogHomepagePlugin.autoInit = _constants__WEBPACK_IMPORTED_MODULE_15__.AUTO_INIT_OPTIONS.PLUGIN;
                config.save();
            }
            if (((_c = config.store.ogHomepagePlugin) === null || _c === void 0 ? void 0 : _c.autoInit) === _constants__WEBPACK_IMPORTED_MODULE_15__.AUTO_INIT_OPTIONS.DISABLE) {
                return;
            }
            let tabType = components_homepageTab__WEBPACK_IMPORTED_MODULE_12__.HomepageTabComponent;
            let tabInputs = undefined;
            switch ((_d = config.store.ogHomepagePlugin) === null || _d === void 0 ? void 0 : _d.autoInit) {
                case _constants__WEBPACK_IMPORTED_MODULE_15__.AUTO_INIT_OPTIONS.PLUGIN:
                    tabType = components_homepageTab__WEBPACK_IMPORTED_MODULE_12__.HomepageTabComponent;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_15__.AUTO_INIT_OPTIONS.ORIGINAL:
                    tabType = tabby_settings__WEBPACK_IMPORTED_MODULE_5__.SettingsTabComponent;
                    tabInputs = { activeTab: 'profiles' };
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_15__.AUTO_INIT_OPTIONS.PROFILE_SELECTOR:
                    tabType = null;
                    profilesService.showProfileSelector().then(selectedProfile => {
                        if (selectedProfile) {
                            profilesService.launchProfile(selectedProfile);
                        }
                    }).catch(err => { console.warn('Failed to launch profile from selector:', err); });
                    break;
            }
            if (tabType === null) {
                return;
            }
            const openedTab = app.tabs.find(tab => tab instanceof tabType);
            if (openedTab) {
                app.selectTab(openedTab);
            }
            else {
                app.openNewTabRaw({
                    type: tabType,
                    inputs: tabInputs,
                });
            }
        });
    }
};
HomepageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
            (tabby_core__WEBPACK_IMPORTED_MODULE_4___default()),
        ],
        providers: [
            { provide: tabby_core__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider, useClass: _configProvider__WEBPACK_IMPORTED_MODULE_6__.HomepageConfigProvider, multi: true },
            { provide: tabby_settings__WEBPACK_IMPORTED_MODULE_5__.SettingsTabProvider, useClass: _settingsTabProvider__WEBPACK_IMPORTED_MODULE_7__.HomepageSettingsTabProvider, multi: true },
            { provide: tabby_core__WEBPACK_IMPORTED_MODULE_4__.HotkeyProvider, useClass: hotkeyProvider__WEBPACK_IMPORTED_MODULE_9__.AutoCompleteHotkeyProvider, multi: true },
            { provide: tabby_core__WEBPACK_IMPORTED_MODULE_4__.ToolbarButtonProvider, useClass: buttonProvider__WEBPACK_IMPORTED_MODULE_10__.ButtonProvider, multi: true },
            { provide: tabby_core__WEBPACK_IMPORTED_MODULE_4__.CommandProvider, useClass: commandProvider__WEBPACK_IMPORTED_MODULE_16__.HomepageCommandProvider, multi: true },
            services_translateService__WEBPACK_IMPORTED_MODULE_11__.HomepageTranslateService,
        ],
        declarations: [
            components_homepageSettingsTab__WEBPACK_IMPORTED_MODULE_8__.HomepageSettingsTabComponent,
            components_homepageTab__WEBPACK_IMPORTED_MODULE_12__.HomepageTabComponent,
            components_editProfileGroupModal_component__WEBPACK_IMPORTED_MODULE_13__.EditProfileGroupModalComponent,
            components_editProfileModal_component__WEBPACK_IMPORTED_MODULE_14__.EditProfileModalComponent,
        ],
    }),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_4__.HostAppService, tabby_core__WEBPACK_IMPORTED_MODULE_4__.AppService, tabby_core__WEBPACK_IMPORTED_MODULE_4__.ConfigService, services_translateService__WEBPACK_IMPORTED_MODULE_11__.HomepageTranslateService, tabby_core__WEBPACK_IMPORTED_MODULE_4__.ProfilesService])
], HomepageModule);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageModule);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map