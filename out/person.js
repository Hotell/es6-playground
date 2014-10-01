"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var Person = function Person(fname, lname, age) {
  this.name = fname;
  this.surname = lname;
  this.age = age || 28;
};
($traceurRuntime.createClass)(Person, {get fullname() {
    return (this.name + " " + this.surname + " : " + this.age + " years old");
  }}, {});
var $__default = Person;

//# sourceMappingURL=person.map
