import React, {useState, useContext} from "react";
import { MovieContext } from "./MovieContext";


const AddMovie = () => {
  const[name, setName]=useState('');
  const[description, setDescription]=useState('');
  const[movies, setMovies]=useContext(MovieContext);
  const updateName=(e)=>{
    setName(e.target.value);
  }
  const updateDescription=(e)=>{
    setDescription(e.target.value);
  }
  const addMovie=(e)=>{
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies,{name: name, description: description}]);
    setName('');
    setDescription('');
  }
  return (
    <form onSubmit={addMovie}>
      <input type="text" name={name} value={name} onChange={updateName} />
      <input type="text" name={description} value={description} onChange={updateDescription} />
      <button>Submit</button>
    </form>
  );
}
 
export default AddMovie;