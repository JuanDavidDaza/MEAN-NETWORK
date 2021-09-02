const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    //con process va al archivo .env y me trae la variable de la conexión BD_CONNECTION
    await mongoose.connect(process.env.BD_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: ON");
  } catch (e) {
    console.log("Error connecting to MongoDB: ", e);
    throw new Error("Error connecting to MongoDB");
  }
}; 

module.exports = { dbConnection };
