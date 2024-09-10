///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 01

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// let age1: number = 123456789;
// let age2: number = 123_456_789;
// let age3 = 123456789;
// //// میتونیم تایپ رو مشخص نکنیم و تایپ اسکریپت به صورت اتوماتیک خودش میفهمه
// console.log(age1, age2, age3);

// let course1: string = "Amir";
// let course2 = "Amir";
// console.log(course1, course2);

// let is_published1: boolean = true;
// let is_published2 = true;
// console.log(is_published1, is_published2);

///////////////////////////////////////////////

// function render(document: any) {
//   console.log(document);
// }
// render(4);
// render("amir");
// render(true);
// render(null);
// render(undefined);

///////////////////////////////////////////////

// //// تایپ عدد
// let number: number = 1;
// //// تایپ آرایه عددی
// let numbers: number[] = [1, 2, 3];

// console.log(number);
// console.log(numbers);

// //// تایپ رشته
// let string: string = "Amir";
// //// تایپ آرایه رشته ای
// let strings: string[] = ["Amir", "Ali"];

// console.log(string);
// console.log(strings);

// //// تاپل Tuple
// let user: [number, string] = [1, "Amir"];

// //// متود push
// //// به هیچ وجه این کار انجام نشود چون ساختار تاپل بهم میریزد
// //// یکی از نقاط کور در تاپل تایپ اسکریپت
// user.push(2);

// console.log(user);

///////////////////////////////////////////////

// //// const small = 1;
// //// const medium = 2;
// //// const large = 3;

// // Enum
// // بصورت پیش فرض اولین خانه اینام مقدار صفر رو میگیره
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

///////////////////////////////////////////////

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// //// Small = 1 , Medium = 2 , Large = 3

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

// //// Functions
// //// void به معنای خالی
// function calcAge(birthYear: number): void {}
// console.log(calcAge(1991));
// console.log(calcAge(1999));

///////////////////////////////////////////////

// //// Functions
// function calcAge(birthYear: number): number {
//   return 2023 - birthYear;
// }
// console.log(calcAge(1991));
// console.log(calcAge(1999));222222222

///////////////////////////////////////////////

// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear > 500) {
//     return income * 1.2;
//   } else {
//     return income * 2.2;
//   }
// }

// console.log(calculateTax(10, 555));
// console.log(calculateTax(10, 444));

// //// Error
// // console.log(calculateTax(10));
// // console.log(calculateTax(10, 444, 11));

///////////////////////////////////////////////

// function calculateTax(income: number, taxYear: number = 555): number {
//   if (taxYear > 500) {
//     return income * 1.2;
//   } else {
//     return income * 2.2;
//   }
// }
// console.log(calculateTax(10));

///////////////////////////////////////////////

// //// Objects
// let employee: {
//   id: number;
//   // name: string;
//   name?: string;
// } = {
//   id: 1,
//   // name: "Amir",
// };

///////////////////////////////////////////////

// let employee1: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "Amir",
// };
// employee1.name = "Ali";
// console.log(employee1);

// ////

// let employee2: {
//   id: number;
//   //// readonly
//   readonly name: string;
// } = {
//   id: 1,
//   name: "Amir",
// };

// //// Error
// // employee2.name = "Ali";
// console.log(employee2);

///////////////////////////////////////////////

// let employee1: {
//   id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Amir",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// console.log(employee1);

// ////

// let employee2: {
//   id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 2,
//   name: "Ali",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// console.log(employee2);

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 02

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Type Alias

// type Employee = {
//   id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee1: Employee = {
//   id: 1,
//   name: "Amir",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// let employee2: Employee = {
//   id: 2,
//   name: "Ali",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// console.log(employee1);
// console.log(employee2);

///////////////////////////////////////////////

// //// Union Type | اجتماع تایپ
// //// | یا

// function kgToLbs(weight: number | string): number {
//   //// Narrowing the Type
//   if (typeof weight === "number") {
//     return weight;
//   } else {
//     return Number(weight);
//   }
// }
// console.log(kgToLbs(50));
// console.log(kgToLbs("50"));
// console.log(kgToLbs("Amir"));

///////////////////////////////////////////////

// type Dragable = {
//   drag: () => void;
// };

// type Resizeable = {
//   resize: () => void;
// };

// //// ترکیب دو تایپ (نوع) داده

// //// Intersection Type & اشتراک تایپ
// //// & و
// type UIWidget1 = Dragable & Resizeable;

//// Union Type | اجتماع تایپ
// //// | یا
// type UIWidget2 = Dragable | Resizeable;

// let textBox1: UIWidget1 = {
//   drag: () => {},
//   resize: () => {},
// };

// let textBox2: UIWidget2 = {
//   resize: () => {},
// };

///////////////////////////////////////////////

// //// Literal Type

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

// //// Nullable Type

// function greet(name: string | null | undefined) {
//   if (name) {
//     console.log(name.toUpperCase());
//   } else {
//     console.log("invalid argument");
//   }
// }
// greet("Amir Abbasi");
// greet(null);
// greet(undefined);

///////////////////////////////////////////////

// //// optional chaining

// const persons = {
//   reza: {
//     job: "Front-End Developer",
//   },
// };

// //// way 1
// console.log(persons.reza && persons.reza.job);

// //// way 2
// console.log(persons?.reza?.job);

///////////////////////////////////////////////

// type Employee = {
//   id: number;
//   name?: string;
//   retire: (date: Date) => void;
// };

// let employee1: Employee = {
//   id: 1,
//   //   name: "Amir",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// console.log(employee1);

///////////////////////////////////////////////

// let log: any = null;

// //// Error
// // log("n");

// log?.("n");

///////////////////////////////////////////////

// //// Nullish Operator

// let speed1: null | number = null;
// let speed2: undefined | number = undefined;
// let speed3: null | number = 12;

// console.log(speed1 ?? 444);
// console.log(speed2 ?? 666);
// console.log(speed3 ?? 888);

///////////////////////////////////////////////

// let phone1 = document.getElementById("phone");
// phone1.value;

// //// Type Assertion اطلاعات بیشتر دادن به تایپ اسکریپت راجب یک المنت یا هرچیزی

// //// way 1
// let phone2 = document.getElementById("phone") as HTMLInputElement;
// phone2.value;

// //// way 2
// let phone3 = <HTMLInputElement>document.getElementById("phone");
// phone3.value;

// //// way 1 , way 2 کار یکسانی رو انجام میدهند

///////////////////////////////////////////////

// //// Unknown ناشناخته معنیشه

// function render(document: unknown) {
//   if (typeof document === "string") {
//     console.log("It's String");
//   } else if (typeof document === "number") {
//     console.log("It's Number");
//   } else {
//     console.log("It's Unknown");
//   }
// }
// render("Ali");
// render(12);
// render(true);

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

//// 03

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Build Class

// //// Modifier به معنای اصلاح کننده

// class Account {
//   //   readonly id: number; // Readonly Modifier
//   //   name: string;
//   //   private _balance: number; // Private Modifier
//   nickName?: string; // ? Optional Modifier

//   constructor(
//     public readonly id: number,
//     public name: string,
//     private _balance: number
//   ) {
//     // this.id = id;
//     // this.name = name;
//     // this._balance = balance;
//   }

//   deposite(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid amount");
//     }
//     this._balance += amount;
//   }

//   private xxx() {
//     console.log("xxx");
//   }
// }

// let account1 = new Account(1, "Amir", 0);
// console.log(account1);

// account1.deposite(100);

// console.log(account1);

// console.log(account1.id);
// // console.log(account1._balance); // Error

// console.log(typeof account1);

// console.log(account1 instanceof Account);

///////////////////////////////////////////////

// //// Dynamic Property

// class SeatAssignment {
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();

// seats.A1 = "Amir";
// seats["A2"] = "Ali";
// seats.A3 = "Nazi";
// // seats.A4 = 44; // Error

///////////////////////////////////////////////

// //// Static Members

// class Ride {
//   activeRides1: number = 0;
//   static activeRides2: number = 0;
// }

// let ride1 = new Ride();

// ride1.activeRides1 = 11;
// console.log(ride1.activeRides1);
// // ride1.activeRides2 = 11; // Error

// Ride.activeRides2 = 22;
// console.log(Ride.activeRides2);

///////////////////////////////////////////////

// //// Inheritance & More = 01:05:00

///////////////////////////////////////////////

// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// //// interface = میتونیم شکل آبجکتمون رو توصیف کنیم

// interface Calendar {
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// }

// interface CloudCalendar extends Calendar {
//   sync(): void;
// }

// class GoogleCalendar implements Calendar {
//   constructor(public name: string) {}
//   addEvent(): void {}
//   removeEvent(): void {}
// }

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 04

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// //// Generic Class

// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair1 = new KeyValuePair<number, string>(1, "A");

// let pair2 = new KeyValuePair<string, string>("A", "B");

// //// میتونیم نوع رو مشخص نکنیم و بصورت اتوماتیک خودش تشخیص میده اما بهتره نوع رو مشخص کنیم

// let pair3 = new KeyValuePair("A", "B");

///////////////////////////////////////////////

// //// Generic Function

// function wrapInArray<N>(value: N) {
//   return [value];
// }

// let number = wrapInArray<number>(77);

///////////////////////////////////////////////

// //// Generic Method

// class ArrayUtils {
//   wrapInArray<N>(value: N) {
//     return [value];
//   }
// }

// let utils = new ArrayUtils();
// utils.wrapInArray<number>(77);

///////////////////////////////////////////////

// //// Generic Static Method

// class ArrayUtils {
//   static wrapInArray<N>(value: N) {
//     return [value];
//   }
// }

// ArrayUtils.wrapInArray<number>(77);

///////////////////////////////////////////////

// //// Generic Interface //// 00.14.00

// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// fetch<User>("url");
// fetch<Product>("url");

///////////////////////////////////////////////

// //// 1 اعمال محدودیت

// function echo<T>(value: T): T {
//   return value;
// }

// echo(1);
// echo("Amir");
// echo(true);

///////////////////////////////////////////////

// // //// 2 اعمال محدودیت

// function echo<T extends number | string>(value: T): T {
//   return value;
// }

// echo(1);
// echo("Amir");
// // echo(true); // Error

///////////////////////////////////////////////

// //// 3 اعمال محدودیت

// function echo<T extends { name: string }>(value: T): T {
//   return value;
// }

// echo({ name: "Amir" });

///////////////////////////////////////////////

// //// 4 اعمال محدودیت

// interface Person {
//   name: string;
// }

// function echo<T extends Person>(value: T): T {
//   return value;
// }

// echo({ name: "Amir" });

///////////////////////////////////////////////

// //// 5 اعمال محدودیت

// class Person {
//   constructor(public name: string) {}
// }

// class Customer extends Person {}

// function echo<T extends Person>(value: T): T {
//   return value;
// }

// echo(new Person("Amir"));
// echo(new Customer("Ali"));

///////////////////////////////////////////////

// //// وراثت در کلاس های جنریک

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   private _objects: T[] = [];
//   add(obj: T): void {
//     this._objects.push(obj);
//   }
// }

// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// let store = new CompressibleStore<Product>();
// store.add;
// store.compress;

///////////////////////////////////////////////

// //// keyof

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   private _objects: T[] = [];
//   add(obj: T): void {
//     this._objects.push(obj);
//   }

//   find(property: keyof T, value: unknown): T | undefined {
//     return this._objects.find((obj) => obj[property] === value);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: "a", price: 44 });
// store.find("name", "Amir");
// store.find("price", 77);
// // store.find("anyThing", 77);// Error

///////////////////////////////////////////////

// //// Type Mapping

// interface Product {
//   name: string;
//   price: number;
// }

// //// Bad Way
// interface ReadOnlyProduct {
//   readonly name: string;
//   readonly price: number;
// }

// //// Good Way
// type ReadOnly<T> = {
//   readonly [K in keyof T]: T[K];
// };

// let product: ReadOnly<Product> = {
//   name: "Amir",
//   price: 77,
// };

// ////

// type Optional<T> = {
//   [K in keyof T]?: T[K];
// };

// type Nullable<T> = {
//   [K in keyof T]?: T[K] | null;
// };

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 05
//// Decorator
//// این نیاز نیست چون اکثر فریمورک ها اینارو به صورت داخلی توی خودشون دارن و ما نیازی نیست این موضوع رو بلد باشیم

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 06
//// Modules
//// قبلا از جاوا اسکریپت اینارو یاد گرفتم

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 07
//// کدی نداشت

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 08
//// React + TypeScript
//// دیده نشده

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//// 09
//// Node + TypeScript
//// دیده نشده

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
