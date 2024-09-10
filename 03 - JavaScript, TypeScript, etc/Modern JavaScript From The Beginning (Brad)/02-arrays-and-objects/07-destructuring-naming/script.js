// Setting object properties with the same name as a variable
const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring object properties

const todo = {
  id: 123,
  title: "Take out trash",
  user: {
    name: "John",
  },
};

// const {
//   id,
//   title,
//   user: { name },
// } = todo;
// console.log(id, title, name);

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId, title, name);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

// const [first, second] = numbers;
// console.log(first, second);

const [first, second, ...rest] = numbers;
console.log(first, second, rest);
