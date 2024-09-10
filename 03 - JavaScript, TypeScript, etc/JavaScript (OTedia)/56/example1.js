//// Introduction to Promises
const p = new Promise(executor);
//// executor function = معمولا بی نام تعریفش میکنیم داخل خود پرامیس
//// کدی که ما نوشتیم سنکرون است اما در عمل باید آسنکرون بنویسیم
function executor(resolve, reject) {
  const rand = Math.random();
  console.log(rand);
  if (rand > 0.5) {
    resolve();
  } else {
    reject();
  }
}
//// سه حالتی که پرامیس باهاش مواجهه pending - fulfilled (resolved) - rejected
//// fulfilled (resolved) اگه عدد رندونم بالاتر از نیم بود عملیات با موفقیت کارشو انجام داده
//// rejected اگه عدد رندونم پایینتر از نیم بود عملیات با موفقیت کارشو انجام نداده

p.then(onFulfilled).catch(onRejected).finally(onFinally);
//// then = fulfilled
//// catch = rejected
//// finally = در هر صورت اجرا میشود

function onFulfilled() {
  console.log("fulfilled");
}

function onRejected() {
  console.log("rejected");
}

function onFinally() {
  console.log("onFinally");
}
