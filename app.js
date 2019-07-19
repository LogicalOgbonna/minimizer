var express = require("express");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", indexRouter);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`App Running on Port ${port}`));

// module.exports = app;
