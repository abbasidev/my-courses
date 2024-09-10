/////////////////////////////////////////////
// Single Responsibility Principle (SRP)
/////////////////////////////////////////////

// //// Before
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   toJSON() {
//     return JSON.stringify(this);
//   }
// }

// //// After applying SRP
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class UserSerializer {
//   static toJSON(user) {
//     return JSON.stringify(user);
//   }
// }

/////////////////////////////////////////////

// //// Before
// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }

//   // Handles user authentication
//   authenticate(inputPassword) {
//     // Imagine a more secure hashing and matching process here
//     return this.password === inputPassword;
//   }

//   // Saves user to database
//   save() {
//     // Assume we have a connection to a db and a method to save a user
//     db.saveUser(this);
//   }
// }

// const user1 = new User("Maurice", "secret");
// if (user1.authenticate("secret")) {
//   user1.save();
// }

// //// After applying SRP
// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }

//   // Handles user authentication
//   authenticate(inputPassword) {
//     // Imagine a more secure hashing and matching process here
//     return this.password === inputPassword;
//   }
// }

// class UserDataManager {
//   static save(user) {
//     // Assume this function gives a database connection
//     const db = getDatabaseConnection();
//     db.saveUser(user);
//   }
// }

// const user2 = new User("Alice", "password123");
// if (user2.authenticate("password123")) {
//   UserDataManager.save(user2);
// }

/////////////////////////////////////////////
