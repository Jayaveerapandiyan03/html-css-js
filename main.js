// // const array = [1, 2, 4, 5, 3, 4];
// // const shuffledArray = array.sort(() => Math.random() - 0.5);

// // console.log(shuffledArray);

// // let person = {
// //   fullName: "Arun",
// //   age: 35,
// //   job: "Developer",
// // };

// // let obj = Object.getPrototypeOf(person);
// // console.log(obj);

// var emp1 = { fName: "Arun", lName: "Kumar" };
// var emp2 = { fName: "Srinath", lName: "Kumar" };

// function greet(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.fName + " " + this.lName + " " + greeting2
//   );
// }

// greet.call(emp1, "Hello", "How are you buddy");
// greet.call(emp2, "Hello", "How are you buddy");

// console.log("hello");

// console.log("jelljadljas");

var one = true;
var two = true;

function getPerson(name) {
  return name;
}

console.log(one && getPerson("varan kumaruuuuu..."));

var name1 = "super subbu";
var joining = "thanda indha";
var name2 = "sangli murugan";

console.log(name1 + " " + joining + " " + name2);

console.log(`${name1} ${joining} ${name2}`);

var goingToMovie = true;

function HeyBuddy(goingMovie) {
  return goingMovie;
}

if (goingToMovie) {
  console.log(HeyBuddy("yes going to movie"));
} else {
  console.log(HeyBuddy("no da this week busy.."));
}

//ternary operator

// condition ? statement1 : statement2

goingToMovie ? console.log(HeyBuddy("YES")) : console.log("NO");

const empId = "Z0010";
const empName = "Jayaveerapandiyan";
const empSalary = 25000;

const company = {
  empId,
  empName,
  empSalary,
};

console.log(company);

const company2 = {
  desc: "Need to change job after febraury",
  empId,
  empName,
  empSalary,
};

const { desc } = company2;
console.log(desc);

let array = [10, 20, 30, 40, 50];

const [
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arraySixthElement,
] = array;

console.log(arrayFirstElement, arraySecondElement, arrayThirdElement);

function multiplicationOfTwo(a = 2, b = 2) {
  return a * b;
}
console.log(multiplicationOfTwo(4));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 2, 2, 2, 2];

console.log([...arr1, ...arr2]);

function restParameter(a, b, ...c) {
  return console.log(a, b, c);
}

console.log(restParameter(1, 2, 3, 4, 5, 3, 3, 4));

//map, filter, find, some, every, includes, indexof , findIndex

const personArray = [
  {
    pName: "person1",
    pAge: 30,
    pCity: "Vellore",
  },
  {
    pName: "person23",
    pAge: 30,
    pCity: "vellore",
  },
  {
    pName: "person2",
    pAge: 31,
    pCity: "Chennai",
  },
  {
    pName: "person3",
    pAge: 32,
    pCity: "Kanchipuram",
  },
  {
    pName: "person4",
    pAge: 33,
    pCity: "Kanyakumari",
  },
];

let getAllPersonsName = personArray.map((singlePerson, index) => {
  console.log(singlePerson, index);

  return `${singlePerson.pName} age is ${singlePerson.pAge} from ${singlePerson.pCity}`;
});

console.log(getAllPersonsName);

//find method
let getAllPersonFromVellore = personArray.find((singlePerson, index) => {
  return singlePerson.pCity === "Vellore";
});

console.log(getAllPersonFromVellore);

// filter method
const getAllPersonFromVellore2 = personArray.filter((singlePerson, index) => {
  return singlePerson.pCity.toLowerCase() === "vellore";
});

console.log(getAllPersonFromVellore2);

//Some method example
let checkSomeArrayMethodExample = personArray.some((singlePerson) => {
  return singlePerson.pAge > 20;
});
console.log(checkSomeArrayMethodExample);

//every method example
let checkEveryArrayMethodExample = personArray.every((singlePerson) => {
  return singlePerson.pAge > 20;
});

console.log(checkEveryArrayMethodExample);
