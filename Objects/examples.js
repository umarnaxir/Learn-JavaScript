
//Question 1
const users1 = [
  {name: 'wajahat', age: 23, active: true },
  {name: 'iqram', age: 24, active: true},
  {name: 'imran', age: 25, active: true},
  {name: 'owais', age: 26, active: false},
  {name: 'umar', age: 27, active: false},
]
console.log(users1)

//Question 2
const products1 = [
  {id:1, name:'MacBook', price: 150000, inStock: true},
  {id:2, name:'Dell', price: 100000, inStock: true},
  {id:3, name:'HP', price: 50000, inStock: false}
]
console.log(products1)

//Question 3
const library1 = {
  name:"saibbyWeb",
    books:[
    {title:"JavaScript", author:"Wajahat", pageCount:200},
    {title:"Python", author:"Imran", pageCount:300},
    {title:"Java", author:"Iqram", pageCount:400},
  ]
}
console.log(library1)

//Question 4
const students1 = [{
  name: "umar",
    score:[300,400,500]
},
{
  name: "waseem",
    score:[400,500,600],
}]
console.log(students1)

//Question 5
const companies1 = [
  {
    name: "harmukh",
    employees: [
      { name: "umar", role: "Frontend Engineer" },
      { name: "owais", role: "Backend Developer" },
      { name: "khalid", role: "UI Designer" }
    ]
  },
  {
    name: "saibbyWeb",
    employees: [
      { name: "wajahat", role: "Team Lead" },
      { name: "imran", role: "SEO Specialist" },
      { name: "iqram", role: "Data Analyst" }
    ]
  }
];
console.log(companies1)

// Question 6
const users = [
  { name: 'wajahat', age: 23, active: true },
  { name: 'iqram', age: 24, active: true },
  { name: 'imran', age: 25, active: true },
  { name: 'owais', age: 26, active: false },
  { name: 'umar', age: 27, active: false }
];

const findUser = users.find(user => !user.active);
console.log(findUser);


//Question 7
const products = [
  {id:1, name:'MacBook', price: 150000, inStock: true},
  {id:2, name:'Dell', price: 100000, inStock: true},
  {id:3, name:'HP', price: 50000, inStock: false}
]
const findProduct = products.find((product)=>product.id ===3)
console.log(findProduct)

//Question 8
const library = {
  name: "saibbyWeb",
  books: [
    { title: "JavaScript", author: "Wajahat", pageCount: 200 },
    { title: "Python", author: "Imran", pageCount: 300 },
    { title: "Java", author: "Iqram", pageCount: 400 },
  ]
};

const findBook = library.books.find((book) => book.pageCount === 300);
console.log(findBook);

//Question 9
const students = [{
  name: "umar",
    score:[300,400,500]
},
{
  name: "waseem",
    score:[400,500,600],
}]
const findStudent = students.find((student)=>student.name==="waseem")
console.log(findStudent)

//Question 10
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
const findComp = companies.find((company)=>company.employees.length >5)
console.log(findComp)