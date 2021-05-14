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
        gpu: parseInt(gpu) + 300,
        ram: ram
      };
    //1440

    case 3:
      return {
        cpu: parseInt(cpu) + 300,
        gpu: parseInt(gpu) + 800,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb2x1dGlvbi50c3giXSwibmFtZXMiOlsiYmdDb2xvclN3aXRjaCIsInJvdXRlIiwic2VsZWN0ZWRTd2l0Y2giLCJzZWxlY3Rpb25OdW0iLCJjcHUiLCJncHUiLCJyYW0iLCJwYXJzZUludCIsIlJlcyIsInByb3BzIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJiZ0NvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsVUFBUUEsS0FBUjtBQUNFLFNBQUssY0FBTDtBQUNFLGFBQU8sV0FBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLFVBQVA7O0FBQ0YsU0FBSyxtQkFBTDtBQUNFLGFBQU8sU0FBUDs7QUFFRjtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0NDLEdBQXRDLEVBQTJDQyxHQUEzQyxFQUFnREMsR0FBaEQsRUFBcUQ7QUFDbkQsVUFBUUgsWUFBUjtBQUNFLFNBQUssQ0FBTDtBQUNFLGFBQU87QUFBRUMsV0FBRyxFQUFIQSxHQUFGO0FBQU9DLFdBQUcsRUFBSEEsR0FBUDtBQUFZQyxXQUFHLEVBQUhBO0FBQVosT0FBUDtBQUEwQjs7QUFDNUIsU0FBSyxDQUFMO0FBQ0UsYUFBTztBQUFFRixXQUFHLEVBQUVHLFFBQVEsQ0FBQ0gsR0FBRCxDQUFSLEdBQWdCLEdBQXZCO0FBQTRCQyxXQUFHLEVBQUVFLFFBQVEsQ0FBQ0YsR0FBRCxDQUFSLEdBQWdCLEdBQWpEO0FBQXNEQyxXQUFHLEVBQUhBO0FBQXRELE9BQVA7QUFBb0U7O0FBQ3RFLFNBQUssQ0FBTDtBQUNFLGFBQU87QUFBRUYsV0FBRyxFQUFFRyxRQUFRLENBQUNILEdBQUQsQ0FBUixHQUFnQixHQUF2QjtBQUE0QkMsV0FBRyxFQUFFRSxRQUFRLENBQUNGLEdBQUQsQ0FBUixHQUFnQixHQUFqRDtBQUFzREMsV0FBRyxFQUFIQTtBQUF0RCxPQUFQO0FBQW9FOztBQUV0RTtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBR0QsSUFBTUUsR0FBdUIsR0FBRyxTQUExQkEsR0FBMEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsQ0FBRCxDQURDO0FBQUEsTUFDbENDLFFBRGtDO0FBQUEsTUFDeEJDLFdBRHdCOztBQUV6QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRnlDLHNCQUdSRCxNQUFNLENBQUNFLEtBSEM7QUFBQSxNQUdqQ2QsS0FIaUMsaUJBR2pDQSxLQUhpQztBQUFBLE1BRzFCRyxHQUgwQixpQkFHMUJBLEdBSDBCO0FBQUEsTUFHckJDLEdBSHFCLGlCQUdyQkEsR0FIcUI7QUFBQSxNQUdoQkMsR0FIZ0IsaUJBR2hCQSxHQUhnQjtBQUt6QyxNQUFNVSxPQUFPLEdBQUdoQixhQUFhLENBQUNDLEtBQUQsQ0FBN0I7QUFFQSxzQkFDRTtBQUNFLGFBQVMsNkVBQXNFZSxPQUF0RSxxQ0FEWDtBQUFBLDRCQUdFO0FBQUksZUFBUyxFQUFDLHNFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFNRTtBQUFLLGVBQVMsRUFBQyxvRUFBZjtBQUFBLDhCQUNFLHFFQUFDLDhEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxlQUFPLEVBQUMsU0FGVjtBQUdFLGdCQUFRLEVBQUVMLFFBQVEsSUFBSSxDQUh4QjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0UscUVBQUMsOERBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLGVBQU8sRUFBQyxVQUZWO0FBR0UsZ0JBQVEsRUFBRUQsUUFBUSxJQUFJLENBSHhCO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFdBQVcsQ0FBQyxDQUFELENBQWpCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFhRSxxRUFBQyw4REFBRDtBQUNFLFlBQUksRUFBQyxJQURQO0FBRUUsZUFBTyxFQUFDLFdBRlY7QUFHRSxnQkFBUSxFQUFFRCxRQUFRLElBQUksQ0FIeEI7QUFJRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBMkJFLHFFQUFDLDhEQUFEO0FBQ0UsY0FBUSxFQUFFRCxRQUFRLElBQUksQ0FEeEI7QUFFRSxVQUFJLEVBQUMsZ0VBRlA7QUFHRSxhQUFPLEVBQUMsU0FIVjtBQUlFLFVBQUksRUFBQyxXQUpQO0FBS0UsV0FBSztBQUFJVixhQUFLLEVBQUxBO0FBQUosU0FBY0MsY0FBYyxDQUFDUyxRQUFELEVBQVdQLEdBQVgsRUFBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixDQUE1QjtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0E1Q0Q7O0dBQU1FLEc7VUFFV00scUQ7OztLQUZYTixHO0FBOENTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNvbHV0aW9uLmE5MGQ3ZDkzZDc4OTBmMzY3NDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VsZWN0Q2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV4dEJ1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gYmdDb2xvclN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFwiZ3JlZW4tMTAwXCI7XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBcImJsdWUtMTAwXCI7XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFwicmVkLTEwMFwiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0ZWRTd2l0Y2goc2VsZWN0aW9uTnVtLCBjcHUsIGdwdSwgcmFtKSB7XHJcbiAgc3dpdGNoIChzZWxlY3Rpb25OdW0pIHtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIHsgY3B1LCBncHUsIHJhbSB9OyAvLzEwODBcclxuICAgIGNhc2UgMjpcclxuICAgICAgcmV0dXJuIHsgY3B1OiBwYXJzZUludChjcHUpICsgMTAwLCBncHU6IHBhcnNlSW50KGdwdSkgKyAzMDAsIHJhbSB9OyAvLzE0NDBcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIHsgY3B1OiBwYXJzZUludChjcHUpICsgMzAwLCBncHU6IHBhcnNlSW50KGdwdSkgKyA4MDAsIHJhbSB9OyAvLzRLXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVzUHJvcHMge31cclxuY29uc3QgUmVzOiBSZWFjdC5GQzxSZXNQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcm91dGUsIGNwdSwgZ3B1LCByYW0gfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgYmdDb2xvciA9IGJnQ29sb3JTd2l0Y2gocm91dGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gdy1mdWxsIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGJnLSR7YmdDb2xvcn0gZmxleC1jb2wgcHQtNDAgZGFyazpiZy1ncmF5LTkwMGB9XHJcbiAgICA+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXRpdGxlIHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTE2IGRhcms6dGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICAgINeR15DXmdeW15Ug16jXlteV15zXldem15nXmdeUINeU157XodeaINep15zXmj9cclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCB3LWZ1bGwgbXgtYXV0byBtYXgtdy03eGxcIj5cclxuICAgICAgICA8U2VsZWN0Q2FyZFxyXG4gICAgICAgICAgdGV4dD1cIjEwODBwXCJcclxuICAgICAgICAgIGJnQ29sb3I9XCJyZWQtNDAwXCJcclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZCA9PSAxfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoMSl9XHJcbiAgICAgICAgPjwvU2VsZWN0Q2FyZD5cclxuICAgICAgICA8U2VsZWN0Q2FyZFxyXG4gICAgICAgICAgdGV4dD1cIjE0NDBwXCJcclxuICAgICAgICAgIGJnQ29sb3I9XCJibHVlLTQwMFwiXHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT0gMn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKDIpfVxyXG4gICAgICAgID48L1NlbGVjdENhcmQ+XHJcbiAgICAgICAgPFNlbGVjdENhcmRcclxuICAgICAgICAgIHRleHQ9XCI0S1wiXHJcbiAgICAgICAgICBiZ0NvbG9yPVwiZ3JlZW4tNDAwXCJcclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZCA9PSAzfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoMyl9XHJcbiAgICAgICAgPjwvU2VsZWN0Q2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8TmV4dEJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZCA9PSAwfVxyXG4gICAgICAgIHRleHQ9XCLXntei15HXqCDXnNeT16Mg15TXkdeQXCJcclxuICAgICAgICBiZ0NvbG9yPVwiZ3JheS01MFwiXHJcbiAgICAgICAgbGluaz1cIi9saWZlc3BhblwiXHJcbiAgICAgICAgcXVlcnk9e3sgcm91dGUsIC4uLnNlbGVjdGVkU3dpdGNoKHNlbGVjdGVkLCBjcHUsIGdwdSwgcmFtKSB9fVxyXG4gICAgICA+PC9OZXh0QnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==