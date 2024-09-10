//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.getElementById("to-do-list"));
// console.log(document.getElementById("myform"));

// console.log(document.getElementsByClassName("to-do-section"));
// console.log(document.getElementsByClassName("to-do-item"));

// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByTagName("a"));
// console.log(document.getElementsByTagName("h2"));

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// HTML Collection vs Array

// let titles = document.getElementsByClassName("title");
// console.log(titles);
// console.log(titles.constructor);

// let arr = [2, 6, 8, 5];
// console.log(arr);
// console.log(arr.constructor);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let titles = document.getElementsByClassName("title");

// console.log(titles);

// console.log(titles.length);

// console.log(titles.item(2));
// console.log(titles[2]);

// console.log(titles.namedItem("main-title"));
// console.log(titles["main-title"]);

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByTagName("h1").length);
// console.log(document.getElementsByTagName("h2").length);
// console.log(document.getElementsByTagName("ol").length);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let listItems = document.getElementsByClassName("to-do-item");

// for (let i = 0; i < listItems.length; i++) {
//   console.log(listItems[i]);
// }

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let listItems = document.getElementsByClassName("to-do-item");

// //// Not Work
// //// listItems.forEach((element) => {
// ////   console.log(element);
// //// });

// //// Work "Array.from(listItems)"
// Array.from(listItems).forEach((element) => {
//   console.log(element);
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.querySelector("#to-do-list"));

// console.log(document.querySelector(".title")); //// المنت اول رو برمیگردونه
// console.log(document.querySelectorAll(".title")); //// تمام المنت هارو بر میگردونه

// console.log(document.querySelectorAll("ol"));
// console.log(document.querySelectorAll("ul li"));
// console.log(document.querySelectorAll("#myform"));
// console.log(document.querySelectorAll("#myform input"));
// console.log(document.querySelectorAll("#myform input[type=text]"));

// console.log(document.querySelectorAll("*")); //// همه ی المنت های سند مارو برمیگردونه
// console.log(document.querySelectorAll("main *")); //// همه ی المنت های داخل مین رو برمیگردونه

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.nodeName);
// console.log(document.nodeType); //// مراجعه به عکس ها و یا سایت دولوپر موزیلا

// console.log(document);

// console.log(document.childNodes);

// console.log(document.childNodes[0].nodeType);

// console.log(document.childNodes[1].nodeType);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let myHtml = document.childNodes[1];

// console.log(myHtml);
// console.log(myHtml.childNodes);

// console.log(myHtml.childNodes[0].nodeType);
// console.log(myHtml.childNodes[1].nodeType);
// console.log(myHtml.childNodes[2].nodeType);

// let myBody = myHtml.childNodes[2];

// console.log(myBody);
// console.log(myBody.childNodes);

// //// children فقط نودهایی رو برمیگردونه که المنت هستند

// console.log(myBody.children);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.getElementById("to-do-list"));
// console.log(document.getElementById("to-do-list").parentNode); //// پدر نود
// console.log(document.getElementById("to-do-list").parentElement); //// پدر المنت

// console.log(document.querySelector("html"));
// console.log(document.documentElement); //// همون نود اچ تی ام ال مارو برمیگردونه
// console.log(document.documentElement.parentNode); //// پدر اچ تی ام ال داکیومنت است
// console.log(document.documentElement.parentElement); //// پدر اچ تی ام ال نوعش المنت نیست بلکه نوعش داکیومنت است، بخاطر همین جوابی نال خواهیم داشت

// console.log(document.querySelector("#to-do-list"));
// console.log(document.querySelector("#to-do-list").parentNode);
// console.log(document.querySelector("#to-do-list").parentNode.childNodes);
// console.log(document.querySelector("#to-do-list").parentNode.children);

// console.log(document.querySelector("#to-do-list").nextSibling);
// console.log(document.querySelector("#to-do-list").nextElementSibling);

// console.log(document.querySelector("#to-do-list").previousSibling);
// console.log(document.querySelector("#to-do-list").previousElementSibling);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let link = document.getElementById("ref-link");
// console.log(link);
// console.log(typeof link);
// console.log(link.constructor);
// console.log(link.innerText);

// link.innerText = "Amir Abbasi";
// console.log(link.innerText);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let headTitle = document.querySelector("#header-title");
// console.log(headTitle);
// console.log(typeof headTitle);
// console.log(headTitle.constructor);
// console.log(headTitle.innerText);

// headTitle.innerText = "Nazi Jon";
// console.log(headTitle.innerText);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.getElementById("to-do-list"));
// console.log(document.getElementById("to-do-list").getElementsByTagName("li"));

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.URL);
// console.log(document.baseURI);
// console.log(document.title);
// console.log(document.scripts);
// console.log(document.cookie);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.lastModified);
// console.log(document.activeElement);
// console.log(document.links);
// console.log(document.characterSet);
// console.log(document.readyState);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let att = document.createAttribute("target");
// att.value = "_blank";
// console.log(att);
// console.log(att.nodeType);
// console.log(att.nodeName);

// document.getElementById("ref-link").setAttributeNode(att);

// let attRed = document.createAttribute("class");
// attRed.value = "red-text";
// console.log(attRed);
// document.getElementById("ref-link").setAttributeNode(attRed);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// خلاصه شده کدهای بالا در دو خط

// document.getElementById("ref-link").setAttribute("target", "_blank");
// document.getElementById("ref-link").setAttribute("class", "red-text");

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// Way 1
// let newLi = document.createElement("li");
// let liText = document.createTextNode("dummy item five (new)");
// newLi.appendChild(liText);
// document.querySelector("ul").appendChild(newLi);

// //// Way 2
// let newLi2 = document.createElement("li");
// newLi2.innerText = "dummy item six (new)";
// document.querySelector("ul").appendChild(newLi2);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.open(); //// add new document

// document.write("<h1> hello Amir </h1>"); //// Automatic add new document

// document.close();

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.getElementById("ref-link").tagName);
// console.log(document.querySelector("li").tagName);
// console.log(document.querySelector("ul").tagName);

// console.log(document.querySelector("ul").matches("#to-do-list"));
// console.log(document.querySelector("ul").matches(".title"));

// console.log(document.querySelector("ul").matches("ul"));
// console.log(document.querySelector("ul").matches("a"));

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// accessKey این امکان رو بما میده که روی النتمون یک شورتکات تعریف کنیم و وقتی از اون شورتکات استفاده کنیم المنتمون اکتیو میشود

// document.querySelector("#myform input").accessKey = "i"; //// alt + i = focus input
// document.querySelector("#ref-link").accessKey = "n"; //// alt + n = click link

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.querySelector("#ref-link").attributes); //// all attribute
// console.log("NamedNodeMap like HTMLColloction");

// console.log(document.querySelector("#ref-link").attributes[0]);
// console.log(document.querySelector("#ref-link").attributes[1]);

// console.log(document.querySelector("#ref-link").attributes[0].nodeType);
// console.log(document.querySelector("#ref-link").attributes[0].name);
// console.log(document.querySelector("#ref-link").attributes[0].value);
// console.log(document.querySelector("#ref-link").attributes[0].ownerElement);

// console.log(document.querySelector("#ref-link").attributes);

// console.log(
//   document.querySelector("#ref-link").attributes.getNamedItem("href")
// );

// console.log(
//   document.querySelector("#ref-link").attributes.removeNamedItem("href")
// );

// console.log(document.querySelector("#ref-link").attributes.getNamedItem("id"));

// console.log(
//   document.querySelector("#ref-link").attributes.getNamedItem("id").name
// );

// console.log(
//   document.querySelector("#ref-link").attributes.getNamedItem("id").value
// );

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.getElementById("ref-link").id);
// console.log(document.getElementById("ref-link").href);

// document.getElementById("ref-link").target = "_blank";

// //// در روش بالا یک استثنا وجود دارد اتربیوت کلاس رو نداریم زیرا در جاوا اسکریپت مفهومی به نام کلاس داریم
// document.getElementById("ref-link").class = "red-text"; //// همچین چیزی وجود ندارد
// document.getElementById("ref-link").className = "red-text"; //// این وجود دارد به جای بالایی

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.getElementById("ref-link").setAttribute("target", "_blank");
// document.getElementById("ref-link").removeAttribute("href");

// console.log(document.getElementById("ref-link").getAttributeNode("id"));
// console.log(document.getElementById("ref-link").getAttributeNode("id").value);
// console.log(document.getElementById("ref-link").getAttributeNode("id").name);
// console.log(
//   document.getElementById("ref-link").getAttributeNode("id").ownerElement
// );

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.getElementById("main-title").getAttributeNode("id"));
// console.log(document.getElementById("main-title").getAttributeNode("amir-att")); //// میتونیم یک اتریبیوتی داشته باشیم که در اچ تی ام ال وجود خارجی نداشته باشد

// console.log(document.getElementById("main-title").hasAttributes()); //// چک میکنه ببینه اتربیوتی داره یا نه
// console.log(document.getElementById("main-title").hasAttribute("id")); //// چک میکنه ببینه اتریبیوت ایدی وجود داره یا نه
// console.log(document.getElementById("main-title").hasAttribute("href")); //// چک میکنه ببینه اتریبیوت اچرف وجود داره یا نه

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// این روش زیاد جواب نیست
// // document.querySelector("#main-title").style = "color:red";
// // document.querySelector("#main-title").style = "background-color:blue";

// //// این راه حل جاوااسکریپته
// document.querySelector("#main-title").style.color = "red";
// document.querySelector("#main-title").style.backgroundColor = "blue";
// document.querySelector("#main-title").style.padding = "30px";
// document.querySelector("#myImg").style.borderRadius = "50%";
// document.querySelector("#myImg").style.border = "10px solid black";

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.querySelector("#main-title").className);
// document.querySelector("#main-title").className = "new-class";
// console.log(document.querySelector("#main-title").className);

// //// راه قدیمی
// // let mainTitle = document.querySelector("#main-title");
// // mainTitle.className = mainTitle.className + " new-class";
// // console.log(document.querySelector("#main-title").className);

// ////  راه جدید و ساختارمند
// let mainTitle = document.querySelector("#main-title");

// console.log(document.querySelector("#main-title").className);
// console.log(mainTitle.classList);
// console.log(mainTitle.classList[0]);
// console.log(mainTitle.classList[1]);

// console.log("....................add......................");

// mainTitle.classList.add("new-class-1", "new-class-2");

// console.log(document.querySelector("#main-title").className);
// console.log(mainTitle.classList);

// console.log("....................remove......................");

// mainTitle.classList.remove("new-class-2");

// console.log(document.querySelector("#main-title").className);
// console.log(mainTitle.classList);

// console.log("....................replace......................");

// mainTitle.classList.replace("new-class-1", "new-class-3");

// console.log(document.querySelector("#main-title").className);
// console.log(mainTitle.classList);

// console.log("....................contains......................");
// //// به معنای شامل شدن
// console.log(mainTitle.classList.contains("new-class-3"));
// console.log(mainTitle.classList.contains("new-class-1"));

// console.log(document.querySelector("#main-title").className);
// console.log(mainTitle.classList);

// console.log("....................toggle......................");

// //// اگر کلاس مورد نظر باشه اون رو پاک میکنه اگر کلاس مورد نظر نباشه اون رو اضافه میکنه

// console.log(mainTitle.classList.toggle("new-class-3")); //// این کلاس وجود داشت در نتیجه پاکش میکنه
// console.log(mainTitle.classList.toggle("new-class-1")); //// این کلاس  وجود نداشت در نتیجه اضافه ش میکنه

// console.log(document.querySelector("#main-title").className);
// console.log(mainTitle.classList);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// راه قدیمی

// let newSpan = document.createElement("span");
// newSpan.className = "to-do-item";
// console.log(newSpan);

// let newLi = document.createElement("li");
// newLi.innerText = "dommy item five(new)";
// newLi.className = "to-do-item";
// newLi.appendChild(newSpan);
// console.log(newLi);

// document.getElementById("to-do-list").appendChild(newLi);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// راه جدید و سریع

// //// cloneNode میاد از المنت مورد نظر یه کپی برای ما میگیره

// console.log(document.querySelector(".to-do-item"));

// myLi1 = document.querySelector(".to-do-item").cloneNode(false);
// console.log(myLi1);

// myLi2 = document.querySelector(".to-do-item").cloneNode(true);
// console.log(myLi2);

// myLi2.querySelector("span").innerText = "dommy item five(new)";
// document.getElementById("to-do-list").appendChild(myLi2);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let oldLink = document.querySelector("#ref-link");
// oldLink.href = "http://google.com";
// oldLink.innerText = "google";

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let firstLi = document.querySelector("li");
// document.querySelector("#to-do-list").removeChild(firstLi);

// document.querySelector(".to-do-item").remove();

// let myLi2 = document.querySelector(".to-do-item");
// let link = document.querySelector("#ref-link");

// //// کامنت شدن هر بار یدونه رو امتحان کن
// myLi2.insertAdjacentElement("afterbegin", link);
// myLi2.insertAdjacentElement("beforebegin", link);
// myLi2.insertAdjacentElement("afterend", link);
// myLi2.insertAdjacentElement("beforeend", link);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.querySelector("section").clientWidth);
// console.log(document.querySelector("section").clientHeight);

// console.log(document.querySelector("section").offsetWidth); //// width + border / 434 + 2
// console.log(document.querySelector("section").offsetHeight); //// height + border / 434 + 2

// console.log(document.querySelector("section").scrollWidth);
// console.log(document.querySelector("section").scrollHeight);

// console.log(document.querySelector("section").clientTop);
// console.log(document.querySelector("section").clientLeft);

// console.log(document.querySelector("section").scrollTop);
// console.log(document.querySelector("section").scrollLeft);

// console.log(document.querySelector("section").offsetTop);
// console.log(document.querySelector("section").offsetLeft);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.childNodes);

// console.log(document.querySelector("#to-do-list"));
// console.log(document.querySelector("#to-do-list").childNodes); //// خروجی چایلد نود میتونه هر نوع نودی باشد

// console.log(document.querySelector("#to-do-list").children); //// خروجی چیلدرن فقط نودهای المنت است

// console.log(document.querySelector("#to-do-list").children.length);

// console.log(document.querySelector("#to-do-list").firstChild);
// console.log(document.querySelector("#to-do-list").firstElementChild);

// console.log(document.querySelector("#to-do-list").lastChild);
// console.log(document.querySelector("#to-do-list").lastElementChild);

// console.log(document.querySelector("#to-do-list").parentNode);
// console.log(document.querySelector("#to-do-list").parentElement);

// console.log(document.querySelector("#to-do-list").parentNode.childNodes);
// console.log(document.querySelector("#to-do-list").parentNode.children);

// console.log(document.querySelector("#main-title").nextSibling);
// console.log(document.querySelector("#main-title").nextElementSibling);

// console.log(document.querySelector("#main-title").previousSibling);
// console.log(document.querySelector("#main-title").previousElementSibling);

// console.log(document.querySelector(".to-do-item").closest("ul"));
// console.log(document.querySelector(".to-do-item").closest(".to-do-section"));

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//// این سه روش فقط برای نودهای المنت قابل دسترسی است

// console.log(document.querySelector("#to-do-list").innerHTML);
// console.log(document.querySelector("#to-do-list").textContent);
// console.log(document.querySelector("#to-do-list").innerText);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log(document.documentElement.innerHTML);
// console.log(document.documentElement.textContent);
// console.log(document.documentElement.innerText);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.getElementById("ref-link").innerHTML = "<h1> Hello </h1>";

// document.getElementById("ref-link").innerText = "<h1> Hello </h1>";

// document.getElementById("ref-link").textContent = "<h1> Hello </h1>";

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// Touch Event برای صفحات لمسی
// //// برای تست به تب ریسپانسیو کروم میرویم

// document.querySelector("#to-do-list").addEventListener("touchstart", (e) => {
//   console.log(e);
// });

// document.querySelector("#to-do-list").addEventListener("touchend", (e) => {
//   console.log(e);
// });

// document.querySelector("#to-do-list").addEventListener("touchmove", (e) => {
//   console.log(e);
// });

// document.querySelector("#to-do-list").addEventListener("touchcancel", (e) => {
//   console.log(e);
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.querySelector("#to-do-list").addEventListener("touchstart", (e) => {
//   console.log(e.touches);
// });

// document.querySelector("#to-do-list").addEventListener("touchend", (e) => {
//   console.log(e.touches);
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#main-title")
//   .addEventListener("animationstart", (e) => {
//     console.log("start", e);
//   });

// document.querySelector("#main-title").addEventListener("animationend", (e) => {
//   console.log("end", e);
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.querySelector("li").addEventListener("click", function () {
//   console.log(1);
// });

// document.querySelector("li").addEventListener("click", function (e) {
//   console.log(e);
// });

//// خروجی کد بالا بما آبجکت ایونت را میدهد

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// Event Bubbling

// document.querySelector("ul").addEventListener("click", function () {
//   console.log("ul");
// });

// document.querySelector("ul li").addEventListener("click", function () {
//   console.log("li");
// });

// document.querySelector("ul li span").addEventListener("click", function () {
//   console.log("span");
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.querySelector("ul").addEventListener("click", function () {
//   console.log("ul");
// });

// document.querySelector("ul li").addEventListener("click", function (e) {
//   e.stopPropagation(); //// این باعث اتمام ایونت بابلینگ میشه در این نقطه
//   console.log("li");
// });

// document.querySelector("ul li span").addEventListener(
//   "click",
//   function () {
//     console.log("span");
//   },
//   { once: true } //// این باعث میشه یکبار صدا زده بشه
// );

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.querySelector("ul").addEventListener("click", function (e) {
//   console.log(e);
// });

// window.addEventListener("load", function (e) {
//   console.log(e);
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.querySelector("ul").addEventListener("click", function (e) {
//   console.log(e.type);
//   console.log(e.timeStamp);
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// document.querySelector("#ref-link").addEventListener("click", function (e) {
//   e.preventDefault(); //// جلوی رفتار پیش فرض اچ تی ام ال رو میگیره
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// هروقت لود داکیومنت ما تمام شه این میاد اجرا میشه
// //// فایل های جانبی هم باید لود شوند مثه سی اس اس
// window.addEventListener("load", function () {
//   console.log("Hello");
// });

// //// هروقت لود داکیومنت ما تمام شه این میاد اجرا میشه
// //// فایل های جانبی لود نشده این دستور اجرا میشه
// window.addEventListener("DOMContentLoaded", function () {
//   console.log("Hi");
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// window.addEventListener("orientationchange", function (e) {
//   if (window.screen.orientation.type === "landscape-primary") {
//     document.body.style.backgroundColor = "red";
//   } else {
//     document.body.style.backgroundColor = "blue";
//   }
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// window.addEventListener("scroll", function (e) {
//   console.log(document.documentElement.scrollTop);
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//// Personal Event
//// ایونت شخصی برای ما پرکاربرد نیست فقط محض اطلاع است

// let myEvent = new CustomEvent("personalEvent", { detail: Date.now() });

// document.querySelector("main").addEventListener("personalEvent", function (e) {
//   e.target.style.backgroundColor = "red";
// });

// window.addEventListener("scroll", function (e) {
//   if (document.documentElement.scrollTop > 215) {
//     document.querySelector("main").dispatchEvent(myEvent);
//   }
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.querySelector("#to-do-list").addEventListener("click", function (e) {
//   console.log(e);
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list")
//   .addEventListener("contextmenu", function (e) {
//     console.log(e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list")
//   .addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list")
//   .addEventListener("dblclick", function (e) {
//     console.log(e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list")
//   .addEventListener("mousedown", function (e) {
//     console.log(e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.querySelector("#to-do-list").addEventListener("mouseup", function (e) {
//   console.log(e);
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list")
//   .addEventListener("mouseenter", function (e) {
//     console.log(e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list")
//   .addEventListener("mouseleave", function (e) {
//     console.log(e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list")
//   .addEventListener("mousemove", function (e) {
//     console.log(e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list")
//   .addEventListener("mouseover", function (e) {
//     console.log(e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list")
//   .addEventListener("mouseout", function (e) {
//     console.log(e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.querySelector("#to-do-list").addEventListener("click", function (e) {
//   console.log(1, e.altKey);
//   console.log(2, e.ctrlKey);
//   console.log(3, e.shiftKey);
//   console.log(4, e.clientX);
//   console.log(5, e.clientY);
//   console.log(6, e.offsetX);
//   console.log(7, e.offsetY);
//   console.log(8, e.path);
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list li")
//   .addEventListener("mouseenter", function (e) {
//     console.log(e.relatedTarget);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#to-do-list li")
//   .addEventListener("mouseleave", function (e) {
//     console.log(e.relatedTarget);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("keydown", function (e) {
//     console.log(e, "keydown");
//   });

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("keyup", function (e) {
//     console.log(e, "keyup");
//   });

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("keypress", function (e) {
//     console.log(e, "keypress");
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// هر 3 کار یکسانی رو انجام میدن بستگی به سیستم داره که کدوم جواب بده

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("keydown", function (e) {
//     console.log(e.keyCode); //برای من این درسته
//     console.log(e.charCode);
//     console.log(e.witch);
//   });

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("keydown", function (e) {
//     let char = e.keyCode || e.charCode || e.witch;
//     console.log(char);
//     console.log(String.fromCharCode(char));
//   });

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("keydown", function (e) {
//     console.log(e.keyCode);
//     console.log(e.code);
//     console.log(e.key);
//     console.log(e.repeat);
//     console.log(e.altKey);
//     console.log(e.shiftKey);
//     console.log(e.ctrlKey);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("input", function (e) {
//     console.log("input", e);
//   });

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("beforeinput", function (e) {
//     console.log("beforeinput", e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("input", function (e) {
//     console.log("input", e.data);
//     console.log("input", e.inputType);
//     console.log("input", e.target.value);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("beforeinput", function (e) {
//     if (e.data == 0) {
//       e.preventDefault();
//     } // هر چقد 0 بزنیم داخل باکس نمیاره
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("focus", function (e) {
//     console.log(e, "focus");
//   });

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("blur", function (e) {
//     console.log(e, "blur");
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// line 20 index.html = <h2 draggable="true"></h2>

// document
//   .querySelector("#main-title")
//   .addEventListener("dragstart", function (e) {
//     console.log(e, "dragstart");
//   });

// document.querySelector("#main-title").addEventListener("dragend", function (e) {
//   console.log(e, "dragend");
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.querySelector("#main-title").addEventListener("drag", function (e) {
//   console.log(e, "drag");
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#main-title")
//   .addEventListener("dragstart", function (e) {
//     e.dataTransfer.setData("myh", e.target.id);
//     console.log("dragstart");
//   });

// document.querySelector("header").addEventListener("dragover", function (e) {
//   console.log("dragover");
// });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("copy", function (e) {
//     console.log("copy", e);
//   });

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("cut", function (e) {
//     console.log("cut", e);
//   });

// document
//   .querySelector("#myform input[type=text]")
//   .addEventListener("paste", function (e) {
//     console.log("paste", e);
//   });

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document
//   .querySelector("#main-title")
//   .addEventListener("transitionend", function (e) {
//     console.log(e);
//     console.log(e.propertyName);
//   });
