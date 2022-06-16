const express = require("express");
const router = express.Router();
const { ProductController } = require("../controllers");

router.post("/get-all", ProductController.getAll);
router.post("/get-by", ProductController.getBy);
router.post("/get-by-name", ProductController.getByName);
router.post("/get-by-status", ProductController.getByStatus);
router.post("/create", ProductController.create);
router.post("/edit", ProductController.edit);
router.post("/edit-score", ProductController.editScore);
router.post("/edit-status", ProductController.editStatus);
router.post("/delete", ProductController.delete);

module.exports = router;
