// const day = "monday";
// switch (day) {
//   case "monday":
//     console.log("Going Office");
//     console.log("Do work");
//     break;
//   case "tuesday":
//     console.log("work on projects");
//     break;
//   case 'wednesday':
//   case 'thursday':
//   case 'friday':
//     console.log("office work")
//     break;
// }

const day = "wed";
let age;
switch (day) {
  case "monday":
    age = 20;
    break;
  case "tuesday":
    age = 21;
    break;
  default:
    age = 50;
    console.log("Is this your age");
}
console.log(age);

const month = 12;
switch(month){
    case 12:
  case 1:
  case 2:
    console.log("winter");
    break;
    case 6:
  case 7:
  case 8 :
    console.log("summer");
    break;
    case 3:
  case 4:
  case 5:
    console.log("spring");
    break;
  case 9:
  case 10:
  case 11:
    console.log("autumn");
    break;
  default:
    console.log("invalid Month")
  
}

const grade = "C";
switch(grade){
  case "A":
    console.log("Excellent");
    break;
      case "B":
    console.log("Good");
    break;
      case "C":
    console.log("Pass");
    break;
      case "D":
    console.log("Poor");
    break;
      case "F":
    console.log("Fail");
    break;
  default:
    console.log("I don't know");
}
    
// const currency = "INR";
// let show;
// switch(currency){
//   case "USD":
//   show = "You selected US Dollar";
//     break;
//   case "INR":
//     show = "You selected Indian Rupee";
//     break;
//     case "EUR":
//     show = "You selected Euro";
//     break;
//   default:
//    show = "Unsupported currency";
// }
// console.log(show);


const fruits = 'apple';
let show;
switch(fruits){
  case 'apple':
  show = "the cost of apple is 40rs";
  break;
  case 'banana':
  show = "the cost of banana is 100rs";
  break;
  case 'orange':
  show = "the cost of orange is 200rs";
  break;
  case 'mango':
  show = "the cost of mango is 400rs";
  break;
  default:
  show = "Free Fruits"
}
console.log(show);

const marks = 77;
let result;
switch(true){
  case marks >= 90:
  result = "OutStanding";
  break;
  case marks >= 80:
  result = "Very Good";
  break;
  case  marks >= 70:
  result = "Good";
  break;
  case marks >= 50:
  result = "Poor";
  break;
  default:
  result = "unknown";
}
console.log(result)