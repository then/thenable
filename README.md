# thenable

[![Build Status](https://secure.travis-ci.org/then/thenable.png?branch=master)](https://travis-ci.org/then/thenable)
[![Dependency Status](https://img.shields.io/david/then/thenable.svg)](https://david-dm.org/then/thenable)

  Wrap and unwrap thenables so that you can pass them through promises

## Installation

    $ npm install thenable

## API

### thenable.wrap(thenable)

  Return a `Wrapped` object for that thenable

### thenable.unwrap(obj)

  If `obj` is a `Wrapped` return the thenable that `obj` wraps, else return `obj`.

### Wrapped#unwrap()

  Return the thenable being wrapped.

## Example

```javascript
promise
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
```

## License

  MIT

![viewcount](https://viewcount.jepso.com/count/then/thenable.png)
