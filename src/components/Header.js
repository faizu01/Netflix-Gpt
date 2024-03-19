import React, { useEffect } from "react";
import Logo from "../assets/Logo.png";
import userIcon from "../assets/usericon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const [signBtn, setSignBtn] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    if (user) {
      setSignBtn(false);
    } else {
      setSignBtn(true);
    }
  }, [user]);

  return (
    <div
      className={`w-full flex bg-gradient-to-b from-black  ${
        !user ? "inset-0" : "h-1/6"
      } fixed z-0 justify-between `}
    >
      <div className="w-44 my-3 mx-40">
        <img src={Logo} alt="Logo" />
      </div>

      {signBtn && !user && (
        <div className="mx-40 my-5">
          <ul className="flex" onClick={() => setSignBtn(false)}>
            <li className="text-white text-2xl items-center mx-10">Language</li>

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
        <div className="mx-40 my-5">
          <ul className="flex" onClick={() => setSignBtn(false)}>
            <li className="text-white text-2xl items-center mx-10">
              {user?.displayName}
            </li>
            <img src={userIcon} alt="Loading" className="w-14"></img>
            <li></li>
            <li>
              <Link to={"/"}>
                <button
                  onClick={()=>dispatch(removeUser())}
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
