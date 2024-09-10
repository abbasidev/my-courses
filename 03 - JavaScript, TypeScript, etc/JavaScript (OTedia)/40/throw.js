//// throw Statement

// throw 'Error2';
// throw 42;
// throw new RangeError('Value is too big');

// function example(str){
// 	if(typeof str != "string"){
// 		throw new TypeError('Input type is wrong!');
// 	}
// 	console.log('Type is correct.');
// }

// example('hello');
// example(22);

// function mySqrt(num){
// 	if(typeof num != "number"){
// 		throw new TypeError('ورودی این تابع حتماً باید یک عدد باشد');
// 	}else if(num < 0){
// 		throw new RangeError('اعداد منفی ریشه‌ی دوم حقیقی ندارند');
// 	}
// 	console.log(Math.sqrt(num));
// }

// mySqrt(36);
// mySqrt('hello');
// mySqrt(-2);

// try{
//     mySqrt(-3);
// }catch(error){
//     console.log(error.message);
// }
