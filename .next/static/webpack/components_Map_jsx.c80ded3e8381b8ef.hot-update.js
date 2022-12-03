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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// import BorderFinalJoint from 'https://geo1.esmrts.com/geoserver/Sample_Data/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Sample_Data%3AGovernorate&maxFeatures=500&outputFormat=application%2Fjson\"\"https://geo1.esmrts.com/geoserver/Sample_Data/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Sample_Data%3AGovernorate&maxFeatures=500&outputFormat=application%2Fjson';\n//////////////////////////// positions to map over\nvar positions = [\n    {\n        name: \"hier ist was\",\n        lat: 52,\n        long: 8\n    },\n    {\n        name: \"hier ist was anderes\",\n        lat: 51,\n        long: 9\n    }, \n];\n//////////////////////////// our custom icon\nvar greenIcon = leaflet__WEBPACK_IMPORTED_MODULE_2__.icon({\n    iconUrl: \"leaf-green.png\",\n    shadowUrl: \"leaf-shadow.png\",\n    iconSize: [\n        38,\n        95\n    ],\n    shadowSize: [\n        50,\n        64\n    ],\n    iconAnchor: [\n        22,\n        94\n    ],\n    shadowAnchor: [\n        4,\n        62\n    ],\n    popupAnchor: [\n        -3,\n        -76\n    ]\n});\n//////////////////////////// this component should be in a separate file ;)\nfunction LocationMarker() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), position = ref[0], setPosition = ref[1];\n    var map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_6__.useMapEvents)({\n        locationfound: function locationfound(e) {\n            setPosition(e.latlng);\n            map.flyTo(e.latlng, map.getZoom());\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        map.locate();\n    }, [\n        map\n    ]);\n    return position === null ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n        position: position,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n            children: \"You are here\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(LocationMarker, \"TKtmlk1YydWk3iNPO3DIHz49hi4=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_6__.useMapEvents\n    ];\n});\n_c = LocationMarker;\n//////////////////////////// our map component\nfunction Map() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.MapContainer, {\n        className: \"Map\",\n        center: [\n            29,\n            47\n        ],\n        zoom: 15,\n        scrollWheelZoom: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl, {\n                position: \"topright\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Open Street Name\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                            attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                            url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Satalite\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                            attribution: 'Map data \\xa9 <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery \\xa9 <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                            url: \"https://api.mapbox.com/styles/v1/lzahrani/clb7ov42s001q15qgj54sms68/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHphaHJhbmkiLCJhIjoiY2xiN295YzU5MGRjaDN0bGo1ZmdkbmNtdSJ9.lZ0_MSSUHq5gDmXFqbrc1Q\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Satalite\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                            url: \"https://tiles.arcgis.com/tiles/2zwTmDUxTzTVBytU/arcgis/rest/services/KuwaitFinder3Basemap/VectorTileServer?f=jsapi&cacheKey=9919458153afac15\",\n                            attribution: 'Map data \\xa9 <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery \\xa9 <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                            zoom: 15\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl.Overlay, {\n                        radio: true,\n                        name: \"Construction Projects\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.GeoJSON, {\n                        data: BorderFinalJoint.features\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            positions.map(function(position) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n                    position: [\n                        position.lat,\n                        position.long\n                    ],\n                    icon: greenIcon,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n                        children: position.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocationMarker, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Map;\nvar _c, _c1;\n$RefreshReg$(_c, \"LocationMarker\");\n$RefreshReg$(_c1, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxQiw4REFBQ2xDLGtFQUF1Qjt3QkFBQ2dDLEtBQUs7d0JBQUM1QixJQUFJLEVBQUMsVUFBVTtrQ0FDNUMsNEVBQUNSLG9EQUFTOzRCQUNWc0MsR0FBRyxFQUFDLDhJQUE4STs0QkFDbEpELFdBQVcsRUFBQywwTkFBNFA7NEJBQ3hRSixJQUFJLEVBQUUsRUFBRTs7Ozs7Z0NBQ1I7Ozs7OzRCQUN3QjtrQ0FDMUIsOERBQUM3QixnRUFBcUI7d0JBQUNnQyxLQUFLO3dCQUFDNUIsSUFBSSxFQUFDLHVCQUF1Qjs7Ozs7NEJBQ2pDO2tDQUN4Qiw4REFBQ0gsa0RBQU87d0JBQ1JtQyxJQUFJLEVBQUVDLGdCQUFnQixDQUFDQyxRQUFROzs7Ozs0QkFDN0I7Ozs7OztvQkFDYztZQUNmbkMsU0FBUyxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNGLFFBQVEsRUFBSztnQkFDM0IscUJBQ0UsOERBQUNwQixpREFBTTtvQkFBQ29CLFFBQVEsRUFBRTt3QkFBQ0EsUUFBUSxDQUFDWixHQUFHO3dCQUFFWSxRQUFRLENBQUNYLElBQUk7cUJBQUM7b0JBQUVFLElBQUksRUFBRUQsU0FBUzs4QkFDOUQsNEVBQUNULGdEQUFLO2tDQUFFbUIsUUFBUSxDQUFDYixJQUFJOzs7Ozs2QkFBUzs7Ozs7eUJBQ3ZCLENBQ1Q7YUFDSCxDQUFDOzBCQUVGLDhEQUFDWSxjQUFjOzs7O29CQUFHOzs7Ozs7WUFDTCxDQUVmO0NBQ0g7QUEvQ3VCVSxNQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwLmpzeD9iMTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIEwgZnJvbSBcImxlYWZsZXRcIjtcbmltcG9ydCB7XG4gIE1hcENvbnRhaW5lcixcbiAgVGlsZUxheWVyLFxuICBNYXJrZXIsXG4gIFBvcHVwLFxuICB1c2VNYXBFdmVudHMsXG4gIExheWVyc0NvbnRyb2wsXG4gIEdlb0pTT04sXG4gIFdNU1RpbGVMYXllcixcbn0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiO1xuaW1wb3J0IFwibGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5L2Rpc3QvbGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5LmNzc1wiO1xuaW1wb3J0IFwibGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5XCI7XG4vLyBpbXBvcnQgQm9yZGVyRmluYWxKb2ludCBmcm9tICdodHRwczovL2dlbzEuZXNtcnRzLmNvbS9nZW9zZXJ2ZXIvU2FtcGxlX0RhdGEvb3dzP3NlcnZpY2U9V0ZTJnZlcnNpb249MS4wLjAmcmVxdWVzdD1HZXRGZWF0dXJlJnR5cGVOYW1lPVNhbXBsZV9EYXRhJTNBR292ZXJub3JhdGUmbWF4RmVhdHVyZXM9NTAwJm91dHB1dEZvcm1hdD1hcHBsaWNhdGlvbiUyRmpzb25cIlwiaHR0cHM6Ly9nZW8xLmVzbXJ0cy5jb20vZ2Vvc2VydmVyL1NhbXBsZV9EYXRhL293cz9zZXJ2aWNlPVdGUyZ2ZXJzaW9uPTEuMC4wJnJlcXVlc3Q9R2V0RmVhdHVyZSZ0eXBlTmFtZT1TYW1wbGVfRGF0YSUzQUdvdmVybm9yYXRlJm1heEZlYXR1cmVzPTUwMCZvdXRwdXRGb3JtYXQ9YXBwbGljYXRpb24lMkZqc29uJztcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwb3NpdGlvbnMgdG8gbWFwIG92ZXJcblxuY29uc3QgcG9zaXRpb25zID0gW1xuICB7IG5hbWU6IFwiaGllciBpc3Qgd2FzXCIsIGxhdDogNTIsIGxvbmc6IDggfSxcbiAgeyBuYW1lOiBcImhpZXIgaXN0IHdhcyBhbmRlcmVzXCIsIGxhdDogNTEsIGxvbmc6IDkgfSxcbl07XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gb3VyIGN1c3RvbSBpY29uXG5cbmNvbnN0IGdyZWVuSWNvbiA9IEwuaWNvbih7XG4gIGljb25Vcmw6IFwibGVhZi1ncmVlbi5wbmdcIixcbiAgc2hhZG93VXJsOiBcImxlYWYtc2hhZG93LnBuZ1wiLFxuXG4gIGljb25TaXplOiBbMzgsIDk1XSwgLy8gc2l6ZSBvZiB0aGUgaWNvblxuICBzaGFkb3dTaXplOiBbNTAsIDY0XSwgLy8gc2l6ZSBvZiB0aGUgc2hhZG93XG4gIGljb25BbmNob3I6IFsyMiwgOTRdLCAvLyBwb2ludCBvZiB0aGUgaWNvbiB3aGljaCB3aWxsIGNvcnJlc3BvbmQgdG8gbWFya2VyJ3MgbG9jYXRpb25cbiAgc2hhZG93QW5jaG9yOiBbNCwgNjJdLCAvLyB0aGUgc2FtZSBmb3IgdGhlIHNoYWRvd1xuICBwb3B1cEFuY2hvcjogWy0zLCAtNzZdLCAvLyBwb2ludCBmcm9tIHdoaWNoIHRoZSBwb3B1cCBzaG91bGQgb3BlbiByZWxhdGl2ZSB0byB0aGUgaWNvbkFuY2hvclxufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gdGhpcyBjb21wb25lbnQgc2hvdWxkIGJlIGluIGEgc2VwYXJhdGUgZmlsZSA7KVxuXG5mdW5jdGlvbiBMb2NhdGlvbk1hcmtlcigpIHtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgbWFwID0gdXNlTWFwRXZlbnRzKHtcbiAgICBsb2NhdGlvbmZvdW5kKGUpIHtcbiAgICAgIHNldFBvc2l0aW9uKGUubGF0bG5nKTtcbiAgICAgIG1hcC5mbHlUbyhlLmxhdGxuZywgbWFwLmdldFpvb20oKSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtYXAubG9jYXRlKCk7XG4gIH0sIFttYXBdKTtcblxuICByZXR1cm4gcG9zaXRpb24gPT09IG51bGwgPyBudWxsIDogKFxuICAgIDxNYXJrZXIgcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgIDxQb3B1cD5Zb3UgYXJlIGhlcmU8L1BvcHVwPlxuICAgIDwvTWFya2VyPlxuICApO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIG91ciBtYXAgY29tcG9uZW50XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TWFwQ29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9XCJNYXBcIlxuICAgICAgY2VudGVyPXtbMjksIDQ3XX1cbiAgICAgIHpvb209ezE1fVxuICAgICAgc2Nyb2xsV2hlZWxab29tXG4gICAgPlxuICAgIFxuICAgICAgPExheWVyc0NvbnRyb2wgcG9zaXRpb249J3RvcHJpZ2h0Jz5cbiAgICAgICAgPExheWVyc0NvbnRyb2wuQmFzZUxheWVyIHJhZGlvIG5hbWU9XCJPcGVuIFN0cmVldCBOYW1lXCI+XG4gICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgICAvPlxuICAgICAgPC9MYXllcnNDb250cm9sLkJhc2VMYXllcj5cbiAgICAgICAgPExheWVyc0NvbnRyb2wuQmFzZUxheWVyIHJhZGlvIG5hbWU9XCJTYXRhbGl0ZVwiPlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgYXR0cmlidXRpb249J01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCA8YSBocmVmPVwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzIuMC9cIj5DQy1CWS1TQTwvYT4sIEltYWdlcnkgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL1wiPk1hcGJveDwvYT4nXG4gICAgdXJsPVwiaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvbHphaHJhbmkvY2xiN292NDJzMDAxcTE1cWdqNTRzbXM2OC90aWxlcy8yNTYve3p9L3t4fS97eX1AMng/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYkhwaGFISmhibWtpTENKaElqb2lZMnhpTjI5NVl6VTVNR1JqYUROMGJHbzFabWRrYm1OdGRTSjkubFowX01TU1VIcTVnRG1YRnFicmMxUVwiXG4gIC8+XG4gICAgICA8L0xheWVyc0NvbnRyb2wuQmFzZUxheWVyPlxuICAgICAgPExheWVyc0NvbnRyb2wuQmFzZUxheWVyIHJhZGlvIG5hbWU9XCJTYXRhbGl0ZVwiPlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgIHVybD1cImh0dHBzOi8vdGlsZXMuYXJjZ2lzLmNvbS90aWxlcy8yendUbURVeFR6VFZCeXRVL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0t1d2FpdEZpbmRlcjNCYXNlbWFwL1ZlY3RvclRpbGVTZXJ2ZXI/Zj1qc2FwaSZjYWNoZUtleT05OTE5NDU4MTUzYWZhYzE1XCJcbiAgICAgICAgYXR0cmlidXRpb249J01hcCBkYXRhICZjb3B5OyA8YSBocmVmPSZxdW90O2h0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnLyZxdW90Oz5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIDxhIGhyZWY9JnF1b3Q7aHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzIuMC8mcXVvdDs+Q0MtQlktU0E8L2E+LCBJbWFnZXJ5ICZjb3B5OyA8YSBocmVmPSZxdW90O2h0dHBzOi8vd3d3Lm1hcGJveC5jb20vJnF1b3Q7Pk1hcGJveDwvYT4nXG4gICAgICAgIHpvb209ezE1fVxuICAgICAgLz5cbiAgICAgIDwvTGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXI+XG4gICAgICA8TGF5ZXJzQ29udHJvbC5PdmVybGF5IHJhZGlvIG5hbWU9XCJDb25zdHJ1Y3Rpb24gUHJvamVjdHNcIj5cbiAgICAgIDwvTGF5ZXJzQ29udHJvbC5PdmVybGF5PlxuICAgICAgPEdlb0pTT05cbiAgICAgIGRhdGE9e0JvcmRlckZpbmFsSm9pbnQuZmVhdHVyZXN9XG4gICAgICAvPlxuICAgICAgPC9MYXllcnNDb250cm9sPlxuICAgICAge3Bvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17W3Bvc2l0aW9uLmxhdCwgcG9zaXRpb24ubG9uZ119IGljb249e2dyZWVuSWNvbn0+XG4gICAgICAgICAgICA8UG9wdXA+e3Bvc2l0aW9uLm5hbWV9PC9Qb3B1cD5cbiAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuXG4gICAgICA8TG9jYXRpb25NYXJrZXIgLz5cbiAgICA8L01hcENvbnRhaW5lcj5cbiAgICBcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkwiLCJNYXBDb250YWluZXIiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJQb3B1cCIsInVzZU1hcEV2ZW50cyIsIkxheWVyc0NvbnRyb2wiLCJHZW9KU09OIiwiV01TVGlsZUxheWVyIiwicG9zaXRpb25zIiwibmFtZSIsImxhdCIsImxvbmciLCJncmVlbkljb24iLCJpY29uIiwiaWNvblVybCIsInNoYWRvd1VybCIsImljb25TaXplIiwic2hhZG93U2l6ZSIsImljb25BbmNob3IiLCJzaGFkb3dBbmNob3IiLCJwb3B1cEFuY2hvciIsIkxvY2F0aW9uTWFya2VyIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIm1hcCIsImxvY2F0aW9uZm91bmQiLCJlIiwibGF0bG5nIiwiZmx5VG8iLCJnZXRab29tIiwibG9jYXRlIiwiTWFwIiwiY2xhc3NOYW1lIiwiY2VudGVyIiwiem9vbSIsInNjcm9sbFdoZWVsWm9vbSIsIkJhc2VMYXllciIsInJhZGlvIiwiYXR0cmlidXRpb24iLCJ1cmwiLCJPdmVybGF5IiwiZGF0YSIsIkJvcmRlckZpbmFsSm9pbnQiLCJmZWF0dXJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Map.jsx\n");

/***/ })

});