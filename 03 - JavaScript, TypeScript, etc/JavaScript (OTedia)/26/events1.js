//// Mouse Events - Part 1

const main = document.getElementById("main");
const button = document.querySelector("button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.innerHTML += `<p>Click: ${Date.now()}</p>`;
  //// در اصل باید جوری بنویسیم که ایونت جایگزین باتن نشود مراجعه به درس قبل
  //// زمانی که از خاصیت اینر اچ تی ام ال استفاده میکنیم باید حواسمون باشه که فرزندان اون عنصر ایونت لیسنر نداشته باشند اگر داشته باشند ایونت لیسنر انها از بین خواهد رفت
});

// button.addEventListener('dblclick' , () => {
// 	message.innerHTML += `<p>Double Click: ${Date.now()}</p>`;
// });

button.addEventListener("mousedown", () => {
  message.innerHTML += `<p>Mousedown: ${Date.now()}</p>`;
});

button.addEventListener("mouseup", () => {
  message.innerHTML += `<p>Mouseup: ${Date.now()}</p>`;
});

button.addEventListener("contextmenu", () => {
  message.innerHTML += `<p>Context Menu: ${Date.now()}</p>`;
});
