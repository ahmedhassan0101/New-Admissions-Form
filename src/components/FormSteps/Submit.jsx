import React, { useContext } from "react";
import FormBox from "../UI/FormBox";
import Btns from "../Btns/Btns";
import FormContext from "../../utils/form-context";
const Submit = ({ handleBack }) => {
  const { formCollections, restForm, dispatch } = useContext(FormContext);

  const backHandler = () => {
    handleBack();
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
    <FormBox>
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow text-center">
          <h3 className="pt-20 text-2xl font-medium">
            If you are sure of your information, click submit <br /> Feel free
            to modify your information if you Want.
          </h3>
        </div>
        <Btns back submit backClick={backHandler} nextClick={submitHandler} />
      </div>
    </FormBox>
  );
};

export default Submit;
