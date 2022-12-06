import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { useGlobalContext } from "../context";

const Home = () => {
  const { setCurrentVal, setHome } = useGlobalContext();
  const [Category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const inputVal = useRef(null);
  const categ = useRef(null);
  const diffic = useRef(null);

  const Categoryfetch = async () => {
    const res = await axios.get("https://opentdb.com/api_category.php");
    setCategory(res.data.trivia_categories);
    setLoading(false);
  };
  useEffect(() => {
    Categoryfetch();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if (inputVal.current.value !== "" && inputVal.current.value > 0) {
      setCurrentVal(() => {
        let temp = [
          {
            num: inputVal.current.value,
            category: categ.current.value,
            difficulty: diffic.current.value,
          },
        ];
        return [...temp];
      });
      setHome(false);
    }
  };

  return (
    <div className="w-full max-w-[35rem] m-auto mt-8 bg-[#ffffff] px-12 py-12">
      <h1 className="text-[#102a42] text-4xl font-extrabold tracking-wide text-">
        Setup Quiz
      </h1>
      <form onSubmit={handlesubmit} className="mt-8 flex flex-col gap-5">
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
            defaultValue={10}
            min={1}
            max={50}
            ref={inputVal}
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
            ref={categ}
            name="category"
            id="Category"
            className="bg-[#f1f5f8] border-[#324d6700] outline-none transition-all duration-300 ease-linear focus:border-[#324d6757] border-2 rounded-md text-[#496783] font-semibold tracking-wide text-lg  px-3 py-1"
          >
            <option value="null">Any Category</option>
            {Category.map((item, i) => {
              return (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="difficult"
            className="text-[#324d67] font-bold tracking-wide text-lg"
          >
            Select Difficulty:
          </label>
          <select
            name="difficulty"
            id="difficult"
            ref={diffic}
            className="bg-[#f1f5f8] border-[#324d6700] outline-none transition-all duration-300 ease-linear focus:border-[#324d6757] border-2 rounded-md text-[#496783] font-semibold tracking-wide text-lg  px-3 py-1"
          >
            <option value="null">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
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
