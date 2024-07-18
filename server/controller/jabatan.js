const {Jabatan} = require('../models');

class Controller {

    static async getJabatan(req, res){
        try {
            let query = {}
            if(req.query.dept){
                query = {
                    where : {
                        id_department : req.query.dept
                    }
                }
            }
            let jabatan = await Jabatan.findAll(query)
            if(jabatan.length === 0){
                return res.status(404).json({message : "Jabatan tidak ditemukan"})
            }
            res.status(200).json(jabatan)
        } catch (error) {
            console.log(error);
        }
    }

    static async addJabatan(req, res){
        try {
            let {nama_jabatan, id_department} = req.body
            let newJabatan = await Jabatan.create({
                nama_jabatan,
                id_department
            })
            res.status(201).json(newJabatan)
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Controller


