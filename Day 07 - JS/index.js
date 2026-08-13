function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function countWords(text) {
  if (text.trim() === "") return 0;
  return text.trim().split(" ").length;
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

function isPalindrome(text) {
  const cleaned = text.toLowerCase().trim();
  return cleaned === cleaned.split("").reverse().join("");
}

module.exports = {
  capitalizeWords,
  countWords,
  reverseText,
  isPalindrome,
};
