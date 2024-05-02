import BackgroundVideo from "./BackgroundVideo";
import BackgroundVideoTitle from "./BackgroundVideoTitle";

import { useSelector } from "react-redux";
import Loading from "./Loading";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return <Loading />
     //early return

  //console.log(movies);
  const mainMovie = movies[7];
  const { id, original_title, overview } = mainMovie; //destructure

  return (
    <div className="flex">
      <BackgroundVideo movieId={id} />
      <BackgroundVideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
