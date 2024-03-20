import React, { useEffect } from "react";
import Logo from "../assets/Logo.png";
import USER_AVATAR from "../assets/USER_AVATAR.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [signBtn, setSignBtn] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        setSignBtn(false);
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        setSignBtn(true);
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div
      className={`w-screen flex bg-gradient-to-b from-black  ${
        !user ? "inset-0" : "h-1/3"
      } fixed z-30 justify-between `}
   
    >
      <div className={`w-44 my-3 ${!user&&"mx-40"}`}>
        <img src={Logo} alt="Logo" />
      </div>

      {signBtn && !user && (
        <div className={`${!user&&"mx-40"} my-5`}>
          <ul className="flex" onClick={() => setSignBtn(false)}>
            <li className={`text-white text-2xl items-center ${!user&& "mx-10"
          }`}>Language</li>

            <li>
              <Link to={"/login"}>
                <button
                  className="px-4 py-2 rounded-md text-white bg-red-700 text-md"
                  type="submit"
                >
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {user && (
        <div className={`w-44 my-3  ${!user&&"mx-40"}`}>
          <ul className="flex">
            {/* <li className="text-white text-2xl items-center mx-10">
              {user?.displayName}
            </li> */}
            <li className="mr-2">
              <img src={USER_AVATAR} alt="Loading" className="w-14"></img>
            </li>
            <li className="mr-2">
              <Link to={"/"}>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 rounded-md text-white bg-red-700 text-md"
                  type="submit"
                >
                  Sign Out
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
