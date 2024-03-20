import React from "react";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
