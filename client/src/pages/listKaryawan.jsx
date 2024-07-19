import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function ListKaryawan(){

    const [karyawan, setKaryawan] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fecthData(){
            try {
                setLoading(true)
                const {data : response} = await axios("http://localhost:3000/karyawan")
                console.log(response, "<<<");
                setKaryawan(response)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        fecthData()
    }, [])

    async function handleDelete(id){
        try {
            const response = await axios.delete(`http://localhost:3000/karyawan/${id}`)
            console.log(response);
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    if(loading){
        return (<p>Loading...</p>)
    }

    return (
        <div className="relative overflow-x-auto w-full sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nama 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Umur
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tanggal Lahir
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Alamat
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Jabatan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {karyawan.map((item, index) => (
                        <tr className="odd:bg-white even:bg-gray-50">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item.name}
                        </th>
                        <td className="px-6 py-4">
                            {item.age}
                        </td>
                        <td className="px-6 py-4">
                            {item.gender}
                        </td>
                        <td className="px-6 py-4">
                            {item.tanggal_lahir}
                        </td>
                        <td className="px-6 py-4">
                            {item.alamat}
                        </td>
                        <td className="px-6 py-4">
                            {item.id_jabatan}
                        </td>
                        <td className="px-6 py-4">
                            <Link to={`/employee/edit/${item.id}`} className="font-medium text-blue-600 mr-4 hover:underline">Edit</Link>
                            <button onClick={e => handleDelete(item.id)} className="font-medium text-red-600 hover:underline">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}