webpackHotUpdate_N_E("pages/resolution",{

/***/ "./pages/resolution.tsx":
/*!******************************!*\
  !*** ./pages/resolution.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_selectCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/selectCard */ "./components/selectCard.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NextButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NextButton */ "./components/NextButton.tsx");



var _jsxFileName = "E:\\Cyber\\yudbet\\maze meshane\\react\\pages\\resolution.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Cyber_yudbet_maze_meshane_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






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
        cpu: parseInt(cpu) + 100,
        gpu: parseInt(gpu) + 500,
        ram: ram
      };
    //1440

    case 3:
      return {
        cpu: parseInt(cpu) + 300,
        gpu: parseInt(gpu) + 1200,
        ram: ram
      };
    //4K

    default:
      return "";
  }
}

var Res = function Res(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      selected = _useState[0],
      setSelected = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var _router$query = router.query,
      route = _router$query.route,
      cpu = _router$query.cpu,
      gpu = _router$query.gpu,
      ram = _router$query.ram;
  var bgColor = bgColorSwitch(route);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "flex items-center min-h-screen w-full transition duration-300 bg-".concat(bgColor, " flex-col pt-40 dark:bg-gray-900"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      className: "font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100",
      children: "\u05D1\u05D0\u05D9\u05D6\u05D5 \u05E8\u05D6\u05D5\u05DC\u05D5\u05E6\u05D9\u05D9\u05D4 \u05D4\u05DE\u05E1\u05DA \u05E9\u05DC\u05DA?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_selectCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_selectCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_selectCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_NextButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      disabled: selected == 0,
      text: "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D0",
      bgColor: "gray-50",
      link: "/lifespan",
      query: _objectSpread({
        route: route
      }, selectedSwitch(selected, cpu, gpu, ram))
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
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb2x1dGlvbi50c3giXSwibmFtZXMiOlsiYmdDb2xvclN3aXRjaCIsInJvdXRlIiwic2VsZWN0ZWRTd2l0Y2giLCJzZWxlY3Rpb25OdW0iLCJjcHUiLCJncHUiLCJyYW0iLCJwYXJzZUludCIsIlJlcyIsInByb3BzIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJiZ0NvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsVUFBUUEsS0FBUjtBQUNFLFNBQUssY0FBTDtBQUNFLGFBQU8sV0FBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLFVBQVA7O0FBQ0YsU0FBSyxtQkFBTDtBQUNFLGFBQU8sU0FBUDs7QUFFRjtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0NDLEdBQXRDLEVBQTJDQyxHQUEzQyxFQUFnREMsR0FBaEQsRUFBcUQ7QUFDbkQsVUFBUUgsWUFBUjtBQUNFLFNBQUssQ0FBTDtBQUNFLGFBQU87QUFBRUMsV0FBRyxFQUFIQSxHQUFGO0FBQU9DLFdBQUcsRUFBSEEsR0FBUDtBQUFZQyxXQUFHLEVBQUhBO0FBQVosT0FBUDtBQUEwQjs7QUFDNUIsU0FBSyxDQUFMO0FBQ0UsYUFBTztBQUFFRixXQUFHLEVBQUVHLFFBQVEsQ0FBQ0gsR0FBRCxDQUFSLEdBQWdCLEdBQXZCO0FBQTRCQyxXQUFHLEVBQUVFLFFBQVEsQ0FBQ0YsR0FBRCxDQUFSLEdBQWdCLEdBQWpEO0FBQXNEQyxXQUFHLEVBQUhBO0FBQXRELE9BQVA7QUFBb0U7O0FBQ3RFLFNBQUssQ0FBTDtBQUNFLGFBQU87QUFBRUYsV0FBRyxFQUFFRyxRQUFRLENBQUNILEdBQUQsQ0FBUixHQUFnQixHQUF2QjtBQUE0QkMsV0FBRyxFQUFFRSxRQUFRLENBQUNGLEdBQUQsQ0FBUixHQUFnQixJQUFqRDtBQUF1REMsV0FBRyxFQUFIQTtBQUF2RCxPQUFQO0FBQXFFOztBQUV2RTtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBR0QsSUFBTUUsR0FBdUIsR0FBRyxTQUExQkEsR0FBMEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsQ0FBRCxDQURDO0FBQUEsTUFDbENDLFFBRGtDO0FBQUEsTUFDeEJDLFdBRHdCOztBQUV6QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRnlDLHNCQUdSRCxNQUFNLENBQUNFLEtBSEM7QUFBQSxNQUdqQ2QsS0FIaUMsaUJBR2pDQSxLQUhpQztBQUFBLE1BRzFCRyxHQUgwQixpQkFHMUJBLEdBSDBCO0FBQUEsTUFHckJDLEdBSHFCLGlCQUdyQkEsR0FIcUI7QUFBQSxNQUdoQkMsR0FIZ0IsaUJBR2hCQSxHQUhnQjtBQUt6QyxNQUFNVSxPQUFPLEdBQUdoQixhQUFhLENBQUNDLEtBQUQsQ0FBN0I7QUFFQSxzQkFDRTtBQUNFLGFBQVMsNkVBQXNFZSxPQUF0RSxxQ0FEWDtBQUFBLDRCQUdFO0FBQUksZUFBUyxFQUFDLHNFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFNRTtBQUFLLGVBQVMsRUFBQyxvRUFBZjtBQUFBLDhCQUNFLHFFQUFDLDhEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxlQUFPLEVBQUMsU0FGVjtBQUdFLGdCQUFRLEVBQUVMLFFBQVEsSUFBSSxDQUh4QjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0UscUVBQUMsOERBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLGVBQU8sRUFBQyxVQUZWO0FBR0UsZ0JBQVEsRUFBRUQsUUFBUSxJQUFJLENBSHhCO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFdBQVcsQ0FBQyxDQUFELENBQWpCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFhRSxxRUFBQyw4REFBRDtBQUNFLFlBQUksRUFBQyxJQURQO0FBRUUsZUFBTyxFQUFDLFdBRlY7QUFHRSxnQkFBUSxFQUFFRCxRQUFRLElBQUksQ0FIeEI7QUFJRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBMkJFLHFFQUFDLDhEQUFEO0FBQ0UsY0FBUSxFQUFFRCxRQUFRLElBQUksQ0FEeEI7QUFFRSxVQUFJLEVBQUMsZ0VBRlA7QUFHRSxhQUFPLEVBQUMsU0FIVjtBQUlFLFVBQUksRUFBQyxXQUpQO0FBS0UsV0FBSztBQUFJVixhQUFLLEVBQUxBO0FBQUosU0FBY0MsY0FBYyxDQUFDUyxRQUFELEVBQVdQLEdBQVgsRUFBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixDQUE1QjtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0E1Q0Q7O0dBQU1FLEc7VUFFV00scUQ7OztLQUZYTixHO0FBOENTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNvbHV0aW9uLmJjMTVlMDFhNjFiYWY0MmQ2MTgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VsZWN0Q2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV4dEJ1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gYmdDb2xvclN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFwiZ3JlZW4tMTAwXCI7XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBcImJsdWUtMTAwXCI7XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFwicmVkLTEwMFwiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0ZWRTd2l0Y2goc2VsZWN0aW9uTnVtLCBjcHUsIGdwdSwgcmFtKSB7XHJcbiAgc3dpdGNoIChzZWxlY3Rpb25OdW0pIHtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIHsgY3B1LCBncHUsIHJhbSB9OyAvLzEwODBcclxuICAgIGNhc2UgMjpcclxuICAgICAgcmV0dXJuIHsgY3B1OiBwYXJzZUludChjcHUpICsgMTAwLCBncHU6IHBhcnNlSW50KGdwdSkgKyA1MDAsIHJhbSB9OyAvLzE0NDBcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIHsgY3B1OiBwYXJzZUludChjcHUpICsgMzAwLCBncHU6IHBhcnNlSW50KGdwdSkgKyAxMjAwLCByYW0gfTsgLy80S1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFJlc1Byb3BzIHt9XHJcbmNvbnN0IFJlczogUmVhY3QuRkM8UmVzUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHJvdXRlLCBjcHUsIGdwdSwgcmFtIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IGJnQ29sb3IgPSBiZ0NvbG9yU3dpdGNoKHJvdXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIHctZnVsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBiZy0ke2JnQ29sb3J9IGZsZXgtY29sIHB0LTQwIGRhcms6YmctZ3JheS05MDBgfVxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC10aXRsZSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNiBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICDXkdeQ15nXlteVINeo15bXldec15XXpteZ15nXlCDXlNee16HXmiDXqdec15o/XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgdy1mdWxsIG14LWF1dG8gbWF4LXctN3hsXCI+XHJcbiAgICAgICAgPFNlbGVjdENhcmRcclxuICAgICAgICAgIHRleHQ9XCIxMDgwcFwiXHJcbiAgICAgICAgICBiZ0NvbG9yPVwicmVkLTQwMFwiXHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT0gMX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKDEpfVxyXG4gICAgICAgID48L1NlbGVjdENhcmQ+XHJcbiAgICAgICAgPFNlbGVjdENhcmRcclxuICAgICAgICAgIHRleHQ9XCIxNDQwcFwiXHJcbiAgICAgICAgICBiZ0NvbG9yPVwiYmx1ZS00MDBcIlxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkID09IDJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZCgyKX1cclxuICAgICAgICA+PC9TZWxlY3RDYXJkPlxyXG4gICAgICAgIDxTZWxlY3RDYXJkXHJcbiAgICAgICAgICB0ZXh0PVwiNEtcIlxyXG4gICAgICAgICAgYmdDb2xvcj1cImdyZWVuLTQwMFwiXHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT0gM31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKDMpfVxyXG4gICAgICAgID48L1NlbGVjdENhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPE5leHRCdXR0b25cclxuICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWQgPT0gMH1cclxuICAgICAgICB0ZXh0PVwi157XoteR16gg15zXk9ejINeU15HXkFwiXHJcbiAgICAgICAgYmdDb2xvcj1cImdyYXktNTBcIlxyXG4gICAgICAgIGxpbms9XCIvbGlmZXNwYW5cIlxyXG4gICAgICAgIHF1ZXJ5PXt7IHJvdXRlLCAuLi5zZWxlY3RlZFN3aXRjaChzZWxlY3RlZCwgY3B1LCBncHUsIHJhbSkgfX1cclxuICAgICAgPjwvTmV4dEJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=