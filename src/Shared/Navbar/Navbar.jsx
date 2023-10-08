import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (

        <div>
            <nav className="lg:flex md:flex space-y-4 lg:space-y-0 md:space-y-0 items-center justify-between py-6 px-16">
                <div className="flex items-center gap-4">
                    <img className="w-12" src={'https://i.ibb.co/Xp1c26g/Asset-1.png'} alt="" />
                    <h1 className="text-3xl font-extrabold">Summit Sculpt</h1>
                </div>

                <ul className="flex items-center gap-12 text-lg">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d82148] bg-[#FFF2F8] py-2 px-3 rounded-xl font-bold text-lg" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d82148] bg-[#FFF2F8] py-2 px-3 rounded-xl font-bold text-lg" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d82148] bg-[#FFF2F8] py-2 px-3 rounded-xl font-bold text-lg" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="w-12 p-1 rounded-full bg-slate-500">
                            <img src={'https://i.ibb.co/nMsBCBV/logo.png'} />
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#01c897] text-white font-bold rounded-full px-6 py-2 hover:bg-[#31a588] ">Login</button>
                    </div>
                </div>

            </nav>
        </div>

    );
};

export default Navbar;