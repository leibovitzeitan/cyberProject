webpackHotUpdate_N_E("pages/applications-games",{

/***/ "./pages/applications-games.tsx":
/*!**************************************!*\
  !*** ./pages/applications-games.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ImageCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ImageCard */ "./components/ImageCard.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NextButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NextButton */ "./components/NextButton.tsx");
/* harmony import */ var _lib_games__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/games */ "./lib/games.ts");




var _jsxFileName = "E:\\Cyber\\yudbet\\maze meshane\\react\\pages\\applications-games.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function routeSwitch(route) {
  switch (route) {
    case "addicted_guy":
      return [_lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][0], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][1], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][2], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][3], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][4], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][5], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][6], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][7], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][8], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][9], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][10], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][11], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][12], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][13], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][14], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][15], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][16], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][17], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][18], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][19]];

    case "normie":
      return [];

    case "netflix_and_chill":
      return [_lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][20], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][21], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][22], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][23], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][24], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][25], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][26], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][27], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][15], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][16], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][17], _lib_games__WEBPACK_IMPORTED_MODULE_7__["default"][18]];

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
  var cpuScore = Math.max.apply(Math, Object(E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedGames.map(function (item) {
    return item.cpuScore;
  })));
  var gpuScore = Math.max.apply(Math, Object(E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedGames.map(function (item) {
    return item.gpuScore;
  })));
  var ramScore = Math.max.apply(Math, Object(E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedGames.map(function (item) {
    return item.ramAmount;
  })));
  return {
    cpu: cpuScore,
    gpu: gpuScore,
    ram: ramScore
  };
}

var Home = function Home(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var route = router.query.route;
  var apps = routeSwitch(route);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Array(0)),
      selected = _useState[0],
      setSelected = _useState[1];

  if (route && selected.length === 0) setSelected(new Array(apps.length).fill(false));
  var bgColor = bgColorSwitch(route);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "flex items-center min-h-screen w-full transition duration-300 bg-".concat(bgColor, " flex-col pt-40 dark:bg-gray-900"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      className: "font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100",
      children: "\u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D5\u05EA\u05D5\u05DB\u05E0\u05D5\u05EA \u05D0\u05EA\u05D4 \u05DE\u05E9\u05EA\u05DE\u05E9?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl",
      children: apps.map(function (item, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ImageCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          src: item.image,
          onClick: function onClick() {
            setSelected(selected.map(function (app, index) {
              return index === i ? !app : app;
            }));
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_NextButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      disabled: selected.every(function (app) {
        return app === false;
      }),
      text: "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D0",
      bgColor: "gray-50",
      link: "/resolution",
      query: _objectSpread({
        route: route
      }, calculateScore(apps, selected))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);
};

_s(Home, "d4qBjRgiU2k2VXSY+Y0FiakL+F0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJiZ0NvbG9yU3dpdGNoIiwiY2FsY3VsYXRlU2NvcmUiLCJhcHBzIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEdhbWVzIiwibWFwIiwiaXRlbSIsImkiLCJmaWx0ZXIiLCJjcHVTY29yZSIsIk1hdGgiLCJtYXgiLCJncHVTY29yZSIsInJhbVNjb3JlIiwicmFtQW1vdW50IiwiY3B1IiwiZ3B1IiwicmFtIiwiSG9tZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTdGF0ZSIsIkFycmF5Iiwic2V0U2VsZWN0ZWQiLCJsZW5ndGgiLCJmaWxsIiwiYmdDb2xvciIsImltYWdlIiwiYXBwIiwiaW5kZXgiLCJldmVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUIsVUFBUUEsS0FBUjtBQUNFLFNBQUssY0FBTDtBQUNFLGFBQU8sQ0FDTEMsa0RBQUssQ0FBQyxDQUFELENBREEsRUFFTEEsa0RBQUssQ0FBQyxDQUFELENBRkEsRUFHTEEsa0RBQUssQ0FBQyxDQUFELENBSEEsRUFJTEEsa0RBQUssQ0FBQyxDQUFELENBSkEsRUFLTEEsa0RBQUssQ0FBQyxDQUFELENBTEEsRUFNTEEsa0RBQUssQ0FBQyxDQUFELENBTkEsRUFPTEEsa0RBQUssQ0FBQyxDQUFELENBUEEsRUFRTEEsa0RBQUssQ0FBQyxDQUFELENBUkEsRUFTTEEsa0RBQUssQ0FBQyxDQUFELENBVEEsRUFVTEEsa0RBQUssQ0FBQyxDQUFELENBVkEsRUFXTEEsa0RBQUssQ0FBQyxFQUFELENBWEEsRUFZTEEsa0RBQUssQ0FBQyxFQUFELENBWkEsRUFhTEEsa0RBQUss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ZUFKTjtBQUtFLFdBQUs7QUFBSWhDLGFBQUssRUFBRUE7QUFBWCxTQUFxQkcsY0FBYyxDQUFDQyxJQUFELEVBQU9DLFFBQVAsQ0FBbkM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkJELENBdENEOztHQUFNZSxJO1VBQ1dHLHFEOzs7S0FEWEgsSTtBQXdDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLjQzZTU5ZGRkYjJmZjM1MjZmYzllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbWFnZUNhcmRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL05leHRCdXR0b25cIjtcclxuaW1wb3J0IGdhbWVzLCB7IEdhbWUgfSBmcm9tIFwiLi4vbGliL2dhbWVzXCI7XHJcblxyXG5mdW5jdGlvbiByb3V0ZVN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBnYW1lc1swXSxcclxuICAgICAgICBnYW1lc1sxXSxcclxuICAgICAgICBnYW1lc1syXSxcclxuICAgICAgICBnYW1lc1szXSxcclxuICAgICAgICBnYW1lc1s0XSxcclxuICAgICAgICBnYW1lc1s1XSxcclxuICAgICAgICBnYW1lc1s2XSxcclxuICAgICAgICBnYW1lc1s3XSxcclxuICAgICAgICBnYW1lc1s4XSxcclxuICAgICAgICBnYW1lc1s5XSxcclxuICAgICAgICBnYW1lc1sxMF0sXHJcbiAgICAgICAgZ2FtZXNbMTFdLFxyXG4gICAgICAgIGdhbWVzWzEyXSxcclxuICAgICAgICBnYW1lc1sxM10sXHJcbiAgICAgICAgZ2FtZXNbMTRdLFxyXG4gICAgICAgIGdhbWVzWzE1XSxcclxuICAgICAgICBnYW1lc1sxNl0sXHJcbiAgICAgICAgZ2FtZXNbMTddLFxyXG4gICAgICAgIGdhbWVzWzE4XSxcclxuICAgICAgICBnYW1lc1sxOV0sXHJcbiAgICAgIF07XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIGNhc2UgXCJuZXRmbGl4X2FuZF9jaGlsbFwiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIGdhbWVzWzIwXSxcclxuICAgICAgICBnYW1lc1syMV0sXHJcbiAgICAgICAgZ2FtZXNbMjJdLFxyXG4gICAgICAgIGdhbWVzWzIzXSxcclxuICAgICAgICBnYW1lc1syNF0sXHJcbiAgICAgICAgZ2FtZXNbMjVdLFxyXG4gICAgICAgIGdhbWVzWzI2XSxcclxuICAgICAgICBnYW1lc1syN10sXHJcbiAgICAgICAgZ2FtZXNbMTVdLFxyXG4gICAgICAgIGdhbWVzWzE2XSxcclxuICAgICAgICBnYW1lc1sxN10sXHJcbiAgICAgICAgZ2FtZXNbMThdLFxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmdDb2xvclN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFwiZ3JlZW4tMTAwXCI7XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBcImJsdWUtMTAwXCI7XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFwicmVkLTEwMFwiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlU2NvcmUoYXBwczogR2FtZVtdLCBzZWxlY3RlZDogYm9vbGVhbltdKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRHYW1lcyA9IHNlbGVjdGVkXHJcbiAgICAubWFwKChpdGVtLCBpKSA9PiAoaXRlbSA/IGFwcHNbaV0gOiBudWxsKSlcclxuICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pO1xyXG4gIGNvbnN0IGNwdVNjb3JlID0gTWF0aC5tYXgoLi4uc2VsZWN0ZWRHYW1lcy5tYXAoKGl0ZW0pID0+IGl0ZW0uY3B1U2NvcmUpKTtcclxuICBjb25zdCBncHVTY29yZSA9IE1hdGgubWF4KC4uLnNlbGVjdGVkR2FtZXMubWFwKChpdGVtKSA9PiBpdGVtLmdwdVNjb3JlKSk7XHJcbiAgY29uc3QgcmFtU2NvcmUgPSBNYXRoLm1heCguLi5zZWxlY3RlZEdhbWVzLm1hcCgoaXRlbSkgPT4gaXRlbS5yYW1BbW91bnQpKTtcclxuICByZXR1cm4geyBjcHU6IGNwdVNjb3JlLCBncHU6IGdwdVNjb3JlLCByYW06IHJhbVNjb3JlIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBIb21lUHJvcHMge31cclxuY29uc3QgSG9tZTogUmVhY3QuRkM8SG9tZVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcm91dGUgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBhcHBzID0gcm91dGVTd2l0Y2gocm91dGUpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobmV3IEFycmF5KDApKTtcclxuICBpZiAocm91dGUgJiYgc2VsZWN0ZWQubGVuZ3RoID09PSAwKVxyXG4gICAgc2V0U2VsZWN0ZWQobmV3IEFycmF5KGFwcHMubGVuZ3RoKS5maWxsKGZhbHNlKSk7XHJcblxyXG4gIGNvbnN0IGJnQ29sb3IgPSBiZ0NvbG9yU3dpdGNoKHJvdXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gdy1mdWxsIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGJnLSR7YmdDb2xvcn0gZmxleC1jb2wgcHQtNDAgZGFyazpiZy1ncmF5LTkwMGB9XHJcbiAgICA+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXRpdGxlIHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTE2IGRhcms6dGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICAgINeR15DXmdec15Ug157XqdeX16fXmdedINeV16rXldeb16DXldeqINeQ16rXlCDXntep16rXntepP1xyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHctZnVsbCBteC1hdXRvIG1heC13LTd4bFwiPlxyXG4gICAgICAgIHthcHBzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgPEltYWdlQ2FyZFxyXG4gICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQubWFwKChhcHAsIGluZGV4KSA9PiAoaW5kZXggPT09IGkgPyAhYXBwIDogYXBwKSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOZXh0QnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkLmV2ZXJ5KChhcHApID0+IGFwcCA9PT0gZmFsc2UpfVxyXG4gICAgICAgIHRleHQ9XCLXntei15HXqCDXnNeT16Mg15TXkdeQXCJcclxuICAgICAgICBiZ0NvbG9yPVwiZ3JheS01MFwiXHJcbiAgICAgICAgbGluaz17YC9yZXNvbHV0aW9uYH1cclxuICAgICAgICBxdWVyeT0ge3tyb3V0ZTogcm91dGUsIC4uLmNhbGN1bGF0ZVNjb3JlKGFwcHMsIHNlbGVjdGVkKX19XHJcbiAgICAgID48L05leHRCdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==