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