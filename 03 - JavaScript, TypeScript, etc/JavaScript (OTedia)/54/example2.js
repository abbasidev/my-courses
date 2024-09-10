//// Upload without forms
const upload = document.querySelector("#upload");
const progress = document.querySelector("#progress");

upload.addEventListener("change", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost/upload.php");

  const formData = new FormData();
  const files = upload.files;
  for (let i = 0; i < files.length; i++) {
    formData.append("file" + i, files[i]);
  }

  xhr.addEventListener("load", function (event) {
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
