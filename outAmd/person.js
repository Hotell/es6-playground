define([], function() {
  "use strict";
  var Person = function Person(fname, lname, age) {
    this.name = fname;
    this.surname = lname;
    this.age = age || 28;
  };
  ($traceurRuntime.createClass)(Person, {get fullname() {
      return (this.name + " " + this.surname + " : " + this.age + " years old");
    }}, {});
  var $__default = Person;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=person.map
