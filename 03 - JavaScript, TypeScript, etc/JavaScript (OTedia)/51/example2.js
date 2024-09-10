///////////////////////////////////////////////////////////////////
//// Asynchronous Requests & readystatechange event & SOP

const button = document.getElementById("button");
const pre = document.getElementById("data");

button.addEventListener("click", function () {
  //// (readystatechange) readyState پنج مرحله دارد 0 1 2 3 4

  //// readyState = 0
  const xhr = new XMLHttpRequest();

  //// readyState = 1
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

  //// Error
  // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/154874");

  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        pre.innerHTML = xhr.responseText;
      }
      //// Error
      else {
        pre.innerHTML = "An error occurred";
      }
    }
  });

  //// readyState = 2
  xhr.send();

  //// readyState = 3 = شروع میکنه به دریافت پاسخ

  //// readyState = 4 = دریافت پاسخ به صورت کامل
});

///////////////////////////////////////////////////////////////////

// //// Same-origin policy (SOP)
// button.addEventListener("click", function () {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol");
//   xhr.addEventListener("readystatechange", function () {
//     if (xhr.readyState == 4) {
//       if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//         pre.innerHTML = xhr.responseText;
//       } else {
//         pre.innerHTML = "An error occurred";
//       }
//     }
//   });
//   xhr.send();
// });
