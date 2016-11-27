'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _map = require('./map/');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 路由映射

_vue2.default.use(_vueRouter2.default); /* 路由文件 */

var router = new _vueRouter2.default();

router.map(_map2.default);

exports.default = router;