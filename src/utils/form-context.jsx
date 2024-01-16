import React, { useState, createContext, useReducer, useEffect } from "react";

const initialState = {
  stepOne: false,
  stepTwo: false,
  stepThree: false,
  stepFour: false,
};
const formStepsReducer = (state, action) => {
  switch (action.type) {
    case "ONE_IS_DONE":
      return { ...state, stepOne: !state.stepOne };
    case "TWO_IS_DONE":
      return { ...state, stepTwo: !state.stepTwo };
    case "BACK_TO_ONE":
      return { ...state, stepOne: !state.stepOne };
    case "THREE_IS_DONE":
      return { ...state, stepThree: !state.stepThree };
    case "BACK_TO_TWO":
      return { ...state, stepTwo: !state.stepTwo };
    case "BACK_TO_THREE":
      return { ...state, stepThree: !state.stepThree };
    case "RESET":
      return { stepOne: false, stepTwo: false, stepThree: false };
    default:
      return state;
  }
};

const FormContext = createContext({
  formState: {},
  formCollections: {},
  isPopupVisible: false,
  currentIndex: 0,
  dispatch: () => {},
  addToFormCollections: () => {},
  restForm: () => {},
  handleNext: () => {},
  handleBack: () => {},
});

export const FormContextProvider = ({ children }) => {
  const [formState, dispatch] = useReducer(formStepsReducer, initialState);
  const [formCollections, setFormCollections] = useState({});
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(formCollections);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
  };

  const addToFormCollections = (formData, obj) => {
    setFormCollections((prevState) => {
      return { ...prevState, [formData]: obj };
    });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const restForm = () => {
    dispatch({ type: "RESET" });
    setPopupVisible(true);
    setCurrentIndex(0);
    setFormCollections({});
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      closePopup();
    }, 3000);
    return () => clearTimeout(timer);
  }, [restForm]);

  return (
    <FormContext.Provider
      value={{
        formState,
        formCollections,
        isPopupVisible,
        currentIndex,
        dispatch,
        addToFormCollections,
        restForm,
        handleNext,
        handleBack,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
