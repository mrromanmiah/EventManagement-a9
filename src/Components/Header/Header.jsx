

const Header = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/HCp2CdG/6764486-3433814.jpg')] bg-no-repeat bg-cover bg-center h-[80vh]">
            <div className="flex justify-between pl-16 items-center gap-20">
                <div className="">
                    <h1 className="text-4xl font-extrabold">Mastering Memorable <span className="text-[#245ae0]">Corporate</span> Experiences</h1>
                    <p className="text-justify mt-4 w-auto text-sm">Elevate your corporate events with precision planning and creative finesse. From concept to execution, we craft seamless experiences that leave a lasting impression of sophistication and success.</p>
                </div>
                <div className="flex justify-end">
                    <img className="rounded-bl-full flex my-auto shadow-2xl" src={'https://i.ibb.co/s5CShb6/banner.jpg'} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Header;