# text-utils-package

A simple and useful text utility package for JavaScript.

## Installation

npm install text-utils-package

## Usage

const textUtils = require("text-utils-package");

// Capitalize words
textUtils.capitalizeWords("hello world"); // "Hello World"

// Count words
textUtils.countWords("hello world"); // 2

// Reverse text
textUtils.reverseText("hello"); // "olleh"

// Check palindrome (reads same forwards and backwards)
textUtils.isPalindrome("racecar"); // true
textUtils.isPalindrome("hello"); // false
