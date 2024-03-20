import React from "react";
import { NOW_PLAYING_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/moviesSlice"
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="relative z-10">
      <div className=""></div>
      <h1 className="text-white text-center">Browse</h1>
    </div>
  );
};

export default Browse;
