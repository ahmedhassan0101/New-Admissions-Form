import React from "react";

const FormBox = ({ children, step, title, color}) => {
  return (
    <div
      className={`flex flex-col p-10 mb-10 border-2 border-${color} xl:mx-40 max-sm:mx-5 lg:mx-20 max-md:p-5`}
    >
      <h1 className="flex mx-auto text-xl font-medium text-center max-md:mp-5 max-md:text-lg ">
        {step && <span className="inline-block mr-1 border-2 border-black rounded-full w-7 h-7 text-l">
          {step}
        </span>}
        {title}
      </h1>
      {children}
    </div>
  );
};

export default FormBox;
