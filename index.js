// let sum = 0;
// const numbers = [25, 15, 30, 10];
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
  
//   console.log(`Sum of all Numbers`, sum);
// }

// Print Max number
// const numbers = [1200, 1850, 900, 1600, 2000, 1750, 2100];
// let max = numbers[0];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > max){
//         max = numbers[i];
//     }
// }
// console.log("Maximum number:", max);

// Print Min number
// const numbers = [1200, 1850, 900, 1600, 2000, 1750, 2100];
// let min = numbers[0];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] < min){
//         min = numbers[i];
//     }
// }
// console.log("Minimum number:", min);

// Print first and last number
const numbers = [1200, 1850, 900, 1600, 2000, 1750, 2100];
for(let i = 0; i < numbers.length; i++){
    if(i === 0){
        console.log("First number:", numbers[i]);
    }
    if(i === numbers.length - 1){
        console.log("Last number:", numbers[i]);
    }
}