import React, { useRef } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  signOut,
  updateEmail,
  updatePassword,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
} from "firebase/auth";
const UpdateEmailOrPassword = ({ title }) => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const newPassword = useRef();
  const handleCancel = () => {
    navigate("/browse");
  };
  const handleSave = async () => {
    const user = auth.currentUser;
    if (title === "Email") {
      await reauthenticateWithCredential(
        user,
        EmailAuthProvider.credential(user.email, password.current.value)
      ).then(async (userCredential) => {
        await updateEmail(userCredential.user, email.current.value);
        alert(
          "Email Changed Successfully to " +
            email.current.value +
            " you will be redirected to Login Screen"
        );
        await signOut(auth);
      }).catch((e)=>{
        alert("Wrong Password")
      })
      
    } else {
      await updatePassword(user, newPassword.current.value);
      alert(
        "Password changed Successfully ! you'll be redirected to Login Screen "
      );
      await signOut(auth);
    }
  };
  return (
    <div className="h-screen w-screen pt-[10%] flex flex-col items-center">
      <h1 className="text-4xl mb-5 text-left">Change {title}</h1>
      <div className="shadow-lg w-[40%] h-[45%] mt-2 flex flex-col px-5">
        {title === "Email" ? (
          <div className="flex flex-col">
            <label>Current {title}</label>
            <input
              disabled
              type="email"
              className="bg-gray-100 py-3 w-1/2 mb-3 rounded px-4 opacity-70"
              value={auth?.currentUser?.email}
            ></input>
            <label>New {title}</label>
            <input
              ref={email}
              type="email"
              className="bg-blue-100 py-3  w-1/2 mb-3 rounded px-4"
            ></input>
            <label>Netflix Password</label>
            <input
              ref={password}
              type="password"
              className="bg-blue-100 py-3  w-1/2 mb-3 rounded px-4"
            ></input>
          </div>
        ) : (
          <div className="flex flex-col">
            <label>Current {title}</label>
            <input
              disabled
              type="password"
              className="bg-gray-100 py-3 w-1/2 mb-3 rounded px-4 opacity-70"
              value="***************"
            ></input>
            <label>New {title}</label>
            <input
              ref={newPassword}
              type="password"
              className="bg-blue-100 py-3  w-1/2 mb-3 rounded px-4"
            ></input>
            {/* <input
              ref={password}
              type="password"
              className="bg-blue-100 py-3  w-1/2 mb-3 rounded px-4"
            ></input> */}
          </div>
        )}
        <div className="flex">
          <button
            onClick={handleSave}
            className="bg-blue-400 text-white text-lg w-1/5 py-2  mt-4 mr-2 rounded"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-lg w-1/5 py-2  mt-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmailOrPassword;
