'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jabatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jabatan.hasMany(models.Karyawan, {
        foreignKey : "id_jabatan"
      })
      Jabatan.belongsTo(models.Department, {
        foreignKey : "id_department"
      })
    }
  }
  Jabatan.init({
    nama_jabatan: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Nama jabatan tidak boleh kosong"
        }, 
        notEmpty : {
          msg : "Nama jabatan tidak boleh kosong"
        }
      }
    },
    id_department: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Department tidak boleh kosong"
        },
        notEmpty : {
          msg : "Department tidak boleh kosong"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Jabatan',
  });
  return Jabatan;
};