const express = require('express');
const router = express.Router();
const usercontroller = require("../controller/usercontroller");

/* GET users listing. */
router.get("/", usercontroller.index);

module.exports = router;
