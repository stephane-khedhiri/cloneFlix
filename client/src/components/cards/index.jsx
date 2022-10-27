import PropTypes from "prop-types";
import './style.scss'
import {useLayoutEffect, useState} from "react";
import {FaVoteYea} from "react-icons/fa";
import {SlNote} from 'react-icons/sl'

const Cards = ({item, badge}) => {
    const [data, setData] = useState(item)
    console.log(item)
    const path = `https://image.tmdb.org/t/p/original/${data["backdrop_path"]}`
    return (
        <>
            <div className="cellphone-container">
                <div className="movie">
                    <img src={path} className="movie-img"></img>
                    <div className="text-movie-cont">
                        <div className="mr-grid">
                            <div className="col1">
                                <h1>{data.title}</h1>
                                <ul className="movie-gen">
                                    <li>{data['release_date']}</li>
                                    <li>{data['vote_count']}</li>
                                    <li>Adventure, Drama, Sci-Fi,</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mr-grid summary-row">
                            <div className="col2">
                                <h5>SUMMARY</h5>
                            </div>
                            <div className="col2">
                                <ul className="movie-likes">
                                    <li><FaVoteYea/><span>{data['vote_count']}</span></li>
                                    <li><SlNote/><span>{data['vote_average']}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mr-grid">
                            <div className="col1">
                                <p className="movie-description">{data.overview.substring(0,125)}...(etc)</p>
                            </div>
                        </div>
                        <div className="mr-grid action-row">
                            <div className="col2">
                                <div className="watch-btn"><h3><i className="material-icons">&#xE037;</i>WATCH TRAILER
                                </h3></div>
                            </div>
                        </div>
                    </div>
                    <img style={{position: 'absolute', top: 0, right: 0, border: 0, zIndex:9999}} src="https://i.imgur.com/WhVkv6K.png" alt="film" />
                </div>
            </div>
        </>
    )
    debugger
}
Cards.propTypes= {
    item: PropTypes.object.isRequired,
}

export default Cards