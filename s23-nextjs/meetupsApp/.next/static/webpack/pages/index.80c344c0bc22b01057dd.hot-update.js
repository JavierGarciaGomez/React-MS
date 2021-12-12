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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\Javier\\Desktop\\Code\\Courses\\ReactMS\\s23-nextjs\\meetupsApp\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

// 329, 334, 337, 343



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

var HomePage = function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedMeetups = _useState[0],
      setloadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // send a http request and fetch
    setloadedMeetups(DUMMY_MEETUPS);
  }, [DUMMY_MEETUPS]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    meetups: loadedMeetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 10
  }, _this);
};

_s(HomePage, "lcr2957adm8j6HycmqNLGUGalOE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRsb2FkZWRNZWV0dXBzIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUEsYUFBYSxHQUFHLENBQzNCO0FBQ0VDLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxhQUZUO0FBR0VDLE9BQUssRUFDSCw2R0FKSjtBQUtFQyxTQUFPLEVBQUUsaUNBTFg7QUFNRUMsTUFBSSxFQUFFO0FBTlIsQ0FEMkIsRUFTM0I7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGVBRlQ7QUFHRUMsT0FBSyxFQUNILDRMQUpKO0FBS0VDLFNBQU8sRUFBRSxpQ0FMWDtBQU1FQyxNQUFJLEVBQUU7QUFOUixDQVQyQixDQUF0QixDLENBbUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUF5QkEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBQyxFQUFELENBRDdCO0FBQUEsTUFDZEMsYUFEYztBQUFBLE1BQ0NDLGdCQUREOztBQUVyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQUQsb0JBQWdCLENBQUNULGFBQUQsQ0FBaEI7QUFDRCxHQUhRLEVBR04sQ0FBQ0EsYUFBRCxDQUhNLENBQVQ7QUFLQSxzQkFBTyxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRVE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FSRDs7R0FBTUYsUTs7S0FBQUEsUTtBQVVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MGMzNDRjMGJjMjJiMDEwNTdkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gMzI5LCAzMzQsIDMzNywgMzQzXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJGaXJ0IG1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9jL2MwL1JvbWVfTW9udGFnZV8yMDE3LnBuZy84MDBweC1Sb21lX01vbnRhZ2VfMjAxNy5wbmdcIixcclxuICAgIGFkZHJlc3M6IFwic29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzYzogXCJoYXZlIGZ1blwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIlNlY29uZCBtZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kZi9QbGF6YV9WaXJnZW5fZGVfbG9zX1JleWVzJTJDX1NldmlsbGUlMkNfU3BhaW5fLV9TZXBfMjAwOS5qcGcvMTI4MHB4LVBsYXphX1Zpcmdlbl9kZV9sb3NfUmV5ZXMlMkNfU2V2aWxsZSUyQ19TcGFpbl8tX1NlcF8yMDA5LmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJzb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjOiBcImhhdmUgZnVuXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vIDMzNyBzZXJ2ZXJzaWRlcHJvcHNcclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IChjb250ZXh0KSA9PiB7XHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vLyAzMzUgdG8gcmVuZGVyIHN0YXRpYyBwYWdlXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAvLyAzNDMgZmV0Y2hpbmcgbWVldHVwc1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vdXNlcjp4OTZZTmlkVkc4eVRLcldAY2x1c3RlcjAuaWhydnAubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKTtcclxuXHJcbiAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbiAgICB9LFxyXG4gICAgLy8gMzM2IHJldmFsaWRhdGVcclxuICAgIHJldmFsaWRhdGU6IDM2MDAsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRsb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gc2VuZCBhIGh0dHAgcmVxdWVzdCBhbmQgZmV0Y2hcclxuICAgIHNldGxvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgfSwgW0RVTU1ZX01FRVRVUFNdKTtcclxuXHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e2xvYWRlZE1lZXR1cHN9PjwvTWVldHVwTGlzdD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==