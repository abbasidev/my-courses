//// Working With Attributes - Part 1

let div = document.getElementById("myid");
console.log(div.getAttribute("class"));
console.log(div.getAttribute("title"));

div.setAttribute("class", "newclass");
div.setAttribute("title", "mytitle");
console.log(div.getAttribute("class"));
console.log(div.getAttribute("title"));

div.removeAttribute("id");
console.log(div.getAttribute("id"));

div.setAttribute("id", "myid");
console.log(div.id);

div.title = "newtitle";
console.log(div.getAttribute("title"));
console.log(div.title);

div.className = "myclass";
console.log(div.getAttribute("class"));

console.log(div.getAttribute("myattr"));
console.log(div.myattr);

div.newattr = "newvalue";
console.log(div.getAttribute("newattr"));
console.log(div.newattr);
