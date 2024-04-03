import React from "react";
import BackgroundVideoTitle from "../BackgroundVideoTitle";
import MoviePoster from "./MoviePoster";
import MovieDescription from "./MovieDescription";
const MainContainer = ({ movieDetails }) => {
 
  if (!movieDetails) return;
  //console.log(movieDetails);
  return (
    <div className="md:flex flex-col">
      <MoviePoster backdrop_path={movieDetails?.backdrop_path} />
      <MovieDescription movieDetails={movieDetails} />
    </div>
  );
};

export default MainContainer;
