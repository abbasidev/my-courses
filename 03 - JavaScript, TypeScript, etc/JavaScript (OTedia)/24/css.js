//// CSS Styles

let ul = document.querySelector("ul");
ul.style.color = "blue";
ul.style.fontSize = "24px";
ul.style.backgroundColor = "yellow";

ul.style["font-weight"] = "bold";
ul.style["font-family"] = "Tahoma";

ul.classList.add("border");
ul.classList.add("center");
ul.classList.toggle("border");
ul.classList.toggle("border");

console.log(ul.style.color);
console.log(ul.style.border);
console.log(ul.style.margin);

let styles = getComputedStyle(ul);
console.log(styles.getPropertyValue("border"));
console.log(styles.getPropertyValue("color"));
console.log(styles.getPropertyValue("width"));
console.log(styles.getPropertyValue("font-size"));
console.log(styles.getPropertyValue("margin"));
