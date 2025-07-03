const a = {name:"umar", age:24}
const b = {email:"umar@123"}
const ab = Object.assign({},a,b)
console.log(ab);
for(let umar in ab){
    console.log(umar + " " + ab[umar])
}
console.log(Object.entries(ab))
console.log(a.hasOwnProperty("name"))
console.log(ab.hasOwnProperty("amir"))
