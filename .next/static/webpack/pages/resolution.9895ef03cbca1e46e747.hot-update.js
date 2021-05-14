webpackHotUpdate_N_E("pages/resolution",{

/***/ "./pages/resolution.tsx":
/*!******************************!*\
  !*** ./pages/resolution.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_selectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/selectCard */ "./components/selectCard.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NextButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NextButton */ "./components/NextButton.tsx");


var _jsxFileName = "E:\\Cyber\\yudbet\\maze meshane\\react\\pages\\resolution.tsx",
    _this = undefined,
    _s = $RefreshSig$();






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

function selectedSwitch(selectionNum) {
  switch (selectionNum) {
    case 1:
      return "1080p";

    case 2:
      return "1440p";

    case 3:
      return "4K";

    default:
      return "";
  }
}

var Res = function Res(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      selected = _useState[0],
      setSelected = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var route = router.query.route;
  var score = router.query.score;
  var bgColor = bgColorSwitch(route);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center min-h-screen w-full transition duration-300 bg-".concat(bgColor, " flex-col pt-40 dark:bg-gray-900"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100",
      children: "\u05D1\u05D0\u05D9\u05D6\u05D5 \u05E8\u05D6\u05D5\u05DC\u05D5\u05E6\u05D9\u05D9\u05D4 \u05D4\u05DE\u05E1\u05DA \u05E9\u05DC\u05DA?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_selectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "1080p",
        bgColor: "red-400",
        selected: selected == 1,
        onClick: function onClick() {
          return setSelected(1);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_selectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "1440p",
        bgColor: "blue-400",
        selected: selected == 2,
        onClick: function onClick() {
          return setSelected(2);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_selectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "4K",
        bgColor: "green-400",
        selected: selected == 3,
        onClick: function onClick() {
          return setSelected(3);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NextButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      disabled: selected == 0,
      text: "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D0",
      bgColor: "gray-50",
      link: "/lifespan",
      query: {
        route: route
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(Res, "cqQRHnpaucZWmlj9D+U6Q1t32gA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Res;
/* harmony default export */ __webpack_exports__["default"] = (Res);

var _c;

$RefreshReg$(_c, "Res");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb2x1dGlvbi50c3giXSwibmFtZXMiOlsiYmdDb2xvclN3aXRjaCIsInJvdXRlIiwic2VsZWN0ZWRTd2l0Y2giLCJzZWxlY3Rpb25OdW0iLCJSZXMiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5Iiwic2NvcmUiLCJiZ0NvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsVUFBUUEsS0FBUjtBQUNFLFNBQUssY0FBTDtBQUNFLGFBQU8sV0FBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLFVBQVA7O0FBQ0YsU0FBSyxtQkFBTDtBQUNFLGFBQU8sU0FBUDs7QUFFRjtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0M7QUFDcEMsVUFBUUEsWUFBUjtBQUNFLFNBQUssQ0FBTDtBQUNFLGFBQU8sT0FBUDs7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPLE9BQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxJQUFQOztBQUVGO0FBQ0UsYUFBTyxFQUFQO0FBVEo7QUFXRDs7QUFHRCxJQUFNQyxHQUF1QixHQUFHLFNBQTFCQSxHQUEwQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxDQUFELENBREM7QUFBQSxNQUNsQ0MsUUFEa0M7QUFBQSxNQUN4QkMsV0FEd0I7O0FBRXpDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFGeUMsTUFHakNULEtBSGlDLEdBR3ZCUSxNQUFNLENBQUNFLEtBSGdCLENBR2pDVixLQUhpQztBQUFBLE1BSWpDVyxLQUppQyxHQUl2QkgsTUFBTSxDQUFDRSxLQUpnQixDQUlqQ0MsS0FKaUM7QUFNekMsTUFBTUMsT0FBTyxHQUFHYixhQUFhLENBQUNDLEtBQUQsQ0FBN0I7QUFFQSxzQkFDRTtBQUNFLGFBQVMsNkVBQXNFWSxPQUF0RSxxQ0FEWDtBQUFBLDRCQUdFO0FBQUksZUFBUyxFQUFDLHNFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFNRTtBQUFLLGVBQVMsRUFBQyxvRUFBZjtBQUFBLDhCQUNFLHFFQUFDLDhEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxlQUFPLEVBQUMsU0FGVjtBQUdFLGdCQUFRLEVBQUVOLFFBQVEsSUFBSSxDQUh4QjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0UscUVBQUMsOERBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLGVBQU8sRUFBQyxVQUZWO0FBR0UsZ0JBQVEsRUFBRUQsUUFBUSxJQUFJLENBSHhCO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFdBQVcsQ0FBQyxDQUFELENBQWpCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFhRSxxRUFBQyw4REFBRDtBQUNFLFlBQUksRUFBQyxJQURQO0FBRUUsZUFBTyxFQUFDLFdBRlY7QUFHRSxnQkFBUSxFQUFFRCxRQUFRLElBQUksQ0FIeEI7QUFJRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBMkJFLHFFQUFDLDhEQUFEO0FBQ0UsY0FBUSxFQUFFRCxRQUFRLElBQUksQ0FEeEI7QUFFRSxVQUFJLEVBQUMsZ0VBRlA7QUFHRSxhQUFPLEVBQUMsU0FIVjtBQUlFLFVBQUksRUFBQyxXQUpQO0FBS0UsV0FBSyxFQUFFO0FBQUVOLGFBQUssRUFBTEE7QUFBRjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0E3Q0Q7O0dBQU1HLEc7VUFFV00scUQ7OztLQUZYTixHO0FBK0NTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNvbHV0aW9uLjk4OTVlZjAzY2JjYTFlNDZlNzQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VsZWN0Q2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV4dEJ1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gYmdDb2xvclN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFwiZ3JlZW4tMTAwXCI7XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBcImJsdWUtMTAwXCI7XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFwicmVkLTEwMFwiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0ZWRTd2l0Y2goc2VsZWN0aW9uTnVtKSB7XHJcbiAgc3dpdGNoIChzZWxlY3Rpb25OdW0pIHtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIFwiMTA4MHBcIjtcclxuICAgIGNhc2UgMjpcclxuICAgICAgcmV0dXJuIFwiMTQ0MHBcIjtcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIFwiNEtcIjtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXNQcm9wcyB7fVxyXG5jb25zdCBSZXM6IFJlYWN0LkZDPFJlc1Byb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyByb3V0ZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgc2NvcmUgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgYmdDb2xvciA9IGJnQ29sb3JTd2l0Y2gocm91dGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gdy1mdWxsIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGJnLSR7YmdDb2xvcn0gZmxleC1jb2wgcHQtNDAgZGFyazpiZy1ncmF5LTkwMGB9XHJcbiAgICA+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXRpdGxlIHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTE2IGRhcms6dGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICAgINeR15DXmdeW15Ug16jXlteV15zXldem15nXmdeUINeU157XodeaINep15zXmj9cclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCB3LWZ1bGwgbXgtYXV0byBtYXgtdy03eGxcIj5cclxuICAgICAgICA8U2VsZWN0Q2FyZFxyXG4gICAgICAgICAgdGV4dD1cIjEwODBwXCJcclxuICAgICAgICAgIGJnQ29sb3I9XCJyZWQtNDAwXCJcclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZCA9PSAxfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoMSl9XHJcbiAgICAgICAgPjwvU2VsZWN0Q2FyZD5cclxuICAgICAgICA8U2VsZWN0Q2FyZFxyXG4gICAgICAgICAgdGV4dD1cIjE0NDBwXCJcclxuICAgICAgICAgIGJnQ29sb3I9XCJibHVlLTQwMFwiXHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT0gMn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKDIpfVxyXG4gICAgICAgID48L1NlbGVjdENhcmQ+XHJcbiAgICAgICAgPFNlbGVjdENhcmRcclxuICAgICAgICAgIHRleHQ9XCI0S1wiXHJcbiAgICAgICAgICBiZ0NvbG9yPVwiZ3JlZW4tNDAwXCJcclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZCA9PSAzfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoMyl9XHJcbiAgICAgICAgPjwvU2VsZWN0Q2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8TmV4dEJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZCA9PSAwfVxyXG4gICAgICAgIHRleHQ9XCLXntei15HXqCDXnNeT16Mg15TXkdeQXCJcclxuICAgICAgICBiZ0NvbG9yPVwiZ3JheS01MFwiXHJcbiAgICAgICAgbGluaz1cIi9saWZlc3BhblwiXHJcbiAgICAgICAgcXVlcnk9e3sgcm91dGUgfX1cclxuICAgICAgPjwvTmV4dEJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=