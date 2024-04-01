import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { combineSlices } from "@reduxjs/toolkit";
const Browse = () => {
  useNowPlayingMovies();

  const showGpt = useSelector((store) => store.gpt.toggleGptSearch);

  //console.log(showGpt);
  const movielist = useSelector((store) => store.movies);
  //console.log(movielist);
  return (
    <div className="flex flex-col w-screen overflow-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
