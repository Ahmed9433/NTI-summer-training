// === Task 1 ===
// var name = prompt("Enter full name:");

// var words = name.trim().split(" ");

// var formatted = words.map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
// var result = formatted.join(" ");

// var charCount = result.replaceAll(" ", "").length;

// console.log("Formatted Name: " + result);
// console.log("Character Count (no spaces): " + charCount);

// === Task 2 ===
// var email = prompt("Enter email:");

// var isValid =
//   email.includes("@") &&
//   email.endsWith(".com") &&
//   !email.startsWith("@") &&
//   !email.includes(" ");

// console.log(isValid ? "Valid Email" : "Invalid Email");

// === Task 3 ===
// var text = prompt("Enter text:");
// var char = prompt("Enter character to count:");

// text = text.toLowerCase();
// char = char.toLowerCase();

// var count = 0;
// for (var i = 0; i < text.length; i++) {
//   if (text[i] === char) {
//     count++;
//   }
// }

// console.log(`'${char}' appears ${count} time(s).`);

// === Task 4 ===
// var sentence = prompt("Enter sentence:");
// var word = prompt("Enter word to replace:");

// var words = sentence.split(" ");
// var result = words.map((w) => (w === word ? "***" : w)).join(" ");

// console.log("Result: " + result);

// === Task 5 ===
// var first = prompt("Enter first name:");
// var last = prompt("Enter last name:");

// var username = (first.trim() + "." + last.trim())
//   .toLowerCase()
//   .replaceAll(" ", "");

// if (username.length > 15) {
//   username = username.slice(0, 15);
// }

// console.log("Username: " + username);

// === Task 6 ===
// var sentence = prompt("Enter sentence:");
// var word = prompt("Enter word to search:");

// var words = sentence.split(" ");
// var positions = [];

// for (var i = 0; i < words.length; i++) {
//   if (words[i] === word) {
//     positions.push(i);
//   }
// }

// if (positions.length === 0) {
//   console.log("Word not found.");
// } else {
//   console.log("Word exists: Yes");
//   console.log("First position: " + positions[0]);
//   console.log("Last position: " + positions[positions.length - 1]);
//   console.log("Total occurrences: " + positions.length);
// }

// === Task 7 ===
// var sentence = prompt("Enter sentence:");
// var words = sentence.split(" ");
// var result = [];

// for (var w of words) {
//   var reversed = "";
//   for (var i = w.length - 1; i >= 0; i--) {
//     reversed += w[i];
//   }
//   result.push(reversed);
// }

// console.log("Reversed Words: " + result.join(" "));

// === Task 8 ===
// var text = prompt("Enter text:");

// var words = text.trim().split(" ");
// var charCount = text.replaceAll(" ", "").length;

// var vowels = 0;
// var digits = 0;
// var upper = 0;
// var lower = 0;
// var vowelSet = "aeiouAEIOU";

// for (var ch of text) {
//   if (vowelSet.includes(ch)) vowels++;
//   if (ch >= "0" && ch <= "9") digits++;
//   if (ch >= "A" && ch <= "Z") upper++;
//   if (ch >= "a" && ch <= "z") lower++;
// }

// var longest = words[0];
// var shortest = words[0];

// for (var w of words) {
//   if (w.length > longest.length) longest = w;
//   if (w.length < shortest.length) shortest = w;
// }

// console.log("Word Count: " + words.length);
// console.log("Character Count (no spaces): " + charCount);
// console.log("Vowels: " + vowels);
// console.log("Digits: " + digits);
// console.log("Uppercase letters: " + upper);
// console.log("Lowercase letters: " + lower);
// console.log("Longest word: " + longest);
// console.log("Shortest word: " + shortest);

// === Task 9 ===
// var phone = prompt("Enter phone number:");

// var first = phone.slice(0, 4);
// var last = phone.slice(-3);
// var middleLength = phone.length - 7;
// var middleMasked = "*".repeat(middleLength);

// console.log("Masked Phone: " + first + middleMasked + last);

// === Task 10 ===
// var sentence = prompt("Enter sentence:");

// var cleaned = sentence.trim().split(" ");

// var words = cleaned.map((w) => {
//   return w.toLowerCase() === "javascript" ? "JavaScript" : w;
// });
// cleaned = words.join(" ");

// cleaned = cleaned[0].toUpperCase() + cleaned.slice(1);

// if (!cleaned.endsWith(".")) {
//   cleaned += ".";
// }

// console.log("Cleaned Sentence: " + cleaned);

// === Bonus Task ===
// var running = true;

// while (running) {
//   var choice = prompt(
//     `Text Processing Menu:
//     1. Convert text to uppercase
//     2. Convert text to lowercase
//     3. Count characters
//     4. Count words
//     5. Search for a word
//     6. Replace a word
//     7. Reverse text
//     8. Exit
//     Enter your choice (1-8):`,
//   );

//   switch (choice) {
//     case "1": {
//       var text = prompt("Enter text:");
//       alert(text.toUpperCase());
//       break;
//     }
//     case "2": {
//       var text = prompt("Enter text:");
//       alert(text.toLowerCase());
//       break;
//     }
//     case "3": {
//       var text = prompt("Enter text:");
//       alert("Character count (no spaces): " + text.replaceAll(" ", "").length);
//       break;
//     }
//     case "4": {
//       var text = prompt("Enter text:");
//       var words = text.trim().split(" ");
//       alert("Word count: " + words.length);
//       break;
//     }
//     case "5": {
//       var text = prompt("Enter text:");
//       var word = prompt("Enter word to search:");
//       var words = text.split(" ");
//       var found = words.includes(word);
//       alert(found ? "Word found." : "Word not found.");
//       break;
//     }
//     case "6": {
//       var text = prompt("Enter text:");
//       var word = prompt("Enter word to replace:");
//       var words = text.split(" ").map((w) => (w === word ? "***" : w));
//       alert(words.join(" "));
//       break;
//     }
//     case "7": {
//       var text = prompt("Enter text:");
//       var reversed = "";
//       for (var i = text.length - 1; i >= 0; i--) {
//         reversed += text[i];
//       }
//       alert(reversed);
//       break;
//     }
//     case "8":
//       alert("Goodbye!");
//       running = false;
//       break;
//     default:
//       alert("Invalid choice. Please try again.");
//   }
// }
