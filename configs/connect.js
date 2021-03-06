const mongoose = require("mongoose");
require("dotenv").config();

const MONGOOSE_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@shippop.9nzie.mongodb.net/${process.env.MONGO_DB}`;

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
};

module.exports = {
  connectDB: async () => {
    try {
      var mongooseConnect = await mongoose
        .connect(MONGOOSE_URL, MONGOOSE_OPTIONS)
        .catch((err) => console.log(`====mongoose err===${err}`));
      console.log(`Successfully connect to DB at ${MONGOOSE_URL}`);
    } catch (err) {
      console.log("======Error connectDB========");
      console.log(err);
    }
  },
};
