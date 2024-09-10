//// Request Object - Part 1
const h = new Headers({
  "Content-Type": "image/png",
});

const req = new Request("https://jsonplaceholder.typicode.com/todos/1", {
  method: "GET",

  mode: "cors", // cors(default) , same-origin
  //// error
  //   mode: "same-origin",

  //// اگه سرور بخواد ری دایرکت انجام بده
  redirect: "follow", // follow(default) , error , manual
  //   redirect: "error",
  //   redirect: "manual",

  headers: h,
});

fetch(req)
  .then((response) => {
    console.log(response.status);
    console.log(response.url);
    return response.text();
  })
  .then((text) => console.log(text));
