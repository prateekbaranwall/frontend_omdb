import './App.css';
import React, { useState } from "react";
import axios from 'axios';
import MovieComponent from './MyComponent/MovieComponent'
import MovieInfo from './MyComponent/MovieInfo'

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const fetchData = async(search) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`
    );
    // console.log(response)
    updateMovieList(response.data.Search);
  };
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value),500);
    updateTimeoutId(timeout);
  };

  return (
    <>
   
    <div className="App">
      <div>
            <div className="header">Movies Info</div>
        </div>
        {
          selectedMovie && <MovieInfo selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>
        }
      <div className="mid">
      {
        movieList?.length ? movieList.map((movie, index)=> <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect}/>) : <img src="https://www.pinclipart.com/picdir/big/4-48708_film-background-cliparts-movie-logo-without-background-png.png" alt="" className="homeImg" />
      }
      </div>
 
      
            <nav className="bottom">
                <div className="searchBar">
                   <input type="text" placeholder="Search Movie" className="search" value={searchQuery} onChange={onTextChange} />
                </div>
            </nav>
    </div>
    </>
  );
}

export default App;
