import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { correctAns, currIndex, setcorrectAns, setIndex, setHome, setModal } =
    useGlobalContext();

  let headerText = "";
  const CorrerctAnswerPerc = () => {
    let totalQuestions = currIndex + 1;
    let correctPerc = (correctAns * 100) / totalQuestions;
    return correctPerc;
  };

  const welcomeText = (newcorrectPerc) => {
    if (newcorrectPerc <= 20) {
      headerText = "You are a disappointment 😏";
    }
    if (newcorrectPerc > 20 && newcorrectPerc < 50) {
      headerText = "Oops! someone need to work on themselves ☹️";
    }
    if (newcorrectPerc >= 50 && newcorrectPerc < 75) {
      headerText = "Not bad but could have been more better 🙂";
    }
    if (newcorrectPerc >= 75) {
      headerText = "You did Great, Congrats!";
    }
    return headerText;
  };

  const opnenmodel = () => {
    setModal(false);
    setHome(true);
    setIndex(0);
    setcorrectAns(0);
  };

  return (
    <>
      <div className="absolute inset-0 bg-[#000000b6] flex items-center justify-center z-10">
        <div className="bg-white w-fit  px-12 py-9 rounded-md flex flex-col justify-center items-center gap-6 mx-10 marker:">
          <h1 className="text-4xl font-extrabold text-[#102a42] text-center tracking-wider max-sm:text-2xl">
            {welcomeText(CorrerctAnswerPerc())}
          </h1>
          <p className="text-center text-[#324d67] font-medium text-xl max-sm:text-lg">
            You answered {CorrerctAnswerPerc()}% of questions correctly.
          </p>
          <button
            onClick={opnenmodel}
            className="bg-[#facc15] border-2 border-[#facc15]  rounded-[4px] text-xl font-semibold tracking-wider h-10 hover:bg-white transition-all duration-300 ease-linear hover:border-gray-900 px-5 max-sm:text-lg"
          >
            Play Again
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
