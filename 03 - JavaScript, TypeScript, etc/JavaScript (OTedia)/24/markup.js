//// Markup Insertion

let ul = document.querySelector("ul");
console.log(ul.innerHTML);

ul.innerHTML = "<li>Apple</li><li>Banana</li>";
console.log(ul.innerHTML);

let newChildren = `<li>Orange</li>
<li>Cherry</li>
<li>Lemon</li>`;
ul.innerHTML += newChildren;
console.log(ul.innerHTML);

console.log(ul.outerHTML);

ul.outerHTML = "<ul><li>Apple</li></ul>";
console.log(ul.innerHTML);

ul = document.querySelector("ul");
console.log(ul.innerHTML);

document.head.innerHTML += `
<style>
body{
    color: green;
}
</style>`;
