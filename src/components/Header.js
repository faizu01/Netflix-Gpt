import React, { useEffect, useRef } from "react";
import Logo from "../assets/Logo.png";
import USER_AVATAR from "../assets/USER_AVATAR.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { addToggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import { setToggleHamBurger } from "../utils/hamBurgerSlice";
const Header = () => {
  const [signBtn, setSignBtn] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const toggleGptSearch = useSelector((store) => store.gpt.toggleGptSearch);
  const toggleHamBurger = useSelector(
    (store) => store.hamburger.toggleHamBurger
  );
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

  const handleGptSearchClick = () => {
    dispatch(addToggleGptSearch());
    if (toggleGptSearch) {
      navigate("/browse");
    } else {
      navigate("/gpt-search");
    }
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
   
  };
  //useEffect=(()=>{

  const handleHamBurger = () => {
    dispatch(setToggleHamBurger());
    const ul = document.getElementById("hambug");
    !toggleHamBurger ? (ul.style.opacity = 100) : (ul.style.opacity = 0);
  };
  //},[])
  return (
    <div
      className={`mx-0 w-[100%] md:flex bg-gradient-to-b from-black  ${
        toggleHamBurger ? "bg-black" : "bg-transparent"
      } bg-opacity-70 md:bg-transparent ${
        !user ? "inset-0" : "h-1/3"
      } fixed z-30 justify-between `}
    >
      <div className="flex justify-between">
        <div className={`mx-0 my-3  w-40 md:w-56 md:${"mx-[10%] "}`}>
          <img src={Logo} alt="Logo" />
        </div>
        <div
          id="menu"
          className="text-white relatve text-5xl my-2 md:opacity-0 opacity-100 pr-5 cursor-pointer"
          onClick={handleHamBurger}
        >
          {!toggleHamBurger ? "≡" : "X"}
        </div>
      </div>

      <div
        id="hambug"
        className="my-3 text-white   md:text-3xl md:opacity-100  opacity-0  md:relative  w-screen md:w-auto transition-all ease-in-out duration-700"
      >
        <ul
          className={`md:flex py-0  md:px-0 px-[5%] mr-3 w-screen md:w-auto bg-black md:bg-transparent`}
        >
          {/* {toggleGptSearch && ( */}
          <li className={`text-xl  py-1 md:text-2xl md:py-0 pb-5 md:px-4 `}>
            {
              <select
                onChange={handleLanguageChange}
                className=" md:bg-black bg-transparent text-white border md:border-white border-transparent  py-1 cursor-pointer hover:text-cyan-300 duration-500 md:hover:text-white "
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option
                    className="bg-black "
                    key={language.identifier}
                    value={language.identifier}
                  >
                    {language.name}
                  </option>
                ))}
              </select>
            }
          </li>
          {/* )} */}
          {user && (
            <li className="mr-4 md:py-0 pb-5 pl-1 md:pl-0">
              <button
                className="text-xl hover:text-cyan-400 duration-500  md:hover:text-white   md:bg-purple-400  md:py-1 md:px-2"
                onClick={handleGptSearchClick}
              >
                {!toggleGptSearch ? "GPT Search" : "Home"}
              </button>
            </li>
          )}
          {user && (
            <li className="md:mr-4 mr-0 md:block hidden ">
              <li className="mr-4 md:py-0 pb-5 pl-1 md:pl-0"></li>
              <img
                src={USER_AVATAR}
                alt="Loading"
                className="w-12 rounded-xl "
              ></img>
            </li>
          )}
          <li className="md:mr-4 mr-0 pl-1 md:pl-0">
            {user ? (
              <Link to="/">
                <button
                  onClick={handleSignOut}
                  className="md:px-3 md:py-2 text-xl hover:text-cyan-300 duration-500 md:hover:text-white rounded-md text-white md:bg-red-700 text-md"
                  type="submit"
                >
                  Sign Out
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  className="md:px-3 md:py-2 text-xl hover:text-cyan-300 duration-500 md:hover:text-white  rounded-md text-white md:bg-red-700 text-md"
                  type="submit"
                >
                  Sign In
                </button>
              </Link>
            )}
          </li>
        </ul>
        {user && (
          <div className="lg:mt-3 opacity-0 lg:opacity-100 lg:float-end lg:mr-[5%]">
            Hello 👋 Faizu
          </div>
        )}
      </div>
      {/* )} */}
    </div>
  );
};

export default Header;
