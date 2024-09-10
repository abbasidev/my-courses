//// Variable Numbers of Arguments

/////////////////////////////////////////
function myFunction() {
  console.log(arguments.length);
}

myFunction(1);
myFunction();
myFunction(1, 10, 20);

/////////////////////////////////////////
function mean() {
  let average,
    total = 0;
  for (let number of arguments) {
    total += number;
  }
  average = total / arguments.length;
  return average;
}

console.log(mean(2));
console.log(mean(28, 26));
console.log(mean(2, 4, 6, 11, 1));

/////////////////////////////////////////
function mean(...numbers) {
  let average,
    total = 0;
  for (let number of numbers) {
    total += number;
  }
  average = total / numbers.length;
  return average;
}

console.log(mean(2));
console.log(mean(28, 26));
console.log(mean(2, 4, 6, 11, 1));

/////////////////////////////////////////
function sumOrProduct(operation, ...numbers) {
  let result;
  if (operation === "sum") {
    result = 0;
    for (let number of numbers) {
      result += number;
    }
  } else if (operation === "product") {
    result = 1;
    for (let number of numbers) {
      result *= number;
    }
  }
  return result;
}

console.log(sumOrProduct("sum", 4, 6, 11));
console.log(sumOrProduct("product", 4, 6, 11));
console.log(sumOrProduct("sum", 22, 6, 11, 2.5));
