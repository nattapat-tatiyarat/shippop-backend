const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  status_code: {
    type: String,
  },
  status_name: {
    type: String,
  },
});

module.exports = mongoose.model("Status", schema, "Status");
