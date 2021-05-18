webpackHotUpdate_N_E("pages/products/[onsureProdCode]/[onsureProdVer]",{

/***/ "./hooks/product/modify/useModifyProduct.tsx":
/*!***************************************************!*\
  !*** ./hooks/product/modify/useModifyProduct.tsx ***!
  \***************************************************/
/*! exports provided: useModifyProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useModifyProduct\", function() { return useModifyProduct; });\n/* harmony import */ var apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apis */ \"./apis/index.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var slices_product_modify_productCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slices/product/modify/productCode */ \"./slices/product/modify/productCode.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slices/product/modify/product */ \"./slices/product/modify/product.ts\");\n/* harmony import */ var constants_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/product */ \"./constants/product.ts\");\n/* harmony import */ var slices_product_modify_productChannel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slices/product/modify/productChannel */ \"./slices/product/modify/productChannel.ts\");\n/* harmony import */ var slices_product_modify_productDepositor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slices/product/modify/productDepositor */ \"./slices/product/modify/productDepositor.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction useModifyProduct() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var _ref = router.query,\n      onsureProdCode = _ref.onsureProdCode,\n      onsureProdVer = _ref.onsureProdVer;\n  var result = Object(react_query__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])([\"/public/product/getProduct/onsureProdCode/onsureProdVer\", onsureProdCode, onsureProdVer], function () {\n    return apis__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProduct({\n      onsureProdCode: onsureProdCode,\n      onsureProdVer: onsureProdVer\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (result.data) {\n      var productData = result.data.data;\n      dispatch(Object(slices_product_modify_productCode__WEBPACK_IMPORTED_MODULE_4__[\"setProductCodes\"])(productData.productCodeList));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setSaleGdnm\"])({\n        input: productData.product.saleGdnm,\n        max: constants_product__WEBPACK_IMPORTED_MODULE_7__[\"saleGdnmMaxLength\"]\n      }));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setCtgrGdnm\"])({\n        input: productData.product.ctgrGdnm,\n        max: constants_product__WEBPACK_IMPORTED_MODULE_7__[\"ctgrGdnmMaxLength\"]\n      }));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setInsrCtgr\"])({\n        category: productData.product.insrCtgr\n      }));\n      dispatch(Object(slices_product_modify_productChannel__WEBPACK_IMPORTED_MODULE_8__[\"initChannel\"])(productData.productChnlList));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setProdExpsYn\"])(productData.product.prodExpsYn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setDpsrPrtcExyn\"])(productData.product.dpsrPrtcExyn));\n      dispatch(Object(slices_product_modify_productDepositor__WEBPACK_IMPORTED_MODULE_9__[\"setDpsrCten\"])(productData.productDepositor.dpsrCten));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setLwobCnfmAddp\"])({\n        input: productData.product.lwobCnfmAddp,\n        max: constants_product__WEBPACK_IMPORTED_MODULE_7__[\"lwobCnfmAddpMaxLength\"]\n      }));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setLwobCnfmAgyn\"])(productData.product.lwobCnfmAgyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcExyn\"])(productData.product.premCalcExyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcNotcPrgp\"])({\n        input: productData.product.premCalcNotcPrgp,\n        max: constants_product__WEBPACK_IMPORTED_MODULE_7__[\"premCalcNotcPrgpMaxLength\"]\n      }));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcBrthExyn\"])(productData.product.premCalcBrthExyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcSexExyn\"])(productData.product.premCalcSexExyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcJobExyn\"])(productData.product.premCalcJobExyn));\n    }\n  }, [dispatch, result.data]);\n  return {\n    status: result.status,\n    error: result.error\n  };\n}\n\n_s(useModifyProduct, \"qC8NpyRRF6nzzX+3O0i+eg//tLE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], react_query__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvcHJvZHVjdC9tb2RpZnkvdXNlTW9kaWZ5UHJvZHVjdC50c3g/ZmNjYiJdLCJuYW1lcyI6WyJ1c2VNb2RpZnlQcm9kdWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5Iiwib25zdXJlUHJvZENvZGUiLCJvbnN1cmVQcm9kVmVyIiwicmVzdWx0IiwidXNlUXVlcnkiLCJBcGkiLCJnZXRQcm9kdWN0IiwidXNlRWZmZWN0IiwiZGF0YSIsInByb2R1Y3REYXRhIiwic2V0UHJvZHVjdENvZGVzIiwicHJvZHVjdENvZGVMaXN0Iiwic2V0U2FsZUdkbm0iLCJpbnB1dCIsInByb2R1Y3QiLCJzYWxlR2RubSIsIm1heCIsInNhbGVHZG5tTWF4TGVuZ3RoIiwic2V0Q3Rnckdkbm0iLCJjdGdyR2RubSIsImN0Z3JHZG5tTWF4TGVuZ3RoIiwic2V0SW5zckN0Z3IiLCJjYXRlZ29yeSIsImluc3JDdGdyIiwiaW5pdENoYW5uZWwiLCJwcm9kdWN0Q2hubExpc3QiLCJzZXRQcm9kRXhwc1luIiwicHJvZEV4cHNZbiIsInNldERwc3JQcnRjRXh5biIsImRwc3JQcnRjRXh5biIsInNldERwc3JDdGVuIiwicHJvZHVjdERlcG9zaXRvciIsImRwc3JDdGVuIiwic2V0THdvYkNuZm1BZGRwIiwibHdvYkNuZm1BZGRwIiwibHdvYkNuZm1BZGRwTWF4TGVuZ3RoIiwic2V0THdvYkNuZm1BZ3luIiwibHdvYkNuZm1BZ3luIiwic2V0UHJlbUNhbGNFeHluIiwicHJlbUNhbGNFeHluIiwic2V0UHJlbUNhbGNOb3RjUHJncCIsInByZW1DYWxjTm90Y1ByZ3AiLCJwcmVtQ2FsY05vdGNQcmdwTWF4TGVuZ3RoIiwic2V0UHJlbUNhbGNCcnRoRXh5biIsInByZW1DYWxjQnJ0aEV4eW4iLCJzZXRQcmVtQ2FsY1NleEV4eW4iLCJwcmVtQ2FsY1NleEV4eW4iLCJzZXRQcmVtQ2FsY0pvYkV4eW4iLCJwcmVt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QUFDbUQsd0ZBQWtCLENBQUN0QyxXQUFXLENBQUNLLE9BQVosQ0FBb0JrQyxlQUFyQixDQUFuQixDQUFSO0FBQ0Q7QUFDRixHQXZDUSxFQXVDTixDQUFDcEQsUUFBRCxFQUFXTyxNQUFNLENBQUNLLElBQWxCLENBdkNNLENBQVQ7QUF5Q0EsU0FBTztBQUNMeUMsVUFBTSxFQUFFOUMsTUFBTSxDQUFDOEMsTUFEVjtBQUVMQyxTQUFLLEVBQUUvQyxNQUFNLENBQUMrQztBQUZULEdBQVA7QUFJRDs7R0ExRGV2RCxnQjtVQUNHRSx1RCxFQUNGRSxxRCxFQUVBSyxvRCIsImZpbGUiOiIuL2hvb2tzL3Byb2R1Y3QvbW9kaWZ5L3VzZU1vZGlmeVByb2R1Y3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaSBmcm9tICdhcGlzJztcbmltcG9ydCB7IEVycm9yVHlwZSB9IGZyb20gJ2ludGVyZmFjZXMvY29tbW9uJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgUXVlcnlQYXJhbXMgfSBmcm9tICdpbnRlcmZhY2VzL2ZldGNoJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2V0UHJvZHVjdENvZGVzIH0gZnJvbSAnc2xpY2VzL3Byb2R1Y3QvbW9kaWZ5L3Byb2R1Y3RDb2RlJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIHNldEN0Z3JHZG5tLFxuICBzZXRJbnNyQ3RncixcbiAgc2V0UHJvZEV4cHNZbixcbiAgc2V0U2FsZUdkbm0sXG4gIHNldERwc3JQcnRjRXh5bixcbiAgc2V0THdvYkNuZm1BZGRwLFxuICBzZXRMd29iQ25mbUFneW4sXG4gIHNldFByZW1DYWxjRXh5bixcbiAgc2V0UHJlbUNhbGNOb3RjUHJncCxcbiAgc2V0UHJlbUNhbGNCcnRoRXh5bixcbiAgc2V0UHJlbUNhbGNTZXhFeHluLFxuICBzZXRQcmVtQ2FsY0pvYkV4eW4sXG59IGZyb20gJ3NsaWNlcy9wcm9kdWN0L21vZGlmeS9wcm9kdWN0JztcbmltcG9ydCB7XG4gIHNhbGVHZG5tTWF4TGVuZ3RoLFxuICBjdGdyR2RubU1heExlbmd0aCxcbiAgbHdvYkNuZm1BZGRwTWF4TGVuZ3RoLFxuICBwcmVtQ2FsY05vdGNQcmdwTWF4TGVuZ3RoLFxufSBmcm9tICdjb25zdGFudHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBpbml0Q2hhbm5lbCB9IGZyb20gJ3NsaWNlcy9wcm9kdWN0L21vZGlmeS9wcm9kdWN0Q2hhbm5lbCc7XG5pbXBvcnQgeyBzZXREcHNyQ3RlbiB9IGZyb20gJ3NsaWNlcy9wcm9kdWN0L21vZGlmeS9wcm9kdWN0RGVwb3NpdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vZGlmeVByb2R1Y3QoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgb25zdXJlUHJvZENvZGUsIG9uc3VyZVByb2RWZXIgfSA9IHJvdXRlci5xdWVyeSBhcyBRdWVyeVBhcmFtcztcbiAgY29uc3QgcmVzdWx0ID0gdXNlUXVlcnkoXG4gICAgW1xuICAgICAgYC9wdWJsaWMvcHJvZHVjdC9nZXRQcm9kdWN0L29uc3VyZVByb2RDb2RlL29uc3VyZVByb2RWZXJgLFxuICAgICAgb25zdXJlUHJvZENvZGUsXG4gICAgICBvbnN1cmVQcm9kVmVyLFxuICAgIF0sXG4gICAgKCkgPT4gQXBpLmdldFByb2R1Y3QoeyBvbnN1cmVQcm9kQ29kZSwgb25zdXJlUHJvZFZlciB9KVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlc3VsdC5kYXRhKSB7XG4gICAgICBjb25zdCBwcm9kdWN0RGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICBkaXNwYXRjaChzZXRQcm9kdWN0Q29kZXMocHJvZHVjdERhdGEucHJvZHVjdENvZGVMaXN0KSk7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgc2V0U2FsZUdkbm0oe1xuICAgICAgICAgIGlucHV0OiBwcm9kdWN0RGF0YS5wcm9kdWN0LnNhbGVHZG5tLFxuICAgICAgICAgIG1heDogc2FsZUdkbm1NYXhMZW5ndGgsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIHNldEN0Z3JHZG5tKHtcbiAgICAgICAgICBpbnB1dDogcHJvZHVjdERhdGEucHJvZHVjdC5jdGdyR2RubSxcbiAgICAgICAgICBtYXg6IGN0Z3JHZG5tTWF4TGVuZ3RoLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGRpc3BhdGNoKHNldEluc3JDdGdyKHsgY2F0ZWdvcnk6IHByb2R1Y3REYXRhLnByb2R1Y3QuaW5zckN0Z3IgfSkpO1xuICAgICAgZGlzcGF0Y2goaW5pdENoYW5uZWwocHJvZHVjdERhdGEucHJvZHVjdENobmxMaXN0KSk7XG4gICAgICBkaXNwYXRjaChzZXRQcm9kRXhwc1luKHByb2R1Y3REYXRhLnByb2R1Y3QucHJvZEV4cHNZbikpO1xuICAgICAgZGlzcGF0Y2goc2V0RHBzclBydGNFeHluKHByb2R1Y3REYXRhLnByb2R1Y3QuZHBzclBydGNFeHluKSk7XG4gICAgICBkaXNwYXRjaChzZXREcHNyQ3Rlbihwcm9kdWN0RGF0YS5wcm9kdWN0RGVwb3NpdG9yLmRwc3JDdGVuKSk7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgc2V0THdvYkNuZm1BZGRwKHtcbiAgICAgICAgICBpbnB1dDogcHJvZHVjdERhdGEucHJvZHVjdC5sd29iQ25mbUFkZHAsXG4gICAgICAgICAgbWF4OiBsd29iQ25mbUFkZHBNYXhMZW5ndGgsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgZGlzcGF0Y2goc2V0THdvYkNuZm1BZ3luKHByb2R1Y3REYXRhLnByb2R1Y3QubHdvYkNuZm1BZ3luKSk7XG4gICAgICBkaXNwYXRjaChzZXRQcmVtQ2FsY0V4eW4ocHJvZHVjdERhdGEucHJvZHVjdC5wcmVtQ2FsY0V4eW4pKTtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBzZXRQcmVtQ2FsY05vdGNQcmdwKHtcbiAgICAgICAgICBpbnB1dDogcHJvZHVjdERhdGEucHJvZHVjdC5wcmVtQ2FsY05vdGNQcmdwLFxuICAgICAgICAgIG1heDogcHJlbUNhbGNOb3RjUHJncE1heExlbmd0aCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaChzZXRQcmVtQ2FsY0JydGhFeHluKHByb2R1Y3REYXRhLnByb2R1Y3QucHJlbUNhbGNCcnRoRXh5bikpO1xuICAgICAgZGlzcGF0Y2goc2V0UHJlbUNhbGNTZXhFeHluKHByb2R1Y3REYXRhLnByb2R1Y3QucHJlbUNhbGNTZXhFeHluKSk7XG4gICAgICBkaXNwYXRjaChzZXRQcmVtQ2FsY0pvYkV4eW4ocHJvZHVjdERhdGEucHJvZHVjdC5wcmVtQ2FsY0pvYkV4eW4pKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgcmVzdWx0LmRhdGFdKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1czogcmVzdWx0LnN0YXR1cyxcbiAgICBlcnJvcjogcmVzdWx0LmVycm9yIGFzIEVycm9yVHlwZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/product/modify/useModifyProduct.tsx\n");

/***/ })

})