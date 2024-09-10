//// Asynchronous Functions

//////////////////////////////////////////////

// async function myFunction() {
//   return 10;
// }
// let result = myFunction();
// console.log(result);
// result.then((value) => console.log(value));

//////////////////////////////////////////////

async function myAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const text = await response.text();
  console.log(text);
}

let result = myAsync();
