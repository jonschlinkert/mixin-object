/*!
 * mixin-object <https://github.com/jonschlinkert/mixin-object>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var mixin = require('./');

describe('.mixin()', function () {
  it('should mix all objects into the first one.', function () {
    var c = {c: 'c'};
    mixin(c, {a: 'a'}, {b: 'b'});
    c.should.eql({c: 'c', a: 'a', b: 'b'});
  });

  it('should mix all objects into a new object.', function () {
    var c = {c: 'c'};
    var d = mixin({}, c, {a: 'a'}, {b: 'b'});
    c.should.eql({c: 'c'});
    d.should.eql({c: 'c', a: 'a', b: 'b'});
  });

  it('should mixin all objects.', function () {
    mixin({a: 'a'}, {b: 'b'}).should.eql({a: 'a', b: 'b'});
    mixin({a: 'a'}, {b: 'b'}, {c: 'c'}).should.eql({a: 'a', b: 'b', c: 'c'});
    mixin({a: 'a'}, {b: {c: 'c'}}, {d: 'd'}).should.eql({a: 'a', b: {c: 'c'}, d: 'd'});
  });

  it('should create a new object.', function () {
    mixin({}, {a: 'a'}, {b: 'b'}).should.eql({a: 'a', b: 'b'});
    mixin({}, {a: 'a'}, {b: 'b'}, {c: 'c'}).should.eql({a: 'a', b: 'b', c: 'c'});
    mixin({}, {a: 'a'}, {b: {c: 'c'}}, {d: 'd'}).should.eql({a: 'a', b: {c: 'c'}, d: 'd'});
  });
});
