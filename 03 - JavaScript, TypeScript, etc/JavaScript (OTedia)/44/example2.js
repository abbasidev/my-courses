//// Closures
function makeAdder(x) {
  return function (y) {
    // این تابع یک کلوژر محسوب میشود
    return x + y; // x چون به مقدار متغیری که از خودش نیست دسترسی داره
  };
}

const adder1 = makeAdder(5);
const adder2 = makeAdder(10);
console.log(adder1(2));
console.log(adder2(10));

//// Change outside variables
function makeCounter(start) {
  let i = start;
  return function () {
    return i++;
  };
}
const counter1 = makeCounter(1);
const counter2 = makeCounter(10);

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());

//// اگر این رو مثه یه تابع معمولی مینوشتیم نمیتونست با هر بار فراخوانی مقدار قبلی رو به خاطر بیاره اما با کلوژر میتونه مقادیر قبلی رو به خاطر بسپاره
