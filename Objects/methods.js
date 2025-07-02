//Object
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

//Object Methods
const user1 = {
    name:"Owais",
    age:23,
    email:"owais@123",
    greet:()=> "Hello There!",
}
console.log(user1.greet());

//This Keyword
const user2 = {
    firstName:"khalid",
    age:24,
    email:"khalid@123",
    greet:function(){
        return  console.log("Hello" + " " + this.firstName)

    }
}
user2.greet();

const user3 = {
    firstName: "Amir",
    lastName: "Nazir",
    getFullName: function(){
        return this.firstName + " " + this.lastName
    }
}
console.log(user3.getFullName())

//Costructors
function Person(first, last){
    this.firstName = first,
    this.lastName = last
}
const person1 = new Person("Amir", "Nazir");
const person2 = new Person("Umar", "Nazir");
console.log(person1);
console.log(person2);
person1.age = 50;
console.log(person1);

//Prototype
function Person(){
    this.name = "Elon Musk"
}
Person.prototype.age = 30;
const person3 = new Person();
Person.prototype = {age:52}
const person4 = new Person()
console.log(person3.age);
console.log(person4.age);

//Deconstruction
const person5 = {
    firstName: "Khalid",
    lastName: "Jan",
    age: 24
}
let { firstName, lastName, age =18} = person5; //age = 18 is a default value
console.log(person5)

//Object Literal Syntax Extensions
let fName = "Faizan";
let lName = "Khan";
const person6 = {
    fName,
    lName,
}
console.log(person6)