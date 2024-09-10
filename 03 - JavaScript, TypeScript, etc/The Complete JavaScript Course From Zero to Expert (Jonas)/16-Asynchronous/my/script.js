"use strict";
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Our First AJAX Call XMLHttpRequest

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     //// json to js
//     const data = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data[0].flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data[0].name.common}</h3>
//       <h4 class="country__region">${data[0].region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data[0].population / 1_000_000
//       ).toFixed(1)} people</p>
//     </div>
//   </article>
//     `;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("germany");
// getCountryData("australia");

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Welcome to Callback Hell

////////////////////////////////////////////////
////////////////////////////////////////////////
// ////////////////////////////////////////////////

// const renderCountry = function (data, className = "") {
//   const html = `
// <article class="country ${className}">
//   <img class="country__img" src="${data[0].flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data[0].name.common}</h3>
//     <h4 class="country__region">${data[0].region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data[0].population / 1_000_000
//     ).toFixed(1)} people</p>
//   </div>
// </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   //// Country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     const neighbour = data[0].borders?.[0];
//     //// Country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// //// دونه دونه تست شوند
// getCountryAndNeighbour("germany");
// // getCountryAndNeighbour("australia");

// //// const neighbour = data[0].borders[0];
// //// const neighbour = data[0].borders?.[0];
// //// شاید بعضی کشورها مثه استرالیا همسایه نداشته باشند
// //// بخاطر همین از اپشنال چینینگ استفاده میکنیم

////////////////////////////////////////////////

// //// Callback Hell
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Promises and the Fetch API
//// Consuming Promises مصرف پرامیس ها یا پرامیس های مصرفی
//// پرامیس = وعده

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const data = fetch("https://restcountries.com/v3.1/name/iran");
// console.log(data);

////////////////////////////////////////////////

// const renderCountry = function (data, className = "") {
//   const html = `
// <article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1_000_000
//     ).toFixed(1)} people</p>
//   </div>
// </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       //// body اطلاعات در بدنه قرار دارند
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData("germany");
// getCountryData("australia");

// //// response.json()
// //// json() خود متود جیسون هم در واقع یک تابع ناهمزمان است
// //// پس اونو باید ریترن کنیم
// //// ینی خودش یک پرامیس رو برمیگردونه بخاطر همین اینجا باید دو مرحله از دن استفاده کنیم
// //// پس ما باید پرامیس برگشتی شو مصرف کنیم
// //// چون بعد از ریترن دستور دیگه ای نمیشه نوشت پس باید دیتارو در محله بعد بدست اورد
// //// fetch return promisre
// //// then1 return promisre
// //// then2 console.log(data);
// //// data === response.json();

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Chaining Promises = زنجیره پرامیس ها

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const renderCountry = function (data, className = "") {
//   const html = `
// <article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1_000_000
//     ).toFixed(1)} people</p>
//   </div>
// </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   //// Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       //// Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0], "neighbour");
//     });
// };

// //// دونه دونه تست شوند
// getCountryData("germany");
// // getCountryData("australia");

// //// const neighbour = data[0].borders[0];
// //// const neighbour = data[0].borders?.[0];
// //// شاید بعضی کشورها مثه استرالیا همسایه نداشته باشند
// //// بخاطر همین از اپشنال چینینگ استفاده میکنیم

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Handling Rejected Promises

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const renderCountry = function (data, className = "") {
//   const html = `
// <article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1_000_000
//     ).toFixed(1)} people</p>
//   </div>
// </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   //// Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       //// Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0], "neighbour");
//     })
//     .catch(function (err) {
//       console.error(`❌❌❌${err}`);
//       renderError(`🔴🔴🔴 ${err.message}. Try again.`);
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("germany");
// });

// //// Error 1
// getCountryData("dsdsd");

// //// Error 2
// //// برای گرفتن ارور دوم به تب نتورک بروید و افلاین شید
// //// disable cache تیک خورده باشد
// //// سپس روی دکمه باتن کلیک کنید

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Throwing Errors Manually

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const renderCountry = function (data, className = "") {
//   const html = `
// <article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1_000_000
//     ).toFixed(1)} people</p>
//   </div>
// </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url) {
//   return fetch(url).then(function (response) {
//     if (!response.ok) {
//       throw new Error(`Status: ${response.status}`);
//     }
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //// Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) {
//         throw new Error("No neighbour found");
//       }
//       //// Country 2
//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0], "neighbour");
//     })
//     .catch(function (err) {
//       console.error(`❌❌❌${err}`);
//       renderError(`Something went wrong 🔴 ${err.message}. Try again.`);
//     })
//     .finally(function () {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("germany");
// });

// //// Error 1
// // getCountryData("sada");

// //// Error 2 No neighbour found
// // getCountryData("australia");

// //// Error 3
// //// برای گرفتن ارور دوم به تب نتورک بروید و افلاین شید
// //// disable cache تیک خورده باشد
// //// سپس روی دکمه باتن کلیک کنید

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// The Event Loop in Practice

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// //// Synchrnous
// console.log("Start");

// //// Asynchrnous Callback (callback queue = regular callback)
// setTimeout(() => console.log("0 sec timer (callback queue)"));

// //// Asynchrnous Callback (microtask queue)
// Promise.resolve("Resolve Promise 1 (microtask queue)").then((res) => {
//   return console.log(res);
// });

// //// Asynchrnous Callback (microtask queue)
// Promise.resolve("Resolve Promise 2 (microtask queue)").then((res) => {
//   return console.log(res);
// });

// //// Synchrnous
// console.log("End");

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Building a Simple Promise

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(Math.random());

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 1000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// console.log("End");

////////////////////////////////////////////////

// //// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 second passed");
//     return wait(1);
//   })
//   .then(() => console.log("4 second passed"));

// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 seconds passed');
// //     setTimeout(() => {
// //       console.log('3 second passed');
// //       setTimeout(() => {
// //         console.log('4 second passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

////////////////////////////////////////////////

// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject(new Error("Problem!")).catch((x) => console.error(x));

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Promisifying the Geolocation API
//// gps not avilable دیده نشد چون کامپیوتر من لوکیشن نداره

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥`));
// };

// btn.addEventListener("click", whereAmI);

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Consuming Promises with AsyncAwait

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const renderCountry = function (data, className = "") {
//   const html = `
// <article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1_000_000
//     ).toFixed(1)} people</p>
//   </div>
// </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   console.log(res);
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
//   console.log("End ---------- 1");
// };

// console.log("End ---------- 2");

// whereAmI("germany");
// // whereAmI("australia");

// console.log("End ---------- 3");

// //// res.json()
// //// json() خود متود جیسون هم در واقع یک تابع ناهمزمان است
// //// ینی خودش یک پرامیس رو برمیگردونه بخاطر همین اینجا باید دو مرحله از اویت استفاده کنیم
// //// پس ما باید پرامیس برگشتی شو مصرف کنیم
// //// fetch        return promisre
// //// res.json()   return promisre

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

////  Error Handling With try...catch

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// try {
//   let y = 3;
//   const x = 5;
//   x = 7;
// } catch (err) {
//   console.error(`❌❌❌ ${err}`);
// }

////////////////////////////////////////////////

// const renderCountry = function (data, className = "") {
//   const html = `
// <article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1_000_000
//     ).toFixed(1)} people</p>
//   </div>
// </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = async function (country) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`❌❌❌ ${err}`);
//   }
// };

// whereAmI("sdddsd");
// // whereAmI("germany");
// // whereAmI("australia");

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Returning Values from Async Functions

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const renderCountry = function (data, className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1_000_000
//       ).toFixed(1)} people</p>
//     </div>
//   </article>
//     `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   console.log(res);
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
//   console.log("End ---------- 1");
//   return "return data (xyz)";
// };

// //// Test 1 // not return data (xyz)
// // console.log("End ---------- 2");
// // whereAmI("germany");
// // console.log("End ---------- 3");

// //// Test 2 // not return data (xyz)
// // console.log("End ---------- 2");
// // const xyz = whereAmI("germany");
// // console.log(xyz);
// // console.log("End ---------- 3");

// //// Test 3 استفاده نشود
// //// ما میتونیم توابع آسنکرون رو با پرامیس ها مخلوط کنیم اما اکیدا توصیه نمیشود
// // whereAmI("germany")
// //   //   whereAmI("dsdsasd") // Error
// //   .then((xyz) => console.log(xyz))
// //   .catch((err) => console.error(`❌❌❌${err}`))
// //   .finally(() => console.log("----- End -----"));

// //// Test 3 استفاده شود
// //// IIFE function
// (async function () {
//   try {
//     const xyz = await whereAmI("germany");
//     // const xyz = await whereAmI("dsdsasd"); // Error
//     console.log(xyz);
//   } catch (err) {
//     console.error(`❌❌❌${err}`);
//   }
//   console.log("----- End -----");
// })();

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Running Promises in Parallel (Promise.all)

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const getJSON = function (url) {
//   return fetch(url).then(function (response) {
//     if (!response.ok) {
//       throw new Error(`Status: ${response.status}`);
//     }
//     return response.json();
//   });
// };

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     //// Way 1
//     //// به ترتیب اطلاعات دریافت میشوند
//     ////////////////////////////////////////////////////
//     // const data1 = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const data2 = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const data3 = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     // console.log([
//     //   data1[0].capital[0],
//     //   data2[0].capital[0],
//     //   data3[0].capital[0],
//     // ]);
//     ////////////////////////////////////////////////////

//     //// Way 2
//     //// Promise.all اطلاعات چندین دستور رو همزمان دریافت میکند
//     //// اطلاعات هر سه رو همزمان دریافت کنیم
//     ////////////////////////////////////////////////////
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data);
//     console.log(data.map((d) => d[0].capital[0]));
//     ////////////////////////////////////////////////////
//   } catch (err) {
//     console.log(`❌❌❌${err}`);
//   }
// };
// get3Countries("germany", "canada", "iraq");

// //// network برای فهمیدن اینکه اطلاعات در چه تایمی دارن دریافت میشن به نتورک میرویم

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//// Other Promise Combinators race, allSettled and any

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// const getJSON = function (url) {
//   return fetch(url).then(function (response) {
//     if (!response.ok) {
//       throw new Error(`Status: ${response.status}`);
//     }
//     return response.json();
//   });
// };

// //// Promise.race //// هر کدوم از این 3 تا زودتر لود بشه برنده س
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/germany`),
//   ]);
//   console.log(res[0]);
// })();

// //// network برای فهمیدن اینکه اطلاعات در چه تایمی دارن دریافت میشن به نتورک میرویم

////////////////////////////////////////////////

// Promise.race([
//   Promise.resolve("resolve 1"),
//   Promise.reject("reject 1"),
//   Promise.resolve("resolve 2"),
//   Promise.reject("reject 2"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`❌❌❌${err}`));

////////////////////////////////////////////////

// Promise.all([
//   Promise.resolve("resolve 1"),
//   Promise.reject("reject 1"), //// Error
//   Promise.resolve("resolve 2"),
//   Promise.reject("reject 2"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`❌❌❌${err}`));

////////////////////////////////////////////////

// //// Promise.allSettled
// Promise.allSettled([
//   Promise.resolve("resolve 1"),
//   Promise.reject("reject 1"),
//   Promise.resolve("resolve 2"),
//   Promise.reject("reject 2"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`❌❌❌${err}`));

////////////////////////////////////////////////

// //// Promise.any
// Promise.any([
//   Promise.reject("reject 1"),
//   Promise.reject("reject 2"),
//   Promise.resolve("resolve 1"),
//   Promise.reject("reject 3"),
//   Promise.resolve("resolve 2"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`❌❌❌${err}`));

////////////////////////////////////////////////
