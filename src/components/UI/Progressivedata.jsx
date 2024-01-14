import React, { useContext } from "react";
import FormContext from "../../utils/form-context";
const Progressivedata = () => {
  const {
    formState: { stepOne, stepTwo, stepThree },
  } = useContext(FormContext);

  return (
    <>
      {/* For PC Screen */}
      <div className="flex items-center justify-center mt-10 mb-10 max-md:hidden">
        <div className="flex items-center">
          <div className="bg-[#4C9BFB] rounded-full text-white p-2 py-3 border-[#D5EAFF] w-[210px] text-sm text-center border-4 font-medium">
            <h1>
              <span>1. </span>Personal Information.
            </h1>
          </div>
          <div
            className={`w-10 h-[4px] ${
              stepOne ? "bg-[#4C9BFB]" : "bg-[#D5EAFF]"
            }`}
          ></div>
        </div>

        <div className="flex items-center">
          <div
            className={`${
              stepOne
                ? "bg-[#4C9BFB]  text-white"
                : "bg-[#D5EAFF] text-[#4C9BFB]"
            } rounded-full  p-2 py-3 border-[#D5EAFF] w-[210px] text-sm text-center border-4 font-medium`}
          >
            <h1>
              <span>2. </span>Academic Information.
            </h1>
          </div>
          <div
            className={`w-10 h-[4px] ${
              stepTwo ? "bg-[#4C9BFB]" : "bg-[#D5EAFF]"
            }`}
          ></div>
        </div>

        <div className="flex items-center">
          <div
            className={`${
              stepTwo
                ? "bg-[#4C9BFB]  text-white"
                : "bg-[#D5EAFF] text-[#4C9BFB]"
            } rounded-full  p-2 py-3 border-[#D5EAFF] w-[210px] text-sm text-center border-4 font-medium`}
          >
            <h1>
              <span>3. </span>Additional Information.
            </h1>
          </div>
        </div>
      </div>
      {/* For Mobile Screen */}

      <div className="items-center justify-center hidden mt-5 mb-5 max-md:flex">
        <div className="flex items-center">
          <div
            className={`${
              !stepOne ? "p-2 py-3 w-[210px]" : "w-12 h-12 p-[10px]"
            } bg-[#4C9BFB] rounded-full text-white border-[#D5EAFF] text-sm text-center border-4`}
          >
            <h1>
              <span>1</span>
              {!stepOne ? ". Personal Information." : ""}
            </h1>
          </div>
          <div
            className={`w-10 h-[4px] ${
              stepOne ? "bg-[#4C9BFB]" : "bg-[#D5EAFF]"
            }`}
          ></div>
        </div>
        {/*  */}

        <div className="flex items-center">
          <div
            className={` ${
              !stepOne
                ? "bg-[#D5EAFF] w-12 h-12 p-[10px] text-[#4C9BFB]"
                : stepOne && !stepTwo
                ? "bg-[#4C9BFB] p-2 py-3 w-[210px] text-white"
                : "bg-[#4C9BFB]  w-12 h-12 p-[10px] text-white"
            }
              rounded-full  border-[#D5EAFF] text-sm text-center border-4`}
          >
            <h1>
              <span>2</span>
              {stepOne && !stepTwo ? ". Academic Information." : ""}
            </h1>
          </div>
          <div
            className={`w-10 h-[4px] ${
              stepTwo ? "bg-[#4C9BFB]" : "bg-[#D5EAFF]"
            }`}
          ></div>
        </div>

        <div className="flex items-center">
          <div
            className={` ${
              !stepTwo
                ? "bg-[#D5EAFF] w-12 h-12 p-[10px] text-[#4C9BFB]"
                : stepTwo && !stepThree
                ? "bg-[#4C9BFB] p-2 py-3 w-[210px] text-white"
                : "bg-[#4C9BFB]  w-12 h-12 p-[10px] text-white"
            }
              rounded-full  border-[#D5EAFF] text-sm text-center border-4`}
          >
            <h1>
              <span>3</span>
              {stepTwo && !stepThree ? ". Additional Information." : ""}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progressivedata;
<div class="group is-published">
  <div class="hidden group-[.is-published]:block">Published</div>
</div>;
