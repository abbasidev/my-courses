//// Conversion between Strings & Numbers

console.log("3" * 4);

console.log("Hello" * 3);

console.log("10" * 1);
console.log("10.3" * 1);
console.log("0xff" * 1);
console.log("Hello" * 1);
console.log("22aa" * 1);
console.log("" * 1);

console.log("7" + 3);

let a = "200";
let b = Number(a);
console.log(typeof a);
console.log(typeof b);

console.log(Number("400"));
console.log(+"400");

console.log(Number("Hello"));
console.log(Number("2e6"));
console.log(Number("7") + 3);

console.log(String(10));
console.log(String(22.11));
console.log(String(2e6));
console.log(String(NaN));

console.log((10).toString());
console.log((22.11).toString());
console.log((2e6).toString());
console.log(NaN.toString());

//// مزیت متود تو استرینگ نسبت به تابع استرینگ اینه که میتونیم مبنا بدیم
console.log((100).toString(2)); // مبنای 2
console.log((100).toString(4)); // مبنای 4
console.log((100).toString(16)); // مبنای 16
console.log((100).toString(36)); // مبنای 36
