import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react-router-dom";



const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const logedInUser = result.user;
                console.log(user);
                setUser(logedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <div>
            <form className="space-y-4 mb-6 ">
                <div className="text-center space-y-2">
                    <h3 className="font-bold">E-mail<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-full border-2 py-3 px-6 w-1/3" type="email" name="email" id="" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Password<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-full border-2 py-3 px-6 w-1/3" type="password" name="password" id="" />
                </div>
            </form>
            <div className="space-y-4 mb-10">
                <button className="flex items-center mx-auto bg-[#ffb531] font-bold rounded-full px-6 py-2  hover:text-white" type="submit">Login</button>
                <button onClick={handleGoogleSignIn} className="btn btn-circle p-1 flex items-center mx-auto"><img src={'https://i.ibb.co/vVdgSTt/google-1.png'} alt="" /></button>
            </div>
        </div>
    );
};

export default Login;