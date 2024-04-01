import { useParams } from "react-router-dom";
import useMovieDetails from "../../hook/useMovieDetails";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const MovieDetails = () => {
  const movieID = useParams();
  useMovieDetails(movieID);
  const movieDetails = useSelector((store) => store.movies.movieDetails);
  // console.log(movieID);

  return (
    <div className="">
      <MainContainer movieDetails={movieDetails} />
      <SecondaryContainer movieID={movieID} />
    </div>
  );
};
export default MovieDetails;
