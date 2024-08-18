// Routes for Home and about me pages
const express = require("express")

const baseController = require("../controllers/base-controller")

const router = express.Router()

router.get("/", baseController.getHome)

router.get("/about", baseController.getAbout)

module.exports = router