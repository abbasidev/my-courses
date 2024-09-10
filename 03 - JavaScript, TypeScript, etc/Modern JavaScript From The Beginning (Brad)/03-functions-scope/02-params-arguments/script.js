// Default Params

// New way
function registerUser(user = "Bot") {
  // Old way - before using `=`
  // if (!user) {
  //   user = 'Bot';
  // }

  return user + " is registered";
}

console.log(registerUser());

// Rest Params
function sum1(...numbers) {
  return numbers;
}
console.log(sum1(1, 2, 3, 4, 5, 6, 100));

// Rest Params
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 100));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1234,
  name: "John",
};

console.log(loginUser(user));

console.log(
  loginUser({
    id: 5678,
    name: "Sara",
  })
);

// Arrays as params
console.log(Math);

/////////////////////////////////////////////////////////

function getRandom(...arr) {
  // way1
  // function getRandom(arr) { // way2
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}
getRandom(10, 20, 30, 40, 50, 60, 70, 80, 90, 100); // way1
// getRandom([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]); // way2
