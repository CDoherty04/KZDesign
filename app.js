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
app.get("/", function (req, res) {
    res.render("index")
})

app.get("/about", function (req, res) {
    res.render("about")
})

app.get("/gallery", function (req, res) {
    res.render("gallery")
})

app.get("/contact", function (req, res) {
    res.render("contact")
})

app.post("/contact", function (req, res) {
    const pathName = path.join(__dirname, "contact.json")
    const contact = req.body

    const fileData = fs.readFileSync(pathName)
    const storedContacts = JSON.parse(fileData)
    storedContacts.push(contact)

    fs.writeFileSync(pathName, JSON.stringify(storedContacts))

    res.redirect("/confirm")
})

app.get("/confirm", function (req, res) {
    res.render("confirm")
})

app.get("/shop", function (req, res) {
    res.render("shop")
})

app.get("/cart", function (req, res) {
    res.render("cart")
})


app.listen(3000)
