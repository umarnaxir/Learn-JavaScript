//Map (10 Questions)
// 11. Create an array of all user names.
const users = [
  { name: 'Wajahat', age: 23 },
  { name: 'Imran', age: 25 },
  { name: 'Umar', age: 27 }
];
const userNames = users.map(user => user.name);
console.log(userNames);

// 12. Create a new array of product names in uppercase.
const products = [
  { name: "MacBook", price: 100000 },
  { name: "HP", price: 50000 },
  { name: "iPhone", price: 120000 }
];
const upperCase = products.map(product => product.name.toUpperCase());
console.log(upperCase);

// 13. Create an array containing only the titles of the books.
const library = {
  name:"saibbyWeb",
  books:[
    {title:"JavaScript", author:"Wajahat", pageCount:200},
    {title:"Python", author:"Imran", pageCount:300},
    {title:"Java", author:"Iqram", pageCount:400},
  ]
}
const titleBooks = library.books.map((book)=>book.title)
console.log(titleBooks);

// 14. Create an array of students' average scores.
const students = [
  { name: "umar", score: [300, 400, 500] },
  { name: "waseem", score: [400, 500, 600] }
];
const avgScore = students.map(student => {
  const a = student.score;
  return (a[0] + a[1] + a[2]) / a.length;
});
console.log(avgScore);

// 15. Create an array of all company names.
const companies = [
  {
    name: "harmukh",
    employees: [
      { name: "umar", role: "Frontend" },
      { name: "owais", role: "Backend" },
      { name: "khalid", role: "UI Designer" }
    ]
  },
  {
    name: "saibbyWeb",
    employees: [
      { name: "Suhaib", role: "CEO" },
      { name: "wajahat", role: "SDE" },
      { name: "imran", role: "SDE" },
      { name: "iqram", role: "SDE" },
      { name: "umar", role: "Intern" },
      { name: "owais", role: "Intern" }
    ]
  }
];
const allCompanies = companies.map(company => company.name);
console.log(allCompanies);

// 26. Create an array of user ages increased by 1 year.
const users26 = [
  { name: 'Wajahat', age: 23 },
  { name: 'Imran', age: 25 },
  { name: 'Umar', age: 27 }
];
const ageIncreased = users26.map(user => user.age + 1);
console.log(ageIncreased);

// 27. Create an array of product prices with 18% GST added.
const products27 = [
  { name: "MacBook", price: 150000 },
  { name: "Dell", price: 100000 },
  { name: "HP", price: 50000 }
];
const gstPrices = products27.map(product => product.price * 1.18);
console.log(gstPrices);

// 28. Create an array of strings like "Title by Author" for each book.
const library28 = {
  name:"saibbyWeb",
  books:[
    {title:"JavaScript", author:"Wajahat", pageCount:200},
    {title:"Python", author:"Imran", pageCount:300},
    {title:"Java", author:"Iqram", pageCount:400},
  ]
}
const titleAuthor = library28.books.map((book) => book.title + " by " + book.author);
console.log(titleAuthor);

// 29. Create an array of booleans representing if each student passed (average score ≥ 50).
const students29 = [
  { name: "umar", score: [40, 60, 90] },
  { name: "waseem", score: [30, 35, 20] }
];
const passed = students29.map((student) => {
  const a = student.score;
  const avg = (a[0] + a[1] + a[2]) / a.length;
  return avg >= 50;
});
console.log(passed);


// 30. Create an array where each company object is transformed into a string: "CompanyName (X employees)".
const companies30 = [
  {
    name: "harmukh",
    employees: [
      { name: "umar", role: "Frontend" },
      { name: "owais", role: "Backend" }
    ]
  },
  {
    name: "saibbyWeb",
    employees: [
      { name: "wajahat", role: "SDE" },
      { name: "imran", role: "SDE" },
      { name: "iqram", role: "SDE" }
    ]
  }
];
const compWithEmpCount = companies30.map(function(company) {
  return company.name + " (" + company.employees.length + " employees)";
});
console.log(compWithEmpCount);
