/* eslint-disable react/prop-types */


const DetailsCard = ({ card }) => {
    const {image, service, price, pricing, description } = card || {}

    return (
        <div className="px-16">
            <div>
            <img className="rounded-3xl lg:w-1/2 flex items-center mx-auto" src={image} alt="" />
            </div>
            <div className="space-y-7 mt-10">
                <h1 className="text-3xl font-extrabold text-[#245ae0] text-center">{service}</h1>
                <p className="text-justify">{description}</p>
            </div>
            <div className="text-center p-10 space-y-4 rounded-3xl shadow-xl lg:w-1/3 items-center mx-auto mt-8 mb-20">
                <h1 className="text-3xl font-extrabold">Price</h1>
                <h1 className="lg:text-5xl md:text-5xl text-lg font-extrabold">$<span className="lg:text-8xl md:text-8xl text-5xl text-[#d82148]">{price}</span></h1>
                <p className="text-3xl font-extrabold text-gray-400">{pricing}</p>
            </div>
        </div>
    );
};

export default DetailsCard;
