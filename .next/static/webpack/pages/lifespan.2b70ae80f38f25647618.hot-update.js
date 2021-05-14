webpackHotUpdate_N_E("pages/lifespan",{

/***/ "./pages/lifespan.tsx":
/*!****************************!*\
  !*** ./pages/lifespan.tsx ***!
  \****************************/
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


var _jsxFileName = "E:\\Cyber\\yudbet\\maze meshane\\react\\pages\\lifespan.tsx",
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

var LifeSpan = function LifeSpan(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      selected = _useState[0],
      setSelected = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var route = router.query.route;
  var bgColor = bgColorSwitch(route);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center min-h-screen w-full transition duration-300 bg-".concat(bgColor, " flex-col pt-40 dark:bg-gray-900"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100",
      children: "\u05DB\u05DE\u05D4 \u05E9\u05E0\u05D9\u05DD \u05D0\u05EA\u05D4 \u05DE\u05EA\u05DB\u05E0\u05DF \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DE\u05D7\u05E9\u05D1 \u05E9\u05DC\u05DA?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_selectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "3 \u05E9\u05E0\u05D9\u05DD",
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
        text: "6 \u05E9\u05E0\u05D9\u05DD",
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
        text: "9 \u05E9\u05E0\u05D9\u05DD",
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
      link: "/resolution",
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

_s(LifeSpan, "cqQRHnpaucZWmlj9D+U6Q1t32gA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = LifeSpan;
/* harmony default export */ __webpack_exports__["default"] = (LifeSpan);

var _c;

$RefreshReg$(_c, "LifeSpan");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlmZXNwYW4udHN4Il0sIm5hbWVzIjpbImJnQ29sb3JTd2l0Y2giLCJyb3V0ZSIsInNlbGVjdGVkU3dpdGNoIiwic2VsZWN0aW9uTnVtIiwiY3B1IiwiZ3B1IiwicmFtIiwicGFyc2VJbnQiLCJMaWZlU3BhbiIsInByb3BzIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJiZ0NvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsVUFBUUEsS0FBUjtBQUNFLFNBQUssY0FBTDtBQUNFLGFBQU8sV0FBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLFVBQVA7O0FBQ0YsU0FBSyxtQkFBTDtBQUNFLGFBQU8sU0FBUDs7QUFFRjtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0NDLEdBQXRDLEVBQTJDQyxHQUEzQyxFQUFnREMsR0FBaEQsRUFBcUQ7QUFDbkQsVUFBUUgsWUFBUjtBQUNFLFNBQUssQ0FBTDtBQUNFLGFBQU87QUFBRUMsV0FBRyxFQUFIQSxHQUFGO0FBQU9DLFdBQUcsRUFBSEEsR0FBUDtBQUFZQyxXQUFHLEVBQUhBO0FBQVosT0FBUDtBQUEwQjs7QUFDNUIsU0FBSyxDQUFMO0FBQ0UsYUFBTztBQUFFRixXQUFHLEVBQUVHLFFBQVEsQ0FBQ0gsR0FBRCxDQUFSLEdBQWdCLEdBQXZCO0FBQTRCQyxXQUFHLEVBQUVFLFFBQVEsQ0FBQ0YsR0FBRCxDQUFSLEdBQWdCLEdBQWpEO0FBQXNEQyxXQUFHLEVBQUhBO0FBQXRELE9BQVA7QUFBb0U7O0FBQ3RFLFNBQUssQ0FBTDtBQUNFLGFBQU87QUFBRUYsV0FBRyxFQUFFRyxRQUFRLENBQUNILEdBQUQsQ0FBUixHQUFnQixHQUF2QjtBQUE0QkMsV0FBRyxFQUFFRSxRQUFRLENBQUNGLEdBQUQsQ0FBUixHQUFnQixHQUFqRDtBQUFzREMsV0FBRyxFQUFIQTtBQUF0RCxPQUFQO0FBQW9FOztBQUV0RTtBQUNFLGFBQU8sRUFBUDtBQVRKO0FBV0Q7O0FBR0QsSUFBTUUsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ25CQyxzREFBUSxDQUFDLENBQUQsQ0FEVztBQUFBLE1BQzVDQyxRQUQ0QztBQUFBLE1BQ2xDQyxXQURrQzs7QUFFbkQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUZtRCxNQUczQ2IsS0FIMkMsR0FHakNZLE1BQU0sQ0FBQ0UsS0FIMEIsQ0FHM0NkLEtBSDJDO0FBS25ELE1BQU1lLE9BQU8sR0FBR2hCLGFBQWEsQ0FBQ0MsS0FBRCxDQUE3QjtBQUVBLHNCQUNFO0FBQ0UsYUFBUyw2RUFBc0VlLE9BQXRFLHFDQURYO0FBQUEsNEJBR0U7QUFBSSxlQUFTLEVBQUMsc0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQU1FO0FBQUssZUFBUyxFQUFDLG9FQUFmO0FBQUEsOEJBQ0UscUVBQUMsOERBQUQ7QUFDRSxZQUFJLEVBQUMsNEJBRFA7QUFFRSxlQUFPLEVBQUMsU0FGVjtBQUdFLGdCQUFRLEVBQUVMLFFBQVEsSUFBSSxDQUh4QjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0UscUVBQUMsOERBQUQ7QUFDRSxZQUFJLEVBQUMsNEJBRFA7QUFFRSxlQUFPLEVBQUMsVUFGVjtBQUdFLGdCQUFRLEVBQUVELFFBQVEsSUFBSSxDQUh4QjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBYUUscUVBQUMsOERBQUQ7QUFDRSxZQUFJLEVBQUMsNEJBRFA7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGdCQUFRLEVBQUVELFFBQVEsSUFBSSxDQUh4QjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUEyQkUscUVBQUMsOERBQUQ7QUFDRSxjQUFRLEVBQUVELFFBQVEsSUFBSSxDQUR4QjtBQUVFLFVBQUksRUFBQyxnRUFGUDtBQUdFLGFBQU8sRUFBQyxTQUhWO0FBSUUsVUFBSSxFQUFDLGFBSlA7QUFLRSxXQUFLLEVBQUc7QUFBQ1YsYUFBSyxFQUFMQTtBQUFEO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQTVDRDs7R0FBTU8sUTtVQUVXTSxxRDs7O0tBRlhOLFE7QUE4Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmVzcGFuLjJiNzBhZTgwZjM4ZjI1NjQ3NjE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VsZWN0Q2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV4dEJ1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gYmdDb2xvclN3aXRjaChyb3V0ZSkge1xyXG4gIHN3aXRjaCAocm91dGUpIHtcclxuICAgIGNhc2UgXCJhZGRpY3RlZF9ndXlcIjpcclxuICAgICAgcmV0dXJuIFwiZ3JlZW4tMTAwXCI7XHJcbiAgICBjYXNlIFwibm9ybWllXCI6XHJcbiAgICAgIHJldHVybiBcImJsdWUtMTAwXCI7XHJcbiAgICBjYXNlIFwibmV0ZmxpeF9hbmRfY2hpbGxcIjpcclxuICAgICAgcmV0dXJuIFwicmVkLTEwMFwiO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0ZWRTd2l0Y2goc2VsZWN0aW9uTnVtLCBjcHUsIGdwdSwgcmFtKSB7XHJcbiAgc3dpdGNoIChzZWxlY3Rpb25OdW0pIHtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIHsgY3B1LCBncHUsIHJhbSB9OyAvLzEwODBcclxuICAgIGNhc2UgMjpcclxuICAgICAgcmV0dXJuIHsgY3B1OiBwYXJzZUludChjcHUpICsgMTAwLCBncHU6IHBhcnNlSW50KGdwdSkgKyAzMDAsIHJhbSB9OyAvLzE0NDBcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIHsgY3B1OiBwYXJzZUludChjcHUpICsgMzAwLCBncHU6IHBhcnNlSW50KGdwdSkgKyA4MDAsIHJhbSB9OyAvLzRLXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgTGlmZVNwYW5Qcm9wcyB7fVxyXG5jb25zdCBMaWZlU3BhbjogUmVhY3QuRkM8TGlmZVNwYW5Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcm91dGUgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgYmdDb2xvciA9IGJnQ29sb3JTd2l0Y2gocm91dGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gdy1mdWxsIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGJnLSR7YmdDb2xvcn0gZmxleC1jb2wgcHQtNDAgZGFyazpiZy1ncmF5LTkwMGB9XHJcbiAgICA+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXRpdGxlIHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTE2IGRhcms6dGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICAgINeb157XlCDXqdeg15nXnSDXkNeq15Qg157Xqteb16DXnyDXnNeU16nXqtee16kg15HXnteX16nXkSDXqdec15o/XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgdy1mdWxsIG14LWF1dG8gbWF4LXctN3hsXCI+XHJcbiAgICAgICAgPFNlbGVjdENhcmRcclxuICAgICAgICAgIHRleHQ9XCIzINep16DXmdedXCJcclxuICAgICAgICAgIGJnQ29sb3I9XCJyZWQtNDAwXCJcclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZCA9PSAxfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoMSl9XHJcbiAgICAgICAgPjwvU2VsZWN0Q2FyZD5cclxuICAgICAgICA8U2VsZWN0Q2FyZFxyXG4gICAgICAgICAgdGV4dD1cIjYg16nXoNeZ151cIlxyXG4gICAgICAgICAgYmdDb2xvcj1cImJsdWUtNDAwXCJcclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZCA9PSAyfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoMil9XHJcbiAgICAgICAgPjwvU2VsZWN0Q2FyZD5cclxuICAgICAgICA8U2VsZWN0Q2FyZFxyXG4gICAgICAgICAgdGV4dD1cIjkg16nXoNeZ151cIlxyXG4gICAgICAgICAgYmdDb2xvcj1cImdyZWVuLTQwMFwiXHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT0gM31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKDMpfVxyXG4gICAgICAgID48L1NlbGVjdENhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPE5leHRCdXR0b25cclxuICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWQgPT0gMH1cclxuICAgICAgICB0ZXh0PVwi157XoteR16gg15zXk9ejINeU15HXkFwiXHJcbiAgICAgICAgYmdDb2xvcj1cImdyYXktNTBcIlxyXG4gICAgICAgIGxpbms9Jy9yZXNvbHV0aW9uJ1xyXG4gICAgICAgIHF1ZXJ5PSB7e3JvdXRlfX1cclxuICAgICAgPjwvTmV4dEJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlU3BhbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==