//// ES2022 Static Initialization Blocks
//// قابلیت جدید جاوا اسکریپت

class DatabaseConnection {
  static connection;
  static {
    if (process.env.NODE_ENV === "production") {
      this.connection = this.loadProductionConnection();
    } else {
      this.connection = this.loadDevelopmentConnection();
    }
  }

  static loadProductionConnection() {}
  static loadDevelopmentConnection() {}
}
