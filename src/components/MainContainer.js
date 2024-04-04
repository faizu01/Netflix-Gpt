import { useEffect } from "react";
import BackgroundVideo from "./BackgroundVideo";
import BackgroundVideoTitle from "./BackgroundVideoTitle";
import { MOVIE_OPTIONS } from "../utils/constant";
import useMainContainerVideo from "../hook/useMainContainerVideo";

import { useSelector } from "react-redux";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return <h1>Loading .....</h1>; //early return
  //console.log(movies);
  const mainMovie = movies[15];
  const { id, original_title, overview } = mainMovie; //destructure

  return (
    <div className="flex">
      <BackgroundVideo movieId={id} />
      <BackgroundVideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
