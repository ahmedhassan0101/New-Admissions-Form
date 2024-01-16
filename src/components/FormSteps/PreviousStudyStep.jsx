import React, { useContext, useState } from "react";
import Btns from "../Btns/Btns";
import FormBox from "../UI/FormBox";
import FormInput from "../inputs/FormInput";
import RadioCheckBox from "../inputs/RadioCheckBox";
import FormContext from "../../utils/form-context";

const PreviousStudyStep = ({ handleNext, handleBack }) => {
  // todo ===[STATE BLOCK]===
  const [previousStudyFormData, setPreviousStudyFormData] = useState({
    secondaryCertificate: "",
    degree: "",
    graduationYear: "",
  });
  const [previousStudyFormValidity, setPreviousStudyFormValidity] = useState({
    secondaryCertificateIsValid: false,
    degreeIsValid: false,
    graduationYearIsValid: false,
  });
  // todo ===[STATE BLOCK]===
  //? === ======================= ===
  // todo ===[CONTEXT BLOCK]===
  const { dispatch, addToFormCollections } = useContext(FormContext);

  const stepThreeNextHandler = () => {
    addToFormCollections("previousStudyInfo", previousStudyFormData);
    dispatch({ type: "THREE_IS_DONE" });
    handleNext();
  };
  const stepThreeBackHandler = () => {
    handleBack();
    dispatch({ type: "BACK_TO_TWO" });
  };
  // todo ===[CONTEXT BLOCK]===
  return (
    <FormBox>
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 mt-20 mb-10 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            select
            labelName="Secondary Certificate"
            inputId="secondaryCertificate"
            colSpan="sm:col-span-3"
            setValue={setPreviousStudyFormData}
            setValidation={setPreviousStudyFormValidity}
            valueKey="secondaryCertificate"
            errorMsg="secondaryCertificate is required"
            required
            options={[
              "-Please choose an option-",
              "Egyptian B.S.C",
              "American Diploma",
              "IGCSE",
              "Any equivalent Diplomac or certificates",
            ]}
          />
          <FormInput
            input
            required
            colSpan="sm:col-span-3"
            inputId="degree"
            labelName="Degree"
            errorMsg="degree is required"
            setValue={setPreviousStudyFormData}
            setValidation={setPreviousStudyFormValidity}
            valueKey={"degree"}
          />
          <FormInput
            input
            required
            inputId="graduationYear"
            labelName="Graduation Year"
            errorMsg="Graduation Year is required"
            setValue={setPreviousStudyFormData}
            setValidation={setPreviousStudyFormValidity}
            valueKey="graduationYear"
          />
        </div>

        <Btns
          back
          nextClick={stepThreeNextHandler}
          backClick={stepThreeBackHandler}
        />
      </div>
    </FormBox>
  );
};

export default PreviousStudyStep;
