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