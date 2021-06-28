import React, {useState, useContext} from "react";
import Movie from './Movie' 
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies]=useContext(MovieContext);
  return (
    <div>
    {
      movies.map(movie => (
       <Movie movie={movie} key={movie.name}/>
      ))
    }
    </div>
  );
}
 
export default MovieList;