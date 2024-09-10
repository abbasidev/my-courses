//// Array Destructuring
let colors = ["red", "blue", "green"];
let color1 = colors[0];
let color2 = colors[1];
let color3 = colors[2];
console.log(color1, color2, color3);

let [color4, color5, color6] = colors;
console.log(color4, color5, color6);

let a, b, c;
[a, b, c] = [10, 20, 30];
console.log(a, b, c);

[a, b] = colors;
console.log(a, b, c);

//// Swapping variables
[a, b, c] = [10, 20, 30];
[a, b, c] = [c, a, b];
console.log(a, b, c);

//// Default values
[a = 1, b = 2, c = 3] = [10, 20];
console.log(a, b, c);

//// Array returned from a function
function f() {
  if (Math.random() > 0.5) {
    return [1, 2];
  } else {
    return [2, 4, 7];
  }
}
[a, b, c = 22] = f();
console.log(a, b, c);

//// Ignoring some values
[a, , b] = ["red", "blue", "green"];
console.log(a, b);

//// Assigning the rest of an array to a variable
colors = ["red", "blue", "green", "yellow", "black"];
[a, b, ...c] = colors;
console.log(a, b, c);
