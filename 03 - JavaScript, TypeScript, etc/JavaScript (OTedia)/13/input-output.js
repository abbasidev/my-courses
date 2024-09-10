//// Input & Output in Functions
//// Parameters & Arguments

/////////////////////////////////////////
function showBio(firstName, lastName, age) {
  console.log("First name = " + firstName);
  console.log("Last name = " + lastName);
  console.log("Age = " + age);
}

showBio("Mohammad", "Moosavi", 36);
showBio("Abbas", "Moqaddam", 33);

/////////////////////////////////////////
function mean(a, b, c, d, e) {
  let average, total;
  total = a + b + c + d + e;
  average = total / 5;
  console.log("Average is : " + average);
}

mean(2, 4, 10, 11, 4);
mean(2, 4, 10, 11, 4, 21);
mean(2, 4, 10, 11);

/////////////////////////////////////////
function mean2(a, b, c, d, e) {
  let average, total;
  total = a + b + c + d + e;
  average = total / 5;
  return average; // اگر ریترن نکنیم آندیفایند برمیگردونه برای تست این لاینو کامنت کن
}

let a = mean2(2, 4, 10, 11, 4);
console.log(a);

console.log(mean2(2, 4, 10, 11, 4));
