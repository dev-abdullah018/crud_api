const express = require("express")
const verifyToken = require("../../middleware/verifyToken")
const createProductController = require("../../controller/createProductController")
const getProductController = require("../../controller/getProductController")
const updateProductController = require("../../controller/updateProductController")
const deleteProductController = require("../../controller/deleteProductController")
const router = express.Router()


router.get("/", verifyToken , getProductController)
router.post("/", verifyToken , createProductController)
router.delete("/:id", verifyToken , deleteProductController)
router.put("/:id", verifyToken , updateProductController)

module.exports = router