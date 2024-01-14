import React, { useContext } from "react";
import FormBox from "../UI/FormBox";
import Btns from "../Btns/Btns";
import FormContext from "../../utils/form-context";

const StudentInfoCard = () => {
  const { formCollections, dispatch, showInfoHandler, restForm } =
    useContext(FormContext);
  const lastStepBackHandler = () => {
    showInfoHandler();
    dispatch({ type: "BACK_TO_THREE" });
  };

  const sendFormData = async (formData) => {
    const response = await fetch(
      "https://admissions-form-data-default-rtdb.firebaseio.com/formData.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();

  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendFormData(formCollections);
    dispatch({ type: "RESET" });
    restForm();
  };

  return (
    <FormBox title="Student Information" color="teal-200">
      <div className="mt-10">
        {Object.entries(formCollections).map(([title, info]) => (
          <div key={title} className="mb-7">
            <h2 className="pb-2 pr-2 text-2xl font-bold border-b-2 border-r-2 w-fit">
              {title}
            </h2>
            <div className="border-b-2 border-l-4 border-gray-200">
              {Object.entries(info).map(([key, value]) => (
                <p key={key} className="mb-2 ml-4">
                  <span className="font-semibold">{key}:</span>{" "}
                  {value === "" ? (
                    <span className="text-pink-500">
                      No information available.
                    </span>
                  ) : Array.isArray(value) ? (
                    value.join(", ")
                  ) : (
                    value
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Btns
        back
        submit
        backClick={lastStepBackHandler}
        nextClick={submitHandler}
      />
    </FormBox>
  );
};

export default StudentInfoCard;
