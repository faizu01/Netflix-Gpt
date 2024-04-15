import { useState } from "react";

const FAQ = ({ card, setShowDetail, showAnswer }) => {
  const handleClick = () => {
    setShowDetail();
  };

  return (
    <div className="my-2">
      <div
        className="flex justify-between text-2xl px-4 py-2 bg-[rgb(65,65,65)] cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="py-3">{card.Question}</h2>
        <h2 className="text-5xl">+</h2>
      </div>
      {showAnswer && (
        <div className="px-4 bg-[rgb(65,65,65)] text-2xl mt-1 py-[2%]">
          {card.Answer}
        </div>
      )}
    </div>
  );
};
export default FAQ;
