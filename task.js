// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let double = numbers.filter((num) => num %2 === 0);
// console.log(double);

// const numbers = [25, 15, 30, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   sum = sum + numbers[i];
// }
// console.log(`Sum of all Numbers`, sum);

// const numbers = [78, 85, 90, 66, 88];
// let avg = 0;
// let sum = 0;
// for(i = 0; i<numbers.length; i++){
//     console.log(numbers[i]);
//     sum = sum + numbers[i];
//     avg =  sum / numbers.length;

// }
// console.log("Average of Numbers", avg)

const numbers = [12, 7, 9, 24, 36, 5];
let countEven = 0;
for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
    if(numbers[i] % 2 === 0)
        countEven ++
}
console.log("Total Even Numbers are",countEven);