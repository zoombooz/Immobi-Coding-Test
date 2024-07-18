const {Karyawan} = require('../models');

class Controller {

    static async getKaryawan(req, res){
        try {
            let data = await Karyawan.findAll();
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async getKaryawanById(req, res){
        try {
            let {id} = req.params
            let karyawan = await Karyawan.findByPk(id)
            if(!karyawan){
                return res.status(404).json({message : "Karyawan tidak ditemukan"})
            }
            res.status(200).json(karyawan)
        } catch (error) {
            console.log(error);
        }
    }

    static async addKaryawan(req, res){
        try {
            let {name, id_jabatan, age, gender, tanggal_lahir, alamat} = req.body
            let newKaryawan = await Karyawan.create({
                name,
                id_jabatan,
                age,
                gender,
                tanggal_lahir : new Date(tanggal_lahir),
                alamat
            })
            res.status(201).json(newKaryawan)
        } catch (error) {
            console.log(error);
        }
    }

    static async updateKaryawan(req, res){
        try {
            let {id} = req.params
            let {name, id_jabatan, age, gender, tanggal_lahir, alamat} = req.body
            let karyawan = await Karyawan.findByPk(id)
            if(!karyawan){
                return res.status(404).json({message : "Karyawan tidak ditemukan"})
            }
            let updatedKaryawan = await karyawan.update({
                name,
                id_jabatan,
                age,
                gender,
                tanggal_lahir : new Date(tanggal_lahir),
                alamat
            })
            res.status(200).json(updatedKaryawan)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteKaryawan(req, res){
        try {
            let {id} = req.params
            let karyawan = await Karyawan.findByPk(id)
            if(!karyawan){
                return res.status(404).json({message : "Karyawan tidak ditemukan"})
            }
            await karyawan.destroy()
            res.status(200).json({message : "Karyawan berhasil dihapus"})
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Controller