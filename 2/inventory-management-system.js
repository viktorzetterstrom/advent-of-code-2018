// Problem: https://adventofcode.com/2018/day/2
// PART1
// Get input
const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

// Counts occurences of all letters of a string and returns it as an object.
function getLetterCount(string) {
  let letterCount = {};
  for (let char of string.split("")) {
    if (letterCount[char] === undefined) {
      letterCount[char] = 1;
    } else {
      letterCount[char]++;
    }
  };
  return letterCount;
}

// Checks if string contains at least target of some character
function containsSameCharacters(string, target) {
  let letterCount = getLetterCount(string);
  for (let letter of string.split("")) {
    if (letterCount[letter] === target) {
      return true;
    }
  };
  return false;
}

// Count doubles and triples and display the product.
let doubles = [];
let triples = [];
inputs.forEach(input => {
  let double = containsSameCharacters(input, 2) === true;
  let triple = containsSameCharacters(input, 3) === true;

  if (double) doubles.push(input);
  if (triple) triples.push(input);
});
console.log(`Part 1: ${doubles.length} * ${triples.length}`);

// PART 2
// Returns true if two strings differ by only one char
function differByOne(string1, string2) {
  let diff = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) diff++;
  }
  return diff === 1;
}

// Removes the differing chars between two strings
function removeDifferingChars(string1, string2) {
  let newString = "";
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) newString += string1[i];
  }
  return newString;
}

// Compare strings until we find which differs by one char.
let found = false;
for (let string of inputs) {
  for (let compare of inputs) {
    if (differByOne(string, compare)) {
      console.log(`Part 2: ${removeDifferingChars(string, compare)}`);
      found = true;
      break;
    }
  }
  if (found) break;
}
