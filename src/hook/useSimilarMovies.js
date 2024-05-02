import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSimilar } from "../utils/moviesSlice";

const useSimilarMovies = ({ movieID }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSimilarMovies();
  });

  const fetchSimilarMovies = async () => {
    try {
      const Data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/similar?language=en-US&page=1`,
        MOVIE_OPTIONS
      );
      const json = await Data.json();
      dispatch(addSimilar(json?.results));
    } catch (error) {}
  };
};
export default useSimilarMovies;
