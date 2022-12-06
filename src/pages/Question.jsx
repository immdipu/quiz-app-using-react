import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Loader from "../components/Loader";

const Question = () => {
  const { questions, currques, setCurrques, currIndex, nextHandle } =
    useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [correctAns, setcorrectAns] = useState(0);
  const [Alert, setAlert] = useState(false);

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
      setAlert(true);
      e.target.classList.add("incorrect");
      setTimeout(function () {
        e.target.classList.remove("incorrect");
        nextHandle();
        setAlert(false);
      }, 1500);
    }
  };

  const answer = [...currques.incorrect_answers, currques.correct_answer];
  const randomAnswers = () => {
    for (let i = 0; i < 4; i++) {
      let randomIndex = Math.floor(Math.random() * 4);
      console.log(randomIndex);
      let temp = "";
      let currentAnswer = answer[i];
      let randomAnswer = answer[randomIndex];
      temp = currentAnswer;
      answer[i] = randomAnswer;
      answer[randomIndex] = temp;
    }
    return answer;
  };
  return (
    <div className="w-full max-w-[60rem] m-auto mt-10 bg-[#ffffff] px-12 py-9">
      {Alert && (
        <h1
          dangerouslySetInnerHTML={{
            __html: `The correct answer is ${currques.correct_answer}`,
          }}
          className="text-xl text-[#102a42] bg-green-300 text-center font-medium rounded-md"
        />
      )}
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
        className="text-[2.7vw] text-[#102a42] text-center font-bold leading-[37px]"
      />
      <ul className="w-full m-auto flex flex-col items-center gap-3 mt-7">
        {randomAnswers().map((item, i) => {
          return (
            <li
              key={i}
              data-answer={item}
              dangerouslySetInnerHTML={{ __html: item }}
              onClick={checkAnswer}
              className="bg-[#8bcbf9] min-w-[30rem] text-2xl tracking-wider rounded-[4px] px-2 py-1 text-center hover:bg-[#49a6e9] hover:text-white transition-all duration-200 ease-linear cursor-pointer"
            />
          );
        })}
      </ul>
      <div className="w-full flex justify-end mt-8">
        <button
          onClick={() => nextHandle}
          className="bg-[#facc15] border-2 border-[#facc15]  rounded-[4px] text-xl font-semibold tracking-wider h-10 mt-5 hover:bg-white transition-all duration-300 ease-linear hover:border-gray-900 px-5"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Question;
