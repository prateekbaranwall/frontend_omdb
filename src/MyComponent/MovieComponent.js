import React from 'react'
import './MovieComponent.css';

export default function MovieComponent(props) {
    const {Title, Year, imdbID, Type, Poster} = props.movie;
    return (
        <div className='main' onClick={()=>{props.onMovieSelect(imdbID); window.scrollTo(0,0)}}>
            <img src={Poster} alt="" className="img" />
           <span className="title">
                {Title}
           </span>
           <div className="con">
           <span className="yr">Year : {Year}</span>
           <span className="yr type">Type : {Type}</span>

           </div>
           
        </div>
    )
}
