const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0;
for(let i = 0; i<numbers.length; i++){
console.log(numbers[i]);
sum = sum + numbers[i];
}
console.log("Sum of Numbers", sum);