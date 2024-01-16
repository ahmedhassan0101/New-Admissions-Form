import { useContext } from "react";
import PersonalStep from "./FormSteps/PersonalStep";
import PreviousStudyStep from "./FormSteps/PreviousStudyStep";
import FormContext from "../utils/form-context";
import AdmissionStep from "./FormSteps/AdmissionStep";
import ParentalStep from "./FormSteps/ParentalStep";
import Submit from "./FormSteps/Submit";

const FormsCollections = () => {
  const { currentIndex, handleNext, handleBack } = useContext(FormContext);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out transform flex-nowrap"
        style={{
          transform: `translateX(-${currentIndex * 100}%) `,
        }}
      >
        <PersonalStep handleNext={handleNext} />
        <ParentalStep handleNext={handleNext} handleBack={handleBack} />
        <PreviousStudyStep handleNext={handleNext} handleBack={handleBack} />
        <AdmissionStep  handleNext={handleNext} handleBack={handleBack} />
        <Submit handleBack={handleBack}/>
      </div>
    </div>
  );
};

export default FormsCollections;
