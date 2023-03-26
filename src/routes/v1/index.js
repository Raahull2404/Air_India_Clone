const express = require('express')
const router = express.Router()
const helcontroller = require('../../controller/helpController')

router.get('/help', helcontroller.helpDetails)

module.exports = router