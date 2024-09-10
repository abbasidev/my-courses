//// Sets

let mySet = new Set();
console.log(mySet);

mySet.add(1);
console.log(mySet);

mySet.add("JavaScript").add("HTML").add("CSS");
console.log(mySet);

mySet.add("JavaScript");
console.log(mySet);

mySet = new Set([1, 2, 2, 3, 3, 4]);
console.log(mySet);

mySet = new Set("Hello");
console.log(mySet);

mySet = new Set(["Apple", "Orange", "Banana"]);
console.log(mySet);

mySet = new Set(["333", 333]);
console.log(mySet);

mySet = new Set(["Apple", "Orange", "Banana"]);
console.log(mySet.size);

console.log(mySet.has("Apple"));
console.log(mySet.has("Cherry"));

let a = mySet.delete("Apple"); // a = true
console.log(a);
let b = mySet.delete("Cherry"); // b = false
console.log(b);
console.log(mySet);

mySet.clear();
console.log(mySet);
