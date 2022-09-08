const express = require("express");
const morgan = require("morgan");
const app = express();

const toduRouter = require("./routes/todorouter");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middelware ");
  next();
});
app.use(express.static(`${__dirname}/public`));
app.use("/api/v1/todu", toduRouter);

module.exports = app;
