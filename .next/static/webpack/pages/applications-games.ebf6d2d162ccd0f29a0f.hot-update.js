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

function calculateScore(route, selected) {}

var Home = function Home(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var route = router.query.route;
  var apps = routeSwitch(route);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Array(0)),
      selected = _useState[0],
      setSelected = _useState[1];

  if (route && selected.length === 0) setSelected(new Array(apps.length).fill(false));

  var allEqual = function allEqual(arr) {
    return arr.every(function (v) {
      return v === arr[0];
    });
  };

  var bgColor = bgColorSwitch(route);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center min-h-screen w-full transition duration-300 bg-".concat(bgColor, " flex-col pt-40 dark:bg-gray-900"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100",
      children: "\u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D5\u05EA\u05D5\u05DB\u05E0\u05D5\u05EA \u05D0\u05EA\u05D4 \u05DE\u05E9\u05EA\u05DE\u05E9?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
          lineNumber: 92,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NextButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      disabled: selected.every(function (app) {
        return app === false;
      }),
      text: "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D0",
      bgColor: "gray-50",
      link: "/resolution?route=".concat(route)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, _this);
};

_s(Home, "d4qBjRgiU2k2VXSY+Y0FiakL+F0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJiZ0NvbG9yU3dpdGNoIiwiY2FsY3VsYXRlU2NvcmUiLCJzZWxlY3RlZCIsIkhvbWUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiYXBwcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJzZXRTZWxlY3RlZCIsImxlbmd0aCIsImZpbGwiLCJhbGxFcXVhbCIsImFyciIsImV2ZXJ5IiwidiIsImJnQ29sb3IiLCJtYXAiLCJpdGVtIiwiaSIsImltYWdlIiwiYXBwIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUIsVUFBUUEsS0FBUjtBQUNFLFNBQUssY0FBTDtBQUNFLGFBQU8sQ0FDTEMsa0RBQUssQ0FBQyxDQUFELENBREEsRUFFTEEsa0RBQUssQ0FBQyxDQUFELENBRkEsRUFHTEEsa0RBQUssQ0FBQyxDQUFELENBSEEsRUFJTEEsa0RBQUssQ0FBQyxDQUFELENBSkEsRUFLTEEsa0RBQUssQ0FBQyxDQUFELENBTEEsRUFNTEEsa0RBQUssQ0FBQyxDQUFELENBTkEsRUFPTEEsa0RBQUssQ0FBQyxDQUFELENBUEEsRUFRTEEsa0RBQUssQ0FBQyxDQUFELENBUkEsRUFTTEEsa0RBQUssQ0FBQyxDQUFELENBVEEsRUFVTEEsa0RBQUssQ0FBQyxDQUFELENBVkEsRUFXTEEsa0RBQUssQ0FBQyxFQUFELENBWEEsRUFZTEEsa0RBQUssQ0FBQyxFQUFELENBWkEsRUFhTEEsa0RBQUssQ0FBQyxFQUFELENBYkEsRUFjTEEsa0RBQUssQ0FBQyxFQUFELENBZEEsRUFlTEEsa0RBQUssQ0FBQyxFQUFELENBZkEsRUFnQkxBLGtEQUFLLENBQUMsRUFBRCxDQWhCQSxFQWlCTEEsa0RBQUssQ0FBQyxFQUFELENBakJBLEVBa0JMQSxrREFBSyxDQUFDLEVBQUQsQ0FsQkEsRUFtQkxBLGtEQUFLLENBQUMsRUFBRCxDQW5CQSxFQW9CTEEsa0RBQUssQ0FBQyxFQUFELENBcEJBLENBQVA7O0FBc0JGLFNBQUssUUFBTDtBQUNFLGFBQU8sRUFBUDs7QUFDRixTQUFLLG1CQUFMO0FBQ0UsYUFBTyxDQUNMQSxrREFBSyxDQUFDLEVBQUQsQ0FEQSxFQUVMQSxrREFBSyxDQUFDLEVBQUQsQ0FGQSxFQUdMQSxrREFBSyxDQUFDLEVBQUQsQ0FIQSxFQUlMQSxrREFBSyxDQUFDLEVBQUQsQ0FKQSxFQUtMQSxrREFBSyxDQUFDLEVBQUQsQ0FMQSxFQU1MQSxrREFBSyxDQUFDLEVBQUQsQ0FOQSxFQU9MQSxrREFBSyxDQUFDLEVBQUQsQ0FQQSxFQVFMQSxrREFBSyxDQUFDLEVBQUQsQ0FSQSxFQVNMQSxrREFBSyxDQUFDLEVBQUQsQ0FUQSxFQVVMQSxrREFBSyxDQUFDLEVBQUQsQ0FWQSxFQVdMQSxrREFBSyxDQUFDLEVBQUQsQ0FYQSxFQVlMQSxrREFBSyxDQUFDLEVBQUQsQ0FaQSxDQUFQOztBQWNGO0FBQ0UsYUFBTyxFQUFQO0FBMUNKO0FBNENEOztBQUVELFNBQVNDLGFBQVQsQ0FBdUJGLEtBQXZCLEVBQThCO0FBQzVCLFVBQVFBLEtBQVI7QUFDRSxTQUFLLGNBQUw7QUFDRSxhQUFPLFdBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsYUFBTyxVQUFQOztBQUNGLFNBQUssbUJBQUw7QUFDRSxhQUFPLFNBQVA7O0FBRUY7QUFDRSxhQUFPLEVBQVA7QUFUSjtBQVdEOztBQUVELFNBQVNHLGNBQVQsQ0FBd0JILEtBQXhCLEVBQStCSSxRQUEvQixFQUF5QyxDQUV4Qzs7QUFHRCxJQUFNQyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDM0MsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQyQyxNQUVuQ1IsS0FGbUMsR0FFekJPLE1BQU0sQ0FBQ0UsS0FGa0IsQ0FFbkNULEtBRm1DO0FBRzNDLE1BQU1VLElBQUksR0FBR1gsV0FBVyxDQUFDQyxLQUFELENBQXhCOztBQUgyQyxrQkFJWFcsc0RBQVEsQ0FBQyxJQUFJQyxLQUFKLENBQVUsQ0FBVixDQUFELENBSkc7QUFBQSxNQUlwQ1IsUUFKb0M7QUFBQSxNQUkxQlMsV0FKMEI7O0FBSzNDLE1BQUliLEtBQUssSUFBSUksUUFBUSxDQUFDVSxNQUFULEtBQW9CLENBQWpDLEVBQ0VELFdBQVcsQ0FBQyxJQUFJRCxLQUFKLENBQVVGLElBQUksQ0FBQ0ksTUFBZixFQUF1QkMsSUFBdkIsQ0FBNEIsS0FBNUIsQ0FBRCxDQUFYOztBQUNGLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNDLEtBQUosQ0FBVSxVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxLQUFLRixHQUFHLENBQUMsQ0FBRCxDQUFoQjtBQUFBLEtBQVYsQ0FBVDtBQUFBLEdBQWpCOztBQUVBLE1BQU1HLE9BQU8sR0FBR2xCLGFBQWEsQ0FBQ0YsS0FBRCxDQUE3QjtBQUNBLHNCQUNFO0FBQ0UsYUFBUyw2RUFBc0VvQixPQUF0RSxxQ0FEWDtBQUFBLDRCQUdFO0FBQUksZUFBUyxFQUFDLHNFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFNRTtBQUFLLGVBQVMsRUFBQyxvRUFBZjtBQUFBLGdCQUNHVixJQUFJLENBQUNXLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSw0QkFDUixxRUFBQyw2REFBRDtBQUNFLGFBQUcsRUFBRUQsSUFBSSxDQUFDRSxLQURaO0FBR0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiWCx1QkFBVyxDQUNUVCxRQUFRLENBQUNpQixHQUFULENBQWEsVUFBQ0ksR0FBRCxFQUFNQyxLQUFOO0FBQUEscUJBQWlCQSxLQUFLLEtBQUtILENBQVYsR0FBYyxDQUFDRSxHQUFmLEdBQXFCQSxHQUF0QztBQUFBLGFBQWIsQ0FEUyxDQUFYO0FBR0FFLG1CQUFPLENBQUNDLEdBQVIsQ0FBWXhCLFFBQVo7QUFDRDtBQVJILFdBRU9tQixDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBb0JFLHFFQUFDLDhEQUFEO0FBQ0UsY0FBUSxFQUFFbkIsUUFBUSxDQUFDYyxLQUFULENBQWUsVUFBQ08sR0FBRDtBQUFBLGVBQVNBLEdBQUcsS0FBSyxLQUFqQjtBQUFBLE9BQWYsQ0FEWjtBQUVFLFVBQUksRUFBQyxnRUFGUDtBQUdFLGFBQU8sRUFBQyxTQUhWO0FBSUUsVUFBSSw4QkFBdUJ6QixLQUF2QjtBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2QkQsQ0F2Q0Q7O0dBQU1LLEk7VUFDV0cscUQ7OztLQURYSCxJO0FBeUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHBsaWNhdGlvbnMtZ2FtZXMuZWJmNmQyZDE2MmNjZDBmMjlhMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0ltYWdlQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV4dEJ1dHRvblwiO1xyXG5pbXBvcnQgZ2FtZXMgZnJvbSBcIi4uL2xpYi9nYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gcm91dGVTd2l0Y2gocm91dGUpIHtcclxuICBzd2l0Y2ggKHJvdXRlKSB7XHJcbiAgICBjYXNlIFwiYWRkaWN0ZWRfZ3V5XCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgZ2FtZXNbMF0sXHJcbiAgICAgICAgZ2FtZXNbMV0sXHJcbiAgICAgICAgZ2FtZXNbMl0sXHJcbiAgICAgICAgZ2FtZXNbM10sXHJcbiAgICAgICAgZ2FtZXNbNF0sXHJcbiAgICAgICAgZ2FtZXNbNV0sXHJcbiAgICAgICAgZ2FtZXNbNl0sXHJcbiAgICAgICAgZ2FtZXNbN10sXHJcbiAgICAgICAgZ2FtZXNbOF0sXHJcbiAgICAgICAgZ2FtZXNbOV0sXHJcbiAgICAgICAgZ2FtZXNbMTBdLFxyXG4gICAgICAgIGdhbWVzWzExXSxcclxuICAgICAgICBnYW1lc1sxMl0sXHJcbiAgICAgICAgZ2FtZXNbMTNdLFxyXG4gICAgICAgIGdhbWVzWzE0XSxcclxuICAgICAgICBnYW1lc1sxNV0sXHJcbiAgICAgICAgZ2FtZXNbMTZdLFxyXG4gICAgICAgIGdhbWVzWzE3XSxcclxuICAgICAgICBnYW1lc1sxOF0sXHJcbiAgICAgICAgZ2FtZXNbMTldLFxyXG4gICAgICBdO1xyXG4gICAgY2FzZSBcIm5vcm1pZVwiOlxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBnYW1lc1syMF0sXHJcbiAgICAgICAgZ2FtZXNbMjFdLFxyXG4gICAgICAgIGdhbWVzWzIyXSxcclxuICAgICAgICBnYW1lc1syM10sXHJcbiAgICAgICAgZ2FtZXNbMjRdLFxyXG4gICAgICAgIGdhbWVzWzI1XSxcclxuICAgICAgICBnYW1lc1syNl0sXHJcbiAgICAgICAgZ2FtZXNbMjddLFxyXG4gICAgICAgIGdhbWVzWzE1XSxcclxuICAgICAgICBnYW1lc1sxNl0sXHJcbiAgICAgICAgZ2FtZXNbMTddLFxyXG4gICAgICAgIGdhbWVzWzE4XSxcclxuICAgICAgXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJnQ29sb3JTd2l0Y2gocm91dGUpIHtcclxuICBzd2l0Y2ggKHJvdXRlKSB7XHJcbiAgICBjYXNlIFwiYWRkaWN0ZWRfZ3V5XCI6XHJcbiAgICAgIHJldHVybiBcImdyZWVuLTEwMFwiO1xyXG4gICAgY2FzZSBcIm5vcm1pZVwiOlxyXG4gICAgICByZXR1cm4gXCJibHVlLTEwMFwiO1xyXG4gICAgY2FzZSBcIm5ldGZsaXhfYW5kX2NoaWxsXCI6XHJcbiAgICAgIHJldHVybiBcInJlZC0xMDBcIjtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVNjb3JlKHJvdXRlLCBzZWxlY3RlZCkge1xyXG4gIFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSG9tZVByb3BzIHt9XHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHJvdXRlIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgYXBwcyA9IHJvdXRlU3dpdGNoKHJvdXRlKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG5ldyBBcnJheSgwKSk7XHJcbiAgaWYgKHJvdXRlICYmIHNlbGVjdGVkLmxlbmd0aCA9PT0gMClcclxuICAgIHNldFNlbGVjdGVkKG5ldyBBcnJheShhcHBzLmxlbmd0aCkuZmlsbChmYWxzZSkpO1xyXG4gIGNvbnN0IGFsbEVxdWFsID0gKGFycikgPT4gYXJyLmV2ZXJ5KCh2KSA9PiB2ID09PSBhcnJbMF0pO1xyXG5cclxuICBjb25zdCBiZ0NvbG9yID0gYmdDb2xvclN3aXRjaChyb3V0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIHctZnVsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBiZy0ke2JnQ29sb3J9IGZsZXgtY29sIHB0LTQwIGRhcms6YmctZ3JheS05MDBgfVxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC10aXRsZSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNiBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICDXkdeQ15nXnNeVINee16nXl9en15nXnSDXldeq15XXm9eg15XXqiDXkNeq15Qg157Xqdeq157XqT9cclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCB3LWZ1bGwgbXgtYXV0byBtYXgtdy03eGxcIj5cclxuICAgICAgICB7YXBwcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgIDxJbWFnZUNhcmRcclxuICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZChcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLm1hcCgoYXBwLCBpbmRleCkgPT4gKGluZGV4ID09PSBpID8gIWFwcCA6IGFwcCkpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5leHRCdXR0b25cclxuICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWQuZXZlcnkoKGFwcCkgPT4gYXBwID09PSBmYWxzZSl9XHJcbiAgICAgICAgdGV4dD1cItee16LXkdeoINec15PXoyDXlNeR15BcIlxyXG4gICAgICAgIGJnQ29sb3I9XCJncmF5LTUwXCJcclxuICAgICAgICBsaW5rPXtgL3Jlc29sdXRpb24/cm91dGU9JHtyb3V0ZX1gfVxyXG4gICAgICA+PC9OZXh0QnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=