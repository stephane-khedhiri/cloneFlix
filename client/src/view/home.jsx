import Layout from "./default/layout";

import Sliders from "../components/sliders";
import Cards from "../components/cards";
import {useSelector} from "react-redux";

const Home = () => {
    const {movie, tv} = useSelector(state => state.films.datas)

    return (
        <Layout>
            <main>
                <Sliders items={movie}/>
                <Sliders items={movie}/>
            </main>
        </Layout>
    )
}

export default Home