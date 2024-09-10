//// Error Types

// ------------- Syntax Errors ----------------

// let a = 10 , b = 20;
// let c = a ++ b;
// console.log(c);

// let a = 10;
// let a = 20;
// function a(){
// 	console.log('Hello');
// }

// ------------- Reference Errors -------------

// hello();
// let a = b + 5;

// ------------- Range Errors -----------------

// const x = [1 , 2];
// x.length = 4;
// x.length = -3;

// ------------- Type Error ------------------

// let a = Math.int(10.5);
// const c = 2;
// c = 3;

// function getQueryString(url){
// 	let pos = url.indexOf('?');
// 	if (pos > -1){
// 		console.log(url.substring(pos + 1));
// 	}else{
//         console.log('Invalid input');
//     }
// }

// getQueryString('https://otedia.com/?q=javascript');
// getQueryString('https://otedia.com/');
// getQueryString(22);
