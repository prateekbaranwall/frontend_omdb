import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import './MovieInfo.css';

export default function MovieInfo(props) {
    const [movieInfo, setMovieInfo] = useState();
    const {selectedMovie} = props;
    useEffect(() => {
        console.log(process.env);
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${selectedMovie}`)
       .then((response)=>{setMovieInfo(response.data)}); 
    },[selectedMovie]);
    return (
        <div className="w1">
            {movieInfo?<>
    <div className='cont' >
        <img src={movieInfo?.Poster} alt="" className="img2" />
       <div className="cont2">
            <span className="a1">{movieInfo?.Title}</span>
            <span className="a3"> {movieInfo?.Plot}</span>
            <span className="a2"><span className="b1">IMDB rating:</span> {movieInfo?.imdbRating}</span>
            <span className="a2"><span className="b1">Type:</span> {movieInfo?.Type}</span>
            <span className="a2"><span className="b1">Year:</span> {movieInfo?.Year}</span>
            <span className="a2"><span className="b1">Rated:</span> {movieInfo?.Rated}</span>
            <span className="a2"><span className="b1">Released:</span> {movieInfo?.Released}</span>
            <span className="a2"><span className="b1">Genre:</span> {movieInfo?.Genre}</span>
            <span className="a2"><span className="b1">Director:</span> {movieInfo?.Director}</span>
            <span className="a2"><span className="b1">Runtime:</span> {movieInfo?.Runtime}</span>
            <span className="a2"><span className="b1">Actors:</span> {movieInfo?.Actors}</span>
       </div>
       <span className="close" onClick={()=>props.onMovieSelect()}>X</span>  
    </div>
    </>:"Loading..."}
        </div>
    )
}