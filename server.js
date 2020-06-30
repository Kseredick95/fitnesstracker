const express = require("express");
const mongojs = require("mongojs");
var mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
var PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
});