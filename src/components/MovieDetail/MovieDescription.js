import React from "react";

const MovieDescription = ({ movieDetails }) => {
  return (
    <div className="h-screen absolute  flex items-center px-[10%]  bg-gradient-to-r from-black text-white">
      <div className="w-[30%] px-1">
        <h1 className="text-5xl pb-4 font-extrabold">{movieDetails?.title}</h1>

        <ul className="flex text-lg justify-between">
          <li className="px-1">
            <b>
              <b className="font-bold text-xl">Status</b> <br />
              {movieDetails?.status}
            </b>
          </li>
          <li className="px-2">
            <b>
              <b className="font-bold text-xl">Date</b> <br />
              {movieDetails?.release_date}
            </b>
          </li>
          <li className="px-2">
            <b className="font-bold text-xl">IMDB</b>
            <br /> <b>{movieDetails?.vote_average}</b>
          </li>
          <li className="px-2">
            <b className="font-bold text-xl">Revenue</b>
            <br /> <b>{movieDetails?.revenue}</b>
          </li>
        </ul>

        <h3 className="mt-0 lg:mt-4 px-2 text-lg">{movieDetails?.overview}</h3>
      </div>
    </div>
  );
};

export default MovieDescription;
