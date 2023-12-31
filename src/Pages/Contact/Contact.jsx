

const Contact = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-extrabold text-center mb-4 text-[#d82148]">Contact</h1>
            </div>
            <hr className="border-[#245ae0] border-2 w-1/12 flex items-center mx-auto mb-10" />
            <div className="space-y-4 mb-10">
                <div className="text-center space-y-2">
                    <h3 className="font-bold">First Name<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-full border-2 py-3 px-6 lg:w-1/3" type="text" name="firstName" id="" placeholder="First Name"/>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Last Name<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-full border-2 py-3 px-6 lg:w-1/3" type="text" name="lastName" id="" placeholder="Last Name"/>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">E-mail<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-full border-2 py-3 px-6 lg:w-1/3" type="email" name="email" id="" placeholder="E-mail"/>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Phone Number<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-full border-2 py-3 px-6 lg:w-1/3" type="text" name="firstName" id="" placeholder="Phone Number" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">How can we help?<span className="text-[#d82148]">*</span></h3>
                    <textarea className="rounded-3xl border-2 py-3 px-6 lg:w-1/3" name="textarea" id="" cols="30" rows="10" placeholder="Your Message..."></textarea>
                </div>
                <button className="flex items-center mx-auto bg-[#ffb531] font-bold rounded-full px-6 py-2  hover:text-white" type="submit">Submit</button>
            </div>
            <div className="lg:flex lg:justify-evenly items-center mx-auto justify-center lg:text-left md:text-center text-center px-16 pb-20 pt-5">
                <div className="lg:mb-0 mb-6">
                    <h2 className="text-2xl font-bold">Address</h2>
                    <ul className="text-gray-500 font-semibold text-sm">
                        <li>12345/A Motijheel C/A</li>
                        <li>Road No. #12345</li>
                        <li>Motijheel, Dhaka-1000</li>

                    </ul>
                </div>
                <div>
                <h2 className="text-2xl font-bold">Phone Number</h2>
                    <ul className="text-gray-500 font-semibold text-sm">                     
                        <li>+880 1600 - 000000</li>
                        <li>+880 1700 - 000000</li>
                        <li>+880 1800 - 000000</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;