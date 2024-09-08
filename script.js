'use strict';
/*
The JavaScript Function() constructor is used to create new function objects dynamically. By using the Function() constructor with the new operator, developers can define functions on the fly, passing the function body as a string. This allows for greater flexibility in situations where functions need to be created based on runtime conditions or user input.

One notable characteristic of functions created with the Function() constructor is that they have a global scope, meaning they are accessible from anywhere in the code.
*/

//////////////////////////////////////////////////////////////////////
///// Constructor function and the new keyword
const Person = function (firstName, birthYear) {
  //   console.log(this);
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //instance method
  // never do this
  // never create a method inside the function suppose we create a 1000 instacces of this construtor then it created a 1000 copy of the same function
  // for this we use the prototype and prototype inheritance (see notes)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear); // random function
  // };
};

const ujjwal = new Person('Ujjwal', 2002);
console.log(ujjwal);

// steps that happen when we call a new with function call
// 1. new object {} is created
// 2. function is called, this = {} ... empty object
// 3. object {} linked to the prototype
// 4. function automatically return {}

const baranwal = new Person('Baranwal', 2004);
// baranwal.calcAge();
const pro = new Person('pro', 2004);
console.log(baranwal, pro);

const jay = 'jay';

console.log(pro instanceof Person); // true
console.log(jay instanceof Person); // false
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

ujjwal.calcAge();
baranwal.calcAge();
pro.calcAge();

// how this prototype thing work ??

/*
  when we access some properties or attibutes or method of the certain instances and it did not find in its parent constructor then it look for it in its Protoype and this is known as Prototypal Inheritance / Delegation
*/

console.log(ujjwal.__proto__); // note :-  the step number 3 (look above) create the __proto__ property
console.log(ujjwal.__proto__ === Person.prototype); // true

// see here the Person.prototype is not the prototype of the person but its the prototype that is implemented by the object creted by the person
console.log(Person.prototype.isPrototypeOf(ujjwal)); // true
console.log(Person.prototype.isPrototypeOf(baranwal)); // true
console.log(Person.prototype.isPrototypeOf(pro)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
// this prove the Person is not the prototype of it self

Person.prototype.species = 'Homo Sapien';
// its added the species as a prototype so the all the object of the Person will gets this
console.log(ujjwal.species, baranwal.species);
// so this property `species` is now the property own by the object . its like the property injected into the Person .
// its mean they access through the prototype property
// lets confirm this
console.log(ujjwal.hasOwnProperty('firstName')); // true
console.log(ujjwal.hasOwnProperty('species')); // false
