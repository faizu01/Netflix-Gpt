import MovieCard from "./MovieCard";
import VideoCard from "./MovieDetail/VideoCard";
const MovieList = ({ title, movieData }) => {
  if (!movieData) return;
  // console.log(movieData)
  // if(title==='More Like This')console.log(movieData)
  return (
    <div className="md:px-10 px-0 xs:relative xs:px-0 ">
      <h1 className="text-5xl font-semibold mx-2 p-2 py-4 text-white">{title}</h1>

      <div className={`flex overflow-x-scroll no-scrollbar mb-5`}>
        {movieData.map((movie) => (
          <div key={movie.id} className="flex-none">
            {title !== "Videos" ? (
              movie?.poster_path && <MovieCard posterPath={movie?.poster_path} id={movie.id} />
            ) : (
              <VideoCard video={movie} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
