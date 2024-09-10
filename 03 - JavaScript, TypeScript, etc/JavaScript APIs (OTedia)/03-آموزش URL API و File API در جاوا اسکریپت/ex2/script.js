const fileSelector = document.getElementById("selector");
const resultDiv = document.getElementById("result");

fileSelector.addEventListener("change", (e) => {
  const files = fileSelector.files;
  console.log(files);

  let str = "";
  for (let file of files) {
    str += `
        <p>Filename: ${file.name}</p>
        <p>Size: ${file.size} Bytes</p>
        <p>Type: ${file.type}</p>
        <p>Date: ${new Date(file.lastModified)}</p>
        <hr />
        `;
  }
  resultDiv.innerHTML = str;
});

fileSelector.addEventListener("click", (e) => {
  fileSelector.value = "";
});
