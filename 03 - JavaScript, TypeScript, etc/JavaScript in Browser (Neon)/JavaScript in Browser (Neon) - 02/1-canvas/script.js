//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// let canves = document.querySelector("canvas");

// canves.width = window.innerWidth / 2;
// canves.height = window.innerHeight / 2;

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// تا آخرین لاین از این قطعه کد استفاده میشود

// let canves = document.querySelector("canvas");

// canves.width = window.innerWidth;
// canves.height = window.innerHeight;

// let c = canves.getContext("2d");

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// c.translate(100, 100); //// مبدا 0 و 0 رو تغییر میده

// c.fillStyle = "pink";
// c.fillRect(100, 0, 100, 100);
// c.fillStyle = "red";
// c.fillRect(300, 100, 100, 100);
// c.fillStyle = "green";
// c.fillRect(500, 200, 100, 100);

// c.fillStyle = "white";
// c.font = "30px verdana";
// c.fillText("Hello1", 100, 50);
// c.fillText("Hello2", 300, 150);
// c.fillText("Hello3", 500, 250);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// c.beginPath(); //// اعلام میکنیم که یه رسم جدید داریم
// c.lineTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "black";
// c.stroke(); //// دستور رسم
// //// همه چی باید قبل از دستور رسم انجام شود

// c.fillStyle = "yellow";
// c.fill();

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// c.beginPath(); //// اعلام میکنیم که یه رسم جدید داریم
// c.lineTo(450, 200);
// c.lineTo(600, 100);
// c.lineTo(600, 400);
// c.closePath(); //// نقطه ابتدارو به نقطه انتها میچسبونه
// c.strokeStyle = "black";
// c.stroke(); //// دستور رسم
// //// همه چی باید قبل از دستور رسم انجام شود

// c.fillStyle = "pink";
// c.fill();

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// c.beginPath();
// c.arc(300, 300, 50, Math.PI / 2, 1.5 * Math.PI); //// more information (page 5)

// c.strokeStyle = "blue";
// c.stroke();
// c.fillStyle = "pink";
// c.fill();

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// for (let i = 0; i < 100; i++) {
//   x = Math.random() * window.innerWidth;
//   y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 50, 0, 2 * Math.PI);
//   c.stroke();
//   c.fillStyle = "pink";
//   c.fill();
// }

// c.clearRect(100, 200, 300, 200);

// c.clearRect(0, 0, window.innerWidth, window.innerHeight); //// کلشو پاک میکنه
