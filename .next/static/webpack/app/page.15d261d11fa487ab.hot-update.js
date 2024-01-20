"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/sections/BlogsSection.tsx":
/*!******************************************************!*\
  !*** ./src/app/components/sections/BlogsSection.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=format!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/format.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaRegComment_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaRegComment!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_MdArrowOutward_react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=MdArrowOutward!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/badge */ \"(app-pages-browser)/./src/components/ui/badge.tsx\");\n/* harmony import */ var _miscelleneous_BtnSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../miscelleneous/BtnSlider */ \"(app-pages-browser)/./src/app/components/miscelleneous/BtnSlider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// components\n\nconst BlogsSection = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(keyword);\n        fetchPosts(keyword);\n    }, [\n        keyword\n    ]);\n    // function to fecth post\n    const fetchPosts = async (keyword)=>{\n        const res = await fetch(\"http://localhost:3000/api/posts?tag=\".concat(keyword), {\n            method: \"GET\"\n        });\n        const data = await res.json();\n        setPosts(data);\n    };\n    // TODO  //\n    // \tIf posts is undefined, return some default or loading state\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b border-stroke py-8 px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscelleneous_BtnSlider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    setKeyword: setKeyword\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, undefined),\n            !posts && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                lineNumber: 62,\n                columnNumber: 15\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-inter\",\n                children: posts && posts.response.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-start justify-between mb-4 border-b border-stroke py-8 px-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: post.author.pic,\n                                        width: 70,\n                                        height: 70,\n                                        alt: post.author.username,\n                                        className: \"rounded-full border-2 border-stroke\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"font-semibold text-white\",\n                                                children: post.author.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 10\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray\",\n                                                children: post.tags[0]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 10\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between w-3/4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-start w-3/4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                className: \"text-gray font-semibold\",\n                                                children: (0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(post.$createdAt, \"MMMM dd, yyy\")\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 10\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"my-4\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                                className: \"text-lg text-white font-semibold\",\n                                                                children: post.title\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                                lineNumber: 93,\n                                                                columnNumber: 12\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-nowrap w-full overflow-hidden text-ellipsis text-gray text-sm\",\n                                                                children: post.content\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                                lineNumber: 96,\n                                                                columnNumber: 12\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 11\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_3__.Badge, {\n                                                        className: \"border border-stroke py-1 bg-transparent hover:bg-transparent\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaRegComment_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaRegComment, {\n                                                                className: \"text-gray\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                                lineNumber: 101,\n                                                                columnNumber: 12\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"ml-2 text-gray\",\n                                                                children: post.comments.length\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                                lineNumber: 102,\n                                                                columnNumber: 12\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 11\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 10\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex\",\n                                        children: [\n                                            \"View Blog \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdArrowOutward_react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdArrowOutward, {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 20\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, post.$id, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n                lineNumber: 64,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\HackNest\\\\hacknest\\\\src\\\\app\\\\components\\\\sections\\\\BlogsSection.tsx\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, undefined);\n};\n_s(BlogsSection, \"PgRgy13bYKO6w7pMHWZfEQHdy34=\");\n_c = BlogsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogsSection);\nvar _c;\n$RefreshReg$(_c, \"BlogsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9CbG9nc1NlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNHO0FBQ1k7QUFDRTtBQUNGO0FBQzlDLGFBQWE7QUFDc0M7QUEwQm5ELE1BQU1RLGVBQXlCOztJQUM5QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBO0lBQ2xDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDVGEsUUFBUUMsR0FBRyxDQUFDSDtRQUNaSSxXQUFXSjtJQUNaLEdBQUc7UUFBQ0E7S0FBUTtJQUVaLHlCQUF5QjtJQUN6QixNQUFNSSxhQUFhLE9BQU9KO1FBQ3pCLE1BQU1LLE1BQU0sTUFBTUMsTUFBTSx1Q0FBK0MsT0FBUk4sVUFBVztZQUN6RU8sUUFBUTtRQUNUO1FBRUEsTUFBTUMsT0FBTyxNQUFNSCxJQUFJSSxJQUFJO1FBQzNCVixTQUFTUztJQUNWO0lBRUEsV0FBVztJQUNYLCtEQUErRDtJQUUvRCxxQkFDQyw4REFBQ0U7OzBCQUNBLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ2YsZ0VBQVNBO29CQUFDSyxZQUFZQTs7Ozs7Ozs7Ozs7WUFFdkIsQ0FBQ0gsdUJBQVMsOERBQUNjOzBCQUFFOzs7Ozs7MEJBRWQsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNiYixTQUNBQSxNQUFNZSxRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbkIsOERBQUNMO3dCQUVBQyxXQUFVOzswQ0FFViw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNkLDhEQUFDcEIsbURBQUtBO3dDQUNMeUIsS0FBS0QsS0FBS0UsTUFBTSxDQUFDQyxHQUFHO3dDQUNwQkMsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsS0FBS04sS0FBS0UsTUFBTSxDQUFDSyxRQUFRO3dDQUN6QlgsV0FBVTs7Ozs7O2tEQUVYLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2QsOERBQUNZO2dEQUFHWixXQUFVOzBEQUNaSSxLQUFLRSxNQUFNLENBQUNPLElBQUk7Ozs7OzswREFFbEIsOERBQUNaO2dEQUFFRCxXQUFVOzBEQUFhSSxLQUFLVSxJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUd4Qyw4REFBQ2Y7Z0NBQUlDLFdBQVU7O2tEQUNkLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2QsOERBQUNlO2dEQUFHZixXQUFVOzBEQUNabkIsOEVBQU1BLENBQUN1QixLQUFLWSxVQUFVLEVBQUU7Ozs7OzswREFFMUIsOERBQUNqQjs7a0VBQ0EsOERBQUNBO3dEQUFJQyxXQUFVOzswRUFDZCw4REFBQ2lCO2dFQUFHakIsV0FBVTswRUFDWkksS0FBS2MsS0FBSzs7Ozs7OzBFQUVaLDhEQUFDakI7Z0VBQUVELFdBQVU7MEVBQ1hJLEtBQUtlLE9BQU87Ozs7Ozs7Ozs7OztrRUFHZiw4REFBQ25DLHVEQUFLQTt3REFBQ2dCLFdBQVU7OzBFQUNoQiw4REFBQ2xCLDRGQUFZQTtnRUFBQ2tCLFdBQVU7Ozs7OzswRUFDeEIsOERBQUNDO2dFQUFFRCxXQUFVOzBFQUFrQkksS0FBS2dCLFFBQVEsQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUl0RCw4REFBQ0M7d0NBQU90QixXQUFVOzs0Q0FBTzswREFDZCw4REFBQ2pCLGdHQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQXZDdEJxQixLQUFLbUIsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQStDcEI7R0FoRk1yQztLQUFBQTtBQWtGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvQmxvZ3NTZWN0aW9uLnRzeD9iOGI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgRmFSZWdDb21tZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IE1kQXJyb3dPdXR3YXJkIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBCdG5TbGlkZXIgZnJvbSBcIi4uL21pc2NlbGxlbmVvdXMvQnRuU2xpZGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgQXV0aG9yIHtcclxuXHQkaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0dXNlcm5hbWU6IHN0cmluZztcclxuXHRwaWM6IHN0cmluZztcclxuXHRwb3N0czogW107XHJcblx0Y29tbWVudHM6IFtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVzcG9uc2Uge1xyXG5cdCRpZDogc3RyaW5nO1xyXG5cdHRpdGxlOiBzdHJpbmc7XHJcblx0Y29udGVudDogc3RyaW5nO1xyXG5cdHRhZ3M6IHN0cmluZ1tdO1xyXG5cdGltYWdlOiBzdHJpbmc7XHJcblx0YXV0aG9yOiBBdXRob3I7XHJcblx0Y29tbWVudHM6IGFueTtcclxuXHQkY3JlYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQb3N0IHtcclxuXHRyZXNwb25zZTogUmVzcG9uc2VbXTtcclxufVxyXG5cclxuY29uc3QgQmxvZ3NTZWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3Q+KCk7XHJcblx0Y29uc3QgW2tleXdvcmQsIHNldEtleXdvcmRdID0gdXNlU3RhdGU8c3RyaW5nPihcImFsbFwiKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGtleXdvcmQpO1xyXG5cdFx0ZmV0Y2hQb3N0cyhrZXl3b3JkKTtcclxuXHR9LCBba2V5d29yZF0pO1xyXG5cclxuXHQvLyBmdW5jdGlvbiB0byBmZWN0aCBwb3N0XHJcblx0Y29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jIChrZXl3b3JkOiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzP3RhZz0ke2tleXdvcmR9YCwge1xyXG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdHNldFBvc3RzKGRhdGEpO1xyXG5cdH07XHJcblxyXG5cdC8vIFRPRE8gIC8vXHJcblx0Ly8gXHRJZiBwb3N0cyBpcyB1bmRlZmluZWQsIHJldHVybiBzb21lIGRlZmF1bHQgb3IgbG9hZGluZyBzdGF0ZVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItc3Ryb2tlIHB5LTggcHgtNFwiPlxyXG5cdFx0XHRcdDxCdG5TbGlkZXIgc2V0S2V5d29yZD17c2V0S2V5d29yZH0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHshcG9zdHMgJiYgPHA+TG9hZGluZy4uLjwvcD59XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaW50ZXJcIj5cclxuXHRcdFx0XHR7cG9zdHMgJiZcclxuXHRcdFx0XHRcdHBvc3RzLnJlc3BvbnNlLm1hcCgocG9zdCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0a2V5PXtwb3N0LiRpZH1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBtYi00IGJvcmRlci1iIGJvcmRlci1zdHJva2UgcHktOCBweC0xNlwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtwb3N0LmF1dGhvci5waWN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXs3MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXs3MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtwb3N0LmF1dGhvci51c2VybmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1zdHJva2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWwtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Bvc3QuYXV0aG9yLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheVwiPntwb3N0LnRhZ3NbMF19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy0zLzRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHctMy80XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXkgZm9udC1zZW1pYm9sZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtmb3JtYXQocG9zdC4kY3JlYXRlZEF0LCBcIk1NTU0gZGQsIHl5eVwiKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cG9zdC50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW5vd3JhcCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHRleHQtZWxsaXBzaXMgdGV4dC1ncmF5IHRleHQtc21cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Bvc3QuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QmFkZ2UgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zdHJva2UgcHktMSBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy10cmFuc3BhcmVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEZhUmVnQ29tbWVudCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXlcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LWdyYXlcIj57cG9zdC5jb21tZW50cy5sZW5ndGh9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQmFkZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VmlldyBCbG9nIDxNZEFycm93T3V0d2FyZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dzU2VjdGlvbjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJmb3JtYXQiLCJGYVJlZ0NvbW1lbnQiLCJNZEFycm93T3V0d2FyZCIsIkJhZGdlIiwiQnRuU2xpZGVyIiwiQmxvZ3NTZWN0aW9uIiwicG9zdHMiLCJzZXRQb3N0cyIsImtleXdvcmQiLCJzZXRLZXl3b3JkIiwiY29uc29sZSIsImxvZyIsImZldGNoUG9zdHMiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInJlc3BvbnNlIiwibWFwIiwicG9zdCIsInNyYyIsImF1dGhvciIsInBpYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwidXNlcm5hbWUiLCJoNCIsIm5hbWUiLCJ0YWdzIiwiaDYiLCIkY3JlYXRlZEF0IiwiaDEiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb21tZW50cyIsImxlbmd0aCIsImJ1dHRvbiIsIiRpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sections/BlogsSection.tsx\n"));

/***/ })

});