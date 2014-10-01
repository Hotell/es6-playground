System.register("../playground/arrowFn", [], function() {
  "use strict";
  var __moduleName = "../playground/arrowFn";
  var square = (function(x) {
    return x * x;
  });
  var add = (function(a, b) {
    return a + b;
  });
  var pi = (function() {
    return 3.1415;
  });
  console.log('=======================');
  console.log('======Arrow fn========');
  console.log('=======================');
  console.log(square(5));
  console.log(add(3, 4));
  console.log(pi());
  return {};
});
System.register("../playground/person", [], function() {
  "use strict";
  var __moduleName = "../playground/person";
  var Person = function Person(fname, lname, age) {
    this.name = fname;
    this.surname = lname;
    this.age = age || 28;
  };
  ($traceurRuntime.createClass)(Person, {get fullname() {
      return (this.name + " " + this.surname + " : " + this.age + " years old");
    }}, {});
  var $__default = Person;
  return {get default() {
      return $__default;
    }};
});
System.register("../playground/rest", [], function() {
  "use strict";
  var __moduleName = "../playground/rest";
  function format(str) {
    for (var args = [],
        $__1 = 1; $__1 < arguments.length; $__1++)
      args[$__1 - 1] = arguments[$__1];
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
System.register("../playground/set", [], function() {
  "use strict";
  var value;
  var value$__6;
  var __moduleName = "../playground/set";
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
  for (var $__2 = x[Symbol.iterator](),
      $__3; !($__3 = $__2.next()).done; ) {
    value = $__3.value;
    {
      console.log(value);
    }
  }
  for (var $__4 = x.values()[Symbol.iterator](),
      $__5; !($__5 = $__4.next()).done; ) {
    value$__6 = $__5.value;
    {
      console.log(value$__6);
    }
  }
  return {};
});
System.register("../playground/spread", [], function() {
  "use strict";
  var __moduleName = "../playground/spread";
  function addSpread(a, b) {
    return a + b;
  }
  var nums = [5, 4];
  console.log('=======================');
  console.log('======Spread========');
  console.log('=======================');
  console.log(addSpread.apply(null, $traceurRuntime.spread(nums)));
  return {};
});
System.register("../playground/app", [], function() {
  "use strict";
  var __moduleName = "../playground/app";
  var Person = System.get("../playground/person").default;
  System.get("../playground/spread");
  System.get("../playground/arrowFn");
  System.get("../playground/rest");
  System.get("../playground/set");
  var personInstance = new Person('Martin', 'Hochel');
  console.log(personInstance.fullname);
  return {};
});
System.get("../playground/app" + '');
