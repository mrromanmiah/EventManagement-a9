import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("Logged Out");

            })
            .catch(error => {
                console.error(error);

            })
    }
    return (

        <div>
            <nav className="lg:flex space-y-4 lg:space-y-0 md:space-y-0 items-center justify-between py-6 px-16 text-center">
                <div className="lg:flex items-center gap-4">
                    <img className="flex items-center mx-auto w-12" src={'https://i.ibb.co/Xp1c26g/Asset-1.png'} alt="" />
                    <h1 className="text-3xl lg:mb-0 md:mb-4 font-extrabold">Summit Sculpt</h1>
                </div>

                <ul className="lg:flex items-center gap-8 text-lg">
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
                    {user &&
                        <>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#d82148] bg-[#FFF2F8] py-2 px-3 rounded-xl font-bold text-lg" : ""
                                    }
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/gallery"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#d82148] bg-[#FFF2F8] py-2 px-3 rounded-xl font-bold text-lg" : ""
                                    }
                                >
                                    Gallery
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>
                <div >
                    <div>
                        {
                            user ?
                                <div className="flex justify-center items-center lg:gap-4">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full bg-slate-500">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                    <span className="mr-4 lg:ml-0 ml-4 text-xs font-extrabold">{user.displayName}</span>
                                    <button onClick={handleSignOut} className="bg-[#01c897] text-white font-bold rounded-full px-6 py-2 hover:bg-[#31a588] ">Logout</button>
                                </div>
                                :
                                <div className="flex gap-4 justify-center">
                                    <Link to='/login'><button className="bg-[#01c897] text-white font-bold rounded-full px-6 py-2 hover:bg-[#31a588] ">Login</button></Link>
                                    <Link to='/register'><button className="bg-[#01c897] text-white font-bold rounded-full px-6 py-2 hover:bg-[#31a588] ">Register</button></Link>
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;