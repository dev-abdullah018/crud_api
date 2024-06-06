const express = require("express")
const router = express.Router()
const apiRoute = require("./api")

router.use(process.env.API_URL , apiRoute)

module.exports = router