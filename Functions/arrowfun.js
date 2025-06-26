//Function Expression
const calAge1 = function(birthYear){
    return 2025 - birthYear;
}
console.log(calAge1(1999));

//Arrow Function
const calAge2 = birthYear => 2025 - birthYear;
console.log(calAge2(2000));

//Exaple of arrow function
const yearsUntilRetirement = (birthYear, firstName)=>{
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} Years`;
}
console.log(yearsUntilRetirement(2001, "umar"));

//function calling in function
function cutFruitPieces(fruit){
    return fruit * 4;
}
function fruitProcessor(apples, oranges){
const applePieces = cutFruitPieces(apples);
const oranePieces = cutFruitPieces(oranges);
const juice = `Juice with ${applePieces} pieces of apple and ${oranePieces} pieces of orange.`;
return juice;
}
console.log(fruitProcessor(3,4));
