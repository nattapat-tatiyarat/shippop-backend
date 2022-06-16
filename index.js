const app = require("./app");
const PORT = process.env.PORT || 3405;
app.listen(PORT, () => {
  console.log("PORT :", PORT);
});
