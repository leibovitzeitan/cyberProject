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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYXRpb25zLWdhbWVzLnRzeCJdLCJuYW1lcyI6WyJyb3V0ZVN3aXRjaCIsInJvdXRlIiwiZ2FtZXMiLCJiZ0NvbG9yU3dpdGNoIiwiY2FsY3VsYXRlU2NvcmUiLCJhcHBzIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEdhbWVzIiwibWFwIiwiaXRlbSIsImkiLCJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZVN0YXRlIiwiQXJyYXkiLCJzZXRTZWxlY3RlZCIsImxlbmd0aCIsImZpbGwiLCJhbGxFcXVhbCIsImFyciIsImV2ZXJ5IiwidiIsImJnQ29sb3IiLCJpbWFnZSIsImFwcCIsImluZGV4IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLFVBQVFBLEtBQVI7QUFDRSxTQUFLLGNBQUw7QUFDRSxhQUFPLENBQ0xDLGtEQUFLLENBQUMsQ0FBRCxDQURBLEVBRUxBLGtEQUFLLENBQUMsQ0FBRCxDQUZBLEVBR0xBLGtEQUFLLENBQUMsQ0FBRCxDQUhBLEVBSUxBLGtEQUFLLENBQUMsQ0FBRCxDQUpBLEVBS0xBLGtEQUFLLENBQUMsQ0FBRCxDQUxBLEVBTUxBLGtEQUFLLENBQUMsQ0FBRCxDQU5BLEVBT0xBLGtEQUFLLENBQUMsQ0FBRCxDQVBBLEVBUUxBLGtEQUFLLENBQUMsQ0FBRCxDQVJBLEVBU0xBLGtEQUFLLENBQUMsQ0FBRCxDQVRBLEVBVUxBLGtEQUFLLENBQUMsQ0FBRCxDQVZBLEVBV0xBLGtEQUFLLENBQUMsRUFBRCxDQVhBLEVBWUxBLGtEQUFLLENBQUMsRUFBRCxDQVpBLEVBYUxBLGtEQUFLLENBQUMsRUFBRCxDQWJBLEVBY0xBLGtEQUFLLENBQUMsRUFBRCxDQWRBLEVBZUxBLGtEQUFLLENB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RUFBRUQsSUFBSSxDQUFDaUIsS0FEWjtBQUdFLGlCQUFPLEVBQUUsbUJBQU07QUFDYlIsdUJBQVcsQ0FDVFosUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQ21CLEdBQUQsRUFBTUMsS0FBTjtBQUFBLHFCQUFpQkEsS0FBSyxLQUFLbEIsQ0FBVixHQUFjLENBQUNpQixHQUFmLEdBQXFCQSxHQUF0QztBQUFBLGFBQWIsQ0FEUyxDQUFYO0FBR0FFLG1CQUFPLENBQUNDLEdBQVIsQ0FBWXhCLFFBQVo7QUFDRDtBQVJILFdBRU9JLENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFvQkUscUVBQUMsOERBQUQ7QUFDRSxjQUFRLEVBQUVKLFFBQVEsQ0FBQ2lCLEtBQVQsQ0FBZSxVQUFDSSxHQUFEO0FBQUEsZUFBU0EsR0FBRyxLQUFLLEtBQWpCO0FBQUEsT0FBZixDQURaO0FBRUUsVUFBSSxFQUFDLGdFQUZQO0FBR0UsYUFBTyxFQUFDLFNBSFY7QUFJRSxVQUFJLDhCQUF1QjFCLEtBQXZCO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZCRCxDQXZDRDs7R0FBTVUsSTtVQUNXRyxxRDs7O0tBRFhILEk7QUF5Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcGxpY2F0aW9ucy1nYW1lcy5kNDU1MTgwNmM3ODViYzJkYjU4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW1hZ2VDYXJkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXh0QnV0dG9uXCI7XHJcbmltcG9ydCBnYW1lcyBmcm9tIFwiLi4vbGliL2dhbWVzXCI7XHJcblxyXG5mdW5jdGlvbiByb3V0ZVN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBnYW1lc1swXSxcclxuICAgICAgICBnYW1lc1sxXSxcclxuICAgICAgICBnYW1lc1syXSxcclxuICAgICAgICBnYW1lc1szXSxcclxuICAgICAgICBnYW1lc1s0XSxcclxuICAgICAgICBnYW1lc1s1XSxcclxuICAgICAgICBnYW1lc1s2XSxcclxuICAgICAgICBnYW1lc1s3XSxcclxuICAgICAgICBnYW1lc1s4XSxcclxuICAgICAgICBnYW1lc1s5XSxcclxuICAgICAgICBnYW1lc1sxMF0sXHJcbiAgICAgICAgZ2FtZXNbMTFdLFxyXG4gICAgICAgIGdhbWVzWzEyXSxcclxuICAgICAgICBnYW1lc1sxM10sXHJcbiAgICAgICAgZ2FtZXNbMTRdLFxyXG4gICAgICAgIGdhbWVzWzE1XSxcclxuICAgICAgICBnYW1lc1sxNl0sXHJcbiAgICAgICAgZ2FtZXNbMTddLFxyXG4gICAgICAgIGdhbWVzWzE4XSxcclxuICAgICAgICBnYW1lc1sxOV0sXHJcbiAgICAgIF07XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIGNhc2UgXCJuZXRmbGl4X2FuZF9jaGlsbFwiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIGdhbWVzWzIwXSxcclxuICAgICAgICBnYW1lc1syMV0sXHJcbiAgICAgICAgZ2FtZXNbMjJdLFxyXG4gICAgICAgIGdhbWVzWzIzXSxcclxuICAgICAgICBnYW1lc1syNF0sXHJcbiAgICAgICAgZ2FtZXNbMjVdLFxyXG4gICAgICAgIGdhbWVzWzI2XSxcclxuICAgICAgICBnYW1lc1syN10sXHJcbiAgICAgICAgZ2FtZXNbMTVdLFxyXG4gICAgICAgIGdhbWVzWzE2XSxcclxuICAgICAgICBnYW1lc1sxN10sXHJcbiAgICAgICAgZ2FtZXNbMThdLFxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmdDb2xvclN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFwiZ3JlZW4tMTAwXCI7XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBcImJsdWUtMTAwXCI7XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFwicmVkLTEwMFwiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlU2NvcmUoYXBwcywgc2VsZWN0ZWQpIHtcclxuICBjb25zdCBzZWxlY3RlZEdhbWVzID0gc2VsZWN0ZWQubWFwKChpdGVtLCBpKSA9PiBpdGVtID8gYXBwc1tpXSA6IG51bGwpXHJcbn1cclxuXHJcbmludGVyZmFjZSBIb21lUHJvcHMge31cclxuY29uc3QgSG9tZTogUmVhY3QuRkM8SG9tZVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcm91dGUgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBhcHBzID0gcm91dGVTd2l0Y2gocm91dGUpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobmV3IEFycmF5KDApKTtcclxuICBpZiAocm91dGUgJiYgc2VsZWN0ZWQubGVuZ3RoID09PSAwKVxyXG4gICAgc2V0U2VsZWN0ZWQobmV3IEFycmF5KGFwcHMubGVuZ3RoKS5maWxsKGZhbHNlKSk7XHJcbiAgY29uc3QgYWxsRXF1YWwgPSAoYXJyKSA9PiBhcnIuZXZlcnkoKHYpID0+IHYgPT09IGFyclswXSk7XHJcblxyXG4gIGNvbnN0IGJnQ29sb3IgPSBiZ0NvbG9yU3dpdGNoKHJvdXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gdy1mdWxsIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGJnLSR7YmdDb2xvcn0gZmxleC1jb2wgcHQtNDAgZGFyazpiZy1ncmF5LTkwMGB9XHJcbiAgICA+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXRpdGxlIHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTE2IGRhcms6dGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICAgINeR15DXmdec15Ug157XqdeX16fXmdedINeV16rXldeb16DXldeqINeQ16rXlCDXntep16rXntepP1xyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHctZnVsbCBteC1hdXRvIG1heC13LTd4bFwiPlxyXG4gICAgICAgIHthcHBzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgPEltYWdlQ2FyZFxyXG4gICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQubWFwKChhcHAsIGluZGV4KSA9PiAoaW5kZXggPT09IGkgPyAhYXBwIDogYXBwKSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmV4dEJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZC5ldmVyeSgoYXBwKSA9PiBhcHAgPT09IGZhbHNlKX1cclxuICAgICAgICB0ZXh0PVwi157XoteR16gg15zXk9ejINeU15HXkFwiXHJcbiAgICAgICAgYmdDb2xvcj1cImdyYXktNTBcIlxyXG4gICAgICAgIGxpbms9e2AvcmVzb2x1dGlvbj9yb3V0ZT0ke3JvdXRlfWB9XHJcbiAgICAgID48L05leHRCdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==