//// WeakMaps

//// You can't use primitive data types as key
// const myWeakMap = new WeakMap();
// myWeakMap.set('a' , 'b');		// TypeError

const myWeakMap = new WeakMap();
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let key1 = { a: 1 };
let key2 = { b: 2, c: 3 };
myWeakMap.set(key1, array1).set(key2, array2);
console.log(myWeakMap.get(key2));
key2 = { b: 2, c: 3 };
console.log(myWeakMap.get(key2));

//// WeakMaps & Maps تفاوت ها
//// پریمیتیو تایپ ها رو نمیتونیم داخلشون ذخیره کنیم و حتما نوع داده ای که داخلشون ذخیره مبکنیم در نهایت باید ابجکت باشد
//// You can't use 'size' property
//// You can't use 'clear', 'keys' , 'values' , 'entries' methods
//// You can't use WeakMaps in for-of loops
//// You can't convert WeakMaps to Array
