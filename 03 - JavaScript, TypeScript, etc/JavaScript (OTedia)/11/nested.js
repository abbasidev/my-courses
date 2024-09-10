//// Nested Loops

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}

let output = "";
for (let n = 1; n <= 10; n++) {
  for (let m = 1; m <= 10; m++) {
    output += n * m + "	";
  }
  output += "\n";
}
console.log(output);
