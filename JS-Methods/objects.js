// 1. Object.keys() – Returns array of object keys
const user1 = { name: "Ali", age: 25, city: "Srinagar" };
console.log("Object.keys:", Object.keys(user1)); // ["name", "age", "city"]

// 2. Object.values() – Returns array of object values
console.log("Object.values:", Object.values(user1)); // ["Ali", 25, "Srinagar"]

// 3. Object.entries() – Returns array of [key, value] pairs
console.log("Object.entries:", Object.entries(user1));
// [["name", "Ali"], ["age", 25], ["city", "Srinagar"]]

// 4. Object.assign() – Copies values from source to target object
const target4 = { gender: "male" };
const source4 = { name: "Umar", age: 23 };
const combined4 = Object.assign(target4, source4);
console.log("Object.assign:", combined4);
// { gender: "male", name: "Umar", age: 23 }

// 5. hasOwnProperty() – Checks if object has specific property
const student5 = { name: "Furkaan", class: "10th" };
console.log("hasOwnProperty 'name':", student5.hasOwnProperty("name")); // true
console.log("hasOwnProperty 'rollNo':", student5.hasOwnProperty("rollNo")); // false

// 6. Object.freeze() – Makes object immutable (cannot change values)
const obj6 = { country: "India" };
Object.freeze(obj6);
obj6.country = "Pakistan"; // will not change
console.log("Object.freeze:", obj6); // { country: "India" }

// 7. Object.seal() – Allows changing values, but not adding/removing keys
const obj7 = { lang: "JS" };
Object.seal(obj7);
obj7.lang = "JavaScript"; // allowed
obj7.version = "ES6";     // not added
console.log("Object.seal:", obj7); // { lang: "JavaScript" }

// 8. Object.hasOwn() – Modern version of hasOwnProperty (ES2022+)
const person8 = { name: "Umar", age: 22 };
console.log("Object.hasOwn (name):", Object.hasOwn(person8, "name")); // true
console.log("Object.hasOwn (email):", Object.hasOwn(person8, "email")); // false

// 9. Object.fromEntries() – Converts [key, value] array back to object
const entries9 = [["name", "Ali"], ["age", 24]];
const newObj9 = Object.fromEntries(entries9);
console.log("Object.fromEntries:", newObj9); // { name: "Ali", age: 24 }

// 10. Object.is() – Compares two values (similar to ===, but safer for NaN)
console.log("Object.is(25, 25):", Object.is(25, 25)); // true
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true
console.log("Object.is(0, -0):", Object.is(0, -0)); // false

// 11. Object.defineProperty() – Defines or modifies a property
const obj11 = {};
Object.defineProperty(obj11, 'x', {
  value: 10,
  writable: false
});
console.log("Object.defineProperty:", obj11.x); // 10
obj11.x = 20; // won’t change because writable: false
console.log("after modify attempt:", obj11.x); // 10

// 12. Object.getOwnPropertyNames() – Returns all property names (incl. non-enumerable)
const obj12 = { a: 1, b: 2 };
console.log("Object.getOwnPropertyNames:", Object.getOwnPropertyNames(obj12)); // ["a", "b"]

// 13. Object.getPrototypeOf() – Returns prototype of the object
function MyFunc() {}
const instance13 = new MyFunc();
console.log("Object.getPrototypeOf:", Object.getPrototypeOf(instance13)); // MyFunc.prototype
