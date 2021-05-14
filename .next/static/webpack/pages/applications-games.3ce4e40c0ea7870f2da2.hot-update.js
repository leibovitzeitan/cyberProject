webpackHotUpdate_N_E("pages/applications-games",{

/***/ "./components/NextButton.tsx":
/*!***********************************!*\
  !*** ./components/NextButton.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\Cyber\\yudbet\\maze meshane\\react\\components\\NextButton.tsx",
    _this = undefined;




var NextButton = function NextButton(props) {
  var disabled = props.disabled,
      link = props.link,
      bgColor = props.bgColor,
      query = props.query;

  if (disabled) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative rounded-3xl bg-".concat(bgColor, " shadow-xl m-4 overflow-hidden hover:scale-110 transform transition duration-300 dark:bg-gray-800"),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-gray-900 p-5 text-4xl font-black font-title bg-clip-text text-center",
        children: props.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: link,
      query: query
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative rounded-3xl bg-".concat(bgColor, " shadow-xl m-4 overflow-hidden hover:scale-110 transform transition duration-300 dark:bg-gray-800"),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-gray-900 p-5 text-4xl font-black font-title bg-clip-text text-center",
          children: props.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_c = NextButton;
/* harmony default export */ __webpack_exports__["default"] = (NextButton);

var _c;

$RefreshReg$(_c, "NextButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXh0QnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJOZXh0QnV0dG9uIiwicHJvcHMiLCJkaXNhYmxlZCIsImxpbmsiLCJiZ0NvbG9yIiwicXVlcnkiLCJ0ZXh0IiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVdBLElBQU1BLFVBQXFDLEdBQUcsU0FBeENBLFVBQXdDLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQy9DQyxRQUQrQyxHQUNaRCxLQURZLENBQy9DQyxRQUQrQztBQUFBLE1BQ3JDQyxJQURxQyxHQUNaRixLQURZLENBQ3JDRSxJQURxQztBQUFBLE1BQy9CQyxPQUQrQixHQUNaSCxLQURZLENBQy9CRyxPQUQrQjtBQUFBLE1BQ3RCQyxLQURzQixHQUNaSixLQURZLENBQ3RCSSxLQURzQjs7QUFFdkQsTUFBSUgsUUFBSixFQUFjO0FBQ1osd0JBQ0U7QUFDRSxlQUFTLG9DQUE2QkUsT0FBN0Isc0dBRFg7QUFBQSw2QkFHRTtBQUFLLGlCQUFTLEVBQUMsMkVBQWY7QUFBQSxrQkFDR0gsS0FBSyxDQUFDSztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFTRDs7QUFDRCxzQkFDRSxxRUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTtBQUNWQyxjQUFRLEVBQUVKLElBREE7QUFFVkUsV0FBSyxFQUFFQTtBQUZHLEtBQVo7QUFBQSwyQkFJRTtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsb0NBQTZCRCxPQUE3QixzR0FEWDtBQUFBLCtCQUdFO0FBQUssbUJBQVMsRUFBQywyRUFBZjtBQUFBLG9CQUNHSCxLQUFLLENBQUNLO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBN0JEOztLQUFNTixVO0FBK0JTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHBsaWNhdGlvbnMtZ2FtZXMuM2NlNGU0MGMwZWE3ODcwZjJkYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeUlucHV0IH0gZnJvbSBcIm5vZGU6cXVlcnlzdHJpbmdcIjtcclxuXHJcbmludGVyZmFjZSBOZXh0QnV0dG9uUHJvcHMge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBiZ0NvbG9yOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIHF1ZXJ5OiBzdHJpbmcgfCBQYXJzZWRVcmxRdWVyeUlucHV0O1xyXG59XHJcblxyXG5jb25zdCBOZXh0QnV0dG9uOiBSZWFjdC5GQzxOZXh0QnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkaXNhYmxlZCwgbGluaywgYmdDb2xvciwgcXVlcnkgfSA9IHByb3BzO1xyXG4gIGlmIChkaXNhYmxlZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHJvdW5kZWQtM3hsIGJnLSR7YmdDb2xvcn0gc2hhZG93LXhsIG0tNCBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6c2NhbGUtMTEwIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBkYXJrOmJnLWdyYXktODAwYH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBwLTUgdGV4dC00eGwgZm9udC1ibGFjayBmb250LXRpdGxlIGJnLWNsaXAtdGV4dCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgcGF0aG5hbWU6IGxpbmssXHJcbiAgICAgIHF1ZXJ5OiBxdWVyeVxyXG4gICAgICB9fT5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgcm91bmRlZC0zeGwgYmctJHtiZ0NvbG9yfSBzaGFkb3cteGwgbS00IG92ZXJmbG93LWhpZGRlbiBob3ZlcjpzY2FsZS0xMTAgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGRhcms6YmctZ3JheS04MDBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBwLTUgdGV4dC00eGwgZm9udC1ibGFjayBmb250LXRpdGxlIGJnLWNsaXAtdGV4dCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=