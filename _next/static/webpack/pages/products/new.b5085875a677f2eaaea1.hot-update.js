webpackHotUpdate_N_E("pages/products/new",{

/***/ "./slices/product/new/productCode.ts":
/*!*******************************************!*\
  !*** ./slices/product/new/productCode.ts ***!
  \*******************************************/
/*! exports provided: newProductCodeSelector, inputSelector, productCodesSelector, searchCodeResultSelector, selectedProductCodesSelector, setInput, setProductCodes, setSelectedProductCodes, setSearchCodeResults, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newProductCodeSelector\", function() { return newProductCodeSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputSelector\", function() { return inputSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productCodesSelector\", function() { return productCodesSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchCodeResultSelector\", function() { return searchCodeResultSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedProductCodesSelector\", function() { return selectedProductCodesSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setInput\", function() { return setInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProductCodes\", function() { return setProductCodes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSelectedProductCodes\", function() { return setSelectedProductCodes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSearchCodeResults\", function() { return setSearchCodeResults; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n  input: '',\n  productCodes: [],\n  searchCodeResults: [],\n  selectedProductCodes: []\n};\nvar productCode = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'productCode',\n  initialState: initialState,\n  reducers: {\n    setInput: function setInput(state, action) {\n      if (action.payload.length > 4) return state;\n      state.input = action.payload;\n    },\n    setSearchCodeResults: function setSearchCodeResults(state, action) {\n      state.searchCodeResults = action.payload;\n    },\n    setProductCodes: function setProductCodes(state, action) {\n      state.productCodes = action.payload;\n    },\n    setSelectedProductCodes: function setSelectedProductCodes(state, action) {\n      state.selectedProductCodes = state.productCodes.filter(function (item) {\n        return action.payload.includes(item.irkdCodeDtal + item.irkdCodeItem);\n      });\n    }\n  }\n});\n\nvar newProductStateSelector = function newProductStateSelector(state) {\n  return state.newProduct;\n};\n\nvar newProductCodeSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(newProductStateSelector, function (state) {\n  return state.productCode;\n});\nvar inputSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(newProductCodeSelector, function (productCode) {\n  return productCode.input;\n});\nvar productCodesSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(newProductCodeSelector, function (productCode) {\n  return productCode.productCodes;\n});\nvar searchCodeResultSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(newProductCodeSelector, function (productCode) {\n  return productCode.selectedProductCodes;\n});\nvar selectedProductCodesSelector = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(newProductCodeSelector, function (productCode) {\n  return productCode.selectedProductCodes;\n});\nvar _productCode$actions = productCode.actions,\n    setInput = _productCode$actions.setInput,\n    setProductCodes = _productCode$actions.setProductCodes,\n    setSelectedProductCodes = _productCode$actions.setSelectedProductCodes,\n    setSearchCodeResults = _productCode$actions.setSearchCodeResults;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (productCode.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2xpY2VzL3Byb2R1Y3QvbmV3L3Byb2R1Y3RDb2RlLnRzPzQyYTkiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaW5wdXQiLCJwcm9kdWN0Q29kZXMiLCJzZWFyY2hDb2RlUmVzdWx0cyIsInNlbGVjdGVkUHJvZHVjdENvZGVzIiwicHJvZHVjdENvZGUiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldElucHV0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibGVuZ3RoIiwic2V0U2VhcmNoQ29kZVJlc3VsdHMiLCJzZXRQcm9kdWN0Q29kZXMiLCJzZXRTZWxlY3RlZFByb2R1Y3RDb2RlcyIsImZpbHRlciIsIml0ZW0iLCJpbmNsdWRlcyIsImlya2RDb2RlRHRhbCIsImlya2RDb2RlSXRlbSIsIm5ld1Byb2R1Y3RTdGF0ZVNlbGVjdG9yIiwibmV3UHJvZHVjdCIsIm5ld1Byb2R1Y3RDb2RlU2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJwcm9kdWN0Q29kZXNTZWxlY3RvciIsInNlYXJjaENvZGVSZXN1bHRTZWxlY3RvciIsInNlbGVjdGVkUHJvZHVjdENvZGVzU2VsZWN0b3IiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0EsSUFBTUEsWUFBeUIsR0FBRztBQUNoQ0MsT0FBSyxFQUFFLEVBRHlCO0FBRWhDQyxjQUFZLEVBQUUsRUFGa0I7QUFHaENDLG1CQUFpQixFQUFFLEVBSGE7QUFJaENDLHNCQUFvQixFQUFFO0FBSlUsQ0FBbEM7QUFPQSxJQUFNQyxXQUFXLEdBQUdDLG9FQUFXLENBQUM7QUFDOUJDLE1BQUksRUFBRSxhQUR3QjtBQUU5QlAsY0FBWSxFQUFaQSxZQUY4QjtBQUc5QlEsVUFBUSxFQUFFO0FBQ1JDLFlBQVEsRUFBRSxrQkFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQTBDO0FBQ2xELFVBQUlBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxNQUFmLEdBQXdCLENBQTVCLEVBQStCLE9BQU9ILEtBQVA7QUFDL0JBLFdBQUssQ0FBQ1QsS0FBTixHQUFjVSxNQUFNLENBQUNDLE9BQXJCO0FBQ0QsS0FKTztBQUtSRSx3QkFBb0IsRUFBRSw4QkFBQ0osS0FBRCxFQUFRQyxNQUFSLEVBQWlEO0FBQ3JFRCxXQUFLLENBQUNQLGlCQUFOLEdBQTBCUSxNQUFNLENBQUNDLE9BQWpDO0FBQ0QsS0FQTztBQVFSRyxtQkFBZSxFQUFFLHlCQUFDTCxLQUFELEVBQVFDLE1BQVIsRUFBaUQ7QUFDaEVELFdBQUssQ0FBQ1IsWUFBTixHQUFxQlMsTUFBTSxDQUFDQyxPQUE1QjtBQUNELEtBVk87QUFXUkksMkJBQXVCLEVBQUUsaUNBQUNOLEtBQUQsRUFBUUMsTUFBUixFQUErQztBQUN0RUQsV0FBSyxDQUFDTixvQkFBTixHQUE2Qk0sS0FBSyxDQUFDUixZQUFOLENBQW1CZSxNQUFuQixDQUEwQixVQUFDQyxJQUFELEVBQVU7QUFDL0QsZUFBT1AsTUFBTSxDQUFDQyxPQUFQLENBQWVPLFFBQWYsQ0FBd0JELElBQUksQ0FBQ0UsWUFBTCxHQUFvQkYsSUFBSSxDQUFDRyxZQUFqRCxDQUFQO0FBQ0QsT0FGNEIsQ0FBN0I7QUFHRDtBQWZPO0FBSG9CLENBQUQsQ0FBL0I7O0FBc0JBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ1osS0FBRDtBQUFBLFNBQXFCQSxLQUFLLENBQUNhLFVBQTNCO0FBQUEsQ0FBaEM7O0FBRU8sSUFBTUMsc0JBQXNCLEdBQUdDLHVFQUFjLENBQ2xESCx1QkFEa0QsRUFFbEQsVUFBQ1osS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0wsV0FBakI7QUFBQSxDQUZrRCxDQUE3QztBQUtBLElBQU1xQixhQUFhLEdBQUdELHVFQUFjLENBQ3pDRCxzQkFEeUMsRUFFekMsVUFBQ25CLFdBQUQ7QUFBQSxTQUFpQkEsV0FBVyxDQUFDSixLQUE3QjtBQUFBLENBRnlDLENBQXBDO0FBS0EsSUFBTTBCLG9CQUFvQixHQUFHRix1RUFBYyxDQUNoREQsc0JBRGdELEVBRWhELFVBQUNuQixXQUFEO0FBQUEsU0FBaUJBLFdBQVcsQ0FBQ0gsWUFBN0I7QUFBQSxDQUZnRCxDQUEzQztBQUtBLElBQU0wQix3QkFBd0IsR0FBR0gsdUVBQWMsQ0FDcERELHNCQURvRCxFQUVwRCxVQUFDbkIsV0FBRDtBQUFBLFNBQWlCQSxXQUFXLENBQUNELG9CQUE3QjtBQUFBLENBRm9ELENBQS9DO0FBS0EsSUFBTXlCLDRCQUE0QixHQUFHSix1RUFBYyxDQUN4REQsc0JBRHdELEVBRXhELFVBQUNuQixXQUFEO0FBQUEsU0FBaUJBLFdBQVcsQ0FBQ0Qsb0JBQTdCO0FBQUEsQ0FGd0QsQ0FBbkQ7MkJBVUhDLFdBQVcsQ0FBQ3lCLE87SUFKZHJCLFEsd0JBQUFBLFE7SUFDQU0sZSx3QkFBQUEsZTtJQUNBQyx1Qix3QkFBQUEsdUI7SUFDQUYsb0Isd0JBQUFBLG9COztBQUVhVCwwRUFBVyxDQUFDMEIsT0FBM0IiLCJmaWxlIjoiLi9zbGljZXMvcHJvZHVjdC9uZXcvcHJvZHVjdENvZGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IFByb2R1Y3RDb2RlIH0gZnJvbSAnaW50ZXJmYWNlcy9wcm9kdWN0JztcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnc3RvcmUnO1xuXG50eXBlIEludGlhbFN0YXRlID0ge1xuICBpbnB1dDogc3RyaW5nO1xuICBwcm9kdWN0Q29kZXM6IFByb2R1Y3RDb2RlW107XG4gIHNlYXJjaENvZGVSZXN1bHRzOiBQcm9kdWN0Q29kZVtdO1xuICBzZWxlY3RlZFByb2R1Y3RDb2RlczogUHJvZHVjdENvZGVbXTtcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSW50aWFsU3RhdGUgPSB7XG4gIGlucHV0OiAnJyxcbiAgcHJvZHVjdENvZGVzOiBbXSxcbiAgc2VhcmNoQ29kZVJlc3VsdHM6IFtdLFxuICBzZWxlY3RlZFByb2R1Y3RDb2RlczogW10sXG59O1xuXG5jb25zdCBwcm9kdWN0Q29kZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Byb2R1Y3RDb2RlJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldElucHV0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQubGVuZ3RoID4gNCkgcmV0dXJuIHN0YXRlO1xuICAgICAgc3RhdGUuaW5wdXQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIHNldFNlYXJjaENvZGVSZXN1bHRzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9kdWN0Q29kZVtdPikgPT4ge1xuICAgICAgc3RhdGUuc2VhcmNoQ29kZVJlc3VsdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIHNldFByb2R1Y3RDb2RlczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UHJvZHVjdENvZGVbXT4pID0+IHtcbiAgICAgIHN0YXRlLnByb2R1Y3RDb2RlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWRQcm9kdWN0Q29kZXM6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlYWN0LktleVtdPikgPT4ge1xuICAgICAgc3RhdGUuc2VsZWN0ZWRQcm9kdWN0Q29kZXMgPSBzdGF0ZS5wcm9kdWN0Q29kZXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5pbmNsdWRlcyhpdGVtLmlya2RDb2RlRHRhbCArIGl0ZW0uaXJrZENvZGVJdGVtKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgbmV3UHJvZHVjdFN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5uZXdQcm9kdWN0O1xuXG5leHBvcnQgY29uc3QgbmV3UHJvZHVjdENvZGVTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBuZXdQcm9kdWN0U3RhdGVTZWxlY3RvcixcbiAgKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0Q29kZVxuKTtcblxuZXhwb3J0IGNvbnN0IGlucHV0U2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgbmV3UHJvZHVjdENvZGVTZWxlY3RvcixcbiAgKHByb2R1Y3RDb2RlKSA9PiBwcm9kdWN0Q29kZS5pbnB1dFxuKTtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RDb2Rlc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIG5ld1Byb2R1Y3RDb2RlU2VsZWN0b3IsXG4gIChwcm9kdWN0Q29kZSkgPT4gcHJvZHVjdENvZGUucHJvZHVjdENvZGVzXG4pO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoQ29kZVJlc3VsdFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIG5ld1Byb2R1Y3RDb2RlU2VsZWN0b3IsXG4gIChwcm9kdWN0Q29kZSkgPT4gcHJvZHVjdENvZGUuc2VsZWN0ZWRQcm9kdWN0Q29kZXNcbik7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZFByb2R1Y3RDb2Rlc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIG5ld1Byb2R1Y3RDb2RlU2VsZWN0b3IsXG4gIChwcm9kdWN0Q29kZSkgPT4gcHJvZHVjdENvZGUuc2VsZWN0ZWRQcm9kdWN0Q29kZXNcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHNldElucHV0LFxuICBzZXRQcm9kdWN0Q29kZXMsXG4gIHNldFNlbGVjdGVkUHJvZHVjdENvZGVzLFxuICBzZXRTZWFyY2hDb2RlUmVzdWx0cyxcbn0gPSBwcm9kdWN0Q29kZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdENvZGUucmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./slices/product/new/productCode.ts\n");

/***/ })

})