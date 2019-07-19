var express = require("express");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error  in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`App Running on Port ${port}`));

// module.exports = app;
