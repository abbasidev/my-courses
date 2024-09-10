const div = document.createElement("div");
console.log(div);

div.className = "my-element";
div.id = "my-element";

// div.title = "My Element";
div.setAttribute("title", "My Element");

// div.innerText = "Hello World";

const text = document.createTextNode("Hello World");
div.appendChild(text);
// append = اضافه کردن

// document.body.appendChild(div);

// document.querySelector("ul").appendChild(div);
