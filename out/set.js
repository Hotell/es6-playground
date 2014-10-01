"use strict";
var value;
var value$__4;
var x = new Set([1, 2, 3, 4, 4, 4, 5]);
console.log('=======================');
console.log('====== Set     ========');
console.log('=======================');
x.add(6);
x.delete(2);
console.log('The set contains', x.size, 'elements.');
console.log('The set has 1:', x.has(1));
console.log('The set has 8:', x.has(8));
x.forEach((function(value, key, set) {
  return console.log(value, key, set);
}));
for (var $__0 = x[Symbol.iterator](),
    $__1; !($__1 = $__0.next()).done; ) {
  value = $__1.value;
  {
    console.log(value);
  }
}
for (var $__2 = x.values()[Symbol.iterator](),
    $__3; !($__3 = $__2.next()).done; ) {
  value$__4 = $__3.value;
  {
    console.log(value$__4);
  }
}
