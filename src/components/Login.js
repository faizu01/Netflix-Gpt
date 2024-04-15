// "strict mode"
import React, { useRef, useState } from "react";
import validate from "../utils/validate";
import { auth } from "../utils/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  updateCurrentUser,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMG } from "../utils/constant";
// import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errormessage, setErrorMessage] = useState(null);
  // const dispatch = useDispatch();

  const handleOnSubmit = async () => {
    const errormessage = validate(email.current.value, password.current.value);
    setErrorMessage(errormessage);
    if (errormessage) return;

    if (!isSignedIn) {
      await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        }); 
        window.location.reload();
        await sendEmailVerification(user);
        alert("An email with verification has been sent !");
      });
    } else {
      //Sign In
      try {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        ).then((userCredential) => {});
      } catch (error) {
        setErrorMessage("Incorrect Email or Password ");
      }
    }
  };
  return (
    <div className="flex justify-center items-center">
      <img
        src={BACKGROUND_IMG}
        alt="Image"
        className="h-screen w-screen object-cover z-0 relative"
      />
      <div className="fixed z-40  bg-black bg-opacity-60 rounded-lg flex flex-col xs:w-screen xs:top-[25%] sm:w-1/2 xl:w-1/3 2xl:w-1/4">
        <h1 className="text-white text-4xl m-2 p-3 xs:text-3xl ">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isSignedIn && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Your Full Name"
              className="m-4 p-4 rounded-xl w-11/12  text-white bg-blue-400 bg-opacity-20"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Phone Number"
            className="m-4 p-4  rounded-xl w-11/12  text-white bg-blue-400 bg-opacity-20 "
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="m-4 p-4 rounded-lg w-11/12 bg-blue-400 bg-opacity-20 text-white"
          ></input>
          <button
            onClick={handleOnSubmit}
            type="submit"
            className="m-4 p-4 bg-red-700 rounded-lg w-11/12 text-white text-xl"
          >
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className={`mx-4 px-4 text-red-600 text-xl font-bold shadow-white`}
          >
            {errormessage}
          </p>

          <p
            className="text-white m-4 p-4 cursor-pointer text-sm md:text-2xl"
            onClick={() => {
              isSignedIn ? setIsSignedIn(false) : setIsSignedIn(true);
            }}
          >
            <b className="text-lg md:text-xl">
              {isSignedIn
                ? "New to Netflix ?  Sign Up Now "
                : "Already Registered ? Sign In Now"}
            </b>
          </p>
          <p className="text-white text-sm -mt-9 mx-8 py-10 xs:hidden visible">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
