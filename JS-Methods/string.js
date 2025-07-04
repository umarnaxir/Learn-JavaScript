// 1. length – Returns the number of characters in the string
const str1 = "Hello";
console.log("length:", str1.length); // 5

// 2. toUpperCase() – Converts all letters to uppercase
const str2 = "hello world";
console.log("toUpperCase:", str2.toUpperCase()); // "HELLO WORLD"

// 3. toLowerCase() – Converts all letters to lowercase
const str3 = "HELLO WORLD";
console.log("toLowerCase:", str3.toLowerCase()); // "hello world"

// 4. charAt() – Returns the character at a specific index
const str4 = "JavaScript";
console.log("charAt(4):", str4.charAt(4)); // "S"

// 5. indexOf() – Returns index of first occurrence of substring
const str5 = "I love coding";
console.log("indexOf('love'):", str5.indexOf("love")); // 2
console.log("indexOf('abc'):", str5.indexOf("abc"));   // -1 (not found)

// 6. lastIndexOf() – Returns last index of a specified value
const str6 = "I am who I am";
console.log("lastIndexOf('am'):", str6.lastIndexOf("am")); // 10

// 7. includes() – Checks if substring exists in string
const str7 = "Welcome to Kashmir";
console.log("includes 'Kashmir':", str7.includes("Kashmir")); // true
console.log("includes 'Ladakh':", str7.includes("Ladakh"));   // false

// 8. startsWith() – Checks if string starts with specific value
const str8 = "React is awesome";
console.log("startsWith 'React':", str8.startsWith("React")); // true

// 9. endsWith() – Checks if string ends with specific value
console.log("endsWith 'awesome':", str8.endsWith("awesome")); // true

// 10. slice(start, end) – Extracts part of string
const str10 = "Hello World";
console.log("slice(0, 5):", str10.slice(0, 5)); // "Hello"
console.log("slice(6):", str10.slice(6)); // "World"

// 11. substring(start, end) – Similar to slice but doesn't accept negative values
console.log("substring(0, 5):", str10.substring(0, 5)); // "Hello"

// 12. substr(start, length) – Extracts substring (deprecated but still works)
console.log("substr(0, 5):", str10.substr(0, 5)); // "Hello"

// 13. replace() – Replaces first matched value
const str13 = "I love JavaScript";
console.log("replace 'JavaScript' with 'React':", str13.replace("JavaScript", "React"));
// "I love React"

// 14. replaceAll() – Replaces all matched values
const str14 = "Hi Hi Hi";
console.log("replaceAll 'Hi' with 'Bye':", str14.replaceAll("Hi", "Bye")); // "Bye Bye Bye"

// 15. split() – Splits string into array
const str15 = "Ali,Umar,Furkaan";
console.log("split by comma:", str15.split(",")); // ["Ali", "Umar", "Furkaan"]

// 16. trim() – Removes whitespace from both ends
const str16 = "   hello   ";
console.log("trim:", str16.trim()); // "hello"

// 17. trimStart() – Removes whitespace from the beginning
console.log("trimStart:", str16.trimStart()); // "hello   "

// 18. trimEnd() – Removes whitespace from the end
console.log("trimEnd:", str16.trimEnd()); // "   hello"

// 19. repeat() – Repeats string multiple times
const str19 = "Hi ";
console.log("repeat 3 times:", str19.repeat(3)); // "Hi Hi Hi "

// 20. padStart() – Pads start with specified string until given length
const str20 = "7";
console.log("padStart to 3 digits:", str20.padStart(3, "0")); // "007"

// 21. padEnd() – Pads end with specified string until given length
console.log("padEnd to 3 digits:", str20.padEnd(3, "0")); // "700"

// 22. localeCompare() – Compares two strings
console.log("localeCompare 'apple' vs 'banana':", "apple".localeCompare("banana")); // -1 (means before)

// 23. match() – Returns result of matching string with regex
const sentence23 = "The rain in Spain";
console.log("match 'ain':", sentence23.match(/ain/g)); // ["ain", "ain"]

// 24. search() – Searches string for match using regex and returns index
console.log("search 'rain':", sentence23.search(/rain/)); // 4

// 25. toString() – Converts any value to string (already string, but for compatibility)
const num25 = 123;
console.log("toString:", num25.toString()); // "123"
