fetch("./movies.json").then((response) => console.log(response));

//// Fetching a JSON file
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

//// Fetching a text file
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

//// Fetching from an API
fetch("https://api.github.com/users/bradtraversy")
  .then((response) => response.json())
  .then((data) => (document.querySelector("h1").textContent = data.login));

// //// response.json()
// //// json() خود متود جیسون هم در واقع یک تابع ناهمزمان است
// //// پس اونو باید ریترن کنیم
// //// ینی خودش یک پرامیس رو برمیگردونه بخاطر همین اینجا باید دو مرحله از دن استفاده کنیم
// //// پس ما باید پرامیس برگشتی شو مصرف کنیم
// //// چون بعد از ریترن دستور دیگه ای نمیشه نوشت پس باید دیتارو در محله بعد بدست اورد

// //// fetch return a promise
// //// response return a promise

// //// fetch return promisre
// //// then1 return promisre
// //// then2 console.log(data);
// //// data === response.json();
