import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedPlayingMovies } from "../utils/moviesSlice";

const useTopRatedPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTopRatedPlayingMovies();
  }, []);

  const fetchTopRatedPlayingMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const json = await Data.json();
    dispatch(addTopRatedPlayingMovies(json));
  };
};

export default useTopRatedPlayingMovies;
