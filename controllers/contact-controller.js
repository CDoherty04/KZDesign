function getContact(req, res) {
    res.render("contact")
}

function contact(req, res) {
    const pathName = path.join(__dirname, "contact.json")
    const contact = req.body

    const fileData = fs.readFileSync(pathName)
    const storedContacts = JSON.parse(fileData)
    storedContacts.push(contact)

    fs.writeFileSync(pathName, JSON.stringify(storedContacts))

    res.redirect("/confirm")
}

module.exports = {
    getContact: getContact,
    contact: contact
}