const BackgroundVideoTitle = ({ title, overview }) => {
  return (
    // <div className="absolute mx-20 w-1/3 text-white z-10 my-80 bg-gradient-to-b from-black ">
    <div className="absolute w-screen aspect-video  pt-80 px-16 text-white  bg-gradient-to-r from-black  ">
      {/* <div className="absolute w-screen aspect-video "> */}
      <div className="w-1/3">
        <h1 className="text-5xl font-bold">{title}</h1>
        <h3 className="mt-4 ">{overview}</h3>
        <div className="mt-6">
          <button
            type="button"
            className="bg-white text-black font text-xl font-bold px-10 py-5  rounded-lg hover:bg-opacity-70  hover:-translate-y-1 hover:scale-110 duration-300"
          >
            ▶ Play
          </button>
          <button
            type="button"
            className="bg-gray-50 bg-opacity-50 text-white font text-xl font-bold px-10 py-5 mx-6 rounded-lg hover:bg-opacity-70 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default BackgroundVideoTitle;
