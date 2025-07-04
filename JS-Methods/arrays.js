// 1. push() – Adds item to the end of an array
let fruits1 = ["apple", "banana"];
fruits1.push("mango");
console.log("push:", fruits1); // ["apple", "banana", "mango"]

// 2. pop() – Removes the last item of the array
let fruits2 = ["apple", "banana", "mango"];
let removed2 = fruits2.pop();
console.log("pop:", removed2); // "mango"
console.log("after pop:", fruits2); // ["apple", "banana"]

// 3. unshift() – Adds item at the beginning
let fruits3 = ["banana", "mango"];
fruits3.unshift("apple");
console.log("unshift:", fruits3); // ["apple", "banana", "mango"]

// 4. shift() – Removes first item
let fruits4 = ["apple", "banana", "mango"];
let firstItem4 = fruits4.shift();
console.log("shift:", firstItem4); // "apple"
console.log("after shift:", fruits4); // ["banana", "mango"]

// 5. map() – Creates new array by transforming each item
let numbers5 = [1, 2, 3];
let doubled5 = numbers5.map(num => num * 2);
console.log("map:", doubled5); // [2, 4, 6]

// 6. filter() – Filters elements based on condition
let numbers6 = [1, 2, 3, 4, 5];
let evens6 = numbers6.filter(num => num % 2 === 0);
console.log("filter:", evens6); // [2, 4]

// 7. forEach() – Executes function for each item (no return)
let names7 = ["Ali", "Umar", "Furkaan"];
console.log("forEach:");
names7.forEach(name => console.log("Hello", name));

// 8. find() – Returns first item that satisfies the condition
let numbers8 = [4, 9, 16, 25];
let firstOver10_8 = numbers8.find(n => n > 10);
console.log("find:", firstOver10_8); // 16

// 9. findIndex() – Returns index of first item that matches
let numbers9 = [4, 9, 16, 25];
let index9 = numbers9.findIndex(n => n > 10);
console.log("findIndex:", index9); // 2

// 10. includes() – Checks if array contains a value
let colors10 = ["red", "blue", "green"];
console.log("includes 'blue':", colors10.includes("blue")); // true
console.log("includes 'yellow':", colors10.includes("yellow")); // false

// 11. some() – Returns true if any item matches condition
let nums11 = [1, 3, 5, 7];
console.log("some > 5:", nums11.some(n => n > 5)); // true

// 12. every() – Returns true if all items match condition
let nums12 = [2, 4, 6];
console.log("every even:", nums12.every(n => n % 2 === 0)); // true

// 13. reduce() – Reduces array to a single value
let nums13 = [1, 2, 3, 4];
let sum13 = nums13.reduce((acc, curr) => acc + curr, 0);
console.log("reduce sum:", sum13); // 10

// 14. sort() – Sorts the array
let numbers14 = [4, 2, 10, 1];
numbers14.sort((a, b) => a - b); // ascending
console.log("sort:", numbers14); // [1, 2, 4, 10]

// 15. reverse() – Reverses the array
let arr15 = [1, 2, 3];
arr15.reverse();
console.log("reverse:", arr15); // [3, 2, 1]

// 16. concat() – Merges two or more arrays
let a16 = [1, 2];
let b16 = [3, 4];
let c16 = a16.concat(b16);
console.log("concat:", c16); // [1, 2, 3, 4]

// 17. join() – Joins array elements into a string
let words17 = ["Hello", "World"];
console.log("join:", words17.join(" ")); // "Hello World"

// 18. slice() – Extracts a part of array without changing original
let nums18 = [10, 20, 30, 40, 50];
let part18 = nums18.slice(1, 4);
console.log("slice:", part18); // [20, 30, 40]
console.log("original after slice:", nums18); // [10, 20, 30, 40, 50]

// 19. splice() – Adds/removes elements from array (changes original)
let fruits19 = ["apple", "banana", "mango"];
fruits19.splice(1, 1, "orange"); // remove 1 from index 1 and add "orange"
console.log("splice:", fruits19); // ["apple", "orange", "mango"]
