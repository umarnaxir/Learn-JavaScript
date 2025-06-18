//forEach Method

const students = ["umar", "khalid", "owais", "waseem"];
function print(n) {
  console.log(n);
}
// print("owais");
students.forEach(print);

//map method --- you can print old arrays as well, map helpsd to manuplate or modifies the array and returns new array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
function double(num){
    return num*2
}
let newArr = numbers.map(double);
console.log(newArr);
// console.log(numbers);

//find method --- helps to find a perticular item
const number = [1, 2, 3, 4, 5, 6, 7, 8];
let ans = number.find((num) => num === 4);
console.log(ans);
// console.log(number);

const names = ["umar", "owais", "waseem"];
let show = names.find((name) => name === "owais");
console.log(show); 

//findIndex method --- helps to find a index
const numbr = [1, 2, 3, 4, 5, 6, 7, 8];
let findNum = numbr.findIndex((num) => num === 4);
console.log([findNum]);

//filter method
const numbrr =  [1, 2, 3, 4, 5, 6, 7, 8];
let evenNum = numbrr.filter((num)=> num % 2 === 0); //compare num with 2 if returns 0 then true
console.log(evenNum);

//slice method ---it excludes starts and last index , it takes in beteen value
const numberss = [1, 2, 3, 4, 5, 6, 7, 8];
let a = numberss.slice(2, 6); //
console.log(`this is part that i need`, a)