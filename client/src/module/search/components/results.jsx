import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MovieDb from "../../../service/moviedb";
import style from './../style/results.css'
import Card from "./card";


const Results = ({children}) => {
    const {slug} = useParams()
    const [search, setSearch] = useState([])
    useEffect(() => {
        return ()=> MovieDb.search({query: slug})
            .then(data => setSearch(data.results))
            .catch(error=>console.log(error))

    }, [slug])

    return(
        // add style
        <div>
            {search.map((data, index) =>
                <Card key={index} width={100 / search.length} item={data}>{children}</Card>
            )}

        </div>
    )
}

export default Results