//// Solve Callback Hell Problem

//////////////////////////////////////////////

// const send = document.querySelector("#send");

// send.addEventListener("click", async function () {
//   let response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(await response1.text());

//   let response2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
//   console.log(await response2.text());

//   let response3 = await fetch("https://jsonplaceholder.typicode.com/todos/3");
//   console.log(await response3.text());

//   let response4 = await fetch("https://jsonplaceholder.typicode.com/todos/4");
//   console.log(await response4.text());
// });

// //// response1.text() چون پرامیسه پس از اویت استفاده میکنیم

//////////////////////////////////////////////

// const send = document.querySelector("#send");

// send.addEventListener("click", async function () {
//   //// Syncarnous
//   console.log("start");

//   //// Asyncarnous
//   let response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(await response1.text());

//   let response2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
//   console.log(await response2.text());

//   let response3 = await fetch("https://jsonplaceholder.typicode.com/todos/3");
//   console.log(await response3.text());

//   let response4 = await fetch("https://jsonplaceholder.typicode.com/todos/4");
//   console.log(await response4.text());

//   //// Syncarnous
//   console.log("End");
// });

// //// await ایویت ها در این تابع تا نتایجشون نیاد به خط بعد نمیرن
// //// اما این دلیل به این نیست که سنکرون هستند بلکه آسنکرون هستند
// //// این یه نکته ایه که باید بهش توجه داشته باشی تا با مثالای جلسه های قبلی قاطیشون نکنی

//////////////////////////////////////////////
