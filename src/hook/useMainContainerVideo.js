import { useEffect } from "react";
import { NOW_PLAYING_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMainContainerVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMainContainerVideo();
  }, []);

  const fetchMainContainerVideo = async () => {
    const Data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      NOW_PLAYING_OPTIONS
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
