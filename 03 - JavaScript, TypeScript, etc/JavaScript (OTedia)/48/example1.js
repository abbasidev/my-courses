//// JSON.stringify Method
const book = {
  title: "JavaScript Everywhere",
  author: {
    firstname: "Adam",
    lastname: "Scott",
  },
  year: 2020,
  other: undefined,
  //// undefined در جیسون معتبر نیست
  other2: [undefined],
  //// undefined in array to convert null in json
  //// اندیفایند داخل آرایه به نال تبدیل میشه در جیسون
  showTitle() {
    //// متود های جاوا اسکریپتی هم در جیسون ازشون صرف نظر میشه
    //// چون توی جیسون ما فقط داده هارو ذخیره میکنیم و متودها جز داده ها محسوب نمیشوند
    alert(this.title);
  },
};

console.log(JSON.stringify(book)); //// معمولا از همین استفاده میکنیم و از آرگومان های دوم و سوم زیاد استفاده نمیکنیم
console.log(JSON.stringify(book, ["title", "year"]));
console.log(JSON.stringify(book, ["title", "year"], 4)); //// چهار سطح تو رفتگی رو ایجاد میکنه برای خوانایی بیشتر
console.log(JSON.stringify(book, null, 4));
console.log(JSON.stringify(book, null, "* * * ")); //// این باعث میشه که رشته جیسون ما یک رشته معتبر جیسونی نباشه

/////////////////////////////////////////

function replacer(key, value) {
  if (typeof value === "number") {
    return undefined;
  }
  return value;
}
console.log(JSON.stringify(book, replacer, 4));
