const express = require("express")
const { storeData, allData, deleteData, updateData } = require("../controller/storeController")
const router = express.Router()

router.get("/products",allData)
router.post("/store",storeData)
router.delete("/:id",deleteData)
router.put("/:id",updateData)

module.exports = router