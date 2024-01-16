import React, { useContext, useState } from "react";
import FormBox from "../UI/FormBox";
import Btns from "../Btns/Btns";
import FormContext from "../../utils/form-context";
import FormInput from "../inputs/FormInput";
import { areAllPropertiesTrue } from "../../utils/ValidationRules";
import RadioCheckBox from "../inputs/RadioCheckBox";

const AdmissionStep = ({ handleNext, handleBack }) => {
  // todo ===[STATE BLOCK]===
  const [error, setError] = useState("");
  const [admissinFormData, setAdmissinFormData] = useState({
    firstDesire: "",
    secondDesire: "",
    thirdDesire: "",
    informationResponsibility: "",
  });
  const [admissinFormValidity, setAdmissinFormValidity] = useState({
    firstDesireIsValid: false,
    secondDesireIsValid: false,
    thirdDesireIsValid: false,
    informationResponsibilityIsValid: false,
  });
  // todo ===[STATE BLOCK]===
  //? === ======================= ===
  // todo ===[CONTEXT BLOCK]===
  const { formCollections, dispatch, restForm, addToFormCollections } =
    useContext(FormContext);

  let formIsValid = false;
  if (areAllPropertiesTrue(admissinFormValidity)) {
    formIsValid = true;
  }
  const lastStepBackHandler = () => {
    handleBack();
    dispatch({ type: "BACK_TO_THREE" });
  };

  // todo ===[CONTEXT BLOCK]===
  //? === ======================= ===
  // todo ===[SUBMIT BLOCK]===
  const lastStepNextHandler = (e) => {
    if (!formIsValid) {
      setError("Please fill the required fields");
      return;
    }
    addToFormCollections("admissinInfo", admissinFormData);
    handleNext();
  };
  // todo ===[SUBMIT BLOCK]===
  return (
    <FormBox>
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 mt-20 mb-10 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            select
            required
            labelName="Desired Faculty No.1"
            inputId="firstDesire"
            setValue={setAdmissinFormData}
            setValidation={setAdmissinFormValidity}
            valueKey="firstDesire"
            errorMsg="Faculty name is required"
            options={[
              "-Please choose an option-",
              "Engineering - mechanical engineering / mechatronics",
              "Engineering - architecture / urban planning",
              "Management - Business Administration",
              "Management - Hospitality Management",
              "Management - Business Intelligence and Information systems",
              "Applied Languages - International Trade",
              "Applied Languages - Translation",
            ]}
          />
          <FormInput
            select
            required
            labelName="Desired Faculty No.1"
            inputId="secondDesire"
            setValue={setAdmissinFormData}
            setValidation={setAdmissinFormValidity}
            valueKey="secondDesire"
            errorMsg="Faculty name is required"
            options={[
              "-Please choose an option-",
              "Engineering - mechanical engineering / mechatronics",
              "Engineering - architecture / urban planning",
              "Management - Business Administration",
              "Management - Hospitality Management",
              "Management - Business Intelligence and Information systems",
              "Applied Languages - International Trade",
              "Applied Languages - Translation",
            ]}
          />
          <FormInput
            select
            required
            labelName="Desired Faculty No.1"
            inputId="thirdDesire"
            setValue={setAdmissinFormData}
            setValidation={setAdmissinFormValidity}
            valueKey="thirdDesire"
            errorMsg="Faculty name is required"
            options={[
              "-Please choose an option-",
              "Engineering - mechanical engineering / mechatronics",
              "Engineering - architecture / urban planning",
              "Management - Business Administration",
              "Management - Hospitality Management",
              "Management - Business Intelligence and Information systems",
              "Applied Languages - International Trade",
              "Applied Languages - Translation",
            ]}
          />

          <RadioCheckBox
            checkbox
            required
            colSpan="col-span-3"
            setValue={setAdmissinFormData}
            setValidation={setAdmissinFormValidity}
            valueKey="informationResponsibility"
            options={[
              {
                inputId: "informationResponsibility",
                labelName:
                  "I Agree That I'm Responsible For All The Provided Information And Its Correctness",
              },
            ]}
          />
        </div>
        <Btns
          back
          error={error}
          backClick={lastStepBackHandler}
          nextClick={lastStepNextHandler}
        />
      </div>
    </FormBox>
  );
};

export default AdmissionStep;
