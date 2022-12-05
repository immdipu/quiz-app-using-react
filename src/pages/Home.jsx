import React from "react";

const Home = () => {
  return (
    <div className="w-full max-w-[35rem] m-auto mt-14 bg-[#ffffff] px-12 py-12">
      <h1 className="text-[#102a42] text-4xl font-extrabold tracking-wide text-">
        Setup Quiz
      </h1>
      <form action="#" className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="inputnum"
            className="text-[#324d67] font-bold tracking-wide text-lg"
          >
            Number Of Questions
          </label>
          <input
            id="inputnum"
            type="number"
            className="bg-[#f1f5f8] border-[#324d6700] outline-none transition-all duration-300 ease-linear focus:border-[#324d6757] border-2 rounded-md text-[#324d67] font-semibold tracking-wide text-lg px-3 py-[2px] "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="Category"
            className="text-[#324d67] font-bold tracking-wide text-lg"
          >
            Select Category:
          </label>
          <select
            name="Any"
            id="Category"
            className="bg-[#f1f5f8] border-[#324d6700] outline-none transition-all duration-300 ease-linear focus:border-[#324d6757] border-2 rounded-md text-[#496783] font-semibold tracking-wide text-lg  px-3 py-1"
          >
            <option value="0">Any Category</option>
            <option value="0">Science</option>
            <option value="0">computer</option>
            <option value="0">Games</option>
            <option value="0">History</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="difficulty"
            className="text-[#324d67] font-bold tracking-wide text-lg"
          >
            Select Difficulty:
          </label>
          <select
            name="difficult"
            id="difficulty"
            className="bg-[#f1f5f8] border-[#324d6700] outline-none transition-all duration-300 ease-linear focus:border-[#324d6757] border-2 rounded-md text-[#496783] font-semibold tracking-wide text-lg  px-3 py-1"
          >
            <option value="">Any Difficulty</option>
            <option value="">Easy</option>
            <option value="">Medium</option>
            <option value="">Hard</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#facc15] border-2 border-[#facc15]  rounded-[4px] text-xl font-semibold tracking-wider h-10 mt-5 hover:bg-white transition-all duration-300 ease-linear hover:border-gray-900"
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default Home;
