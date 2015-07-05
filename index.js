'use strict';

var isObject = require('is-extendable');
var forIn = require('for-in');

module.exports = function mixin(target, objects) {
  if (!isObject(target)) {
    throw new TypeError('mixin-object expects the first argument to be an object.');
  }

  // if no additional objects are defined, return the first one.
  if (!isObject(objects)) {
    return target;
  }

  var len = arguments.length, i = 0;
  while (++i < len) {
    var obj = arguments[i];
    if (isObject(obj)) {
      forIn(obj, copy, target);
    }
  }
  return target;
};

function copy(value, key) {
  this[key] = value;
}
