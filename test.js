'use strict';

require('mocha');
var assert = require('assert');
var mixin = require('./');

describe('mixin-object', function() {
  it('should throw an error when the first argument is not an object.', function() {
    assert.throws(function() {
      mixin();
    });
  });

  it('should mix all objects into the first one.', function() {
    var obj = {c: 'c'};
    mixin(obj, {a: 'a'}, {b: 'b'});
    assert.deepEqual(obj, {c: 'c', a: 'a', b: 'b'});
  });

  it('should return a new object when an empty object is passed.', function() {
    var c = {c: 'c'};
    var d = mixin({}, c, {a: 'a'}, {b: 'b'});
    assert.deepEqual(c, {c: 'c'});
    assert.deepEqual(d, {c: 'c', a: 'a', b: 'b'});
  });

  it('should mix properties onto a function.', function() {
    function foo() {}
    var c = {c: 'c'};
    var d = mixin(foo, c, {a: 'a'}, {b: 'b'});
    assert(foo.hasOwnProperty('a'));
    assert(foo.hasOwnProperty('b'));
    assert(foo.hasOwnProperty('c'));
  });

  it('should mixin all objects.', function() {
    assert.deepEqual(mixin({a: 'a'}, {b: 'b'}), {a: 'a', b: 'b'});
    assert.deepEqual(mixin({a: 'a'}, {b: 'b'}, {c: 'c'}), {a: 'a', b: 'b', c: 'c'});
    assert.deepEqual(mixin({a: 'a'}, {b: {c: 'c'}}, {d: 'd'}), {a: 'a', b: {c: 'c'}, d: 'd'});
  });

  it('should create a new object.', function() {
    assert.deepEqual(mixin({}, {a: 'a'}, {b: 'b'}), {a: 'a', b: 'b'});
    assert.deepEqual(mixin({}, {a: 'a'}, {b: 'b'}, {c: 'c'}), {a: 'a', b: 'b', c: 'c'});
    assert.deepEqual(mixin({}, {a: 'a'}, {b: {c: 'c'}}, {d: 'd'}), {a: 'a', b: {c: 'c'}, d: 'd'});
  });
});
