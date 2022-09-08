const fs = require("fs");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const Todu = require("../models/tudoModel");

dotenv.config({ path: "../config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose

  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection is succesfull"));

const todus = JSON.parse(fs.readFileSync(`${__dirname}/todus.json`, "utf-8"));
console.log(todus);
//Import data in database

const importData = async () => {
  try {
    await Todu.create(todus);
    console.log("Data succesfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] == "--import") {
  importData();
}

//console.log(process.argv);
