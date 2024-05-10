import React from "react";
import { BACKGROUND_IMG } from "../utils/constant";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-center items-center h-screen">
        <img
          className="h-[100%]  w-[100%]  object-cover"
          src={BACKGROUND_IMG}
          alt="Image"
        />
        <div className="absolute text-white text-center z-40 ">
          <h1 className="text-4xl xs:text-3xl md:text-7xl font-extrabold">
            Unlimited movies,
            <br />
            <h1>TV shows and more</h1>
          </h1>

          <h3 className="md:p-3 m-3 font-bold text-xl">
            Starts at ₹149. Cancel anytime.
          </h3>
          <h3 className=" xs:hidden md:m-3 text-lg font-bold">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <Link to={"/login"}>
            <button className="px-[10%] py-3 my-3 md:m-3 rounded-lg text-lg font-bold transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ">
              Get Started{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
