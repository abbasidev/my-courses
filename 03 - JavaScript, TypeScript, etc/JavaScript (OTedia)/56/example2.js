//// An example of promises
const p = new Promise(function (resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  xhr.addEventListener("load", function () {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      // if (false) {
      if (true) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.responseText);
      }
    }
  });
  xhr.send();
});

p.then(function () {
  console.log("fulfilled");
}).catch(function () {
  console.log("rejected");
});

////////////////////////////////////////////////////////////////////
