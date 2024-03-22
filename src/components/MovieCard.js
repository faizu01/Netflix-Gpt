import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);
  return (
    <div className="p-2 m-2">
      <img src={IMG_CDN + posterPath}></img>
    </div>
  );
};

export default MovieCard;
