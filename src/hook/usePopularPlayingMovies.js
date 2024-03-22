import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularPlayingMovies } from "../utils/moviesSlice";

const usePopularPlayinMovies = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const json = await Data?.json();
    dispatch(addPopularPlayingMovies(json));
  };
};

export default usePopularPlayinMovies;
