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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_data_Border_Final_join_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././components/data/Border_Final_join.json */ \"./components/data/Border_Final_join.json\");\n/* harmony import */ var _components_data_Station_Point_Final_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .././components/data/Station_Point_Final.json */ \"./components/data/Station_Point_Final.json\");\n/* harmony import */ var _components_data_Governorate_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .././components/data/Governorate.json */ \"./components/data/Governorate.json\");\n/* harmony import */ var _components_data_Area_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .././components/data/Area.json */ \"./components/data/Area.json\");\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n//////////////////////////// positions to map over\nvar positions = [\n    {\n        name: \"hier ist was\",\n        lat: 52,\n        long: 8\n    },\n    {\n        name: \"hier ist was anderes\",\n        lat: 51,\n        long: 9\n    }, \n];\n//////////////////////////// our custom icon\nvar greenIcon = leaflet__WEBPACK_IMPORTED_MODULE_2__.icon({\n    iconUrl: \"leaf-green.png\",\n    shadowUrl: \"leaf-shadow.png\",\n    iconSize: [\n        38,\n        95\n    ],\n    shadowSize: [\n        50,\n        64\n    ],\n    iconAnchor: [\n        22,\n        94\n    ],\n    shadowAnchor: [\n        4,\n        62\n    ],\n    popupAnchor: [\n        -3,\n        -76\n    ]\n});\n//////////////////////////// this component should be in a separate file ;)\nfunction LocationMarker() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), position = ref[0], setPosition = ref[1];\n    var map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_10__.useMapEvents)({\n        locationfound: function locationfound(e) {\n            setPosition(e.latlng);\n            map.flyTo(e.latlng, map.getZoom());\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        map.locate();\n    }, [\n        map\n    ]);\n    return position === null ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.Marker, {\n        position: position,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.Popup, {\n            children: \"You are here\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(LocationMarker, \"TKtmlk1YydWk3iNPO3DIHz49hi4=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_10__.useMapEvents\n    ];\n});\n_c = LocationMarker;\n//////////////////////////// our map component\nfunction Map() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.MapContainer, {\n        className: \"Map\",\n        center: [\n            29,\n            47\n        ],\n        zoom: 15,\n        scrollWheelZoom: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.LayersControl, {\n                position: \"topright\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.GeoJSON, {\n                        data: _components_data_Governorate_json__WEBPACK_IMPORTED_MODULE_8__\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Open Street Name\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.TileLayer, {\n                            attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                            url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Satalite\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.TileLayer, {\n                            attribution: 'Map data \\xa9 <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery \\xa9 <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                            url: \"https://api.mapbox.com/styles/v1/lzahrani/clb7ov42s001q15qgj54sms68/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHphaHJhbmkiLCJhIjoiY2xiN295YzU5MGRjaDN0bGo1ZmdkbmNtdSJ9.lZ0_MSSUHq5gDmXFqbrc1Q\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Satalite\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.TileLayer, {\n                            url: \"https://tiles.arcgis.com/tiles/2zwTmDUxTzTVBytU/arcgis/rest/services/KuwaitFinder3Basemap/VectorTileServer?f=jsapi&cacheKey=9919458153afac15\",\n                            attribution: 'Map data \\xa9 <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery \\xa9 <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                            zoom: 15\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.LayersControl.Overlay, {\n                        radio: true,\n                        name: \"Construction Projects\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.GeoJSON, {\n                            data: _components_data_Border_Final_join_json__WEBPACK_IMPORTED_MODULE_6__\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.LayersControl.Overlay, {\n                        radio: true,\n                        name: \"Stations Projects\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.GeoJSON, {\n                            data: _components_data_Station_Point_Final_json__WEBPACK_IMPORTED_MODULE_7__\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            positions.map(function(position) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.Marker, {\n                    position: [\n                        position.lat,\n                        position.long\n                    ],\n                    icon: greenIcon,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.Popup, {\n                        children: position.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocationMarker, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Map;\nvar _c, _c1;\n$RefreshReg$(_c, \"LocationMarker\");\n$RefreshReg$(_c1, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEMsV0FBVyxFQUFDLDBOQUE4Tjs0QkFDMU9DLEdBQUcsRUFBQyxzTUFBc007Ozs7O2dDQUMxTTs7Ozs7NEJBQzRCO2tDQUMxQiw4REFBQ3ZDLG1FQUF1Qjt3QkFBQ3FDLEtBQUs7d0JBQUM3QixJQUFJLEVBQUMsVUFBVTtrQ0FDNUMsNEVBQUNaLHFEQUFTOzRCQUNWMkMsR0FBRyxFQUFDLDhJQUE4STs0QkFDbEpELFdBQVcsRUFBQywwTkFBNFA7NEJBQ3hRTCxJQUFJLEVBQUUsRUFBRTs7Ozs7Z0NBQ1I7Ozs7OzRCQUN3QjtrQ0FDMUIsOERBQUNqQyxpRUFBcUI7d0JBQUNxQyxLQUFLO3dCQUFDN0IsSUFBSSxFQUFDLHVCQUF1QjtrQ0FDdkQsNEVBQUNQLG1EQUFPOzRCQUNSa0MsSUFBSSxFQUFFaEMsb0VBQUc7Ozs7O2dDQUNQOzs7Ozs0QkFDb0I7a0NBQ3hCLDhEQUFDSCxpRUFBcUI7d0JBQUNxQyxLQUFLO3dCQUFDN0IsSUFBSSxFQUFDLG1CQUFtQjtrQ0FDbkQsNEVBQUNQLG1EQUFPOzRCQUNSa0MsSUFBSSxFQUFFL0Isc0VBQUc7Ozs7O2dDQUNQOzs7Ozs0QkFDb0I7Ozs7OztvQkFDUjtZQUNmRyxTQUFTLENBQUNnQixHQUFHLENBQUMsU0FBQ0YsUUFBUSxFQUFLO2dCQUMzQixxQkFDRSw4REFBQ3hCLGtEQUFNO29CQUFDd0IsUUFBUSxFQUFFO3dCQUFDQSxRQUFRLENBQUNaLEdBQUc7d0JBQUVZLFFBQVEsQ0FBQ1gsSUFBSTtxQkFBQztvQkFBRUUsSUFBSSxFQUFFRCxTQUFTOzhCQUM5RCw0RUFBQ2IsaURBQUs7a0NBQUV1QixRQUFRLENBQUNiLElBQUk7Ozs7OzZCQUFTOzs7Ozt5QkFDdkIsQ0FDVDthQUNILENBQUM7MEJBRUYsOERBQUNZLGNBQWM7Ozs7b0JBQUc7Ozs7OztZQUNMLENBRWY7Q0FDSDtBQXZEdUJVLE1BQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanN4P2IxMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgTCBmcm9tIFwibGVhZmxldFwiO1xuaW1wb3J0IHtcbiAgTWFwQ29udGFpbmVyLFxuICBUaWxlTGF5ZXIsXG4gIE1hcmtlcixcbiAgUG9wdXAsXG4gIHVzZU1hcEV2ZW50cyxcbiAgTGF5ZXJzQ29udHJvbCxcbiAgR2VvSlNPTixcbiAgV01TVGlsZUxheWVyLFxufSBmcm9tIFwicmVhY3QtbGVhZmxldFwiO1xuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkvZGlzdC9sZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkuY3NzXCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHlcIjtcbmltcG9ydCBCRkogZnJvbSBcIi4uLy4vY29tcG9uZW50cy9kYXRhL0JvcmRlcl9GaW5hbF9qb2luLmpzb25cIjtcbmltcG9ydCBTUEYgZnJvbSBcIi4uLy4vY29tcG9uZW50cy9kYXRhL1N0YXRpb25fUG9pbnRfRmluYWwuanNvblwiO1xuaW1wb3J0IEdPViBmcm9tIFwiLi4vLi9jb21wb25lbnRzL2RhdGEvR292ZXJub3JhdGUuanNvblwiO1xuaW1wb3J0IEFSRUEgZnJvbSBcIi4uLy4vY29tcG9uZW50cy9kYXRhL0FyZWEuanNvblwiO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwb3NpdGlvbnMgdG8gbWFwIG92ZXJcblxuY29uc3QgcG9zaXRpb25zID0gW1xuICB7IG5hbWU6IFwiaGllciBpc3Qgd2FzXCIsIGxhdDogNTIsIGxvbmc6IDggfSxcbiAgeyBuYW1lOiBcImhpZXIgaXN0IHdhcyBhbmRlcmVzXCIsIGxhdDogNTEsIGxvbmc6IDkgfSxcbl07XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gb3VyIGN1c3RvbSBpY29uXG5cbmNvbnN0IGdyZWVuSWNvbiA9IEwuaWNvbih7XG4gIGljb25Vcmw6IFwibGVhZi1ncmVlbi5wbmdcIixcbiAgc2hhZG93VXJsOiBcImxlYWYtc2hhZG93LnBuZ1wiLFxuXG4gIGljb25TaXplOiBbMzgsIDk1XSwgLy8gc2l6ZSBvZiB0aGUgaWNvblxuICBzaGFkb3dTaXplOiBbNTAsIDY0XSwgLy8gc2l6ZSBvZiB0aGUgc2hhZG93XG4gIGljb25BbmNob3I6IFsyMiwgOTRdLCAvLyBwb2ludCBvZiB0aGUgaWNvbiB3aGljaCB3aWxsIGNvcnJlc3BvbmQgdG8gbWFya2VyJ3MgbG9jYXRpb25cbiAgc2hhZG93QW5jaG9yOiBbNCwgNjJdLCAvLyB0aGUgc2FtZSBmb3IgdGhlIHNoYWRvd1xuICBwb3B1cEFuY2hvcjogWy0zLCAtNzZdLCAvLyBwb2ludCBmcm9tIHdoaWNoIHRoZSBwb3B1cCBzaG91bGQgb3BlbiByZWxhdGl2ZSB0byB0aGUgaWNvbkFuY2hvclxufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gdGhpcyBjb21wb25lbnQgc2hvdWxkIGJlIGluIGEgc2VwYXJhdGUgZmlsZSA7KVxuXG5mdW5jdGlvbiBMb2NhdGlvbk1hcmtlcigpIHtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgbWFwID0gdXNlTWFwRXZlbnRzKHtcbiAgICBsb2NhdGlvbmZvdW5kKGUpIHtcbiAgICAgIHNldFBvc2l0aW9uKGUubGF0bG5nKTtcbiAgICAgIG1hcC5mbHlUbyhlLmxhdGxuZywgbWFwLmdldFpvb20oKSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtYXAubG9jYXRlKCk7XG4gIH0sIFttYXBdKTtcblxuICByZXR1cm4gcG9zaXRpb24gPT09IG51bGwgPyBudWxsIDogKFxuICAgIDxNYXJrZXIgcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgIDxQb3B1cD5Zb3UgYXJlIGhlcmU8L1BvcHVwPlxuICAgIDwvTWFya2VyPlxuICApO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIG91ciBtYXAgY29tcG9uZW50XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TWFwQ29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9XCJNYXBcIlxuICAgICAgY2VudGVyPXtbMjksIDQ3XX1cbiAgICAgIHpvb209ezE1fVxuICAgICAgc2Nyb2xsV2hlZWxab29tXG4gICAgPlxuICAgIFxuICAgICAgPExheWVyc0NvbnRyb2wgcG9zaXRpb249J3RvcHJpZ2h0Jz5cbiAgICAgIDxHZW9KU09OXG4gICAgICBkYXRhPXtHT1Z9XG4gICAgICAvPlxuICAgICAgICA8TGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXIgcmFkaW8gbmFtZT1cIk9wZW4gU3RyZWV0IE5hbWVcIj5cbiAgICAgICAgPFRpbGVMYXllclxuICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgIC8+XG4gICAgICA8L0xheWVyc0NvbnRyb2wuQmFzZUxheWVyPlxuICAgICAgICA8TGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXIgcmFkaW8gbmFtZT1cIlNhdGFsaXRlXCI+XG4gICAgICAgIDxUaWxlTGF5ZXJcbiAgICBhdHRyaWJ1dGlvbj0nTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9cIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIDxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgSW1hZ2VyeSAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXCI+TWFwYm94PC9hPidcbiAgICB1cmw9XCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9semFocmFuaS9jbGI3b3Y0MnMwMDFxMTVxZ2o1NHNtczY4L3RpbGVzLzI1Ni97en0ve3h9L3t5fUAyeD9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2liSHBoYUhKaGJta2lMQ0poSWpvaVkyeGlOMjk1WXpVNU1HUmphRE4wYkdvMVptZGtibU50ZFNKOS5sWjBfTVNTVUhxNWdEbVhGcWJyYzFRXCJcbiAgLz5cbiAgICAgIDwvTGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXI+XG4gICAgICA8TGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXIgcmFkaW8gbmFtZT1cIlNhdGFsaXRlXCI+XG4gICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly90aWxlcy5hcmNnaXMuY29tL3RpbGVzLzJ6d1RtRFV4VHpUVkJ5dFUvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvS3V3YWl0RmluZGVyM0Jhc2VtYXAvVmVjdG9yVGlsZVNlcnZlcj9mPWpzYXBpJmNhY2hlS2V5PTk5MTk0NTgxNTNhZmFjMTVcIlxuICAgICAgICBhdHRyaWJ1dGlvbj0nTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9JnF1b3Q7aHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvJnF1b3Q7Pk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgPGEgaHJlZj0mcXVvdDtodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wLyZxdW90Oz5DQy1CWS1TQTwvYT4sIEltYWdlcnkgJmNvcHk7IDxhIGhyZWY9JnF1b3Q7aHR0cHM6Ly93d3cubWFwYm94LmNvbS8mcXVvdDs+TWFwYm94PC9hPidcbiAgICAgICAgem9vbT17MTV9XG4gICAgICAvPlxuICAgICAgPC9MYXllcnNDb250cm9sLkJhc2VMYXllcj5cbiAgICAgIDxMYXllcnNDb250cm9sLk92ZXJsYXkgcmFkaW8gbmFtZT1cIkNvbnN0cnVjdGlvbiBQcm9qZWN0c1wiPlxuICAgICAgICA8R2VvSlNPTlxuICAgICAgICBkYXRhPXtCRkp9XG4gICAgICAgIC8+XG4gICAgICA8L0xheWVyc0NvbnRyb2wuT3ZlcmxheT5cbiAgICAgIDxMYXllcnNDb250cm9sLk92ZXJsYXkgcmFkaW8gbmFtZT1cIlN0YXRpb25zIFByb2plY3RzXCI+XG4gICAgICAgIDxHZW9KU09OXG4gICAgICAgIGRhdGE9e1NQRn1cbiAgICAgICAgLz5cbiAgICAgIDwvTGF5ZXJzQ29udHJvbC5PdmVybGF5PlxuICAgICAgPC9MYXllcnNDb250cm9sPlxuICAgICAge3Bvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17W3Bvc2l0aW9uLmxhdCwgcG9zaXRpb24ubG9uZ119IGljb249e2dyZWVuSWNvbn0+XG4gICAgICAgICAgICA8UG9wdXA+e3Bvc2l0aW9uLm5hbWV9PC9Qb3B1cD5cbiAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuXG4gICAgICA8TG9jYXRpb25NYXJrZXIgLz5cbiAgICA8L01hcENvbnRhaW5lcj5cbiAgICBcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkwiLCJNYXBDb250YWluZXIiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJQb3B1cCIsInVzZU1hcEV2ZW50cyIsIkxheWVyc0NvbnRyb2wiLCJHZW9KU09OIiwiV01TVGlsZUxheWVyIiwiQkZKIiwiU1BGIiwiR09WIiwiQVJFQSIsInBvc2l0aW9ucyIsIm5hbWUiLCJsYXQiLCJsb25nIiwiZ3JlZW5JY29uIiwiaWNvbiIsImljb25VcmwiLCJzaGFkb3dVcmwiLCJpY29uU2l6ZSIsInNoYWRvd1NpemUiLCJpY29uQW5jaG9yIiwic2hhZG93QW5jaG9yIiwicG9wdXBBbmNob3IiLCJMb2NhdGlvbk1hcmtlciIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJtYXAiLCJsb2NhdGlvbmZvdW5kIiwiZSIsImxhdGxuZyIsImZseVRvIiwiZ2V0Wm9vbSIsImxvY2F0ZSIsIk1hcCIsImNsYXNzTmFtZSIsImNlbnRlciIsInpvb20iLCJzY3JvbGxXaGVlbFpvb20iLCJkYXRhIiwiQmFzZUxheWVyIiwicmFkaW8iLCJhdHRyaWJ1dGlvbiIsInVybCIsIk92ZXJsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Map.jsx\n");

/***/ })

});