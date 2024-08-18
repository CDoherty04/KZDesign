function getCart(req, res) {
    res.render("cart")
}

// Not implemented
function purchase(req, res) {
    res.redirect("/confirm")
}

function getConfirm(req, res) {
    res.render("confirm")
}

module.exports = {
    getCart: getCart,
    purchase: purchase,
    getConfirm: getConfirm
}