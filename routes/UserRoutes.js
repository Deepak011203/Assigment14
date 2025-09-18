const express = require("express");
const router = express.Router();

const { registerApi , loginApi} = require("../controller/UserController");

router.post("/register" , registerApi);
router.post("/login", loginApi);

module.exports = router;
