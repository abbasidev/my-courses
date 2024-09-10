let answer1 = Math.PI; // Math = Object / PI = property
console.log(answer1);

let answer2 = Math.sqrt(100); // Math = Object / sqrt = method
console.log(answer2);

console.log(typeof 20);
console.log(typeof 3.23);

let a = Number.isInteger(22); // Number = Object / isInteger = method
console.log(a);

console.log(Number.isInteger(22));
console.log(Number.isInteger(3.14));

console.log(2 / 0); // Infinity بی نهایت
console.log(-2 / 0); // -Infinity
console.log(2e444); // Infinity
console.log(typeof Infinity);

console.log(2 * "Hello"); // NaN
console.log(3 - "JavaScript"); // NaN
console.log(typeof NaN);

//// isFinite مشخص میکنه که یک عدد بی نهایت است یا خیر
console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(42));

//// isNaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(44));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(4 - "HTML"));
