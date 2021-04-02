'use strict';

var Taro = require('@tarojs/taro');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Taro__default = /*#__PURE__*/_interopDefaultLegacy(Taro);

const ENV = Taro__default['default'].getEnv();
const Counter = 2;
console.log(Counter);

console.log(ENV);
