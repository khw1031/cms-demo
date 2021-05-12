webpackHotUpdate_N_E("pages/products/new",{

/***/ "./hooks/product/new/step1/useFetchProductCode.tsx":
/*!*********************************************************!*\
  !*** ./hooks/product/new/step1/useFetchProductCode.tsx ***!
  \*********************************************************/
/*! exports provided: useFetchProductCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFetchProductCode\", function() { return useFetchProductCode; });\n/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style */ \"./node_modules/antd/lib/message/style/index.js\");\n/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ \"./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dan_hli_workspace_hli_cms_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slices/product/new/productCode */ \"./slices/product/new/productCode.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var apis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apis */ \"./apis/index.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_dan_hli_workspace_hli_cms_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction useFetchProductCode() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isModalOpen = _useState[0],\n      setIsModalOpen = _useState[1];\n\n  var input = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"inputSelector\"]);\n  var selectedProductCodes = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"selectedProductCodesSelector\"]);\n  var newProductCodes = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"productCodesSelector\"]);\n  var inputLength = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return input.length;\n  }, [input]);\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(['/public/product/getProductItems/:irkdCodeDtal', input], function () {\n    return apis__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getProductItems({\n      irkdCodeDtal: input\n    });\n  }, {\n    enabled: false\n  }),\n      status = _useQuery.status,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var productItems = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return data === null || data === void 0 ? void 0 : data.data.map(function (d) {\n      return _objectSpread({\n        key: d.irkdCodeDtal + d.irkdCodeItem\n      }, d);\n    });\n  }, [data === null || data === void 0 ? void 0 : data.data]);\n  var rowSelection = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return {\n      selectedRowKeys: selectedProductCodes.map(function (d) {\n        return d.irkdCodeDtal + d.irkdCodeItem;\n      }),\n      onChange: function onChange(keys) {\n        return dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setSelectedProductCodes\"])(keys));\n      },\n      fixed: true\n    };\n  }, [dispatch, selectedProductCodes]);\n\n  var handleEnter = function handleEnter() {\n    if (inputLength < 4) return antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('보종코드 4자리를 입력해주세요.');\n    refetch().then(function (result) {\n      if (result.data) {\n        dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setSearchCodeResults\"])(result.data.data));\n      }\n    });\n    setIsModalOpen(true);\n  };\n\n  var handleClickSearch = function handleClickSearch() {\n    if (inputLength < 4) return antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('보종코드 4자리를 입력해주세요.');\n    refetch().then(function (result) {\n      if (result.data) {\n        dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setSearchCodeResults\"])(result.data.data));\n      }\n    });\n    setIsModalOpen(true);\n  };\n\n  var handleApply = function handleApply() {\n    dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setProductCodes\"])(selectedProductCodes));\n    dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setInput\"])(''));\n    setIsModalOpen(false);\n  };\n\n  var handleCloseModal = function handleCloseModal() {\n    dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setSelectedProductCodes\"])(newProductCodes.map(function (item) {\n      return item.irkdCodeDtal + item.irkdCodeItem;\n    })));\n    setIsModalOpen(false);\n  };\n\n  return {\n    status: status,\n    error: error,\n    productItems: productItems,\n    newProductCodes: newProductCodes,\n    rowSelection: rowSelection,\n    isModalOpen: isModalOpen,\n    handleCloseModal: handleCloseModal,\n    handleEnter: handleEnter,\n    handleClickSearch: handleClickSearch,\n    handleApply: handleApply\n  };\n}\n\n_s(useFetchProductCode, \"ovILXZuvFJvFDfMPdtfrpbbO8sE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_query__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvcHJvZHVjdC9uZXcvc3RlcDEvdXNlRmV0Y2hQcm9kdWN0Q29kZS50c3g/YzMwNSJdLCJuYW1lcyI6WyJ1c2VGZXRjaFByb2R1Y3RDb2RlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsImlucHV0IiwidXNlU2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic2VsZWN0ZWRQcm9kdWN0Q29kZXMiLCJzZWxlY3RlZFByb2R1Y3RDb2Rlc1NlbGVjdG9yIiwibmV3UHJvZHVjdENvZGVzIiwicHJvZHVjdENvZGVzU2VsZWN0b3IiLCJpbnB1dExlbmd0aCIsInVzZU1lbW8iLCJsZW5ndGgiLCJ1c2VRdWVyeSIsIkFwaSIsImdldFByb2R1Y3RJdGVtcyIsImlya2RDb2RlRHRhbCIsImVuYWJsZWQiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJyZWZldGNoIiwicHJvZHVjdEl0ZW1zIiwibWFwIiwiZCIsImtleSIsImlya2RDb2RlSXRlbSIsInJvd1NlbGVjdGlvbiIsInNlbGVjdGVkUm93S2V5cyIsIm9uQ2hhbmdlIiwia2V5cyIsInNldFNlbGVjdGVkUHJvZHVjdENvZGVzIiwiZml4ZWQiLCJoYW5kbGVFbnRlciIsInRoZW4iLCJyZXN1bHQiLCJzZXRTZWFyY2hDb2RlUmVzdWx0cyIsImhhbmRsZUNsaWNrU2VhcmNoIiwiaGFuZGxlQXBwbHkiLCJzZXRQcm9kdWN0Q29kZXMiLCJzZXRJbnB1dCIsImhhbmRsZUNsb3NlTW9kYWwiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFJTyxTQUFTQSxtQkFBVCxHQUErQjtBQUFBOztBQUNwQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURvQyxrQkFFRUMsc0RBQVEsQ0FBQyxLQUFELENBRlY7QUFBQSxNQUU3QkMs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QUFDRCxHQVJEOztBQVVBLE1BQU1vQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCeEMsWUFBUSxDQUFDeUMsc0ZBQWUsQ0FBQ2pDLG9CQUFELENBQWhCLENBQVI7QUFDQVIsWUFBUSxDQUFDMEMsK0VBQVEsQ0FBQyxFQUFELENBQVQsQ0FBUjtBQUNBdEMsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxHQUpEOztBQU1BLE1BQU11QyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IzQyxZQUFRLENBQ05pQyw4RkFBdUIsQ0FDckJ2QixlQUFlLENBQUNlLEdBQWhCLENBQW9CLFVBQUNtQixJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDMUIsWUFBTCxHQUFvQjBCLElBQUksQ0FBQ2hCLFlBQW5DO0FBQUEsS0FBcEIsQ0FEcUIsQ0FEakIsQ0FBUjtBQUtBeEIsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxHQVBEOztBQVNBLFNBQU87QUFDTGdCLFVBQU0sRUFBTkEsTUFESztBQUVMQyxTQUFLLEVBQUVBLEtBRkY7QUFHTEcsZ0JBQVksRUFBWkEsWUFISztBQUlMZCxtQkFBZSxFQUFmQSxlQUpLO0FBS0xtQixnQkFBWSxFQUFaQSxZQUxLO0FBTUwxQixlQUFXLEVBQVhBLFdBTks7QUFPTHdDLG9CQUFnQixFQUFoQkEsZ0JBUEs7QUFRTFIsZUFBVyxFQUFYQSxXQVJLO0FBU0xJLHFCQUFpQixFQUFqQkEsaUJBVEs7QUFVTEMsZUFBVyxFQUFYQTtBQVZLLEdBQVA7QUFZRDs7R0E5RWV6QyxtQjtVQUNHRSx1RCxFQUVISyx1RCxFQUNlQSx1RCxFQUNMQSx1RCxFQUdpQlMsb0QiLCJmaWxlIjoiLi9ob29rcy9wcm9kdWN0L25ldy9zdGVwMS91c2VGZXRjaFByb2R1Y3RDb2RlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgaW5wdXRTZWxlY3RvcixcbiAgcHJvZHVjdENvZGVzU2VsZWN0b3IsXG4gIHNlbGVjdGVkUHJvZHVjdENvZGVzU2VsZWN0b3IsXG4gIHNldElucHV0LFxuICBzZXRQcm9kdWN0Q29kZXMsXG4gIHNldFNlbGVjdGVkUHJvZHVjdENvZGVzLFxuICBzZXRTZWFyY2hDb2RlUmVzdWx0cyxcbn0gZnJvbSAnc2xpY2VzL3Byb2R1Y3QvbmV3L3Byb2R1Y3RDb2RlJztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IEFwaSBmcm9tICdhcGlzJztcbmltcG9ydCB7IEVycm9yVHlwZSwgS2V5VmFsdWUgfSBmcm9tICdpbnRlcmZhY2VzL2NvbW1vbic7XG5pbXBvcnQgeyBUYWJsZVJvd1NlbGVjdGlvbiB9IGZyb20gJ2FudGQvbGliL3RhYmxlL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGZXRjaFByb2R1Y3RDb2RlKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpbnB1dCA9IHVzZVNlbGVjdG9yKGlucHV0U2VsZWN0b3IpO1xuICBjb25zdCBzZWxlY3RlZFByb2R1Y3RDb2RlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdGVkUHJvZHVjdENvZGVzU2VsZWN0b3IpO1xuICBjb25zdCBuZXdQcm9kdWN0Q29kZXMgPSB1c2VTZWxlY3Rvcihwcm9kdWN0Q29kZXNTZWxlY3Rvcik7XG4gIGNvbnN0IGlucHV0TGVuZ3RoID0gdXNlTWVtbygoKSA9PiBpbnB1dC5sZW5ndGgsIFtpbnB1dF0pO1xuXG4gIGNvbnN0IHsgc3RhdHVzLCBlcnJvciwgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoXG4gICAgWycvcHVibGljL3Byb2R1Y3QvZ2V0UHJvZHVjdEl0ZW1zLzppcmtkQ29kZUR0YWwnLCBpbnB1dF0sXG4gICAgKCkgPT4gQXBpLmdldFByb2R1Y3RJdGVtcyh7IGlya2RDb2RlRHRhbDogaW5wdXQgfSksXG4gICAgeyBlbmFibGVkOiBmYWxzZSB9XG4gICk7XG5cbiAgY29uc3QgcHJvZHVjdEl0ZW1zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGRhdGE/LmRhdGEubWFwKChkKSA9PiAoe1xuICAgICAga2V5OiBkLmlya2RDb2RlRHRhbCArIGQuaXJrZENvZGVJdGVtLFxuICAgICAgLi4uZCxcbiAgICB9KSk7XG4gIH0sIFtkYXRhPy5kYXRhXSk7XG5cbiAgY29uc3Qgcm93U2VsZWN0aW9uOiBUYWJsZVJvd1NlbGVjdGlvbjxLZXlWYWx1ZT4gPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFByb2R1Y3RDb2Rlcy5tYXAoXG4gICAgICAgIChkKSA9PiBkLmlya2RDb2RlRHRhbCArIGQuaXJrZENvZGVJdGVtXG4gICAgICApLFxuICAgICAgb25DaGFuZ2U6IChrZXlzKSA9PiBkaXNwYXRjaChzZXRTZWxlY3RlZFByb2R1Y3RDb2RlcyhrZXlzKSksXG4gICAgICBmaXhlZDogdHJ1ZSxcbiAgICB9O1xuICB9LCBbZGlzcGF0Y2gsIHNlbGVjdGVkUHJvZHVjdENvZGVzXSk7XG5cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0TGVuZ3RoIDwgNCkgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoJ+uztOyihey9lOuTnCA07J6Q66as66W8IOyeheugpe2VtOyjvOyEuOyalC4nKTtcbiAgICByZWZldGNoKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LmRhdGEpIHtcbiAgICAgICAgZGlzcGF0Y2goc2V0U2VhcmNoQ29kZVJlc3VsdHMocmVzdWx0LmRhdGEuZGF0YSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmIChpbnB1dExlbmd0aCA8IDQpIHJldHVybiBtZXNzYWdlLmVycm9yKCfrs7TsooXsvZTrk5wgNOyekOumrOulvCDsnoXroKXtlbTso7zshLjsmpQuJyk7XG4gICAgcmVmZXRjaCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHNldFNlYXJjaENvZGVSZXN1bHRzKHJlc3VsdC5kYXRhLmRhdGEpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRQcm9kdWN0Q29kZXMoc2VsZWN0ZWRQcm9kdWN0Q29kZXMpKTtcbiAgICBkaXNwYXRjaChzZXRJbnB1dCgnJykpO1xuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgc2V0U2VsZWN0ZWRQcm9kdWN0Q29kZXMoXG4gICAgICAgIG5ld1Byb2R1Y3RDb2Rlcy5tYXAoKGl0ZW0pID0+IGl0ZW0uaXJrZENvZGVEdGFsICsgaXRlbS5pcmtkQ29kZUl0ZW0pXG4gICAgICApXG4gICAgKTtcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXMsXG4gICAgZXJyb3I6IGVycm9yIGFzIEVycm9yVHlwZSxcbiAgICBwcm9kdWN0SXRlbXMsXG4gICAgbmV3UHJvZHVjdENvZGVzLFxuICAgIHJvd1NlbGVjdGlvbixcbiAgICBpc01vZGFsT3BlbixcbiAgICBoYW5kbGVDbG9zZU1vZGFsLFxuICAgIGhhbmRsZUVudGVyLFxuICAgIGhhbmRsZUNsaWNrU2VhcmNoLFxuICAgIGhhbmRsZUFwcGx5LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/product/new/step1/useFetchProductCode.tsx\n");

/***/ })

})