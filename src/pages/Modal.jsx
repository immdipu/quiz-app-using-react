import React from "react";

const Modal = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[#000000b6] flex items-center justify-center">
        <div className="bg-white w-fit  px-12 py-9 rounded-md flex flex-col justify-center items-center gap-6">
          <h1 className="text-4xl font-extrabold text-[#102a42] text-center tracking-wider">
            Congrats!
          </h1>
          <p className="text-center text-[#324d67] font-medium text-xl">
            You answered 30% of questions correctly
          </p>
          <button className="bg-[#facc15] border-2 border-[#facc15]  rounded-[4px] text-xl font-semibold tracking-wider h-10 hover:bg-white transition-all duration-300 ease-linear hover:border-gray-900 px-5">
            Play Again
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
