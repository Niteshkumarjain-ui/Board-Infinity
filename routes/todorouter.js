const express = require("express");
const todoController = require("../controllers/tudoController");
const router = express.Router();
router.route("/").get(todoController.list);
router.route("/").post(todoController.add);
module.exports = router;
