//// Destructuring in function parameters
let user = {
  id: 42,
  age: 44,
  displayName: "jd",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}
console.log(userId(user));

//// Nested objects and renaming
function whois({ displayName: dn, fullName: { firstName: name } }) {
  return `${dn} is ${name}`;
}
console.log(whois(user));

//// Default parameter's value
function getAge({ fullName: { firstName }, age = 33 }) {
  return `${firstName} is ${age} years old.`;
}
console.log(getAge(user));
