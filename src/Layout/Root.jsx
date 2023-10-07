import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="font-inter">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;