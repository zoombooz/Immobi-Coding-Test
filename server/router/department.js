const express = require('express')
const Controller = require('../controller/department')
const router = express.Router()

router.get('/', Controller.getDepartment)

router.post('/', Controller.addDepartment)

module.exports = router