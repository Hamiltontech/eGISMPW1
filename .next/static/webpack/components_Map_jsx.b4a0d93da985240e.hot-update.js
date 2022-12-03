"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Map_jsx",{

/***/ "./components/Map.jsx":
/*!****************************!*\
  !*** ./components/Map.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_data_Border_Final_join_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././components/data/Border_Final_join.json */ \"./components/data/Border_Final_join.json\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n//////////////////////////// positions to map over\nvar positions = [\n    {\n        name: \"hier ist was\",\n        lat: 52,\n        long: 8\n    },\n    {\n        name: \"hier ist was anderes\",\n        lat: 51,\n        long: 9\n    }, \n];\n//////////////////////////// our custom icon\nvar greenIcon = leaflet__WEBPACK_IMPORTED_MODULE_2__.icon({\n    iconUrl: \"leaf-green.png\",\n    shadowUrl: \"leaf-shadow.png\",\n    iconSize: [\n        38,\n        95\n    ],\n    shadowSize: [\n        50,\n        64\n    ],\n    iconAnchor: [\n        22,\n        94\n    ],\n    shadowAnchor: [\n        4,\n        62\n    ],\n    popupAnchor: [\n        -3,\n        -76\n    ]\n});\n//////////////////////////// this component should be in a separate file ;)\nfunction LocationMarker() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), position = ref[0], setPosition = ref[1];\n    var map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_7__.useMapEvents)({\n        locationfound: function locationfound(e) {\n            setPosition(e.latlng);\n            map.flyTo(e.latlng, map.getZoom());\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        map.locate();\n    }, [\n        map\n    ]);\n    return position === null ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {\n        position: position,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Popup, {\n            children: \"You are here\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(LocationMarker, \"TKtmlk1YydWk3iNPO3DIHz49hi4=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_7__.useMapEvents\n    ];\n});\n_c = LocationMarker;\n//////////////////////////// our map component\nfunction Map() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.MapContainer, {\n        className: \"Map\",\n        center: [\n            29,\n            47\n        ],\n        zoom: 15,\n        scrollWheelZoom: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.LayersControl, {\n                position: \"topright\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Open Street Name\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.TileLayer, {\n                            attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                            url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Satalite\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.TileLayer, {\n                            attribution: 'Map data \\xa9 <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery \\xa9 <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                            url: \"https://api.mapbox.com/styles/v1/lzahrani/clb7ov42s001q15qgj54sms68/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHphaHJhbmkiLCJhIjoiY2xiN295YzU5MGRjaDN0bGo1ZmdkbmNtdSJ9.lZ0_MSSUHq5gDmXFqbrc1Q\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Satalite\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.TileLayer, {\n                            url: \"https://tiles.arcgis.com/tiles/2zwTmDUxTzTVBytU/arcgis/rest/services/KuwaitFinder3Basemap/VectorTileServer?f=jsapi&cacheKey=9919458153afac15\",\n                            attribution: 'Map data \\xa9 <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery \\xa9 <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                            zoom: 15\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.LayersControl.Overlay, {\n                        radio: true,\n                        name: \"Construction Projects\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.GeoJSON, {\n                            data: _components_data_Border_Final_join_json__WEBPACK_IMPORTED_MODULE_6__,\n                            pro: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            positions.map(function(position) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {\n                    position: [\n                        position.lat,\n                        position.long\n                    ],\n                    icon: greenIcon,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Popup, {\n                        children: position.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocationMarker, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Map;\nvar _c, _c1;\n$RefreshReg$(_c, \"LocationMarker\");\n$RefreshReg$(_c1, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNuQyxrRUFBdUI7d0JBQUNpQyxLQUFLO3dCQUFDNUIsSUFBSSxFQUFDLFVBQVU7a0NBQzVDLDRFQUFDVCxvREFBUzs0QkFDVnVDLEdBQUcsRUFBQyw4SUFBOEk7NEJBQ2xKRCxXQUFXLEVBQUMsME5BQTRQOzRCQUN4UUosSUFBSSxFQUFFLEVBQUU7Ozs7O2dDQUNSOzs7Ozs0QkFDd0I7a0NBQzFCLDhEQUFDOUIsZ0VBQXFCO3dCQUFDaUMsS0FBSzt3QkFBQzVCLElBQUksRUFBQyx1QkFBdUI7a0NBQ3ZELDRFQUFDSixrREFBTzs0QkFDUm9DLElBQUksRUFBRWxDLG9FQUFHOzRCQUNUbUMsR0FBRzs7Ozs7Z0NBQ0Q7Ozs7OzRCQUNvQjs7Ozs7O29CQUNSO1lBQ2ZsQyxTQUFTLENBQUNnQixHQUFHLENBQUMsU0FBQ0YsUUFBUSxFQUFLO2dCQUMzQixxQkFDRSw4REFBQ3JCLGlEQUFNO29CQUFDcUIsUUFBUSxFQUFFO3dCQUFDQSxRQUFRLENBQUNaLEdBQUc7d0JBQUVZLFFBQVEsQ0FBQ1gsSUFBSTtxQkFBQztvQkFBRUUsSUFBSSxFQUFFRCxTQUFTOzhCQUM5RCw0RUFBQ1YsZ0RBQUs7a0NBQUVvQixRQUFRLENBQUNiLElBQUk7Ozs7OzZCQUFTOzs7Ozt5QkFDdkIsQ0FDVDthQUNILENBQUM7MEJBRUYsOERBQUNZLGNBQWM7Ozs7b0JBQUc7Ozs7OztZQUNMLENBRWY7Q0FDSDtBQWhEdUJVLE1BQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanN4P2IxMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgTCBmcm9tIFwibGVhZmxldFwiO1xuaW1wb3J0IHtcbiAgTWFwQ29udGFpbmVyLFxuICBUaWxlTGF5ZXIsXG4gIE1hcmtlcixcbiAgUG9wdXAsXG4gIHVzZU1hcEV2ZW50cyxcbiAgTGF5ZXJzQ29udHJvbCxcbiAgR2VvSlNPTixcbiAgV01TVGlsZUxheWVyLFxufSBmcm9tIFwicmVhY3QtbGVhZmxldFwiO1xuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkvZGlzdC9sZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkuY3NzXCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHlcIjtcbmltcG9ydCBCRkogZnJvbSBcIi4uLy4vY29tcG9uZW50cy9kYXRhL0JvcmRlcl9GaW5hbF9qb2luLmpzb25cIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcG9zaXRpb25zIHRvIG1hcCBvdmVyXG5cbmNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgeyBuYW1lOiBcImhpZXIgaXN0IHdhc1wiLCBsYXQ6IDUyLCBsb25nOiA4IH0sXG4gIHsgbmFtZTogXCJoaWVyIGlzdCB3YXMgYW5kZXJlc1wiLCBsYXQ6IDUxLCBsb25nOiA5IH0sXG5dO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIG91ciBjdXN0b20gaWNvblxuXG5jb25zdCBncmVlbkljb24gPSBMLmljb24oe1xuICBpY29uVXJsOiBcImxlYWYtZ3JlZW4ucG5nXCIsXG4gIHNoYWRvd1VybDogXCJsZWFmLXNoYWRvdy5wbmdcIixcblxuICBpY29uU2l6ZTogWzM4LCA5NV0sIC8vIHNpemUgb2YgdGhlIGljb25cbiAgc2hhZG93U2l6ZTogWzUwLCA2NF0sIC8vIHNpemUgb2YgdGhlIHNoYWRvd1xuICBpY29uQW5jaG9yOiBbMjIsIDk0XSwgLy8gcG9pbnQgb2YgdGhlIGljb24gd2hpY2ggd2lsbCBjb3JyZXNwb25kIHRvIG1hcmtlcidzIGxvY2F0aW9uXG4gIHNoYWRvd0FuY2hvcjogWzQsIDYyXSwgLy8gdGhlIHNhbWUgZm9yIHRoZSBzaGFkb3dcbiAgcG9wdXBBbmNob3I6IFstMywgLTc2XSwgLy8gcG9pbnQgZnJvbSB3aGljaCB0aGUgcG9wdXAgc2hvdWxkIG9wZW4gcmVsYXRpdmUgdG8gdGhlIGljb25BbmNob3Jcbn0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHRoaXMgY29tcG9uZW50IHNob3VsZCBiZSBpbiBhIHNlcGFyYXRlIGZpbGUgOylcblxuZnVuY3Rpb24gTG9jYXRpb25NYXJrZXIoKSB7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG1hcCA9IHVzZU1hcEV2ZW50cyh7XG4gICAgbG9jYXRpb25mb3VuZChlKSB7XG4gICAgICBzZXRQb3NpdGlvbihlLmxhdGxuZyk7XG4gICAgICBtYXAuZmx5VG8oZS5sYXRsbmcsIG1hcC5nZXRab29tKCkpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbWFwLmxvY2F0ZSgpO1xuICB9LCBbbWFwXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uID09PSBudWxsID8gbnVsbCA6IChcbiAgICA8TWFya2VyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICA8UG9wdXA+WW91IGFyZSBoZXJlPC9Qb3B1cD5cbiAgICA8L01hcmtlcj5cbiAgKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBvdXIgbWFwIGNvbXBvbmVudFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAoKSB7XG4gIHJldHVybiAoXG4gICAgPE1hcENvbnRhaW5lclxuICAgICAgY2xhc3NOYW1lPVwiTWFwXCJcbiAgICAgIGNlbnRlcj17WzI5LCA0N119XG4gICAgICB6b29tPXsxNX1cbiAgICAgIHNjcm9sbFdoZWVsWm9vbVxuICAgID5cbiAgICBcbiAgICAgIDxMYXllcnNDb250cm9sIHBvc2l0aW9uPSd0b3ByaWdodCc+XG4gICAgICAgIDxMYXllcnNDb250cm9sLkJhc2VMYXllciByYWRpbyBuYW1lPVwiT3BlbiBTdHJlZXQgTmFtZVwiPlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgLz5cbiAgICAgIDwvTGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXI+XG4gICAgICAgIDxMYXllcnNDb250cm9sLkJhc2VMYXllciByYWRpbyBuYW1lPVwiU2F0YWxpdGVcIj5cbiAgICAgICAgPFRpbGVMYXllclxuICAgIGF0dHJpYnV0aW9uPSdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgPGEgaHJlZj1cImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8yLjAvXCI+Q0MtQlktU0E8L2E+LCBJbWFnZXJ5ICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+J1xuICAgIHVybD1cImh0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL2x6YWhyYW5pL2NsYjdvdjQyczAwMXExNXFnajU0c21zNjgvdGlsZXMvMjU2L3t6fS97eH0ve3l9QDJ4P2FjY2Vzc190b2tlbj1way5leUoxSWpvaWJIcGhhSEpoYm1raUxDSmhJam9pWTJ4aU4yOTVZelU1TUdSamFETjBiR28xWm1ka2JtTnRkU0o5LmxaMF9NU1NVSHE1Z0RtWEZxYnJjMVFcIlxuICAvPlxuICAgICAgPC9MYXllcnNDb250cm9sLkJhc2VMYXllcj5cbiAgICAgIDxMYXllcnNDb250cm9sLkJhc2VMYXllciByYWRpbyBuYW1lPVwiU2F0YWxpdGVcIj5cbiAgICAgICAgPFRpbGVMYXllclxuICAgICAgICB1cmw9XCJodHRwczovL3RpbGVzLmFyY2dpcy5jb20vdGlsZXMvMnp3VG1EVXhUelRWQnl0VS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9LdXdhaXRGaW5kZXIzQmFzZW1hcC9WZWN0b3JUaWxlU2VydmVyP2Y9anNhcGkmY2FjaGVLZXk9OTkxOTQ1ODE1M2FmYWMxNVwiXG4gICAgICAgIGF0dHJpYnV0aW9uPSdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj0mcXVvdDtodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy8mcXVvdDs+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCA8YSBocmVmPSZxdW90O2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8yLjAvJnF1b3Q7PkNDLUJZLVNBPC9hPiwgSW1hZ2VyeSAmY29weTsgPGEgaHJlZj0mcXVvdDtodHRwczovL3d3dy5tYXBib3guY29tLyZxdW90Oz5NYXBib3g8L2E+J1xuICAgICAgICB6b29tPXsxNX1cbiAgICAgIC8+XG4gICAgICA8L0xheWVyc0NvbnRyb2wuQmFzZUxheWVyPlxuICAgICAgPExheWVyc0NvbnRyb2wuT3ZlcmxheSByYWRpbyBuYW1lPVwiQ29uc3RydWN0aW9uIFByb2plY3RzXCI+XG4gICAgICAgIDxHZW9KU09OXG4gICAgICAgIGRhdGE9e0JGSn1cbiAgICAgICAgcHJvXG4gICAgICAgIC8+XG4gICAgICA8L0xheWVyc0NvbnRyb2wuT3ZlcmxheT5cbiAgICAgIDwvTGF5ZXJzQ29udHJvbD5cbiAgICAgIHtwb3NpdGlvbnMubWFwKChwb3NpdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNYXJrZXIgcG9zaXRpb249e1twb3NpdGlvbi5sYXQsIHBvc2l0aW9uLmxvbmddfSBpY29uPXtncmVlbkljb259PlxuICAgICAgICAgICAgPFBvcHVwPntwb3NpdGlvbi5uYW1lfTwvUG9wdXA+XG4gICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICk7XG4gICAgICB9KX1cblxuICAgICAgPExvY2F0aW9uTWFya2VyIC8+XG4gICAgPC9NYXBDb250YWluZXI+XG4gICAgXG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMIiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJ1c2VNYXBFdmVudHMiLCJMYXllcnNDb250cm9sIiwiR2VvSlNPTiIsIldNU1RpbGVMYXllciIsIkJGSiIsInBvc2l0aW9ucyIsIm5hbWUiLCJsYXQiLCJsb25nIiwiZ3JlZW5JY29uIiwiaWNvbiIsImljb25VcmwiLCJzaGFkb3dVcmwiLCJpY29uU2l6ZSIsInNoYWRvd1NpemUiLCJpY29uQW5jaG9yIiwic2hhZG93QW5jaG9yIiwicG9wdXBBbmNob3IiLCJMb2NhdGlvbk1hcmtlciIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJtYXAiLCJsb2NhdGlvbmZvdW5kIiwiZSIsImxhdGxuZyIsImZseVRvIiwiZ2V0Wm9vbSIsImxvY2F0ZSIsIk1hcCIsImNsYXNzTmFtZSIsImNlbnRlciIsInpvb20iLCJzY3JvbGxXaGVlbFpvb20iLCJCYXNlTGF5ZXIiLCJyYWRpbyIsImF0dHJpYnV0aW9uIiwidXJsIiwiT3ZlcmxheSIsImRhdGEiLCJwcm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Map.jsx\n");

/***/ })

});