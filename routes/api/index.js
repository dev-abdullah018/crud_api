const express = require("express")
const router = express.Router()
const authRouter = require("./authRouter")
const taskRouter = require("./taskRouter")

router.use('/auth', authRouter)
router.use('/product', taskRouter)

module.exports = router
