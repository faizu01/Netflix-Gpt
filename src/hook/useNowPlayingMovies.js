import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { MOVIE_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    !nowPlayingMovies && fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const JSON = await Data.json();
    dispatch(addNowPlayingMovies(JSON.results));
  };
};

export default useNowPlayingMovies;
