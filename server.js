const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");
//console.log(process.env);
//console.log(process.env.DATABASE_PASSWORD);
//console.log(process.env);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose

  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection is succesfull"));

const port = process.env.PORT || 3000;
console.log(port);
app.listen(port, () => {
  console.log(`App is running on ${port}..`);
});
