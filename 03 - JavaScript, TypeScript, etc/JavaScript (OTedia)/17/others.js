//// Other Features

const person = {
  firstname: "Abbas",
  lastname: "Moqaddam",
  age: 33,
  showBio: function () {
    console.log(`I am ${this.firstname} ${this.lastname}`);
  },
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

console.log(person.firstname == undefined);
console.log(person.family == undefined);

console.log("firstname" in person);
console.log("family" in person);

delete person.firstname;
console.log("firstname" in person);
