import React from "react";
import Login from "./Login";
import validate from "../utils/validate";
const Body = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex justify-center items-center">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Image"
        />
        <div className="absolute text-white text-center">
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
          <input
            type="email"
            required
            placeholder="Email"
            className="m-3 px-10 py-2 rounded-md text-black text-lg font-bold"
          ></input>
          <button className="bg-red-700 px-20 m-3 py-3 rounded-lg text-lg font-bold">
            Get Started{" "}
          </button>
        </div>
      </div>

      <div className="text-center">zyz</div>
    </div>
  );
};

export default Body;