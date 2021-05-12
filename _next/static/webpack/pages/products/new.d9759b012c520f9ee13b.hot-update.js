webpackHotUpdate_N_E("pages/products/new",{

/***/ "./hooks/product/new/step1/useFetchProductCode.tsx":
/*!*********************************************************!*\
  !*** ./hooks/product/new/step1/useFetchProductCode.tsx ***!
  \*********************************************************/
/*! exports provided: useFetchProductCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFetchProductCode\", function() { return useFetchProductCode; });\n/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style */ \"./node_modules/antd/lib/message/style/index.js\");\n/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ \"./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dan_hli_workspace_hli_cms_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slices/product/new/productCode */ \"./slices/product/new/productCode.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var apis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apis */ \"./apis/index.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_dan_hli_workspace_hli_cms_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction useFetchProductCode() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isModalOpen = _useState[0],\n      setIsModalOpen = _useState[1];\n\n  var input = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"inputSelector\"]);\n  var selectedProductCodes = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"selectedProductCodesSelector\"]);\n  var newProductCodes = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"productCodesSelector\"]);\n  var inputLength = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return input.length;\n  }, [input]);\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(['/public/product/getProductItems/:irkdCodeDtal', input], function () {\n    return apis__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getProductItems({\n      irkdCodeDtal: input\n    });\n  }, {\n    enabled: false\n  }),\n      status = _useQuery.status,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var productItems = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return data === null || data === void 0 ? void 0 : data.data.map(function (d) {\n      return _objectSpread({\n        key: d.irkdCodeDtal + d.irkdCodeItem\n      }, d);\n    });\n  }, [data === null || data === void 0 ? void 0 : data.data]);\n  var rowSelection = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return {\n      selectedRowKeys: selectedProductCodes.map(function (d) {\n        return d.irkdCodeDtal + d.irkdCodeItem;\n      }),\n      onChange: function onChange(keys) {\n        return console.log(keys) || dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setSelectedProductCodes\"])(keys));\n      },\n      fixed: true\n    };\n  }, [dispatch, selectedProductCodes]);\n\n  var handleEnter = function handleEnter() {\n    if (inputLength < 4) return antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('보종코드 4자리를 입력해주세요.');\n    refetch();\n    setIsModalOpen(true);\n  };\n\n  var handleClickSearch = function handleClickSearch() {\n    if (inputLength < 4) return antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('보종코드 4자리를 입력해주세요.');\n    refetch();\n    setIsModalOpen(true);\n  };\n\n  var handleApply = function handleApply() {\n    dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setProductCodes\"])(selectedProductCodes));\n    dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setInput\"])(''));\n    setIsModalOpen(false);\n  };\n\n  var handleCloseModal = function handleCloseModal() {\n    dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setSelectedProductCodes\"])(newProductCodes.map(function (item) {\n      return item.irkdCodeDtal + item.irkdCodeItem;\n    })));\n    setIsModalOpen(false);\n  };\n\n  return {\n    status: status,\n    error: error,\n    productItems: productItems,\n    newProductCodes: newProductCodes,\n    rowSelection: rowSelection,\n    isModalOpen: isModalOpen,\n    handleCloseModal: handleCloseModal,\n    handleEnter: handleEnter,\n    handleClickSearch: handleClickSearch,\n    handleApply: handleApply\n  };\n}\n\n_s(useFetchProductCode, \"ovILXZuvFJvFDfMPdtfrpbbO8sE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_query__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvcHJvZHVjdC9uZXcvc3RlcDEvdXNlRmV0Y2hQcm9kdWN0Q29kZS50c3g/YzMwNSJdLCJuYW1lcyI6WyJ1c2VGZXRjaFByb2R1Y3RDb2RlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsImlucHV0IiwidXNlU2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic2VsZWN0ZWRQcm9kdWN0Q29kZXMiLCJzZWxlY3RlZFByb2R1Y3RDb2Rlc1NlbGVjdG9yIiwibmV3UHJvZHVjdENvZGVzIiwicHJvZHVjdENvZGVzU2VsZWN0b3IiLCJpbnB1dExlbmd0aCIsInVzZU1lbW8iLCJsZW5ndGgiLCJ1c2VRdWVyeSIsIkFwaSIsImdldFByb2R1Y3RJdGVtcyIsImlya2RDb2RlRHRhbCIsImVuYWJsZWQiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJyZWZldGNoIiwicHJvZHVjdEl0ZW1zIiwibWFwIiwiZCIsImtleSIsImlya2RDb2RlSXRlbSIsInJvd1NlbGVjdGlvbiIsInNlbGVjdGVkUm93S2V5cyIsIm9uQ2hhbmdlIiwia2V5cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTZWxlY3RlZFByb2R1Y3RDb2RlcyIsImZpeGVkIiwiaGFuZGxlRW50ZXIiLCJoYW5kbGVDbGlja1NlYXJjaCIsImhhbmRsZUFwcGx5Iiwic2V0UHJvZHVjdENvZGVzIiwic2V0SW5wdXQiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBSU8sU0FBU0EsbUJBQVQsR0FBK0I7QUFBQTs7QUFDcEMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEb0Msa0JBRUVDLHNEQUFRLENBQUMsS0FBRCxDQUZWO0FBQUEsTUFFN0JDLFdBRjZCO0FBQUEsTUFFaEJDLGNBRmdC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RDtBQUFBLGFBQVVBLElBQUksQ0FBQ3pCLFlBQUwsR0FBb0J5QixJQUFJLENBQUNmLFlBQW5DO0FBQUEsS0FBcEIsQ0FEcUIsQ0FEakIsQ0FBUjtBQUtBeEIsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxHQVBEOztBQVNBLFNBQU87QUFDTGdCLFVBQU0sRUFBTkEsTUFESztBQUVMQyxTQUFLLEVBQUVBLEtBRkY7QUFHTEcsZ0JBQVksRUFBWkEsWUFISztBQUlMZCxtQkFBZSxFQUFmQSxlQUpLO0FBS0xtQixnQkFBWSxFQUFaQSxZQUxLO0FBTUwxQixlQUFXLEVBQVhBLFdBTks7QUFPTHVDLG9CQUFnQixFQUFoQkEsZ0JBUEs7QUFRTEwsZUFBVyxFQUFYQSxXQVJLO0FBU0xDLHFCQUFpQixFQUFqQkEsaUJBVEs7QUFVTEMsZUFBVyxFQUFYQTtBQVZLLEdBQVA7QUFZRDs7R0F2RWV4QyxtQjtVQUNHRSx1RCxFQUVISyx1RCxFQUNlQSx1RCxFQUNMQSx1RCxFQUdpQlMsb0QiLCJmaWxlIjoiLi9ob29rcy9wcm9kdWN0L25ldy9zdGVwMS91c2VGZXRjaFByb2R1Y3RDb2RlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgaW5wdXRTZWxlY3RvcixcbiAgcHJvZHVjdENvZGVzU2VsZWN0b3IsXG4gIHNlbGVjdGVkUHJvZHVjdENvZGVzU2VsZWN0b3IsXG4gIHNldElucHV0LFxuICBzZXRQcm9kdWN0Q29kZXMsXG4gIHNldFNlbGVjdGVkUHJvZHVjdENvZGVzLFxufSBmcm9tICdzbGljZXMvcHJvZHVjdC9uZXcvcHJvZHVjdENvZGUnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgQXBpIGZyb20gJ2FwaXMnO1xuaW1wb3J0IHsgRXJyb3JUeXBlLCBLZXlWYWx1ZSB9IGZyb20gJ2ludGVyZmFjZXMvY29tbW9uJztcbmltcG9ydCB7IFRhYmxlUm93U2VsZWN0aW9uIH0gZnJvbSAnYW50ZC9saWIvdGFibGUvaW50ZXJmYWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZldGNoUHJvZHVjdENvZGUoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlucHV0ID0gdXNlU2VsZWN0b3IoaW5wdXRTZWxlY3Rvcik7XG4gIGNvbnN0IHNlbGVjdGVkUHJvZHVjdENvZGVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0ZWRQcm9kdWN0Q29kZXNTZWxlY3Rvcik7XG4gIGNvbnN0IG5ld1Byb2R1Y3RDb2RlcyA9IHVzZVNlbGVjdG9yKHByb2R1Y3RDb2Rlc1NlbGVjdG9yKTtcbiAgY29uc3QgaW5wdXRMZW5ndGggPSB1c2VNZW1vKCgpID0+IGlucHV0Lmxlbmd0aCwgW2lucHV0XSk7XG5cbiAgY29uc3QgeyBzdGF0dXMsIGVycm9yLCBkYXRhLCByZWZldGNoIH0gPSB1c2VRdWVyeShcbiAgICBbJy9wdWJsaWMvcHJvZHVjdC9nZXRQcm9kdWN0SXRlbXMvOmlya2RDb2RlRHRhbCcsIGlucHV0XSxcbiAgICAoKSA9PiBBcGkuZ2V0UHJvZHVjdEl0ZW1zKHsgaXJrZENvZGVEdGFsOiBpbnB1dCB9KSxcbiAgICB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAgKTtcblxuICBjb25zdCBwcm9kdWN0SXRlbXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gZGF0YT8uZGF0YS5tYXAoKGQpID0+ICh7XG4gICAgICBrZXk6IGQuaXJrZENvZGVEdGFsICsgZC5pcmtkQ29kZUl0ZW0sXG4gICAgICAuLi5kLFxuICAgIH0pKTtcbiAgfSwgW2RhdGE/LmRhdGFdKTtcblxuICBjb25zdCByb3dTZWxlY3Rpb246IFRhYmxlUm93U2VsZWN0aW9uPEtleVZhbHVlPiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUHJvZHVjdENvZGVzLm1hcChcbiAgICAgICAgKGQpID0+IGQuaXJrZENvZGVEdGFsICsgZC5pcmtkQ29kZUl0ZW1cbiAgICAgICksXG4gICAgICBvbkNoYW5nZTogKGtleXMpID0+XG4gICAgICAgIGNvbnNvbGUubG9nKGtleXMpIHx8IGRpc3BhdGNoKHNldFNlbGVjdGVkUHJvZHVjdENvZGVzKGtleXMpKSxcbiAgICAgIGZpeGVkOiB0cnVlLFxuICAgIH07XG4gIH0sIFtkaXNwYXRjaCwgc2VsZWN0ZWRQcm9kdWN0Q29kZXNdKTtcblxuICBjb25zdCBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXRMZW5ndGggPCA0KSByZXR1cm4gbWVzc2FnZS5lcnJvcign67O07KKF7L2U65OcIDTsnpDrpqzrpbwg7J6F66Cl7ZW07KO87IS47JqULicpO1xuICAgIHJlZmV0Y2goKTtcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGlja1NlYXJjaCA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXRMZW5ndGggPCA0KSByZXR1cm4gbWVzc2FnZS5lcnJvcign67O07KKF7L2U65OcIDTsnpDrpqzrpbwg7J6F66Cl7ZW07KO87IS47JqULicpO1xuICAgIHJlZmV0Y2goKTtcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRQcm9kdWN0Q29kZXMoc2VsZWN0ZWRQcm9kdWN0Q29kZXMpKTtcbiAgICBkaXNwYXRjaChzZXRJbnB1dCgnJykpO1xuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgc2V0U2VsZWN0ZWRQcm9kdWN0Q29kZXMoXG4gICAgICAgIG5ld1Byb2R1Y3RDb2Rlcy5tYXAoKGl0ZW0pID0+IGl0ZW0uaXJrZENvZGVEdGFsICsgaXRlbS5pcmtkQ29kZUl0ZW0pXG4gICAgICApXG4gICAgKTtcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXMsXG4gICAgZXJyb3I6IGVycm9yIGFzIEVycm9yVHlwZSxcbiAgICBwcm9kdWN0SXRlbXMsXG4gICAgbmV3UHJvZHVjdENvZGVzLFxuICAgIHJvd1NlbGVjdGlvbixcbiAgICBpc01vZGFsT3BlbixcbiAgICBoYW5kbGVDbG9zZU1vZGFsLFxuICAgIGhhbmRsZUVudGVyLFxuICAgIGhhbmRsZUNsaWNrU2VhcmNoLFxuICAgIGhhbmRsZUFwcGx5LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/product/new/step1/useFetchProductCode.tsx\n");

/***/ })

})