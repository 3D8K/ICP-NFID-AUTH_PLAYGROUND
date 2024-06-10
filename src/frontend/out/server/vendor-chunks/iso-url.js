"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/iso-url";
exports.ids = ["vendor-chunks/iso-url"];
exports.modules = {

/***/ "(ssr)/../../node_modules/iso-url/index.js":
/*!*******************************************!*\
  !*** ../../node_modules/iso-url/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst {\n    URLWithLegacySupport,\n    format,\n    URLSearchParams,\n    defaultBase\n} = __webpack_require__(/*! ./src/url */ \"(ssr)/../../node_modules/iso-url/src/url.js\");\nconst relative = __webpack_require__(/*! ./src/relative */ \"(ssr)/../../node_modules/iso-url/src/relative.js\");\n\nmodule.exports = {\n    URL: URLWithLegacySupport,\n    URLSearchParams,\n    format,\n    relative,\n    defaultBase\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2lzby11cmwvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsRUFBRSxtQkFBTyxDQUFDLDhEQUFXO0FBQ3ZCLGlCQUFpQixtQkFBTyxDQUFDLHdFQUFnQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uLi8uLi9ub2RlX21vZHVsZXMvaXNvLXVybC9pbmRleC5qcz8wMTk2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qge1xuICAgIFVSTFdpdGhMZWdhY3lTdXBwb3J0LFxuICAgIGZvcm1hdCxcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgZGVmYXVsdEJhc2Vcbn0gPSByZXF1aXJlKCcuL3NyYy91cmwnKTtcbmNvbnN0IHJlbGF0aXZlID0gcmVxdWlyZSgnLi9zcmMvcmVsYXRpdmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgVVJMOiBVUkxXaXRoTGVnYWN5U3VwcG9ydCxcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgZm9ybWF0LFxuICAgIHJlbGF0aXZlLFxuICAgIGRlZmF1bHRCYXNlXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/iso-url/index.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/iso-url/src/relative.js":
/*!**************************************************!*\
  !*** ../../node_modules/iso-url/src/relative.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst { URLWithLegacySupport, format } = __webpack_require__(/*! ./url */ \"(ssr)/../../node_modules/iso-url/src/url.js\");\n\nmodule.exports = (url, location = {}, protocolMap = {}, defaultProtocol) => {\n    let protocol = location.protocol ?\n        location.protocol.replace(':', '') :\n        'http';\n\n    // Check protocol map\n    protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':';\n    let urlParsed;\n\n    try {\n        urlParsed = new URLWithLegacySupport(url);\n    } catch (err) {\n        urlParsed = {};\n    }\n\n    const base = Object.assign({}, location, {\n        protocol: protocol || urlParsed.protocol,\n        host: location.host || urlParsed.host\n    });\n\n    return new URLWithLegacySupport(url, format(base)).toString();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2lzby11cmwvc3JjL3JlbGF0aXZlLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFFBQVEsK0JBQStCLEVBQUUsbUJBQU8sQ0FBQywwREFBTzs7QUFFeEQsb0NBQW9DLGtCQUFrQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4uLy4uL25vZGVfbW9kdWxlcy9pc28tdXJsL3NyYy9yZWxhdGl2ZS5qcz9mNDQ2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBVUkxXaXRoTGVnYWN5U3VwcG9ydCwgZm9ybWF0IH0gPSByZXF1aXJlKCcuL3VybCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh1cmwsIGxvY2F0aW9uID0ge30sIHByb3RvY29sTWFwID0ge30sIGRlZmF1bHRQcm90b2NvbCkgPT4ge1xuICAgIGxldCBwcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sID9cbiAgICAgICAgbG9jYXRpb24ucHJvdG9jb2wucmVwbGFjZSgnOicsICcnKSA6XG4gICAgICAgICdodHRwJztcblxuICAgIC8vIENoZWNrIHByb3RvY29sIG1hcFxuICAgIHByb3RvY29sID0gKHByb3RvY29sTWFwW3Byb3RvY29sXSB8fCBkZWZhdWx0UHJvdG9jb2wgfHwgcHJvdG9jb2wpICsgJzonO1xuICAgIGxldCB1cmxQYXJzZWQ7XG5cbiAgICB0cnkge1xuICAgICAgICB1cmxQYXJzZWQgPSBuZXcgVVJMV2l0aExlZ2FjeVN1cHBvcnQodXJsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdXJsUGFyc2VkID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgYmFzZSA9IE9iamVjdC5hc3NpZ24oe30sIGxvY2F0aW9uLCB7XG4gICAgICAgIHByb3RvY29sOiBwcm90b2NvbCB8fCB1cmxQYXJzZWQucHJvdG9jb2wsXG4gICAgICAgIGhvc3Q6IGxvY2F0aW9uLmhvc3QgfHwgdXJsUGFyc2VkLmhvc3RcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgVVJMV2l0aExlZ2FjeVN1cHBvcnQodXJsLCBmb3JtYXQoYmFzZSkpLnRvU3RyaW5nKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/iso-url/src/relative.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/iso-url/src/url.js":
/*!*********************************************!*\
  !*** ../../node_modules/iso-url/src/url.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst { URL, URLSearchParams, format } = __webpack_require__(/*! url */ \"url\");\n\n// https://github.com/nodejs/node/issues/12682\nconst defaultBase = 'http://localhost';\n\nclass URLWithLegacySupport extends URL {\n    constructor(url = '', base = defaultBase) {\n        super(url, base);\n        this.path = this.pathname + this.search;\n        this.auth =\n            this.username && this.password ?\n                this.username + ':' + this.password :\n                null;\n        this.query =\n            this.search && this.search.startsWith('?') ?\n                this.search.slice(1) :\n                null;\n    }\n\n    format() {\n        return this.toString();\n    }\n}\n\nmodule.exports = {\n    URLWithLegacySupport,\n    URLSearchParams,\n    format,\n    defaultBase\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2lzby11cmwvc3JjL3VybC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixRQUFRLCtCQUErQixFQUFFLG1CQUFPLENBQUMsZ0JBQUs7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi4vLi4vbm9kZV9tb2R1bGVzL2lzby11cmwvc3JjL3VybC5qcz8zZDhlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBVUkwsIFVSTFNlYXJjaFBhcmFtcywgZm9ybWF0IH0gPSByZXF1aXJlKCd1cmwnKTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy8xMjY4MlxuY29uc3QgZGVmYXVsdEJhc2UgPSAnaHR0cDovL2xvY2FsaG9zdCc7XG5cbmNsYXNzIFVSTFdpdGhMZWdhY3lTdXBwb3J0IGV4dGVuZHMgVVJMIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwgPSAnJywgYmFzZSA9IGRlZmF1bHRCYXNlKSB7XG4gICAgICAgIHN1cGVyKHVybCwgYmFzZSk7XG4gICAgICAgIHRoaXMucGF0aCA9IHRoaXMucGF0aG5hbWUgKyB0aGlzLnNlYXJjaDtcbiAgICAgICAgdGhpcy5hdXRoID1cbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgJiYgdGhpcy5wYXNzd29yZCA/XG4gICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZSArICc6JyArIHRoaXMucGFzc3dvcmQgOlxuICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgIHRoaXMucXVlcnkgPVxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggJiYgdGhpcy5zZWFyY2guc3RhcnRzV2l0aCgnPycpID9cbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5zbGljZSgxKSA6XG4gICAgICAgICAgICAgICAgbnVsbDtcbiAgICB9XG5cbiAgICBmb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBVUkxXaXRoTGVnYWN5U3VwcG9ydCxcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgZm9ybWF0LFxuICAgIGRlZmF1bHRCYXNlXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/iso-url/src/url.js\n");

/***/ })

};
;