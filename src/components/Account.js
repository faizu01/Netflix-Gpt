import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";

import { AVATAR } from "../utils/constant";

const Account = () => {
  return (
    <div className="w-screen pt-[8%] px-[15%]  ">
      <h1 className="text-4xl ">Account</h1>
    <div className="h-screen">
      <div className="mt-8 h-[15%] flex justify-between border-y-2  border-black border-opacity-30">
        <h1 className="text-xl pt-[1%]  ">Membership And Billing</h1>
        <h1 className="text-xl pt-[1%] font-bold opacity-50">
          Password:********
        </h1>
        <ul className="pt-[1%]">
          <Link to={"/updateaccount/" + "email"}>
            <li className="text-blue-500 text-lg font-semibold hover:underline cursor-pointer">
              Change email
            </li>
          </Link>
          <Link to={"/updateaccount/" + "password"}>
            <li className="text-blue-500 text-lg font-semibold hover:underline cursor-pointer">
              Change password
            </li>
          </Link>
          <li className="text-blue-500 text-lg font-semibold hover:underline cursor-pointer">
            Add phone number{" "}
          </li>
        </ul>
      </div>
      <div className="mt-8 h-[15%] flex justify-between border-y-2  border-black border-opacity-30">
        <h1 className="text-xl pt-[1%]  ">PLAN DETAILS</h1>
        <h1 className="text-xl pt-[1%] font-bold opacity-50">
          No Streaming plan
        </h1>
        <ul className="pt-[1%]">
          <li className="text-blue-500 text-lg font-semibold hover:underline cursor-pointer">
            Add streaming plan
          </li>
        </ul>
      </div>
      <div className="mt-8 h-[15%] flex justify-between border-y-2  border-black border-opacity-30">
        <h1 className="text-xl pt-[1%]  ">SECURITY & PRIVACY</h1>
        <ul className="pt-[1%]">
          <li className="text-blue-500 text-lg font-semibold hover:underline cursor-pointer">
            Download your personal information
          </li>
        </ul>
      </div>
      <div className="mt-8 h-[15%] flex border-y-2  border-black border-opacity-30">
        <h1 className="text-xl pt-[1%]  ">PROFILE & PARENTAL CONTROLS</h1>
        <ul className="pt-[1%] flex pl-[10%]">
          <li>
            <img src={AVATAR} className="w-16" />
          </li>
          <li className="pt-[4%] ml-[4%] ">{auth?.currentUser?.email}</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Account;
