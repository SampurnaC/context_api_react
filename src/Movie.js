const Movie = ({movie}) => {
  return (
    <div>
      {movie.name}
      <p>{movie.description}</p>

    </div>
  );
}
 
export default Movie;