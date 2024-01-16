import React from "react";
const classes =
  "border rounded-full py-3 px-7 font-medium max-sm:py-2 max-sm:px-5";
const Btns = (props) => {
  const { back, nextClick, backClick, error, submit } = props;
  return (
    <div className="flex flex-col border-t-2 border-blue-800">
      {error && (
        <span className="flex mt-1 font-medium tracking-wide text-pink-500 text-md">
          {error}
        </span>
      )}
      <div className="flex justify-end gap-5 mt-5">
        {back && (
          <button
            type="button"
            onClick={backClick}
            className={`${classes} text-blue-800 hover:text-[#4C9BFB]  active:shadow-[0px_0px_0px_5px_#D5EAFF] bg-white`}
          >
            Back
          </button>
        )}
        <button
          onClick={nextClick}
          type="button"
          className={`${classes} text-white hover:bg-[#378FFA] active:bg-[#378FFA] active:shadow-[0px_0px_0px_5px_#D5EAFF] bg-blue-800`}
        >
          {submit && "Submit"}
          {!submit && "Next"}
        </button>
      </div>
    </div>
  );
};

export default Btns;
