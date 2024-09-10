//// Object Literal

let person = {
  firstname: "Abbas",
  lastname: "Moqaddam",
  age: 33,
  showBio: function () {
    console.log("I am Abbas Moqaddam & I am 33");
  },
};

console.log(person);

person.job = "Web Developer";
console.log(person);

let obj = {
  "my-property": 44,
};
console.log(obj);

person.showBio = function (firstname, lastname, age) {
  return `I am ${firstname} ${lastname} & I am ${age}`;
};

console.log(person.showBio("Ahmad", "Moosavi", 33));

person = {
  firstname: "Abbas",
  lastname: "Moqaddam",
  age: 33,
  //// ES6 Define Method
  showBio(firstname, lastname, age) {
    return `I am ${firstname} ${lastname} & I am ${age}`;
  },
};

console.log(person.showBio("Abbas", "Moqaddam", 33));

person.showBio = function () {
  return `I am ${this.firstname} ${this.lastname} & I am ${this.age}`;
};

console.log(person.showBio());

person.age = 32;
console.log(person.showBio());
