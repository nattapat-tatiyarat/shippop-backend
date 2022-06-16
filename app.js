const express = require("express");
const cors = require("cors");
const app = express();
const { connectDB } = require("./configs/connect");

// app.use(function (request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Origin", "http://localhost:" + port);
//   response.header("Access-Control-Allow-Credentials", true);
//   response.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(cors());

connectDB();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./routes")(app);

app.use(express.json());

module.exports = app;
