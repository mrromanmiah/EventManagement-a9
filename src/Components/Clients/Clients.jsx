import Marquee from "react-fast-marquee";


const Clients = () => {
    return (
        <div>
            <div className="mx-auto text-center space-y-4 mt-10">
                <h1 className="text-3xl font-extrabold" data-aos="fade-up">Our <span className="text-[#d82148]">Clients</span></h1>
                <p className="w-1/2 text-gray-400 flex justify-center mx-auto" data-aos="zoom-in">Thriving partnerships with diverse clients, shaping memorable and impactful events.</p>
            </div>
            <Marquee>
                <div className="w-32 flex py-16 gap-10 mb-10">
                    <img src={"https://i.ibb.co/k4cV4r5/ced-samson.png"} alt="" />
                    <img src={"https://i.ibb.co/G7Bytsh/cherie-fm.png"} alt="" />
                    <img src={"https://i.ibb.co/mzDNcz5/embax-print.png"} alt="" />
                    <img src={"https://i.ibb.co/RHNRvt6/gls-3.png"} alt="" />
                    <img src={"https://i.ibb.co/cDyvL3D/intel-logo-1.png"} alt="" />
                    <img src={"https://i.ibb.co/ChyM0CP/peoplelink.png"} alt="" />
                    <img src={"https://i.ibb.co/yP3hn18/postnl-3.png"} alt="" />
                    <img src={"https://i.ibb.co/bdJwLT4/university-of-nebraska.png"} alt="" />
                </div>
            </Marquee>
        </div>

    );
};

export default Clients;