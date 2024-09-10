/////////////////////////////////////////////
// Law of Demeter
// این هم یک اصوله کلی است برای برنامه نویسی شی گرا اما جز اصول 5 گانه نیست
/////////////////////////////////////////////

/////////////////////////////////////////////
//// example 1 Before

// class Wallet {
//   constructor(money) {
//     this.money = money;
//   }

//   getMoney() {
//     return this.money;
//   }
// }

// class Person {
//   constructor(wallet) {
//     this.wallet = wallet;
//   }

//   getWallet() {
//     return this.wallet;
//   }
// }

// class ShoppingMall {
//   chargeCustomer(person, amount) {
//     let wallet = person.getWallet();
//     let money = wallet.getMoney();
//     wallet.money = money - amount; // Violates LoD
//   }
// }

// let wallet = new Wallet(100);
// let person = new Person(wallet);
// let mall = new ShoppingMall();

// mall.chargeCustomer(person, 50);

/////////////////////////////////////////////
//// example 1 After applying Law of Demeter

// class Wallet {
//   constructor(money) {
//     this.money = money;
//   }

//   debit(amount) {
//     this.money -= amount;
//   }

//   getMoney() {
//     return this.money;
//   }
// }

// class Person {
//   constructor(wallet) {
//     this.wallet = wallet;
//   }

//   getWallet() {
//     return this.wallet;
//   }

//   payAmount(amount) {
//     this.wallet.debit(amount);
//   }
// }

// class ShoppingMall {
//   chargeCustomer(person, amount) {
//     person.payAmount(amount);
//   }
// }

// let wallet = new Wallet(100);
// let person = new Person(wallet);
// let mall = new ShoppingMall();

// mall.chargeCustomer(person, 50);

/////////////////////////////////////////////
//// example 2 Before

// class Toy {
//   constructor(color) {
//     this.color = color;
//   }

//   getColor() {
//     return this.color;
//   }
// }

// class Cat {
//   constructor(name, favoriteToy) {
//     this.name = name;
//     this.favoriteToy = favoriteToy;
//   }

//   getFavoriteToy() {
//     return this.favoriteToy;
//   }
// }

// const whiskers = new Cat("Whiskers", new Toy("red"));

// // Violates Law of Demeter
// const colorOfWhiskersToy = whiskers.getFavoriteToy().getColor();

/////////////////////////////////////////////
//// example 2 After applying Law of Demeter

// class Toy {
//   constructor(color) {
//     this.color = color;
//   }

//   getColor() {
//     return this.color;
//   }
// }

// class Cat {
//   constructor(name, favoriteToy) {
//     this.name = name;
//     this.favoriteToy = favoriteToy;
//   }

//   getFavoriteToyColor() {
//     return this.favoriteToy.getColor();
//   }
// }

// const mittens = new Cat("Mittens", new Toy("blue"));

// // Adheres to Law of Demeter
// const colorOfMittensToy = mittens.getFavoriteToyColor();

/////////////////////////////////////////////
