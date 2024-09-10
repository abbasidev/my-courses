//// توابع بازگشتی

////
// let i = 0;
// function recFunction(){
// 	i++;
// 	if(i % 100 == 0)
// 		console.log(i);
//     recFunction();
// }
// recFunction();

//// تابع فاکتوریل
//// fact(n) = n × (n-1) × (n-2) × ... × 2 × 1
//// fact(5) = 5 × 4 × 3 × 2 × 1 = 120
//// fact(n) = n × fact(n-1)

////
function fact(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(5));

////
function fact2(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(fact2(3));
