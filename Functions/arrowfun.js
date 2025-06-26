//Function Expression
const calAge1 = function(birthYear){
    return 2025 - birthYear;
}
console.log(calAge1(1999));

//Arrow Function
const calAge2 = birthYear => 2025 - birthYear;
console.log(calAge2(2000));

const yearsUntilRetirement = (birthYear, firstName)=>{
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} Years`;
}
console.log(yearsUntilRetirement(2001, "umar"));