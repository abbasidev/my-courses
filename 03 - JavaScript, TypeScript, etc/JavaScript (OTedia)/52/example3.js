//// Sending data with FormData object
const form = document.querySelector("form");
const data = document.querySelector("#data");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", `post.php`);
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        data.innerHTML = xhr.responseText;
      } else {
        data.innerHTML = "Error: " + xhr.status;
      }
    }
  });
  xhr.send(formData);
});
