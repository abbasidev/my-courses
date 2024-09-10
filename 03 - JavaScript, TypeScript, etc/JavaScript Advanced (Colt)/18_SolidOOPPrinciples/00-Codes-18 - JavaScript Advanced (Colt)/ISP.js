/////////////////////////////////////////////
// Interface Segregation Principle (ISP)
/////////////////////////////////////////////

// JavaScript doesn’t have interfaces in the way languages like Java or TypeScript do. But the principle can still be applied conceptually using duck typing or optional methods.

// توضیح این مثال در جاوا اسکریپت سخته چون اینترفیس ها در جاوا اسکریپت پشتیبانی نمیشود

/////////////////////////////////////////////
//// example 1 Before

// class Worker {
//   work() {
//     console.log("working on work!");
//   }
//   eat() {
//     console.log("eating some food!");
//   }
//   sleep() {
//     console.log("taking a nap!");
//   }
// }

// function manageWork(worker) {
//   worker.work();
// }

/////////////////////////////////////////////
//// example 1 After applying ISP

// class Workable {
//   work() {
//     console.log("working on work!");
//   }
// }

// class Eatable {
//   eat() {
//     console.log("eating a snack");
//   }
// }

// class Sleepable {
//   sleep() {
//     console.log("taking a nap");
//   }
// }

// function manageWork(workable) {
//   workable.work();
// }

/////////////////////////////////////////////
//// example 2 Before

// class Machine {
//   print(documet) {
//     throw new Error("print method not implemented");
//   }

//   fax(documet) {
//     throw new Error("fax method not implemented");
//   }

//   scan(documet) {
//     throw new Error("scan method not implemented");
//   }
// }

// class MultiFunctionPrinter extends Machine {
//   print(documet) {
//     // implementation
//   }

//   fax(documet) {
//     // implementation
//   }

//   scan(documet) {
//     // implementation
//   }
// }

// class OldFunctionPrinter extends Machine {
//   print(documet) {
//     // implementation
//   }

//   fax(documet) {
//     throw new Error("fax method not supported");
//   }

//   scan(documet) {
//     throw new Error("fax method not supported");
//   }
// }

/////////////////////////////////////////////
//// example 2 After applying ISP

// class Printer {
//   print(documet) {
//     throw new Error("print method not implemented");
//   }
// }

// class Fax {
//   fax(documet) {
//     throw new Error("fax method not implemented");
//   }
// }

// class Scanner {
//   scan(documet) {
//     throw new Error("scan method not implemented");
//   }
// }

// //// extends Printer,Fax,Scanner
// //// (javascript not support) (typescript support)

// class MultiFunctionPrinter extends Printer,Fax,Scanner {
//   print(documet) {
//     // implementation
//   }

//   fax(documet) {
//     // implementation
//   }

//   scan(documet) {
//     // implementation
//   }
// }

// class OldFunctionPrinter extends Printer {
//   print(documet) {
//     // implementation
//   }
// }

/////////////////////////////////////////////
//// example 3 Before
//// (javascript not support) (typescript support)

// interface Vehicle {
//   drive(): void;
//   fly(): void;
// }

// class Car implements Vehicle {
//   drive(): void {
//     console.log("can drive");
//   }
//   fly(): void {
//     throw new Error("can't fly");
//   }
// }

// class Plane implements Vehicle {
//   drive(): void {
//     throw new Error("can't drive");
//   }
//   fly(): void {
//     console.log("can fly");
//   }
// }

/////////////////////////////////////////////
//// example 3 After applying ISP
//// (javascript not support) (typescript support)

// interface ICar {
//   drive(): void;
// }

// interface IPlane {
//   fly(): void;
// }

// class Car implements ICar {
//   drive(): void {
//     console.log("can drive");
//   }
// }

// class Plane implements IPlane {
//   fly(): void {
//     console.log("can fly");
//   }
// }

/////////////////////////////////////////////
