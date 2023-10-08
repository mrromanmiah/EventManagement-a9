

const Newsletter = () => {
    return (
        <div>
            <div className="bg-[#FFF7E3] flex justify-between items-center px-32 py-20 mx-32 rounded-full shadow-xl mb-16">
                <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold"><span className="text-[#d82148]">Subscribe</span> Newsletter</h1>
                    <p className="text-sm w-80">Stay informed. Subscribe for the latest updates and exclusive event insights.</p>
                </div>
                <div className="flex gap-2">
                    <input className="rounded-full py-4 px-8 text-sm border" type="email" name="email" id="" placeholder="Enter your email..." />
                    <button className="rounded-full bg-[#ffb531] py-4 px-8 font-bold text-sm hover:text-white">Contact Now</button>
                </div>

            </div>
        </div>
    );
};

export default Newsletter;