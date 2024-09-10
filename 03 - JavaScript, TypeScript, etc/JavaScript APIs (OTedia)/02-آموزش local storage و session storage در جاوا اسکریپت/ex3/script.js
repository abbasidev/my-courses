sessionStorage.setItem("firstname", "Abbas");
sessionStorage.lastname = "Moqaddam";

const obj = { a: 1, b: 2 };
sessionStorage.obj = JSON.stringify(obj);

console.log(JSON.parse(sessionStorage.obj));

console.log({ ...sessionStorage });
