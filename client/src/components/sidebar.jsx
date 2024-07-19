import { Link } from "react-router-dom";

const style = {
    list : "mb-4 p-2 rounded-lg text-gray-700 w-3/4 hover:bg-gray-600 hover:text-white"
}

export default function Sidebar(){

    return (
        <div className="flex flex-col bg-gray-300 w-1/4 h-min-full p-8">
            <h1 className="text-3xl font-extrabold text-gray-700 mb-8">Employee CMS</h1>
            <ul className="flex flex-col">
                <Link to={"/employee"} className={style.list}>Get Employees</Link>
                <Link to={"/employee/add"} className={style.list}>Add Employee</Link>
                <Link to={"/position/add"} className={style.list}>Add Position</Link>
                <Link to={"/department/add"} className={style.list}>Add Department</Link>
            </ul>
        </div>
    )
}