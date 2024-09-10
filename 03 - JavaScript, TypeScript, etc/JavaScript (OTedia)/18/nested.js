//// Nested Objects

let person = {
  firstname: "Abbas",
  lastname: "Moqaddam",
  age: 33,
  account: {
    accountNumber: 123456789,
    balance: 1000000,
    getBalanceString() {
      return "Your balance is : " + this.balance;
    },
  },
  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  },
};

console.log(person.account.getBalanceString());
person.account.balance = 2000000;
console.log(person.account.getBalanceString());
