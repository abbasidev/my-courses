////////////////////////////////////////

//// if , else Statement

//// if (condition) {
////     Statements1
//// } else {
////     Statements2
//// }

let grade = 12;
if (grade >= 0 && grade <= 20) {
  console.log("نمره معتبر است");
} else {
  console.log("نمره نامعتبر است");
}

////////////////////////////////////////

//// Ternary Operator

//// result = condition ? expression1 : expression2;

grade >= 0 && grade <= 20 ? console.log("معتبر") : console.log("نامعتبر");

let b = -30,
  c;
c = b >= 0 ? b : -b;
console.log(c);

////////////////////////////////////////
