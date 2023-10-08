


const Card = ({ card }) => {
    const { id, image, service, price, pricing, description } = card || {}
    return (
        <div>
            <div className="bg-base-100 shadow-xl rounded-3xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Card" className="rounded-3xl" />
                </figure>
                <div className="px-10 pb-10 pt-6 space-y-4 items-center text-center">
                    <h2 className="text-lg font-bold">{service}</h2>
                    <p className="text-sm text-gray-400 text-justify">{description.split(' ').slice(0, 30).join(' ')}...</p>
                    <div>
                        <button className="bg-[#01c897] text-white text-sm font-bold rounded-full px-6 py-2 hover:bg-[#31a588] ">Read More</button>
                    </div>
                    <div className="flex justify-between text-gray-600 font-bold">
                        <p>${price}</p>
                        <p>{pricing}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;