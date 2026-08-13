// part A

// 1
function createVar() {
  global = "ahmed mahmoud"; // it is now considered a global variable
}
createVar();
console.log(global); // global variables can be accessed anywhere

// 2
function createVar2() {
  "use strict";
  try {
    notGlobal = "ahmed mahmoud";
    console.log(notGlobal);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
createVar2();

// 3
function testStrict() {
  "use strict";
  var localVar = "test";
  try {
    eval("delete localVar;");
  } catch (error) {
    console.log(error.message);
  }
  var ob = { name: "property" };
  delete ob.name;
  console.log(ob);
}
testStrict();

// part B

// 4
console.log(x); // undefined, x is declared but not yet initialized
var x = 10; // declaration hoisted to top of scope, assignment stays here
console.log(x); // 10, now x is initialized

// 5
// Case 1:
sayHi(); // Hi, declared functions are hoisted
function sayHi() {
  console.log("Hi");
}

// Case 2:
// sayBye(); // error, the function is declared as variable which is not hoisted
// var sayBye = function () {
// console.log("Bye");
// };

// 6
// console.log(a); // error, can't print it before declaring using let
// let a = 5;

// 7
var n = 1;
function demo() {
  console.log(n); // undefined, in the function scope n isn't assigned yet
  var n = 2;
  console.log(n); // 2
}
demo();
console.log(n); // 1, n of the global scope

// part C

// 8
function proof() {
  var msg = "Hello, World!";
  if (true) {
    console.log("Hello, Universe and " + msg);
  }
  console.log(msg);
}
proof();

// 9
function letConstScope() {
  let myLet = "Hamza";
  const myConst = "Amr";
  console.log(myLet + "\n" + myConst);
}
letConstScope();
// console.log(myLet,"\n",myConst); // error

// 10
var name = "Ali";
console.log(name);
var name = "Ali Mohammed";
console.log(name);

let fname = "Ahmed";
console.log(fname);
// let fname = "Ahmed Mahmoud" // can't redeclare

// 11
const student = {
  name: "hamas",
  age: 25,
  city: "Mansoura",
};

student.age = 27;
console.log(student);
student.grade = 95;
console.log(student);
delete student.city;
console.log(student);

try {
  student = {
    name: "ahmed",
    age: 21,
    city: "Cairo",
  };
} catch (error) {
  console.log(error.message);
}

// 12
const nums = [1, 2, 3];
nums.push(4); // allowed
nums[0] = 20; // allowed
console.log(nums);
// const nums = [1,2,3,4]; // not allowed

// 13
var a; // declared and undefined
let b; // same as var
// const c; // error, must be initialised

// 14
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
window.g1; // "var global"
window.g2; // undefined
window.g3; // undefined

// 15
const handlers = {};
for (let i = 0; i < 3; i++) {
  // var is function scoped so the last value "3" is the value that is used in all functions
  handlers["fn" + i] = function () {
    // let is block scoped so it changes with each iteration of the loop
    return "index: " + i;
  };
}
console.log(handlers.fn0());
console.log(handlers.fn2());

// part D

// 16
const welcome = (name) => `Welcome ${name}`;
console.log(welcome("Arthur"));

// 17
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Ahmed", "Grawsh", 21));

// 18
const multiply = (a, b) => a * b;
const sum = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
};
console.log(multiply(5, 5));
sum(5, 5);

//part E

// 19
const product = {
  title: "Laptop",
  price: 15000,
  inStock: true,
  brand: "Dell",
};
const { title, price, inStock } = product;
console.log(title, price, inStock);

// 20
const [first, second] = ["HTML", "CSS", "JS", "React"];
console.log(first, second);

// 21
function greet(name = "Guest", message = "Hello") {
  return `${message}, ${name}`;
}
console.log(greet("Ahmed", "Hi"));
console.log(greet("Ahmed"));
console.log(greet());

// 22
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

// 23
const merged = [...[1, 2], ...[3, 4, 5]];
console.log(merged);

const arr = [10, 20, 30];
const copy = [...arr];
copy.push(40);
console.log(arr);
console.log(copy);

// 24
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const combined = { ...user, ...contact }; // age = 23 because the second age value overrides the first
console.log(combined);

// 25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
  return a + b + c + d;
}
console.log(total(...values));

//part F

// 26
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1; // Copies person1's memory refrence into person2, so any change applies to both of them
person2.name = "Omar";
console.log(person1.name); // Omar

// 27
const original = {
  name: "Mona",
  details: { city: "Cairo" },
};
const shallowCopy = { ...original };
shallowCopy.name = "Ahmed";
shallowCopy.details.city = "Mansoura";
console.log(original); // the city is mansoura because it's nested
console.log(shallowCopy);

// 28
const deepCopy = structuredClone(original);
deepCopy.details.city = "Giza";
console.log(original.details.city);
console.log(deepCopy.details.city);

// 29
const userdata = { name: "Ahmed", age: 26, city: "Alex" };
localStorage.setItem("userdata", JSON.stringify(userdata));
const stored = localStorage.getItem("userdata");
const parsed = JSON.parse(stored);

console.log(typeof parsed);
console.log(parsed.name, parsed.age, parsed.city);

localStorage.removeItem("userdata");
console.log(localStorage.getItem("userdata")); // null

//part G

// 30
const APP_CONFIG = {
  name: "MyApp",
  version: "1.0",
  api: { baseUrl: "https://myapi.com", timeout: 2000 },
  features: [],
};
APP_CONFIG.api.timeout = 5000;
APP_CONFIG.features.push("night-mode");
console.log(APP_CONFIG);

try {
  APP_CONFIG = { name: "App" };
} catch (error) {
  console.log("Error:", error.message);
}

// 31
function createCard(title, price = 0, ...tags) {
  return {
    title,
    price,
    tags,
    label: `${title} - ${price} EGP`,
  };
}
const card1 = createCard("Laptop", 30000);
const card2 = createCard("mobile", 10000);
console.log(card1);
console.log(card2);

// 32
const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 },
];
students.map((student) => {
  console.log(`${student.name} scored ${student.grade}`);
});
