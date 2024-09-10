const fileSelector = document.getElementById("selector");
const resultDiv = document.getElementById("result");

fileSelector.addEventListener("change", () => {
  const files = fileSelector.files;

  for (let file of files) {
    const form = new FormData();
    form.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/");

    const progressBar = addProgressBar(file);

    xhr.upload.addEventListener("progress", (event) => {
      const percent = parseInt((event.loaded / event.total) * 100);
      progressBar.innerHTML = percent + "%";
      progressBar.style.width = percent + "%";
    });

    xhr.send(form);
  }
});

function addProgressBar(file) {
  let html = `
        <label class="m-1">${file.name} (${convertSize(file.size)})</label>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0">0%</div>
        </div>
    `;
  const container = document.createElement("div");
  container.className = "mb-3";
  container.innerHTML = html;
  resultDiv.appendChild(container);
  const progressBar = container.querySelector(".progress-bar");
  return progressBar;
}

function convertSize(size) {
  if (size < 1024) {
    return size + "B";
  } else if (size < 1024 * 1024) {
    return parseInt((size * 10) / 1024) / 10 + "KB";
  } else {
    return parseInt((size * 10) / 1024 / 1024) / 10 + "MB";
  }
}
