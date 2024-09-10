"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Constructor Functions and the new Operator
//// Prototypes
//// Prototypal Inheritance on Built-In Objects

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ////
// //// Constructor Functions and the new Operator
// ////

// //// new کارهایی که انجام میده
// //// 1. New {} is created
// //// 2. function is called, this = {}
// //// 3. {} linked to prototype
// //// 4. function automatically return {}

// const Person = function (firstName, birthYear) {
//   //// instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   ////
//   //// Never to this code //// Prototypes = راه حل
//   //// ممکنه دها هزار نفر رو بخوایم محاسبه کنیم
//   //// باید از پروتوتایپ و پروتوتایپال اینهریتنز استفاده کنیم
//   //   this.calcAge = function () {
//   //     console.log(2023 - birthYear);
//   //     };
//   ////
// };
// //// amir instance of Person امیر یک نمونه از پرسن است
// const amir = new Person("Amir", 1999);
// //// ali instance of Person علی یک نمونه از پرسن است
// const ali = new Person("Ali", 1991);
// console.log(amir, ali);

// const nazi = "Nazi";

// console.log(amir instanceof Person);
// console.log(ali instanceof Person);
// console.log(nazi instanceof Person);

// ////
// //// Prototypes = نمونه اولیه
// ////

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };
// console.log(Person.prototype);

// amir.calcAge();
// ali.calcAge();

// //// __proto__ === {} linked to prototype پروتو توسط این مرحله ایجاد میشود
// //// new کارهایی که انجام میده
// //// 3. {} linked to prototype

// console.log(amir.__proto__);
// console.log(amir.__proto__ === Person.prototype);
// //// prototype : prototype of linked objects
// console.log(Person.prototype.isPrototypeOf(amir));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = "Home Sapiens";
// console.log(amir, ali);
// console.log(amir.species, ali.species);

// console.log(amir.hasOwnProperty("firstName"));
// console.log(amir.hasOwnProperty("species"));
// //// species پراپرتیی که داخل آبجکت امیر باشد نیست
// //// در اصل بخاطر پروتوتایپ به آبجکت امیر دسترسی دارد

// ////
// //// Prototypal Inheritance on Built-In Objects
// ////

// console.log(amir.__proto__);
// console.log(amir.__proto__.__proto__);
// console.log(amir.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

/////////////////////////////////////////////////

// const arr = [1, 2, 2, 3, 3, 4];
// console.log(arr.__proto__ === Array.prototype);
// console.log(Array.prototype);
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// //// Add prototype فقط برای آزمایش
// //// به دلایل زیادی این کار رو نباید انجام بدیم
// //// شاید بعدها جاوا اسکریپت یک پروتوتایپ با همان نام معرفی کرد و این میتونه تمام کد شمارو خراب کنه
// //// وقتی در یک تیم هستید اگه چندین نفر بخوان هر سری یچیز ایجاد کنند کلی باگ بوجود میاد
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(Array.prototype);
// console.log(arr.unique());

/////////////////////////////////////////////////

// const h1 = document.querySelector("h1");
// console.dir(h1);
// console.dir(h1.__proto__);
// console.dir(h1.__proto__.__proto__);

// //// 7 Level until achieve null
// console.dir(
//   h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
// );

/////////////////////////////////////////////////

// const xxx = (x) => x + 1;
// console.dir(xxx);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// ES6 Classes

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// //// class expression
// const PersonCl = class {};

// //// class decolaration
// class PersonCl {}

/////////////////////////////////////////////////

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   //// way 1
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// //// way 2
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// const amir = new PersonCl("amir", 1999);
// console.log(amir);
// amir.calcAge();
// amir.greet();

// console.log(amir.__proto__ === PersonCl.prototype);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Setters and Getters

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const account1 = {
//   owner: "Amir Abbasi",
//   movements: [200, 450, 560, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// //// set , get متود نیستن بلکه پراپرتی هستن

// //// latest رو به عنوان یک متود لاگ نگرفتیم بلکه به عنوان یک پراپرتی لاگ گرفتیم
// //// console.log(account1.latest()); // Error
// console.log(account1.latest);

// //// latest رو به عنوان یک متود استفاده نکردیم بلکه به عنوان یک پراپرتی استفاده کردیم
// //// account1.latest(50); // Error
// account1.latest = 69;
// console.log(account1.movements);

/////////////////////////////////////////////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //// calcAge() method
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   //// get age() property
//   get age() {
//     return 2023 - this.birthYear;
//   }
//   //// get , set برای اعتبارسنجی داده ها خیلی مفیده
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     //// _fullname اندرلاین قبلش یک قرارداده که تداخلی با هم نام خود در کانستراکتور کلاس نداشته باشد
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }
// const amir = new PersonCl("Amir Abbasi", 1999);
// console.log(amir);
// amir.calcAge();
// console.log(amir.age);

// const ali = new PersonCl("Ali", 1991);
// console.log(ali);
// ali.calcAge();
// console.log(ali.age);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Static Methods

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// //// Static Methods in constructor function

// const Person = function (firstName, birthYear) {
//   //// instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const amir = new Person("Amir", 1999);
// console.log(amir);

// //// static method
// Person.hey = function () {
//   console.log("Hey there!");
//   console.log(this);
// };

// console.log(Person.prototype);

// Person.hey();

// amir.calcAge();

// // amir.hey();
// //// Error
// //// not access to Person static method

// console.log(amir.__proto__);

/////////////////////////////////////////////////

// //// Static Methods in classes

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   //// instance method
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   //// static method
//   static hey() {
//     console.log("Hey there!");
//     console.log(this);
//   }
// }

// const amir = new PersonCl("amir", 1999);
// console.log(amir);

// amir.calcAge();
// amir.greet();

// console.log(PersonCl.prototype);
// PersonCl.hey();

// // amir.hey();
// //// Error
// //// not access to PersonCl static method

// console.log(amir.__proto__);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Object.create

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// way 1
// const PersonPoroto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
// };

// const amir = Object.create(PersonPoroto);
// console.log(amir);

// amir.name = "Amir";
// amir.birthYear = 1999;
// amir.calcAge();

// console.log(amir.__proto__);
// console.log(amir.__proto__ === PersonPoroto);

/////////////////////////////////////////////////

// //// way 2
// const PersonPoroto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const amir = Object.create(PersonPoroto);
// amir.init("Amir", 1999);
// amir.calcAge();

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Inheritance Between Classes Constructor Functions

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// //// v2175.jpg

// const Person = function (firstName, birthYear) {
//   //// instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   //// this.firstName = firstName;
//   //// this.birthYear = birthYear;

//   // Person(firstName, birthYear);
//   //// Error
//   //// this = undefined //// در اینجا ما به صورت یک تابع معمولی پرسن رو صدا زدیم

//   Person.call(this, firstName, birthYear);

//   this.course = course;
// };

// //// v2176.jpg
// //// not work
// // Student.prototype = Person.prototype
// //// linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const amir = new Student("Amir", 1999, "Software Enginnier");
// console.log(amir);
// amir.introduce();
// amir.calcAge();

// //// v2177.jpg

// console.log(amir.__proto__);
// console.log(amir.__proto__.__proto__);

// console.log(amir instanceof Student);
// console.log(amir instanceof Person);
// console.log(amir instanceof Object);

// //// ما شاید نخوایم تابع سازنده استیودنت، پرسن باشه بخاطر همین این کارو میکنیم
// console.dir(Student.prototype.constructor);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////  Inheritance Between Classes ES6 Classes

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log("Hey there!");
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //// Person.call(this, firstName, birthYear); //// in constructor function
//     //// super(fullName, birthYear); //// in classes
//     //// super (needs to happen before accessing this)
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   //// calcAge in StudentCl
//   calcAge() {
//     console.log(`I'm ${2023 - this.birthYear} years old`);
//   }
// }

// const amir = new StudentCl("Amir Abbasi", 1999, "Software Enginnier");
// amir.introduce();
// amir.calcAge();
// console.log(amir);

// console.dir(StudentCl.prototype.constructor);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Inheritance Between Classes Object.create

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// //// v2180.jpg

// const PersonPoroto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const amir = Object.create(PersonPoroto);

// const StudentProto = Object.create(PersonPoroto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonPoroto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// const ali = Object.create(StudentProto);

// amir.init("Amir Abbasi", 1999, "Software Enginnier");
// ali.init("Ali Qoli", 1999, "Software Enginnier");

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// ali.introduce();
// ali.calcAge();
// console.log(ali);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Another Class Example
//// Encapsulation: Protected Properties and Methods

////

//// Encapsulation: Private Class Fields and Methods
//// خوب نفهمیدم این قسمت رو

//// Chaining Methods

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// //// 1) Public fields
// //// 2) Private fields
// //// 3) Public methods
// //// 4) Private methods
// //// (there is also the static version)

// class Account {
//   //// 1) Public fields (instances)
//   locale = navigator.language;

//   //// 2) Private fields (instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;

//     // Protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   //// 3) Public methods

//   //// Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val)) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log("Helper");
//   }

//   //// 4) Private methods
//   // #approveLoan(val) {
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account("Jonas", "EUR", 1111);

// // acc1._movements.push(250);
// // acc1._movements.push(-140);
// // acc1.approveLoan(1000);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// Account.helper();

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// // console.log(acc1.#approveLoan(100));

// //// Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

/////////////////////////////////////////////////
