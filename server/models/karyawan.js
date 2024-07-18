'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Karyawan.belongsTo(models.Jabatan, {
        foreignKey : 'id_jabatan'
      })
    }
  }
  Karyawan.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Nama tidak boleh kosong"
        },
        notEmpty : {
          msg : "Nama tidak boleh kosong"
        }
      }
    },
    age: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Umur tidak boleh kosong"
        },
        notEmpty : {
          msg : "Umur tidak boleh kosong"
        }
      }
    },
    gender: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Gender tidak boleh kosong"
        },
        notEmpty : {
          msg : "Gender tidak boleh kosong"
        }
      }
    },
    tanggal_lahir: {
      type : DataTypes.DATE,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Tanggal lahir tidak boleh kosong"
        },
        notEmpty : {
          msg : "Tanggal lahir tidak boleh kosong"
        }
      }
    },
    alamat: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Alamat tidak boleh kosong"
        },
        notEmpty : {
          msg : "Alamat lahir tidak boleh kosong"
        }
      }
    },
    id_jabatan: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Jabatan tidak boleh kosong"
        },
        notEmpty : {
          msg : "Jabatan lahir tidak boleh kosong"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Karyawan',
  });
  return Karyawan;
};