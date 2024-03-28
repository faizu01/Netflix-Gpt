import React, { useState } from "react";
import { IMG_CDN } from "../utils/constant";
import MovieDetails from "./MovieDetail/MovieDetails";
import { Link } from "react-router-dom";
const MovieCard = ({ posterPath, id }) => {
  const [showdetail, setShowDetails] = useState(false);
  if (!posterPath && !id) return;

  const handleMouseEnter = () => {
    setShowDetails(true);
  };
  const handleMouseLeave = () => {
    setShowDetails(false);
  };
  return (
    <div
      className="my-3 mx-4 cursor-pointer transition-all ease-in-out delay-75  hover:scale-110 duration-300 bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={"/moviedetails/" + id}>
        <img className="" src={IMG_CDN + posterPath}></img>
        {showdetail && (
          <h1 className="absolute inset-0 flex  items-center  justify-center bg-black bg-opacity-70 text-white text-xl">
            Show Details
          </h1>
        )}
      </Link>
    </div>
  );
};

export default MovieCard;
