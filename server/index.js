const express = require('express')
const app = express()
const port = 3000
const routerKaryawan = require('./router/karyawan');
const routerJabatan = require('./router/jabatan');
const routerDepartment = require('./router/department');

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/karyawan', routerKaryawan)
app.use('/jabatan', routerJabatan)
app.use('/department', routerDepartment)

app.listen(port, () => {
    console.clear()
    console.log(`Example app listening on port ${port}`)
})

/* 

npx sequelize-cli model:generate --name Karyawan --attributes name:string,age:integer,gender:string,tanggal_lahir:date,alamat:string,id_jabatan:integer

npx sequelize-cli model:generate --name Jabatan --attributes nama_jabatan:string,id_department:integer

npx sequelize-cli model:generate --name Department --attributes nama_department:string

npx sequelize-cli seed:generate --name data-insert

*/