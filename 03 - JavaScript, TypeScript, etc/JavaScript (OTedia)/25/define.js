//// Define Event Listeners

let button = document.querySelector("button");
button.addEventListener("click", handler);

//// Way 1 (best way)
function handler() {
  let main = document.getElementById("main");
  let p = document.createElement("p");
  p.textContent = "Button Clicked!";
  main.appendChild(p);
}

//// Way 2
// function handler(){
//     let main = document.getElementById('main');
//     main.innerHTML += '<p>Button Clicked!</p>'; // چون اینر اچ تی ام ال هر سری جایگزین باتن قبلی میشود هر چقدم کلیک کنیم فقط یک باتن کلیکد نمایش داده میشود روش درسته استفاده از اینر اچ تی ام ال در درس بعدی است
//// در اصل باید جوری بنویسیم که ایونت جایگزین باتن نشود مراجعه به درس بعد
// }

//// Way 3
// button.onclick = function () {
//   console.log(Date.now());
// };
//// بدی این روش اینه که فقط یک ایونت هندلر میتونیم برای هر رویداد تعریف کنیم
// button.onclick = function(){
// 	console.log(Math.random());
// }
//// فقط باتن ان کلیک دوم اجرا میشود و قبلی که دیت ناو بود اجر نمیشود

button.addEventListener("click", () => console.log(Date.now()));

//// Way 4
//// تعریف کردن ایونت هندلر در اچ تی ام ال
///* <button type="button" onclick="console.log('test')">Click Me</button> *///
