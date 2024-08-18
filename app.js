const express = require("express")
const path = require("path")
const fs = require("fs")

const baseRoutes = require("./routes/base-routes")
const dynamicRoutes = require("./routes/dynamic-routes")
const contactRoutes = require("./routes/contact-routes")
const cartRoutes = require("./routes/cart-routes")

const app = express()

// Template enabling done through ejs
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static("public")) // "Publicizes" styles and scripts
app.use(express.urlencoded({ extended: false }))

app.use(baseRoutes)
app.use(dynamicRoutes)
app.use(contactRoutes)
app.use(cartRoutes)

app.listen(3000)