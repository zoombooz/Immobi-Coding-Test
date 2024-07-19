import { useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate, useParams } from "react-router-dom"

export default function EditKaryawan(){

    const navigate = useNavigate()
    const {id} = useParams()

    const [id_department, setDepartmentId] = useState("")
    const [department, setDepartment] = useState([])
    const [position, setPosition] = useState([])
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [tanggal_lahir, setTanggalLahir] = useState("")
    const [alamat, setAlamat] = useState("")
    const [id_jabatan, setJabatan] = useState("")

    useEffect(() => {
        async function fecthData(){
            try {
                setLoading(true)
                const {data : response} = await axios('http://localhost:3000/department')
                setDepartment(response)
                const {data : karyawan} = await axios(`http://localhost:3000/karyawan/${id}`)
                console.log(karyawan, "<<<");
                console.log(karyawan.tanggal_lahir.toISOString(), ">>>");
                setName(karyawan.name)
                setAge(karyawan.age)
                setGender(karyawan.gender)
                setTanggalLahir((karyawan.tanggal_lahir).toISOString().split("T")[0])
                setAlamat(karyawan.alamat)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        fecthData()
    }, [])

    async function handlePosition(id){
        try {
            const {data : response} = await axios(`http://localhost:3000/jabatan?dept=${id}`)
            setPosition(response)
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSubmit(e){
        e.preventDefault()
        try {
            console.log({
                name,
                age : Number(age),
                gender,
                tanggal_lahir,
                alamat,
                id_jabatan,
                id_department
            });
            let reqBody = {
                name,
                age : Number(age),
                gender,
                tanggal_lahir,
                alamat,
                id_jabatan
            }
            const response = await axios.put(`http://localhost:3000/karyawan/${id}`, reqBody)
            console.log(response, "<<<<<<");
            Swal.fire({
                title: "Good job!",
                text: "Employee berhasil diupdate",
                icon: "success"
            });
            navigate("/employee")
        } catch (error) {
            console.log(error);
        }
    }

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto p-8 w-full">
            <h1 className="text-3xl mb-2">Edit Employee Form</h1>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
                <input 
                    type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Your name" 
                    required 
                />
            </div>
            <div className="mb-5">
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Usia</label>
                <input 
                    type="text" name="age" id="age" value={age} onChange={e => setAge(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Your age" 
                    required 
                />
            </div>
            <div className="mb-5">
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Jenis Kelamin</label>
                <div className="flex items-center mb-4">
                    <input checked={gender === "L"} id="gender-l" type="radio" name="gender" value="L" onChange={e => setGender(e.target.value)} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"/>
                    <label htmlFor="gender-l" className="block ms-2  text-sm font-medium text-gray-900" checked>
                    Laki-laki
                    </label>
                </div>
                <div className="flex items-center mb-4">
                    <input checked={gender === "P"} id="gender-p" type="radio" name="gender" value="P" onChange={e => setGender(e.target.value)} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"/>
                    <label htmlFor="gender-p" className="block ms-2  text-sm font-medium text-gray-900">
                    Perempuan
                    </label>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="tanggal_lahir" className="block mb-2 text-sm font-medium text-gray-900">Tanggal Lahir</label>
                <input 
                    type="date" name="tanggal_lahir" id="tanggal_lahir" value={tanggal_lahir} onChange={e => setTanggalLahir(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required 
                    />
            </div>
            <div className="mb-5">
                <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900">Alamat</label>
                <input 
                    type="text" name="alamat" id="alamat" value={alamat} onChange={e => setAlamat(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Your address" 
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
            {position.length > 1 
                ? 
                <div className="mb-5">
                    <label htmlFor="id_department" className="block mb-2 text-sm font-medium text-gray-900">Jabatan</label>
                    <select id="countries" defaultValue={""} onChange={e => setJabatan(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="" disabled>--SELECT--</option>
                        {position.map((item, index) => (
                            <option key={index} value={item.id}>{item.nama_jabatan}</option>
                        ))}
                    </select>
                </div> 
                : 
                <div className="mb-5">
                    <label htmlFor="id_department" className="block mb-2 text-sm font-medium text-gray-900">Jabatan</label>
                    <p className="bg-gray-200 p-4 rounded-lg w-fit shadow-gray-400">Please select one of the department above or The selected department does not have any position</p>
                </div>
            }
            
            
            <button type="submit" className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}