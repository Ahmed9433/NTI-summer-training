// ======= Folder: 1 =======

// === Task: 1 ===
// var a = "aaa";
// var b = 20;
// var c = true;
// var d = null;
// var e = undefined;
// var firstName = "ahmed";
// var lastName = "mahmoud";

// console.log(`${a}, type: ${typeof a}`);
// console.log(`${b}, type: ${typeof b}`);
// console.log(`${c}, type: ${typeof c}`);
// console.log(`${d}, type: ${typeof d}`);
// console.log(`${e}, type: ${typeof e}`);

// console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);

// === Task: 2 ===
// var userName = "ahmed";
// var password = "12345678";

// if (userName === "") {
//   alert("Username is required.");
// }
// if (password.length < 8) {
//   alert("Password must be at least 8 characters");
// }
// if (userName !== "" && password.length >= 8) {
//   console.log(`username: ${userName}, password ${password}`);
// }

// ======= Folder: 2 =======

// var name = prompt("Enter employee name:");
// var age = Number(prompt("Enter employee age:"));
// var experience = Number(prompt("Enter years of experience:"));
// var selfRating = Number(prompt("Enter self-rating (1 to 10):"));
// var baseSalary = Number(prompt("Enter base salary:"));

// var jobCategory;
// if (experience < 2) {
//   jobCategory = "Junior";
// } else if (experience >= 2 && experience < 5) {
//   jobCategory = "Mid-Level";
// } else if (experience >= 5 && experience < 10) {
//   jobCategory = "Senior";
// } else {
//   jobCategory = "Expert";
// }

// var ratingLevel;

// switch (true) {
//   case selfRating >= 9:
//     ratingLevel = "Excellent";
//     break;
//   case selfRating >= 7:
//     ratingLevel = "Good";
//     break;
//   case selfRating >= 5:
//     ratingLevel = "Average";
//     break;
//   default:
//     ratingLevel = "Needs Improvement";
// }

// var bonusPercent;
// if (experience >= 0 && experience <= 2) {
//   bonusPercent = 0.1;
// } else if (experience >= 3 && experience <= 5) {
//   bonusPercent = 0.15;
// } else {
//   bonusPercent = 0.2;
// }

// var bonus = baseSalary * bonusPercent;
// var finalSalary = baseSalary + bonus;

// var currentHour = new Date().getHours();
// var shift;
// if (currentHour >= 9 && currentHour < 18) {
//   shift = "Day Shift";
// } else {
//   shift = "Night Shift";
// }

// var report = `
// Employee Report:
// Name: ${name}
// Age: ${age}
// Job Category: ${jobCategory}
// Performance Level: ${ratingLevel}
// Bonus: ${bonus}
// Final Salary: $${finalSalary}
// Current Shift: ${shift}
// `;

// console.log(report);
// alert(report);

// document.getElementById("name").innerText = `Name: ${name} `;
// document.getElementById("age").innerText = `Age: ${age} `;
// document.getElementById("job-category").innerText =
//   `Job Category: ${jobCategory} `;
// document.getElementById("performance").innerText =
//   `Performance Level: ${ratingLevel} `;
// document.getElementById("bonus").innerText = `Bonus: ${bonus} `;
// document.getElementById("salary").innerText = `Final Salary: ${finalSalary} `;
// document.getElementById("shift").innerText = `Current Shift: ${shift} `;

// ======= Folder: 3 =======

// === Task: 1 ===
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// === Task: 2 ===
// for (var i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// === Task: 3 ===
// var totalSales = 0;
// for (var i = 1; i <= 15; i++) {
//   totalSales += i;
// }
// console.log(totalSales);

// === Task: 4 ===
// var i = 1;
// while (i <= 7) {
//   console.log(i);
//   i++;
// }

// === Task: 5 ===
// var i = 8;
// while (i >= 1) {
//   alert(i);
//   i--;
// }

// === Task: 6 ===
// var i = 1;
// do {
//   alert(i);
//   i++;
// } while (i <= 5);

// === Task: 7 ===
// var itemsInCart = 10;
// while (itemsInCart < 5) {
//   alert("start shopping");
// }
// do {
//   alert("start shopping");
// } while (itemsInCart < 5);

/*
- "while" checks the condition first before execution,
so in this case (10 < 5) is false => exits loop before execution
- "do...while" executes before checking the condition,
so in this case the alert is displayed then checks condition:
(10 < 5) is false => exits loop after executing once
*/

// === Task: 8 ===
// var userName = "Ali";
// var userAge = 22;
// var isStudent = true;

// console.log(`username: ${userName}, type: ${typeof userName}`);
// console.log(`age: ${userAge}, type: ${typeof userAge}`);
// console.log(`student: ${isStudent}, type: ${typeof isStudent}`);

// === Task: 9 ===
// var dbPrice = 10;
// var inputPrice = "10";

// console.log(dbPrice == inputPrice); // compares value only, so it displays true
// console.log(dbPrice === inputPrice); // compares value and type, so it displays false

// === Task: 10 ===
// var userName = prompt("Enter your name:");
// alert(`Welcome, ${userName}`);

// === Task: 11 ===
// var num1 = prompt("Enter first number:");
// console.log(typeof +num1);
// var num2 = prompt("Enter second number:");
// console.log(typeof parseInt(num2));
// var num3 = prompt("Enter third number:");
// console.log(typeof Number(num3));

// === Task: 12 ===
// var a = 10;
// var b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// === Task: 13 ===
// var age = 20;
// if (age >= 18) {
//   alert("You can enter");
// } else {
//   alert("Sorry, underage");
// }

// === Task: 14 ===
// var grade = 90;
// if (grade >= 90 && grade <= 100) {
//   console.log("A");
// } else if (grade >= 80 && grade < 90) {
//   console.log("B");
// } else if (grade >= 70 && grade < 80) {
//   console.log("C");
// } else {
//   console.log("F");
// }

// === Task: 15 ===
// var age = Number(prompt("Enter your age:"));
// var adulthood = age >= 18 ? "Adult" : "Minor";

// alert(adulthood);

// === Task: 16 ===
// var day = prompt("Enter day:");

// switch (day) {
//   case "Sunday":
//     alert("Welcome to work");
//     break;
//   case "Monday":
//     alert("Welcome to work");
//     break;
//   case "Tuesday":
//     alert("Welcome to work");
//     break;
//   case "Wenesday":
//     alert("Welcome to work");
//     break;
//   case "Thursday":
//     alert("Welcome to work");
//     break;
//   default:
//     alert("Today is a Weekend");
// }

// === Task: 17 ===
// var price = Number(prompt("Enter item's price:"));
// for (var i = 1; i <= 10; i++) {
//   console.log(`${i} x ${price} = ${i * price}`);
// }

// === Task: 18 ===
// var number = Number(prompt("Enter a number:"));

// if (number > 0) {
//   for (var i = 1; i <= number; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("Invalid file size");
// }

// === Task: 19 ===
// var start = Number(prompt("Enter start:"));
// var end = Number(prompt("Enter end:"));

// for (var i = start; i <= end; i++) {
//   if (i % 2 == 0) {
//     console.log("express");
//   } else {
//     console.log("normal");
//   }
// }

// === Task: 20 ===
// var names = ["ahmed", "ali", "sara"];

// for (var i = 0; i < names.length; i++) {
//   console.log(`Student ${i + 1}: ${names[i]}`);
// }

// === Task: 21 ===
// var sum = 0;

// for (var i = 1; i <= 5; i++) {
//   var num = Number(prompt(`Enter number ${i}:`));
//   sum += num;
// }

// console.log(sum);
// console.log(sum / 5);

// === Task: 22 ===
// var correctPin = "1234";
// var attempts = 0;

// while (correctPin !== enteredPin) {
//   var enteredPin = prompt("Enter pin:");
//   attempts += 1;

//   if (correctPin === enteredPin) {
//     alert("login successful.");
//     break;
//   } else if (attempts == 3) {
//     alert("login failed.");
//     break;
//   }
// }

// === Task: 23 ===
// var hasAccount = true;
// var isVerified = false;

// console.log(hasAccount && isVerified);
// console.log(hasAccount || isVerified);
// console.log(!isVerified);

// if (hasAccount && isVerified) {
//   console.log("Welcome back");
// } else if (!isVerified) {
//   console.log("Please verify your account");
// } else if (!hasAccount) {
//   console.log("Please sign up");
// }

// === Task: 24 ===
// var a = 40;
// var b = 50;
// var c = "60";
// var d = 30;
// var e = 30;
// var sum = a + b + Number(c) + d + e;
// console.log(sum);

// if (sum <= 20) {
//   for (var i = 1; i <= sum; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("Too big to print line by line");
// }

// === Task: 25 ===
// var n = Number(prompt("Enter a number:"));
// var factorial = 1;

// if (n < 0) {
//   console.log("Error: negative number.");
// } else {
//   for (var i = n; i >= 1; i--) {
//     factorial *= i;
//   }
//   alert(`${n}! = ${factorial}`);
//   console.log(`${n}! = ${factorial}`);
// }
