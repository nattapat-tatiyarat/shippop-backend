module.exports = (app) => {
  app.use("/user", require("./user.route"));
  app.use("/product", require("./product.route"));
};
