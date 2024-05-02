const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
        role="status"
      ></div>
      <h1 className="text-lg p-4 text-white">Loading...</h1>
    </div>
  );
};

export default Loading;
