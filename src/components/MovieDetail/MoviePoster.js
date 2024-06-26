import React from "react";

const MoviePoster = ({ backdrop_path }) => {
  // console.log(backdrop_path);
  return (
    <div className="w-screen h-auto">
      <img
        src={"https://image.tmdb.org/t/p/original" + backdrop_path}
        className="w-screen lg:h-screen object-cover"
        alt="Movie backdrop"
      />
    </div>
  );
};

export default MoviePoster;
