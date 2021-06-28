import React, {useState, createContext} from "react";

export const MovieContext=createContext();

export const MovieProvider = props => {
  const [movies, setMovies]=useState([
            {name: "Harry Potter",
            description: "book about harry potter"},
            {name: "Game of Thrones",
            description: "book about GOT"},
            {name: "The Hunger Games",
            description: "book about the hunger games"}
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}
 