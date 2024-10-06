'use strict';
/*
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
console.log(faima.__proto__);
console.log(faima.__proto__.proto__);
console.log(faima.__proto__.__proto__.proto__);

console.dir(Person.prototype.constructor);

const arr=[3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);

Array.prototype.unique= function(){
  return [...new Set(this)];
}

console.log(arr.unique());
*/
//es6 classes
/*
class PersonCl{
  constructor(fullName, birthYear){
     this.fullName = fullName;
     this.birthYear = birthYear;
  }
calcAge(){
  console.log(2037-this.birthYear);
}

greet(){
  console.log(`Hey ${this.firstName}`);
}

get age(){
  return 2037-this.birthYear;
}

set fullName(name){
  console.log(name);
  if(name.includes(' ')) this._fullName=name;
  else alert(`${name} is not a full name!`);
}

get fullName(){
  return this._fullName;
}

}  

const jessica= new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet= function(){
//   console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

const faima = new PersonCl('Faima Ahmed', 1965);

 
const account={
  owner:'Faima',
  movements: [200, 530, 120, 300],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov);
  }
}

console.log(account.latest);

account.latest=50;
console.log(account.movements);
*/

const Personproto={
  calcAge(){
    console.log(2037-this.birthYear);
  },
  
}

const steven= Object.create(Personproto);
console.log(steven);