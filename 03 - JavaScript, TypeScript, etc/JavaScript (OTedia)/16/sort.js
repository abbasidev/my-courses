//// Arrays and sort Method

let numbers = [5, 9, 15, 23, 19];
let result = numbers.sort();
console.log(result);

//// Way 1
// function compare(value1 , value2){
// 	if(value1 < value2){
// 		return -1;
// 	}else if(value1 > value2){
// 		return 1;
// 	}else{
// 		return 0;
// 	}
// }
// result = numbers.sort(compare);
// console.log(result);

//// Way 2
function compare(value1, value2) {
  return value2 - value1;
}
result = numbers.sort(compare);
console.log(result);

result = numbers.sort(function (value1, value2) {
  return value1 - value2;
});
console.log(result);

result = numbers.sort((value1, value2) => value2 - value1);
console.log(result);
