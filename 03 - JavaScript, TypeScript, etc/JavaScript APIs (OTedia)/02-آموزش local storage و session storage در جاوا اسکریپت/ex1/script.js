//// session storage همه ی اینها صادق هستند برای

//// Way 1
localStorage.setItem("key", "value");
localStorage.setItem("firstname", "Abbas");
localStorage.setItem("lastname", "Moqaddam");

const firstname = localStorage.getItem("firstname");
const lastname = localStorage.getItem("lastname");

console.log(firstname, lastname);

//// Way 2
localStorage.age = 37;
console.log(localStorage.age);

//// فرق Way 1 , Way 2
console.log(localStorage.test);
console.log(localStorage.getItem("test"));

////
console.log(localStorage.length);

////
console.log(localStorage);
console.log({ ...localStorage });

////
//// Way 1
// localStorage.removeItem("firstname");
//// Way 2
// delete localStorage.lastname;

////
// console.log({ ...localStorage });

////
// localStorage.clear();
// console.log({ ...localStorage });
