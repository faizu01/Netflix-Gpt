import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  reauthenticateWithCredential,
  promptForCredentials,
  EmailAuthProvider,
} from "firebase/auth";
import { useSearchParams } from "react-router-dom";
import UpdatePassword from "./UpdatePassword";
import UpdateEmail from "./UpdateEmailOrPassword";
const UpdateAccount = () => {
  const [errormsg, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const password = useRef();
  const param = useParams();
  let isUserVerified = false;
  const handleCLick = () => {
    verifyUser();
  };
  function promptForCredentials() {
    const email = auth.currentUser.email;
    return EmailAuthProvider.credential(email, password.current.value);
  }
  const verifyUser = () => {
    const user = auth.currentUser;
    const credential = promptForCredentials();
    reauthenticateWithCredential(user, credential)
      .then(() => {
        setErrorMessage("Authentication success ✅");
        if (param.where === "email") {
          navigate("/update-email");
        } else {
          navigate("/update-password");
        }
      })
      .catch((error) => {
        setErrorMessage("Incorrect Password");
      });
  };
  return (
    <div className="h-screen w-screen pt-[10%] text-center flex flex-col items-center">
      <h1 className="text-4xl font-bold pb-1">
        First, let's confirm your identity.
      </h1>
      <h3 className="text-2xl">
        Before you make any changes, we'll just need to make sure it's you.
      </h3>
      <div className="shadow-lg mt-[3%] w-[40%] h-[30%]">
        <label className="text-lg mb-[3%] font-bold block">
          Enter Your Netflix password to continue..
        </label>
        <input
          ref={password}
          type="password"
          className="py-2 px-10 border border-black"
        ></input>
        <button
          onClick={handleCLick}
          className="bg-blue-500 py-2 px-4 rounded ml-[2%]"
        >
          Continue
        </button>
        <h1 className="mt-[2%] text-2xl  text-red-600">{errormsg}</h1>
      </div>
    </div>
  );
};

export default UpdateAccount;
