//5 falsy values are 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean("umar"));
console.log(Boolean(2));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
};

const height = 0;
if (height) {
  console.log("Height is Defined");
} else {
  console.log("Height is undefined");
};
