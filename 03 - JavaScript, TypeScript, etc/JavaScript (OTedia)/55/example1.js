//// Callback Hell - Part 1

const send = document.querySelector("#send");

send.addEventListener("click", function () {
  const xhr1 = new XMLHttpRequest();
  xhr1.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  xhr1.addEventListener("load", function () {
    console.log(xhr1.responseText);
  });
  xhr1.send();

  const xhr2 = new XMLHttpRequest();
  xhr2.open("GET", "https://jsonplaceholder.typicode.com/todos/2");
  xhr2.addEventListener("load", function () {
    console.log(xhr2.responseText);
  });
  xhr2.send();

  const xhr3 = new XMLHttpRequest();
  xhr3.open("GET", "https://jsonplaceholder.typicode.com/todos/3");
  xhr3.addEventListener("load", function () {
    console.log(xhr3.responseText);
  });
  xhr3.send();

  const xhr4 = new XMLHttpRequest();
  xhr4.open("GET", "https://jsonplaceholder.typicode.com/todos/4");
  xhr4.addEventListener("load", function () {
    console.log(xhr4.responseText);
  });
  xhr4.send();
});
