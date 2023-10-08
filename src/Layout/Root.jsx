import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";



const Root = () => {
    return (
        <div className="font-inter">
            <div className="sticky top-0 bg-white z-50">
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;