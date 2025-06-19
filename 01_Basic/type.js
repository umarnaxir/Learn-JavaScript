//type conversion
// const birthYear = '1991'; //sring '1991' + 10 = 199110
const birthYear = 1991; //number 
console.log(birthYear + 10);
console.log(String(23), 23);

//type coercian
console.log("i'am " + 23 + " years old");
console.log('23' - '10' - 3); //10
console.log('23' + '10' + 3); //23103
console.log('23' * '10'); //230
console.log('23' / '10'); //2.3

let n = '1' + 1; //11
n = n - 1;
console.log(n); //10