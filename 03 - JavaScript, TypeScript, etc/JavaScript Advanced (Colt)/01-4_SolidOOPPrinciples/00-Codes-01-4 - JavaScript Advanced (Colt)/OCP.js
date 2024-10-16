/////////////////////////////////////////////
// Open/Closed Principle (OCP)
/////////////////////////////////////////////

/////////////////////////////////////////////
//// example 1 Before

// class AreaCalculator {
//   static calculate(shape) {
//     if (shape.type === "circle") {
//       return Math.PI * shape.radius ** 2;
//     } else if (shape.type === "square") {
//       return shape.side * shape.side;
//     }
//     //// add triangle
//     else if (shape.type === "triangle") {
//       console.log("AREA FOR TRIANGLE!");
//     }
//   }
//   static calculateAreas(shapes) {
//     return shapes.reduce(
//       (sum, shape) => sum + AreaCalculator.calculate(shape),
//       0
//     );
//   }
// }

// const circle = { type: "circle", radius: 5 };
// const square = { type: "square", side: 4 };

// console.log(AreaCalculator.calculate(circle));
// console.log(AreaCalculator.calculate(square));

/////////////////////////////////////////////
//// example 1 After applying OCP

// class Shape {
//   area() {
//     // OVERRIDE ME!!!!
//     console.log("SHAPE DID NOT IMPLEMENT AREA!");
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   area() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// class Square extends Shape {
//   constructor(side) {
//     super();
//     this.side = side;
//   }
//   area() {
//     return this.side * this.side;
//   }
// }

// class Rectangle extends Shape {
//   constructor(length, width) {
//     super();
//     this.length = length;
//     this.width = width;
//   }

//   area() {
//     return this.length * this.width;
//   }
// }

// class AreaCalculator {
//   static calculate(shape) {
//     return shape.area();
//   }
//   static calculateAll(shapes) {
//     return shapes.reduce((sum, shape) => sum + shape.area(), 0);
//   }
// }

// const c = new Circle(5);
// const s = new Square(5);
// const r = new Rectangle(10, 20);

// console.log(AreaCalculator.calculate(c));
// console.log(AreaCalculator.calculate(s));
// console.log(AreaCalculator.calculate(r));

/////////////////////////////////////////////
//// example 2 Before

// const users = [
//   { id: 1, name: "Reza", age: 49 },
//   { id: 2, name: "Amir", age: 25 },
//   { id: 3, name: "Nazi", age: 19 },
//   { id: 4, name: "Sara", age: 22 },
//   { id: 5, name: "Mahdi", age: 37 },
// ];

// const sortUsers = (sortBy, order) => {
//   switch (sortBy) {
//     case "name":
//       switch (order) {
//         case "asc":
//           return users.sort((user1, user2) =>
//             user1.name < user2.name ? -1 : 1
//           );

//         case "desc":
//           return users.sort((user1, user2) =>
//             user1.name > user2.name ? -1 : 1
//           );
//       }
//       break;

//     case "age":
//       switch (order) {
//         case "asc":
//           return users.sort((user1, user2) => user1.age - user2.age);

//         case "desc":
//           return users.sort((user1, user2) => user2.age - user1.age);
//       }
//   }
// };

// //// دونه دونه از کامنت دربیار
// console.log(sortUsers("name", "asc"));
// // console.log(sortUsers("name", "desc"));

// // console.log(sortUsers("age", "asc"));
// // console.log(sortUsers("age", "desc"));

/////////////////////////////////////////////
//// example 2 After applying OCP

// const users = [
//   { id: 1, name: "Reza", age: 49 },
//   { id: 2, name: "Amir", age: 25 },
//   { id: 3, name: "Nazi", age: 19 },
//   { id: 4, name: "Sara", age: 22 },
//   { id: 5, name: "Mahdi", age: 37 },
// ];

// function sortByName() {
//   const asc = () => {
//     return users.sort((user1, user2) => (user1.name < user2.name ? -1 : 1));
//   };
//   const desc = () => {
//     return users.sort((user1, user2) => (user1.name > user2.name ? -1 : 1));
//   };
//   return { asc, desc };
// }

// function sortByAge() {
//   const asc = () => {
//     return users.sort((user1, user2) => user1.age - user2.age);
//   };
//   const desc = () => {
//     return users.sort((user1, user2) => user2.age - user1.age);
//   };
//   return { asc, desc };
// }

// //// دونه دونه از کامنت دربیار
// console.log(sortByName().asc());
// // console.log(sortByName().desc());
// // console.log(sortByAge().asc());
// // console.log(sortByAge().desc());

/////////////////////////////////////////////
