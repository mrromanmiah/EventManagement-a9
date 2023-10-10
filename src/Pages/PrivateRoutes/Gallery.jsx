

const Gallery = () => {
    return (
        <div className="p-16">
            <div>
                <h1 className="text-5xl font-extrabold text-center mb-4 text-[#d82148]">Gallery</h1>
            </div>
            <hr className="border-[#245ae0] border-2 w-1/12 flex items-center mx-auto mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/ZcczHgx/carlos-gil-w-QV1706-KWJ8-unsplash.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-3xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-3xl p-10">
                        <span className="text-white text-center font-semibold text-3xl">Explore, innovate, conquer, celebrate.</span>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/f4NJLzj/product-school-phlc0v-lcvw-unsplash.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-3xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-3xl p-10">
                        <span className="text-white text-center font-semibold text-3xl">Inspire, grow, lead, succeed.</span>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/pJwKxzD/dom-fou-YRMWVcdyhm-I-unsplash.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-3xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-3xl p-10">
                        <span className="text-white text-center font-semibold text-3xl">Whispered tales, echoing dreams.</span>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/N17XdNm/anastasiia-r-8w-Jshgz-Tj-Y-unsplash.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-3xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-3xl p-10">
                        <span className="text-white text-center font-semibold text-3xl">Dream, achieve, exceed, repeat.</span>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/7QFGCXR/product-school-Gajr-OEN6m4-unsplash.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-3xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-3xl p-10">
                        <span className="text-white text-center font-semibold text-3xl">Smiles illuminate, joy resonates.</span>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/ZB2T1Kf/nathan-dumlao-ew-GMqs2tm-JI-unsplash.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-3xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-3xl p-10">
                        <span className="text-white text-center font-semibold text-3xl">Nature's serenity, timeless embrace.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
