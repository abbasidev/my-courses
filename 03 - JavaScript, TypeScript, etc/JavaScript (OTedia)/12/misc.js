//// Miscellaneous features

let mySet = new Set(["Apple", "Orange", "Banana"]);
let myArray = [...mySet];
console.log(myArray);

myArray = Array.from(mySet);
console.log(myArray);

let personMap = new Map([
  ["firstName", "Abbas"],
  ["lastName", "Moqaddam"],
  ["age", 33],
]);
let personArray = [...personMap];
console.log(personArray);

personArray = Array.from(personMap);
console.log(personArray);

let duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];
let nonDuplicate = Array.from(new Set(duplicate));
console.log(nonDuplicate);

for (let value of mySet) {
  console.log(value);
}
console.log("--------------");

for (let key of personMap.keys()) {
  console.log(key);
}
console.log("--------------");

for (let value of personMap.values()) {
  console.log(value);
}
console.log("--------------");

for (let [key, value] of personMap.entries()) {
  console.log(key + " = " + value);
}
