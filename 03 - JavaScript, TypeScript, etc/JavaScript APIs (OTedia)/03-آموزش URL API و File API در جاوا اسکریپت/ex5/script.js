const fileSelector = document.getElementById("selector");
const textArea = document.getElementById("textarea");
const saveButton = document.getElementById("save");

fileSelector.addEventListener("change", () => {
  const file = fileSelector.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    textArea.value = event.target.result;
  });

  reader.readAsText(file);
});

saveButton.addEventListener("click", () => {
  const text = textArea.value;
  let filename = prompt("نام فایل را وارد کنید.");
  if (!filename) {
    return;
  } else if (!filename.toLowerCase().endsWith(".txt")) {
    filename = filename + ".txt";
  }
  const file = new File([text], filename, { type: "text/plain" });

  const link = document.createElement("a");
  link.download = filename;
  link.href = URL.createObjectURL(file);
  link.click();
});
