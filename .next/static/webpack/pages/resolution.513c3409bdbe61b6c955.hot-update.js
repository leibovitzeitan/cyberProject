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

function selectedSwitch(selectionNum, score) {
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
      link: "/lifespan?route=".concat(route, "&score=").concat(selectedSwitch(selected))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb2x1dGlvbi50c3giXSwibmFtZXMiOlsiYmdDb2xvclN3aXRjaCIsInJvdXRlIiwic2VsZWN0ZWRTd2l0Y2giLCJzZWxlY3Rpb25OdW0iLCJzY29yZSIsIlJlcyIsInByb3BzIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJiZ0NvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsVUFBUUEsS0FBUjtBQUNFLFNBQUssY0FBTDtBQUNFLGFBQU8sV0FBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLFVBQVA7O0FBQ0YsU0FBSyxtQkFBTDtBQUNFLGFBQU8sU0FBUDs7QUFFRjtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzNDLFVBQVFELFlBQVI7QUFDRSxTQUFLLENBQUw7QUFDRSxhQUFPLE9BQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxPQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLGFBQU8sSUFBUDs7QUFFRjtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBR0QsSUFBTUUsR0FBdUIsR0FBRyxTQUExQkEsR0FBMEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsQ0FBRCxDQURDO0FBQUEsTUFDbENDLFFBRGtDO0FBQUEsTUFDeEJDLFdBRHdCOztBQUV6QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRnlDLE1BR2pDVixLQUhpQyxHQUd2QlMsTUFBTSxDQUFDRSxLQUhnQixDQUdqQ1gsS0FIaUM7QUFBQSxNQUlqQ0csS0FKaUMsR0FJdkJNLE1BQU0sQ0FBQ0UsS0FKZ0IsQ0FJakNSLEtBSmlDO0FBTXpDLE1BQU1TLE9BQU8sR0FBR2IsYUFBYSxDQUFDQyxLQUFELENBQTdCO0FBRUEsc0JBQ0U7QUFDRSxhQUFTLDZFQUFzRVksT0FBdEUscUNBRFg7QUFBQSw0QkFHRTtBQUFJLGVBQVMsRUFBQyxzRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBTUU7QUFBSyxlQUFTLEVBQUMsb0VBQWY7QUFBQSw4QkFDRSxxRUFBQyw4REFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsZUFBTyxFQUFDLFNBRlY7QUFHRSxnQkFBUSxFQUFFTCxRQUFRLElBQUksQ0FIeEI7QUFJRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLHFFQUFDLDhEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxlQUFPLEVBQUMsVUFGVjtBQUdFLGdCQUFRLEVBQUVELFFBQVEsSUFBSSxDQUh4QjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBYUUscUVBQUMsOERBQUQ7QUFDRSxZQUFJLEVBQUMsSUFEUDtBQUVFLGVBQU8sRUFBQyxXQUZWO0FBR0UsZ0JBQVEsRUFBRUQsUUFBUSxJQUFJLENBSHhCO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFdBQVcsQ0FBQyxDQUFELENBQWpCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUEwQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRixlQTJCRSxxRUFBQyw4REFBRDtBQUNFLGNBQVEsRUFBRUQsUUFBUSxJQUFJLENBRHhCO0FBRUUsVUFBSSxFQUFDLGdFQUZQO0FBR0UsYUFBTyxFQUFDLFNBSFY7QUFJRSxVQUFJLDRCQUFxQlAsS0FBckIsb0JBQW9DQyxjQUFjLENBQUNNLFFBQUQsQ0FBbEQ7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBNUNEOztHQUFNSCxHO1VBRVdNLHFEOzs7S0FGWE4sRztBQThDU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb2x1dGlvbi41MTNjMzQwOWJkYmU2MWI2Yzk1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWxlY3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3NlbGVjdENhcmRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL05leHRCdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIGJnQ29sb3JTd2l0Y2gocm91dGUpIHtcclxuICBzd2l0Y2ggKHJvdXRlKSB7XHJcbiAgICBjYXNlIFwiYWRkaWN0ZWRfZ3V5XCI6XHJcbiAgICAgIHJldHVybiBcImdyZWVuLTEwMFwiO1xyXG4gICAgY2FzZSBcIm5vcm1pZVwiOlxyXG4gICAgICByZXR1cm4gXCJibHVlLTEwMFwiO1xyXG4gICAgY2FzZSBcIm5ldGZsaXhfYW5kX2NoaWxsXCI6XHJcbiAgICAgIHJldHVybiBcInJlZC0xMDBcIjtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdGVkU3dpdGNoKHNlbGVjdGlvbk51bSwgc2NvcmUpIHtcclxuICBzd2l0Y2ggKHNlbGVjdGlvbk51bSkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gXCIxMDgwcFwiO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gXCIxNDQwcFwiO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICByZXR1cm4gXCI0S1wiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFJlc1Byb3BzIHt9XHJcbmNvbnN0IFJlczogUmVhY3QuRkM8UmVzUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHJvdXRlIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgeyBzY29yZSB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIGNvbnN0IGJnQ29sb3IgPSBiZ0NvbG9yU3dpdGNoKHJvdXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIHctZnVsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBiZy0ke2JnQ29sb3J9IGZsZXgtY29sIHB0LTQwIGRhcms6YmctZ3JheS05MDBgfVxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC10aXRsZSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNiBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICDXkdeQ15nXlteVINeo15bXldec15XXpteZ15nXlCDXlNee16HXmiDXqdec15o/XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgdy1mdWxsIG14LWF1dG8gbWF4LXctN3hsXCI+XHJcbiAgICAgICAgPFNlbGVjdENhcmRcclxuICAgICAgICAgIHRleHQ9XCIxMDgwcFwiXHJcbiAgICAgICAgICBiZ0NvbG9yPVwicmVkLTQwMFwiXHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT0gMX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKDEpfVxyXG4gICAgICAgID48L1NlbGVjdENhcmQ+XHJcbiAgICAgICAgPFNlbGVjdENhcmRcclxuICAgICAgICAgIHRleHQ9XCIxNDQwcFwiXHJcbiAgICAgICAgICBiZ0NvbG9yPVwiYmx1ZS00MDBcIlxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkID09IDJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZCgyKX1cclxuICAgICAgICA+PC9TZWxlY3RDYXJkPlxyXG4gICAgICAgIDxTZWxlY3RDYXJkXHJcbiAgICAgICAgICB0ZXh0PVwiNEtcIlxyXG4gICAgICAgICAgYmdDb2xvcj1cImdyZWVuLTQwMFwiXHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT0gM31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKDMpfVxyXG4gICAgICAgID48L1NlbGVjdENhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPE5leHRCdXR0b25cclxuICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWQgPT0gMH1cclxuICAgICAgICB0ZXh0PVwi157XoteR16gg15zXk9ejINeU15HXkFwiXHJcbiAgICAgICAgYmdDb2xvcj1cImdyYXktNTBcIlxyXG4gICAgICAgIGxpbms9e2AvbGlmZXNwYW4/cm91dGU9JHtyb3V0ZX0mc2NvcmU9JHtzZWxlY3RlZFN3aXRjaChzZWxlY3RlZCl9YH1cclxuICAgICAgPjwvTmV4dEJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=