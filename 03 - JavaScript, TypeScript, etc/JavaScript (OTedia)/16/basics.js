//// Callback Function Basics

function example(callback) {
  if (typeof callback === "function") {
    callback();
  } else {
    console.log("آرگومان ورودی یک تابع نیست");
  }
}

// function test(){
// 	console.log("I am test function");
// }
// example(test);

// const test = function (){
// 	console.log("I am test function");
// }
// example(test);

example(function () {
  console.log("I am an anonymous function");
});

example(() => console.log("I am an arrow function"));

example(4);
