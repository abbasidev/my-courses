//// Identifiers Overlap
//// Nested Functions

// let a = 10;
// let a = 20; // 'a' has already been declared

// function a(){
//     return 3;
// }

let a = 10;
function example() {
  let a = 20;
  console.log(a); // here a = 20
  a = 30;
  console.log(a); // here a = 30
}
example();
console.log(a); // here a = 10

function outer() {
  function inner() {
    console.log("inner");
  }
  console.log("outer");
  inner();
}

outer();
// inner(); // inner is not defined
