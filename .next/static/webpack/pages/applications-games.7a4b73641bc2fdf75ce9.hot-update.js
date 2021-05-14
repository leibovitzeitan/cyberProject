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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Array[apps.length]()),
      selected = _useState[0],
      setSelected = _useState[1];

  var bgColor = bgColorSwitch(route);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center min-h-screen w-full transition duration-300 bg-".concat(bgColor, " flex-col pt-40 dark:bg-gray-900"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100",
      children: "\u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D5\u05EA\u05D5\u05DB\u05E0\u05D5\u05EA \u05D0\u05EA\u05D4 \u05DE\u05E9\u05EA\u05DE\u05E9?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl",
      children: apps.map(function (itemsrc, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ImageCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          src: itemsrc
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NextButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      disabled: false //תמלא אותי
      ,
      text: "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D0",
      bgColor: "gray-50",
      link: "/resolution?route=".concat(route)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, _this);
};

_s(Home, "xiLF1+VLaOqjEy9lvjGbmdcsyHI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJiZ0NvbG9yU3dpdGNoIiwiSG9tZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJhcHBzIiwidXNlU3RhdGUiLCJBcnJheSIsImxlbmd0aCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJiZ0NvbG9yIiwibWFwIiwiaXRlbXNyYyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQixVQUFRQSxLQUFSO0FBQ0UsU0FBSyxjQUFMO0FBQ0UsYUFBTyxDQUNMQyxrREFBSyxDQUFDLENBQUQsQ0FEQSxFQUVMQSxrREFBSyxDQUFDLENBQUQsQ0FGQSxFQUdMQSxrREFBSyxDQUFDLENBQUQsQ0FIQSxFQUlMQSxrREFBSyxDQUFDLENBQUQsQ0FKQSxFQUtMQSxrREFBSyxDQUFDLENBQUQsQ0FMQSxFQU1MQSxrREFBSyxDQUFDLENBQUQsQ0FOQSxFQU9MQSxrREFBSyxDQUFDLENBQUQsQ0FQQSxFQVFMQSxrREFBSyxDQUFDLENBQUQsQ0FSQSxFQVNMQSxrREFBSyxDQUFDLENBQUQsQ0FUQSxFQVVMQSxrREFBSyxDQUFDLENBQUQsQ0FWQSxFQVdMQSxrREFBSyxDQUFDLEVBQUQsQ0FYQSxFQVlMQSxrREFBSyxDQUFDLEVBQUQsQ0FaQSxFQWFMQSxrREFBSyxDQUFDLEVBQUQsQ0FiQSxFQWNMQSxrREFBSyxDQUFDLEVBQUQsQ0FkQSxFQWVMQSxrREFBSyxDQUFDLEVBQUQsQ0FmQSxFQWdCTEEsa0RBQUssQ0FBQyxFQUFELENBaEJBLEVBaUJMQSxrREFBSyxDQUFDLEVBQUQsQ0FqQkEsRUFrQkxBLGtEQUFLLENBQUMsRUFBRCxDQWxCQSxFQW1CTEEsa0RBQUssQ0FBQyxFQUFELENBbkJBLEVBb0JMQSxrREFBSyxDQUFDLEVBQUQsQ0FwQkEsQ0FBUDs7QUFzQkYsU0FBSyxRQUFMO0FBQ0UsYUFBTyxFQUFQOztBQUNGLFNBQUssbUJBQUw7QUFDRSxhQUFPLENBQ0xBLGtEQUFLLENBQUMsRUFBRCxDQURBLEVBRUxBLGtEQUFLLENBQUMsRUFBRCxDQUZBLEVBR0xBLGtEQUFLLENBQUMsRUFBRCxDQUhBLEVBSUxBLGtEQUFLLENBQUMsRUFBRCxDQUpBLEVBS0xBLGtEQUFLLENBQUMsRUFBRCxDQUxBLEVBTUxBLGtEQUFLLENBQUMsRUFBRCxDQU5BLEVBT0xBLGtEQUFLLENBQUMsRUFBRCxDQVBBLEVBUUxBLGtEQUFLLENBQUMsRUFBRCxDQVJBLEVBU0xBLGtEQUFLLENBQUMsRUFBRCxDQVRBLEVBVUxBLGtEQUFLLENBQUMsRUFBRCxDQVZBLEVBV0xBLGtEQUFLLENBQUMsRUFBRCxDQVhBLEVBWUxBLGtEQUFLLENBQUMsRUFBRCxDQVpBLENBQVA7O0FBY0Y7QUFDRSxhQUFPLEVBQVA7QUExQ0o7QUE0Q0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkYsS0FBdkIsRUFBOEI7QUFDNUIsVUFBUUEsS0FBUjtBQUNFLFNBQUssY0FBTDtBQUNFLGFBQU8sV0FBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLFVBQVA7O0FBQ0YsU0FBSyxtQkFBTDtBQUNFLGFBQU8sU0FBUDs7QUFFRjtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBR0QsSUFBTUcsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzNDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEMkMsTUFFbkNOLEtBRm1DLEdBRXpCSyxNQUFNLENBQUNFLEtBRmtCLENBRW5DUCxLQUZtQztBQUczQyxNQUFNUSxJQUFJLEdBQUdULFdBQVcsQ0FBQ0MsS0FBRCxDQUF4Qjs7QUFIMkMsa0JBSVhTLHNEQUFRLENBQUMsSUFBSUMsS0FBSyxDQUFDRixJQUFJLENBQUNHLE1BQU4sQ0FBVCxFQUFELENBSkc7QUFBQSxNQUlwQ0MsUUFKb0M7QUFBQSxNQUkxQkMsV0FKMEI7O0FBTTNDLE1BQU1DLE9BQU8sR0FBR1osYUFBYSxDQUFDRixLQUFELENBQTdCO0FBQ0Esc0JBQ0U7QUFDRSxhQUFTLDZFQUFzRWMsT0FBdEUscUNBRFg7QUFBQSw0QkFHRTtBQUFJLGVBQVMsRUFBQyxzRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBTUU7QUFBSyxlQUFTLEVBQUMsb0VBQWY7QUFBQSxnQkFDR04sSUFBSSxDQUFDTyxHQUFMLENBQVMsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWO0FBQUEsNEJBQ1IscUVBQUMsNkRBQUQ7QUFBVyxhQUFHLEVBQUVEO0FBQWhCLFdBQThCQyxDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQVdFLHFFQUFDLDhEQUFEO0FBQ0UsY0FBUSxFQUFJLEtBRGQsQ0FDb0I7QUFEcEI7QUFFRSxVQUFJLEVBQUMsZ0VBRlA7QUFHRSxhQUFPLEVBQUMsU0FIVjtBQUlFLFVBQUksOEJBQXVCakIsS0FBdkI7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0EzQkQ7O0dBQU1HLEk7VUFDV0cscUQ7OztLQURYSCxJO0FBNkJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHBsaWNhdGlvbnMtZ2FtZXMuN2E0YjczNjQxYmMyZmRmNzVjZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0ltYWdlQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV4dEJ1dHRvblwiO1xyXG5pbXBvcnQgZ2FtZXMgZnJvbSBcIi4uL2xpYi9nYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gcm91dGVTd2l0Y2gocm91dGUpIHtcclxuICBzd2l0Y2ggKHJvdXRlKSB7XHJcbiAgICBjYXNlIFwiYWRkaWN0ZWRfZ3V5XCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgZ2FtZXNbMF0sXHJcbiAgICAgICAgZ2FtZXNbMV0sXHJcbiAgICAgICAgZ2FtZXNbMl0sXHJcbiAgICAgICAgZ2FtZXNbM10sXHJcbiAgICAgICAgZ2FtZXNbNF0sXHJcbiAgICAgICAgZ2FtZXNbNV0sXHJcbiAgICAgICAgZ2FtZXNbNl0sXHJcbiAgICAgICAgZ2FtZXNbN10sXHJcbiAgICAgICAgZ2FtZXNbOF0sXHJcbiAgICAgICAgZ2FtZXNbOV0sXHJcbiAgICAgICAgZ2FtZXNbMTBdLFxyXG4gICAgICAgIGdhbWVzWzExXSxcclxuICAgICAgICBnYW1lc1sxMl0sXHJcbiAgICAgICAgZ2FtZXNbMTNdLFxyXG4gICAgICAgIGdhbWVzWzE0XSxcclxuICAgICAgICBnYW1lc1sxNV0sXHJcbiAgICAgICAgZ2FtZXNbMTZdLFxyXG4gICAgICAgIGdhbWVzWzE3XSxcclxuICAgICAgICBnYW1lc1sxOF0sXHJcbiAgICAgICAgZ2FtZXNbMTldLFxyXG4gICAgICBdO1xyXG4gICAgY2FzZSBcIm5vcm1pZVwiOlxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBnYW1lc1syMF0sXHJcbiAgICAgICAgZ2FtZXNbMjFdLFxyXG4gICAgICAgIGdhbWVzWzIyXSxcclxuICAgICAgICBnYW1lc1syM10sXHJcbiAgICAgICAgZ2FtZXNbMjRdLFxyXG4gICAgICAgIGdhbWVzWzI1XSxcclxuICAgICAgICBnYW1lc1syNl0sXHJcbiAgICAgICAgZ2FtZXNbMjddLFxyXG4gICAgICAgIGdhbWVzWzE1XSxcclxuICAgICAgICBnYW1lc1sxNl0sXHJcbiAgICAgICAgZ2FtZXNbMTddLFxyXG4gICAgICAgIGdhbWVzWzE4XSxcclxuICAgICAgXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJnQ29sb3JTd2l0Y2gocm91dGUpIHtcclxuICBzd2l0Y2ggKHJvdXRlKSB7XHJcbiAgICBjYXNlIFwiYWRkaWN0ZWRfZ3V5XCI6XHJcbiAgICAgIHJldHVybiBcImdyZWVuLTEwMFwiO1xyXG4gICAgY2FzZSBcIm5vcm1pZVwiOlxyXG4gICAgICByZXR1cm4gXCJibHVlLTEwMFwiO1xyXG4gICAgY2FzZSBcIm5ldGZsaXhfYW5kX2NoaWxsXCI6XHJcbiAgICAgIHJldHVybiBcInJlZC0xMDBcIjtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBIb21lUHJvcHMge31cclxuY29uc3QgSG9tZTogUmVhY3QuRkM8SG9tZVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcm91dGUgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBhcHBzID0gcm91dGVTd2l0Y2gocm91dGUpXHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShuZXcgQXJyYXlbYXBwcy5sZW5ndGhdKTtcclxuXHJcbiAgY29uc3QgYmdDb2xvciA9IGJnQ29sb3JTd2l0Y2gocm91dGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiB3LWZ1bGwgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgYmctJHtiZ0NvbG9yfSBmbGV4LWNvbCBwdC00MCBkYXJrOmJnLWdyYXktOTAwYH1cclxuICAgID5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtdGl0bGUgdGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMTYgZGFyazp0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAg15HXkNeZ15zXlSDXntep15fXp9eZ150g15XXqteV15vXoNeV16og15DXqteUINee16nXqtee16k/XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgdy1mdWxsIG14LWF1dG8gbWF4LXctN3hsXCI+XHJcbiAgICAgICAge2FwcHMubWFwKChpdGVtc3JjLCBpKSA9PiAoXHJcbiAgICAgICAgICA8SW1hZ2VDYXJkIHNyYz17aXRlbXNyY30ga2V5PXtpfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5leHRCdXR0b25cclxuICAgICAgICBkaXNhYmxlZCA9IHtmYWxzZX0vL9eq157XnNeQINeQ15XXqteZXHJcbiAgICAgICAgdGV4dD1cItee16LXkdeoINec15PXoyDXlNeR15BcIlxyXG4gICAgICAgIGJnQ29sb3I9XCJncmF5LTUwXCJcclxuICAgICAgICBsaW5rPXtgL3Jlc29sdXRpb24/cm91dGU9JHtyb3V0ZX1gfVxyXG4gICAgICA+PC9OZXh0QnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=