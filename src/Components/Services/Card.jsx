/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, image, service, price, pricing, description } = card || {}
    return (
        <div>
            <div className="bg-base-100 shadow-xl rounded-3xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Card" className="rounded-3xl" data-aos="flip-left"/>
                </figure>
                <div className="px-10 pb-10 pt-6 space-y-4 items-center text-center">
                    <h2 className="text-base font-bold">{service}</h2>
                    <p className="lg:h-16 md:h-16 text-xs text-gray-400 text-justify">{description.split(' ').slice(0, 25).join(' ')}...</p>
                    <div>
                        <Link to={`/cards/${id}`}>
                        <button className="bg-[#01c897] text-white md:mt-4 lg:mt-0 mt-auto text-sm font-bold rounded-full px-6 py-2 hover:bg-[#31a588] ">Read More</button>
                        </Link>
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