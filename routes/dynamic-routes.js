// Shop, gallery
const express = require("express")

const dynamicController = require("../controllers/dynamic-controller")

const router = express.Router()

router.get("/gallery", dynamicController.getGallery)

// Detail pages
// router.get("/gallery/:id", dynamicController.getGalleryItem)

router.get("/shop", dynamicController.getShop)

module.exports = router