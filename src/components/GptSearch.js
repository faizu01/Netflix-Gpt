import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constant";
const GptSearch = () => {
  return (
    <div className="h-full w-screen">
      <img
        src={BACKGROUND_IMG}
        alt="Image"
        className="h-screen w-screen object-cover fixed"
      />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
