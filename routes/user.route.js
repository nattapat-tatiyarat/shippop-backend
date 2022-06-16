const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");

router.post("/get-all", UserController.getAll);
router.post("/create", UserController.create);
router.post("/delete", UserController.delete);
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "HELLO PEAK",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
