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

function calculateScore(apps, selected) {
  var selectedGames = selected.map(function (item, i) {
    return item ? apps[i] : null;
  }).filter(function (item) {
    return item;
  });
}

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
      lineNumber: 88,
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
          lineNumber: 93,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 105,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJiZ0NvbG9yU3dpdGNoIiwiY2FsY3VsYXRlU2NvcmUiLCJhcHBzIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEdhbWVzIiwibWFwIiwiaXRlbSIsImkiLCJmaWx0ZXIiLCJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZVN0YXRlIiwiQXJyYXkiLCJzZXRTZWxlY3RlZCIsImxlbmd0aCIsImZpbGwiLCJhbGxFcXVhbCIsImFyciIsImV2ZXJ5IiwidiIsImJnQ29sb3IiLCJpbWFnZSIsImFwcCIsImluZGV4IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLFVBQVFBLEtBQVI7QUFDRSxTQUFLLGNBQUw7QUFDRSxhQUFPLENBQ0xDLGtEQUFLLENBQUMsQ0FBRCxDQURBLEVBRUxBLGtEQUFLLENBQUMsQ0FBRCxDQUZBLEVBR0xBLGtEQUFLLENBQUMsQ0FBRCxDQUhBLEVBSUxBLGtEQUFLLENBQUMsQ0FBRCxDQUpBLEVBS0xBLGtEQUFLLENBQUMsQ0FBRCxDQUxBLEVBTUxBLGtEQUFLLENBQUMsQ0FBRCxDQU5BLEVBT0xBLGtEQUFLLENBQUMsQ0FBRCxDQVBBLEVBUUxBLGtEQUFLLENBQUMsQ0FBRCxDQVJBLEVBU0xBLGtEQUFLLENBQUMsQ0FBRCxDQVRBLEVBVUxBLGtEQUFLLENBQUMsQ0FBRCxDQVZBLEVBV0xBLGtEQUFLLENBQUMsRUFBRCxDQVhBLEVBWUxBLGtEQUFLLENBQUMsRUFBRCxDQVpBLEVBYUxBLGtEQUFLLENBQUMsRUFBRCxDQWJBLEVBY0xBLGtEQUFLLENBQUMsRUFBRCxDQWRBLEVBZUxB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RyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsNEJBQ1IscUVBQUMsNkRBQUQ7QUFDRSxhQUFHLEVBQUVELElBQUksQ0FBQ2tCLEtBRFo7QUFHRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2JSLHVCQUFXLENBQ1RiLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNvQixHQUFELEVBQU1DLEtBQU47QUFBQSxxQkFBaUJBLEtBQUssS0FBS25CLENBQVYsR0FBYyxDQUFDa0IsR0FBZixHQUFxQkEsR0FBdEM7QUFBQSxhQUFiLENBRFMsQ0FBWDtBQUdBRSxtQkFBTyxDQUFDQyxHQUFSLENBQVl6QixRQUFaO0FBQ0Q7QUFSSCxXQUVPSSxDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBb0JFLHFFQUFDLDhEQUFEO0FBQ0UsY0FBUSxFQUFFSixRQUFRLENBQUNrQixLQUFULENBQWUsVUFBQ0ksR0FBRDtBQUFBLGVBQVNBLEdBQUcsS0FBSyxLQUFqQjtBQUFBLE9BQWYsQ0FEWjtBQUVFLFVBQUksRUFBQyxnRUFGUDtBQUdFLGFBQU8sRUFBQyxTQUhWO0FBSUUsVUFBSSw4QkFBdUIzQixLQUF2QjtBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2QkQsQ0F2Q0Q7O0dBQU1XLEk7VUFDV0cscUQ7OztLQURYSCxJO0FBeUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHBsaWNhdGlvbnMtZ2FtZXMuOGU2NjdlZWQxZGIzMzQ4Mjg4MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0ltYWdlQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV4dEJ1dHRvblwiO1xyXG5pbXBvcnQgZ2FtZXMsIHtHYW1lfSBmcm9tIFwiLi4vbGliL2dhbWVzXCI7XHJcblxyXG5mdW5jdGlvbiByb3V0ZVN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBnYW1lc1swXSxcclxuICAgICAgICBnYW1lc1sxXSxcclxuICAgICAgICBnYW1lc1syXSxcclxuICAgICAgICBnYW1lc1szXSxcclxuICAgICAgICBnYW1lc1s0XSxcclxuICAgICAgICBnYW1lc1s1XSxcclxuICAgICAgICBnYW1lc1s2XSxcclxuICAgICAgICBnYW1lc1s3XSxcclxuICAgICAgICBnYW1lc1s4XSxcclxuICAgICAgICBnYW1lc1s5XSxcclxuICAgICAgICBnYW1lc1sxMF0sXHJcbiAgICAgICAgZ2FtZXNbMTFdLFxyXG4gICAgICAgIGdhbWVzWzEyXSxcclxuICAgICAgICBnYW1lc1sxM10sXHJcbiAgICAgICAgZ2FtZXNbMTRdLFxyXG4gICAgICAgIGdhbWVzWzE1XSxcclxuICAgICAgICBnYW1lc1sxNl0sXHJcbiAgICAgICAgZ2FtZXNbMTddLFxyXG4gICAgICAgIGdhbWVzWzE4XSxcclxuICAgICAgICBnYW1lc1sxOV0sXHJcbiAgICAgIF07XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIGNhc2UgXCJuZXRmbGl4X2FuZF9jaGlsbFwiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIGdhbWVzWzIwXSxcclxuICAgICAgICBnYW1lc1syMV0sXHJcbiAgICAgICAgZ2FtZXNbMjJdLFxyXG4gICAgICAgIGdhbWVzWzIzXSxcclxuICAgICAgICBnYW1lc1syNF0sXHJcbiAgICAgICAgZ2FtZXNbMjVdLFxyXG4gICAgICAgIGdhbWVzWzI2XSxcclxuICAgICAgICBnYW1lc1syN10sXHJcbiAgICAgICAgZ2FtZXNbMTVdLFxyXG4gICAgICAgIGdhbWVzWzE2XSxcclxuICAgICAgICBnYW1lc1sxN10sXHJcbiAgICAgICAgZ2FtZXNbMThdLFxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmdDb2xvclN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFwiZ3JlZW4tMTAwXCI7XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBcImJsdWUtMTAwXCI7XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFwicmVkLTEwMFwiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlU2NvcmUoYXBwczogR2FtZVtdLCBzZWxlY3RlZDogYm9vbGVhbltdKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRHYW1lcyA9IHNlbGVjdGVkLm1hcCgoaXRlbSwgaSkgPT4gKGl0ZW0gPyBhcHBzW2ldIDogbnVsbCkpLmZpbHRlcihpdGVtID0+IGl0ZW0pO1xyXG5cclxufVxyXG5cclxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7fVxyXG5jb25zdCBIb21lOiBSZWFjdC5GQzxIb21lUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyByb3V0ZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGFwcHMgPSByb3V0ZVN3aXRjaChyb3V0ZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShuZXcgQXJyYXkoMCkpO1xyXG4gIGlmIChyb3V0ZSAmJiBzZWxlY3RlZC5sZW5ndGggPT09IDApXHJcbiAgICBzZXRTZWxlY3RlZChuZXcgQXJyYXkoYXBwcy5sZW5ndGgpLmZpbGwoZmFsc2UpKTtcclxuICBjb25zdCBhbGxFcXVhbCA9IChhcnIpID0+IGFyci5ldmVyeSgodikgPT4gdiA9PT0gYXJyWzBdKTtcclxuXHJcbiAgY29uc3QgYmdDb2xvciA9IGJnQ29sb3JTd2l0Y2gocm91dGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiB3LWZ1bGwgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgYmctJHtiZ0NvbG9yfSBmbGV4LWNvbCBwdC00MCBkYXJrOmJnLWdyYXktOTAwYH1cclxuICAgID5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtdGl0bGUgdGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMTYgZGFyazp0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAg15HXkNeZ15zXlSDXntep15fXp9eZ150g15XXqteV15vXoNeV16og15DXqteUINee16nXqtee16k/XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgdy1mdWxsIG14LWF1dG8gbWF4LXctN3hsXCI+XHJcbiAgICAgICAge2FwcHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICA8SW1hZ2VDYXJkXHJcbiAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5tYXAoKGFwcCwgaW5kZXgpID0+IChpbmRleCA9PT0gaSA/ICFhcHAgOiBhcHApKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOZXh0QnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkLmV2ZXJ5KChhcHApID0+IGFwcCA9PT0gZmFsc2UpfVxyXG4gICAgICAgIHRleHQ9XCLXntei15HXqCDXnNeT16Mg15TXkdeQXCJcclxuICAgICAgICBiZ0NvbG9yPVwiZ3JheS01MFwiXHJcbiAgICAgICAgbGluaz17YC9yZXNvbHV0aW9uP3JvdXRlPSR7cm91dGV9YH1cclxuICAgICAgPjwvTmV4dEJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9