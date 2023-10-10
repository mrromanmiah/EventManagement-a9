

const Newsletter = () => {
    return (
        <div>
            <div className="bg-[#FFF7E3] lg:flex justify-between items-center lg:px-32 md:px-16 px-8 py-20 lg:mx-32 md:mx-16 mx-8 rounded-full shadow-xl mb-16">
                <div className="space-y-2">
                    <h1 className="text-3xl lg:text-left md:text-center text-center font-extrabold"><span className="text-[#d82148]">Subscribe</span> Newsletter</h1>
                    <p className="text-sm lg:text-left md:text-center text-center lg:w-80">Stay informed. Subscribe for the latest updates and exclusive event insights.</p>
                </div>
                <div className="lg:flex lg:items-end md:items-center items-center justify-center gap-2 lg:space-y-0 md:space-y-3 space-y-3 lg:mt-0 mt-5">
                    <input className="lg:flex-none flex items-center mx-auto w-auto rounded-full py-4 px-8 text-sm border lg:placeholder:text-left md:placeholder:text-center placeholder:text-center" type="email" name="email" id="" placeholder="Enter your email" />
                    <button className="lg:flex-none flex items-center mx-auto rounded-full bg-[#ffb531] py-4 px-8 font-bold text-sm hover:text-white">Contact Now</button>
                </div>

            </div>
        </div>
    );
};

export default Newsletter;