import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";
const useMovieDetails = ({ movieID }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieDetails();
  },[movieID]);
  const fetchMovieDetails = async () => {
    try {
      const Data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
        MOVIE_OPTIONS
      );
      const json = await Data.json();
      //console.log(json)
      dispatch(addMovieDetails(json));
    } catch (error) {
      
    }
  };
};
export default useMovieDetails;
