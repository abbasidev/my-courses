"use strict";

///////////////////////////////////////////////////////

//// این قطعه کد همیشه فعال باشد
//// Data needed for first part of the section

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Destructuring Arrays

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

///////////////////////////////////////////////////////

// const a = 1;
// const b = 2;
// const c = 3;
// console.log(a, b, c);

///////////////////////////////////////////////////////

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);

///////////////////////////////////////////////////////

// const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

///////////////////////////////////////////////////////

// const [first, second] = restaurant.categories;
// console.log(first, second);

///////////////////////////////////////////////////////

// const [first, , second] = restaurant.categories;
// console.log(first, second);

///////////////////////////////////////////////////////

// let [a, b, c] = [1, 2, 3];
// [a, b, c] = [c, a, b];
// console.log(a, b, c);

///////////////////////////////////////////////////////

// let [main, secondry] = restaurant.categories;
// console.log(main, secondry);

// // //// way 1 (old)
// // const temp = main;
// // main = secondry;
// // secondry = temp;
// // console.log(main, secondry);

// //// way 2 (Destructuring)
// [main, secondry] = [secondry, main];
// console.log(main, secondry);

///////////////////////////////////////////////////////

// console.log(restaurant.order(0, 2));

// const [starter, main] = restaurant.order(0, 2);
// console.log(starter, main);

///////////////////////////////////////////////////////

// const nested = [1, 2, [3, 4]];

// const [a, , b] = nested;
// console.log(a, b);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

///////////////////////////////////////////////////////

// let [a = 1, b = 2, c = 3] = [6, , 9];
// console.log(a, b, c);

///////////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [a, b, ...c] = arr;
// console.log(a, b, c);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Destructuring Objects

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// let obj = { a: 1, b: 2 };
// let { a, b } = obj;
// console.log(a, b);

///////////////////////////////////////////////////////

// let { a, b } = { a: 1, b: 2 };
// console.log(a, b);

// ({ a, b } = { a: 3, b: 4 });
// console.log(a, b);

///////////////////////////////////////////////////////

// let obj = { a: 1, b: 2 };
// let { a, b } = obj;
// console.log(a, b);

// let { a: j, b: k } = obj;
// console.log(j, k);

///////////////////////////////////////////////////////

// let { a = 1, b = 2, c = 3 } = { a: 6, c: 9 };
// console.log(a, b, c);

///////////////////////////////////////////////////////

// const arr = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
// const { a, b, ...x } = arr;
// console.log(a, b, x);

///////////////////////////////////////////////////////

// const { name, categories, mainMenu } = restaurant;
// console.log(name, categories, mainMenu);

// ////

// const {
//   name: restaurantName,
//   categories: restaurantCategories,
//   mainMenu: restaurantMainMenu,
// } = restaurant;
// console.log(restaurantName, restaurantCategories, restaurantMainMenu);

// ////

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

///////////////////////////////////////////////////////

// let obj = { a: 1, b: { c: 3, d: 4 } };

// let { a, b } = obj;

// console.log(a, b);

///////////////////////////////////////////////////////

// let obj = { a: 1, b: { c: 3, d: 4 } };

// let {
//   a,
//   b: { c, d },
// } = obj;

// console.log(a, c, d);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Destructuring in function parameters

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// //// Otedia JS

// let user = {
//   id: 15328,
//   age: 44,
//   displayName: "jd",
//   fullName: {
//     firstName: "John",
//     lastName: "Doe",
//   },
// };

// function userId({ id }) {
//   return id;
// }
// console.log(userId(user));

// //// Nested objects and renaming
// function whois({
//   displayName: dn,
//   fullName: { firstName: fName, lastName: lName },
// }) {
//   return `${dn} is ${fName} ${lName}`;
// }
// console.log(whois(user));

// //// Default parameter's value
// function getAge({ fullName: { firstName }, age = 33 }) {
//   return `${firstName} is ${age} years old.`;
// }
// console.log(getAge(user));

///////////////////////////////////////////////////////

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// ////

// restaurant.orderDelivery({
//   time: "21",
//   address: "Via del Sole, 21",
// });

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// The Spread Operator

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// console.log(arr1, arr2, arr3);
// console.log(...arr1, ...arr2, ...arr3);

// const arr4 = [...arr1, 44, 55, 66, ...arr3];
// console.log(arr4);
// console.log(...arr4);

///////////////////////////////////////////////////////

// const newMainMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMainMenu);

///////////////////////////////////////////////////////

// const newMenu1 = [restaurant.starterMenu, restaurant.mainMenu];
// console.log(newMenu1);

// const newMenu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(newMenu2);

///////////////////////////////////////////////////////

// const str = "Amir";
// console.log(...str);

// // console.log(`My Name is ${...str}`);
// //// Error

///////////////////////////////////////////////////////

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt("Let's make pasta! Ingredient 2"),
//   prompt("Let's make pasta! Ingredient 3"),
// ];
// console.log(ingredients);

// //// way 1
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// //// way 2
// restaurant.orderPasta(...ingredients);

///////////////////////////////////////////////////////

// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: "Guiseppe",
// };
// console.log(newRestaurant);

///////////////////////////////////////////////////////

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Maman Jon";

// console.log(restaurantCopy);
// console.log(restaurant);

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Rest Pattern and Parameters

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const add = function (...numbers) {
//   console.log(numbers);
// };
// add(1, 2);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5, 6);

///////////////////////////////////////////////////////

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(1, 2);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5, 6);

///////////////////////////////////////////////////////

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("mushrooms");

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Short Circuiting (&& and / || or)

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// console.log(0 || "" || undefined || null || NaN);
// console.log(0 && "" && undefined && null && NaN);

// console.log(11 || "Amir" || null);
// console.log(11 && "Amir" && null);

// console.log(null || 11 || "Amir");
// console.log(null && 11 && "Amir");

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// The Nullish Coalescing Operator ()

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// console.log(0 || "" || undefined || null || NaN);
// console.log(0 ?? "" ?? undefined ?? null ?? NaN);

// console.log(0 || "Amir" || null);
// console.log(0 ?? "Amir" ?? null);

// console.log(NaN || null || 11 || "Amir");
// console.log(NaN ?? null ?? 11 ?? "Amir");

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Logical Assignment Operators

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const rest1 = {
//   name: "Capri",
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Pizza",
//   owner: "Giovanni Rossi",
// };

// /////// هر دو خط دو خط از کامنت درآورده شود
// // //// way 1
// // ////
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // ////
// // rest1.numGuests = rest1.numGuests ?? 10;
// // rest2.numGuests = rest2.numGuests ?? 10;
// // ////
// // rest1.owner = rest1.owner && "ANONYMOUS";
// // rest2.owner = rest2.owner && "ANONYMOUS";

// // //// way 2 (New)
// // ////
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// // ////
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;
// // ////
// // rest1.owner &&= "ANONYMOUS";
// // rest2.owner &&= "ANONYMOUS";

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Looping Arrays The for-of Loop

//// for-of Loop
//// برای حلقه زدن روی تکرار پذیرها استفاده میشود
//// تکرار پذیرها = Iterables
//// Iterables = خیلی چزها در جاوا اسکریپت تکرار پذیر هستند به جر آبجکت ها
//// Iterables = arrays, strings, maps, sets, ..., but NOT OBJECTS

//// for-in Loop
//// برای حلقه زدن روی آبجکت ها استفاده میشود و روی همه ی اشیا قابل استفاده ست

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const item of arr) {
//   console.log(item);
// }

///////////////////////////////////////////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

///////////////////////////////////////////////////////

// //// entries = به معنای ورودی ها
// //// entries method

// const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// for (const item of arr.entries()) {
//   console.log(item);
// }

///////////////////////////////////////////////////////

// //// entries method
// const arr = ["A", "B", "C", "D", "E", "F", "G"];

// for (const item of arr.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Enhanced = به معنای تقویت شده
//// Enhanced Object Literals

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const obj1 = {
//   name: "Amir",
//   age: "23",
//   id: 55566,
// };

// const obj = {
//   //// old
//   // obj1: obj1,
//   //// es6
//   obj1,
//   country: "Iran",
//   city: "Tehran",
// };

// console.log(obj);

///////////////////////////////////////////////////////

// const ages = [23, 28, 25, 24, 18, 12];

// const obj = {
//   name: "Amir",
//   age: ages[0],
//   id: 55566,
// };

// console.log(obj);

///////////////////////////////////////////////////////

// const weekdays = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];

// const obj = {
//   [weekdays[0]]: "ش",
//   [weekdays[1]]: "1",
//   [weekdays[2]]: "2",
//   [weekdays[3]]: "3",
//   [weekdays[4]]: "4",
//   [weekdays[5]]: "5",
//   [weekdays[8 - 2]]: "ج",
// };

// console.log(obj);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Optional Chaining

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const person = {
//   person1: {
//     name: "Amir",
//     age: 23,
//   },
//   person2: {
//     name: "Ali",
//     age: 18,
//   },
// };

// //// way 1
// console.log(person.person1 && person.person1.age);
// console.log(person.person1 && person.person1.id);
// //// way 2
// console.log(person?.person1?.age);
// console.log(person?.person1?.id);

///////////////////////////////////////////////////////

// //// Methods
// console.log(restaurant.order?.(2, 0) ?? "Method does not exist");
// console.log(restaurant.order?.(2, 7) ?? "Method does not exist");
// console.log(restaurant.order?.(6, 7) ?? "Method does not exist");

// console.log(restaurant.orderRisotto?.(2, 0) || "Method does not exist");
// console.log(restaurant.orderRisotto?.(2, 0) && "Method does not exist");
// console.log(restaurant.orderRisotto?.(2, 0) ?? "Method does not exist");

///////////////////////////////////////////////////////

// //// Arrays
// const users = [
//   {
//     firstName: "Amir",
//     lastName: "Abbasi",
//   },
// ];

// console.log(users[0]?.firstName ?? "user array empty");
// console.log(users[0]?.firstName || "user array empty");
// console.log(users[0]?.firstName && "user array empty");

// //// way 1
// if (users.length > 0) console.log(users[0].firstName, users[0].lastName);
// else console.log("user array empty");

// //// way 2
// if (users.length > 0) {
//   console.log(users[0].firstName, users[0].lastName);
// } else {
//   console.log("user array empty");
// }

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Looping Objects: Object Keys, Values, and Entries

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const persons = {
//   person1: {
//     name: "Amir",
//     age: 23,
//   },
//   person2: {
//     name: "Ali",
//     age: 19,
//   },
//   person3: {
//     name: "Reza",
//     age: 27,
//   },
//   person4: {
//     name: "Hadi",
//     age: 14,
//   },
// };

// //// Object.keys
// const keysProperties = Object.keys(persons);
// console.log(keysProperties);

// for (const personKeys of Object.keys(persons)) {
//   console.log(personKeys);
// }

// //// Object.values
// const valuesProperties = Object.values(persons);
// console.log(valuesProperties);

// for (const personValues of Object.values(persons)) {
//   console.log(personValues);
// }

// //// Object.entries
// const entriesProperties = Object.entries(persons);
// console.log(entriesProperties);

// for (const personEntries of Object.entries(persons)) {
//   console.log(personEntries);
// }

// //// Example
// const entries = Object.entries(persons);
// console.log(entries);

// for (const [key, { name, age }] of entries) {
//   console.log(`${key}: ${name} is ${age} years old`);
// }

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Sets

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// //// Sets by OtediaJS
// let mySet = new Set();
// console.log(mySet);

// //// add اضافه کردن
// mySet.add(1);
// mySet.add(2);
// console.log(mySet);

// //// add رو میتونیم به صورت زنجیره ای استفاده کنیم
// mySet.add("JavaScript").add("HTML").add("CSS");
// console.log(mySet);

// //// عضو تکراری نمیتونیم اضافه کنیم
// mySet.add("JavaScript");
// console.log(mySet);

// //// عضو تکراری نمیتونیم اضافه کنیم
// mySet = new Set([1, 2, 2, 3, 3, 4]);
// console.log(mySet);

// mySet = new Set("Hello");
// console.log(mySet);

// mySet = new Set(["Hello"]);
// console.log(mySet);

// mySet = new Set(["Apple", "Orange", "Banana"]);
// console.log(mySet);

// mySet = new Set(["333", 333]);
// console.log(mySet);

// //// size تعداد عناصر داخل مجموعه
// mySet = new Set(["Apple", "Orange", "Banana"]);
// console.log(mySet.size);

// //// has وجود داشتن
// console.log(mySet.has("Apple"));
// console.log(mySet.has("Cherry"));

// //// delete حذف کردن
// let a = mySet.delete("Apple"); // a = true
// let b = mySet.delete("Cherry"); // b = false
// console.log(mySet);

// //// clear پاک کردن کل مجموعه
// mySet.clear();
// console.log(mySet);

///////////////////////////////////////////////////////

// //// Set to Array
// let mySet = new Set(["Apple", "Orange", "Banana"]);
// //// way 1
// let myArray = [...mySet];
// console.log(myArray);
// //// way 2
// myArray = Array.from(mySet);
// console.log(myArray);

///////////////////////////////////////////////////////

// const mySet = new Set([1, 2, 3, 4]);
// console.log(mySet);

// for (const set of mySet) {
//   console.log(set);
// }

///////////////////////////////////////////////////////

// const arr = [1, 1, 2, 2, 2, 3, 4, 4, 4];
// console.log(arr);

// const arrToSet = new Set(arr);
// console.log(arrToSet);

// const setToArr1 = [...new Set(arr)];
// console.log("1:", setToArr1);

// const setToArr2 = Array.from(new Set(arr));
// console.log("2:", setToArr2);

// const setToArr3 = [...arrToSet];
// console.log("3:", setToArr3);

// console.log(new Set("Abbasi").size);
// console.log(new Set("abbasi").size);

// console.log(new Set([1, 1, 2, 2, 2, 3, 4, 4, 4]).size);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Maps

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// //// Maps by OtediaJS
// let myMap = new Map();
// console.log(myMap);

// //// set اضافه کردن
// myMap.set(1, "HTML");
// myMap.set(2, "CSS");
// console.log(myMap);

// //// set رو میتونیم به صورت زنجیره ای استفاده کنیم
// myMap.set(1, "C++").set(2, "Java").set(3, "JavaScript");
// console.log(myMap);

// myMap.set(4, "JavaScript");
// console.log(myMap);

// myMap = new Map();
// myMap.set(1, "Car").set("weight", 1000).set("color", "Blue");
// console.log(myMap);

// let person = new Map([
//   ["firstName", "Abbas"],
//   ["lastName", "Moqaddam"],
//   ["age", 33],
// ]);
// console.log(person);

// //// size تعداد عناصر داخل مجموعه
// console.log(person.size);

// //// get بهش کلید رو میدیم و مقدار رو ازش میگیریم
// console.log(person.get("lastName"));

// //// has وجود داشتن
// console.log(person.has("firstName"));
// console.log(person.has("age"));
// console.log(person.has("Abbas"));
// console.log(person.has(33));

// //// delete حذف کردن
// let a = person.delete("age"); // a = true
// let b = person.delete("myName"); // b = false
// console.log(person);

// //// clear پاک کردن کل نقشه
// person.clear();
// console.log(person);

///////////////////////////////////////////////////////

// //// object to map
// const obj = {
//   name: "Amir",
//   id: "drs56126",
//   age: 23,
// };
// console.log(obj);

// console.log(Object.entries(obj));
// const objMap = new Map(Object.entries(obj));
// console.log(objMap);

///////////////////////////////////////////////////////

// //// Map to Array
// let personMap = new Map([
//   ["firstName", "Abbas"],
//   ["lastName", "Moqaddam"],
//   ["age", 33],
// ]);
// //// way 1
// let personArray = [...personMap];
// console.log(personArray);
// //// way 2
// personArray = Array.from(personMap);
// console.log(personArray);

///////////////////////////////////////////////////////

// let personMap = new Map([
//   ["firstName", "Abbas"],
//   ["lastName", "Moqaddam"],
//   ["age", 33],
// ]);

// console.log("------------------");
// for (const key of personMap.keys()) {
//   console.log(key);
// }

// console.log("------------------");
// for (const value of personMap.values()) {
//   console.log(value);
// }

// console.log("------------------");
// for (const [key, value] of personMap.entries()) {
//   console.log(`${key} = ${value}`);
// }

// console.log("------------------");
// for (const [key, value] of personMap) {
//   console.log(`${key} = ${value}`);
// }

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Working With Strings

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const airline = "TAP Air Iran";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log("B737"[0]);
// console.log("B737"[1]);
// console.log("B737"[2]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));

// console.log(airline.indexOf("Iran"));
// console.log(airline.indexOf("iran"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));

// console.log(airline.slice(airline.lastIndexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-4));
// console.log(airline.slice(1, -1));

///////////////////////////////////////////////////////

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat 😑");
//   else console.log("You got locky 😎");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

///////////////////////////////////////////////////////

// console.log(new String("Amir"));
// console.log(typeof new String("Amir"));
// console.log(typeof new String("Amir").slice(-1));

///////////////////////////////////////////////////////

// const airline = "TAP Air Iran";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// console.log(airline.includes("Iran"));
// console.log(airline.includes("Ir"));
// console.log(airline.includes("iran"));

// console.log(airline.startsWith("TA"));
// console.log(airline.startsWith("Ap"));

// console.log(airline.endsWith("Iran"));
// console.log(airline.endsWith("Ir"));
// console.log(airline.endsWith("an"));

///////////////////////////////////////////////////////

// const email = "   AmIrabbasi3978@gmail.com   ";
// console.log(email.toLowerCase());
// console.log(email.toLowerCase().trim());

///////////////////////////////////////////////////////

// const priceGB = "285,22₤ / 485,22₤ / 885,22₤";

// const priceUS = priceGB.replace("₤", "$").replace(",", ".");
// console.log(priceUS);

// const priceUSAll = priceGB.replaceAll("₤", "$").replaceAll(",", ".");
// console.log(priceUSAll);

// //// Regular Expression / /g
// const priceUSRE = priceGB.replace(/₤/g, "$").replace(/,/g, ".");
// console.log(priceUSRE);

///////////////////////////////////////////////////////

// console.log("a+very+nice+string".split("+"));
// console.log("Amir Abbasi".split(" "));

// console.log("a+very+nice+string".split("+").join(" "));
// console.log("Amir Abbasi".split(" ").join(" "));

// const [firstName, lastName] = "Amir Abbasi".split(" ");
// console.log(firstName);
// console.log(lastName);

// const newName1 = ["Mr.", firstName, lastName.toUpperCase()];
// console.log(newName1);

// const newName2 = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName2);

///////////////////////////////////////////////////////

// console.log("Amir".padStart(25, "+"));
// console.log("Amir Abbasi".padStart(25, "+"));

// console.log("Amir".padEnd(25, "+"));
// console.log("Amir Abbasi".padEnd(25, "+"));

// console.log("Amir".padStart(20, "+").padEnd(30, "+"));
// console.log("Amir Abbasi".padStart(20, "+").padEnd(30, "+"));

///////////////////////////////////////////////////////

// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(54787897987));
// console.log(maskCreditCard(5873548754847874));
// console.log(maskCreditCard("58574878878954564546547"));

///////////////////////////////////////////////////////

// const airline = "TAP Air Iran. ";

// console.log(airline.repeat(5));
// console.log(airline.repeat(15));

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// String Methods Practice

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// const getCode = (str) => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
//     "_",
//     " "
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
//   console.log(output);
// }

///////////////////////////////////////////////////////
