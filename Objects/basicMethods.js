// Looping Through Object Properties
const student1 = {
  name: "Ali",
  class: "10th",
  rollNo: 12,
};

for (let key in student1) {
  console.log(key + ": " + student1[key]);
}

// returns array of keys
const car1 = { brand: "Toyota", model: "Camry" };
console.log(Object.keys(car1));

// returns array of key-value pairs
console.log(Object.entries(car1));

// check if key exists
console.log(car1.hasOwnProperty("model"));
console.log(car1.hasOwnProperty("color"));

// Nested Objects
const employee1 = {
  name: "Furkan",
  address: {
    city: "Srinagar",
    pin: 190001,
  },
};

console.log(employee1.address.city);

// Array of Objects
const users1 = [
  { name: "Umar", age: 24 },
  { name: "Furkan", age: 22 },
];

console.log(users1[0].name);
console.log(users1[1].age);

// Merge objects or clone
const objA = { name: "Umar" };
const objB = { age: 24 };
const mergedAB = Object.assign({}, objA, objB);
console.log(mergedAB);

// Copy or merge using spread
const original1 = { name: "Umar", age: 24 };
const copy1 = { ...original1 };
console.log(copy1);

// Make object immutable
const user5 = { name: "Furkan" };
Object.freeze(user5);
user5.name = "Changed";
console.log(user5.name);

// Prevent adding/removing properties
const person2 = { name: "Ali" };
Object.seal(person2);
person2.name = "Imran";
person2.age = 30;
console.log(person2);

// Object.entries() + forEach()
const student2 = { name: "Umar", class: "12th" };
Object.entries(student2).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Convert entries back to object
const userEntries = [
  ["name", "Umar"],
  ["age", 24],
];
const userObj = Object.fromEntries(userEntries);
console.log(userObj);

// PART 12: Object Destructuring
const user6 = { name: "Umar", age: 24 };
const { name, age } = user6;
console.log(name);
console.log(age);

const person3 = { name: "Furkan", age: 22 };
const { name: username } = person3;
console.log(username);

const user7 = {
  name: "Umar",
  address: {
    city: "Baramulla",
    zip: 193101,
  },
};
const {
  address: { city },
} = user7;
console.log(city);

// PART 13: Optional Chaining (?.)
const user8 = {
  name: "Umar",
  address: {
    city: "Baramulla",
  },
};
console.log(user8.address?.city);
console.log(user8.contact?.phone);

// PART 14: Dynamic Object Keys
const dynamicKey = "email";
const dynamicValue = "umar@gmail.com";
const user9 = {
  [dynamicKey]: dynamicValue,
};
console.log(user9);

// PART 15: Object Methods in Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }
}

const p1 = new Person("Umar", 24);
console.log(p1.greet());

// PART 16: Object Utility Function
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ name: "Umar" }));

// PART 17: Convert Entries to Object
const entryArray1 = [
  ["name", "Umar"],
  ["age", 24],
];
const fromEntries1 = Object.fromEntries(entryArray1);
console.log(fromEntries1);

// PART 18: Freeze Object
const frozenUser1 = { name: "Umar" };
Object.freeze(frozenUser1);
frozenUser1.name = "Changed";
console.log(frozenUser1.name);

// PART 19: Seal Object
const sealedPerson1 = { name: "Ali" };
Object.seal(sealedPerson1);
sealedPerson1.name = "Imran";
sealedPerson1.age = 30;
console.log(sealedPerson1);

// PART 20: Loop through Object with Entries
const student3 = { name: "Umar", class: "12th" };
Object.entries(student3).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// ADVANCED PRACTICE QUESTIONS

// Q1. Merge two objects using Object.assign and spread
const objX = { a: 1 };
const objY = { b: 2 };
const mergedX = Object.assign({}, objX, objY);
const mergedY = { ...objX, ...objY };
console.log(mergedX);
console.log(mergedY);

// Q2. Check if all values in object are numbers
function allNumbers(obj) {
  return Object.values(obj).every((val) => typeof val === "number");
}
console.log(allNumbers({ a: 1, b: 2 }));
console.log(allNumbers({ a: 1, b: "x" }));

// Q3. Convert array of entries to object
const pairArray1 = [
  ["x", 10],
  ["y", 20],
];
const resultObj1 = Object.fromEntries(pairArray1);
console.log(resultObj1);

// Q4. Freeze object and try to modify
const locked1 = { pin: 1234 };
Object.freeze(locked1);
locked1.pin = 1111;
console.log(locked1);

// Q5. Optional chaining deeply nested
const employee2 = {
  details: {
    personal: {
      email: "umar@company.com",
    },
  },
};
console.log(employee2.details?.personal?.email);
console.log(employee2.details?.contact?.phone);

// Q6. Count number of properties in object
function countProps(obj) {
  return Object.keys(obj).length;
}
console.log(countProps({ a: 1, b: 2 }));
console.log(countProps({}));
