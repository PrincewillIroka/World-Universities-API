const mongoose = require("mongoose");
require("dotenv").config();

const { DB_CONNECTION } = process.env;

function connect() {
  try {
    mongoose.connect(DB_CONNECTION);

    mongoose.connection.on("connected", () => {
      console.log("Database connection established");
    });

    mongoose.connection.on("error", (e) => {
      console.log("Database connection error:", e);
    });
  } catch (e) {
    console.log("Database connection error:", e);
  }
}

function disconnect() {
  try {
    mongoose.disconnect();
  } catch (e) {
    console.log("Database disconnection error:", e);
  }
}

module.exports = { connect, disconnect };
