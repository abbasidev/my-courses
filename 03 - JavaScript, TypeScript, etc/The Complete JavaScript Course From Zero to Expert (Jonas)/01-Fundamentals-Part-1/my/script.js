///////////////////////////////////////////////////////

// let firstName = "Amir";
// console.log(firstName);
// alert(firstName);

///////////////////////////////////////////////////////

// //// نام گذاری اصولی
// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// //// نام گذاری غیر اصولی
// let job1 = "programmer";
// let job2 = "teacher";

///////////////////////////////////////////////////////

// //// فهمیدن نوع داده
// console.log(typeof "Amir");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// let year;
// console.log(year);
// console.log(typeof year);

///////////////////////////////////////////////////////

// //// let مقدارش رو هر وقت بخوایم میتونیم تغییر بدیم
// let age = 30;
// age = 31;
// console.log(age);

// //// const مقدارش رو بعدها نمیتونیم تغییر بدیم
// const birthYear = 1999;
// birthYear = 1998;
// console.log(birthYear);
// //// ERROR

///////////////////////////////////////////////////////

// const firstName = "Amir";
// const lastName = "Abbasi";
// console.log(firstName + " " + lastName);

///////////////////////////////////////////////////////

// console.log(3 + 2);
// console.log(3 - 2);
// console.log(3 * 2);
// console.log(4 ** 2);
// console.log(10 / 2);

// console.log(11 / 2);
// console.log(11 % 2);

///////////////////////////////////////////////////////

// let x = 15; //
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 //101
// x--; // x = x - 1 //100
// console.log(x);

///////////////////////////////////////////////////////

// x += 4; // x = x + 4
// x -= 4; // x = x - 4
// x *= 4; // x = x * 4
// x **= 4; // x = x ** 4
// x /= 4; // x = x / 4
// x %= 4; // x = x % 4

///////////////////////////////////////////////////////

// //// ( > , < , >= , <= )
// const now = 2022;
// const ageAmir = now - 1999;
// const ageMargot = now - 1991;
// console.log(ageAmir, ageMargot);
// console.log(ageAmir > ageMargot);
// console.log(ageAmir < ageMargot);
// console.log(ageMargot >= 31);
// console.log(ageMargot <= 30);

///////////////////////////////////////////////////////

// //// Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

///////////////////////////////////////////////////////

// //// Strings and Template Literals
// const firstName = "Amir";
// const age = 22;
// const amir = firstName + " is " + age + " years old ";
// const amirNew = `${firstName} is ${age} years old `;
// console.log(amir);
// console.log(amirNew);

// console.log(`Just a regular string...`);

// console.log(
//   "String \n\
// multiple \n\
// lines"
// );

// console.log(`String
// multiple
// lines`);

///////////////////////////////////////////////////////

// //// Taking Decisions: if / else Statements
// const age = 15;
// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const amirAge = 30;
// const margotAge = 30;
// if (margotAge > amirAge) {
//   console.log(
//     `Amir ("${amirAge} years old") is younger that Margot ("${margotAge} years old") !`
//   );
// } else if (margotAge < amirAge) {
//   console.log(
//     `Margot ("${margotAge} years old")is younger that Amir ("${amirAge} years old") !`
//   );
// } else if (margotAge == amirAge) {
//   console.log(
//     `Amir ("${amirAge} years old") and Margot ("${margotAge} years old") the same age!`
//   );
// } else {
//   console.log(`ERROR`);
// }

///////////////////////////////////////////////////////

// //// Type Conversion and Coercion

// //// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(String(23), 23);
// console.log(Number("Jonas"));
// console.log(typeof NaN);

// //// type coercion
// console.log("I am " + 23 + " years old");
// console.log("13" + "10");
// console.log("13" - "10");
// console.log("2" * "3");
// console.log("4" ** "2");
// console.log("10" / "2");
// console.log("10" % "3");

// let n = "1" + 1; // '11'
// n = n - 1;
// console.log(n);

///////////////////////////////////////////////////////

// //// Truthy and Falsy Values

// //// 5 falsy values: 0, '', undefined, null, NaN
// //// NaN = Not a Number

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

///////////////////////////////////////////////////////

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

///////////////////////////////////////////////////////

// //// Equality Operators: == vs. ===
// const age = "18";
// if (age === 18) {
//   console.log("You just became an adult :D (strict)");
// } else console.log("ERROR");
// if (age == 18) {
//   console.log("You just became an adult :D (loose)");
// } else {
//   console.log("ERROR");
// }

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   //// 22 === 23 -> FALSE
//   console.log("Cool! 23 is an amzaing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// console.log(3 !== "3");
// console.log(3 != "3");

///////////////////////////////////////////////////////

// //// Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = false; // C

// console.log(hasDriversLicense && hasGoodVision && isTired);
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(!hasDriversLicense);
// console.log(!isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

///////////////////////////////////////////////////////

// //// The switch Statement
// const day = "friday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

///////////////////////////////////////////////////////

// const day = Number(prompt("در چه روزی از هفته هستیم؟؟؟"));
// switch (day) {
//   case 0:
//     console.log("شنبه");
//     break;
//   case 1:
//     console.log("یکشنبه");
//     break;
//   case 2:
//     console.log("دوشنبه");
//     break;
//   case 3:
//     console.log("سه شنبه");
//     break;
//   case 4:
//     console.log("چهارشنبه");
//     break;
//   case 5:
//     console.log("پنجشنبه");
//     break;
//   case 6:
//     console.log("جمعه");
//     break;
//   default:
//     console.log("متاسفانه روزی انتخاب نشده است");
// }

// if (day === 0) {
//   console.log("شنبه");
// } else if (day === 1) {
//   console.log("یکشنبه");
// } else if (day === 2) {
//   console.log("دوشنبه");
// } else if (day === 3) {
//   console.log("سه شنبه");
// } else if (day === 4) {
//   console.log("چهارشنبه");
// } else if (day === 5) {
//   console.log("پنجشنبه");
// } else if (day === 6) {
//   console.log("جمعه");
// } else console.log("متاسفانه روزی انتخاب نشده است");

///////////////////////////////////////////////////////

// //// Statements and Expressions
// const myName = "Amir";
// console.log(`I'm ${2037 - 1999} years old ${myName}`);

///////////////////////////////////////////////////////

// //// The Conditional (Ternary) Operator
// const age = 23;
// age >= 18 ? console.log("wine 🍷") : console.log("water 💧");

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

///////////////////////////////////////////////////////
