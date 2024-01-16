import React from "react";

const FormBox = ({ children }) => {
  return (
    <div className=" min-w-[97%] p-8 bg-opacity-75 rounded shadow-lg bg-stone-300 mr-[3%]">
      {children}
    </div>
  );
};

export default FormBox;
