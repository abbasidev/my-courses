//// Date Object - Part 1

let myDate = new Date("2019 3 11");
console.log(myDate.toString());

myDate = new Date("25 Dec 2019");
console.log(myDate.toString());

myDate = new Date("25 December 2019");
console.log(myDate.toString());

myDate = new Date("Oct 21 2019 11:00:00");
console.log(myDate.toString());

myDate = new Date(2019, 2);
console.log(myDate.toString());

myDate = new Date(2019, 0, 2);
console.log(myDate.toString());

myDate = new Date(2019, 1, 36);
console.log(myDate.toString());

myDate = new Date(2019, 2, 2, 2, 2, 2, 222);
console.log(myDate.toString());

myDate = new Date(0);
console.log(myDate.toString());

myDate = new Date(100000000);
console.log(myDate.toString());

myDate = new Date(100000000000);
console.log(myDate.toString());

myDate = new Date(1549848025346);
console.log(myDate.toString());
