// Problem: https://adventofcode.com/2018/day/1
// PART 1
// Read input from file
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

// Convert contents to numbers
numbers = input.map(value => parseInt(value));

// Loop over input to get frequency
const frequency = numbers.reduce((value, sum) => value + sum);

// Print frequency
console.log("Part 1: " + frequency);


// PART 2
// Use set to store past frequencies
let frequencies = new Set();

currentFrequency = 0;
frequencies.add(currentFrequency);

// Loop through input, see if frequency exists in set, otherwise add it
let duplicateFound = false;
let index = 0;
while (!duplicateFound) {
  const number = numbers[index % numbers.length];

  currentFrequency += number;

  if (frequencies.has(currentFrequency)) {
    break;
  } else {
    frequencies.add(currentFrequency);
  }

  index ++;
}

// Print first duplicate frequency
console.log("Part 2: " + currentFrequency);