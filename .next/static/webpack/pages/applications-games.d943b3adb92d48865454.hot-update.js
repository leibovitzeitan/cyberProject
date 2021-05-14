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
/* harmony import */ var E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ImageCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageCard */ "./components/ImageCard.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NextButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NextButton */ "./components/NextButton.tsx");
/* harmony import */ var _lib_games__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/games */ "./lib/games.ts");



var _jsxFileName = "E:\\Cyber\\yudbet\\maze meshane\\react\\pages\\applications-games.tsx",
    _this = undefined,
    _s = $RefreshSig$();







function routeSwitch(route) {
  switch (route) {
    case "addicted_guy":
      return [_lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][0], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][1], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][2], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][3], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][4], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][5], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][6], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][7], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][8], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][9], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][10], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][11], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][12], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][13], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][14], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][15], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][16], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][17], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][18], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][19]];

    case "normie":
      return [];

    case "netflix_and_chill":
      return [_lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][20], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][21], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][22], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][23], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][24], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][25], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][26], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][27], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][15], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][16], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][17], _lib_games__WEBPACK_IMPORTED_MODULE_6__["default"][18]];

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

function calculateScore(apps, selected) {
  var selectedGames = selected.map(function (item, i) {
    return item ? apps[i] : null;
  }).filter(function (item) {
    return item;
  });
  var cpuScore = Math.max.apply(Math, Object(E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(selectedGames.map(function (item) {
    return item.cpuScore;
  })));
  var gpuScore = Math.max.apply(Math, Object(E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(selectedGames.map(function (item) {
    return item.gpuScore;
  })));
  var ramScore = Math.max.apply(Math, Object(E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(selectedGames.map(function (item) {
    return item.ramAmount;
  })));
  return "cpu_" + cpuScore + "gpu_" + gpuScore + "ram_" + ramScore;
}

var Home = function Home(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var route = router.query.route;
  var apps = routeSwitch(route);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Array(0)),
      selected = _useState[0],
      setSelected = _useState[1];

  if (route && selected.length === 0) setSelected(new Array(apps.length).fill(false));
  var bgColor = bgColorSwitch(route);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center min-h-screen w-full transition duration-300 bg-".concat(bgColor, " flex-col pt-40 dark:bg-gray-900"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100",
      children: "\u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D5\u05EA\u05D5\u05DB\u05E0\u05D5\u05EA \u05D0\u05EA\u05D4 \u05DE\u05E9\u05EA\u05DE\u05E9?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl",
      children: apps.map(function (item, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          src: item.image,
          onClick: function onClick() {
            setSelected(selected.map(function (app, index) {
              return index === i ? !app : app;
            }));
            console.log(calculateScore(apps, selected));
          }
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NextButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      disabled: selected.every(function (app) {
        return app === false;
      }),
      text: "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D0",
      bgColor: "gray-50",
      link: "/resolution?route=".concat(route)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);
};

_s(Home, "d4qBjRgiU2k2VXSY+Y0FiakL+F0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJiZ0NvbG9yU3dpdGNoIiwiY2FsY3VsYXRlU2NvcmUiLCJhcHBzIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEdhbWVzIiwibWFwIiwiaXRlbSIsImkiLCJmaWx0ZXIiLCJjcHVTY29yZSIsIk1hdGgiLCJtYXgiLCJncHVTY29yZSIsInJhbVNjb3JlIiwicmFtQW1vdW50IiwiSG9tZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTdGF0ZSIsIkFycmF5Iiwic2V0U2VsZWN0ZWQiLCJsZW5ndGgiLCJmaWxsIiwiYmdDb2xvciIsImltYWdlIiwiYXBwIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZXZlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLFVBQVFBLEtBQVI7QUFDRSxTQUFLLGNBQUw7QUFDRSxhQUFPLENBQ0xDLGtEQUFLLENBQUMsQ0FBRCxDQURBLEVBRUxBLGtEQUFLLENBQUMsQ0FBRCxDQUZBLEVBR0xBLGtEQUFLLENBQUMsQ0FBRCxDQUhBLEVBSUxBLGtEQUFLLENBQUMsQ0FBRCxDQUpBLEVBS0xBLGtEQUFLLENBQUMsQ0FBRCxDQUxBLEVBTUxBLGtEQUFLLENBQUMsQ0FBRCxDQU5BLEVBT0xBLGtEQUFLLENBQUMsQ0FBRCxDQVBBLEVBUUxBLGtEQUFLLENBQUMsQ0FBRCxDQVJBLEVBU0xBLGtEQUFLLENBQUMsQ0FBRCxDQVRBLEVBVUxBLGtEQUFLLENBQUMsQ0FBRCxDQVZBLEVBV0xBLGtEQUFLLENBQUMsRUFBRCxDQVhBLEVBWUxBLGtEQUFLLENBQUMsRUFBRCxDQVpBLEVBYUxBLGtEQUFLLENBQUMsRUFB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QUFDLGdFQUZQO0FBR0UsYUFBTyxFQUFDLFNBSFY7QUFJRSxVQUFJLDhCQUF1QjdCLEtBQXZCO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZCRCxDQXRDRDs7R0FBTWlCLEk7VUFDV0cscUQ7OztLQURYSCxJO0FBd0NTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHBsaWNhdGlvbnMtZ2FtZXMuZDk0M2IzYWRiOTJkNDg4NjU0NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0ltYWdlQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV4dEJ1dHRvblwiO1xyXG5pbXBvcnQgZ2FtZXMsIHsgR2FtZSB9IGZyb20gXCIuLi9saWIvZ2FtZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJvdXRlU3dpdGNoKHJvdXRlKSB7XHJcbiAgc3dpdGNoIChyb3V0ZSkge1xyXG4gICAgY2FzZSBcImFkZGljdGVkX2d1eVwiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIGdhbWVzWzBdLFxyXG4gICAgICAgIGdhbWVzWzFdLFxyXG4gICAgICAgIGdhbWVzWzJdLFxyXG4gICAgICAgIGdhbWVzWzNdLFxyXG4gICAgICAgIGdhbWVzWzRdLFxyXG4gICAgICAgIGdhbWVzWzVdLFxyXG4gICAgICAgIGdhbWVzWzZdLFxyXG4gICAgICAgIGdhbWVzWzddLFxyXG4gICAgICAgIGdhbWVzWzhdLFxyXG4gICAgICAgIGdhbWVzWzldLFxyXG4gICAgICAgIGdhbWVzWzEwXSxcclxuICAgICAgICBnYW1lc1sxMV0sXHJcbiAgICAgICAgZ2FtZXNbMTJdLFxyXG4gICAgICAgIGdhbWVzWzEzXSxcclxuICAgICAgICBnYW1lc1sxNF0sXHJcbiAgICAgICAgZ2FtZXNbMTVdLFxyXG4gICAgICAgIGdhbWVzWzE2XSxcclxuICAgICAgICBnYW1lc1sxN10sXHJcbiAgICAgICAgZ2FtZXNbMThdLFxyXG4gICAgICAgIGdhbWVzWzE5XSxcclxuICAgICAgXTtcclxuICAgIGNhc2UgXCJub3JtaWVcIjpcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgY2FzZSBcIm5ldGZsaXhfYW5kX2NoaWxsXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgZ2FtZXNbMjBdLFxyXG4gICAgICAgIGdhbWVzWzIxXSxcclxuICAgICAgICBnYW1lc1syMl0sXHJcbiAgICAgICAgZ2FtZXNbMjNdLFxyXG4gICAgICAgIGdhbWVzWzI0XSxcclxuICAgICAgICBnYW1lc1syNV0sXHJcbiAgICAgICAgZ2FtZXNbMjZdLFxyXG4gICAgICAgIGdhbWVzWzI3XSxcclxuICAgICAgICBnYW1lc1sxNV0sXHJcbiAgICAgICAgZ2FtZXNbMTZdLFxyXG4gICAgICAgIGdhbWVzWzE3XSxcclxuICAgICAgICBnYW1lc1sxOF0sXHJcbiAgICAgIF07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZ0NvbG9yU3dpdGNoKHJvdXRlKSB7XHJcbiAgc3dpdGNoIChyb3V0ZSkge1xyXG4gICAgY2FzZSBcImFkZGljdGVkX2d1eVwiOlxyXG4gICAgICByZXR1cm4gXCJncmVlbi0xMDBcIjtcclxuICAgIGNhc2UgXCJub3JtaWVcIjpcclxuICAgICAgcmV0dXJuIFwiYmx1ZS0xMDBcIjtcclxuICAgIGNhc2UgXCJuZXRmbGl4X2FuZF9jaGlsbFwiOlxyXG4gICAgICByZXR1cm4gXCJyZWQtMTAwXCI7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVTY29yZShhcHBzOiBHYW1lW10sIHNlbGVjdGVkOiBib29sZWFuW10pIHtcclxuICBjb25zdCBzZWxlY3RlZEdhbWVzID0gc2VsZWN0ZWRcclxuICAgIC5tYXAoKGl0ZW0sIGkpID0+IChpdGVtID8gYXBwc1tpXSA6IG51bGwpKVxyXG4gICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XHJcbiAgY29uc3QgY3B1U2NvcmUgPSBNYXRoLm1heCguLi5zZWxlY3RlZEdhbWVzLm1hcCgoaXRlbSkgPT4gaXRlbS5jcHVTY29yZSkpO1xyXG4gIGNvbnN0IGdwdVNjb3JlID0gTWF0aC5tYXgoLi4uc2VsZWN0ZWRHYW1lcy5tYXAoKGl0ZW0pID0+IGl0ZW0uZ3B1U2NvcmUpKTtcclxuICBjb25zdCByYW1TY29yZSA9IE1hdGgubWF4KC4uLnNlbGVjdGVkR2FtZXMubWFwKChpdGVtKSA9PiBpdGVtLnJhbUFtb3VudCkpO1xyXG4gIHJldHVybiBcImNwdV9cIiArIGNwdVNjb3JlICsgXCJncHVfXCIgKyBncHVTY29yZSArIFwicmFtX1wiICsgcmFtU2NvcmU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBIb21lUHJvcHMge31cclxuY29uc3QgSG9tZTogUmVhY3QuRkM8SG9tZVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcm91dGUgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBhcHBzID0gcm91dGVTd2l0Y2gocm91dGUpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobmV3IEFycmF5KDApKTtcclxuICBpZiAocm91dGUgJiYgc2VsZWN0ZWQubGVuZ3RoID09PSAwKVxyXG4gICAgc2V0U2VsZWN0ZWQobmV3IEFycmF5KGFwcHMubGVuZ3RoKS5maWxsKGZhbHNlKSk7XHJcblxyXG4gIGNvbnN0IGJnQ29sb3IgPSBiZ0NvbG9yU3dpdGNoKHJvdXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gdy1mdWxsIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGJnLSR7YmdDb2xvcn0gZmxleC1jb2wgcHQtNDAgZGFyazpiZy1ncmF5LTkwMGB9XHJcbiAgICA+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXRpdGxlIHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTE2IGRhcms6dGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICAgINeR15DXmdec15Ug157XqdeX16fXmdedINeV16rXldeb16DXldeqINeQ16rXlCDXntep16rXntepP1xyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHctZnVsbCBteC1hdXRvIG1heC13LTd4bFwiPlxyXG4gICAgICAgIHthcHBzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgPEltYWdlQ2FyZFxyXG4gICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQubWFwKChhcHAsIGluZGV4KSA9PiAoaW5kZXggPT09IGkgPyAhYXBwIDogYXBwKSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZVNjb3JlKGFwcHMsIHNlbGVjdGVkKSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmV4dEJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZC5ldmVyeSgoYXBwKSA9PiBhcHAgPT09IGZhbHNlKX1cclxuICAgICAgICB0ZXh0PVwi157XoteR16gg15zXk9ejINeU15HXkFwiXHJcbiAgICAgICAgYmdDb2xvcj1cImdyYXktNTBcIlxyXG4gICAgICAgIGxpbms9e2AvcmVzb2x1dGlvbj9yb3V0ZT0ke3JvdXRlfWB9XHJcbiAgICAgID48L05leHRCdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==