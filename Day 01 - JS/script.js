// Task: 1
console.log("JS is running successfully");

// Task: 2
// window.alert("Ready to practice!");

// Task: 3
var productName = "Laptop";
console.log(productName + ", type: " + typeof productName);
var price = 15000;
console.log(price + ", type: " + typeof price);
var isAvailable = true;
console.log(isAvailable + ", type: " + typeof isAvailable);

// Task: 4
document.getElementById("mainTitle").innerText = "Practice Time";

// Task: 5
var city = "Cairo";
var country = "Egypt";
console.log(city + ", " + country);

// Task: 6
console.log(`Location: ${city} - ${country}`);

// Task: 7
var itemPrice = 120;
var quantity = 3;
var total = itemPrice + itemPrice + itemPrice;
var change = 400 - total;
var mul = itemPrice * quantity;
var div = itemPrice / quantity;
var mod = itemPrice % quantity;
var power = quantity ** 2;
console.log("total: " + total);
console.log("change: " + change);
console.log("multiplication: " + mul);
console.log(`division: ${div}`);
console.log(`modulus: ${mod}`);
console.log(`power: ${power}`);

// Task: 8
// var favColor = window.prompt("Enter your favorite color:");
// window.alert(`Your favorite color is ${favColor}`);

// Task: 9
var score = 20;
var textScore = "20";
console.log(score == textScore); // Compares value only so the output is true.
console.log(score === textScore); // Compares value and type so the output is false.

// Task: 10
// var q = window.prompt("Enter quantity:");
// console.log(typeof q);
// console.log(typeof Number(q));
// console.log(typeof parseInt(q));
// console.log(typeof +q);

// Task: 11
var fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
fruits[1] = "orange";
console.log(fruits[1]);
fruits.push("grape");
console.log(fruits);

// Task: 12
var course = {
  title: "HTML",
  hours: 10,
  level: "Beginner",
};

course.title = "CSS";
console.log(`Course hours: ${course.hours}`);
console.log(course);

// Task: 13
var hasAccount = true;
var isVerified = false;
console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);

// Task: 14
var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(`Balance: ${balance}`);

// Task: 15
// var hotel = window.prompt("Enter hotel:");
// var nights = window.prompt("Enter nights:");
// var confirmed = window.confirm("Is the registration confirmed?");

// var booking = `Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${confirmed}`;

// alert(booking);
// console.log(booking);

// Task: 16
console.log(2 + 8 + "0"); // 100
console.log("2" + 8 + 0); // 280
console.log(2 + "8" + 0); // 280

// Task: 17
var city1 = "Alex"; // value is "Alex"
var city2 = city1; // assigns city1's value which is "Alex" to city2
city2 = "Giza"; // then change city2 from "Alex" to "Giza"
console.log(city1, city2);

var car1 = { brand: "Toyota" };
var car2 = Object.assign({}, car1);
car2.brand = "Honda";
console.log(car1, car2);

// Task: 18
var mixedBag = [
  "Hello",
  42,
  true,
  null,
  undefined,
  { key: "value" },
  [1, 2, 3],
];

console.log(typeof mixedBag[0]);
console.log(typeof mixedBag[1]);
console.log(typeof mixedBag[2]);
console.log(typeof mixedBag[3]); // because of a historic bug in the original implementation of the languag
console.log(typeof mixedBag[4]);
console.log(typeof mixedBag[5]);
console.log(typeof mixedBag[6]);

// Task: 19
// var name = window.prompt("Enter name:");
// var orderPrice = window.prompt("Enter price:");
// var confirmPayment = window.confirm("Is the payment complete?");

// var message = `Customer: ${name}, Price: ${Number(orderPrice)}, Paid: ${confirmPayment}`;

// console.log(message);
// alert(message);
// document.getElementById("result").textContent = message;

// Task: 20
// var num1 = Number(window.prompt("Enter first number:"));
// var num2 = Number(window.prompt("Enter second number:"));

// console.log(`${num1} + ${num2} = ${num1 + num2}`);
// console.log(`${num1} - ${num2} = ${num1 - num2}`);
// console.log(`${num1} * ${num2} = ${num1 * num2}`);
// console.log(`${num1} / ${num2} = ${num1 / num2}`);
// console.log(`${num1} % ${num2} = ${num1 % num2}`);
// console.log(`${num1} ** ${num2} = ${num1 ** num2}`);

// Task: 21
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(
  a + b + Number(c) + d + e,
); /* when the string is encountered for the first time
the numbers are converted to strings and it starts concatinating them
instead of adding them and the fix is converting the string "60" to Number */

// Task: 22
function makeInvoiceLine(item, qty, paid) {
  var message2 = `Invoice => Item: ${item} | Qty: ${qty} | Paid: ${paid}`;
  document.getElementById("task-22-result").innerText = message2;
}

// var item = window.prompt("Enter item:");
// var qty = window.prompt("Enter price:");
// var paid = window.prompt("Is the payment completed(yes/no):");

// makeInvoiceLine(item, qty, paid);

// Task: 23
function saveUsername() {
  var input = document.getElementById("username");
  var result2 = document.getElementById("result-2");
  var name = input.value;

  if (name === "") {
    result2.innerText = "Username is required";
    console.log("Username is required");
  } else {
    var msg = "Saved successfully: " + name;
    result2.innerText = msg;
    var logObj = { username: name, status: "saved" };
    console.log(msg);
    console.log(logObj);
  }
}

// Task: 24
var a = "15";
var b = 15;
var c = null;
var d2;
var e = [15];
var f = { value: 15 };

console.log(
  `value: ${a}, type: ${typeof a}, "15" == 15: ${a == 15}, "15" === 15: ${a === 15}`,
);
console.log(
  `value: ${b}, type: ${typeof b}, 15 == 15: ${b == 15}, 15 === 15: ${b === 15}`,
);
console.log(
  `value: ${c}, type: ${typeof c}, null == 15: ${c == 15}, null === 15: ${c === 15}`,
);
console.log(
  `value: ${d2}, type: ${typeof d2}, undefined == 15: ${d2 == 15}, undefined === 15: ${d2 === 15}`,
);
console.log(
  `value: ${e}, type: ${typeof e}, [15] == 15: ${e == 15}, [15] === 15: ${e === 15}`,
);
console.log(
  `value: ${f}, type: ${typeof f}, { value: 15 } == 15: ${f == 15}, { value: 15 } === 15: ${f === 15}`,
);

// Task: 25
// var productName = prompt("Enter product name:");
// var brand = prompt("Enter brand:");
// var rawPrice = prompt("Enter price:");
// var category = prompt("Enter category:");
// var inStock = confirm("Is this product in stock?");

// var price = Number(rawPrice);

// var productInfo = {
//   productName: productName,
//   brand: brand,
//   price: price,
//   category: category,
//   inStock: inStock,
// };

// // Bonus Part
// var firstChar = productName[0];

// var message = `Product: ${productName} | Brand: ${brand} | Price: ${price} | Category: ${category} | In Stock: ${inStock} | First Letter: "${firstChar}"`;

// console.log(productInfo);
// console.log(message);
// alert(message);

// document.getElementById("result").innerText = message;
