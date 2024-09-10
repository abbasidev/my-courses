//// session storage همه ی اینها صادق هستند برای

////
const obj = {
  a: 1,
  b: 2,
};

localStorage.obj = obj;
console.log(localStorage.obj);

////
localStorage.array = [1, 2, 3, 4];
console.log(localStorage.array);

////
localStorage.obj = JSON.stringify(obj);
localStorage.array = JSON.stringify([1, 2, 3, 4]);

////
console.log(localStorage.obj);
console.log(JSON.parse(localStorage.obj));

console.log(localStorage.array);
console.log(JSON.parse(localStorage.array));

//// Error
// JSON.parse(localStorage.aaaa);

//// روش ایمن تر برای استفاده از لوکال استورج
try {
  JSON.parse(localStorage.aaaa);
} catch (e) {
  console.log(e.message);
}

console.log(33);
