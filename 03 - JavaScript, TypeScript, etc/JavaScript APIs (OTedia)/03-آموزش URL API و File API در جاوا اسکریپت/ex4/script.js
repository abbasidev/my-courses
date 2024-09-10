const fileSelector = document.getElementById("selector");
const previewDiv = document.getElementById("preview");

fileSelector.addEventListener("change", () => {
  const file = fileSelector.files[0];
  console.log(file);

  if (file) {
    const fileURL = URL.createObjectURL(file);
    previewDiv.innerHTML = "";
    if (file.type.startsWith("video/")) {
      const video = document.createElement("video");
      video.controls = true;
      video.src = fileURL;
      previewDiv.appendChild(video);
    } else if (file.type.startsWith("audio/")) {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = fileURL;
      previewDiv.appendChild(audio);
    } else if (file.type.startsWith("image/")) {
      const image = document.createElement("img");
      image.src = fileURL;
      previewDiv.appendChild(image);
    } else {
      const p = document.createElement("p");
      p.innerHTML = "Unsupported format";
      previewDiv.appendChild(p);
    }
  }
});
