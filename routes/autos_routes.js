
const express = require('express')
const router = express.Router()

const autoController = require('../controllers/autos_controller.js')

router.get('/', autoController.showAutos)
router.post('/addcard', autoController.createAuto)


module.exports = router

