import './App.css';
import {useEffect, useState} from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(()=> {
    searchMovies("Batman")
  }, []);

  return (
    <div className="app">
      <h1>Movie Explorer</h1>

      <div className="search">
        <input placeholder='Search your movie' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
        <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)}/>
      </div>

      {movies?.length > 0 ? (
          <div className='container'>
            {movies.map(movie => <MovieCard movie={movie}/>)}
          </div>  
        ) : (
          <div className="empty">
            Movie not found
          </div>
        )
      }
      
  

    </div>
  );
}

export default App;
