import { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies]=useContext(MovieContext);

  return (
    <div>
      <h1>Movies Length </h1>
      <p>{movies.length}</p>
    </div>
  );
}
 
export default Nav;