const express = require("express")
const verifyToken = require("../../middleware/verifyToken")
const createTaskController = require("../../controller/createTaskController")
const getTaskController = require("../../controller/getTaskController")
const updateTaskController = require("../../controller/updateTaskController")
const deleteTaskController = require("../../controller/deleteTaskController")
const router = express.Router()


router.get("/", verifyToken , getTaskController)
router.post("/", verifyToken , createTaskController)
router.delete("/:id", verifyToken , deleteTaskController)
router.put("/:id", verifyToken , updateTaskController)

module.exports = router