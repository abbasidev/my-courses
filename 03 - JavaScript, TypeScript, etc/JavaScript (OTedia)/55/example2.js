//// Callback Hell - Part 2

const send = document.querySelector("#send");

send.addEventListener("click", function () {
  const xhr1 = new XMLHttpRequest();
  xhr1.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  xhr1.addEventListener("load", function () {
    console.log(xhr1.responseText);

    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "https://jsonplaceholder.typicode.com/todos/2");
    xhr2.addEventListener("load", function () {
      console.log(xhr2.responseText);

      const xhr3 = new XMLHttpRequest();
      xhr3.open("GET", "https://jsonplaceholder.typicode.com/todos/3");
      xhr3.addEventListener("load", function () {
        console.log(xhr3.responseText);

        const xhr4 = new XMLHttpRequest();
        xhr4.open("GET", "https://jsonplaceholder.typicode.com/todos/4");
        xhr4.addEventListener("load", function () {
          console.log(xhr4.responseText);
        });
        xhr4.send();
      });
      xhr3.send();
    });
    xhr2.send();
  });
  xhr1.send();
});
