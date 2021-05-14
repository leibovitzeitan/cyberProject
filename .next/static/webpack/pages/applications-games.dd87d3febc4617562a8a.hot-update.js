webpackHotUpdate_N_E("pages/applications-games",{

/***/ "./pages/applications-games.tsx":
/*!**************************************!*\
  !*** ./pages/applications-games.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ImageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageCard */ "./components/ImageCard.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NextButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NextButton */ "./components/NextButton.tsx");
/* harmony import */ var _lib_games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/games */ "./lib/games.ts");


var _jsxFileName = "E:\\Cyber\\yudbet\\maze meshane\\react\\pages\\applications-games.tsx",
    _this = undefined,
    _s = $RefreshSig$();







function routeSwitch(route) {
  switch (route) {
    case "addicted_guy":
      return [_lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][0], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][1], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][2], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][3], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][4], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][5], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][6], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][7], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][8], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][9], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][10], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][11], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][12], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][13], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][14], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][15], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][16], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][17], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][18], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][19]];

    case "normie":
      return [];

    case "netflix_and_chill":
      return [_lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][20], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][21], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][22], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][23], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][24], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][25], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][26], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][27], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][15], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][16], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][17], _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][18]];

    default:
      return [];
  }
}

function bgColorSwitch(route) {
  switch (route) {
    case "addicted_guy":
      return "green-100";

    case "normie":
      return "blue-100";

    case "netflix_and_chill":
      return "red-100";

    default:
      return "";
  }
}

var Home = function Home(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var route = router.query.route;
  var apps = routeSwitch(route);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Array(12).fill(false)
  /*[false, false, false, false, false, false, false, false, false, false]*/
  ),
      selected = _useState[0],
      setSelected = _useState[1];

  console.log(apps.length);
  console.log(selected.length);
  var bgColor = bgColorSwitch(route);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center min-h-screen w-full transition duration-300 bg-".concat(bgColor, " flex-col pt-40 dark:bg-gray-900"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100",
      children: "\u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D5\u05EA\u05D5\u05DB\u05E0\u05D5\u05EA \u05D0\u05EA\u05D4 \u05DE\u05E9\u05EA\u05DE\u05E9?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl",
      children: apps.map(function (item, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ImageCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          src: item.image,
          onClick: function onClick() {
            setSelected(selected.map(function (app, index) {
              return index === i ? !app : app;
            }));
            console.log(selected);
          }
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NextButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      disabled: false //תמלא אותי
      ,
      text: "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D0",
      bgColor: "gray-50",
      link: "/resolution?route=".concat(route)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, _this);
};

_s(Home, "/e963w+VPfYDUwTrQ27FccuXX8s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJiZ0NvbG9yU3dpdGNoIiwiSG9tZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJhcHBzIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImJnQ29sb3IiLCJtYXAiLCJpdGVtIiwiaSIsImltYWdlIiwiYXBwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQixVQUFRQSxLQUFSO0FBQ0UsU0FBSyxjQUFMO0FBQ0UsYUFBTyxDQUNMQyxrREFBSyxDQUFDLENBQUQsQ0FEQSxFQUVMQSxrREFBSyxDQUFDLENBQUQsQ0FGQSxFQUdMQSxrREFBSyxDQUFDLENBQUQsQ0FIQSxFQUlMQSxrREFBSyxDQUFDLENBQUQsQ0FKQSxFQUtMQSxrREFBSyxDQUFDLENBQUQsQ0FMQSxFQU1MQSxrREFBSyxDQUFDLENBQUQsQ0FOQSxFQU9MQSxrREFBSyxDQUFDLENBQUQsQ0FQQSxFQVFMQSxrREFBSyxDQUFDLENBQUQsQ0FSQSxFQVNMQSxrREFBSyxDQUFDLENBQUQsQ0FUQSxFQVVMQSxrREFBSyxDQUFDLENBQUQsQ0FWQSxFQVdMQSxrREFBSyxDQUFDLEVBQUQsQ0FYQSxFQVlMQSxrREFBSyxDQUFDLEVBQUQsQ0FaQSxFQWFMQSxrREFBSyxDQUFDLEVBQUQsQ0FiQSxFQWNMQSxrREFBSyxDQUFDLEVBQUQsQ0FkQSxFQWVMQSxrREFBSyxDQUFDLEVBQUQsQ0FmQSxFQWdCTEEsa0RBQUssQ0FBQyxFQUFELENBaEJBLEVBaUJMQSxrREFBSyxDQUFDLEVB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QUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBcENEOztHQUFNRyxJO1VBQ1dHLHFEOzs7S0FEWEgsSTtBQXNDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLmRkODdkM2ZlYmM0NjE3NTYyYThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbWFnZUNhcmRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL05leHRCdXR0b25cIjtcclxuaW1wb3J0IGdhbWVzIGZyb20gXCIuLi9saWIvZ2FtZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJvdXRlU3dpdGNoKHJvdXRlKSB7XHJcbiAgc3dpdGNoIChyb3V0ZSkge1xyXG4gICAgY2FzZSBcImFkZGljdGVkX2d1eVwiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIGdhbWVzWzBdLFxyXG4gICAgICAgIGdhbWVzWzFdLFxyXG4gICAgICAgIGdhbWVzWzJdLFxyXG4gICAgICAgIGdhbWVzWzNdLFxyXG4gICAgICAgIGdhbWVzWzRdLFxyXG4gICAgICAgIGdhbWVzWzVdLFxyXG4gICAgICAgIGdhbWVzWzZdLFxyXG4gICAgICAgIGdhbWVzWzddLFxyXG4gICAgICAgIGdhbWVzWzhdLFxyXG4gICAgICAgIGdhbWVzWzldLFxyXG4gICAgICAgIGdhbWVzWzEwXSxcclxuICAgICAgICBnYW1lc1sxMV0sXHJcbiAgICAgICAgZ2FtZXNbMTJdLFxyXG4gICAgICAgIGdhbWVzWzEzXSxcclxuICAgICAgICBnYW1lc1sxNF0sXHJcbiAgICAgICAgZ2FtZXNbMTVdLFxyXG4gICAgICAgIGdhbWVzWzE2XSxcclxuICAgICAgICBnYW1lc1sxN10sXHJcbiAgICAgICAgZ2FtZXNbMThdLFxyXG4gICAgICAgIGdhbWVzWzE5XSxcclxuICAgICAgXTtcclxuICAgIGNhc2UgXCJub3JtaWVcIjpcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgY2FzZSBcIm5ldGZsaXhfYW5kX2NoaWxsXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgZ2FtZXNbMjBdLFxyXG4gICAgICAgIGdhbWVzWzIxXSxcclxuICAgICAgICBnYW1lc1syMl0sXHJcbiAgICAgICAgZ2FtZXNbMjNdLFxyXG4gICAgICAgIGdhbWVzWzI0XSxcclxuICAgICAgICBnYW1lc1syNV0sXHJcbiAgICAgICAgZ2FtZXNbMjZdLFxyXG4gICAgICAgIGdhbWVzWzI3XSxcclxuICAgICAgICBnYW1lc1sxNV0sXHJcbiAgICAgICAgZ2FtZXNbMTZdLFxyXG4gICAgICAgIGdhbWVzWzE3XSxcclxuICAgICAgICBnYW1lc1sxOF0sXHJcbiAgICAgIF07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZ0NvbG9yU3dpdGNoKHJvdXRlKSB7XHJcbiAgc3dpdGNoIChyb3V0ZSkge1xyXG4gICAgY2FzZSBcImFkZGljdGVkX2d1eVwiOlxyXG4gICAgICByZXR1cm4gXCJncmVlbi0xMDBcIjtcclxuICAgIGNhc2UgXCJub3JtaWVcIjpcclxuICAgICAgcmV0dXJuIFwiYmx1ZS0xMDBcIjtcclxuICAgIGNhc2UgXCJuZXRmbGl4X2FuZF9jaGlsbFwiOlxyXG4gICAgICByZXR1cm4gXCJyZWQtMTAwXCI7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSG9tZVByb3BzIHt9XHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHJvdXRlIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgYXBwcyA9IHJvdXRlU3dpdGNoKHJvdXRlKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG5ldyBBcnJheSgxMikuZmlsbChmYWxzZSkvKltmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0qLyk7XHJcbiAgY29uc29sZS5sb2coYXBwcy5sZW5ndGgpXHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWQubGVuZ3RoKVxyXG5cclxuICBjb25zdCBiZ0NvbG9yID0gYmdDb2xvclN3aXRjaChyb3V0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIHctZnVsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBiZy0ke2JnQ29sb3J9IGZsZXgtY29sIHB0LTQwIGRhcms6YmctZ3JheS05MDBgfVxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC10aXRsZSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNiBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICDXkdeQ15nXnNeVINee16nXl9en15nXnSDXldeq15XXm9eg15XXqiDXkNeq15Qg157Xqdeq157XqT9cclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCB3LWZ1bGwgbXgtYXV0byBtYXgtdy03eGxcIj5cclxuICAgICAgICB7YXBwcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgIDxJbWFnZUNhcmRcclxuICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZChzZWxlY3RlZC5tYXAoKGFwcCwgaW5kZXgpID0+IChpbmRleCA9PT0gaT8gIWFwcCA6IGFwcCkpKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOZXh0QnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfSAvL9eq157XnNeQINeQ15XXqteZXHJcbiAgICAgICAgdGV4dD1cItee16LXkdeoINec15PXoyDXlNeR15BcIlxyXG4gICAgICAgIGJnQ29sb3I9XCJncmF5LTUwXCJcclxuICAgICAgICBsaW5rPXtgL3Jlc29sdXRpb24/cm91dGU9JHtyb3V0ZX1gfVxyXG4gICAgICA+PC9OZXh0QnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=