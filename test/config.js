const app = require("../app");
const { connectDB } = require("../configs/connect");
const bodyParser = require("body-parser");

module.exports = {
  config: async () => {
    try {
      await connectDB();
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
      require("../routes")(app);
    } catch (err) {
      console.log(err);
    }
  },
  app,
};
