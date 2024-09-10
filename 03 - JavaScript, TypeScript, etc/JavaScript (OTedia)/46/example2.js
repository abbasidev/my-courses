//// WeakSets

//// You can't add primitive data types
// let myWeakSet = new WeakSet();
// myWeakSet.add("a"); // TypeError

// const myWeakSet = new WeakSet();
// const array = [1 , 2 , 3];
// const obj1 = {a:1 , b:2};
// const obj2 = {c:3 , d:4};
// myWeakSet.add(array).add(obj1);
// console.log(myWeakSet.has(obj1));
// console.log(myWeakSet.has(obj2));

function addMember(s) {
  const array2 = [4, 5, 6];
  s.add(array2);
}

// const mySet = new Set();
// const array1 = [1 , 2 , 3];
// mySet.add(array1);
// console.log(mySet.has(array1));
// addMember(mySet);
// console.log(mySet.size);
// console.log(mySet.has(array2));	// ReferenceError
// console.log([...mySet]);

const myWeakSet = new WeakSet();
const array1 = [1, 2, 3];
myWeakSet.add(array1);
console.log(myWeakSet.has(array1));
addMember(myWeakSet);

//// WeakSets & Sets تفاوت ها
//// پریمیتیو تایپ ها رو نمیتونیم داخلشون ذخیره کنیم و حتما نوع داده ای که داخلشون ذخیره مبکنیم در نهایت باید ابجکت باشد
//// You can't use 'size' property
//// You can't use 'clear' method
//// You can't use WeakSets in for-of loops
//// You can't convert WeakSets to Array
