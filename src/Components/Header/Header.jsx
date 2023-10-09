

const Header = () => {
    return (
        // <div className="bg-[url('https://i.ibb.co/HCp2CdG/6764486-3433814.jpg')] bg-no-repeat bg-cover bg-center h-[80vh]">
        //     <div className="flex justify-between pl-16 items-center gap-20">
        //         <div className="">
        //             <h1 className="text-4xl font-extrabold">Mastering Memorable <span className="text-[#245ae0]">Corporate</span> Experiences</h1>
        //             <p className="text-justify mt-4 w-auto text-sm">Elevate your corporate events with precision planning and creative finesse. From concept to execution, we craft seamless experiences that leave a lasting impression of sophistication and success.</p>
        //         </div>
        //         <div className="flex justify-end">
        //             <img className="rounded-bl-full flex my-auto shadow-2xl" src={'https://i.ibb.co/s5CShb6/banner.jpg'} alt="" />
        //         </div>
        //     </div>

        // </div>

        <div className="carousel w-full h-[80vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={"https://i.ibb.co/ZVdfBCp/executives-joking-laughing-office-1.jpg"} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Header;