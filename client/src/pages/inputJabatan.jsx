import { useEffect, useState } from "react";
import Swal from "sweetalert2"
import axios from "axios";

export default function InputJabatan(){
    const [nama_jabatan, setJabatan] = useState("")
    const [id_department, setDepartmentId] = useState("")
    const [department, setDepartment] = useState([])

    useEffect(() => {
        async function fecthData(){
            try {
                const {data : response} = await axios("http://localhost:3000/department")
                setDepartment(response)
            } catch (error) {
                console.log(error);
            }
        }
        fecthData()
    })

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const reqBody = {
                nama_jabatan,
                id_department
                
            }
            const response = await axios.post("http://localhost:3000/jabatan", reqBody)
            Swal.fire({
                title: "Good job!",
                text: "Jabatan berhasil diinput",
                icon: "success"
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto p-8 w-full">
            <h1 className="text-3xl mb-2">Input Jabatan Form</h1>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama Jabatan</label>
                <input 
                    type="text" name="nama_department" id="nama_department" value={nama_jabatan} onChange={e => setJabatan(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Department name" 
                    required 
                />
            </div>
            <div className="mb-5">
                <label htmlFor="id_department" className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                <select  id="id_department" defaultValue={""} onChange={e => {setDepartmentId(e.target.value); handlePosition(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="" disabled>--SELECT--</option>
                    {department.map((item, index) => (
                        <option key={index} value={item.id}>{item.nama_department}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}