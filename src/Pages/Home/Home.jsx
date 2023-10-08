import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Services/Cards";
import Choose from "../../Components/whyChoose/Choose";
import Clients from "../../Components/Clients/Clients";
import Newsletter from "../../Components/NewsLetter/Newsletter";


const Home = () => {
    const cards = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Choose></Choose>
            <Cards cards={cards}></Cards>
            <Clients></Clients>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;