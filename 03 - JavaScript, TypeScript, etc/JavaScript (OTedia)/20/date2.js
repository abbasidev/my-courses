//// Date Object - Part 2

let myDate = new Date(1550100000323);
console.log(myDate.toString());

console.log(myDate.getDay());
console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());
console.log(myDate.getTimezoneOffset());

myDate.setDate(17);
console.log(myDate.toString());
myDate.setHours(14);
console.log(myDate.toString());
myDate.setTime(1440000000000);
console.log(myDate.toString());

console.log(Date.now());
console.log(Date.parse("21 October 2014"));
console.log(Date.parse("Aug 19 2015 20:30:00"));
console.log(Date.UTC(2019, 1, 14, 10, 20, 30, 222));

myDate = new Date(2019, 2, 28, 14, 39, 7);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString("fa-IR"));

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(myDate.toLocaleDateString("fa-IR", options));
console.log(myDate.toLocaleDateString("ar-EG", options));
