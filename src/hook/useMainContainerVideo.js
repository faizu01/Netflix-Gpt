import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMainContainerVideo = (movieId) => {
  const maincontainerVideo=useSelector((store)=>store.movies.maincontainerVideo);
  const dispatch = useDispatch();
  useEffect(() => {
    !maincontainerVideo && fetchMainContainerVideo();
  }, []);

  const fetchMainContainerVideo = async () => {
    const Data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      MOVIE_OPTIONS
    );

    const json = await Data?.json();
    const filterTrailor = json?.results?.filter(
      (movie) =>
        (movie.type === "Trailer" && movie.name == "Official Trailer") ||
        movie.type === "Trailer"
    );
    dispatch(addTrailerVideo(filterTrailor));
    
  };
};

export default useMainContainerVideo;
