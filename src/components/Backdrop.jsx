import React from "react";

const Backdrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-screen absolute top-0 bg-opacity-50 bg-slate-400"
    />
  );
};

export default Backdrop;
