import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
const Browse = () => {
  useNowPlayingMovies();
  const showGpt = useSelector((store) => store.gpt.toggleGptSearch);

  console.log(showGpt)
  return (
    <div className="flex flex-col">
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
