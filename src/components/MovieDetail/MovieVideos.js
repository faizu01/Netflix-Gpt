import { useSelector } from "react-redux";
import useMovieVideos from "../../hook/useMovieVideos";
import React from "react";
import VideoCard from "./VideoCard";
const MovieVideos = ({ movieID }) => {
  useMovieVideos(movieID);
  const videosList = useSelector((store) => store.movies.movieVideos);
  if (!videosList) return;
  console.log(videosList);
  return (
    <div className="px-[10%] py-[5%]">
      <h1 className="text-5xl font-bold text-white py-[2%]">Videos</h1>
      <div className="flex overflow-x-scroll">

      {
        videosList.map((video) => <VideoCard video={video} />)
      }
      
      </div>
      
    </div>
  );
};

export default MovieVideos;
