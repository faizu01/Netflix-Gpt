import usePopularPlayinMovies from "../hook/usePopularPlayingMovies";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useTopRatedPlayingMovies from "../hook/useTopRatedPlayingMovies";
import useUpcomingPlayingMovies from "../hook/useUpcomingPlayingMovies";

const SecondaryContainer = () => {
  usePopularPlayinMovies();
  useTopRatedPlayingMovies();
  useUpcomingPlayingMovies();
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="-mt-[450px] relative">
        <MovieList
          title={"Popular"}
          movieData={movies?.popularPlayingMovies?.results}
        />
        <MovieList
          title={"Top Rated"}
          movieData={movies?.topRatedPlayingMovies?.results}
        />
        <MovieList
          title={"Upcoming"}
          movieData={movies?.upcomingPlayingMovies?.results}
        />
        <MovieList
          title={"Popular"}
          movieData={movies?.popularPlayingMovies?.results}
        />
        <MovieList
          title={"Popular"}
          movieData={movies?.popularPlayingMovies?.results}
        />
        <MovieList
          title={"Popular"}
          movieData={movies?.popularPlayingMovies?.results}
        />
      </div>
    </div>
  );
};
export default SecondaryContainer;
