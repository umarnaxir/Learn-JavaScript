// 1. Create an object called `person` with name, age, and city properties.
const person = {
  name: "Umar",
  age: 24,
  city: "Srinagar"
};

// 2. Create an object called `car` with brand, model, and year.
const car = {
  brand: "Tata",
  model: "Nexon",
  year: 2025
};

// 3. Add a new property called `email` to the `person` object.
person.email = "umar@example.com";

// 4. Change the value of `city` in the `person` object.
person.city = "Baramulla";

// 5. Delete the `year` property from the `car` object.
delete car.year;

// 6. Create a function that takes an object and returns all its keys as an array.
function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys(person));

// 7. Create a function that takes an object and returns all its values as an array.
function getValues(obj) {
  return Object.values(obj);
}
console.log(getValues(car));

// 8. Create a function that takes an object and logs each key-value pair using a loop.
function logKeyValuePairs(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
logKeyValuePairs(person);

// 9. Write a function that checks if the object has a property called "status".
function hasStatus(obj) {
  return obj.hasOwnProperty("status");
}
console.log(hasStatus(car));

// 10. Create an object called `settings` and use `Object.keys()` to print all its keys.
const settings = {
  darkMode: true,
  language: "English",
  notifications: false
};
console.log(Object.keys(settings));

// 11. Use `Object.values()` to get all the values from the `car` object.
console.log(Object.values(car));

// 12. Use `Object.entries()` to get all the key-value pairs from the `person` object.
console.log(Object.entries(person));

// 13. Create a function that counts how many properties an object has.
function countProperties(obj) {
  return Object.keys(obj).length;
}
console.log(countProperties(person));

// 14. Create a function that takes two objects and merges them into one new object.
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const obj1 = { name: "Umar", age: 24 };
const obj2 = { city: "Srinagar" };
console.log(mergeObjects(obj1, obj2));

// 15. Create a function that returns true if an object has no properties.
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({})); // true
console.log(isEmpty({ name: "Umar" })); // false

// 16. Create an object `movie` with title, director, and year. Then log only the director.
const movie = {
  title: "The Tiger",
  director: "Karan Johar",
  year: 2025
};
console.log(movie.director);

// 17. Create a function that takes an object and returns an array of strings in the format "key: value".
function formatKeyValuePairs(obj) {
  return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
}
console.log(formatKeyValuePairs(movie));

// 18. Create a function that takes an object and a key, and returns true if the key exists in the object.
function keyExists(obj, key) {
  return key in obj;
}
console.log(keyExists(person, "age")); 
console.log(keyExists(person, "status"));

// 19. Write a function that swaps keys and values in an object (assume all values are unique strings).
function swapKeysAndValues(obj) {
  const swapped = {};
  for (let key in obj) {
    swapped[obj[key]] = key;
  }
  return swapped;
}
const original = { a: "apple", b: "banana" };
console.log(swapKeysAndValues(original)); 

// 20. Create a function that returns all keys from an object whose value is a number.
function getNumberKeys(obj) {
  return Object.keys(obj).filter(key => typeof obj[key] === "number");
}
const sample = { a: 1, b: "str", c: 3, d: true };
console.log(getNumberKeys(sample)); 
