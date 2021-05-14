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

function selectedSwitch(selectionNum, cpu, gpu, ram) {
  switch (selectionNum) {
    case 1:
      return {
        cpu: cpu,
        gpu: gpu,
        ram: ram
      };
    //1080

    case 2:
      return {
        cpu: cpu + 100,
        gpu: gpu + 300,
        ram: ram
      };
    //1440

    case 3:
      return {
        cpu: cpu + 300,
        gpu: gpu + 600,
        ram: ram
      };
    //4K

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
  var _router$query = router.query,
      route = _router$query.route,
      cpu = _router$query.cpu,
      gpu = _router$query.gpu,
      ram = _router$query.ram;
  var bgColor = bgColorSwitch(route);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center min-h-screen w-full transition duration-300 bg-".concat(bgColor, " flex-col pt-40 dark:bg-gray-900"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100",
      children: "\u05D1\u05D0\u05D9\u05D6\u05D5 \u05E8\u05D6\u05D5\u05DC\u05D5\u05E6\u05D9\u05D9\u05D4 \u05D4\u05DE\u05E1\u05DA \u05E9\u05DC\u05DA?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
        lineNumber: 50,
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
        lineNumber: 56,
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
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb2x1dGlvbi50c3giXSwibmFtZXMiOlsiYmdDb2xvclN3aXRjaCIsInJvdXRlIiwic2VsZWN0ZWRTd2l0Y2giLCJzZWxlY3Rpb25OdW0iLCJjcHUiLCJncHUiLCJyYW0iLCJSZXMiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiYmdDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCLFVBQVFBLEtBQVI7QUFDRSxTQUFLLGNBQUw7QUFDRSxhQUFPLFdBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsYUFBTyxVQUFQOztBQUNGLFNBQUssbUJBQUw7QUFDRSxhQUFPLFNBQVA7O0FBRUY7QUFDRSxhQUFPLEVBQVA7QUFUSjtBQVdEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JDLFlBQXhCLEVBQXNDQyxHQUF0QyxFQUEyQ0MsR0FBM0MsRUFBZ0RDLEdBQWhELEVBQXFEO0FBQ25ELFVBQVFILFlBQVI7QUFDRSxTQUFLLENBQUw7QUFDRSxhQUFPO0FBQUNDLFdBQUcsRUFBSEEsR0FBRDtBQUFNQyxXQUFHLEVBQUhBLEdBQU47QUFBV0MsV0FBRyxFQUFIQTtBQUFYLE9BQVA7QUFBdUI7O0FBQ3pCLFNBQUssQ0FBTDtBQUNFLGFBQU87QUFBQ0YsV0FBRyxFQUFFQSxHQUFHLEdBQUcsR0FBWjtBQUFpQkMsV0FBRyxFQUFFQSxHQUFHLEdBQUcsR0FBNUI7QUFBaUNDLFdBQUcsRUFBSEE7QUFBakMsT0FBUDtBQUE2Qzs7QUFDL0MsU0FBSyxDQUFMO0FBQ0UsYUFBTztBQUFDRixXQUFHLEVBQUVBLEdBQUcsR0FBRyxHQUFaO0FBQWlCQyxXQUFHLEVBQUVBLEdBQUcsR0FBRyxHQUE1QjtBQUFpQ0MsV0FBRyxFQUFIQTtBQUFqQyxPQUFQO0FBQTZDOztBQUUvQztBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBR0QsSUFBTUMsR0FBdUIsR0FBRyxTQUExQkEsR0FBMEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsQ0FBRCxDQURDO0FBQUEsTUFDbENDLFFBRGtDO0FBQUEsTUFDeEJDLFdBRHdCOztBQUV6QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRnlDLHNCQUdSRCxNQUFNLENBQUNFLEtBSEM7QUFBQSxNQUdqQ2IsS0FIaUMsaUJBR2pDQSxLQUhpQztBQUFBLE1BRzFCRyxHQUgwQixpQkFHMUJBLEdBSDBCO0FBQUEsTUFHckJDLEdBSHFCLGlCQUdyQkEsR0FIcUI7QUFBQSxNQUdoQkMsR0FIZ0IsaUJBR2hCQSxHQUhnQjtBQUt6QyxNQUFNUyxPQUFPLEdBQUdmLGFBQWEsQ0FBQ0MsS0FBRCxDQUE3QjtBQUVBLHNCQUNFO0FBQ0UsYUFBUyw2RUFBc0VjLE9BQXRFLHFDQURYO0FBQUEsNEJBR0U7QUFBSSxlQUFTLEVBQUMsc0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQU1FO0FBQUssZUFBUyxFQUFDLG9FQUFmO0FBQUEsOEJBQ0UscUVBQUMsOERBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLGVBQU8sRUFBQyxTQUZWO0FBR0UsZ0JBQVEsRUFBRUwsUUFBUSxJQUFJLENBSHhCO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFdBQVcsQ0FBQyxDQUFELENBQWpCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRSxxRUFBQyw4REFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsZUFBTyxFQUFDLFVBRlY7QUFHRSxnQkFBUSxFQUFFRCxRQUFRLElBQUksQ0FIeEI7QUFJRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQWFFLHFFQUFDLDhEQUFEO0FBQ0UsWUFBSSxFQUFDLElBRFA7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGdCQUFRLEVBQUVELFFBQVEsSUFBSSxDQUh4QjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUEyQkUscUVBQUMsOERBQUQ7QUFDRSxjQUFRLEVBQUVELFFBQVEsSUFBSSxDQUR4QjtBQUVFLFVBQUksRUFBQyxnRUFGUDtBQUdFLGFBQU8sRUFBQyxTQUhWO0FBSUUsVUFBSSxFQUFDLFdBSlA7QUFLRSxXQUFLLEVBQUU7QUFBRVQsYUFBSyxFQUFMQTtBQUFGO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQTVDRDs7R0FBTU0sRztVQUVXTSxxRDs7O0tBRlhOLEc7QUE4Q1NBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc29sdXRpb24uODRiNGIxOTY3NWMwZTgzZjk5NDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VsZWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWxlY3RDYXJkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXh0QnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBiZ0NvbG9yU3dpdGNoKHJvdXRlKSB7XHJcbiAgc3dpdGNoIChyb3V0ZSkge1xyXG4gICAgY2FzZSBcImFkZGljdGVkX2d1eVwiOlxyXG4gICAgICByZXR1cm4gXCJncmVlbi0xMDBcIjtcclxuICAgIGNhc2UgXCJub3JtaWVcIjpcclxuICAgICAgcmV0dXJuIFwiYmx1ZS0xMDBcIjtcclxuICAgIGNhc2UgXCJuZXRmbGl4X2FuZF9jaGlsbFwiOlxyXG4gICAgICByZXR1cm4gXCJyZWQtMTAwXCI7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RlZFN3aXRjaChzZWxlY3Rpb25OdW0sIGNwdSwgZ3B1LCByYW0pIHtcclxuICBzd2l0Y2ggKHNlbGVjdGlvbk51bSkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4ge2NwdSwgZ3B1LCByYW19Oy8vMTA4MFxyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4ge2NwdTogY3B1ICsgMTAwLCBncHU6IGdwdSArIDMwMCwgcmFtfTsvLzE0NDBcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIHtjcHU6IGNwdSArIDMwMCwgZ3B1OiBncHUgKyA2MDAsIHJhbX07Ly80S1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFJlc1Byb3BzIHt9XHJcbmNvbnN0IFJlczogUmVhY3QuRkM8UmVzUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHJvdXRlLCBjcHUsIGdwdSwgcmFtIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IGJnQ29sb3IgPSBiZ0NvbG9yU3dpdGNoKHJvdXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIHctZnVsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBiZy0ke2JnQ29sb3J9IGZsZXgtY29sIHB0LTQwIGRhcms6YmctZ3JheS05MDBgfVxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC10aXRsZSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNiBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICDXkdeQ15nXlteVINeo15bXldec15XXpteZ15nXlCDXlNee16HXmiDXqdec15o/XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgdy1mdWxsIG14LWF1dG8gbWF4LXctN3hsXCI+XHJcbiAgICAgICAgPFNlbGVjdENhcmRcclxuICAgICAgICAgIHRleHQ9XCIxMDgwcFwiXHJcbiAgICAgICAgICBiZ0NvbG9yPVwicmVkLTQwMFwiXHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT0gMX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKDEpfVxyXG4gICAgICAgID48L1NlbGVjdENhcmQ+XHJcbiAgICAgICAgPFNlbGVjdENhcmRcclxuICAgICAgICAgIHRleHQ9XCIxNDQwcFwiXHJcbiAgICAgICAgICBiZ0NvbG9yPVwiYmx1ZS00MDBcIlxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkID09IDJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZCgyKX1cclxuICAgICAgICA+PC9TZWxlY3RDYXJkPlxyXG4gICAgICAgIDxTZWxlY3RDYXJkXHJcbiAgICAgICAgICB0ZXh0PVwiNEtcIlxyXG4gICAgICAgICAgYmdDb2xvcj1cImdyZWVuLTQwMFwiXHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT0gM31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKDMpfVxyXG4gICAgICAgID48L1NlbGVjdENhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPE5leHRCdXR0b25cclxuICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWQgPT0gMH1cclxuICAgICAgICB0ZXh0PVwi157XoteR16gg15zXk9ejINeU15HXkFwiXHJcbiAgICAgICAgYmdDb2xvcj1cImdyYXktNTBcIlxyXG4gICAgICAgIGxpbms9XCIvbGlmZXNwYW5cIlxyXG4gICAgICAgIHF1ZXJ5PXt7IHJvdXRlIH19XHJcbiAgICAgID48L05leHRCdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9