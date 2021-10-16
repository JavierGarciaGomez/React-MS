console.log("++++++++++ 12 let and const +++++++++++++++");

var aName = "Javier";
let bName = "Javier";
const cName = "Javier";

console.log("name", aName, bName, cName);

console.log("++++++++++ 13 arrow function +++++++++++++++");

function myFunc(name) {
  console.log("Hello", name);
}

const arrowFunc = (name) => {
  console.log("Hello", name);
};

myFunc(aName);

arrowFunc(aName);

console.log("++++++++++ 14 Exports and imports +++++++++++++++");
console.log("++++++++++ 15 Classes +++++++++++++++");

class Animal {
  constuctor(family) {
    this.family = family;
  }

  getFamily() {
    return `My family is: ${this.family}`;
  }
}
class Person extends Animal {
  constructor(name, family) {
    super(family);
    this.name = name;
  }

  presentate = () => {
    return `Hello, my name is ${this.name}`;
  };

  getNameAndFamily() {
    return `Hello, my name is ${this.name} and my family is ${this.family}`;
  }
}

const newPerson = new Person("Juan", "homo sapiens");

console.log(newPerson.getNameAndFamily());

console.log("++++++++++ 16 Class, properties and methods +++++++++++++++");
console.log("++++++++++ 17 Spread and rest operators +++++++++++++++");
// Spread
const anArray = ["a", "b", "c"];
const newArray = [...anArray, 4, 5];
console.log("spread", newArray);

// Rest
const addWithRest = (...args) => {
  let sum = 0;
  for (i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  console.log("the result is: ", sum);
};

addWithRest(2, 3);
addWithRest(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

console.log("++++++++++ 18 Destructuring +++++++++++++++");

const anObject = {
  name: "objectName",
  sie: "big",
};

const { name } = anObject;
console.log(name);

console.log("++++++++++ 19 Primitive and references +++++++++++++++");
console.log("++++++++++ 20 Refreshing array functions +++++++++++++++");

const numbers = [1, 2, 3];
const doubleNumbers = numbers.map((element) => element * 2);
console.log("numbers", doubleNumbers);
