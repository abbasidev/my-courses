//// Promise Chaining
const send = document.querySelector("#send");

function getData(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("load", function () {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.responseText);
      }
    });
    xhr.send();
  });
}

//// زنجیره پرامیس

send.addEventListener("click", function () {
  //// Syncarnous
  console.log("Start");

  //// Asyncarnous
  const p = getData("https://jsonplaceholder.typicode.com/todos/1");

  p.then(function (data) {
    console.log(data);
    return getData("https://jsonplaceholder.typicode.com/todos/2");
  })
    .then(function (data) {
      console.log(data);
      return getData("https://jsonplaceholder.typicode.com/todos/3");
    })
    .then(function (data) {
      console.log(data);
      return getData("https://jsonplaceholder.typicode.com/todos/4");
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function () {
      console.log("rejected");
    });
  //// هر جایی که پرامیس با خطا مواجه بشه کچ میاد اجرا میشه

  //// Syncarnous
  console.log("End");
});
