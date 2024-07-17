const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

// Template enabling done through ejs
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static("public")) // "Publicizes" styles and scripts
app.use(express.urlencoded({ extended: false }))

// Renders through ejs
app.get("/cart", function (req, res) {
    res.render("cart")
})

app.get("/contact", function (req, res) {
    res.render("contact")
})

app.get("/gallery", function (req, res) {
    res.render("gallery")
})

app.get("/", function (req, res) {
    res.render("index")
})

app.listen(3000)
