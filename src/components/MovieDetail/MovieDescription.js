import React from "react";

const MovieDescription = ({ movieDetails }) => {
  return (
    <div className="lg:h-screen w-screen h-auto lg:absolute  flex md:items-center px-[10%]  md:bg-gradient-to-r from-black  text-white bg-black lg:bg-transparent ">
      <div className="w-auto lg:w-[50%] 2xl:w-[37%] px-1">
        <h1 className="text-5xl  pb-[6%] font-extrabold">
          {movieDetails?.title}
        </h1>

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

        <h3 className="mt-[5%] lg:mt-4 px-2 text-lg">
          {movieDetails?.overview}
        </h3>
      </div>
    </div>
  );
};

export default MovieDescription;
