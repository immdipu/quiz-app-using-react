import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Loader from "../components/Loader";

const Question = () => {
  const { questions, currques, setCurrques, currIndex, nextHandle } =
    useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [correctAns, setcorrectAns] = useState(0);

  useEffect(() => {
    setCurrques(() => {
      let ques = questions[currIndex];
      if (ques !== undefined) {
        setLoading(false);
        return ques;
      }
    });
  }, [setCurrques, questions, currIndex]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const checkAnswer = (e) => {
    let clickedAnswer = e.target.dataset.answer;
    let correctAnswer = currques.correct_answer;
    if (clickedAnswer === correctAnswer) {
      e.target.classList.add("correct");
      setcorrectAns((prev) => {
        return prev + 1;
      });
      setTimeout(function () {
        e.target.classList.remove("correct");
        nextHandle();
      }, 400);
    } else {
      e.target.classList.add("incorrect");
      setTimeout(function () {
        e.target.classList.remove("incorrect");
      }, 700);
    }
  };

  return (
    <div className="w-full max-w-[60rem] m-auto mt-14 bg-[#ffffff] px-12 py-12">
      <div className="flex text-[#77d57f] w-full justify-end gap-1 items-center mb-1">
        <h3 className="text-lg font-semibold text-zinc-700">
          Total Questions :
        </h3>
        <p className="text-lg font-normal text-zinc-800">{questions.length}</p>
      </div>
      <div className="flex text-[#77d57f] w-full justify-end gap-2 items-center mb-5">
        <h3 className="text-xl font-semibold">Correct Answers :</h3>
        <p className="tracking-[4px] text-lg font-normal">
          {correctAns}/{currIndex}
        </p>
      </div>

      <h1
        dangerouslySetInnerHTML={{ __html: currques.question }}
        className="text-[2.7vw] text-[#102a42] text-center font-bold"
      />
      <ul className="w-full m-auto flex flex-col items-center gap-3 mt-7">
        <li
          data-answer={currques.incorrect_answers[0]}
          dangerouslySetInnerHTML={{ __html: currques.incorrect_answers[0] }}
          onClick={checkAnswer}
          className="bg-[#8bcbf9] min-w-[30rem] text-2xl tracking-wider rounded-[4px] px-2 py-1 text-center hover:bg-[#49a6e9] hover:text-white transition-all duration-200 ease-linear cursor-pointer"
        />
        {/* {currques.incorrect_answers[0]}
        </li> */}

        <li
          data-answer={currques.incorrect_answers[1]}
          dangerouslySetInnerHTML={{ __html: currques.incorrect_answers[1] }}
          onClick={checkAnswer}
          className="bg-[#8bcbf9] min-w-[30rem] text-2xl tracking-wider rounded-[4px] px-2 py-1 text-center hover:bg-[#49a6e9] hover:text-white transition-all duration-200 ease-linear cursor-pointer"
        />
        {/* {currques.incorrect_answers[1]}
        </li> */}
        <li
          data-answer={currques.incorrect_answers[2]}
          dangerouslySetInnerHTML={{ __html: currques.incorrect_answers[2] }}
          onClick={checkAnswer}
          className="bg-[#8bcbf9] min-w-[30rem] text-2xl tracking-wider rounded-[4px] px-2 py-1 text-center hover:bg-[#49a6e9] hover:text-white transition-all duration-200 ease-linear cursor-pointer"
        />
        {/* {currques.incorrect_answers[2]}
        </li> */}
        <li
          data-answer={currques.correct_answer}
          dangerouslySetInnerHTML={{ __html: currques.correct_answer }}
          onClick={checkAnswer}
          className="bg-[#8bcbf9] min-w-[30rem] text-2xl tracking-wider rounded-[4px] px-2 py-1 text-center hover:bg-[#49a6e9] hover:text-white transition-all duration-200 ease-linear cursor-pointer"
        />
        {/* {currques.correct_answer}
        </li> */}
      </ul>
      <div className="w-full flex justify-end mt-8">
        <button
          onClick={nextHandle}
          className="bg-[#facc15] border-2 border-[#facc15]  rounded-[4px] text-xl font-semibold tracking-wider h-10 mt-5 hover:bg-white transition-all duration-300 ease-linear hover:border-gray-900 px-5"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Question;
