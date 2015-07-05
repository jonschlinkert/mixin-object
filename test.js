'use strict';

/* deps: mocha */
require('should');
var mixin = require('./');

describe('.mixin()', function () {
  it('should throw an error when the first argument is not an object.', function () {
    (function () {
      mixin();
    }).should.throw('mixin-object expects the first argument to be an object.');
  });

  it('should mix all objects into the first one.', function () {
    var obj = {c: 'c'};
    mixin(obj, {a: 'a'}, {b: 'b'});
    obj.should.eql({c: 'c', a: 'a', b: 'b'});
  });

  it('should return a new object when an empty object is passed.', function () {
    var c = {c: 'c'};
    var d = mixin({}, c, {a: 'a'}, {b: 'b'});
    c.should.eql({c: 'c'});
    d.should.eql({c: 'c', a: 'a', b: 'b'});
  });

  it('should mix properties onto a function.', function () {
    function foo() {}
    var c = {c: 'c'};
    var d = mixin(foo, c, {a: 'a'}, {b: 'b'});
    foo.should.have.properties(['a', 'b', 'c']);
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
