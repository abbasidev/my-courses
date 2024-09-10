///////////////////////////////////////////////

// let amount = "100" // Integer
let amount = "99.5"; // Decimal

// Convert string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// Convert number to string
amount = amount.toString();
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

console.log(amount, typeof amount);

///////////////////////////////////////////////

// Ways to get NaN (Not a Number)
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);
console.log(Number("foo"));

console.log(Math.sqrt(4)); // 2**2 === 2*2
console.log(Math.sqrt(9)); // 3**2 === 3*3
console.log(Math.sqrt(16)); // 4**2 === 4*4
console.log(Math.sqrt(25)); // 5**2 === 5*5

///////////////////////////////////////////////
