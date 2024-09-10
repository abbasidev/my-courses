//// Iterators & Generators تکرارشونده ها و مولدها

//// Generator Function
//// شبیه کار کلوژر رو انجام میدهند اما به شکلی ساده تر
function* myGenerator() {
  yield 1; //// return به جای ریترن از ییلد استفاده میکنیم
  yield 2;
}

let it = myGenerator();
//// next() method هر بار که متود نکست رو فراخوانی کنیم تابع مولد مورد نظر از همون جایی که اجراش متوقف شده بود اجر میشه
//// بار اول مشخصه که از اولش شروع میکنه
console.log(it.next()); // yield 1
console.log(it.next()); // yield 2
console.log(it.next()); // undefined

const obj = {
  *generator() {
    yield "a";
    yield "b";
  },
};

it = obj.generator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
