// Problem: https://adventofcode.com/2018/day/3
// PART 1
// Read from file
const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

// Create fabric
let fabric = [];
for (let i = 0; i < 1000; i++) {
  fabric.push(new Array(1000).fill(0));
}

// Applys a claim onto fabric by incrementing that area by 1.
function appyClaimToFabric(claim, fabric) {
  // Remove everything in the claim that is not numbers or whitespace
  // and store in array
  let = claimArray = claim.replace(/[^0-9]+/g, ' ').split(' ').splice(2);

  // Get dimensions and coordinates
  let fromLeft = Number(claimArray[0]);
  let fromTop = Number(claimArray[1]);
  let width = Number(claimArray[2]);
  let height = Number(claimArray[3]);

  // Increment the area where the fabric is applied
  for (let x = fromLeft; x < fromLeft + width; x++) {
    for (let y = fromTop; y < fromTop + height; y++) {
      fabric[y][x]++;
    }
  }

  return fabric;
}

// Apply claims to fabric
inputs.forEach(test => {
  fabric = appyClaimToFabric(test, fabric);
});

// Count multiple claims
let multiClaimCount = 0;
for (let i = 0; i < fabric.length; i++) {
  for (let j = 0; j < fabric[i].length; j++) {
    if (fabric[i][j] > 1) multiClaimCount++;
  }
}

console.log(`Part 1: ${multiClaimCount}`);


// PART 2

// Returns true if selected claim has no overlap
function checkClaimOverlap(claim, fabric) {
  // Remove everything in the claim that is not numbers or whitespace
  // and store in array
  let = claimArray = claim.replace(/[^0-9]+/g, ' ').split(' ').splice(2);

  // Get dimensions and coordinates
  let fromLeft = Number(claimArray[0]);
  let fromTop = Number(claimArray[1]);
  let width = Number(claimArray[2]);
  let height = Number(claimArray[3]);

  // Check that only one fabric has claimed the area
  for (let x = fromLeft; x < fromLeft + width; x++) {
    for (let y = fromTop; y < fromTop + height; y++) {
      if (fabric[y][x] != 1) return false;
    }
  }

  return true;
}

// Find claim without overlap
for (let claim of inputs) {
  let noOverlap = checkClaimOverlap(claim, fabric);
  if (noOverlap) {
    console.log(`Part 2: ${claim}`);
    break;
  }
}