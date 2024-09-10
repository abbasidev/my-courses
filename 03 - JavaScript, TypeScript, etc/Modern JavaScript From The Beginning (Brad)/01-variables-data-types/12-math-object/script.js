console.log(Math);

let x;

// Square root
x = Math.sqrt(4); // 2**2 === 2*2
x = Math.sqrt(9); // 3**2 === 3*3
x = Math.sqrt(16); // 4**2 === 4*4
x = Math.sqrt(25); // 5**2 === 5*5

// Absolute value
x = Math.abs(-5);

// Round
x = Math.round(4.2);
x = Math.round(4.7);

// Round up
x = Math.ceil(4.2);

// Round down
x = Math.floor(4.7);

// Exponent
x = Math.pow(2, 4); // 2*2*2*2
x = Math.pow(4, 3); // 4*4*4

// Minimum number
x = Math.min(4, 5, 3);

// Maximum number
x = Math.max(4, 5, 3);

// Get a random number/decimal between 0 and 1
x = Math.random();

// Get a random number between 1 and 100
x = Math.floor(Math.random() * 100 + 1);

// Round down
x = Math.floor(4.7);
x = Math.floor(-4.7);

// کل اعشار رو برمیداره
x = Math.trunc(4.7);
x = Math.trunc(-4.7);

console.log(x);
