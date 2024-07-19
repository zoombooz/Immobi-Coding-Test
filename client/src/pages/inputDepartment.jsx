import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2"

export default function InputDepartment(){

    const [nama_department, setDepartment] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const reqBody = {
                nama_department
            }
            const response = await axios.post("http://localhost:3000/department", reqBody)
            Swal.fire({
                title: "Good job!",
                text: "Department berhasil diinput",
                icon: "success"
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto p-8 w-full">
            <h1 className="text-3xl mb-2">Input Department Form</h1>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama Department</label>
                <input 
                    type="text" name="nama_department" id="nama_department" value={nama_department} onChange={e => setDepartment(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Department name" 
                    required 
                />
            </div>
            <button type="submit" className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}