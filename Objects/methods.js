const person = {
    firstName: "Elon",
    lastName: "Musk",
    age: 35,
    address:{
        city: "Los Anglos",
        country: "USA",
        pinCode: 231213,
    } //Nested Object
}
person.firstName = "Mr Elon", //update data
person.company = "Tesla", //add new property
delete person.age, //delete property

console.log(person)
console.log(person.firstName)
console.log(person["lastName"])
console.log('firstName' in person) //how to check is property present in oject or not

//another way to create object
const user = new Object();
user.firstName = "Umar";
user.lastName = "Nazir";
user.age = 24;
console.log(user);