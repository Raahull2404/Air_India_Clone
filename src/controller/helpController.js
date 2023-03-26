const helpDetails = (req, res) => {
    res.status(200).send({
        msg: " Successfully connected",
        success: true,
        data: {
            contact: '91xxxxxxxx'
        }
    })
}

module.exports = {
    helpDetails
}