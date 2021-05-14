webpackHotUpdate_N_E("pages/applications-games",{

/***/ "./components/ImageCard.tsx":
/*!**********************************!*\
  !*** ./components/ImageCard.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\Cyber\\yudbet\\maze meshane\\react\\components\\ImageCard.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var ImageCard = function ImageCard(props) {
  _s();

  var src = props.src,
      _onClick = props.onClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      selected = _useState[0],
      setSelected = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "relative rounded-3xl bg-white shadow-xl m-4 w-1/6 overflow-hidden hover:scale-110 transform transition duration-300 dark:bg-gray-800 ".concat(selected && ""),
    onClick: function onClick() {
      setSelected(!selected);
      _onClick;
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      src: src,
      layout: "responsive",
      width: "1",
      height: "1",
      objectFit: "cover"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-8 transition duration-100 absolute inset-y-0 h-full w-full bg-black bg-opacity-40 ".concat(!selected && "opacity-0"),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        className: "stroke-current text-gray-100",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "#FFFFFF",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M5 13l4 4L19 7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_s(ImageCard, "jTu/AeLw5BOy6ZW1dDNXzAJjzwE=");

_c = ImageCard;
/* harmony default export */ __webpack_exports__["default"] = (ImageCard);

var _c;

$RefreshReg$(_c, "ImageCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUNhcmQudHN4Il0sIm5hbWVzIjpbIkltYWdlQ2FyZCIsInByb3BzIiwic3JjIiwib25DbGljayIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU9BLElBQU1BLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQzdDQyxHQUQ2QyxHQUM1QkQsS0FENEIsQ0FDN0NDLEdBRDZDO0FBQUEsTUFDeENDLFFBRHdDLEdBQzVCRixLQUQ0QixDQUN4Q0UsT0FEd0M7O0FBQUEsa0JBRXJCQyxzREFBUSxDQUFDLEtBQUQsQ0FGYTtBQUFBLE1BRTlDQyxRQUY4QztBQUFBLE1BRXBDQyxXQUZvQzs7QUFHckQsc0JBQ0U7QUFDRSxhQUFTLGlKQUNQRCxRQUFRLElBQUksRUFETCxDQURYO0FBSUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JDLGlCQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0FGLGNBQU87QUFDUixLQVBIO0FBQUEsNEJBU0UscUVBQUMsaURBQUQ7QUFDRSxTQUFHLEVBQUVELEdBRFA7QUFFRSxZQUFNLEVBQUMsWUFGVDtBQUdFLFdBQUssRUFBQyxHQUhSO0FBSUUsWUFBTSxFQUFDLEdBSlQ7QUFLRSxlQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFnQkU7QUFDRSxlQUFTLGdHQUNQLENBQUNHLFFBQUQsSUFBYSxXQUROLENBRFg7QUFBQSw2QkFLRTtBQUNFLGlCQUFTLEVBQUMsOEJBRFo7QUFFRSxhQUFLLEVBQUMsNEJBRlI7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLGVBQU8sRUFBQyxXQUpWO0FBS0UsY0FBTSxFQUFDLFNBTFQ7QUFBQSwrQkFPRTtBQUNFLHVCQUFhLEVBQUMsT0FEaEI7QUFFRSx3QkFBYyxFQUFDLE9BRmpCO0FBR0UscUJBQVcsRUFBRSxDQUhmO0FBSUUsV0FBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBMUNEOztHQUFNTCxTOztLQUFBQSxTO0FBNENTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHBsaWNhdGlvbnMtZ2FtZXMuODJlNWRjNTM2MjhjMDI4NTk5ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmludGVyZmFjZSBJbWFnZUNhcmRQcm9wcyB7XHJcbiAgc3JjOiBzdHJpbmc7XHJcbiAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI8SFRNTERpdkVsZW1lbnQ+O1xyXG59XHJcblxyXG5jb25zdCBJbWFnZUNhcmQ6IFJlYWN0LkZDPEltYWdlQ2FyZFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3JjLCBvbkNsaWNrIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSByb3VuZGVkLTN4bCBiZy13aGl0ZSBzaGFkb3cteGwgbS00IHctMS82IG92ZXJmbG93LWhpZGRlbiBob3ZlcjpzY2FsZS0xMTAgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGRhcms6YmctZ3JheS04MDAgJHtcclxuICAgICAgICBzZWxlY3RlZCAmJiBcIlwiXHJcbiAgICAgIH1gfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoIXNlbGVjdGVkKTtcclxuICAgICAgICBvbkNsaWNrXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgIHdpZHRoPVwiMVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMVwiXHJcbiAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgcC04IHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGFic29sdXRlIGluc2V0LXktMCBoLWZ1bGwgdy1mdWxsIGJnLWJsYWNrIGJnLW9wYWNpdHktNDAgJHtcclxuICAgICAgICAgICFzZWxlY3RlZCAmJiBcIm9wYWNpdHktMFwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdHJva2UtY3VycmVudCB0ZXh0LWdyYXktMTAwXCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjRkZGRkZGXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgIGQ9XCJNNSAxM2w0IDRMMTkgN1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=