'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dataDepartment = require('../data/department.json');
    dataDepartment.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    })

    let dataJabatan = require('../data/jabatan.json');
    dataJabatan.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    })

    let dataKaryawan = require('../data/karyawan.json');
    dataKaryawan.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    })

    await queryInterface.bulkInsert('Departments', dataDepartment, {})
    await queryInterface.bulkInsert('Jabatans', dataJabatan, {})
    await queryInterface.bulkInsert('Karyawans', dataKaryawan, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Karyawans', null, {
      truncate : true,
      cascade : true,
      restartIdentity : true
    })
    await queryInterface.bulkDelete('Jabatans', null, {
      truncate : true,
      cascade : true,
      restartIdentity : true
    })
    await queryInterface.bulkDelete('Departments', null, {
      truncate : true,
      cascade : true,
      restartIdentity : true
    })
  }
};
