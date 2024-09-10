//// Comparison Operators

let a = 10,
  b = 40,
  c = "10",
  d = "Hello",
  answer;

answer = a == b; // false
answer = a == c; // true
answer = a == d; // false
answer = b == 20; // false
answer = 10 == 10; // true

answer = " " == 0; // true
answer = " " == "0"; // false
answer = false == "0"; // true
answer = "1" == true; // true
answer = "2" == true; // false
answer = "true" == true; // false
answer = null == undefined; // true

answer = " " === 0; // false
answer = " " === "0"; // false
answer = false === "0"; // false
answer = "1" === 1; // false
answer = "1" === "1"; // true
answer = null === undefined; // false

answer = NaN == NaN; // false
answer = NaN === NaN; // false
answer = Number.isNaN(NaN); // true

answer = 10 != "10"; // false
answer = 10 !== "10"; // true

answer = 8 > 4; // true
answer = 8 < 4; // false
answer = 8 >= 4; // true
answer = 8 >= 8; // true
answer = -1 <= 1; // true
answer = -1 <= -1; // true
answer = 8 <= "8"; // true

//// a < b < c < d < ...
//// A < B < C < ... < Z < a
answer = "apples" < "bananas"; // true
answer = "apples" < "Bananas"; // false

console.log(answer);
