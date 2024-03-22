import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  // useEffect( async()=>{
  //   const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', NOW_PLAYING_OPTIONS)
  //   console.log(data.json());
  // },[]);
  return (
    <div className="flex flex-col">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
