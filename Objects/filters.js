// Filter (10 Questions)
// 16. Filter out only users who are active.
const allUsers = [
  { name: 'wajahat', age: 23, active: true },
  { name: 'iqram', age: 24, active: true },
  { name: 'imran', age: 25, active: true },
  { name: 'owais', age: 26, active: false },
  { name: 'umar', age: 27, active: false }
];
const activeUsers = allUsers.filter(function(user) {
  return user.active === true;
});
console.log(activeUsers);

// 17. Filter products that are in stock and cost less than 1000.
const allProducts = [
  { name: "watch", price: 2000, inStock: true },
  { name: "keyboard", price: 1000, inStock: true },
  { name: "mouse", price: 500, inStock: true },
  { name: "charger", price: 900, inStock: false }
];
const lessCost = allProducts.filter(function(product) {
  return product.inStock === true && product.price < 1000;
});
console.log(lessCost);

// 18. Filter books that have more than 250 pages.
const bookList = {
  name: "saibbyWeb",
  books: [
    { title: "JavaScript", author: "Wajahat", pages: 200 },
    { title: "Python", author: "Imran", pages: 300 },
    { title: "Java", author: "Iqram", pages: 400 }
  ]
};
const pageCount = bookList.books.filter(function(book) {
  return book.pages > 250;
});
console.log(pageCount);

// 19. Filter students who scored more than 80 in all subjects.
const students = [
  { name: "Umar", scores: [85, 90, 95] },
  { name: "Waseem", scores: [70, 90, 88] },
  { name: "Furqan", scores: [81, 82, 83] },
  { name: "Zeeshan", scores: [60, 85, 100] }
];
const result = students.filter(function(student) {
  return student.scores[0] > 80 && student.scores[1] > 80 && student.scores[2] > 80;
});
console.log(result);

// 20. Filter companies that have at least one employee with the role "Manager".
const newCompanies = [
  {
    name: "Harmukh",
    employees: [
      { name: "Umar", role: "Frontend" },
      { name: "Owais", role: "Manager" }
    ]
  },
  {
    name: "SaibbyWeb",
    employees: [
      { name: "Wajahat", role: "SDE" },
      { name: "Imran", role: "SEO" }
    ]
  }
];
const role = newCompanies.filter(function(company) {
  return company.employees[0].role === "Manager" || company.employees[1].role === "Manager";
});
console.log(role);

// 31. Filter users who are under the age of 18.
const users31 = [
  { name: "A", age: 17 },
  { name: "B", age: 20 }
];
const under18 = users31.filter(function(user) {
  return user.age < 18;
});
console.log(under18);

// 32. Filter products whose name includes the word "Pro" (case-insensitive).
const products32 = [
  { name: "iPhone Pro" },
  { name: "iPhone Mini" },
  { name: "MacBook" }
];
const proOnly = products32.filter(function(product) {
  return product.name === "iPhone Pro";
});
console.log(proOnly);


// 33. Filter books whose title starts with the letter "S".
const books33 = [
  { title: "SQL" },
  { title: "JavaScript" },
  { title: "Coding" }
];
const sBooks = books33.filter(function(book) {
  return book.title.startsWith("S");
});
console.log(sBooks);

// 34. Filter students who have at least one score below 40.
const students34 = [
  { name: "A", scores: [45, 35, 60] },
  { name: "B", scores: [70, 80, 90] }
];
const lowScore = students34.filter(function(student) {
  return student.scores[0] < 40 || student.scores[1] < 40 || student.scores[2] < 40;
});
console.log(lowScore);

// 35. Filter companies that have no employees at all.
const companies35 = [
  { name: "EmptyCorp", employees: [] },
  { name: "FullCorp", employees: [{ name: "Ali" }] }
];
const noEmployees = companies35.filter(function(company) {
  return company.employees.length === 0;
});
console.log(noEmployees);
