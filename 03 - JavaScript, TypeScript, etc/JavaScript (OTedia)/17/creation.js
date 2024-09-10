//// Object Creation

let obj1 = new Object(); // Object Constructor
let obj2 = {}; // Object Literal

obj1.property1 = 10;
obj1.property1 = 20;
console.log(obj1.property1);
console.log(obj1);

obj1.method1 = function () {
  console.log("I am a method");
};
obj1.method1();

obj1["property1"] = 30;
console.log(obj1.property1);
obj1["method1"]();

obj1["my-property"] = 40;
console.log(obj1["my-property"]);

let prop = "my-property";
console.log(obj1[prop]);

// console.log(obj1.property2);
// console.log(obj1.method2());
