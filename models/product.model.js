const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  status: {
    type: Number,
  },
  score: {
    type: Number,
  },
  barcode: {
    type: String,
  },
  category: {
    type: String,
  },
  publisher: {
    type: String,
  },
  type: {
    type: String,
  },
  user_voted: {
    type: Array,
  },
});

module.exports = mongoose.model("Product", schema, "Product");
