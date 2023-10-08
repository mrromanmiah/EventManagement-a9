import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Services/Cards";
import Choose from "../../Components/whyChoose/Choose";


const Home = () => {
    const cards = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Choose></Choose>
            <Cards cards={cards}></Cards>

        </div>
    );
};

export default Home;