// class App {
//   constructor() {
//     this.serverName = "localhost";
//   }
//   getServerName() {
//     console.log(this.serverName);
//   }
// }

// const app = new App();
// app.getServerName();

/////////////////////////////////////////////////

class App {
  constructor() {
    this.serverName = "localhost";

    document
      .querySelector("button")
      // .addEventListener("click", this.getServerName.call(this));
      .addEventListener("click", this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this);
    // console.log(this.serverName);
  }
}

const app = new App();
