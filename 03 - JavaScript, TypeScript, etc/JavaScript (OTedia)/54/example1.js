//// Upload with forms
const upload = document.querySelector("#upload");
const progress = document.querySelector("#progress");
const form = document.querySelector("form");

upload.addEventListener("change", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost/upload.php");

  const formData = new FormData(form);

  xhr.addEventListener("load", function () {
    console.log(xhr.responseText);
  });

  xhr.upload.addEventListener("progress", function (event) {
    progress.innerHTML = "progress: " + event.loaded + " bytes sent.<br />";
    if (event.lengthComputable) {
      let percent = parseInt((event.loaded / event.total) * 100);
      progress.innerHTML += "progress: " + percent + "% sent.";
    }
  });

  xhr.send(formData);
});
