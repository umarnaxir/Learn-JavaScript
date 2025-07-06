//array
const umarArray = [
  'umar',
  'nazir',
  2025 - 2001,
  ['Owais', 'Khalid', 'OTL']
];

//object
const umar = {
  firstName: 'Umar',
  lastName: 'Nazir',
  age: 2025 - 2001,
  job: 'Intern',
  friends:['Owais', 'Khalid', 'OTL']
}
console.log(umar);
console.log(umar.lastName);
console.log(umar.age);

//Object Methods

//Asign
const person = {
  firstName: "Amir",
  lastName: "Nazir"
}
const xyz = {
  firstName: "Faizan",
  age: 20,
  Email: "faizan@123"
}
console.log(person);
Object.assign(person, xyz);
console.log(person);

//Create
const person2 = {
  firstName: "sameer",
  age: 23
}
const newObj = Object.create(person2);
console.log(newObj.firstName);

//Keys
const person3 = {
  firstName: "Amir",
  lastName: "Nazir",
  age:22,
  Email: "amir@123"
}
const myKeys = Object.keys(person3)
console.log(myKeys);
console.log(Object.keys(person3));

//values
console.log(Object.values(person3));

//entries
console.log(Object.entries(person3));

//fromEntries - back to obj
const newObj2 = Object.fromEntries(Object.entries(person3));
console.log(newObj2);

//Example 2
const entries = [
  ["firstName", "Amir"],
  ["lastName", "Nazir"],
  ["age", 22],
  ["email", "amir@123"]
];

const newEntry = Object.fromEntries(entries);

console.log(newEntry);

//GroupBy - Looping (Grouping of data)
//General Methods

const flipKart = [
  { productName: 'Redmi Note 7', category: 'mobile', price: 16000 },
  { productName: 'Phillips 001', category: 'TV', price: 22000 },
  { productName: 'MI Smart TV', category: 'LED', price: 35000 },
  { productName: 'Samsung Galaxy', category: 'mobile', price: 25000 },
  { productName: 'Elephent 005', category: 'Toy', price: 1499 },
  { productName: 'Nokia n1054', category: 'LED', price: 50000 },
  { productName: 'Sony', category: 'TV', price: 70000 },
];

const result = Object.groupBy(flipKart, (item) => {
  if (item.price >= 25000) {
    return 'HighPriceProducts';
  } else {
    return 'LowPriceProducts';
  }
});

// Grouping by renamed category labels
const catItem = Object.groupBy(flipKart, (item) => {
  if (item.category === "LED") return "LedProducts";
  if (item.category === "TV") return "TVProducts";
  if (item.category === "mobile") return "MobileProducts";
  if (item.category === "Toy") return "ToyProducts";
  return item.category; // fallback if new category comes
});

console.log(catItem);
console.log(result);
//General Methods End

//Prevent methods - Secure (can't add next property)
const person4 = {
  firstName: "umar",
  lastName: "nazir",
  age: 24,
  email: "umar@123"
}
Object.preventExtensions(person4);
person4.mob = 234545678;
console.log(person4);

//isExtensible - check is there any restrictions
const person5 = {
  firstName: "Basit",
  lastName: "yousuf",
  age: 23
}
const x = Object.isExtensible(person5)
console.log(x);

//seal - cant add or delete only can change
const person6 = {
  firstName: "Khalid",
  lastName: "Jan",
  age: 24
}
Object.seal(person6)
person6.mob = 1234567890 //does not work bcz obj is sealed
person6.age = 25;
console.log(person6)

//isSealed - check is the seal method applied on the object or not if yes it return true
console.log(Object.isSealed(person6))

//Freeze - cant delete, add or change object
const person7 = {
  firstName: "Rayees",
  lastName: "Ahmad"
}
Object.freeze(person7);
person7.age = 23;
delete person7.firstName;
person7.firstName = "sameer";
console.log(person7)

//isFrozen - check is there any freeze method applied 
console.log(Object.isFrozen(person7))