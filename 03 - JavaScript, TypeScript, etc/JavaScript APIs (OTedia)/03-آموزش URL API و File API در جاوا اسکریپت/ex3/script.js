const obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

const json = JSON.stringify(obj);
const file = new File([json], "my-file.txt", {
  type: "application/json",
  lastModified: 1111111111111,
});
console.log(file);

const link = document.createElement("a");
link.innerHTML = "Download Data";
document.body.appendChild(link);
link.href = URL.createObjectURL(file);
link.download = "data.json";
// URL.revokeObjectURL(link.href);
