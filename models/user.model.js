const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports = mongoose.model("User", schema, "User");
