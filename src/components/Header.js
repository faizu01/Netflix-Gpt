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
import { AVATAR, SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import { setToggleHamBurger, setToggleSign } from "../utils/hamBurgerSlice";
const Header = () => {
  const [signBtn, setSignBtn] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const toggleGptSearch = useSelector((store) => store.gpt.toggleGptSearch);
  const displayName = useSelector((store) => store?.user?.displayName);
  const [toggleuser,setToggleUser]=useState(false);
  const toggleHamBurger = useSelector(
    (store) => store.hamburger.toggleHamBurger
  );
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // dispatch(setToggleSign());
        dispatch(setToggleHamBurger());
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

  const handleHamBurger = () => {
    dispatch(setToggleHamBurger());
  };
  const handleUser = () => {
    // dispatch(setToggleSign());
    setToggleUser(!toggleuser)
  };
  return (
    <div
      className={`mx-0 w-[100%] md:flex bg-gradient-to-b from-black  ${
        toggleHamBurger ? "bg-black" : "bg-transparent"
      } bg-opacity-70 md:bg-transparent ${
        !user ? "inset-0" : "h-1/3"
      } fixed z-30 justify-between `}
    >
      <div className="flex justify-between">
        <div className={`mx-0   w-40 md:w-56 md:${"mx-[10%] "}`}>
          <img src={Logo} alt="Logo" />
        </div>
        <div
          id="menu"
          className="text-white relatve text-5xl -my-1 md:opacity-0 opacity-100 pr-5 cursor-pointer"
          onClick={handleHamBurger}
        >
          {!toggleHamBurger ? "≡" : "x"}
        </div>
      </div>

      <div
        id="hambug"
        className={`my-[2%] xl:my-[1%] text-white   md:text-3xl md:opacity-100  ${
          toggleHamBurger ? "opacity-100" : "opacity-0"
        }  md:relative  w-screen md:w-auto transition-all ease-in-out duration-700`}
      >
        <ul
          className={`md:flex py-0  md:px-0 px-[5%] mr-3 w-screen md:w-auto bg-black md:bg-transparent`}
        >
          <li className={`text-xl  md:py-1 pb-5 md:px-4 `}>
            {
              <select
                onChange={handleLanguageChange}
                className=" md:bg-black bg-transparent text-white border md:border-white border-transparent  py-1 cursor-pointer hover:text-cyan-300 duration-500 md:hover:text-white "
              >
                <option selected disabled>
                  #Language
                </option>
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
          {user && (
            <>
              <li className="mr-4 md:py-0 pb-5 px-[2%] md:px-[0%]  mb-1">
                <button
                  className="text-xl hover:text-cyan-400 duration-500  md:hover:text-white   md:bg-purple-400  md:py-1  md:px-2"
                  onClick={handleGptSearchClick}
                >
                  {!toggleGptSearch ? "GPT Search" : "Home"}
                </button>
              </li>
            </>
          )}
          {user && (
            <li className="mr-4 md:py-0 pb-5 px-[2%] md:px-[0%] mt-1 md:hidden">
              <button
                className="text-xl hover:text-cyan-400 duration-500  md:hover:text-white   md:bg-purple-400  md:py-1  md:px-2"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </li>
          )}

          {user ? (
            <div className="cursor-pointer" onMouseEnter={handleUser}>
              <div className="md:flex hidden">
                <li className="md:mr-1">
                  <img
                    src={AVATAR}
                    alt="Loading"
                    className="w-12 rounded-xl "
                  ></img>
                </li>
                <li className="mx-2 my-3 md:py-0 pb-5 pl-1 md:pl-0 text-sm">
                  {toggleuser ? "▲" : "▼"}
                </li>
              </div>
              {/*------------------------------------------ bug h small screen me signout ni arra fix it  ------------------------------------------*/}
            </div>
          ) : (
            <Link to="/login">
              <button
                className="px-2 md:py-2 text-xl hover:text-cyan-300 duration-500 md:hover:text-white  rounded-md text-white md:bg-red-700 text-md"
                type="submit"
              >
                Sign In
              </button>
            </Link>
          )}
        </ul>
        {user && (
          <div
            onMouseLeave={handleUser}
            className={`md:my-[3%] mx-4 w-[200px] h-[150px] float-end bg-black text-white rounded-lg ${
              toggleuser ? "visible" : "hidden"
            } `}
          >
            <div className="px-2 font-bold">
              <ul className="text-lg cursor-pointer">
                <li className="py-1 hover:underline">Manage profiles</li>
                <li className="py-1 hover:underline">Account</li>
                <li className="py-1 hover:underline">Help center</li>
                <li className="py-1 flex justify-center border border- white">
                  <Link to="/">
                    <button
                      onClick={handleSignOut}
                      className="md:px-2  md:py-1  hover:underline duration-500 rounded-md text-white text-sm  "
                      type="submit"
                    >
                      Sign Out of Netflix
                    </button>
                  </Link>
                </li>
              </ul>
              {/* <h6 className="text-sm">{user?.email}</h6> */}

              {/* </div> */}

              {/* {"Hi, " + displayName} */}
              {/* <div className="bg-white w-11/12 my-5 flex justify-center py-2 rounded-xl "> */}
            </div>
          </div>
        )}
        {user && (
          <div
            className={`lg:mt-3 opacity-0 text-lg lg:opacity-100 lg:float-end lg:mr-[5%] ${
              !toggleuser ? "block" : "hidden"
            }`}
          >
            {"Hello 👋 " + displayName.split(" ")[0]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
