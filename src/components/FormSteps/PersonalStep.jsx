import React, { useContext, useState } from "react";
import Btns from "../Btns/Btns";
import FormBox from "../UI/FormBox";
import RadioCheckBox from "../inputs/RadioCheckBox";
import FormInput from "../inputs/FormInput";
import { areAllPropertiesTrue } from "../../utils/ValidationRules";
import FormContext from "../../utils/form-context";

const PersonalStep = () => {
  // todo ===[STATE BLOCK]===
  const [error, setError] = useState("");
  const [personalFormData, setPersonalFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryName: "",
    cityName: "",
    address: "",
    birthday: "",
    gender: "",
  });
  console.log(personalFormData);
  const [personalFormValidity, setPersonalFormValidity] = useState({
    firstNameIsValid: false,
    middleNameIsValid: false,
    emailIsValid: false,
    phoneNumberIsValid: false,
    countryNameIsValid: false,
    cityNameIsValid: false,
    addressIsValid: false,
    birthdayIsValid: false,
    genderIsValid: false,
  });
  console.log(personalFormValidity);
  // todo ===[STATE BLOCK]===
  //? === ======================= ===
  // todo ===[CONTEXT BLOCK]===
  const {
    formState: { stepOne },
    dispatch,
    addToFormCollections,
  } = useContext(FormContext);
  const borderColor = stepOne ? "teal-400" : "[#D5EAFF]";

  let formIsValid = false;
  if (areAllPropertiesTrue(personalFormValidity)) {
    formIsValid = true;
  }

  const stepOneHandler = () => {
    if (!formIsValid) {
      setError("Please fill the required fields");
      return;
    }

    addToFormCollections("personalInfo", personalFormData);
    setError("");
    dispatch({ type: "ONE_IS_DONE" });
  };
  // todo ===[CONTEXT BLOCK]===
  
  return (
    <FormBox title={"Personal Information."} step="1" color={borderColor}>
      <div
        className={`${
          !stepOne
            ? "visible h-auto overflow-visible"
            : "invisible h-0 overflow-hidden"
        } `}
      >
        <div className="grid grid-cols-1 mt-20 mb-10 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormInput
            input
            required
            colSpan="2"
            inputId="first-name"
            labelName="First name"
            errorMsg="First name is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"firstName"}
            validityKey={"firstNameIsValid"}
          />

          <FormInput
            input
            required
            colSpan="2"
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
            valueKey={"lastName"}
            colSpan="2"
          />

          <FormInput
            input
            required
            labelName="Email address"
            inputId="email"
            inputType="email"
            colSpan="3"
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
            colSpan="3"
            errorMsg="Phone Number is not valid"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"phoneNumber"}
            placeholder="ex: 012 3456 7890"
            pattern="01[0125][0-9]{8}"
          />
          
          <FormInput
            select
            labelName="Country"
            inputId="country"
            colSpan="3"
            errorMsg="Country name is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"countryName"}
            required
            options={["Any", "Country_1", "Country_2", "Country_3"]}
          />

          <FormInput
            input
            labelName="City"
            inputId="city"
            colSpan="3"
            errorMsg="City name is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"cityName"}
            required
          />
          
          <FormInput
            input
            labelName="Street address"
            inputId="street-address"
            errorMsg="Street address is required"
            setValue={setPersonalFormData}
            setValidation={setPersonalFormValidity}
            valueKey={"address"}
            required
          />

          <FormInput
            input
            inputType="date"
            labelName="Birthday"
            inputId="birthday"
            colSpan="3"
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
            colSpan="2"
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
