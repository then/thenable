function Wrapped(thenable) {
  this.val = thenable;
}
Wrapped.prototype.unwrap = function () {
  return this.val;
};

exports.wrap = wrap;
function wrap(thenable) {
  return new Wrapped(thenable);
}

exports.unwrap = unwrap;
function unwrap(wrapped) {
  return wrapped instanceof Wrapped ? wrapped.unwrap() : wrapped;
}