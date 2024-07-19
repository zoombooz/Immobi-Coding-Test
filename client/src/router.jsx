import {createBrowserRouter, redirect} from "react-router-dom";
import Sidebar from "./components/sidebar";
import InputKaryawan from "./pages/inputKaryawan";
import Layout from "./pages/layout";
import ListKaryawan from "./pages/listKaryawan";
import EditKaryawan from "./pages/editKaryawan";
import InputJabatan from "./pages/inputJabatan";
import InputDepartment from "./pages/inputDepartment";

export const router = createBrowserRouter([
    {
        element : <Layout />,
        children : [
            {
                path : "/position/add",
                element : <InputJabatan />
            },
            {
                path : "/department/add",
                element : <InputDepartment />
            },
            {
                path : "/employee/add",
                element : <InputKaryawan />
            },
            {
                path : "/employee",
                element : <ListKaryawan />
            },
            {
                path : "/employee/edit/:id",
                element : <EditKaryawan />
            }
        ]
    },
]);