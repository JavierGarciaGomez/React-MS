webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, DUMMY_MEETUPS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUMMY_MEETUPS", function() { return DUMMY_MEETUPS; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\Javier\\Desktop\\Code\\Courses\\ReactMS\\s23-nextjs\\meetupsApp\\pages\\index.js",
    _this = undefined;

// 329, 334, 337, 343, 345




var __N_SSG = true;
var DUMMY_MEETUPS = [{
  id: "m1",
  title: "Firt meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rome_Montage_2017.png/800px-Rome_Montage_2017.png",
  address: "some address 5, 12345 Some City",
  desc: "have fun"
}, {
  id: "m2",
  title: "Second meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Plaza_Virgen_de_los_Reyes%2C_Seville%2C_Spain_-_Sep_2009.jpg/1280px-Plaza_Virgen_de_los_Reyes%2C_Seville%2C_Spain_-_Sep_2009.jpg",
  address: "some address 5, 12345 Some City",
  desc: "have fun"
}]; // 337 serversideprops
// export const getServerSideProps = (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: DUMMY_MEETUPS,
//   };
// };
// 335 to render static page

var HomePage = function HomePage(props) {
  //   const [loadedMeetups, setloadedMeetups] = useState([]);
  //   useEffect(() => {
  //     // send a http request and fetch
  //     setloadedMeetups(DUMMY_MEETUPS);
  //   }, [DUMMY_MEETUPS]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 10
  }, _this);
};

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdEQ7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxhQUFhLEdBQUcsQ0FDM0I7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGFBRlQ7QUFHRUMsT0FBSyxFQUNILDZHQUpKO0FBS0VDLFNBQU8sRUFBRSxpQ0FMWDtBQU1FQyxNQUFJLEVBQUU7QUFOUixDQUQyQixFQVMzQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsZUFGVDtBQUdFQyxPQUFLLEVBQ0gsNExBSko7QUFLRUMsU0FBTyxFQUFFLGlDQUxYO0FBTUVDLE1BQUksRUFBRTtBQU5SLENBVDJCLENBQXRCLEMsQ0FtQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQStCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBUkQ7O0tBQU1GLFE7QUFVU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElkXS44MWE3ZGM2M2MwMTE1ZmY5MTRjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwiLy8gMzI5LCAzMzQsIDMzNywgMzQzLCAzNDVcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiRmlydCBtZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYy9jMC9Sb21lX01vbnRhZ2VfMjAxNy5wbmcvODAwcHgtUm9tZV9Nb250YWdlXzIwMTcucG5nXCIsXHJcbiAgICBhZGRyZXNzOiBcInNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2M6IFwiaGF2ZSBmdW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJTZWNvbmQgbWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZGYvUGxhemFfVmlyZ2VuX2RlX2xvc19SZXllcyUyQ19TZXZpbGxlJTJDX1NwYWluXy1fU2VwXzIwMDkuanBnLzEyODBweC1QbGF6YV9WaXJnZW5fZGVfbG9zX1JleWVzJTJDX1NldmlsbGUlMkNfU3BhaW5fLV9TZXBfMjAwOS5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwic29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzYzogXCJoYXZlIGZ1blwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLyAzMzcgc2VydmVyc2lkZXByb3BzXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSAoY29udGV4dCkgPT4ge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gMzM1IHRvIHJlbmRlciBzdGF0aWMgcGFnZVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gMzQzIGZldGNoaW5nIG1lZXR1cHNcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL3VzZXI6eDk2WU5pZFZHOHlUS3JXQGNsdXN0ZXIwLmlocnZwLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG5cclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICBjb25zdCBtb2RpZmllZE1lZXR1cHMgPSBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgfSkpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcInJlc3VsdGFhZG8gXCIsIG1vZGlmaWVkTWVldHVwcyk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtb2RpZmllZE1lZXR1cHMsXHJcbiAgICB9LFxyXG4gICAgLy8gMzM2IHJldmFsaWRhdGVcclxuICAgIHJldmFsaWRhdGU6IDM2MDAsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gICBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0bG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICAvLyBzZW5kIGEgaHR0cCByZXF1ZXN0IGFuZCBmZXRjaFxyXG4gIC8vICAgICBzZXRsb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4gIC8vICAgfSwgW0RVTU1ZX01FRVRVUFNdKTtcclxuXHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9PjwvTWVldHVwTGlzdD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==