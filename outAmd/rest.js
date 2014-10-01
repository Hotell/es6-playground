define([], function() {
  "use strict";
  function format(str) {
    for (var args = [],
        $__0 = 1; $__0 < arguments.length; $__0++)
      args[$__0 - 1] = arguments[$__0];
    return str.replace(/\{\s*(\d+)\s*\}/g, function(m, n) {
      return args[n];
    });
  }
  var msg = format('The {0}st arg is a string, the {1} are {2}.', 1, 'rest', 'unknown');
  console.log('=======================');
  console.log('======Rest========');
  console.log('=======================');
  console.log(msg);
  return {};
});

//# sourceMappingURL=rest.map
