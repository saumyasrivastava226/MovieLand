import React from 'react'
import {useState,useEffect} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
// API key- e52c70cb
    const API_URL='http://www.omdbapi.com?apikey=e52c70cb';
    const movie1={
        "Title": "Spiderman",
        "Year": "1990",
        "imdbID": "tt0100669",
        "Type": "movie",
        "Poster": "N/A"
    }
     const App=()=>{

       const [movies, setMovies]= useState([]);
       const [searchTerm,setSearchTerm]=useState("");
       const searchMovies= async(title)=>
       {
            const response= await fetch(`${API_URL}&s=${title}`);
            const data= await response.json();
            setMovies(data.Search);
            console.log(data);
       }
    // useEffect takes one call back function as parameter and one dependency array (empty) if you only want to call at the start
    useEffect(()=>{
        searchMovies('Superman')
    },[]);

    return(
        <div className="app">
           <h1>MovieLand</h1>
        

        <div className="search">
            <input 
                placeholder="Search from movies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
            <img
                src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
            />
        </div>
        {
            movies?.length>0
            ?
            (
                <div className="container">
                {
                     movies.map((movie) => (
                        <MovieCard movie={movie} />
                      ))
                }
               </div>
            
            ):(
                <div className="empty">
                  <h2>No movies found</h2>
                </div>
            )
        }

        
        </div>

    );
}

export default App;
//We have to export every single component so that we can call it from somewhere else
