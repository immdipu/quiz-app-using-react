import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <PuffLoader color="#102a42" size={100} />
    </div>
  );
};

export default Loader;
