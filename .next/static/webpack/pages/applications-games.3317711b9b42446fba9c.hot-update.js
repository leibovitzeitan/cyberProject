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
      link: "/resolution?route=".concat(route, "&score=").concat(calculateScore(apps, selected))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJiZ0NvbG9yU3dpdGNoIiwiY2FsY3VsYXRlU2NvcmUiLCJhcHBzIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEdhbWVzIiwibWFwIiwiaXRlbSIsImkiLCJmaWx0ZXIiLCJjcHVTY29yZSIsIk1hdGgiLCJtYXgiLCJncHVTY29yZSIsInJhbVNjb3JlIiwicmFtQW1vdW50IiwiSG9tZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTdGF0ZSIsIkFycmF5Iiwic2V0U2VsZWN0ZWQiLCJsZW5ndGgiLCJmaWxsIiwiYmdDb2xvciIsImltYWdlIiwiYXBwIiwiaW5kZXgiLCJldmVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUIsVUFBUUEsS0FBUjtBQUNFLFNBQUssY0FBTDtBQUNFLGFBQU8sQ0FDTEMsa0RBQUssQ0FBQyxDQUFELENBREEsRUFFTEEsa0RBQUssQ0FBQyxDQUFELENBRkEsRUFHTEEsa0RBQUssQ0FBQyxDQUFELENBSEEsRUFJTEEsa0RBQUssQ0FBQyxDQUFELENBSkEsRUFLTEEsa0RBQUssQ0FBQyxDQUFELENBTEEsRUFNTEEsa0RBQUssQ0FBQyxDQUFELENBTkEsRUFPTEEsa0RBQUssQ0FBQyxDQUFELENBUEEsRUFRTEEsa0RBQUssQ0FBQyxDQUFELENBUkEsRUFTTEEsa0RBQUssQ0FBQyxDQUFELENBVEEsRUFVTEEsa0RBQUssQ0FBQyxDQUFELENBVkEsRUFXTEEsa0RBQUssQ0FBQyxFQUFELENBWEEsRUFZTEEsa0RBQUssQ0FBQyxFQUFELENBWkEsRUFhTEEsa0RBQUssQ0FBQyxFQUFELENBYkEsRUFjTEEsa0RB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LEVBQU9DLFFBQVAsQ0FBcEQ7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBckNEOztHQUFNWSxJO1VBQ1dHLHFEOzs7S0FEWEgsSTtBQXVDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLjMzMTc3MTFiOWI0MjQ0NmZiYTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbWFnZUNhcmRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL05leHRCdXR0b25cIjtcclxuaW1wb3J0IGdhbWVzLCB7IEdhbWUgfSBmcm9tIFwiLi4vbGliL2dhbWVzXCI7XHJcblxyXG5mdW5jdGlvbiByb3V0ZVN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBnYW1lc1swXSxcclxuICAgICAgICBnYW1lc1sxXSxcclxuICAgICAgICBnYW1lc1syXSxcclxuICAgICAgICBnYW1lc1szXSxcclxuICAgICAgICBnYW1lc1s0XSxcclxuICAgICAgICBnYW1lc1s1XSxcclxuICAgICAgICBnYW1lc1s2XSxcclxuICAgICAgICBnYW1lc1s3XSxcclxuICAgICAgICBnYW1lc1s4XSxcclxuICAgICAgICBnYW1lc1s5XSxcclxuICAgICAgICBnYW1lc1sxMF0sXHJcbiAgICAgICAgZ2FtZXNbMTFdLFxyXG4gICAgICAgIGdhbWVzWzEyXSxcclxuICAgICAgICBnYW1lc1sxM10sXHJcbiAgICAgICAgZ2FtZXNbMTRdLFxyXG4gICAgICAgIGdhbWVzWzE1XSxcclxuICAgICAgICBnYW1lc1sxNl0sXHJcbiAgICAgICAgZ2FtZXNbMTddLFxyXG4gICAgICAgIGdhbWVzWzE4XSxcclxuICAgICAgICBnYW1lc1sxOV0sXHJcbiAgICAgIF07XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIGNhc2UgXCJuZXRmbGl4X2FuZF9jaGlsbFwiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIGdhbWVzWzIwXSxcclxuICAgICAgICBnYW1lc1syMV0sXHJcbiAgICAgICAgZ2FtZXNbMjJdLFxyXG4gICAgICAgIGdhbWVzWzIzXSxcclxuICAgICAgICBnYW1lc1syNF0sXHJcbiAgICAgICAgZ2FtZXNbMjVdLFxyXG4gICAgICAgIGdhbWVzWzI2XSxcclxuICAgICAgICBnYW1lc1syN10sXHJcbiAgICAgICAgZ2FtZXNbMTVdLFxyXG4gICAgICAgIGdhbWVzWzE2XSxcclxuICAgICAgICBnYW1lc1sxN10sXHJcbiAgICAgICAgZ2FtZXNbMThdLFxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmdDb2xvclN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFwiZ3JlZW4tMTAwXCI7XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBcImJsdWUtMTAwXCI7XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFwicmVkLTEwMFwiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlU2NvcmUoYXBwczogR2FtZVtdLCBzZWxlY3RlZDogYm9vbGVhbltdKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRHYW1lcyA9IHNlbGVjdGVkXHJcbiAgICAubWFwKChpdGVtLCBpKSA9PiAoaXRlbSA/IGFwcHNbaV0gOiBudWxsKSlcclxuICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pO1xyXG4gIGNvbnN0IGNwdVNjb3JlID0gTWF0aC5tYXgoLi4uc2VsZWN0ZWRHYW1lcy5tYXAoKGl0ZW0pID0+IGl0ZW0uY3B1U2NvcmUpKTtcclxuICBjb25zdCBncHVTY29yZSA9IE1hdGgubWF4KC4uLnNlbGVjdGVkR2FtZXMubWFwKChpdGVtKSA9PiBpdGVtLmdwdVNjb3JlKSk7XHJcbiAgY29uc3QgcmFtU2NvcmUgPSBNYXRoLm1heCguLi5zZWxlY3RlZEdhbWVzLm1hcCgoaXRlbSkgPT4gaXRlbS5yYW1BbW91bnQpKTtcclxuICByZXR1cm4gXCJjcHVfXCIgKyBjcHVTY29yZSArIFwiZ3B1X1wiICsgZ3B1U2NvcmUgKyBcInJhbV9cIiArIHJhbVNjb3JlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSG9tZVByb3BzIHt9XHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHJvdXRlIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgYXBwcyA9IHJvdXRlU3dpdGNoKHJvdXRlKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG5ldyBBcnJheSgwKSk7XHJcbiAgaWYgKHJvdXRlICYmIHNlbGVjdGVkLmxlbmd0aCA9PT0gMClcclxuICAgIHNldFNlbGVjdGVkKG5ldyBBcnJheShhcHBzLmxlbmd0aCkuZmlsbChmYWxzZSkpO1xyXG5cclxuICBjb25zdCBiZ0NvbG9yID0gYmdDb2xvclN3aXRjaChyb3V0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIHctZnVsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBiZy0ke2JnQ29sb3J9IGZsZXgtY29sIHB0LTQwIGRhcms6YmctZ3JheS05MDBgfVxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC10aXRsZSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNiBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICDXkdeQ15nXnNeVINee16nXl9en15nXnSDXldeq15XXm9eg15XXqiDXkNeq15Qg157Xqdeq157XqT9cclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCB3LWZ1bGwgbXgtYXV0byBtYXgtdy03eGxcIj5cclxuICAgICAgICB7YXBwcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgIDxJbWFnZUNhcmRcclxuICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZChcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLm1hcCgoYXBwLCBpbmRleCkgPT4gKGluZGV4ID09PSBpID8gIWFwcCA6IGFwcCkpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmV4dEJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZC5ldmVyeSgoYXBwKSA9PiBhcHAgPT09IGZhbHNlKX1cclxuICAgICAgICB0ZXh0PVwi157XoteR16gg15zXk9ejINeU15HXkFwiXHJcbiAgICAgICAgYmdDb2xvcj1cImdyYXktNTBcIlxyXG4gICAgICAgIGxpbms9e2AvcmVzb2x1dGlvbj9yb3V0ZT0ke3JvdXRlfSZzY29yZT0ke2NhbGN1bGF0ZVNjb3JlKGFwcHMsIHNlbGVjdGVkKX1gfVxyXG4gICAgICA+PC9OZXh0QnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=