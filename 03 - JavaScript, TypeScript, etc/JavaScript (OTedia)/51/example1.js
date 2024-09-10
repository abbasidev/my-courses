//// XMLHttpRequest Object
const btn = document.getElementById("button");

btn.addEventListener("click", function () {
  const request = new XMLHttpRequest();

  //// Syncarnous request
  //   request.open("GET", "https://jsonplaceholder.typicode.com/todos", false);

  //// Aysyncarnous request
  //   request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

  //// Aysyncarnous request گزینه سوم اختیاری بود نزاریم همون آسنکرونه
  //// ما همیشه برای دریافت اطلاعات به شیوه آسنکرون عمل میکنیم

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");

  request.send();

  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);
  });
});
