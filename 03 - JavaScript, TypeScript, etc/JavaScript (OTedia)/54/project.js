//// Project
const upload = document.querySelector("#files");

upload.addEventListener("change", function () {
  const files = upload.files;
  for (let i = 0; i < files.length; i++) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/upload.php");

    const formData = new FormData();
    formData.append(files[i].name, files[i]);
    const block = addProgressBlock(files[i]);

    xhr.upload.addEventListener("progress", function (event) {
      const progressDiv = block.querySelector(".progress-bar div");
      const progressSpan = block.querySelector("span");
      if (event.lengthComputable) {
        const percent = ((event.loaded / event.total) * 100).toFixed(1);
        progressSpan.innerHTML = percent + "%";
        progressDiv.style.width = percent + "%";
      }
    });

    xhr.send(formData);
  }
});

function addProgressBlock(file) {
  const progressArea = document.querySelector("#progress-area");
  const html = `<label>file: ${file.name}</label>
                    <div class="progress-bar">
                         <div style="width: 0%;"></div>
                         <span>0%</span>
                    </div>`;
  const block = document.createElement("div");
  block.setAttribute("class", "progress-block");
  block.innerHTML = html;
  progressArea.appendChild(block);
  return block;
}
