'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ssrapp = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _server = require('react-dom/server');

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
        newObj.default = obj; return newObj; } }

var app = (0, _express2.default)();
app.get('/', function(req, res) {
    var content = (0, _server.renderToString)(React.createElement(_App2.default, null));
    var head = _reactHelmet2.default.renderStatic();
    var html = '\n    <!doctype html>\n    <html ' + head.htmlAttributes.toString() + '>\n        <head>\n            ' + head.title.toString() + '\n            ' + head.meta.toString() + '\n            ' + head.link.toString() + '\n        </head>\n        <body ' + head.bodyAttributes.toString() + '>\n            <div id="root">\n                ' + content + '\n            </div>\n            <script src="./bundle.js"></script>  \n        </body>\n    </html>';
    res.send(html);
});
var ssrapp = exports.ssrapp = functions.https.onRequest(app);