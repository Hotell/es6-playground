// rest
function format(str, ...args) {
  return str.replace(/\{\s*(\d+)\s*\}/g, function (m, n) {
    return args[n];
  });
}

let msg = format(
  'The {0}st arg is a string, the {1} are {2}.',
  1,
  'rest',
  'unknown'
);


console.log('=======================');
console.log('======Rest========');
console.log('=======================');
console.log(msg);
