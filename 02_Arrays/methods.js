//forEach Method
const students = ["umar", "khalid", "owais", "waseem"];
function print(n) {
  console.log(n);
}
// print("owais");
students.forEach(print);

//map method --- you can print old arrays as well,
// map helpsd to manuplate or modifies the array and returns new array
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
