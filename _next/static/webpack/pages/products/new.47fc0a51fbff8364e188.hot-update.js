webpackHotUpdate_N_E("pages/products/new",{

/***/ "./hooks/product/new/step1/useFetchProductCode.tsx":
/*!*********************************************************!*\
  !*** ./hooks/product/new/step1/useFetchProductCode.tsx ***!
  \*********************************************************/
/*! exports provided: useFetchProductCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFetchProductCode\", function() { return useFetchProductCode; });\n/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style */ \"./node_modules/antd/lib/message/style/index.js\");\n/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ \"./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dan_hli_workspace_hli_cms_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slices/product/new/productCode */ \"./slices/product/new/productCode.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var apis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apis */ \"./apis/index.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_dan_hli_workspace_hli_cms_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction useFetchProductCode() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isModalOpen = _useState[0],\n      setIsModalOpen = _useState[1];\n\n  var input = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"inputSelector\"]);\n  var selectedProductCodes = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"selectedProductCodesSelector\"]);\n  var newProductCodes = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"productCodesSelector\"]);\n  var inputLength = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return input.length;\n  }, [input]);\n\n  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(['/public/product/getProductItems/:irkdCodeDtal', input], function () {\n    return apis__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getProductItems({\n      irkdCodeDtal: input\n    });\n  }, {\n    enabled: false\n  }),\n      status = _useQuery.status,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var productItems = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return data === null || data === void 0 ? void 0 : data.data.map(function (d) {\n      return _objectSpread({\n        key: d.irkdCodeDtal + d.irkdCodeItem,\n        dataIndex: d.irkdCodeDtal + d.irkdCodeItem\n      }, d);\n    });\n  }, [data === null || data === void 0 ? void 0 : data.data]);\n  var rowSelection = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return {\n      selectedRowKeys: selectedProductCodes.map(function (d) {\n        return d.irkdCodeDtal + d.irkdCodeItem;\n      }),\n      onChange: function onChange(keys) {\n        return dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setSelectedProductCodes\"])(keys));\n      },\n      fixed: true\n    };\n  }, [dispatch, selectedProductCodes]);\n\n  var handleEnter = function handleEnter() {\n    if (inputLength < 4) return antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('보종코드 4자리를 입력해주세요.');\n    refetch();\n    setIsModalOpen(true);\n  };\n\n  var handleClickSearch = function handleClickSearch() {\n    if (inputLength < 4) return antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('보종코드 4자리를 입력해주세요.');\n    refetch();\n    setIsModalOpen(true);\n  };\n\n  var handleApply = function handleApply() {\n    dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setProductCodes\"])(selectedProductCodes));\n    dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setInput\"])(''));\n    setIsModalOpen(false);\n  };\n\n  var handleCloseModal = function handleCloseModal() {\n    dispatch(Object(slices_product_new_productCode__WEBPACK_IMPORTED_MODULE_5__[\"setSelectedProductCodes\"])(newProductCodes.map(function (item) {\n      return item.irkdCodeDtal + item.irkdCodeItem;\n    })));\n    setIsModalOpen(false);\n  };\n\n  return {\n    status: status,\n    error: error,\n    productItems: productItems,\n    newProductCodes: newProductCodes,\n    rowSelection: rowSelection,\n    isModalOpen: isModalOpen,\n    handleCloseModal: handleCloseModal,\n    handleEnter: handleEnter,\n    handleClickSearch: handleClickSearch,\n    handleApply: handleApply\n  };\n}\n\n_s(useFetchProductCode, \"ovILXZuvFJvFDfMPdtfrpbbO8sE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_query__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvcHJvZHVjdC9uZXcvc3RlcDEvdXNlRmV0Y2hQcm9kdWN0Q29kZS50c3g/YzMwNSJdLCJuYW1lcyI6WyJ1c2VGZXRjaFByb2R1Y3RDb2RlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsImlucHV0IiwidXNlU2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic2VsZWN0ZWRQcm9kdWN0Q29kZXMiLCJzZWxlY3RlZFByb2R1Y3RDb2Rlc1NlbGVjdG9yIiwibmV3UHJvZHVjdENvZGVzIiwicHJvZHVjdENvZGVzU2VsZWN0b3IiLCJpbnB1dExlbmd0aCIsInVzZU1lbW8iLCJsZW5ndGgiLCJ1c2VRdWVyeSIsIkFwaSIsImdldFByb2R1Y3RJdGVtcyIsImlya2RDb2RlRHRhbCIsImVuYWJsZWQiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJyZWZldGNoIiwicHJvZHVjdEl0ZW1zIiwibWFwIiwiZCIsImtleSIsImlya2RDb2RlSXRlbSIsImRhdGFJbmRleCIsInJvd1NlbGVjdGlvbiIsInNlbGVjdGVkUm93S2V5cyIsIm9uQ2hhbmdlIiwia2V5cyIsInNldFNlbGVjdGVkUHJvZHVjdENvZGVzIiwiZml4ZWQiLCJoYW5kbGVFbnRlciIsImhhbmRsZUNsaWNrU2VhcmNoIiwiaGFuZGxlQXBwbHkiLCJzZXRQcm9kdWN0Q29kZXMiLCJzZXRJbnB1dCIsImhhbmRsZUNsb3NlTW9kYWwiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFJTyxTQUFTQSxtQkFBVCxHQUErQjtBQUFBOztBQUNwQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURvQyxrQkFFRUMsc0RBQVEsQ0FBQyxLQUFELENBRlY7QUFBQSxNQUU3QkMsV0FGNkI7QUFBQSxNQUVoQkMsY0FGZ0I7O0FB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QWhCLENBQW9CLFVBQUNpQixJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDeEIsWUFBTCxHQUFvQndCLElBQUksQ0FBQ2QsWUFBbkM7QUFBQSxLQUFwQixDQURxQixDQURqQixDQUFSO0FBS0F4QixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBUEQ7O0FBU0EsU0FBTztBQUNMZ0IsVUFBTSxFQUFOQSxNQURLO0FBRUxDLFNBQUssRUFBRUEsS0FGRjtBQUdMRyxnQkFBWSxFQUFaQSxZQUhLO0FBSUxkLG1CQUFlLEVBQWZBLGVBSks7QUFLTG9CLGdCQUFZLEVBQVpBLFlBTEs7QUFNTDNCLGVBQVcsRUFBWEEsV0FOSztBQU9Mc0Msb0JBQWdCLEVBQWhCQSxnQkFQSztBQVFMTCxlQUFXLEVBQVhBLFdBUks7QUFTTEMscUJBQWlCLEVBQWpCQSxpQkFUSztBQVVMQyxlQUFXLEVBQVhBO0FBVkssR0FBUDtBQVlEOztHQXZFZXZDLG1CO1VBQ0dFLHVELEVBRUhLLHVELEVBQ2VBLHVELEVBQ0xBLHVELEVBR2lCUyxvRCIsImZpbGUiOiIuL2hvb2tzL3Byb2R1Y3QvbmV3L3N0ZXAxL3VzZUZldGNoUHJvZHVjdENvZGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBpbnB1dFNlbGVjdG9yLFxuICBwcm9kdWN0Q29kZXNTZWxlY3RvcixcbiAgc2VsZWN0ZWRQcm9kdWN0Q29kZXNTZWxlY3RvcixcbiAgc2V0SW5wdXQsXG4gIHNldFByb2R1Y3RDb2RlcyxcbiAgc2V0U2VsZWN0ZWRQcm9kdWN0Q29kZXMsXG59IGZyb20gJ3NsaWNlcy9wcm9kdWN0L25ldy9wcm9kdWN0Q29kZSc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCBBcGkgZnJvbSAnYXBpcyc7XG5pbXBvcnQgeyBFcnJvclR5cGUsIEtleVZhbHVlIH0gZnJvbSAnaW50ZXJmYWNlcy9jb21tb24nO1xuaW1wb3J0IHsgVGFibGVSb3dTZWxlY3Rpb24gfSBmcm9tICdhbnRkL2xpYi90YWJsZS9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmV0Y2hQcm9kdWN0Q29kZSgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaW5wdXQgPSB1c2VTZWxlY3RvcihpbnB1dFNlbGVjdG9yKTtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9kdWN0Q29kZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RlZFByb2R1Y3RDb2Rlc1NlbGVjdG9yKTtcbiAgY29uc3QgbmV3UHJvZHVjdENvZGVzID0gdXNlU2VsZWN0b3IocHJvZHVjdENvZGVzU2VsZWN0b3IpO1xuICBjb25zdCBpbnB1dExlbmd0aCA9IHVzZU1lbW8oKCkgPT4gaW5wdXQubGVuZ3RoLCBbaW5wdXRdKTtcblxuICBjb25zdCB7IHN0YXR1cywgZXJyb3IsIGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KFxuICAgIFsnL3B1YmxpYy9wcm9kdWN0L2dldFByb2R1Y3RJdGVtcy86aXJrZENvZGVEdGFsJywgaW5wdXRdLFxuICAgICgpID0+IEFwaS5nZXRQcm9kdWN0SXRlbXMoeyBpcmtkQ29kZUR0YWw6IGlucHV0IH0pLFxuICAgIHsgZW5hYmxlZDogZmFsc2UgfVxuICApO1xuXG4gIGNvbnN0IHByb2R1Y3RJdGVtcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBkYXRhPy5kYXRhLm1hcCgoZCkgPT4gKHtcbiAgICAgIGtleTogZC5pcmtkQ29kZUR0YWwgKyBkLmlya2RDb2RlSXRlbSxcbiAgICAgIGRhdGFJbmRleDogZC5pcmtkQ29kZUR0YWwgKyBkLmlya2RDb2RlSXRlbSxcbiAgICAgIC4uLmQsXG4gICAgfSkpO1xuICB9LCBbZGF0YT8uZGF0YV0pO1xuXG4gIGNvbnN0IHJvd1NlbGVjdGlvbjogVGFibGVSb3dTZWxlY3Rpb248S2V5VmFsdWU+ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRQcm9kdWN0Q29kZXMubWFwKFxuICAgICAgICAoZCkgPT4gZC5pcmtkQ29kZUR0YWwgKyBkLmlya2RDb2RlSXRlbVxuICAgICAgKSxcbiAgICAgIG9uQ2hhbmdlOiAoa2V5cykgPT4gZGlzcGF0Y2goc2V0U2VsZWN0ZWRQcm9kdWN0Q29kZXMoa2V5cykpLFxuICAgICAgZml4ZWQ6IHRydWUsXG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoLCBzZWxlY3RlZFByb2R1Y3RDb2Rlc10pO1xuXG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIGlmIChpbnB1dExlbmd0aCA8IDQpIHJldHVybiBtZXNzYWdlLmVycm9yKCfrs7TsooXsvZTrk5wgNOyekOumrOulvCDsnoXroKXtlbTso7zshLjsmpQuJyk7XG4gICAgcmVmZXRjaCgpO1xuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmIChpbnB1dExlbmd0aCA8IDQpIHJldHVybiBtZXNzYWdlLmVycm9yKCfrs7TsooXsvZTrk5wgNOyekOumrOulvCDsnoXroKXtlbTso7zshLjsmpQuJyk7XG4gICAgcmVmZXRjaCgpO1xuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwcGx5ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFByb2R1Y3RDb2RlcyhzZWxlY3RlZFByb2R1Y3RDb2RlcykpO1xuICAgIGRpc3BhdGNoKHNldElucHV0KCcnKSk7XG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBzZXRTZWxlY3RlZFByb2R1Y3RDb2RlcyhcbiAgICAgICAgbmV3UHJvZHVjdENvZGVzLm1hcCgoaXRlbSkgPT4gaXRlbS5pcmtkQ29kZUR0YWwgKyBpdGVtLmlya2RDb2RlSXRlbSlcbiAgICAgIClcbiAgICApO1xuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1cyxcbiAgICBlcnJvcjogZXJyb3IgYXMgRXJyb3JUeXBlLFxuICAgIHByb2R1Y3RJdGVtcyxcbiAgICBuZXdQcm9kdWN0Q29kZXMsXG4gICAgcm93U2VsZWN0aW9uLFxuICAgIGlzTW9kYWxPcGVuLFxuICAgIGhhbmRsZUNsb3NlTW9kYWwsXG4gICAgaGFuZGxlRW50ZXIsXG4gICAgaGFuZGxlQ2xpY2tTZWFyY2gsXG4gICAgaGFuZGxlQXBwbHksXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/product/new/step1/useFetchProductCode.tsx\n");

/***/ })

})