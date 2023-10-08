import Card from "./Card";

const Cards = ({ cards }) => {
    return (
        <div>
            <div className="mx-auto text-center space-y-4 mt-20">
                <h1 className="text-3xl font-extrabold">Our <span className="text-[#d82148]">Services</span></h1>
                <p className="w-1/2 text-gray-400 flex justify-center mx-auto">Crafting unparalleled corporate experiences, we specialize in end-to-end event management. From meticulously planning conferences to flawlessly executing team-building events, our services ensure seamless, memorable, and impactful corporate gatherings that leave a lasting impression.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-16 gap-6 py-16">
                {
                    cards?.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>

    );
};

export default Cards;