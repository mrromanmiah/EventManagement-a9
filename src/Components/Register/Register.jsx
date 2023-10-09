
import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e => {
        e.preventDefault(); 
        const form = new FormData(e.currentTarget);

        const displayName = form.get('displayName');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');
        const termsAccepted = e.target.terms.checked;
        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters');
            return;
        } else if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)) {
            setRegisterError('Password must be at least 6 characters long, with at least one capital letter and one special character.')
            return;
        } else if (!termsAccepted){
            setRegisterError('Please accept our terms and conditions')  
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("Successfully registered")
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })

    }
    return (
        <div>
            <div>
                <h1 className="text-5xl font-extrabold text-center mb-4 text-[#d82148]">Register</h1>
            </div>
            <hr className="border-[#245ae0] border-2 w-1/12 flex items-center mx-auto mb-5" />
            <form onSubmit={handleRegister} className="space-y-4 mb-10">
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Name<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-full border-2 py-3 px-6 w-1/3" type="text" name="displayName" id="" placeholder="Your name"/>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">E-mail<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-full border-2 py-3 px-6 w-1/3" type="email" name="email" id="" placeholder="Your email" required />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Photo URL</h3>
                    <input className="rounded-full border-2 py-3 px-6 w-1/3" type="url" name="photoURL" id="" placeholder="Your photo URL" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Password<span className="text-[#d82148]">*</span></h3>
                    <div className="relative">
                        <input className="rounded-full border-2 py-3 px-6 w-1/3" type={showPassword ? "text" : "password"} name="password" id="" placeholder="Password" required />
                    <span className="absolute top-4 -ml-10" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <input type="checkbox" name="terms" id="" />
                    <label htmlFor="terms">Accept our <a className="text-blue-700 hover:underline" href="#">terms</a> and <a className="text-blue-700 hover:underline" href="#">conditions</a></label>
                </div>
                <input className="flex items-center mx-auto bg-[#ffb531] font-bold rounded-full px-6 py-2  hover:text-white" type="submit" value="Register" />
            </form>
            <p className="text-center mb-20">Already have an account? <Link className="text-[#d82148] hover:underline" to='/login'>Login</Link></p>
            {
                registerError && <p className="text-red-700">{registerError}</p>
            }
            {
                success && <p className="text-green-700">{success}</p>
            }
        </div>

    );
};

export default Register;