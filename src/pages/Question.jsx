import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Loader from "../components/Loader";

const Question = () => {
  const {
    questions,
    currques,
    setCurrques,
    currIndex,
    nextHandle,
    correctAns,
    setcorrectAns,
    setModal,
    randomiseAns,
  } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [Alert, setAlert] = useState(false);

  useEffect(() => {
    setCurrques(() => {
      let ques = questions[currIndex];
      if (ques !== undefined) {
        setLoading(false);
        const allAnswers = randomiseAns([
          ...ques.incorrect_answers,
          ques.correct_answer,
        ]);

        return { ...ques, RandomizedAns: allAnswers };
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

        if (currIndex !== questions.length - 1) {
          nextHandle();
          document.querySelectorAll(".lists").forEach((item) => {
            item.classList.remove("disabelPointer");
          });
        }
      }, 800);
    } else {
      setAlert(true);
      e.target.classList.add("incorrect");
      setTimeout(function () {
        e.target.classList.remove("incorrect");

        if (currIndex !== questions.length - 1) {
          nextHandle();
          document.querySelectorAll(".lists").forEach((item) => {
            item.classList.remove("disabelPointer");
          });
        }
        setAlert(false);
      }, 1500);
    }
    document.querySelectorAll(".lists").forEach((item) => {
      item.classList.add("disabelPointer");
    });
    if (currIndex === questions.length - 1) {
      setTimeout(function () {
        setModal(true);
      }, 1500);
    }
  };

  return (
    <div className="w-full max-w-[60rem] m-auto mt-10 bg-[#ffffff] px-12 py-9 shadow-md relative">
      {Alert && (
        <h1
          dangerouslySetInnerHTML={{
            __html: `The correct answer is ${currques.correct_answer}`,
          }}
          className="text-xl text-[#102a42] bg-green-300 text-center font-medium rounded-md absolute top-2 left-0 right-0 mx-5"
        />
      )}
      <div className="flex text-[#77d57f] w-full justify-end gap-1 mt-2 items-center">
        <h3 className="text-lg font-semibold text-zinc-700">
          Total Questions :
        </h3>
        <p className="text-lg font-normal text-zinc-800">{questions.length}</p>
      </div>
      <div className="flex text-[#77d57f] w-full justify-end gap-2 items-center mb-5 max-sm:text-base">
        <h3 className="text-lg font-semibold">Correct Answers :</h3>
        <p className="tracking-[1px] text-lg font-normal">
          {correctAns} / {currIndex}
        </p>
      </div>

      <h1
        dangerouslySetInnerHTML={{ __html: currques.question }}
        className="max-sm:text-[4.5vw] text-[2.7vw] text-[#102a42] text-center font-bold leading-[1.2] max-sm:leading-[1.3]"
      />
      <div className="w-full m-auto flex flex-col items-center gap-3 mt-7 max-sm:overflow-hidden max-sm:gap-4">
        {currques.RandomizedAns.map((item, i) => {
          return (
            <p
              key={i}
              data-answer={item}
              dangerouslySetInnerHTML={{
                __html: `${item}`,
              }}
              onClick={checkAnswer}
              className="bg-[#8bcbf9] lists min-w-[30rem] text-2xl tracking-wider rounded-[4px] px-2 py-1 text-center hover:bg-[#49a6e9] hover:text-white transition-all duration-200 ease-linear cursor-pointer max-sm:w-full max-sm:text-base max-sm:min-w-0 max-sm:text-[4.2vw] max-sm:px-4"
            />
          );
        })}
      </div>
      <div className="w-full flex justify-end mt-8">
        <button
          onClick={nextHandle}
          className={`${
            currIndex !== questions.length - 1 ? "block" : "hidden"
          } border-2 border-transparent rounded-[4px] bg-[#facc15] text-xl font-semibold tracking-wider h-10 mt-5 hover:bg-white transition-all duration-300 ease-linear hover:border-gray-900 px-5 max-sm:text-[4.2vw] max-sm:px-3`}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Question;
