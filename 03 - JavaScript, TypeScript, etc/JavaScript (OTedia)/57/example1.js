//// Fetch API Basics

//////////////////////////////////////////////////////

// const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(data);

//////////////////////////////////////////////////////

// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
//   console.log(response);
//   console.log(response.status);
//   console.log(response.ok);
//   console.log(response.url);
// });

//////////////////////////////////////////////////////

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   //// Error
//   // fetch("https://jsonplaceholder.typicode.com/todos/154874")
//   .then((response) => {
//     if (response.ok) {
//       return response.text();
//     } else {
//       throw new Error("Failed");
//     }
//   })
//   .then((text) => console.log(text))
//   .catch((error) => console.error(error));

//////////////////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/posts/1")
  //// Error
  // fetch("https://jsonplaceholder.typicode.com/posts/165454")
  .then((response) => {
    if (response.ok) {
      return response.json();
      //   return response.text();
    } else {
      throw new Error("Failed");
    }
  })
  .then((obj) => console.log(obj))
  .catch((error) => console.error(error));

//////////////////////////////////////////////////////
