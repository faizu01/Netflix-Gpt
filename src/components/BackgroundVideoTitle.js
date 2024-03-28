const BackgroundVideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video md:pt-[13%] pt-[20%] px-16 text-white bg-gradient-to-r from-black overflow-hidden">
      <div className="xs:w-screen  xs:absolute md:w-10/12 lg:w-1/2 xl:w-1/3 2xl:w-1/3 ">
        {/* <div className="mt[-22%] lg:mt-0"> */}

        <h1 className="font-bold hidden sm:block text-4xl">{title}</h1>
        <h3 className="mt-0 hidden xl:block lg:mt-4 text-sm">{overview}</h3>
        <div className="mt-6 hidden sm:block">
          <button
            type="button"
            className="bg-white md:px-[7%] px-[5%] text-black font text-sm md:text-lg font-bold  py-5 rounded-lg hover:bg-opacity-70 hover:-translate-y-1 hover:scale-110 duration-300 xs:mx-[5%] xs:mb-2"
          >
            ▶ Play
          </button>
          <button
            type="button"
            className="bg-gray-50 md:px-[7%] px-[5%] bg-opacity-50 text-white font text-sm md:text-lg font-bold  py-5 mx-6 rounded-lg hover:bg-opacity-70 hover:-translate-y-1 hover:scale-110 duration-300 xs:mx-[5%] xs:mb-2"
          >
            More Info
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default BackgroundVideoTitle;
