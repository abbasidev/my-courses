//// Sending data in POST requests
const form = document.querySelector("form");
const data = document.querySelector("#data");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let firstname = document.querySelector("#firstname").value;
  let lastname = document.querySelector("#lastname").value;

  firstname = encodeURIComponent(firstname);
  lastname = encodeURIComponent(lastname);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", `post.php`);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        data.innerHTML = xhr.responseText;
      } else {
        data.innerHTML = "Error: " + xhr.status;
      }
    }
  });
  xhr.send(`firstname=${firstname}&lastname=${lastname}`);
});
