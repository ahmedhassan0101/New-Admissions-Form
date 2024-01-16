import React, { useContext, useState } from "react";
import Btns from "../Btns/Btns";
import FormBox from "../UI/FormBox";
import FormInput from "../inputs/FormInput";
import RadioCheckBox from "../inputs/RadioCheckBox";
import { areAllPropertiesTrue } from "../../utils/ValidationRules";
import FormContext from "../../utils/form-context";
const ParentalStep = ({ handleNext, handleBack }) => {
  // todo ===[STATE BLOCK]===
  const [error, setError] = useState("");
  const [parentalFormData, setParentalFormData] = useState({
    fatherName: "",
    fatherEmail: "",
    fatherPhone: "",
    motherName: "",
    motherEmail: "",
    motherPhone: "",
  });
  const [parentalFormValidity, setParentalFormValidity] = useState({
    fatherNameIsValid: false,
    fatherEmailIsValid: false,
    fatherPhoneIsValid: false,
    motherNameIsValid: false,
    motherEmailIsValid: false,
    motherPhoneIsValid: false,
  });
  // todo ===[STATE BLOCK]===
  //? === ======================= ===
  // todo ===[CONTEXT BLOCK]===
  const { dispatch, addToFormCollections } = useContext(FormContext);

  let formIsValid = false;
  if (areAllPropertiesTrue(parentalFormValidity)) {
    formIsValid = true;
  }
  const stepTwoNextHandler = () => {
    if (!formIsValid) {
      setError("Please fill the required fields");
      return;
    }

    addToFormCollections("parentalInfo", parentalFormData);
    handleNext();
    setError("");
    dispatch({ type: "TWO_IS_DONE" });
  };

  const stepTwoBackHandler = () => {
    dispatch({ type: "BACK_TO_ONE" });
    handleBack();
  };
  // todo ===[CONTEXT BLOCK]===

  return (
    <FormBox>
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 mt-20 mb-8 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <h2>PARENTAL INFORMATION (FATHER)</h2>
            <div>
              <FormInput
                input
                required
                colSpan="sm:col-span-3"
                inputId="father-name"
                labelName="FullName"
                errorMsg="FullName name is required"
                setValue={setParentalFormData}
                setValidation={setParentalFormValidity}
                valueKey={"fatherName"}
              />
              <FormInput
                input
                required
                labelName="Email address"
                inputId="father-email"
                inputType="email"
                colSpan="sm:col-span-3"
                placeholder="ex: myname@example.com"
                errorMsg="Email address is not valid"
                setValue={setParentalFormData}
                setValidation={setParentalFormValidity}
                valueKey={"fatherEmail"}
              />
              <FormInput
                input
                required
                labelName="Phone Number"
                inputId="father-phone"
                inputType="tel"
                colSpan="sm:col-span-3"
                errorMsg="Phone Number is not valid"
                setValue={setParentalFormData}
                setValidation={setParentalFormValidity}
                valueKey={"fatherPhone"}
                placeholder="ex: 012 3456 7890"
                pattern="01[0125][0-9]{8}"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h2>PARENTAL INFORMATION (MOTHER)</h2>
            <div>
              <FormInput
                input
                required
                colSpan="sm:col-span-3"
                inputId="mother-name"
                labelName="FullName"
                errorMsg="FullName name is required"
                setValue={setParentalFormData}
                setValidation={setParentalFormValidity}
                valueKey={"motherName"}
                validityKey={"motherNameIsValid"}
              />
              <FormInput
                input
                required
                labelName="Email address"
                inputId="mother-email"
                inputType="email"
                colSpan="sm:col-span-3"
                placeholder="ex: myname@example.com"
                errorMsg="Email address is not valid"
                setValue={setParentalFormData}
                setValidation={setParentalFormValidity}
                valueKey={"motherEmail"}
              />
              <FormInput
                input
                required
                labelName="Phone Number"
                inputId="mother-phone"
                inputType="tel"
                colSpan="sm:col-span-3"
                errorMsg="Phone Number is not valid"
                setValue={setParentalFormData}
                setValidation={setParentalFormValidity}
                valueKey={"motherPhone"}
                placeholder="ex: 012 3456 7890"
                pattern="01[0125][0-9]{8}"
              />
            </div>
          </div>
        </div>

        <Btns
          back
          error={error}
          nextClick={stepTwoNextHandler}
          backClick={stepTwoBackHandler}
        />
      </div>
    </FormBox>
  );
};

export default ParentalStep;
