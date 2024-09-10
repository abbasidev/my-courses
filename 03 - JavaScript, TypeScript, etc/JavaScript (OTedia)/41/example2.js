function square(x) {
  return x ** 2;
}

//// Custom properties
square.description = "This is a function";
console.log(square.description);
console.log(square(2));

//// Custom methods
square.isPerfect = function (x) {
  if (Number.isInteger(Math.sqrt(x))) {
    return true;
  } else {
    return false;
  }
};
console.log(square.isPerfect(5));
console.log(square(2));

//// Memoization //// دقیقه 25
function square2(x) {
  square2.cache = square2.cache || {};
  if (!square2.cache[x]) {
    square2.cache[x] = x ** 2;
  }
  return square2.cache[x];
}
console.log(square2(4));
console.log(square2(5));
console.log(square2.cache);
