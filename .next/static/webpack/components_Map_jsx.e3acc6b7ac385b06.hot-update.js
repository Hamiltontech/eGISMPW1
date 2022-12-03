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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n//////////////////////////// positions to map over\nvar positions = [\n    {\n        name: \"hier ist was\",\n        lat: 52,\n        long: 8\n    },\n    {\n        name: \"hier ist was anderes\",\n        lat: 51,\n        long: 9\n    }, \n];\n//////////////////////////// our custom icon\nvar greenIcon = leaflet__WEBPACK_IMPORTED_MODULE_2__.icon({\n    iconUrl: \"leaf-green.png\",\n    shadowUrl: \"leaf-shadow.png\",\n    iconSize: [\n        38,\n        95\n    ],\n    shadowSize: [\n        50,\n        64\n    ],\n    iconAnchor: [\n        22,\n        94\n    ],\n    shadowAnchor: [\n        4,\n        62\n    ],\n    popupAnchor: [\n        -3,\n        -76\n    ]\n});\n//////////////////////////// this component should be in a separate file ;)\nfunction LocationMarker() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), position = ref[0], setPosition = ref[1];\n    var map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_6__.useMapEvents)({\n        locationfound: function locationfound(e) {\n            setPosition(e.latlng);\n            map.flyTo(e.latlng, map.getZoom());\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        map.locate();\n    }, [\n        map\n    ]);\n    return position === null ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n        position: position,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n            children: \"You are here\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(LocationMarker, \"TKtmlk1YydWk3iNPO3DIHz49hi4=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_6__.useMapEvents\n    ];\n});\n_c = LocationMarker;\n//////////////////////////// our map component\nfunction Map() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.MapContainer, {\n        className: \"Map\",\n        center: [\n            29,\n            47\n        ],\n        zoom: 15,\n        scrollWheelZoom: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl, {\n                position: \"topright\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Open Street Name\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                            attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                            url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Satalite\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                            attribution: 'Map data \\xa9 <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery \\xa9 <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                            url: \"https://api.mapbox.com/styles/v1/lzahrani/clb7ov42s001q15qgj54sms68/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHphaHJhbmkiLCJhIjoiY2xiN295YzU5MGRjaDN0bGo1ZmdkbmNtdSJ9.lZ0_MSSUHq5gDmXFqbrc1Q\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl.BaseLayer, {\n                        radio: true,\n                        name: \"Satalite\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                            url: \"https://tiles.arcgis.com/tiles/2zwTmDUxTzTVBytU/arcgis/rest/services/KuwaitFinder3Basemap/VectorTileServer?f=jsapi&cacheKey=9919458153afac15\",\n                            attribution: 'Map data \\xa9 <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery \\xa9 <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                            zoom: 15\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.LayersControl.Overlay, {\n                        radio: true,\n                        name: \"Construction Projects\",\n                        children: [\n                            \"componentDidMount()\",\n                            fetch(\"https://demo7443497.mockable.io/stream/video\").then(function(response) {\n                                return response.json();\n                            }).then(function(findresponse) {\n                                console.log(findresponse.url);\n                                _this.setState({\n                                    data: findresponse.url\n                                });\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            positions.map(function(position) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n                    position: [\n                        position.lat,\n                        position.long\n                    ],\n                    icon: greenIcon,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n                        children: position.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocationMarker, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\nextjs-react-leaflet-map-main\\\\nextjs-react-leaflet-map-main\\\\components\\\\Map.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Map;\nvar _c, _c1;\n$RefreshReg$(_c, \"LocationMarker\");\n$RefreshReg$(_c1, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBMIGZyb20gXCJsZWFmbGV0XCI7XG5pbXBvcnQge1xuICBNYXBDb250YWluZXIsXG4gIFRpbGVMYXllcixcbiAgTWFya2VyLFxuICBQb3B1cCxcbiAgdXNlTWFwRXZlbnRzLFxuICBMYXllcnNDb250cm9sLFxuICBHZW9KU09OLFxuICBXTVNUaWxlTGF5ZXIsXG59IGZyb20gXCJyZWFjdC1sZWFmbGV0XCI7XG5pbXBvcnQgXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS9kaXN0L2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBvc2l0aW9ucyB0byBtYXAgb3ZlclxuXG5jb25zdCBwb3NpdGlvbnMgPSBbXG4gIHsgbmFtZTogXCJoaWVyIGlzdCB3YXNcIiwgbGF0OiA1MiwgbG9uZzogOCB9LFxuICB7IG5hbWU6IFwiaGllciBpc3Qgd2FzIGFuZGVyZXNcIiwgbGF0OiA1MSwgbG9uZzogOSB9LFxuXTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBvdXIgY3VzdG9tIGljb25cblxuY29uc3QgZ3JlZW5JY29uID0gTC5pY29uKHtcbiAgaWNvblVybDogXCJsZWFmLWdyZWVuLnBuZ1wiLFxuICBzaGFkb3dVcmw6IFwibGVhZi1zaGFkb3cucG5nXCIsXG5cbiAgaWNvblNpemU6IFszOCwgOTVdLCAvLyBzaXplIG9mIHRoZSBpY29uXG4gIHNoYWRvd1NpemU6IFs1MCwgNjRdLCAvLyBzaXplIG9mIHRoZSBzaGFkb3dcbiAgaWNvbkFuY2hvcjogWzIyLCA5NF0sIC8vIHBvaW50IG9mIHRoZSBpY29uIHdoaWNoIHdpbGwgY29ycmVzcG9uZCB0byBtYXJrZXIncyBsb2NhdGlvblxuICBzaGFkb3dBbmNob3I6IFs0LCA2Ml0sIC8vIHRoZSBzYW1lIGZvciB0aGUgc2hhZG93XG4gIHBvcHVwQW5jaG9yOiBbLTMsIC03Nl0sIC8vIHBvaW50IGZyb20gd2hpY2ggdGhlIHBvcHVwIHNob3VsZCBvcGVuIHJlbGF0aXZlIHRvIHRoZSBpY29uQW5jaG9yXG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgaW4gYSBzZXBhcmF0ZSBmaWxlIDspXG5cbmZ1bmN0aW9uIExvY2F0aW9uTWFya2VyKCkge1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBtYXAgPSB1c2VNYXBFdmVudHMoe1xuICAgIGxvY2F0aW9uZm91bmQoZSkge1xuICAgICAgc2V0UG9zaXRpb24oZS5sYXRsbmcpO1xuICAgICAgbWFwLmZseVRvKGUubGF0bG5nLCBtYXAuZ2V0Wm9vbSgpKTtcbiAgICB9LFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG1hcC5sb2NhdGUoKTtcbiAgfSwgW21hcF0pO1xuXG4gIHJldHVybiBwb3NpdGlvbiA9PT0gbnVsbCA/IG51bGwgOiAoXG4gICAgPE1hcmtlciBwb3NpdGlvbj17cG9zaXRpb259PlxuICAgICAgPFBvcHVwPllvdSBhcmUgaGVyZTwvUG9wdXA+XG4gICAgPC9NYXJrZXI+XG4gICk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gb3VyIG1hcCBjb21wb25lbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKCkge1xuICByZXR1cm4gKFxuICAgIDxNYXBDb250YWluZXJcbiAgICAgIGNsYXNzTmFtZT1cIk1hcFwiXG4gICAgICBjZW50ZXI9e1syOSwgNDddfVxuICAgICAgem9vbT17MTV9XG4gICAgICBzY3JvbGxXaGVlbFpvb21cbiAgICA+XG4gICAgXG4gICAgICA8TGF5ZXJzQ29udHJvbCBwb3NpdGlvbj0ndG9wcmlnaHQnPlxuICAgICAgICA8TGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXIgcmFkaW8gbmFtZT1cIk9wZW4gU3RyZWV0IE5hbWVcIj5cbiAgICAgICAgPFRpbGVMYXllclxuICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgIC8+XG4gICAgICA8L0xheWVyc0NvbnRyb2wuQmFzZUxheWVyPlxuICAgICAgICA8TGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXIgcmFkaW8gbmFtZT1cIlNhdGFsaXRlXCI+XG4gICAgICAgIDxUaWxlTGF5ZXJcbiAgICBhdHRyaWJ1dGlvbj0nTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9cIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIDxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgSW1hZ2VyeSAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXCI+TWFwYm94PC9hPidcbiAgICB1cmw9XCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9semFocmFuaS9jbGI3b3Y0MnMwMDFxMTVxZ2o1NHNtczY4L3RpbGVzLzI1Ni97en0ve3h9L3t5fUAyeD9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2liSHBoYUhKaGJta2lMQ0poSWpvaVkyeGlOMjk1WXpVNU1HUmphRE4wYkdvMVptZGtibU50ZFNKOS5sWjBfTVNTVUhxNWdEbVhGcWJyYzFRXCJcbiAgLz5cbiAgICAgIDwvTGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXI+XG4gICAgICA8TGF5ZXJzQ29udHJvbC5CYXNlTGF5ZXIgcmFkaW8gbmFtZT1cIlNhdGFsaXRlXCI+XG4gICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly90aWxlcy5hcmNnaXMuY29tL3RpbGVzLzJ6d1RtRFV4VHpUVkJ5dFUvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvS3V3YWl0RmluZGVyM0Jhc2VtYXAvVmVjdG9yVGlsZVNlcnZlcj9mPWpzYXBpJmNhY2hlS2V5PTk5MTk0NTgxNTNhZmFjMTVcIlxuICAgICAgICBhdHRyaWJ1dGlvbj0nTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9JnF1b3Q7aHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvJnF1b3Q7Pk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgPGEgaHJlZj0mcXVvdDtodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wLyZxdW90Oz5DQy1CWS1TQTwvYT4sIEltYWdlcnkgJmNvcHk7IDxhIGhyZWY9JnF1b3Q7aHR0cHM6Ly93d3cubWFwYm94LmNvbS8mcXVvdDs+TWFwYm94PC9hPidcbiAgICAgICAgem9vbT17MTV9XG4gICAgICAvPlxuICAgICAgPC9MYXllcnNDb250cm9sLkJhc2VMYXllcj5cbiAgICAgIDxMYXllcnNDb250cm9sLk92ZXJsYXkgcmFkaW8gbmFtZT1cIkNvbnN0cnVjdGlvbiBQcm9qZWN0c1wiPlxuICAgICAgY29tcG9uZW50RGlkTW91bnQoKVxuICB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vZGVtbzc0NDM0OTcubW9ja2FibGUuaW8vc3RyZWFtL3ZpZGVvJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZmluZHJlc3BvbnNlKT0+e1xuICAgICAgY29uc29sZS5sb2coZmluZHJlc3BvbnNlLnVybClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOmZpbmRyZXNwb25zZS51cmwsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgICAgIDwvTGF5ZXJzQ29udHJvbC5PdmVybGF5PlxuICAgICAgPC9MYXllcnNDb250cm9sPlxuICAgICAge3Bvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17W3Bvc2l0aW9uLmxhdCwgcG9zaXRpb24ubG9uZ119IGljb249e2dyZWVuSWNvbn0+XG4gICAgICAgICAgICA8UG9wdXA+e3Bvc2l0aW9uLm5hbWV9PC9Qb3B1cD5cbiAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuXG4gICAgICA8TG9jYXRpb25NYXJrZXIgLz5cbiAgICA8L01hcENvbnRhaW5lcj5cbiAgICBcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkwiLCJNYXBDb250YWluZXIiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJQb3B1cCIsInVzZU1hcEV2ZW50cyIsIkxheWVyc0NvbnRyb2wiLCJHZW9KU09OIiwiV01TVGlsZUxheWVyIiwiYXhpb3MiLCJwb3NpdGlvbnMiLCJuYW1lIiwibGF0IiwibG9uZyIsImdyZWVuSWNvbiIsImljb24iLCJpY29uVXJsIiwic2hhZG93VXJsIiwiaWNvblNpemUiLCJzaGFkb3dTaXplIiwiaWNvbkFuY2hvciIsInNoYWRvd0FuY2hvciIsInBvcHVwQW5jaG9yIiwiTG9jYXRpb25NYXJrZXIiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwibWFwIiwibG9jYXRpb25mb3VuZCIsImUiLCJsYXRsbmciLCJmbHlUbyIsImdldFpvb20iLCJsb2NhdGUiLCJNYXAiLCJjbGFzc05hbWUiLCJjZW50ZXIiLCJ6b29tIiwic2Nyb2xsV2hlZWxab29tIiwiQmFzZUxheWVyIiwicmFkaW8iLCJhdHRyaWJ1dGlvbiIsInVybCIsIk92ZXJsYXkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJmaW5kcmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map.jsx\n");

/***/ })

});