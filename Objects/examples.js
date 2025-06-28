// Question 1
const users1 = [
  { name: 'wajahat', age: 23, active: true },
  { name: 'iqram', age: 24, active: true },
  { name: 'imran', age: 25, active: true },
  { name: 'owais', age: 26, active: false },
  { name: 'umar', age: 27, active: false },
];
console.log(users1);

// Question 2
const products1 = [
  { id: 1, name: 'MacBook', price: 150000, inStock: true },
  { id: 2, name: 'Dell', price: 100000, inStock: true },
  { id: 3, name: 'HP', price: 50000, inStock: false },
];
console.log(products1);

// Question 3
const library1 = {
  name: "saibbyWeb",
  books: [
    { title: "JavaScript", author: "wajahat", pageCount: 200 },
    { title: "Python", author: "imran", pageCount: 300 },
    { title: "Java", author: "iqram", pageCount: 400 },
  ],
};
console.log(library1);

// Question 4
const students1 = [
  { name: "umar", score: [300, 400, 500] },
  { name: "waseem", score: [400, 500, 600] },
];
console.log(students1);

// Question 5
const companies1 = [
  {
    name: "harmukh",
    employees: [
      { name: "umar", role: "Frontend Engineer" },
      { name: "owais", role: "Backend Developer" },
      { name: "khalid", role: "UI Designer" },
    ],
  },
  {
    name: "saibbyWeb",
    employees: [
      { name: "wajahat", role: "Team Lead" },
      { name: "imran", role: "SEO Specialist" },
      { name: "iqram", role: "Data Analyst" },
    ],
  },
];
console.log(companies1);

// Question 6
const users2 = [
  { name: 'wajahat', age: 23, active: true },
  { name: 'iqram', age: 24, active: true },
  { name: 'imran', age: 25, active: true },
  { name: 'owais', age: 26, active: false },
  { name: 'umar', age: 27, active: false },
];
const findUser = users2.find(user => !user.active);
console.log(findUser);

// Question 7
const products2 = [
  { id: 1, name: 'MacBook', price: 150000, inStock: true },
  { id: 2, name: 'Dell', price: 100000, inStock: true },
  { id: 3, name: 'HP', price: 50000, inStock: false },
];
const findProduct = products2.find(product => product.id === 3);
console.log(findProduct);

// Question 8
const library2 = {
  name: "saibbyWeb",
  books: [
    { title: "JavaScript", author: "wajahat", pageCount: 200 },
    { title: "Python", author: "imran", pageCount: 300 },
    { title: "Java", author: "iqram", pageCount: 400 },
  ],
};
const findBook = library2.books.find(book => book.pageCount === 300);
console.log(findBook);

// Question 9
const students2 = [
  { name: "umar", score: [300, 400, 500] },
  { name: "waseem", score: [400, 500, 600] },
];
const findStudent = students2.find(student => student.name === "waseem");
console.log(findStudent);

// Question 10
const companies2 = [
  {
    name: "harmukh",
    employees: [
      { name: "umar", role: "Frontend" },
      { name: "owais", role: "Backend" },
      { name: "khalid", role: "UI Designer" },
    ],
  },
  {
    name: "saibbyWeb",
    employees: [
      { name: "suhaib", role: "CEO" },
      { name: "wajahat", role: "SDE" },
      { name: "imran", role: "SDE" },
      { name: "iqram", role: "SDE" },
      { name: "umar", role: "Intern" },
      { name: "owais", role: "Intern" },
    ],
  },
];
const findComp = companies2.find(company => company.employees.length > 5);
console.log(findComp);

// Question 11
const users3 = [
  { name: 'wajahat', age: 23 },
  { name: 'imran', age: 25 },
  { name: 'umar', age: 27 },
];
const userNames = users3.map(user => user.name);
console.log(userNames);

// Question 12
const products3 = [
  { name: "MacBook", price: 100000 },
  { name: "HP", price: 50000 },
  { name: "iPhone", price: 120000 },
];
const upperCase = products3.map(product => product.name.toUpperCase());
console.log(upperCase);

// Question 13
const library3 = {
  name: "saibbyWeb",
  books: [
    { title: "JavaScript", author: "wajahat", pageCount: 200 },
    { title: "Python", author: "imran", pageCount: 300 },
    { title: "Java", author: "iqram", pageCount: 400 },
  ],
};
const titleBooks = library3.books.map(book => book.title);
console.log(titleBooks);

// Question 14
const students3 = [
  { name: "umar", score: [300, 400, 500] },
  { name: "waseem", score: [400, 500, 600] },
];
const avgScore = students3.map(student => {
  const s = student.score;
  return (s[0] + s[1] + s[2]) / s.length;
});
console.log(avgScore);

// Question 15
const companies3 = [
  {
    name: "harmukh",
    employees: [
      { name: "umar", role: "Frontend" },
      { name: "owais", role: "Backend" },
      { name: "khalid", role: "UI Designer" },
    ],
  },
  {
    name: "saibbyWeb",
    employees: [
      { name: "suhaib", role: "CEO" },
      { name: "wajahat", role: "SDE" },
      { name: "imran", role: "SDE" },
      { name: "iqram", role: "SDE" },
      { name: "umar", role: "Intern" },
      { name: "owais", role: "Intern" },
    ],
  },
];
const allCompanies = companies3.map(company => company.name);
console.log(allCompanies);

// Question 16
const allUsers = [
  { name: 'wajahat', age: 23, active: true },
  { name: 'iqram', age: 24, active: true },
  { name: 'imran', age: 25, active: true },
  { name: 'owais', age: 26, active: false },
  { name: 'umar', age: 27, active: false },
];
const activeUsers = allUsers.filter(user => user.active === true);
console.log(activeUsers);

// Question 17
const allProducts = [
  { name: "watch", price: 2000, inStock: true },
  { name: "keyboard", price: 1000, inStock: true },
  { name: "mouse", price: 500, inStock: true },
  { name: "charger", price: 900, inStock: false },
];
const lessCost = allProducts.filter(product => product.inStock && product.price < 1000);
console.log(lessCost);

// Question 18
const bookList = {
  name: "saibbyWeb",
  books: [
    { title: "JavaScript", author: "wajahat", pages: 200 },
    { title: "Python", author: "imran", pages: 300 },
    { title: "Java", author: "iqram", pages: 400 },
  ],
};
const pageCount = bookList.books.filter(book => book.pages > 250);
console.log(pageCount);

// Question 19
const studentList = [
  { name: "umar", scores: [85, 90, 95] },
  { name: "waseem", scores: [70, 90, 88] },
  { name: "furqan", scores: [81, 82, 83] },
  { name: "zeeshan", scores: [60, 85, 100] },
];
const result = studentList.filter(student => student.scores[0] > 80 && student.scores[1] > 80 && student.scores[2] > 80);
console.log(result);

// Question 20
const newCompanies = [
  {
    name: "harmukh",
    employees: [
      { name: "umar", role: "Frontend" },
      { name: "owais", role: "Manager" },
    ],
  },
  {
    name: "saibbyWeb",
    employees: [
      { name: "wajahat", role: "SDE" },
      { name: "imran", role: "SEO" },
    ],
  },
];
const role = newCompanies.filter(company =>
  company.employees[0].role === "Manager" || company.employees[1].role === "Manager"
);
console.log(role);