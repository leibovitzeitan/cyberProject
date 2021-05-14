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
      return [_lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][0].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][1].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][2].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][3].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][4].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][5].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][6].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][7].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][8].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][9].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][10].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][11].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][12].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][13].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][14].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][15].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][16].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][17].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][18].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][19].image];

    case "normie":
      return [];

    case "netflix_and_chill":
      return [_lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][20].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][21].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][22].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][23].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][24].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][25].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][26].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][27].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][15].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][16].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][17].image, _lib_games__WEBPACK_IMPORTED_MODULE_5__["default"][18].image];

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      selected = _useState[0],
      setSelected = _useState[1];

  var apps = routeSwitch(route);
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
      children: routeSwitch(route).map(function (itemsrc, i) {
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

_s(Home, "WcUGIXpMQ4JJ4qwRd4kSNwqf0eI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJpbWFnZSIsImJnQ29sb3JTd2l0Y2giLCJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImFwcHMiLCJiZ0NvbG9yIiwibWFwIiwiaXRlbXNyYyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQixVQUFRQSxLQUFSO0FBQ0UsU0FBSyxjQUFMO0FBQ0UsYUFBTyxDQUNMQyxrREFBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxLQURKLEVBRUxELGtEQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNDLEtBRkosRUFHTEQsa0RBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0MsS0FISixFQUlMRCxrREFBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxLQUpKLEVBS0xELGtEQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNDLEtBTEosRUFNTEQsa0RBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0MsS0FOSixFQU9MRCxrREFBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxLQVBKLEVBUUxELGtEQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNDLEtBUkosRUFTTEQsa0RBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0MsS0FUSixFQVVMRCxrREFBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxLQVZKLEVBV0xELGtEQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLEtBWEwsRUFZTEQsa0RBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsS0FaTCxFQWFMRCxrREFBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxLQWJMLEVBY0xELGtEQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLEtBZEwsRUFlTEQsa0RBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsS0FmTCxFQWdCTEQsa0RBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsS0FoQkwsRUFpQkxELGtEQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLEtBakJMLEVBa0JMRCxrREFBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxLQWxCTCxFQW1CTEQsa0RBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsS0FuQkwsRUFvQkxELGtEQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLEtBcEJMLENBQVA7O0FBc0JGLFNBQUssUUFBTDtBQUNFLGFBQU8sRUFBUDs7QUFDRixTQUFLLG1CQUFMO0FBQ0UsYUFBTyxDQUNMRCxrREFBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxLQURMLEVBRUxELGtEQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLEtBRkwsRUFHTEQsa0RBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsS0FITCxFQUlMRCxrREFBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxLQUpMLEVBS0xELGtEQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLEtBTEwsRUFNTEQsa0RBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsS0FOTCxFQU9MRCxrREFBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxLQVBMLEVBUUxELGtEQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLEtBUkwsRUFTTEQsa0RBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsS0FUTCxFQVVMRCxrREFBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxLQVZMLEVBV0xELGtEQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLEtBWEwsRUFZTEQsa0RBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsS0FaTCxDQUFQOztBQWNGO0FBQ0UsYUFBTyxFQUFQO0FBMUNKO0FBNENEOztBQUVELFNBQVNDLGFBQVQsQ0FBdUJILEtBQXZCLEVBQThCO0FBQzVCLFVBQVFBLEtBQVI7QUFDRSxTQUFLLGNBQUw7QUFDRSxhQUFPLFdBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsYUFBTyxVQUFQOztBQUNGLFNBQUssbUJBQUw7QUFDRSxhQUFPLFNBQVA7O0FBRUY7QUFDRSxhQUFPLEVBQVA7QUFUSjtBQVdEOztBQUdELElBQU1JLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMzQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDJDLE1BRW5DUCxLQUZtQyxHQUV6Qk0sTUFBTSxDQUFDRSxLQUZrQixDQUVuQ1IsS0FGbUM7O0FBQUEsa0JBR1hTLHNEQUFRLENBQUMsRUFBRCxDQUhHO0FBQUEsTUFHcENDLFFBSG9DO0FBQUEsTUFHMUJDLFdBSDBCOztBQUkzQyxNQUFNQyxJQUFJLEdBQUdiLFdBQVcsQ0FBQ0MsS0FBRCxDQUF4QjtBQUVBLE1BQU1hLE9BQU8sR0FBR1YsYUFBYSxDQUFDSCxLQUFELENBQTdCO0FBQ0Esc0JBQ0U7QUFDRSxhQUFTLDZFQUFzRWEsT0FBdEUscUNBRFg7QUFBQSw0QkFHRTtBQUFJLGVBQVMsRUFBQyxzRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBTUU7QUFBSyxlQUFTLEVBQUMsb0VBQWY7QUFBQSxnQkFDR2QsV0FBVyxDQUFDQyxLQUFELENBQVgsQ0FBbUJjLEdBQW5CLENBQXVCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLDRCQUN0QixxRUFBQyw2REFBRDtBQUFXLGFBQUcsRUFBRUQ7QUFBaEIsV0FBOEJDLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHNCO0FBQUEsT0FBdkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFXRSxxRUFBQyw4REFBRDtBQUNFLGNBQVEsRUFBSSxLQURkLENBQ29CO0FBRHBCO0FBRUUsVUFBSSxFQUFDLGdFQUZQO0FBR0UsYUFBTyxFQUFDLFNBSFY7QUFJRSxVQUFJLDhCQUF1QmhCLEtBQXZCO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBM0JEOztHQUFNSSxJO1VBQ1dHLHFEOzs7S0FEWEgsSTtBQTZCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLjg2YjBmMDAzNWM1ODJiNjU5NDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbWFnZUNhcmRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL05leHRCdXR0b25cIjtcclxuaW1wb3J0IGdhbWVzIGZyb20gXCIuLi9saWIvZ2FtZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJvdXRlU3dpdGNoKHJvdXRlKSB7XHJcbiAgc3dpdGNoIChyb3V0ZSkge1xyXG4gICAgY2FzZSBcImFkZGljdGVkX2d1eVwiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIGdhbWVzWzBdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzFdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzJdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzNdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzRdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzVdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzZdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzddLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzhdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzldLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzEwXS5pbWFnZSxcclxuICAgICAgICBnYW1lc1sxMV0uaW1hZ2UsXHJcbiAgICAgICAgZ2FtZXNbMTJdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzEzXS5pbWFnZSxcclxuICAgICAgICBnYW1lc1sxNF0uaW1hZ2UsXHJcbiAgICAgICAgZ2FtZXNbMTVdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzE2XS5pbWFnZSxcclxuICAgICAgICBnYW1lc1sxN10uaW1hZ2UsXHJcbiAgICAgICAgZ2FtZXNbMThdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzE5XS5pbWFnZSxcclxuICAgICAgXTtcclxuICAgIGNhc2UgXCJub3JtaWVcIjpcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgY2FzZSBcIm5ldGZsaXhfYW5kX2NoaWxsXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgZ2FtZXNbMjBdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzIxXS5pbWFnZSxcclxuICAgICAgICBnYW1lc1syMl0uaW1hZ2UsXHJcbiAgICAgICAgZ2FtZXNbMjNdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzI0XS5pbWFnZSxcclxuICAgICAgICBnYW1lc1syNV0uaW1hZ2UsXHJcbiAgICAgICAgZ2FtZXNbMjZdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzI3XS5pbWFnZSxcclxuICAgICAgICBnYW1lc1sxNV0uaW1hZ2UsXHJcbiAgICAgICAgZ2FtZXNbMTZdLmltYWdlLFxyXG4gICAgICAgIGdhbWVzWzE3XS5pbWFnZSxcclxuICAgICAgICBnYW1lc1sxOF0uaW1hZ2UsXHJcbiAgICAgIF07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZ0NvbG9yU3dpdGNoKHJvdXRlKSB7XHJcbiAgc3dpdGNoIChyb3V0ZSkge1xyXG4gICAgY2FzZSBcImFkZGljdGVkX2d1eVwiOlxyXG4gICAgICByZXR1cm4gXCJncmVlbi0xMDBcIjtcclxuICAgIGNhc2UgXCJub3JtaWVcIjpcclxuICAgICAgcmV0dXJuIFwiYmx1ZS0xMDBcIjtcclxuICAgIGNhc2UgXCJuZXRmbGl4X2FuZF9jaGlsbFwiOlxyXG4gICAgICByZXR1cm4gXCJyZWQtMTAwXCI7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSG9tZVByb3BzIHt9XHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHJvdXRlIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgYXBwcyA9IHJvdXRlU3dpdGNoKHJvdXRlKVxyXG5cclxuICBjb25zdCBiZ0NvbG9yID0gYmdDb2xvclN3aXRjaChyb3V0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIHctZnVsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBiZy0ke2JnQ29sb3J9IGZsZXgtY29sIHB0LTQwIGRhcms6YmctZ3JheS05MDBgfVxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC10aXRsZSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNiBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICDXkdeQ15nXnNeVINee16nXl9en15nXnSDXldeq15XXm9eg15XXqiDXkNeq15Qg157Xqdeq157XqT9cclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCB3LWZ1bGwgbXgtYXV0byBtYXgtdy03eGxcIj5cclxuICAgICAgICB7cm91dGVTd2l0Y2gocm91dGUpLm1hcCgoaXRlbXNyYywgaSkgPT4gKFxyXG4gICAgICAgICAgPEltYWdlQ2FyZCBzcmM9e2l0ZW1zcmN9IGtleT17aX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOZXh0QnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQgPSB7ZmFsc2V9Ly/Xqtee15zXkCDXkNeV16rXmVxyXG4gICAgICAgIHRleHQ9XCLXntei15HXqCDXnNeT16Mg15TXkdeQXCJcclxuICAgICAgICBiZ0NvbG9yPVwiZ3JheS01MFwiXHJcbiAgICAgICAgbGluaz17YC9yZXNvbHV0aW9uP3JvdXRlPSR7cm91dGV9YH1cclxuICAgICAgPjwvTmV4dEJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9