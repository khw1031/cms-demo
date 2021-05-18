webpackHotUpdate_N_E("pages/products/[onsureProdCode]/[onsureProdVer]",{

/***/ "./hooks/product/modify/step1/useProductChannelAndExposure.tsx":
/*!*********************************************************************!*\
  !*** ./hooks/product/modify/step1/useProductChannelAndExposure.tsx ***!
  \*********************************************************************/
/*! exports provided: useProductChannelAndExposure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useProductChannelAndExposure\", function() { return useProductChannelAndExposure; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var slices_product_modify_productChannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slices/product/modify/productChannel */ \"./slices/product/modify/productChannel.ts\");\n/* harmony import */ var slices_product_modify_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slices/product/modify/product */ \"./slices/product/modify/product.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useProductChannelAndExposure() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useDispatch\"])();\n  var channels = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"])(slices_product_modify_productChannel__WEBPACK_IMPORTED_MODULE_1__[\"modifyProductChannelSelector\"]);\n  console.log(channels);\n\n  var handleChangeChannel = function handleChangeChannel(vs) {\n    var channelList = vs.map(function (v) {\n      return {\n        prodExpsChnl: v\n      };\n    });\n    dispatch(Object(slices_product_modify_productChannel__WEBPACK_IMPORTED_MODULE_1__[\"setProductChannel\"])({\n      channels: channelList\n    }));\n  };\n\n  var prodExpsYn = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"])(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_2__[\"prodExpsYnSelector\"]);\n\n  var handleChangeProdExp = function handleChangeProdExp(e) {\n    dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_2__[\"setProdExpsYn\"])(e.target.value));\n  };\n\n  return {\n    channels: channels,\n    prodExpsYn: prodExpsYn,\n    handleChangeChannel: handleChangeChannel,\n    handleChangeProdExp: handleChangeProdExp\n  };\n}\n\n_s(useProductChannelAndExposure, \"ze2IPaSo5NGQ0Mhjnz5bW0BYA3M=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvcHJvZHVjdC9tb2RpZnkvc3RlcDEvdXNlUHJvZHVjdENoYW5uZWxBbmRFeHBvc3VyZS50c3g/YWMyNCJdLCJuYW1lcyI6WyJ1c2VQcm9kdWN0Q2hhbm5lbEFuZEV4cG9zdXJlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNoYW5uZWxzIiwidXNlU2VsZWN0b3IiLCJtb2RpZnlQcm9kdWN0Q2hhbm5lbFNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZUNoYW5uZWwiLCJ2cyIsImNoYW5uZWxMaXN0IiwibWFwIiwidiIsInByb2RFeHBzQ2hubCIsInNldFByb2R1Y3RDaGFubmVsIiwicHJvZEV4cHNZbiIsInByb2RFeHBzWW5TZWxlY3RvciIsImhhbmRsZUNoYW5nZVByb2RFeHAiLCJlIiwic2V0UHJvZEV4cHNZbiIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFDQTtBQUlBO0FBTU8sU0FBU0EsNEJBQVQsR0FBd0M7QUFBQTs7QUFDN0MsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQ0MsaUdBQUQsQ0FBNUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7O0FBQ0EsTUFBTUssbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxFQUFELEVBQTZCO0FBQ3ZELFFBQU1DLFdBQTBCLEdBQUdELEVBQUUsQ0FBQ0UsR0FBSCxDQUFPLFVBQUNDLENBQUQ7QUFBQSxhQUFRO0FBQ2hEQyxvQkFBWSxFQUFFRDtBQURrQyxPQUFSO0FBQUEsS0FBUCxDQUFuQztBQUdBWCxZQUFRLENBQUNhLDhGQUFpQixDQUFDO0FBQUVYLGNBQVEsRUFBRU87QUFBWixLQUFELENBQWxCLENBQVI7QUFDRCxHQUxEOztBQU9BLE1BQU1LLFVBQVUsR0FBR1gsK0RBQVcsQ0FBQ1ksZ0ZBQUQsQ0FBOUI7O0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxDQUFELEVBQXlCO0FBQ25EakIsWUFBUSxDQUFDa0IsbUZBQWEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBZCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxTQUFPO0FBQ0xsQixZQUFRLEVBQVJBLFFBREs7QUFFTFksY0FBVSxFQUFWQSxVQUZLO0FBR0xQLHVCQUFtQixFQUFuQkEsbUJBSEs7QUFJTFMsdUJBQW1CLEVBQW5CQTtBQUpLLEdBQVA7QUFNRDs7R0F2QmVqQiw0QjtVQUNHRSx1RCxFQUVBRSx1RCxFQVNFQSx1RCIsImZpbGUiOiIuL2hvb2tzL3Byb2R1Y3QvbW9kaWZ5L3N0ZXAxL3VzZVByb2R1Y3RDaGFubmVsQW5kRXhwb3N1cmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tib3hWYWx1ZVR5cGUgfSBmcm9tICdhbnRkL2xpYi9jaGVja2JveC9Hcm91cCc7XG5pbXBvcnQgeyBFWFBPU1VSRV9DSEFOTkVMLCBQcm9kdWN0Q2hubCB9IGZyb20gJ2ludGVyZmFjZXMvcHJvZHVjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBtb2RpZnlQcm9kdWN0Q2hhbm5lbFNlbGVjdG9yLFxuICBzZXRQcm9kdWN0Q2hhbm5lbCxcbn0gZnJvbSAnc2xpY2VzL3Byb2R1Y3QvbW9kaWZ5L3Byb2R1Y3RDaGFubmVsJztcbmltcG9ydCB7XG4gIHNldFByb2RFeHBzWW4sXG4gIHByb2RFeHBzWW5TZWxlY3Rvcixcbn0gZnJvbSAnc2xpY2VzL3Byb2R1Y3QvbW9kaWZ5L3Byb2R1Y3QnO1xuaW1wb3J0IHsgUmFkaW9DaGFuZ2VFdmVudCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvZHVjdENoYW5uZWxBbmRFeHBvc3VyZSgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGNoYW5uZWxzID0gdXNlU2VsZWN0b3IobW9kaWZ5UHJvZHVjdENoYW5uZWxTZWxlY3Rvcik7XG4gIGNvbnNvbGUubG9nKGNoYW5uZWxzKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ2hhbm5lbCA9ICh2czogQ2hlY2tib3hWYWx1ZVR5cGVbXSkgPT4ge1xuICAgIGNvbnN0IGNoYW5uZWxMaXN0OiBQcm9kdWN0Q2hubFtdID0gdnMubWFwKCh2KSA9PiAoe1xuICAgICAgcHJvZEV4cHNDaG5sOiB2IGFzIEVYUE9TVVJFX0NIQU5ORUwsXG4gICAgfSkpO1xuICAgIGRpc3BhdGNoKHNldFByb2R1Y3RDaGFubmVsKHsgY2hhbm5lbHM6IGNoYW5uZWxMaXN0IH0pKTtcbiAgfTtcblxuICBjb25zdCBwcm9kRXhwc1luID0gdXNlU2VsZWN0b3IocHJvZEV4cHNZblNlbGVjdG9yKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUHJvZEV4cCA9IChlOiBSYWRpb0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0UHJvZEV4cHNZbihlLnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2hhbm5lbHMsXG4gICAgcHJvZEV4cHNZbixcbiAgICBoYW5kbGVDaGFuZ2VDaGFubmVsLFxuICAgIGhhbmRsZUNoYW5nZVByb2RFeHAsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/product/modify/step1/useProductChannelAndExposure.tsx\n");

/***/ })

})