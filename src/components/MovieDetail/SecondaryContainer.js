import React from "react";
import useMovieVideos from "../../hook/useMovieVideos";
import useSimilarMovies from "../../hook/useSimilarMovies";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const SecondaryContainer = () => {
  const movieID = useParams();
  useMovieVideos(movieID);
  useSimilarMovies(movieID);
  const movies = useSelector((store) => store.movies);

  if (!movies) return;
  return (
    <div className="bg-black px-[7%] w-screen ">
      <div className="py-[3%]">
        <MovieList title={"Videos"} movieData={movies?.movieVideos} />
      </div>
      <div className="py-[3%]">
        <MovieList title={"More Like This"} movieData={movies?.similar} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
