'use strict';

var isObject = require('is-extendable');
var forIn = require('for-in');

module.exports = function mixin(target, objects) {
  if (!isObject(target)) {
    throw new TypeError('expected the first argument to be an object');
  }

  var len = arguments.length;
  var idx = 0;

  while (++idx < len) {
    copy(target, arguments[idx]);
  }
  return target;
};

/**
 * copy properties from the source object to the
 * target object. We don't use `Object.keys` here, since
 * "mixin" also adds non-enumerable keys.
 *
 * @param  {*} `value`
 * @param  {String} `key`
 */

function copy(target, obj) {
  if (isObject(obj)) {
    forIn(obj, function(value, key) {
      target[key] = value;
    });
  }
}
