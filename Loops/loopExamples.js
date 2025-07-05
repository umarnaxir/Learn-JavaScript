// Filter even numbers
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let double = numbers1.filter((num) => num % 2 === 0);
console.log("Even numbers:", double);

// Sum of all numbers
const numbers2 = [25, 15, 30, 10];
let sum2 = 0;
for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i]);
  sum2 = sum2 + numbers2[i];
}
console.log("Sum of all Numbers:", sum2);

// Average of numbers
const numbers3 = [78, 85, 90, 66, 88];
let avg3 = 0;
let sum3 = 0;
for (let i = 0; i < numbers3.length; i++) {
  console.log(numbers3[i]);
  sum3 += numbers3[i];
  avg3 = sum3 / numbers3.length;
}
console.log("Average of Numbers:", avg3);

// Count even numbers
const numbers4 = [12, 7, 9, 24, 36, 5];
let countEven4 = 0;
for (let i = 0; i < numbers4.length; i++) {
  console.log(numbers4[i]);
  if (numbers4[i] % 2 === 0) countEven4++;
}
console.log("Total Even Numbers are:", countEven4);

// Print task list
const tasks = ["Wake up", "Exercise", "Work", "Sleep"];
for (let i = 0; i < tasks.length; i++) {
  console.log((i + 1) + ". " + tasks[i]);
}

// Sum with step-by-step logging
let sum5 = 0;
const numbers5 = [25, 15, 30, 10];
for (let i = 0; i < numbers5.length; i++) {
  sum5 += numbers5[i];
  console.log("Running Sum:", sum5);
}
console.log("Total Sum:", sum5);

// Print Max number
const numbers6 = [1200, 1850, 900, 1600, 2000, 1750, 2100];
let max6 = numbers6[0];
for (let i = 0; i < numbers6.length; i++) {
  if (numbers6[i] > max6) {
    max6 = numbers6[i];
  }
}
console.log("Maximum number:", max6);

// Print Min number
const numbers7 = [1200, 1850, 900, 1600, 2000, 1750, 2100];
let min7 = numbers7[0];
for (let i = 0; i < numbers7.length; i++) {
  if (numbers7[i] < min7) {
    min7 = numbers7[i];
  }
}
console.log("Minimum number:", min7);

// Print first and last number
const numbers8 = [1200, 1850, 900, 1600, 2000, 1750, 2100];
for (let i = 0; i < numbers8.length; i++) {
  if (i === 0) {
    console.log("First number:", numbers8[i]);
  }
  if (i === numbers8.length - 1) {
    console.log("Last number:", numbers8[i]);
  }
}
