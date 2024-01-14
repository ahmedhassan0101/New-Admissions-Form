import { useContext } from "react";
import PersonalStep from "./FormSteps/PersonalStep";
import AcademicStep from "./FormSteps/AcademicStep";
import AdditionalStep from "./FormSteps/AdditionalStep";
import StudentInfoCard from "./FormSteps/SubmitInfo";
import FormContext from "../utils/form-context";

const FormsCollections = () => {
  const { showInfo } = useContext(FormContext);
  return (
    <>
      <PersonalStep />
      <AcademicStep />
      <AdditionalStep />
      {showInfo && <StudentInfoCard />}
    </>
  );
};

export default FormsCollections;
