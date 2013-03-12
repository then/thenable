require('mocha-as-promised')();
var thenable = require('../');
var Promise = require('promise');
var assert = require('better-assert');

var A = {
  then: function () {
    throw new Error('Then should never be called');
  }
}

describe('wrap and unwrap', function () {
  it('lets you pass a thenable through a promise', function () {
    return new Promise(function (resolve) { resolve(null); })
      .then(function () {
        return thenable.wrap(A);
      })
      .then(function (a) {
        assert(thenable.unwrap(a) === A);
        assert(a.unwrap() === A);
        return 'foo';
      })
      .then(function (foo) {
        assert(thenable.unwrap(foo) === 'foo');
      });
  });
});