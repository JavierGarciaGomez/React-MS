webpackHotUpdate_N_E("pages/index",{

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
  //   ..., 345
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxhQUFhLEdBQUcsQ0FDM0I7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGFBRlQ7QUFHRUMsT0FBSyxFQUNILDZHQUpKO0FBS0VDLFNBQU8sRUFBRSxpQ0FMWDtBQU1FQyxNQUFJLEVBQUU7QUFOUixDQUQyQixFQVMzQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsZUFGVDtBQUdFQyxPQUFLLEVBQ0gsNExBSko7QUFLRUMsU0FBTyxFQUFFLGlDQUxYO0FBTUVDLE1BQUksRUFBRTtBQU5SLENBVDJCLENBQXRCLEMsQ0FtQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQStCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBT1UsR0FQVixlQVFFLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBckJEOztLQUFNRixRO0FBdUJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZjAwOWRlOTc2OWU1ZWRmZTY5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gMzI5LCAzMzQsIDMzNywgMzQzLCAzNDVcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIHRpdGxlOiBcIkZpcnQgbWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2MvYzAvUm9tZV9Nb250YWdlXzIwMTcucG5nLzgwMHB4LVJvbWVfTW9udGFnZV8yMDE3LnBuZ1wiLFxyXG4gICAgYWRkcmVzczogXCJzb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjOiBcImhhdmUgZnVuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiU2Vjb25kIG1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2RmL1BsYXphX1Zpcmdlbl9kZV9sb3NfUmV5ZXMlMkNfU2V2aWxsZSUyQ19TcGFpbl8tX1NlcF8yMDA5LmpwZy8xMjgwcHgtUGxhemFfVmlyZ2VuX2RlX2xvc19SZXllcyUyQ19TZXZpbGxlJTJDX1NwYWluXy1fU2VwXzIwMDkuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcInNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2M6IFwiaGF2ZSBmdW5cIixcclxuICB9LFxyXG5dO1xyXG5cclxuLy8gMzM3IHNlcnZlcnNpZGVwcm9wc1xyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gKGNvbnRleHQpID0+IHtcclxuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIDMzNSB0byByZW5kZXIgc3RhdGljIHBhZ2VcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIDM0MyBmZXRjaGluZyBtZWV0dXBzXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly91c2VyOng5NllOaWRWRzh5VEtyV0BjbHVzdGVyMC5paHJ2cC5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgY29uc3QgbW9kaWZpZWRNZWV0dXBzID0gbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJyZXN1bHRhYWRvIFwiLCBtb2RpZmllZE1lZXR1cHMpO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbW9kaWZpZWRNZWV0dXBzLFxyXG4gICAgfSxcclxuICAgIC8vIDMzNiByZXZhbGlkYXRlXHJcbiAgICByZXZhbGlkYXRlOiAzNjAwLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vICAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldGxvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgLy8gc2VuZCBhIGh0dHAgcmVxdWVzdCBhbmQgZmV0Y2hcclxuICAvLyAgICAgc2V0bG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcclxuICAvLyAgIH0sIFtEVU1NWV9NRUVUVVBTXSk7XHJcblxyXG4gIC8vICAgLi4uLCAzNDVcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkJyb3dzZSBhIGh1Z2UgbGlzdCBvZiBoaWdobHkgYWN0aXZlIE1lZXR1cHNcIlxyXG4gICAgICAgID48L21ldGE+XHJcbiAgICAgIDwvSGVhZD57XCIgXCJ9XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9PjwvTWVldHVwTGlzdD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9