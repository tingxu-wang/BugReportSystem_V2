'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _router = require('./router/');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 启动文件 */
var App = {};
_router2.default.start(App, '#app');

_vue2.default.config.debug = true;