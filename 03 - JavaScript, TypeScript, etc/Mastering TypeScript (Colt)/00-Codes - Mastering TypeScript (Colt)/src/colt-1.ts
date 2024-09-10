///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 03 - Type Annotation Basics

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Working With Numbers & Booleans

// let myName: string = "Amir";
// myName = "Ali";
// console.log(myName);
// console.log(myName.toUpperCase());
// //// Error
// // myName = 12;

// let myNumber: number = 10;
// myNumber += 2;
// console.log(myNumber);
// //// Error
// // myNumber = "zero";

// let myBool: boolean = true;
// myBool = false;
// //// Error
// // myBool = 12;

///////////////////////////////////////////////

// //// Type Inference
// //// میتونیم تایپ رو مشخص نکنیم و تایپ اسکریپت به صورت اتوماتیک خودش میفهمه

// let age1: number = 123_456_789;
// let age2 = 123456789;
// //// Error
// // age2 = "Amir";

// let str = "Amir";
// //// Error
// str = 12;

///////////////////////////////////////////////

// //// Any Type

// let any1: any = 123456789;
// any1 = "Amir";
// any1 = true;
// any1 = null;

///////////////////////////////////////////////

// //// Delayed Initialization & Implicit Any

// const movies = ["Arrival", "The King", "Spiderman"];
// let foundMovie1; // any
// let foundMovie2: string;

// for (let movie of movies) {
//   if (movie === "Spiderman") {
//     foundMovie1 = "Spiderman";
//     foundMovie1 = 1;
//     foundMovie2 = "Spiderman";
//     // foundMovie2 = 1; // Error
//   }
// }

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 04 - Functions

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Function Parameter Annotations

// // function square1(num) {
// //   return num * num;
// // }
// // square1(1);
// // square1("Amir");
// // square1(true);

// function square2(num: number) {
//   return num * num;
// }
// square2(1);
// // square2("Amir"); // Error
// // square2(true); // Error

///////////////////////////////////////////////

// const doSomething = (person: string, age: number, isMarrid: boolean) => {};
// doSomething("Amir", 24, false);
// doSomething("Amir", 23);
// doSomething("Amir");
// doSomething("Amir", true, 22);

///////////////////////////////////////////////

// const doSomething = (
//   person: string = "Ali",
//   age: number = 33,
//   isMarrid: boolean = true
// ) => {};

// doSomething();
// doSomething("Amir", 24, false);
// doSomething("Amir", 23);
// doSomething("Amir", true, 22);

///////////////////////////////////////////////

// //// Return Type Annotations

// function total(x: number, y: number): number {
//   return x + y;
// }
// total(10, 20);

///////////////////////////////////////////////

// //// Anonymous Function Contextual Typing

// const colors = ["red", "blue", "yellow"];
// colors.map((color) => {
//   // return color.toFixed(); // Error
//   return color.toUpperCase();
// });

///////////////////////////////////////////////

// //// The Void Type

// function total(x: number, y: number): void {
//   console.log(x + y);
//   return x + y; // Error
// }
// total(10, 20);

///////////////////////////////////////////////

// //// Never Type

// function gameLoop(): never {
//   while (true) {
//     console.log("Game Loop Running!");
//   }
//   return true;
// }

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 05 - Object Types

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Working With Object Types

// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "Amir", last: "Abbasi" });

///////////////////////////////////////////////

// const person: {
//   first: string;
//   last: string;
//   id: number;
// } = {
//   first: "Amir",
//   last: "Abbasi",
//   id: 257484987,
// };

// console.log(person.id);

///////////////////////////////////////////////

// //// این زیاد کاربردی نیست

// function mathRandom(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// console.log(mathRandom());

///////////////////////////////////////////////

// //// Creating Type Aliases

// type Person = {
//   first: string;
//   last: string;
//   id: number;
// };

// const person1: Person = {
//   first: "Amir",
//   last: "Abbasi",
//   id: 257484987,
// };

// const person2: Person = {
//   first: "Nazi",
//   last: "Sotodeh",
//   id: 546874684,
// };

// const person3: Person = {
//   first: "Ali",
//   last: "Qoli",
//   id: 184897494,
// };

///////////////////////////////////////////////

// //// Nested Objects

// type Person = {
//   first: string;
//   last: string;
//   more: { userName: string; id: number };
// };

// const person1: Person = {
//   first: "Amir",
//   last: "Abbasi",
//   more: { userName: "amirabbasi", id: 257484987 },
// };

// const person2: Person = {
//   first: "Nazi",
//   last: "Sotodeh",
//   more: { userName: "amirabbasi", id: 257484987 },
// };

// console.log(person1, person2);

///////////////////////////////////////////////

// //// Optional Properties

// type Person = {
//   first: string;
//   last: string;
//   more?: { userName: string; id: number };
// };

// const person1: Person = {
//   first: "Amir",
//   last: "Abbasi",
// };

///////////////////////////////////////////////

// //// The readonly Modifier

// let employee: {
//   id: number;
//   readonly name: string;
// } = {
//   id: 1,
//   name: "Amir",
// };

// console.log(employee);

// //// Error // name is readonly
// // employee.name = "Ali";

///////////////////////////////////////////////

// //// Intersection Types

// type Circle = {
//   radius: number;
// };

// type Colorful = {
//   color: string;
// };

// type ColorfulCircle = Circle & Colorful;

// const happyFace: ColorfulCircle = {
//   radius: 4,
//   color: "yellow",
// };

///////////////////////////////////////////////

// type Cat = {
//   numLives: number;
// };

// type Dog = {
//   breed: string;
// };

// type CatDog = Cat &
//   Dog & {
//     age: number;
//   };

// const christy: CatDog = {
//   numLives: 7,
//   breed: "Husky",
//   age: 9,
// };

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 06 - Array Types

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Working With Array Types

// //// تایپ عدد
// let number: number = 1;
// //// تایپ آرایه عددی
// let numbers: number[] = [1, 2, 3];
// let numbers2: Array<number> = [1, 2, 3];

// console.log(number);
// console.log(numbers);
// console.log(numbers2);

// //// تایپ رشته
// let string: string = "Amir";
// //// تایپ آرایه رشته ای
// let strings: string[] = ["Amir", "Ali"];
// let strings2: Array<string> = ["Amir", "Ali"];

// strings[0] = "Nazi";
// // strings[1] = 11; // Error

// console.log(string);
// console.log(strings);
// console.log(strings2);

///////////////////////////////////////////////

// type Person = {
//   first: string;
//   last: string;
//   id: number;
// };

// const person1: Person[] = [
//   {
//     first: "Amir",
//     last: "Abbasi",
//     id: 257484987,
//   },
// ];

// console.log(person1);

// ////

// const person2: Person[] = [];
// person2.push({ first: "Nazi", last: "Sotodeh", id: 666484987 });

// console.log(person2);

///////////////////////////////////////////////

// //// Multidimensional Arrays

// const str: string[][] = [
//   ["a", "b", "c"],
//   ["a", "b", "c"],
//   ["a", "b", "c"],
// ];
// console.log(str);

// //// توصیه میشه از این کار پرهیز کنیم چون خیلی پیچیده میشه
// const num: number[][][] = [[[1], [1]], [[2]], [[3]]];
// console.log(num);

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 07 - Union Types

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Introducing Union Types

// let age: number | string = 21;
// age = 23;
// age = "25";

// ////

// type Point = {
//   x: number;
//   y: number;
// };

// type Loc = {
//   lat: number;
//   long: number;
// };

// let coordinates: Point | Loc = { x: 3, y: 20 };
// console.log(coordinates);

// coordinates = { lat: 321.365, long: 658.548 };
// console.log(coordinates);

///////////////////////////////////////////////

// //// Union Types with Function

// function printAge(age: number | string): void {
//   console.log(age);
// }
// printAge(23);
// printAge("26");

///////////////////////////////////////////////

// //// Type Narrowing

// function calculateTax(price: number | string, tax: number) {
//   if (typeof price === "string") {
//     price = parseFloat(price.replace("$", ""));
//   }
//   return price * tax;
// }

// console.log(calculateTax("2", 8));
// console.log(calculateTax(2, 8));

///////////////////////////////////////////////

// //// Union Types and Arrays

// const myArr1: number | string[] = 2;
// const myArr2: number | string[] = ["A", "B"];

// const myArr3: number[] | string[] = ["A"];
// const myArr4: number[] | string[] = [1];

// const myArr5: (number | string)[] = ["A", 1];

///////////////////////////////////////////////

// //// Literal Types

// type X = 50 | 100;

// let x1: X = 50;
// let x2: X = 100;
// //// Error
// // let x3: X = 101;

// ////

// type Z = "z" | "Z";

// let z1: Z = "Z";
// let z2: Z = "z";
// //// Error
// // let z3: Z = "x";

///////////////////////////////////////////////

// //// Literal Types

// type DayOfWeek =
//   | "Monday"
//   | "Tuesday"
//   | "Wednesday"
//   | "Thursday"
//   | "Friday"
//   | "Saturday"
//   | "Sunday";

// let today: DayOfWeek = "Friday";

// ////

// type Amir = "Amir" | 23 | false;

// let fname: Amir = "Amir";
// let age: Amir = 23;
// let married: Amir = false;

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 08 - Tuples and Enums

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Introducing Tuples

// const rgb: [number, number, number] = [89, 68, 58];

// ////

// type HTTPResponse = [number, string];

// const goodRes: HTTPResponse = [200, "OK"];
// console.log(goodRes);

// // const goodRes2: HTTPResponse = [200, "OK", 300]; // Error
// // const goodRes3: HTTPResponse = [200]; // Error

// goodRes.push(300); // این یکی از جاهایی که کلی سوال راجبش هس که چرا این عملکرد به وجود میاد و این برمیگرده به منطق آرایه ها در جاوا اسکریپت
// console.log(goodRes);

// goodRes.pop();
// goodRes.pop();
// console.log(goodRes);

// const responses: HTTPResponse[] = [
//   [200, "OK"],
//   [400, "Bad Request"],
//   [404, "Not Found"],
// ];
// console.log(responses);

// //// زیاد از تاپل ها استفاده نکنید

///////////////////////////////////////////////

// //// Introducing Enums

///////////////////////////////////////////////

// //// const small = 1;
// //// const medium = 2;
// //// const large = 3;

// //// بصورت پیش فرض اولین خانه اینام مقدار صفر رو میگیره
// const enum Size {
//   Small,
//   Medium,
//   Large,
// }
// //// Small = 0 , Medium = 1 , Large = 2

// let mySize1: Size = Size.Small;
// console.log(mySize1);

// let mySize2: Size = Size.Medium;
// console.log(mySize2);

// let mySize3: Size = Size.Large;
// console.log(mySize3);

///////////////////////////////////////////////

// const enum Size {
//   Small = 5,
//   Medium,
//   Large,
// }
// //// Small = 5 , Medium = 6 , Large = 7

// let mySize: Size = Size.Small;
// console.log(mySize);

///////////////////////////////////////////////

// const enum Size {
//   Small = 2,
//   Medium = 7,
//   Large,
// }
// //// Small = 2 , Medium = 7 , Large = 8

// let mySize: Size = Size.Large;
// console.log(mySize);

///////////////////////////////////////////////

// const enum Size {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// let mySize: Size = Size.Small;
// console.log(mySize);

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 09 - Interfaces

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Type Alias

// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 215, y: 36 };

///////////////////////////////////////////////

// //// Introducing Interfaces

// interface Point {
//   x: number;
//   y: number;
// }

// const pt: Point = { x: 215, y: 36 };

///////////////////////////////////////////////

// //// Readonly and Optional Interface Properties

// interface Person {
//   readonly id: number;
//   first: string;
//   last: string;
//   nick?: string;
//   // sayHi: () => string;
//   sayHi(): string;
// }

// const amir: Person = {
//   id: 56787,
//   first: "Amir",
//   last: "Abbasi",
//   sayHi() {
//     return "Hi";
//   },
// };

// amir.first = "Nazi";
// // amir.id = 25648; // Error

///////////////////////////////////////////////

// //// Interface Methods & Method Parameters

// interface Product {
//   name: string;
//   price: number;
//   applayDiscount(discount: number): number;
// }

// const shoes: Product = {
//   name: "Blue Suede Shoes",
//   price: 100,
//   //// (amount) میتونه پارامتر ورودی متود هر اسمی به خودش بگیره
//   applayDiscount(amount: number) {
//     const newPrice = this.price * (1 - amount);
//     this.price = newPrice;
//     return this.price;
//   },
// };

// console.log(shoes.applayDiscount(0.4));

///////////////////////////////////////////////

// //// Reopening Interfaces

// interface Dog {
//   name: string;
//   age: number;
// }

// interface Dog {
//   breed: string;
//   bark(): string;
// }

// const elton: Dog = {
//   name: "Elton",
//   age: 2,
//   breed: "Australian Shapherd",
//   bark() {
//     return "WOOF WOOF!";
//   },
// };

// console.log(elton);

// //// Extending Interfaces

// interface ServiceDog extends Dog {
//   job: "drug sniffer" | "bomb" | "guide dog";
// }

// const chewy: ServiceDog = {
//   name: "Chewy",
//   age: 3,
//   breed: "Lab",
//   bark() {
//     return "Bark!";
//   },
//   job: "guide dog",
// };

// console.log(chewy);

///////////////////////////////////////////////

// //// Interface Multiple Inheritance

// interface Person {
//   name: string;
// }

// interface Employee {
//   readonly id: number;
//   email: string;
// }

// interface Engineer extends Person, Employee {
//   level: string;
//   languages: string[];
// }

// const amir: Engineer = {
//   name: "Amir",
//   id: 3978,
//   email: "abbasidev@outlook.com",
//   level: "Senior",
//   languages: ["JavaScript", "TypeScript"],
// };

// console.log(amir);

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 10 - The TypeScript Compiler

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// No Codes

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 11 - Mini Project The DOM, Type Assertions, and More!

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Type Assertions With the DOM

// //// Way 1
// const btn = document.getElementById("btn");
// const todo = document.getElementById("todo")! as HTMLInputElement;

// btn?.addEventListener("click", function () {
//   alert(todo.value);
//   todo.value = "";
// });

///////////////////////////////////////////////

// //// Way 2
// const btn = document.getElementById("btn")!;
// const todo = document.getElementById("todo")! as HTMLInputElement;

// btn.addEventListener("click", function () {
//   alert(todo.value);
//   todo.value = "";
// });

///////////////////////////////////////////////

// //// Way 3
// const btn = document.getElementById("btn")! as HTMLButtonElement;
// const todo = document.getElementById("todo")! as HTMLInputElement;

// btn.addEventListener("click", function () {
//   alert(todo.value);
//   todo.value = "";
// });

///////////////////////////////////////////////

// //// Working With Events

// //// Way 1
// const btn = document.getElementById("btn")! as HTMLButtonElement;
// const todo = document.getElementById("todo")! as HTMLInputElement;
// const form = document.getElementById("form")!;

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("Submitted!!!");
// });

///////////////////////////////////////////////

// //// Way 2
// const btn = document.getElementById("btn")! as HTMLButtonElement;
// const todo = document.getElementById("todo")! as HTMLInputElement;
// const form = document.getElementById("form")!;

// function handeleSubmit(e: SubmitEvent) {
//   e.preventDefault();
//   console.log("Submitted!!!");
// }

// form.addEventListener("submit", handeleSubmit);

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 12 - Classes

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// مربوط به جاوااسکریپت بود

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 13 - TypeScript Classes

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Annotating Classes In TypeScript
// //// Class Fields In TypeScript
// //// readonly Class Properties

// class player {
//   readonly first: string;
//   readonly last: string;
//   score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
// }

// const elton = new player("Elton", "Steele");

///////////////////////////////////////////////

// //// The public Modifier
// //// The private Modifier

// class player {
//   //// public در حالت پیش فرض تمام عناصر کلاس پابلیک هستند اما در تایپ اسکریپت برای خوانایی بیشتر این کارو انجام میدیم در اصل بودو نبودش تاثیری نداره
//   public readonly first: string;
//   public readonly last: string;
//   //// private فقط داخل کلاس در دسترس هس و در بیرون کلاس به اون دسترسی نداریم
//   private score: number = 0; // way 1 (just in ts available)
//   //   #score: number = 0; // way 2 (js)

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secretMethod(): void {
//     console.log("SECRET METHOD");
//   }
// }

// const elton = new player("Elton", "Steele");

///////////////////////////////////////////////

// //// Parameter Properties Shorthand
// //// خلاصه کردن نوشتن کلاس ها

// class player {
//   //////   public first: string;
//   //////   public last: string;
//   //////   private score: number = 0;

//   constructor(
//     public first: string,
//     public last: string,
//     private score: number = 0
//   ) {
//     ////// this.first = first;
//     ////// this.last = last;
//   }

//   private secretMethod(): void {
//     console.log("SECRET METHOD");
//   }
// }

// const elton = new player("Elton", "Steele");
// elton.first;

///////////////////////////////////////////////

// //// Getters and Setters

// class player {
//   constructor(
//     public first: string,
//     public last: string,
//     private _score: number
//   ) {}

//   private secretMethod(): void {
//     console.log("SECRET METHOD");
//   }

//   get fullName(): string {
//     return `${this.first} ${this.last}`;
//   }

//   get score(): number {
//     return this._score;
//   }

//   set score(newScore: number) {
//     if (newScore < 0) {
//       throw new Error("Score canot be negative!🥺🥺");
//     }
//     this._score = newScore;
//   }
// }

// const elton = new player("Elton", "Steele", 0);

// console.log(elton.first);
// console.log(elton.last);
// // console.log(elton._score);
// console.log(elton.score);
// console.log(elton.fullName);

// elton.score = 99;
// console.log(elton.score);

// elton.score = -1;
// console.log(elton.score);

///////////////////////////////////////////////

// //// The Protected Modifier

// class player {
//   constructor(
//     public first: string,
//     public last: string,
//     // private _score: number // private در کلاس های فرزند به پرایوت دسترسی نداریم
//     protected _score: number // در کلاس های فرزند به پروتکتد دسترسی داریم
//   ) {}

//   private secretMethod(): void {
//     console.log("SECRET METHOD");
//   }

//   get fullName(): string {
//     return `${this.first} ${this.last}`;
//   }

//   get score(): number {
//     return this._score;
//   }

//   set score(newScore: number) {
//     if (newScore < 0) {
//       throw new Error("Score canot be negative!🥺🥺");
//     }
//     this._score = newScore;
//   }
// }

// class SuperPlayer extends player {
//   public isAdmin: boolean = true;
//   maxScore() {
//     this._score = 99999;
//   }
// }

// const elton = new player("Elton", "Steele", 0);

///////////////////////////////////////////////

// //// Classes and Interfaces

// interface Colorful {
//   color: string;
// }

// interface Printable {
//   print(): void;
// }

// class Bike implements Colorful, Printable {
//   constructor(public color: string) {}
//   print(): void {
//     console.log(`${this.color} bike.`);
//   }
// }

// const bike1 = new Bike("red");
// bike1.print();

// class Jacket implements Colorful {
//   constructor(public brand: string, public color: string) {}
// }

// const jacket1 = new Jacket("Nike", "blue");

///////////////////////////////////////////////

// //// Creating Abstract Classes

// abstract class Employee {
//   constructor(public first: string, public last: string) {}
//   abstract getPay(): number;
//   greet() {
//     console.log("Hello!");
//   }
// }

// class FullTimeEmployee extends Employee {
//   constructor(first: string, last: string, private salary: number) {
//     super(first, last); // دسترسی به کانستراکتور والد با سوپر
//   }
//   getPay(): number {
//     return this.salary;
//   }
// }

// class PartTimeEmployee extends Employee {
//   constructor(
//     first: string,
//     last: string,
//     private hourlyRate: number,
//     private hoursWorked: number
//   ) {
//     super(first, last); // دسترسی به کانستراکتور والد با سوپر
//   }
//   getPay(): number {
//     return this.hourlyRate * this.hoursWorked;
//   }
// }

// const betty = new FullTimeEmployee("Betty", "White", 95000);
// console.log(betty.getPay());

// const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
// console.log(bill.getPay());

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 14 - Generics

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Writing Our First Generic

// //// Not Good
// function numberIdentity(item: number): number {
//   return item;
// }

// function stringIdentity(item: string): string {
//   return item;
// }

// function booleanIdentity(item: boolean): boolean {
//   return item;
// }

// //// Bad Way
// function anyIdentity(item: any): any {
//   return item;
// }

// //// Good Way

// //// function identity<Type>(item: Type): Type {
// ////   return item;
// //// }

// function identity<T>(item: T): T {
//   return item;
// }
// identity<string>("Amir");
// identity<number>(8);
// identity<boolean>(true);

///////////////////////////////////////////////

// //// Writing Another Generic Function
// //// Inferred Generic Type Parameters

// function getRandomElement<T>(list: T[]): T {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }

// const rString1 = getRandomElement<string>(["Amir", "Ali", "Afshin"]);
// console.log(rString1);

// const rNumber1 = getRandomElement<number>([111, 222, 333, 444, 555]);
// console.log(rNumber1);

// const rNumber2 = getRandomElement([111, 222, 333, 444, 555]); // میتونیم تایپ رو ندیم و بصورت اتوماتیک خودش تشخیص میده اما بهتره بدیم و کدهامون تمیز باشه
// console.log(rNumber2);

///////////////////////////////////////////////

// //// Generics With Multiple Types

// //// Pattern = A,B,C
// //// Pattern = G,H,I
// //// Pattern = T,U,V,W --- رایج ترین
// //// Pattern = X,Y,Z
// //// Pattern = ...
// //// بهتره طبق این پترن بر اساس ترتیب حروف الفبای انگلیسی نام گذاری کنیم

// function merge<T, U>(object1: T, object2: U) {
//   return {
//     ...object1,
//     ...object2,
//   };
// }
// const combObj = merge({ name: "Colt" }, { pets: ["Blue", "Elton"] });
// console.log(combObj);
// const combObj2 = merge({ name: "Colt" }, 666); //// 666 نادیده گرفته میشود مراجعه به مثال بعد
// console.log(combObj2);

///////////////////////////////////////////////

// //// Adding Type Constraints

// function merge<T extends object, U extends object>(object1: T, object2: U) {
//   return {
//     ...object1,
//     ...object2,
//   };
// }
// const combObj = merge({ name: "Colt" }, { pets: ["Blue", "Elton"] });
// console.log(combObj);
// // const combObj2 = merge({ name: "Colt" }, 666); //// Error
// // console.log(combObj2);

///////////////////////////////////////////////

// interface Lengthy {
//   length: number;
// }

// function printDoubleLength1<T extends Lengthy>(thing: T): Number {
//   return thing.length * 2;
// }

// function printDoubleLength2(thing: Lengthy): Number {
//   return thing.length * 2;
// }

// //// printDoubleLength1 === printDoubleLength2
// //// هر دو یکار رو انجام میدهند

// console.log(printDoubleLength1("AAAA"));
// console.log(printDoubleLength1("BBB"));

// console.log(printDoubleLength2("CC"));
// console.log(printDoubleLength2("D"));

///////////////////////////////////////////////

// //// Default Type Parameters

// function makeEmptyArray<T = number>(): T[] {
//   return [];
// }

// const str1 = makeEmptyArray(); // str1 return default parameter (number)
// const num1 = makeEmptyArray(); // num1 return default parameter (number)

// const str2 = makeEmptyArray<string>(); // str2 return string
// const bool1 = makeEmptyArray<boolean>(); // bool1 return boolean

///////////////////////////////////////////////

// //// Writing Generic Classes

// interface Song {
//   title: string;
//   artist: string;
// }

// interface Video {
//   title: string;
//   creator: string;
//   resolution: string;
// }

// //// class VideoPlaylist {
// ////   public videos: Video[] = [];
// //// }

// //// class SongPlaylist {
// ////   public song: Song[] = [];
// //// }

// class Playlist<T> {
//   public queue: T[] = [];
//   add(el: T) {
//     this.queue.push(el);
//   }
// }

// const songs = new Playlist<Song>();
// const videos = new Playlist<Video>();

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 15 - Type Narrowing
//// بعضی قسمتا فهمیده نشده

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Typeof Guards

// function triple(value: number | string) {
//   if (typeof value === "string") {
//     return value.repeat(3); // برای استفاده از راه دوم حتما باید این مقدار ریترن بشه
//   }
//   ////// way 1
//   //   if (typeof value === "number") {
//   //     return value * 3;
//   //   }
//   ////// way 2
//   ////// (typeof value === "string"){ return value.repeat(3) }
//   ////// حتما باید ریترن کنیم کدهای بالا رو تا تایپ اسکریپت تشخیص بده که مقدار استرینگی کارش به پایان رسیده و با خیال راحت مقدار پایین رو نامبر تشخیص خواهد داد
//   return value * 3;
// }

// console.log(triple(3));
// console.log(triple("A"));

///////////////////////////////////////////////

// //// Truthiness Guards

// const printLetters = (word?: string) => {
//   if (word) {
//     for (let char of word) {
//       console.log(char);
//     }
//   } else {
//     console.log("YOU DID NOT PASS IN A WORD!");
//   }
// };

///////////////////////////////////////////////

// //// Equality Narrowing

// function someDemo(x: string | number, y: string | boolean) {
//   if (x === y) {
//     x.toUpperCase();
//   }
//   //   if (x == y) {
//   //     x.toUpperCase();
//   //   }
// }
// console.log(someDemo(2, "2"));

///////////////////////////////////////////////

// //// Narrowing With The In Operator

// interface Movie {
//   title: string;
//   duration: number;
// }

// interface TVShow {
//   title: string;
//   numEpisodes: number;
//   episodeDuration: number;
// }

// function getRuntime(media: Movie | TVShow) {
//   if ("numEpisodes" in media) {
//     return media.numEpisodes * media.episodeDuration; // حتما باید ریترن بشه  تا تایپ اسکریپت بفهمه که کار با تیوی شو انجام شده و بعدی رو مووی در نظر میگیره
//   }
//   return media.duration;
// }

// console.log(getRuntime({ title: "Amadeus", duration: 140 }));
// console.log(
//   getRuntime({ title: "Friends", numEpisodes: 200, episodeDuration: 20 })
// );

///////////////////////////////////////////////

// ///// Instanceof Narrowing

// function printFullDate(date: string | Date) {
//   if (date instanceof Date) {
//     console.log(date.toUTCString());
//   } else {
//     console.log(new Date(date).toUTCString());
//   }
// }

///////////////////////////////////////////////

// class User {
//   constructor(public username: string) {}
// }

// class Company {
//   constructor(public name: string) {}
// }

// function printName(entity: User | Company) {
//   if (entity instanceof User) {
//     entity; // hover entity to see type
//   } else {
//     entity; // hover entity to see type
//   }
// }

///////////////////////////////////////////////

// //// Working With Type Predicates

// interface Cat {
//   name: string;
//   numLives: number;
// }

// interface Dog {
//   name: string;
//   breed: string;
// }

// function isCat(animal: Cat | Dog): animal is Cat {
//   return (animal as Cat).numLives !== undefined;
// }

// function makeNoise(animal: Cat | Dog): string {
//   if (isCat(animal)) {
//     animal; // hover animal to see type
//   } else {
//     animal; // hover animal to see type
//   }
// }

///////////////////////////////////////////////

// //// Discriminated Unions

// interface Rooster {
//   name: string;
//   weight: number;
//   age: number;
//   kind: "rooster";
// }

// interface Cow {
//   name: string;
//   weight: number;
//   age: number;
//   kind: "cow";
// }

// interface Pig {
//   name: string;
//   weight: number;
//   age: number;
//   kind: "pig";
// }

// type FarmAnimal = Rooster | Cow | Pig;

// function getFarmAnimalSound(animal: FarmAnimal) {
//   switch (animal.kind) {
//     case "rooster":
//       return "rooooosteeeeer";
//     case "cow":
//       return "coooooooooooow";
//     case "pig":
//       return "piiiiiiiiiiiig";
//   }
// }

// const stevie: Rooster = {
//   name: "Stevie Chicks",
//   weight: 2,
//   age: 1.5,
//   kind: "rooster",
// };
// console.log(getFarmAnimalSound(stevie));

///////////////////////////////////////////////

// //// Exhaustiveness Checks With Never

// interface Rooster {
//   name: string;
//   weight: number;
//   age: number;
//   kind: "rooster";
// }

// interface Cow {
//   name: string;
//   weight: number;
//   age: number;
//   kind: "cow";
// }

// interface Pig {
//   name: string;
//   weight: number;
//   age: number;
//   kind: "pig";
// }

// interface Sheep {
//   name: string;
//   weight: number;
//   age: number;
//   kind: "sheep";
// }

// type FarmAnimal = Rooster | Cow | Pig | Sheep;

// function getFarmAnimalSound(animal: FarmAnimal) {
//   switch (animal.kind) {
//     case "rooster":
//       return "rooooosteeeeer";
//     case "cow":
//       return "coooooooooooow";
//     case "pig":
//       return "piiiiiiiiiiiig";
//     case "sheep":
//       return "sheeeeeeeeeeep";
//     default:
//       const _exhaustiveCheck: never = animal;
//       return _exhaustiveCheck;
//     //// اگه یک کیس نباشه یا مشکلی داشته باشه این کد به ما ارور میده
//   }
// }

// const stevie: Rooster = {
//   name: "Stevie Chicks",
//   weight: 2,
//   age: 1.5,
//   kind: "rooster",
// };
// console.log(getFarmAnimalSound(stevie));

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 16 - Working With Type Declarations
//// کدی نداره اما بعدها دوباره دیده شود
//// Lodash / Axios , more در تایپ اسکریپت

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 17 - Modules
//// کدی نداشت یسری موارد عکس گرفته شد و در جزوه یچیزایی نوشته شد

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 18 - Webpack & TypeScript
//// Optional (مهم نیست)

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 19 - React & TypeScript
//// بعد از ری اکت دوره ی جداگانه ری اکت و تایپ اسکریپت میبنم اینم میبینم ولی در یک پوشه دیگه کدها زده میشه و پرونده این دوره بسته شده است

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
