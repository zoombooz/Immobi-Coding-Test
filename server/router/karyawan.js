const express = require('express')
const Controller = require('../controller/karyawan')
const router = express.Router()

router.get('/', Controller.getKaryawan)

router.post('/', Controller.addKaryawan)

router.get('/:id', Controller.getKaryawanById)

router.put('/:id', Controller.updateKaryawan)

router.delete('/:id', Controller.deleteKaryawan)

module.exports = router