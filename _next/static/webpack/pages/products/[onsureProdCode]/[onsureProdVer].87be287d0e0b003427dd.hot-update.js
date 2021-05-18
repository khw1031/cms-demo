webpackHotUpdate_N_E("pages/products/[onsureProdCode]/[onsureProdVer]",{

/***/ "./hooks/product/modify/useModifyProduct.tsx":
/*!***************************************************!*\
  !*** ./hooks/product/modify/useModifyProduct.tsx ***!
  \***************************************************/
/*! exports provided: useModifyProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useModifyProduct\", function() { return useModifyProduct; });\n/* harmony import */ var apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apis */ \"./apis/index.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var slices_product_modify_productCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slices/product/modify/productCode */ \"./slices/product/modify/productCode.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slices/product/modify/product */ \"./slices/product/modify/product.ts\");\n/* harmony import */ var constants_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/product */ \"./constants/product.ts\");\n/* harmony import */ var slices_product_modify_productChannel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slices/product/modify/productChannel */ \"./slices/product/modify/productChannel.ts\");\n/* harmony import */ var slices_product_modify_productDepositor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slices/product/modify/productDepositor */ \"./slices/product/modify/productDepositor.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction useModifyProduct() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var _ref = router.query,\n      onsureProdCode = _ref.onsureProdCode,\n      onsureProdVer = _ref.onsureProdVer;\n  var result = Object(react_query__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])([\"/public/product/getProduct/onsureProdCode/onsureProdVer\", onsureProdCode, onsureProdVer], function () {\n    return apis__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProduct({\n      onsureProdCode: onsureProdCode,\n      onsureProdVer: onsureProdVer\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (result.data) {\n      var _productData$product;\n\n      var productData = result.data.data;\n      dispatch(Object(slices_product_modify_productCode__WEBPACK_IMPORTED_MODULE_4__[\"setProductCodes\"])(productData.productCodeList));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setSaleGdnm\"])({\n        input: productData.product.saleGdnm,\n        max: constants_product__WEBPACK_IMPORTED_MODULE_7__[\"saleGdnmMaxLength\"]\n      }));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setCtgrGdnm\"])({\n        input: productData.product.ctgrGdnm,\n        max: constants_product__WEBPACK_IMPORTED_MODULE_7__[\"ctgrGdnmMaxLength\"]\n      }));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setInsrCtgr\"])({\n        category: productData.product.insrCtgr\n      }));\n      dispatch(Object(slices_product_modify_productChannel__WEBPACK_IMPORTED_MODULE_8__[\"initChannel\"])(productData.productChnlList));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setProdExpsYn\"])(productData.product.prodExpsYn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setDpsrPrtcExyn\"])(productData.product.dpsrPrtcExyn));\n      dispatch(Object(slices_product_modify_productDepositor__WEBPACK_IMPORTED_MODULE_9__[\"setDpsrCten\"])(productData.productDepositor.dpsrCten));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setLwobCnfmAddp\"])({\n        input: productData.product.lwobCnfmAddp,\n        max: constants_product__WEBPACK_IMPORTED_MODULE_7__[\"lwobCnfmAddpMaxLength\"]\n      }));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setLwobCnfmAgyn\"])(productData.product.lwobCnfmAgyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcExyn\"])(productData.product.premCalcExyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcNotcPrgp\"])({\n        input: productData.product.premCalcNotcPrgp,\n        max: constants_product__WEBPACK_IMPORTED_MODULE_7__[\"premCalcNotcPrgpMaxLength\"]\n      }));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcBrthExyn\"])(productData.product.premCalcBrthExyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcSexExyn\"])(productData.product.premCalcSexExyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcJobExyn\"])(productData.product.premCalcJobExyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcBtnExyn\"])(productData.product.premCalcBtnExyn));\n      dispatch(Object(slices_product_modify_product__WEBPACK_IMPORTED_MODULE_6__[\"setPremCalcBtnPrgp\"])({\n        input: ((_productData$product = productData.product) === null || _productData$product === void 0 ? void 0 : _productData$product.premCalcBtnPrgp) || \"\",\n        max: constants_product__WEBPACK_IMPORTED_MODULE_7__[\"premCalcBtnPrgpMaxLength\"]\n      }));\n    }\n  }, [dispatch, result.data]);\n  return {\n    status: result.status,\n    error: result.error\n  };\n}\n\n_s(useModifyProduct, \"qC8NpyRRF6nzzX+3O0i+eg//tLE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], react_query__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvcHJvZHVjdC9tb2RpZnkvdXNlTW9kaWZ5UHJvZHVjdC50c3g/ZmNjYiJdLCJuYW1lcyI6WyJ1c2VNb2RpZnlQcm9kdWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5Iiwib25zdXJlUHJvZENvZGUiLCJvbnN1cmVQcm9kVmVyIiwicmVzdWx0IiwidXNlUXVlcnkiLCJBcGkiLCJnZXRQcm9kdWN0IiwidXNlRWZmZWN0IiwiZGF0YSIsInByb2R1Y3REYXRhIiwic2V0UHJvZHVjdENvZGVzIiwicHJvZHVjdENvZGVMaXN0Iiwic2V0U2FsZUdkbm0iLCJpbnB1dCIsInByb2R1Y3QiLCJzYWxlR2RubSIsIm1heCIsInNhbGVHZG5tTWF4TGVuZ3RoIiwic2V0Q3Rnckdkbm0iLCJjdGdyR2RubSIsImN0Z3JHZG5tTWF4TGVuZ3RoIiwic2V0SW5zckN0Z3IiLCJjYXRlZ29yeSIsImluc3JDdGdyIiwiaW5pdENoYW5uZWwiLCJwcm9kdWN0Q2hubExpc3QiLCJzZXRQcm9kRXhwc1luIiwicHJvZEV4cHNZbiIsInNldERwc3JQcnRjRXh5biIsImRwc3JQcnRjRXh5biIsInNldERwc3JDdGVuIiwicHJvZHVjdERlcG9zaXRvciIsImRwc3JDdGVuIiwic2V0THdvYkNuZm1BZGRwIiwibHdvYkNuZm1BZGRwIiwibHdvYkNuZm1BZGRwTWF4TGVuZ3RoIiwic2V0THdvYkNuZm1BZ3luIiwibHdvYkNuZm1BZ3luIiwic2V0UHJlbUNhbGNFeHluIiwicHJlbUNhbGNFeHluIiwic2V0UHJlbUNhbGNOb3RjUHJncCIsInByZW1DYWxjTm90Y1ByZ3AiLCJwcmVtQ2FsY05vdGNQcmdwTWF4TGVuZ3RoIiwic2V0UHJlbUNhbGNCcnRoRXh5biIsInByZW1DYWxjQnJ0aEV4eW4iLCJzZXRQcmVtQ2FsY1NleEV4eW4iLCJwcmVtQ2FsY1NleEV4eW4iLCJzZXRQcmVtQ2FsY0pvYkV4eW4iLCJwcmVtQ2FsY0pvYkV4eW4iLCJzZXRQcmVtQ2FsY0J0bkV4eW4iLCJwcmVtQ2FsY0J0bkV4eW4iLCJzZXRQcmVtQ2FsY0J0blByZ3AiLCJwcmVtQ2FsY0J0blByZ3AiLCJwcmVtQ2FsY0J0blByZ3BNYXhMZW5ndGgiLCJzdGF0dXMiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBT0E7QUFDQTtBQUVPLFNBQVNBLGdCQUFULEdBQTRCO0FBQUE7O0FBQ2pDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRmlDLGFBR1NELE1BQU0sQ0FBQ0UsS0FIaEI7QUFBQSxNQUd6QkMsY0FIeUIsUUFHekJBLGNBSHlCO0FBQUEsTUFHVEMsYUFIUyxRQUdUQSxhQUhTO0FBSWpDLE1BQU1DLE1BQU0sR0FBR0MsNERBQVEsQ0FDckIsNERBRUVILGNBRkYsRUFHRUMsYUFIRixDQURxQixFQU1yQjtBQUFBLFdBQU1HLDRDQUFHLENBQUNDLFVBQUosQ0FBZTtBQUFFTCxvQkFBYyxFQUFkQSxjQUFGO0FBQWtCQyxtQkFBYSxFQUFiQTtBQUFsQixLQUFmLENBQU47QUFBQSxHQU5xQixDQUF2QjtBQVNBSyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixNQUFNLENBQUNLLElBQVgsRUFBaUI7QUFBQTs7QUFDZixVQUFNQyxXQUFXLEdBQUdOLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZQSxJQUFoQztBQUNBWixjQUFRLENBQUNjLHlGQUFlLENBQUNELFdBQVcsQ0FBQ0UsZUFBYixDQUFoQixDQUFSO0FBQ0FmLGNBQVEsQ0FDTmdCLGlGQUFXLENBQUM7QUFDVkMsYUFBSyxFQUFFSixXQUFXLENBQUNLLE9BQVosQ0FBb0JDLFFBRGpCO0FBRVZDLFdBQUcsRUFBRUMsbUVBQWlCQTtBQUZaLE9BQUQsQ0FETCxDQUFSO0FBTUFyQixjQUFRLENBQ05zQixpRkFBVyxDQUFDO0FBQ1ZMLGFBQUssRUFBRUosV0FBVyxDQUFDSyxPQUFaLENBQW9CSyxRQURqQjtBQUVWSCxXQUFHLEVBQUVJLG1FQUFpQkE7QUFGWixPQUFELENBREwsQ0FBUjtBQU1BeEIsY0FBUSxDQUFDeUIsaUZBQVcsQ0FBQztBQUFFQyxnQkFBUSxFQUFFYixXQUFXLENBQUNLLE9BQVosQ0FBb0JTO0FBQWhDLE9BQUQsQ0FBWixDQUFSO0FBQ0EzQixjQUFRLENBQUM0Qix3RkFBVyxDQUFDZixXQUFXLENBQUNnQixlQUFiLENBQVosQ0FBUjtBQUNBN0IsY0FBUSxDQUFDOEIsbUZBQWEsQ0FBQ2pCLFdBQVcsQ0FBQ0ssT0FBWixDQUFvQmEsVUFBckIsQ0FBZCxDQUFSO0FBQ0EvQixjQUFRLENBQUNnQyxxRkFBZSxDQUFDbkIsV0FBVyxDQUFDSyxPQUFaLENBQW9CZSxZQUFyQixDQUFoQixDQUFSO0FBQ0FqQyxjQUFRLENBQUNrQywwRkFBVyxDQUFDckIsV0FBVyxDQUFDc0IsZ0JBQVosQ0FBNkJDLFFBQTlCLENBQVosQ0FBUjtBQUNBcEMsY0FBUSxDQUNOcUMscUZBQWUsQ0FBQztBQUNkcEIsYUFBSyxFQUFFSixXQUFXLENBQUNLLE9BQVosQ0FBb0JvQixZQURiO0FBRWRsQixXQUFHLEVBQUVtQix1RUFBcUJBO0FBRlosT0FBRCxDQURULENBQVI7QUFNQXZDLGNBQVEsQ0FBQ3dDLHFGQUFlLENBQUMzQixXQUFXLENBQUNLLE9BQVosQ0FBb0J1QixZQUFyQixDQUFoQixDQUFSO0FBQ0F6QyxjQUFRLENBQUMwQyxxRkFBZSxDQUFDN0IsV0FBVyxDQUFDSyxPQUFaLENBQW9CeUIsWUFBckIsQ0FBaEIsQ0FBUjtBQUNBM0MsY0FBUSxDQUNONEMseUZBQW1CLENBQUM7QUFDbEIzQixhQUFLLEVBQUVKLFdBQVcsQ0FBQ0ssT0FBWixDQUFvQjJCLGdCQURUO0FBRWxCekIsV0FBRyxFQUFFMEIsMkVBQXlCQTtBQUZaLE9BQUQsQ0FEYixDQUFSO0FBTUE5QyxjQUFRLENBQUMrQyx5RkFBbUIsQ0FBQ2xDLFdBQVcsQ0FBQ0ssT0FBWixDQUFvQjhCLGdCQUFyQixDQUFwQixDQUFSO0FBQ0FoRCxjQUFRLENBQUNpRCx3RkFBa0IsQ0FBQ3BDLFdBQVcsQ0FBQ0ssT0FBWixDQUFvQmdDLGVBQXJCLENBQW5CLENBQVI7QUFDQWxELGNBQVEsQ0FBQ21ELHdGQUFrQixDQUFDdEMsV0FBVyxDQUFDSyxPQUFaLENBQW9Ca0MsZUFBckIsQ0FBbkIsQ0FBUjtBQUNBcEQsY0FBUSxDQUFDcUQsd0ZBQWtCLENBQUN4QyxXQUFXLENBQUNLLE9BQVosQ0FBb0JvQyxlQUFyQixDQUFuQixDQUFSO0FBQ0F0RCxjQUFRLENBQ051RCx3RkFBa0IsQ0FBQztBQUNqQnRDLGFBQUssRUFBRSx5QkFBQUosV0FBVyxDQUFDSyxPQUFaLDhFQUFxQnNDLGVBQXJCLEtBQXdDLEVBRDlCO0FBRWpCcEMsV0FBRyxFQUFFcUMsMEVBQXdCQTtBQUZaLE9BQUQsQ0FEWixDQUFSO0FBTUQ7QUFDRixHQTlDUSxFQThDTixDQUFDekQsUUFBRCxFQUFXTyxNQUFNLENBQUNLLElBQWxCLENBOUNNLENBQVQ7QUFnREEsU0FBTztBQUNMOEMsVUFBTSxFQUFFbkQsTUFBTSxDQUFDbUQsTUFEVjtBQUVMQyxTQUFLLEVBQUVwRCxNQUFNLENBQUNvRDtBQUZULEdBQVA7QUFJRDs7R0FqRWU1RCxnQjtVQUNHRSx1RCxFQUNGRSxxRCxFQUVBSyxvRCIsImZpbGUiOiIuL2hvb2tzL3Byb2R1Y3QvbW9kaWZ5L3VzZU1vZGlmeVByb2R1Y3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaSBmcm9tICdhcGlzJztcbmltcG9ydCB7IEVycm9yVHlwZSB9IGZyb20gJ2ludGVyZmFjZXMvY29tbW9uJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgUXVlcnlQYXJhbXMgfSBmcm9tICdpbnRlcmZhY2VzL2ZldGNoJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2V0UHJvZHVjdENvZGVzIH0gZnJvbSAnc2xpY2VzL3Byb2R1Y3QvbW9kaWZ5L3Byb2R1Y3RDb2RlJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIHNldEN0Z3JHZG5tLFxuICBzZXRJbnNyQ3RncixcbiAgc2V0UHJvZEV4cHNZbixcbiAgc2V0U2FsZUdkbm0sXG4gIHNldERwc3JQcnRjRXh5bixcbiAgc2V0THdvYkNuZm1BZGRwLFxuICBzZXRMd29iQ25mbUFneW4sXG4gIHNldFByZW1DYWxjRXh5bixcbiAgc2V0UHJlbUNhbGNOb3RjUHJncCxcbiAgc2V0UHJlbUNhbGNCcnRoRXh5bixcbiAgc2V0UHJlbUNhbGNTZXhFeHluLFxuICBzZXRQcmVtQ2FsY0pvYkV4eW4sXG4gIHNldFByZW1DYWxjQnRuRXh5bixcbiAgc2V0UHJlbUNhbGNCdG5QcmdwLFxufSBmcm9tICdzbGljZXMvcHJvZHVjdC9tb2RpZnkvcHJvZHVjdCc7XG5pbXBvcnQge1xuICBzYWxlR2RubU1heExlbmd0aCxcbiAgY3Rnckdkbm1NYXhMZW5ndGgsXG4gIGx3b2JDbmZtQWRkcE1heExlbmd0aCxcbiAgcHJlbUNhbGNOb3RjUHJncE1heExlbmd0aCxcbiAgcHJlbUNhbGNCdG5QcmdwTWF4TGVuZ3RoLFxufSBmcm9tICdjb25zdGFudHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBpbml0Q2hhbm5lbCB9IGZyb20gJ3NsaWNlcy9wcm9kdWN0L21vZGlmeS9wcm9kdWN0Q2hhbm5lbCc7XG5pbXBvcnQgeyBzZXREcHNyQ3RlbiB9IGZyb20gJ3NsaWNlcy9wcm9kdWN0L21vZGlmeS9wcm9kdWN0RGVwb3NpdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vZGlmeVByb2R1Y3QoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgb25zdXJlUHJvZENvZGUsIG9uc3VyZVByb2RWZXIgfSA9IHJvdXRlci5xdWVyeSBhcyBRdWVyeVBhcmFtcztcbiAgY29uc3QgcmVzdWx0ID0gdXNlUXVlcnkoXG4gICAgW1xuICAgICAgYC9wdWJsaWMvcHJvZHVjdC9nZXRQcm9kdWN0L29uc3VyZVByb2RDb2RlL29uc3VyZVByb2RWZXJgLFxuICAgICAgb25zdXJlUHJvZENvZGUsXG4gICAgICBvbnN1cmVQcm9kVmVyLFxuICAgIF0sXG4gICAgKCkgPT4gQXBpLmdldFByb2R1Y3QoeyBvbnN1cmVQcm9kQ29kZSwgb25zdXJlUHJvZFZlciB9KVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlc3VsdC5kYXRhKSB7XG4gICAgICBjb25zdCBwcm9kdWN0RGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICBkaXNwYXRjaChzZXRQcm9kdWN0Q29kZXMocHJvZHVjdERhdGEucHJvZHVjdENvZGVMaXN0KSk7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgc2V0U2FsZUdkbm0oe1xuICAgICAgICAgIGlucHV0OiBwcm9kdWN0RGF0YS5wcm9kdWN0LnNhbGVHZG5tLFxuICAgICAgICAgIG1heDogc2FsZUdkbm1NYXhMZW5ndGgsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIHNldEN0Z3JHZG5tKHtcbiAgICAgICAgICBpbnB1dDogcHJvZHVjdERhdGEucHJvZHVjdC5jdGdyR2RubSxcbiAgICAgICAgICBtYXg6IGN0Z3JHZG5tTWF4TGVuZ3RoLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGRpc3BhdGNoKHNldEluc3JDdGdyKHsgY2F0ZWdvcnk6IHByb2R1Y3REYXRhLnByb2R1Y3QuaW5zckN0Z3IgfSkpO1xuICAgICAgZGlzcGF0Y2goaW5pdENoYW5uZWwocHJvZHVjdERhdGEucHJvZHVjdENobmxMaXN0KSk7XG4gICAgICBkaXNwYXRjaChzZXRQcm9kRXhwc1luKHByb2R1Y3REYXRhLnByb2R1Y3QucHJvZEV4cHNZbikpO1xuICAgICAgZGlzcGF0Y2goc2V0RHBzclBydGNFeHluKHByb2R1Y3REYXRhLnByb2R1Y3QuZHBzclBydGNFeHluKSk7XG4gICAgICBkaXNwYXRjaChzZXREcHNyQ3Rlbihwcm9kdWN0RGF0YS5wcm9kdWN0RGVwb3NpdG9yLmRwc3JDdGVuKSk7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgc2V0THdvYkNuZm1BZGRwKHtcbiAgICAgICAgICBpbnB1dDogcHJvZHVjdERhdGEucHJvZHVjdC5sd29iQ25mbUFkZHAsXG4gICAgICAgICAgbWF4OiBsd29iQ25mbUFkZHBNYXhMZW5ndGgsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgZGlzcGF0Y2goc2V0THdvYkNuZm1BZ3luKHByb2R1Y3REYXRhLnByb2R1Y3QubHdvYkNuZm1BZ3luKSk7XG4gICAgICBkaXNwYXRjaChzZXRQcmVtQ2FsY0V4eW4ocHJvZHVjdERhdGEucHJvZHVjdC5wcmVtQ2FsY0V4eW4pKTtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBzZXRQcmVtQ2FsY05vdGNQcmdwKHtcbiAgICAgICAgICBpbnB1dDogcHJvZHVjdERhdGEucHJvZHVjdC5wcmVtQ2FsY05vdGNQcmdwLFxuICAgICAgICAgIG1heDogcHJlbUNhbGNOb3RjUHJncE1heExlbmd0aCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaChzZXRQcmVtQ2FsY0JydGhFeHluKHByb2R1Y3REYXRhLnByb2R1Y3QucHJlbUNhbGNCcnRoRXh5bikpO1xuICAgICAgZGlzcGF0Y2goc2V0UHJlbUNhbGNTZXhFeHluKHByb2R1Y3REYXRhLnByb2R1Y3QucHJlbUNhbGNTZXhFeHluKSk7XG4gICAgICBkaXNwYXRjaChzZXRQcmVtQ2FsY0pvYkV4eW4ocHJvZHVjdERhdGEucHJvZHVjdC5wcmVtQ2FsY0pvYkV4eW4pKTtcbiAgICAgIGRpc3BhdGNoKHNldFByZW1DYWxjQnRuRXh5bihwcm9kdWN0RGF0YS5wcm9kdWN0LnByZW1DYWxjQnRuRXh5bikpO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIHNldFByZW1DYWxjQnRuUHJncCh7XG4gICAgICAgICAgaW5wdXQ6IHByb2R1Y3REYXRhLnByb2R1Y3Q/LnByZW1DYWxjQnRuUHJncCB8fCBcIlwiLFxuICAgICAgICAgIG1heDogcHJlbUNhbGNCdG5QcmdwTWF4TGVuZ3RoLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgcmVzdWx0LmRhdGFdKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1czogcmVzdWx0LnN0YXR1cyxcbiAgICBlcnJvcjogcmVzdWx0LmVycm9yIGFzIEVycm9yVHlwZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/product/modify/useModifyProduct.tsx\n");

/***/ })

})