// for ([initialExpression]; [conditionExpression]; [incrementExpression])
// statement;

// Initial Expression - Initializes a variable/counter
// یک متغیر/ شمارنده را مقداردهی اولیه می کند

// Condition Expression - Condition that the loop will continue to run as long as it is met or until the condition is false
// شرطی که حلقه تا زمانی که برقرار باشد یا تا زمانی که شرط نادرست باشد به کار خود ادامه خواهد داد

// Increment Expression - Expression that will be executed after each iteration of the loop. Usually increments the variable
// عبارتی که پس از هر بار تکرار حلقه اجرا می شود. معمولا متغیر را افزایش می دهد

// Statement - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax
// کدی که هر بار که حلقه اجرا می شود اجرا می شود

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log("7 is my lucky number");
//   } else {
//     console.log("Number " + i);
//   }
// }

// Nested loops
// for (let i = 1; i <= 10; i++) {
//   console.log("Number " + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
const names = ["Brad", "Sam", "Sara", "John", "Tim"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "John") {
    console.log(names[i] + " is the best");
  } else {
    console.log(names[i]);
  }
}
// معمولا این کار رو با فورایچ بهتره که انجام بدیم
