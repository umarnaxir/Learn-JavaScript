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