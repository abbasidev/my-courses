//// Maps

let myMap = new Map();
console.log(myMap);

myMap.set(1, "HTML");
console.log(myMap);

myMap.set(1, "C++").set(2, "Java").set(3, "JavaScript");
console.log(myMap);

myMap.set(4, "JavaScript");
console.log(myMap);

myMap = new Map();
myMap.set(1, "Car").set("weight", 1000).set("color", "Blue");
console.log(myMap);

let person = new Map([
  ["firstName", "Abbas"],
  ["lastName", "Moqaddam"],
  ["age", 33],
]);
console.log(person);

console.log(person.size);
console.log(person.get("lastName"));

let a = person.delete("age"); // a = true
let b = person.delete("myName"); // b = false
console.log(person);

person.clear();
console.log(person);
