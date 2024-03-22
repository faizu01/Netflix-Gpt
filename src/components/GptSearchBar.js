import React from "react";
import Lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const LangIdentifier = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="p-10 w-1/2 flex">
        <input
          type="text"
          className="p-4 m-4 w-10/12 rounded-md text-2xl border border-black"
          placeholder={Lang[LangIdentifier].SearchInputPlaceHolder}
        ></input>
        <button
          type="button"
          className="text-white p-4 m-4 w-2/12 rounded-md bg-red-400"
        >
          {Lang[LangIdentifier].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
