import React, { useContext, useState } from "react";
import Btns from "../Btns/Btns";
import FormBox from "../UI/FormBox";
import FormInput from "../inputs/FormInput";
import RadioCheckBox from "../inputs/RadioCheckBox";
import { areAllPropertiesTrue } from "../../utils/ValidationRules";
import FormContext from "../../utils/form-context";

const AcademicStep = () => {
  // todo ===[STATE BLOCK]===
  const [error, setError] = useState("");
  const [academicFormData, setAcademicFormData] = useState({
    prevCertificate: "",
    graduationDate: "",
    faculty: "",
    specialization: "",
    degreeLevel: "",
    deliveryMode: "",
    acadimicTerm: "",
    englishLevel: "",
    otherLanguages: "",
  });
  const [academicFormValidity, setAcademicFormValidity] = useState({
    prevCertificateIsValid: false,
    graduationDateIsValid: false,
    facultyIsValid: false,
    specializationIsValid: false,
    degreeLevelIsValid: false,
    deliveryModeIsValid: false,
    acadimicTermIsValid: false,
    englishLevelIsValid: false,
  });
  // todo ===[STATE BLOCK]===
  //? === ======================= ===
  // todo ===[CONTEXT BLOCK]===
  const {
    formState: { stepOne, stepTwo },
    dispatch,
    addToFormCollections,
  } = useContext(FormContext);

  const borderColor = !stepOne
    ? "gray-300"
    : stepOne && !stepTwo
    ? "[#D5EAFF]"
    : "teal-200";

  let formIsValid = false;
  if (areAllPropertiesTrue(academicFormValidity)) {
    formIsValid = true;
  }
  const stepTwoNextHandler = () => {
    if (!formIsValid) {
      setError("Please fill the required fields");
      return;
    }
    addToFormCollections("academicInfo", academicFormData);
    setError("");
    dispatch({ type: "TWO_IS_DONE" });
  };

  const stepTwoBackHandler = () => {
    dispatch({ type: "BACK_TO_ONE" });
  };
  // todo ===[CONTEXT BLOCK]===

  return (
    <FormBox title={"Academic Information."} step="2" color={borderColor}>
      <div
        className={`${
          stepOne && !stepTwo
            ? "visible h-auto overflow-visible"
            : "invisible h-0 overflow-hidden"
        }`}
      >
        <div className="grid grid-cols-1 mt-20 mb-10 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            input
            labelName="High School / Previous certificate"
            inputId="previous-certificate"
            colSpan="3"
            setValue={setAcademicFormData}
            setValidation={setAcademicFormValidity}
            valueKey={"prevCertificate"}
            errorMsg="Previous certificate name is required"
            required
          />
          <FormInput
            input
            inputType="date"
            labelName="Graduation Date"
            inputId="graduation-date"
            colSpan="3"
            setValue={setAcademicFormData}
            setValidation={setAcademicFormValidity}
            valueKey={"graduationDate"}
            errorMsg="Previous certificate name is required"
            required
          />

          <FormInput
            select
            labelName="Faculty"
            inputId="faculty"
            colSpan="2"
            setValue={setAcademicFormData}
            setValidation={setAcademicFormValidity}
            valueKey={"faculty"}
            errorMsg="Faculty name is required"
            required
            options={[
              "Any",
              "Faculty of Commerce and Business Administration",
              "Faculty of Applied Science",
              "Faculty of Education",
              "Faculty of Arts",
            ]}
          />
          <FormInput
            select
            labelName="Specialization"
            inputId="specialization"
            colSpan="2"
            setValue={setAcademicFormData}
            setValidation={setAcademicFormValidity}
            valueKey={"specialization"}
            errorMsg="Specialization name is required"
            required
            options={[
              "Any",
              "Specialization - 1",
              "Specialization - 2",
              "Specialization - 3",
            ]}
          />
          <FormInput
            select
            labelName="Degree Level"
            inputId="degree_level"
            colSpan="2"
            setValue={setAcademicFormData}
            setValidation={setAcademicFormValidity}
            valueKey={"degreeLevel"}
            errorMsg="Faculty name is required"
            required
            options={[
              "Any",
              "Master's",
              "Doctoral",
              "Graduate Certificate",
              "Graduate Diploma",
              "Post-Baccalaureate",
            ]}
          />
          <FormInput
            select
            labelName="Mode of Delivery"
            inputId="delivery_mode"
            colSpan="2"
            setValue={setAcademicFormData}
            setValidation={setAcademicFormValidity}
            valueKey={"deliveryMode"}
            errorMsg="Mode of Delivery is required"
            required
            options={[
              "Any",
              "On camps",
              "Online / Distance",
              "On camps / Online combination",
            ]}
          />
          <FormInput
            select
            labelName="Acadimic Term"
            inputId="acadimic-term"
            colSpan="2"
            setValue={setAcademicFormData}
            setValidation={setAcademicFormValidity}
            valueKey={"acadimicTerm"}
            errorMsg="Acadimic Term is required"
            required
            options={["Any", "Fall", "Spring", "Summer"]}
          />
          <RadioCheckBox
            radio
            required
            legend="English Level"
            inputName="english_level"
            colSpan="3"
            setValue={setAcademicFormData}
            setValidation={setAcademicFormValidity}
            valueKey={"englishLevel"}
            options={[
              {
                inputId: "good",
                labelName: "Good",
              },
              {
                inputId: "intermediate",
                labelName: "Intermediate",
              },
              {
                inputId: "advanced",
                labelName: "Advanced",
              },
            ]}
          />
          <FormInput
            input
            labelName="Other Languages"
            inputId="other-languages"
            colSpan="3"
            setValue={setAcademicFormData}
            valueKey={"otherLanguages"}
          />
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

export default AcademicStep;
