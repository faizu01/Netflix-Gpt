import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingPlayingMovies } from "../utils/moviesSlice";

const useUpcomingPlayingMovies = () => {
  const upcomingPlayingMovies = useSelector(
    (store) => store.movies.upcomingPlayingMovies
  );
  const dispatch = useDispatch();
  useEffect(() => {
    !upcomingPlayingMovies && fetchUpcomingPlayingMovies();
  }, []);

  const fetchUpcomingPlayingMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const json = await Data.json();
    dispatch(addUpcomingPlayingMovies(json));
  };
};

export default useUpcomingPlayingMovies;
