"use strict";
function addSpread(a, b) {
  return a + b;
}
var nums = [5, 4];
console.log('=======================');
console.log('======Spread========');
console.log('=======================');
console.log(addSpread.apply(null, $traceurRuntime.spread(nums)));

//# sourceMappingURL=spread.map
