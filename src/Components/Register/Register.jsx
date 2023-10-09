


const Register = () => {
    return (
        <form className="space-y-4 mb-10">
            <div className="text-center space-y-2">
                <h3 className="font-bold">Name<span className="text-[#d82148]">*</span></h3>
                <input className="rounded-full border-2 py-3 px-6 w-1/3" type="text" name="Name" id="" />
            </div>
            <div className="text-center space-y-2">
                <h3 className="font-bold">E-mail<span className="text-[#d82148]">*</span></h3>
                <input className="rounded-full border-2 py-3 px-6 w-1/3" type="email" name="email" id="" />
            </div>
            <div className="text-center space-y-2">
                <h3 className="font-bold">Photo URL</h3>
                <input className="rounded-full border-2 py-3 px-6 w-1/3" type="url" name="photoURL" id="" />
            </div>
            <div className="text-center space-y-2">
                <h3 className="font-bold">Password<span className="text-[#d82148]">*</span></h3>
                <input className="rounded-full border-2 py-3 px-6 w-1/3" type="password" name="password" id="" />
            </div>
            <button className="flex items-center mx-auto bg-[#ffb531] font-bold rounded-full px-6 py-2  hover:text-white" type="submit">Register</button>

        </form>
    );
};

export default Register;