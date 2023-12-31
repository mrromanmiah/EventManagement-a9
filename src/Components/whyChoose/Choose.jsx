

const Choose = () => {
    return (
        <div className="px-16 py-6">
            <div className="mx-auto text-center space-y-4 mt-10">
                <h1 className="text-3xl font-extrabold" data-aos="fade-up">Why <span className="text-[#d82148]">Choose</span> Us</h1>
                <p className="w-1/2 text-gray-400 flex justify-center mx-auto" data-aos="zoom-in">Unmatched excellence and personalized service—choosing us ensures exceptional event success.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 mt-10">
                <div className="p-10 rounded-3xl shadow-xl space-y-4" data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className="bg-[#F1F7FF] p-5 rounded-3xl">
                        <img className="w-20 flex justify-center items-center mx-auto" src={"https://i.ibb.co/R6pVQvh/trophy.png"} alt="" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="text-sm font-bold">Exceptional Expertise</h3>
                        <p className="text-xs text-gray-400">Industry leaders with unparalleled knowledge for flawless event execution.</p>
                    </div>
                </div>
                <div className="p-10 rounded-3xl shadow-xl space-y-4" data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className="bg-[#FFF7E3] p-5 rounded-3xl">
                        <img className="w-20 flex justify-center items-center mx-auto" src={"https://i.ibb.co/KhDQMwW/leader.png"} alt="" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="text-sm font-bold">Customer Focus</h3>
                        <p className="text-xs text-gray-400">Tailored solutions driven by a commitment to exceed client expectations.</p>
                    </div>
                </div>
                <div className="p-10 rounded-3xl shadow-xl space-y-4" data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className="bg-[#FFF2F8] p-5 rounded-3xl">
                        <img className="w-20 flex justify-center items-center mx-auto" src={"https://i.ibb.co/HtC574c/idea.png"} alt="" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="text-sm font-bold">Innovative Solutions</h3>
                        <p className="text-xs text-gray-400">Pioneering creativity, bringing fresh and exciting elements to every event.</p>
                    </div>
                </div>
                <div className="p-10 rounded-3xl shadow-xl space-y-4" data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className="bg-[#DEFFEE] p-5 rounded-3xl">
                        <img className="w-20 flex justify-center items-center mx-auto" src={"https://i.ibb.co/dBwzBFD/solution.png"} alt="" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="text-sm font-bold">Reliability and Precision</h3>
                        <p className="text-xs text-gray-400">Reliable ally for precise event planning and flawless execution.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Choose;