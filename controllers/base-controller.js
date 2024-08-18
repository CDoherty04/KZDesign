function getHome(req, res) {
    res.render("index")
}

function getAbout(req, res) {
    res.render("about")
}

module.exports = {
    getHome: getHome,
    getAbout: getAbout
}