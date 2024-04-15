import React, { useRef } from "react";
import Lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { MOVIE_OPTIONS } from "../utils/constant";
import { addRecommendedMovies, setSearchQuery } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const LangIdentifier = useSelector((store) => store.config.lang);
  const searchQuery = useSelector((store) => store.gpt.searchQuery);
  const searchPrompt = useRef(null);
  const fetchRecommendedMovies = async (movieName) => {
    const correctMovieName = movieName.replace(" ", "%20");
    const Data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        correctMovieName +
        "&include_adult=false&language=en-US&page=1",
      MOVIE_OPTIONS
    );
    const json = await Data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    dispatch(setSearchQuery(searchPrompt.current.value));

    const query =
      "Act as a Movie Reccommendation System and suggest 5 movies names for the query" +
      searchPrompt.current.value +
      "' comma's seperated as a string in a single line do not include any extra thing in your response just movie name";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = chatCompletion?.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) =>
      fetchRecommendedMovies(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addRecommendedMovies({
        movieNames: gptMovies,
        movieNamesResults: tmdbResults,
      })
    );
  };
  return (
    <div
      className={`2xl:pt-[10%] md:pt-[10%]  pt-[45%] md:flex md:justify-center ${
        searchQuery && "bg-gradient-to-t from-black"
      } relative z-10`}
    >
      <form
        className="md:p-10 p-0 w-screen xl:w-1/2 flex md:flex-row flex-col items-center xs:pt-[20%] "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchPrompt}
          type="text"
          className="p-4 mb-2 md:m-4 m-0 w-[80%] lg:w-10/12 rounded-md text-2xl border border-blacks"
          placeholder={Lang[LangIdentifier].SearchInputPlaceHolder}
        ></input>
        <button
          type="submit"
          className="text-white p-5 m-0 md:m-4 w-[25%] lg:w-2/12 rounded-lg bg-red-400"
          onClick={handleGptSearchClick}
        >
          {Lang[LangIdentifier].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
