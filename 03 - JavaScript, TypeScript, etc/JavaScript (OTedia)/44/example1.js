//// Nested Functions
function outer() {
  let outside = "Outside";
  function inner() {
    let inside = "Inside";
    console.log(inside);
    console.log(outside);
  }
  console.log(outside);
  inner();
}
outer();

// inner(); // Error

function outer() {
  let outside = "Outside";
  function inner() {
    let inside = "Inside";
    console.log(inside);
    console.log(outside);
  }
  return inner; // اگه ریترن نکنیم وقتی اوتر رو بیرون از این فانکشن فرخوانی کنیم به اینر دسترسی نداریم و به ارور میخوریم
}

let myFunc = outer(); // ineer() در اصل اینر رو داریم فراخوانی میکنیم
//// let outside = "Outside"; اما باید اینو در نظر بگیریم که ما هنوز به متغیر اوتساید دسترسی داریم
myFunc();
