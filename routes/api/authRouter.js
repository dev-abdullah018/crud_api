const express = require("express")
const registrationController = require("../../controller/registrationController")
const loginController = require("../../controller/loginController")
const router = express.Router()


router.post('/registration', registrationController)
router.post("/login", loginController)


module.exports = router