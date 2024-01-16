import React, { useContext } from "react";
import FormContext from "../../utils/form-context";
const Progressivedata = () => {
  const {
    formState: { stepOne, stepTwo, stepThree, stepFour },
  } = useContext(FormContext);
  // max-lg:w-7
  return (
    <>
      {/* For Mobile Screen max-md:flex hidden*/}

      <div className="flex items-center justify-center h-[90px]">
        <div className="flex items-center">
          <div
            className={`${
              !stepOne
                ? "p-2 py-3 w-[210px]"
                : "w-12 h-12 p-[10px] max-lg:w-9 max-lg:h-9 max-lg:p-[5px]"
            } bg-blue-800 rounded-full text-white border-[#D5EAFF] text-sm text-center border-4`}
          >
            <h1>
              <span>1</span>
              {!stepOne ? ". Personal Information." : ""}
            </h1>
          </div>
          <div
            className={`w-10 h-[4px] max-lg:w-7 ${
              stepOne ? "bg-blue-800" : "bg-[#D5EAFF]"
            }`}
          ></div>
        </div>

        <div className="flex items-center">
          <div
            className={` ${
              !stepOne
                ? "bg-[#D5EAFF] w-12 h-12 p-[10px] text-blue-800 max-lg:w-9 max-lg:h-9 max-lg:p-[5px]"
                : stepOne && !stepTwo
                ? "bg-blue-800 p-2 py-3 w-[210px] text-white"
                : "bg-blue-800  w-12 h-12 p-[10px] text-white max-lg:w-9 max-lg:h-9 max-lg:p-[5px]"
            }
              rounded-full  border-[#D5EAFF] text-sm text-center border-4`}
          >
            <h1>
              <span>2</span>
              {stepOne && !stepTwo ? ". Personal Information." : ""}
            </h1>
          </div>
          <div
            className={`w-10 max-lg:w-7 h-[4px] ${
              stepTwo ? "bg-blue-800" : "bg-[#D5EAFF]"
            }`}
          ></div>
        </div>

        <div className="flex items-center">
          <div
            className={` ${
              !stepTwo
                ? "bg-[#D5EAFF] w-12 h-12 p-[10px] text-blue-800 max-lg:w-9 max-lg:h-9 max-lg:p-[5px]"
                : stepTwo && !stepThree
                ? "bg-blue-800 p-2 py-3 w-[210px] text-white"
                : "bg-blue-800  w-12 h-12 p-[10px] text-white max-lg:w-9 max-lg:h-9 max-lg:p-[5px]"
            }
              rounded-full  border-[#D5EAFF] text-sm text-center border-4`}
          >
            <h1>
              <span>3</span>
              {stepTwo && !stepThree ? ". Previous Study." : ""}
            </h1>
          </div>
          <div
            className={`w-10 max-lg:w-7 h-[4px] ${
              stepThree ? "bg-blue-800" : "bg-[#D5EAFF]"
            }`}
          ></div>
        </div>

        <div className="flex items-center">
          <div
            className={` ${
              !stepThree
                ? "bg-[#D5EAFF] w-12 h-12 p-[10px] text-blue-800 max-lg:w-9 max-lg:h-9 max-lg:p-[5px]"
                : stepThree && !stepFour
                ? "bg-blue-800 p-2 py-3 w-[210px] text-white"
                : "bg-blue-800  w-12 h-12 p-[10px] text-white max-lg:w-9 max-lg:h-9 max-lg:p-[5px]"
            }
              rounded-full  border-[#D5EAFF] text-sm text-center border-4`}
          >
            <h1>
              <span>4</span>
              {stepThree && !stepFour ? ". Admission Information." : ""}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
//Previous Study
export default Progressivedata;
