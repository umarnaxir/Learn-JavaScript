const friends = ['umar', 'owais', 'khalid'];

console.log(friends); //print array
console.log(friends[0]); //print umar
console.log(friends[2]); //print khalid
console.log(friends.length); //to cheack length
console.log(friends[friends.length-1]); //to access last element without index

const year = new Array (1991, 1992, 1993, 2002); //new array
// console.log(years); //print years

friends[2] = 'waseem'; //replace khalid by waseem
console.log(friends);

//add firstname in array
firstName = 'Umar'
const person = [firstName, 'Nazir', 2025 - 2001, 'student'];
console.log(person);

//Exercise
const calAge = function (birthYear) {
  return 2025 - birthYear;
};

const years = [1999, 2000, 2001, 2002];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);

console.log(age1, age2, age3);
