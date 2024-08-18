const express = require("express")

const contactController = require("../controllers/contact-controller")

const router = express.Router()

router.get("/contact", contactController.getContact)

router.post("/contact", contactController.contact)

module.exports = router