// Primitives

let age: number = 4;
age = 12.25;
let userName: string = "user1";
let isInstructor: boolean = false;
// error age='12';

// Complex: array, objects
let any: any;

let hobbies: string[] = ["a", "ab", "abc"];
let stundentsAges: number[] = [2, 3, 4];

let person: { name: string; age: number };
// error person = "javi";
person = { name: "nome", age: 23 };

// type interference

let number = 4;
// not possible, because first it was a number:
// number = "jou";

// union type
let course: string | number;
course = "react";
course = 23;

// 401 type aliases
type Animal = {
  name: string;
  class: string;
};

let equidae: Animal;

equidae = {
  name: "horse",
  class: "mmammal",
};
// 402 Function: types, parameters

function addition(a: number, b: number): number {
  return a + b;
}

// 403 Generics: it will understand that is not any type, but must be the same type
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 4);
