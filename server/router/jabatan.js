const express = require('express')
const Controller = require('../controller/jabatan')
const router = express.Router()

router.get('/', Controller.getJabatan)

router.post('/', Controller.addJabatan)

module.exports = router