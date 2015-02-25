/*!
 * mixin-object <https://github.com/jonschlinkert/mixin-object>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('is-plain-object');
var forIn = require('for-in');

module.exports = function mixin(o, objects) {
  if (!o || !objects) { return o || {}; }

  var len = arguments.length - 1;

  function copy(value, key) {
    this[key] = value;
  }

  for (var i = 0; i < len; i++) {
    var obj = arguments[i + 1];

    if (isObject(obj)) {
      forIn(obj, copy, o);
    }
  }
  return o;
};
