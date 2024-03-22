import { useSelector } from "react-redux";
import useMainContainerVideo from "../hook/useMainContainerVideo";
const BackgroundVideo = ({ movieId }) => {
  //Make Api call to get the trailer and store in redux appstore
  useMainContainerVideo(movieId);

  //Now read the key of video from the store
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  if (!trailerVideo) return;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        width=""
        height=""
        src={`https://www.youtube.com/embed/${trailerVideo?.[0]?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
        // src={`https://www.youtube.com/embed/5cb5xaVtxx0?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default BackgroundVideo;
