import "./Home.css"
import {useFetch} from "../../hooks/UseFetch.jsx";
import Container from "../../components/container/Container.jsx";
import Cards from "../../components/cards/Cards.jsx";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const [data, loading] = useFetch("top-headlines?sources=techcrunch&apiKey=92fe0548e176495c8e447ef03bb2edd1")
    return (
        <Container>
            <h1 className="bg-amber-400">Home</h1>
            <div className="cards">
                {
                    data?.articles?.map(item =>
                        <Cards item={item} key={uuidv4()}/>
                    )
                }
            </div>
        </Container>
    )
}
export default Home
