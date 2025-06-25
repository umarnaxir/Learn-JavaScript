//Exapmle 1
function checkAge(age){
  if(age>=50){
    return "Senior";
  }else if(age>=18){
    return "Adult";
  }else if(age>=10){
    return "Minor";
  }else{
    return "Child";
  }
}
console.log(checkAge(55));

//Example 2
function getGrade(marks){
  switch(true){
    case marks>=90:
      return "A";
      break;
      case marks>=75:
      return" B";
      break;
      case marks>=50:
      return "C";
      default:
      return" F";
  }
}
console.log(getGrade(99));

//Example 3
function maxOfThree(a,b,c){
  return Math.max(a,b,c)
}
console.log(maxOfThree(10,20,30))

//Example 4
function a(day){
  const days = day.toLowerCase()
  switch(days){
    case "monday":
    return true;
    break;
    case "tuesday":
    return true;
    break;
    case "wednesday":
    return true;
    break;
    case "thursday":
    return true;
    break;
    case "friday":
    return true;
    break;
    case "saturday":
    return true;
    break;
    default:
    return false;
  }
}
console.log(a("Monday"))