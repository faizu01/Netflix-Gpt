import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const showMovies = useSelector((store) => store.gpt);
  if (!showMovies) return;
  //console.log(showMovies);
  const { movieNames, movieNamesResults } = showMovies;
  //console.log(movieNames);
  //console.log(movieNamesResults);

  return (
    <>
      <h1 className="relative text-4xl lg:text-6xl text-center mt-4  pb-20 text-white bg-gradient-to-t from-black w-screen bg-opacity-80">
        {showMovies.searchQuery && (
          <b>Search Results for: {showMovies.searchQuery} </b>
        )}
      </h1>

      <div className="relative bg-black bg-opacity-50 ">
        <div>
          {movieNames?.map((movieName, index) => (
            <MovieList title={movieName} movieData={movieNamesResults[index]} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GptMovieSuggestion;
