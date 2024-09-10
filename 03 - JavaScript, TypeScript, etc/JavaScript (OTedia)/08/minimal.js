//// Minimal Evaluation
//// زیر دیپلم = 1
//// 2 = دیپلم
//// 3 = فوق دیپلم
//// 4 = لیسانس
//// 5 = فوق لیسانس
//// 6 = دکتری

let education = 3;
let age = 27;
let city = "Tehran";

let condition1 = education >= 4;
let condition2 = age <= 30;
let condition3 = city === "Tehran";

let answer = condition1 && condition2 && condition3;
console.log(answer);

console.log(true || false || false || "H");
console.log("Hello" || false);
console.log(true && true && 0 && false && true);
