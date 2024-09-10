//// Logical Operators

let answer;
//// NOT Operator
answer = !true; // false
answer = !false; // true
answer = !0; // true
answer = !"Hello"; // false
answer = !null; // true

//// AND Operator
answer = true && false; // false
answer = false && false; // false
answer = true && true; // true
answer = "Hello" && true; // true
answer = true && "Hello"; // 'Hello'
answer = true && true && true && false && true; // false

//// OR Operator
answer = true || false; // true
answer = false || false; // false
answer = false || true; // true
answer = false || "Hello"; // 'Hello'
answer = "Hello" || false; // 'Hello'
answer = false || true || "Hello" || true; // true

console.log(answer);
