const {Department} = require('../models');

class Controller {

    static async getDepartment(req, res){
        try {
            let department = await Department.findAll()
            res.status(200).json(department)
        } catch (error) {
            console.log(error);
        }
    }

    static async addDepartment(req, res){
        try {
            let {nama_department} = req.body
            let newDepartment = await Department.create({
                nama_department
            })
            res.status(201).json(newDepartment)
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Controller