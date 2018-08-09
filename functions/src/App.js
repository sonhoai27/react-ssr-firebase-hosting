"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactHelmet.Helmet, {
            title: "ReactQL application",
            meta: [{
                name: 'description',
                content: 'ReactQL starter kit app'
            }, { property: 'og:image', content: "https://www.facebook.design/public/images/ios11-card.png" }]
        }),
        _react2.default.createElement(
            "h1",
            null,
            "SON HOAIs"
        )
    );
};
exports.default = App;