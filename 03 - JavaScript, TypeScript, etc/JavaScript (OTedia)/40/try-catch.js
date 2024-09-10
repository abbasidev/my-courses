//// try-catch Block

// try{
//     const arr = new Array();
//     let size = prompt('طول آرایه را وارد کنید');
//     arr.length = size;
// }catch(error){
//     console.log('لطفاً یک عدد صحیح مثبت را وارد کنید');
// }

// try{
//     const arr = new Array();
// 	let size = prompt('طول آرایه را وارد کنید');
// 	arr.length = size;
// 	let method = prompt('نام یک متد را وارد کنید');
// 	let result = Math[method](10);
// 	console.log(result);
// }catch(error){
// 	if(error instanceof RangeError){
// 		console.log('لطفاً یک عدد صحیح مثبت را وارد کنید');
// 	}else if(error instanceof TypeError){
// 		console.log('لطفاً نام متد را صحیح وارد کنید');
// 	}
// }

// function example(){
// 	try{
// 		return 1;
// 	}catch(error){
// 		return 2;
// 	}finally{
// 		return 3;
// 	}
// }

// console.log(example());
