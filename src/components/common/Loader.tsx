import React from "react";

const Loader = () => {
  return (
    <div className="h-[400px] flex justify-center items-center">
      <div
        className="inline-block h-8 w-8 animate-spinner-grow-fast rounded-full bg-current align-[-0.125em] opacity-50 motion-reduce:animate-spinner-grow-slow "
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
