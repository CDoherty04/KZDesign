const express = require("express")

const cartController = require("../controllers/cart-controller")

const router = express.Router()

router.get("/cart", cartController.getCart)

router.post("/cart", cartController.purchase)

router.get("/confirm", cartController.getConfirm)

module.exports = router