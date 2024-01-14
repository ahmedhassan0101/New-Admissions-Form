import React, { useContext, useState } from "react";
import Btns from "../Btns/Btns";
import FormBox from "../UI/FormBox";
import FormInput from "../inputs/FormInput";
import RadioCheckBox from "../inputs/RadioCheckBox";
import FormContext from "../../utils/form-context";

const AdditionalStep = () => {
  // todo ===[STATE BLOCK]===
  const [additionalFormData, setAdditionalFormData] = useState({
    skills: [],
    sports: [],
    isMedicalCondition: "",
    medicalConditionName: "",
    otherDetails: "",
  });
  // todo ===[STATE BLOCK]===
  //? === ======================= ===
  // todo ===[CONTEXT BLOCK]===
  const {
    formState: { stepTwo, stepThree },
    dispatch,
    addToFormCollections,
    showInfoHandler,
  } = useContext(FormContext);
  const borderColor = !stepTwo
    ? "gray-300"
    : stepTwo && !stepThree
    ? "[#D5EAFF]"
    : "teal-200";
    
  const stepThreeNextHandler = () => {
    addToFormCollections("additionalInfo", additionalFormData);
    dispatch({ type: "THREE_IS_DONE" });
    showInfoHandler();
  };
  const stepThreeBackHandler = () => {
    dispatch({ type: "BACK_TO_TWO" });
  };
  // todo ===[CONTEXT BLOCK]===
  return (
    <FormBox title={"Additional Information."} step="3" color={borderColor}>
      {stepTwo && !stepThree && (
        <>
          <div className="grid grid-cols-1 mt-20 mb-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <RadioCheckBox
              checkbox
              legend="Skills/Talents/Interests"
              setValue={setAdditionalFormData}
              valueKey={"skills"}
              options={[
                {
                  inputId: "photography",
                  labelName: "Photography",
                },
                {
                  inputId: "programing",
                  labelName: "Programing",
                },
                {
                  inputId: "writing",
                  labelName: "Writing",
                },
                {
                  inputId: "arts_crafts",
                  labelName: "Female",
                },
                {
                  inputId: "other_skills",
                  labelName: "Others (specify below)",
                },
              ]}
            />

            <RadioCheckBox
              checkbox
              legend="Sports"
              setValue={setAdditionalFormData}
              valueKey={"sports"}
              options={[
                {
                  inputId: "football",
                  labelName: "Football",
                },
                {
                  inputId: "swiming",
                  labelName: "Swiming",
                },
                {
                  inputId: "chess",
                  labelName: "Chess",
                },
                {
                  inputId: "table_tennis",
                  labelName: "Table Tennis",
                },
                {
                  inputId: "other_sports",
                  labelName: "Others (specify below)",
                },
              ]}
            />

            <RadioCheckBox
              radio
              legend="Do you have any Medical Condition/illness/sickness?"
              inputName="medical-condition"
              colSpan="2"
              setValue={setAdditionalFormData}
              valueKey={"isMedicalCondition"}
              options={[
                {
                  inputId: "yes",
                  labelName: "Yes",
                },
                {
                  inputId: "no",
                  labelName: "No",
                },
              ]}
            />

            <FormInput
              input
              labelName="If Yes, Please state Condition/illness/ sickness"
              inputId="medical-condition"
              colSpan="3"
              setValue={setAdditionalFormData}
              valueKey={"medicalConditionName"}
            />

            <FormInput
              textarea
              labelName="About/Other Details,Sports and Skills."
              inputId="about"
              paragraoh="Write a few sentences about yourself."
              setValue={setAdditionalFormData}
              valueKey={"otherDetails"}
            />
          </div>

          <Btns
            back
            nextClick={stepThreeNextHandler}
            backClick={stepThreeBackHandler}
          />
        </>
      )}
    </FormBox>
  );
};

export default AdditionalStep;
