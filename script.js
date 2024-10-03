'use strict';
const Person= function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const faima= new Person('Faima', 2002);
console.log(faima);

const khalid= new Person('Khalid', 1997);
const faria= new Person('Faria', 1992);
console.log(khalid, faria);
 
const hafsa = 'Hafsa';
console.log( hafsa instanceof Person);
console.log( faima instanceof Person);

//protype
Person.prototype.calcAge= function (){
    console.log(2037-this.birthYear);
}

faima.calcAge();
khalid.calcAge();

console.log(faima.__proto__);
console.log(faima.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(faima));
console.log(Person.prototype.isPrototypeOf(faria));
console.log(Person.prototype.isPrototypeOf(Person));

//prototypeOfLinkedObject
Person.prototype.species= 'Homo Sapiens';
console.log(faima, khalid);
console.log(faima.species, khalid.species);

console.log(faima.hasOwnProperty('firstName'));
console.log(faima.hasOwnProperty('species'));