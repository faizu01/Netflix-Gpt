import React from "react";
import Login from "./Login";
import validate from "../utils/validate";
import { BACKGROUND_IMG } from "../utils/constant";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex justify-center items-center">
        <img
          src={BACKGROUND_IMG}
          alt="Image"
        />
        <div className="absolute text-white text-center z-40">
          <h1 className="text-7xl font-extrabold">
            Unlimited movies,
            <br />
            TV shows and more
          </h1>
          <h3 className=" p-3 m-3 font-bold text-xl">
            Starts at ₹149. Cancel anytime.
          </h3>
          <h3 className="m-3 text-lg font-bold">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          {/* <input
            type="email"
            required
            placeholder="Email"
            className="m-3 px-10 py-2 rounded-md text-black text-lg font-bold"
          ></input> */}
          <Link to={"/login"}>
            <button className=" px-40 m-3 py-3 rounded-lg text-lg font-bold transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ">
              Get Started{" "}
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center">zyz</div>
    </div>
  );
};

export default Body;
