import React, { useContext, useState } from "react";
import Btns from "../Btns/Btns";
import FormBox from "../UI/FormBox";
import RadioCheckBox from "../inputs/RadioCheckBox";
import FormInput from "../inputs/FormInput";
import { areAllPropertiesTrue } from "../../utils/ValidationRules";
import FormContext from "../../utils/form-context";

const PersonalStep = ({ handleNext }) => {
  // todo ===[STATE BLOCK]===
  const [error, setError] = useState("");
  const [personalFormData, setPersonalFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    nationalID: "",
    birthBlace: "",
    birthday: "",
    gender: "",
  });
  const [personalFormValidity, setPersonalFormValidity] = useState({
    firstNameIsValid: false,
    middleNameIsValid: false,
    lastNameIsValid: false,
    emailIsValid: false,
    phoneNumberIsValid: false,
    nationalityIsValid: false,
    nationalIDIsValid: false,
    birthBlaceIsValid: false,
    birthdayIsValid: false,
    genderIsValid: false,
  });
  // todo ===[STATE BLOCK]===
  //? === ======================= ===
  // todo ===[CONTEXT BLOCK]===
  const {
    formState: { stepOne },
    dispatch,
    addToFormCollections,
  } = useContext(FormContext);

  let formIsValid = false;
  if (areAllPropertiesTrue(personalFormValidity)) {
    formIsValid = true;
  }

  const stepOneHandler = () => {
    if (!formIsValid) {
      setError("Please fill the required fields");
      return;
    }
    handleNext();
    addToFormCollections("personalInfo", personalFormData);
    setError("");
    dispatch({ type: "ONE_IS_DONE" });
  };
  // todo ===[CONTEXT BLOCK]===

  return (
    <FormBox>
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 mb-8 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            input
            required
            colSpan="sm:col-span-2"
            inputId="first-name"
            labelName="First name"
            errorMsg="First name is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"firstName"}
          />

          <FormInput
            input
            required
            colSpan="sm:col-span-2"
            inputId="middle-name"
            labelName="Middle Name"
            errorMsg="Middle name is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"middleName"}
          />

          <FormInput
            input
            labelName="Last name"
            inputId="last-name"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"lastName"}
            errorMsg="Last name is required"
            colSpan="sm:col-span-2"
            required
          />

          <FormInput
            input
            required
            labelName="Email address"
            inputId="email"
            inputType="email"
            colSpan="sm:col-span-3"
            placeholder="ex: myname@example.com"
            errorMsg="Email address is not valid"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"email"}
          />

          <FormInput
            input
            required
            labelName="Phone Number"
            inputId="phone"
            inputType="tel"
            colSpan="sm:col-span-3"
            errorMsg="Phone Number is not valid"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"phoneNumber"}
            placeholder="ex: 012 3456 7890"
            pattern="01[0125][0-9]{8}"
          />

          <FormInput
            input
            labelName="Nationality"
            inputId="nationality"
            colSpan="sm:col-span-3"
            errorMsg="Nationality name is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"nationality"}
            required
          />
          <FormInput
            input
            inputType="number"
            labelName="National ID / Passport Number"
            inputId="nationalID"
            colSpan="sm:col-span-3"
            errorMsg="nationalID name is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"nationalID"}
            required
          />

          <FormInput
            input
            labelName="Place Of Birth"
            inputId="birthBlace"
            colSpan="sm:col-span-3"
            errorMsg="Place Of Birth is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"birthBlace"}
            required
          />

          <FormInput
            input
            inputType="date"
            labelName="Birthday"
            inputId="birthday"
            colSpan="sm:col-span-3"
            errorMsg="Birthday is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"birthday"}
            required
          />

          <RadioCheckBox
            radio
            legend="Gender"
            inputName="gender"
            colSpan="col-span-3"
            errorMsg="Please select an option"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"gender"}
            required
            options={[
              {
                inputId: "male",
                labelName: "Male",
              },
              {
                inputId: "female",
                labelName: "Female",
              },
            ]}
          />
        </div>

        <Btns nextClick={stepOneHandler} error={error} />
      </div>
    </FormBox>
  );
};

export default PersonalStep;
