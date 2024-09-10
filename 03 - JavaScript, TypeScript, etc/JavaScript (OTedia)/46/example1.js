//// Review of Sets
let mySet = new Set();
mySet.add("a").add("b");
console.log(mySet);

mySet.delete("a");
console.log(mySet);

mySet.add("b").add("c");
console.log(mySet);

mySet = new Set([2, 4, 5, 2, 6]);
console.log(mySet);

console.log(mySet.has(2));
console.log(mySet.has(1));
console.log(mySet.size);

mySet.clear();
console.log(mySet);

//// Review of Maps
let myMap = new Map();
myMap.set(1, "Red").set(2, "Blue").set(3, "Green");
console.log(myMap);

myMap.delete(1);
console.log(myMap);

myMap.set(1, "Red").set(2, "Green");
console.log(myMap);

let person = new Map([
  ["name", "Michael"],
  ["age", 56],
]);
console.log(person);

console.log(person.has("name"));
console.log(person.has("firstname"));
console.log(person.size);

person.clear();
console.log(person);
