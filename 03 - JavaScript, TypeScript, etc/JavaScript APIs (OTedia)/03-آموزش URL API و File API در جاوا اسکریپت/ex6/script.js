const fileSelector = document.getElementById("selector");
const imageTag = document.getElementById("image");
const audioTag = document.getElementById("audio");

fileSelector.addEventListener("change", () => {
  const file = fileSelector.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    const result = event.target.result;
    if (file.type.startsWith("audio")) {
      audioTag.src = result;
      audioTag.classList.remove("d-none");
      imageTag.classList.add("d-none");
    } else if (file.type.startsWith("image")) {
      imageTag.src = result;
      imageTag.classList.remove("d-none");
      audioTag.classList.add("d-none");
    }
  });

  reader.readAsDataURL(file);
});
