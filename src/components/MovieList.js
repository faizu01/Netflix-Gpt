import MovieCard from "./MovieCard";
const MovieList = ({ title, movieData }) => {
  if (!movieData) return;
  return (
    <div className="px-10 ">
      <h1 className="text-5xl font-semibold mx-2 p-2 text-white">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar">
        {movieData.map((movie) => (
          <div key={movie.id} className="flex-none">
            <MovieCard posterPath={movie?.backdrop_path} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
