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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Array(apps.length).fill(false)),
      selected = _useState[0],
      setSelected = _useState[1];

  console.log(apps.length);
  console.log(selected);
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

_s(Home, "YLB8vlpi3UxJqmphzP3jTZsawoU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJiZ0NvbG9yU3dpdGNoIiwiSG9tZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJhcHBzIiwidXNlU3RhdGUiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsImJnQ29sb3IiLCJtYXAiLCJpdGVtIiwiaSIsImltYWdlIiwiYXBwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQixVQUFRQSxLQUFSO0FBQ0UsU0FBSyxjQUFMO0FBQ0UsYUFBTyxDQUNMQyxrREFBSyxDQUFDLENBQUQsQ0FEQSxFQUVMQSxrREFBSyxDQUFDLENBQUQsQ0FGQSxFQUdMQSxrREFBSyxDQUFDLENBQUQsQ0FIQSxFQUlMQSxrREFBSyxDQUFDLENBQUQsQ0FKQSxFQUtMQSxrREFBSyxDQUFDLENBQUQsQ0FMQSxFQU1MQSxrREFBSyxDQUFDLENBQUQsQ0FOQSxFQU9MQSxrREFBSyxDQUFDLENBQUQsQ0FQQSxFQVFMQSxrREFBSyxDQUFDLENBQUQsQ0FSQSxFQVNMQSxrREFBSyxDQUFDLENBQUQsQ0FUQSxFQVVMQSxrREFBSyxDQUFDLENBQUQsQ0FWQSxFQVdMQSxrREFBSyxDQUFDLEVBQUQsQ0FYQSxFQVlMQSxrREFBSyxDQUFDLEVBQUQsQ0FaQSxFQWFMQSxrREFBSyxDQUFDLEVBQUQsQ0FiQSxFQWNMQSxrREFBSyxDQUFDLEVBQUQsQ0FkQSxFQWVMQSxrREFBSyxDQUFDLEVBQUQsQ0FmQSxFQWdCTEEsa0RBQUssQ0FBQyxFQUFELENBaEJBLEVBaUJMQSxrREFBSyxDQUFDLEVB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QUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXBDRDs7R0FBTUcsSTtVQUNXRyxxRDs7O0tBRFhILEk7QUFzQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcGxpY2F0aW9ucy1nYW1lcy4yNmZiMjgyZjEwMjZhNGY5N2U3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW1hZ2VDYXJkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXh0QnV0dG9uXCI7XHJcbmltcG9ydCBnYW1lcyBmcm9tIFwiLi4vbGliL2dhbWVzXCI7XHJcblxyXG5mdW5jdGlvbiByb3V0ZVN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBnYW1lc1swXSxcclxuICAgICAgICBnYW1lc1sxXSxcclxuICAgICAgICBnYW1lc1syXSxcclxuICAgICAgICBnYW1lc1szXSxcclxuICAgICAgICBnYW1lc1s0XSxcclxuICAgICAgICBnYW1lc1s1XSxcclxuICAgICAgICBnYW1lc1s2XSxcclxuICAgICAgICBnYW1lc1s3XSxcclxuICAgICAgICBnYW1lc1s4XSxcclxuICAgICAgICBnYW1lc1s5XSxcclxuICAgICAgICBnYW1lc1sxMF0sXHJcbiAgICAgICAgZ2FtZXNbMTFdLFxyXG4gICAgICAgIGdhbWVzWzEyXSxcclxuICAgICAgICBnYW1lc1sxM10sXHJcbiAgICAgICAgZ2FtZXNbMTRdLFxyXG4gICAgICAgIGdhbWVzWzE1XSxcclxuICAgICAgICBnYW1lc1sxNl0sXHJcbiAgICAgICAgZ2FtZXNbMTddLFxyXG4gICAgICAgIGdhbWVzWzE4XSxcclxuICAgICAgICBnYW1lc1sxOV0sXHJcbiAgICAgIF07XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIGNhc2UgXCJuZXRmbGl4X2FuZF9jaGlsbFwiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIGdhbWVzWzIwXSxcclxuICAgICAgICBnYW1lc1syMV0sXHJcbiAgICAgICAgZ2FtZXNbMjJdLFxyXG4gICAgICAgIGdhbWVzWzIzXSxcclxuICAgICAgICBnYW1lc1syNF0sXHJcbiAgICAgICAgZ2FtZXNbMjVdLFxyXG4gICAgICAgIGdhbWVzWzI2XSxcclxuICAgICAgICBnYW1lc1syN10sXHJcbiAgICAgICAgZ2FtZXNbMTVdLFxyXG4gICAgICAgIGdhbWVzWzE2XSxcclxuICAgICAgICBnYW1lc1sxN10sXHJcbiAgICAgICAgZ2FtZXNbMThdLFxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmdDb2xvclN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFwiZ3JlZW4tMTAwXCI7XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBcImJsdWUtMTAwXCI7XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFwicmVkLTEwMFwiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7fVxyXG5jb25zdCBIb21lOiBSZWFjdC5GQzxIb21lUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyByb3V0ZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGFwcHMgPSByb3V0ZVN3aXRjaChyb3V0ZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShuZXcgQXJyYXkoYXBwcy5sZW5ndGgpLmZpbGwoZmFsc2UpKTtcclxuICBjb25zb2xlLmxvZyhhcHBzLmxlbmd0aClcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuXHJcbiAgY29uc3QgYmdDb2xvciA9IGJnQ29sb3JTd2l0Y2gocm91dGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiB3LWZ1bGwgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgYmctJHtiZ0NvbG9yfSBmbGV4LWNvbCBwdC00MCBkYXJrOmJnLWdyYXktOTAwYH1cclxuICAgID5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtdGl0bGUgdGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMTYgZGFyazp0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAg15HXkNeZ15zXlSDXntep15fXp9eZ150g15XXqteV15vXoNeV16og15DXqteUINee16nXqtee16k/XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgdy1mdWxsIG14LWF1dG8gbWF4LXctN3hsXCI+XHJcbiAgICAgICAge2FwcHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICA8SW1hZ2VDYXJkXHJcbiAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQubWFwKChhcHAsIGluZGV4KSA9PiAoaW5kZXggPT09IGk/ICFhcHAgOiBhcHApKSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmV4dEJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXtmYWxzZX0gLy/Xqtee15zXkCDXkNeV16rXmVxyXG4gICAgICAgIHRleHQ9XCLXntei15HXqCDXnNeT16Mg15TXkdeQXCJcclxuICAgICAgICBiZ0NvbG9yPVwiZ3JheS01MFwiXHJcbiAgICAgICAgbGluaz17YC9yZXNvbHV0aW9uP3JvdXRlPSR7cm91dGV9YH1cclxuICAgICAgPjwvTmV4dEJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9