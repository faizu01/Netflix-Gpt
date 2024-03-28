import usePopularPlayinMovies from "../hook/usePopularPlayingMovies";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useTopRatedPlayingMovies from "../hook/useTopRatedPlayingMovies";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import useUpcomingPlayingMovies from "../hook/useUpcomingPlayingMovies";

const SecondaryContainer = () => {
  usePopularPlayinMovies();
  useTopRatedPlayingMovies();
  useUpcomingPlayingMovies();
  //useNowPlayingMovies();
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  //console.log(movies);
  return (
    <div className="bg-black">
      <div className="mt-[20%] relative md:-mt-[25%]">
        <MovieList
          title={"Popular"}
          movieData={movies?.popularPlayingMovies?.results}
        />
        <MovieList
          title={"Top Rated"}
          movieData={movies?.topRatedPlayingMovies?.results}
        />
        <MovieList title={"Now Playing"} movieData={movies?.nowPlayingMovies} />
        <MovieList
          title={"Upcoming"}
          movieData={movies?.upcomingPlayingMovies?.results}
        />
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
      </div>
    </div>
  );
};
export default SecondaryContainer;
