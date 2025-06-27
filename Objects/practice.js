//Data Structure 
const users = [
  {name: 'wajahat', age: 23, active: true },
  {name: 'iqram', age: 24, active: true},
  {name: 'imran', age: 25, active: true},
  {name: 'owais', age: 26, active: false},
  {name: 'umar', age: 27, active: false},
]
console.log(users)

const products = [
  {id:1, name:'MacBook', price: 150000, inStock: true},
  {id:2, name:'Dell', price: 100000, inStock: true},
  {id:3, name:'HP', price: 50000, inStock: false}
]
console.log(products)

const library = {
  name:"saibbyWeb",
    books:[
    {title:"JavaScript", author:"Wajahat", pageCount:200},
    {title:"Python", author:"Imran", pageCount:300},
    {title:"Java", author:"Iqram", pageCount:400},
  ]
}
console.log(library)

const students = [{
  name: "umar",
    score:[300,400,500]
},
{
  name: "waseem",
    score:[400,500,600],
}]
console.log(students)

const companies = [
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
console.log(companies)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])

// }

const person = [
  {
    name: "wajahat",
    age: 22,
  },
  {
    name: "iqram",
    age: 23,
  },
  {
    name: "imran",
    age: 24,
  },
  {
    name: "owais",
    age: 25,
  },
  {
    name: "umar",
    age: 26,
  },
];

for (let i = 0; i < person.length; i++) {
  console.log(person[i].age);
}
console.log(person[0]);
console.log(person[4]);

for (i = 0; i < person.length; i++) {
  if ((i = 0)) {
    console.log(person[i]);
  }
}

//pop method
const persons = ["wajat", "iqram", "imran", "owais", "umar"];
const newArr = persons.pop();
// console.log(persons);

//push method
const newArr1 = persons.push("shabaz");
// console.log(persons);

//shift method
const newArr2 = persons.shift();
console.log(persons);

const users = [
  {
    name: "wajahat",
    age: 22,
    email: "wahat@gmail.com",
  },
  {
    name: "iqram",
    age: 23,
    email: "iqram@gmail.com",
  },
  {
    name: "imran",
    age: 24,
    email: "imran@gmail.com",
  },
  {
    name: "shabaz",
    age: 25,
    email: "shanaz@gmail.com",
  },
  {
    name: "owais",
    age: 26,
    email: "owais@gmail.com",
  },
  {
    name: "umar",
    age: 23,
    email: "umar@gmail.com",
  },
  {
    name: "umar",
    age: 27,
    email: "umr@gmail.com",
  },
];
const wajahat = users.find((name) => (name = wajahat));
console.log(users);

//How TO Access Objects and Arrays
const classroom = {
  students: [
    { name: "Ali", age: 20 },
    { name: "Umar", age: 22 }
  ]
};
// Print Umar's age
console.log(classroom.students[1].age)

const orders = [
  { id: 1, items: ["pen", "notebook"] },
  { id: 2, items: ["eraser", "scale"] }
];
// Print the first item of the second order
console.log(orders[1].items[0])

const library = {
  section: {
    fiction: ["Book1", "Book2"],
    nonFiction: ["Book3", "Book4"]
  }
};
// Print Book3
console.log(library.section.nonFiction[0])

const user = {
  name: "Sara",
  posts: [
    { title: "First Post", likes: 15 },
    { title: "Second Post", likes: 30 }
  ]
};
// Print the title of the second post
console.log(user.posts[1].title)

const cart = [
  {
    product: "Mouse",
    details: {
      price: 500,
      quantity: 2
    }
  },
  {
    product: "Keyboard",
    details: {
      price: 800,
      quantity: 1
    }
  }
];
// Print the quantity of Keyboard
console.log(cart[1].details.quantity)

const profile = {
  name: "Zara",
  contact: {
    email: "zara@example.com",
    address: {
      city: "Delhi",
      pincode: 110001
    }
  }
};
// Print the pincode
console.log(profile.contact.address.pincode)

const playlist = [
  {
    name: "Favorites",
    songs: ["Song A", "Song B", "Song C"]
  },
  {
    name: "Workout",
    songs: ["Song X", "Song Y"]
  }
];
// Print "Song Y"
console.log(playlist[1].songs[1])

const device = {
  type: "Mobile",
  specs: {
    os: "Android",
    features: {
      bluetooth: true,
      wifi: true
    }
  }
};
// Print whether it supports bluetooth
console.log(device.specs.features.bluetooth)

const travel = [
  {
    country: "India",
    cities: ["Delhi", "Mumbai", "Srinagar"]
  },
  {
    country: "USA",
    cities: ["New York", "Los Angeles"]
  }
];
// Print the third city of India
console.log(travel[0].cities[2])

const game = {
  title: "Chess",
  players: [
    {
      name: "Player1",
      score: 120
    },
    {
      name: "Player2",
      score: 130
    }
  ]
};
// Print Player2's score
console.log(game.players[1].score)