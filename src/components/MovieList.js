import MovieCard from "./MovieCard";
const MovieList = ({ title, movieData }) => {
  if (!movieData) return;

  return (
    <div className="md:px-10 px-0 xs:relative xs:px-0 ">
      <h1 className="text-5xl font-semibold mx-2 p-2 text-white">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar mb-5">
        {movieData.map((movie) => (
          <div key={movie.id} className="flex-none">
            <MovieCard posterPath={movie?.poster_path} id={movie.id}/>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
