// Get child elements from a parent

const parent = document.querySelector(".parent");

let output;

output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three";

// Get parent elements from a child

const child = document.querySelector(".child");

output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

// Get sibling elements

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
output = secondItem.textContent;
output = secondItem.nextElementSibling;
output = secondItem.nextElementSibling.textContent;

console.log(output);

secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "orange";
