console.log(new Object().__proto__);

let x;

// Creating an object literal
const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

console.log(person);

// Accessing object properties
x = person.name; // Dot notation

x = person["age"]; // Bracket notation

x = person.address.state;

x = person.hobbies[0];
x = person.hobbies.at(1);

// Updating properties
person.name = "Amir Abbasi";
person["isAdmin"] = false;

// Deleting properties
delete person.age;

// Create new properties
person.drivingLicence = true;
person.gfName = "nazi";

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
person.greet();

console.log(person);

// Keys with multiple words
// انجام این کار اصلا توصیه نمیشود
const person2 = {
  "first name": "Brad",
  "last name": "Traversy",
};

x = person2["first name"];
console.log(x);
