export default class Person {
  constructor(fname, lname, age) {
    this.name = fname;
    this.surname = lname;
    this.age = age || 28;
  }

  get fullname() {
    return `${this.name} ${this.surname} : ${this.age} years old`;
  }
}
