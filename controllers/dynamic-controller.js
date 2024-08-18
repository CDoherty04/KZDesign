function getGallery(req, res) {
    res.render("gallery")
}

function getShop(req, res) {
    res.render("shop")
}

module.exports = {
    getGallery: getGallery,
    getShop: getShop
}