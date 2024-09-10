//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let a1 = [7, 4, 9];
// let a2 = new Array(7, 4, 9);

// console.log(a1, a2);

// console.log(a1.length); //// length == property

// console.log(a1.pop()); //// pop() == method

// console.log(a1);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// window is global object نیازی نیست قبل دستوراتمون بنویسمش

// window.console.log(1);
// console.log(1);

// console.log(window.innerHeight);
// console.log(innerHeight);

// var x = 5;
// console.log(window.x);
// console.log(x);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// DOM = Document Object Model
// //// BOM = Browser Object Model
// //// BOM (window) property

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(window.console);

// console.log("Amir");
// console.error("Amir");
// console.warn("Amir");
// console.info("Amir");

// let person = { firstName: "Amir", lastName: "Abbasi", age: 22 };
// console.table(person);

// let numbers = [5, 6, 8, 9];
// console.table(numbers);

// console.count("Amir");
// console.count("Amir");
// console.count("Amir");
// console.count("Abbasi");
// console.count("Amir");
// console.count("Amir");
// console.count("Abbasi");
// console.count("Abbasi");

// console.log(window.length);
// console.log(window.closed);
// console.log(window.navigator);

// console.log(window.screenX);
// console.log(window.screenY);
// console.log(window.screenLeft);
// console.log(window.screenTop);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// window.alert("JS");

// window.open("https://abbasidev.netlify.app");

// window.open(
//   "https://abbasidev.netlify.app",
//   "Abbasi Dev",
//   "width=500, height=500"
// );

// let myWindow = window.open("https://abbasidev.netlify.app");
// console.log(myWindow);
// console.log(myWindow.focus());
// console.log(myWindow.close()); //// قبلیه تا باز شه بلا فاصله میبندتش
// console.log(myWindow.opener);

// console.log(confirm("press ok to continue"));
// console.log(print());

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let name1 = prompt("نام خود را وارد کنید");
// console.log(name1);

// setInterval(function () {
//   console.log("Amir");
// }, 2000); //// هر دو ثانیه میاد چاپ میکنه

// setTimeout(function () {
//   console.log("Amir"); //// بعد از دو ثانیه میاد یکبار چاپش میکنه
// }, 2000);

// console.log(innerHeight);
// console.log(innerWidth);

// console.log(matchMedia("(width:658px)").matches); //// مقدار اگر با اینرویت یکی باشه جوابی ترو خواهیم داشت
// console.log(matchMedia("(height:345px)").matches);
// console.log(matchMedia("(max-width:700px)").matches);
// console.log(matchMedia("(max-height:400px)").matches);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// location property in BOM

// console.log(location);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.href);
// console.log(location.host);
// console.log(location.origin);
// console.log(location.reload);
// console.log(location.assign("https://abbasidev.netlify.app"));
// console.log(location.replace("https://abbasidev.netlify.app"));

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// history property in BOM

// console.log(history);
// console.log(history.length);

// console.log(history.back()); //// منو یک صفحه میاره به عقب
// console.log(history.forward()); //// منو یک صفحه میبره به جلو

// console.log(history.go(-1)); //// منو یک صفحه میاره به عقب
// console.log(history.go(-2)); //// منو دو صفحه میاره به عقب
// console.log(history.go(1)); //// منو یک صفحه میبره به جلو
// console.log(history.go(2)); //// منو دو صفحه میبره به جلو

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(history.state);
// console.log(history.pushState({ id: 1 }, "course1", "course-js")); //// ادرس یوارال ما تغییر کرد بدون رفرش شدن
// console.log(history.pushState({ id: 2 }, "course2", "course-css"));

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// screen property in BOM

// console.log(innerHeight); //// ارتفاع سایت
// console.log(outerHeight); //// ارتفاع مرورگر
// console.log(innerWidth); //// عرض سایت
// console.log(outerWidth); //// عرض مرورگر

// console.log(screen);
// console.log(screen.width); //// عرض صفحه نمایش
// console.log(screen.height); //// ارتفاع صفحه نمایش

// console.log(screen.availWidth); //// available Width
// console.log(screen.availHeight); //// بخاطر تسک باری که هس ما 860 تا داریم

// console.log(screen.orientation.type);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// cookie "2:23"
// //// این کدها کامنت باشن در مرورگر بنویسیدشون تا ببینید چی میشه

// document.cookie = "name=amir";
// console.log(document.cookie);

// document.cookie = "name=nazanin;max-age=5"; //// این 5 سال تاریخ انقضا خواهد داشت
// console.log(document.cookie);

// console.log(new Date("2025/1/1").toUTCString()); //// بدست اوردن یک فرمت از تاریخ

// document.cookie = "name=bita;expires=Tue, 31 Dec 2028 20:30:00 GMT"; //// تا این تاریخ انقضا دارد
// console.log(document.cookie);

// //// برای پاک کردن یک کوکی یک تاریخ انقضا از تاریخ های گذشته بهش میدیم

// console.log(new Date("2000/1/1").toUTCString()); //// بدست آوردن یک فرمت از تاریخ

// document.cookie = "name=sara;expires=Fri, 31 Dec 1999 20:30:00 GMT";
// console.log(document.cookie);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// local storage

// localStorage.setItem("name", "amir");
// localStorage.setItem("age", "22");

// console.log(localStorage);
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("age"));

// localStorage.removeItem("age");
// console.log(localStorage.getItem("age"));

// console.log(localStorage);

// localStorage.clear(); //// همه رو پاک میکنه
// console.log(localStorage);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// session storage

// sessionStorage.setItem("name", "amir");
// sessionStorage.setItem("age", "22");

// console.log(sessionStorage);
// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.getItem("age"));

// sessionStorage.removeItem("age");
// console.log(sessionStorage.getItem("age"));

// console.log(sessionStorage);

// sessionStorage.clear(); //// همه رو پاک میکنه
// console.log(sessionStorage);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// geolocation "Mapbox folder more information"

// navigator.geolocation.getCurrentPosition(function (p) {
//   console.log(`${p.coords.latitude},${p.coords.longitude}`);
// }); //// طول و عرض جغرافیایی
