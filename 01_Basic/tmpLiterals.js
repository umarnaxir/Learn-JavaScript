const firstName = "Umar";
const lastName = "Nazir";
const age = 24;
const job = "SDE";
const birthYear = 2001;

const umar = "i'am" + " " + firstName  + " " + lastName  + " " +  age + " " +  job   + " " + birthYear;
//but easy way to do the same, we can use template laters
const newUmar = `I'am ${firstName} ${lastName} ${age} years old ${job} and my DOB is ${birthYear}`;
console.log(newUmar);

console.log(`multi\n line\n string`);