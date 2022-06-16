const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");

router.post("/get-all", UserController.getAll);
router.post("/create", UserController.create);
router.post("/delete", UserController.delete);

module.exports = router;
