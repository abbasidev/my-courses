//// Working With Attributes - Part 2

let div = document.getElementById("user");
console.log(div.getAttribute("data-user"));
console.log(div.dataset.user);
console.log(div.dataset.dateOfBirth);

div.className = "class1 class2 class3 class4";

console.log(div.className);
console.log(div.classList);
console.log(Array.from(div.classList));

div.classList.add("class5");
console.log(Array.from(div.classList));

div.classList.remove("class4", "class2");
console.log(Array.from(div.classList));

div.classList.toggle("class4");
div.classList.toggle("class3");
console.log(Array.from(div.classList));

div.classList.replace("class1", "class2");
console.log(Array.from(div.classList));

console.log(div.classList.contains("class1"));
console.log(div.classList.contains("class2"));
