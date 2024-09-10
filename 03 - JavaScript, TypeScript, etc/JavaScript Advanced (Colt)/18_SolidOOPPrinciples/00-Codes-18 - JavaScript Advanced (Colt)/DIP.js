/////////////////////////////////////////////
// Dependency Inversion Principle (DIP)
/////////////////////////////////////////////

/////////////////////////////////////////////
//// Before

// class UsernamePasswordAuth {
//   authenticate(username, password) {
//     // logic to authenticate using username and password
//   }
// }

// class User {
//   login(username, password) {
//     const auth = new UsernamePasswordAuth();
//     return auth.authenticate(username, password);
//   }
// }

/////////////////////////////////////////////
//// After applying DIP

// // Abstract authentication method
// class AbstractAuthMethod {
//   authenticate(credentials) {
//     throw new Error("This method should be overridden.");
//   }
// }

// class UsernamePasswordAuth extends AbstractAuthMethod {
//   authenticate({ username, password }) {
//     // logic to authenticate using username and password
//   }
// }

// class EmailAuth extends AbstractAuthMethod {
//   authenticate({ email, token }) {
//     // logic to authenticate using email and a token sent to the email
//   }
// }

// class User {
//   constructor(authMethod) {
//     if (!(authMethod instanceof AbstractAuthMethod)) {
//       throw new Error("Invalid authentication method!");
//     }
//     this.authMethod = authMethod;
//   }

//   login(credentials) {
//     return this.authMethod.authenticate(credentials);
//   }
// }

/////////////////////////////////////////////
