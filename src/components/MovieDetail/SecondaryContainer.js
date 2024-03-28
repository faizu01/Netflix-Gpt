import React from "react";
import MovieVideos from "./MovieVideos";
const SecondaryContainer = ({ movieID }) => {
  return (
    <div className="bg-black">
      <MovieVideos movieID={movieID} />
    </div>
  );
};

export default SecondaryContainer;
