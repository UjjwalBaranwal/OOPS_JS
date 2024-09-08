'use strict';
/*
The JavaScript Function() constructor is used to create new function objects dynamically. By using the Function() constructor with the new operator, developers can define functions on the fly, passing the function body as a string. This allows for greater flexibility in situations where functions need to be created based on runtime conditions or user input.

One notable characteristic of functions created with the Function() constructor is that they have a global scope, meaning they are accessible from anywhere in the code.
*/
const Person = function (firstName, birthYear) {
  //   console.log(this);
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //instance method
  // never do this
  // never create a method inside the function suppose we create a 1000 instacces of this construtor then it created a 1000 copy of the same function
  // for this we use the prototype and prototype inheritance (see notes)
  this.calcAge = function () {
    console.log(2037 - this.birthYear); // random function
  };
};

const ujjwal = new Person('Ujjwal', 2002);
console.log(ujjwal);

// steps that happen when we call a new with function call
// 1. new object {} is created
// 2. function is called, this = {} ... empty object
// 3. object {} linked to the prototype
// 4. function automatically return {}

const baranwal = new Person('Baranwal', 2004);
baranwal.calcAge();
const pro = new Person('pro', 2004);
console.log(baranwal, pro);

const jay = 'jay';

console.log(pro instanceof Person); // true
console.log(jay instanceof Person); // false
