import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieVideos } from "../utils/moviesSlice";

const useMovieVideos = ({ movieID }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieVideos();
  }, []);

  const fetchMovieVideos = async () => {
    const Data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}
        /videos?language=en-US`,
      MOVIE_OPTIONS
    );
    const json = await Data.json();
    dispatch(addMovieVideos(json.results));
  };
};
export default useMovieVideos;
