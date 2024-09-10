//// history Object یکی از آبجکت های بام هستش

const back = document.getElementById("back");
const forward = document.getElementById("forward");
const go = document.getElementById("go");
const length = document.getElementById("length");

back.addEventListener("click", () => history.back());

forward.addEventListener("click", () => history.forward());

//// برای اینکه بتونیم چن تایی جلو یا عقب بریم
go.addEventListener("click", () => history.go(2));
// go.addEventListener("click", () => history.go(-2));

length.addEventListener("click", () => alert(history.length));
