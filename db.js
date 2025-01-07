const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
console.log(process.env.DATABASE);
//replace the password with the password of
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DB_PASSWORD);

//DB connection
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connnection error:"));
db.once("open", () => {
  console.log("connected to MongoDB");
});

module.exports = db;
