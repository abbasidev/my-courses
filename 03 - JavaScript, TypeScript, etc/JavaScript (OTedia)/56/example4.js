//// Promise methods

//////////////////////////////////////////////////////

// Promise.resolve("Success")
//   .then((value) => console.log("Resolved:", value))
//   .catch((value) => console.log("Rejected:", value));

// Promise.reject("Fail")
//   .then((value) => console.log("Resolved:", value))
//   .catch((value) => console.log("Rejected:", value));

//////////////////////////////////////////////////////

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p1 resolved");
    reject();
  }, 500);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p2 resolved");
    resolve();
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p3 resolved");
    reject();
  }, 1500);
});

Promise.all([p1, p2, p3])
  .then(() => console.log("All promises resolved (all)"))
  .catch(() => console.log("Some promises rejected (all)"));

Promise.allSettled([p1, p2, p3]).then(() =>
  console.log("All promises finished (allSettled)")
);

Promise.race([p1, p2, p3])
  .then(() => console.log("The promise resolved (race)"))
  .catch(() => console.log("The promise rejected (race)"));

//////////////////////////////////////////////////////
