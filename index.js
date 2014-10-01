/*!
 * mixin-object <https://github.com/jonschlinkert/mixin-object>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var forOwn = require('for-own');

module.exports = function mixIn(o) {
  var args = [].slice.call(arguments);
  var len = args.length;

  if (o == null) {
    return {};
  }

  if (len === 0) {
    return o;
  }

  function copy(value, key) {
    this[key] = value;
  }

  for (var i = 0; i < len; i++) {
    var obj = args[i];
    if (obj != null) {
      forOwn(obj, copy, o);
    }
  }
  return o;
};