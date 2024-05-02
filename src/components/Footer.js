import { useState } from "react";
import { Link } from "react-router-dom";
import FAQ from "./FAQ"; //This is component
import { Faq } from "../utils/constant"; //This is QustionAnswer
import { useSelector } from "react-redux";
const Footer = () => {
  const user = useSelector((store) => store.user);
  const toggleGptSearch = useSelector((store) => store.gpt.toggleGptSearch);
  const [showDetail, setShowDetail] = useState(null);
  const Toggle = (index) => {
    setShowDetail((previndex) => (previndex === index ? null : index));
  };

  return (
    <div className={`relative z-50 ${!toggleGptSearch && "bg-black"} text-white w-screen  pt-[5%] px-[10%]`}>
      {!user && (
        <>
          <h1 className="md:text-3xl font-bold text-xl pb-[2%]">
            Frequently Asked Questions
          </h1>
          {Faq?.cards?.map((card, index) => (
            <div key={index} className="md:w-10/12">
              <FAQ
                card={card}
                setShowDetail={() => Toggle(index)}
                showAnswer={showDetail === index ? true : false}
              />
            </div>
          ))}
          <Link to={"/login"}>
            <button className="bg-red-700 my-4 px-[3%] py-[1%] text-2xl rounded-sm hover:transform  hover:-translate-y-1 hover:scale-110  duration-300">
              {"Finish Sign Up" + " >"}
            </button>
          </Link>
        </>
      )}

      {/* Common stuff */}
      {!toggleGptSearch && (
        <div className="px-[5%] py-[1%]  bg-black">
          <h3>Questions? Call +91 9126296452</h3>
          <ul className="grid md:grid-cols-4 py-[3%] cursor-pointer">
            <li className="py-2 underline">FAQ</li>
            <li className="py-2 underline">Help center</li>
            <li className="py-2 underline">Account</li>
            <li className="py-2 underline">Media center</li>
            <li className="py-2 underline">Investor Relations</li>
            <li className="py-2 underline">Jobs</li>
            <li className="py-2 underline">Ways to Watch</li>
            <li className="py-2 underline">Terms of Use</li>
            <li className="py-2 underline">Privacy</li>
            <li className="py-2 underline">Cookie Preferences</li>
            <li className="py-2 underline">Corporate Information</li>
            <li className="py-2 underline">Contact Us</li>
            <li className="py-2 underline">Speed Test</li>
            <li className="py-2 underline">Legal Notices</li>
            <li className="py-2 underline">Only on Netflix</li>
          </ul>
          <h1 className="pb-[10%]">Made with ❤️ by @Faizan Ansari</h1>
        </div>
      )}
    </div>
  );
};

export default Footer;
