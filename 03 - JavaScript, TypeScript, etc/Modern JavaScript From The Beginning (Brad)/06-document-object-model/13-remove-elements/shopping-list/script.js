// // remove() Method
// function removeClearButton() {
//   const clearBtn = document.querySelector("#clear");
//   clearBtn.remove();
// }
// removeClearButton();

// // removeChild() Method
// function removeFirstItem() {
//   const ul = document.querySelector("ul");
//   const li = document.querySelector("li:first-child");
//   ul.removeChild(li);
// }
// removeFirstItem();

/////////////////////////////////////////////////
//// Other examples
/////////////////////////////////////////////////

// function removeItem(itemNumber) {
//   const ul = document.querySelector("ul");
//   const li = document.querySelector(`li:nth-child(${itemNumber})`);
//   ul.removeChild(li);
// }
// removeItem(1);
// removeItem(2);

//////////////////////////////////////////////////

// function removeItem2(itemNumber) {
//   const ul = document.querySelector("ul");
//   const li = document.querySelectorAll("li")[itemNumber - 1];
//   ul.removeChild(li);
// }
// removeItem2(1);
// removeItem2(2);

//////////////////////////////////////////////////

// function removeItem3(itemNumber) {
//   const li = document.querySelectorAll("li");
//   li[itemNumber - 1].remove();
// }
// removeItem3(1);
// removeItem3(2);

//////////////////////////////////////////////////

// const removeItem4 = (itemNumber) =>
//   document.querySelectorAll("li")[itemNumber - 1].remove();

// removeItem4(1);
// removeItem4(2);
