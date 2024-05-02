import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Loading from "./Loading";

const GptMovieSuggestion = () => {
  const showMovies = useSelector((store) => store.gpt);
  if (!showMovies) return ;
  //console.log(showMovies);
  const { movieNames, movieNamesResults } = showMovies;
  //console.log(movieNames);
  //console.log(movieNamesResults);

  return (
    <div className="bg-black relative bg-opacity-95">
      <h1 className="text-2xl md:text-6xl text-center    text-white   w-screen ">
        {showMovies.searchQuery && (
          <span>
            <b>Search Results for: </b>
            {showMovies.searchQuery}
          </span>
        )}
      </h1>

      <div className="">
        <div>
          {movieNames?.map((movieName, index) => (
            <MovieList title={movieName} movieData={movieNamesResults[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
