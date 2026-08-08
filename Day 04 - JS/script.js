// File: 1

const items = [];

function createItem(item) {
  items.push(item);
  console.log("Current items:", items);
}

function readItems() {
  items.forEach((item, index) => {
    console.log(`Index: ${index}, value: ${item}`);
  });
}

function updateItem(index, newItem) {
  items[index] = newItem;
  console.log("Current items:", items);
}

function deleteItem(index) {
  const deletedItem = items.splice(index, 1);
  console.log("Current items:", items);
}

// console.log("Create:");
// createItem("Ahmed");
// createItem("Mahmoud");
// createItem("Fathy");
// createItem("Grawsh");

// console.log("Read:");
// readItems();

// console.log("Update:");
// updateItem(3, "abdel-fattah");

// console.log("Delete:");
// deleteItem(2);

// console.log("Final Output:");
// readItems();

// File: 2

// Task: 1
function multiply(x, y) {
  return x * y;
}

function calculate(x, y, operation, callback) {
  var result = operation(x, y);
  callback(result);
}

function displayResult(result) {
  console.log(result);
}

// calculate(5, 5, multiply, displayResult);

// Task: 2
function greetUser(name) {
  setTimeout(() => {
    console.log(`Hello, ${name}`);
  }, 3000);
}
// greetUser("Ahmed");

function countdown(stop) {
  var count = 10;
  var timer = setInterval(() => {
    console.log(count);
    count--;

    if (count === stop) {
      console.log("Time's up");
      clearInterval(timer);
    }
  }, 1000);
}
// countdown(5);

var timeout5 = setTimeout(() => {
  console.log("This will be cleared!");
}, 5000);

clearTimeout(timeout5);
