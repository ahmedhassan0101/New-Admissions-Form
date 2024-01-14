import React, { useState, createContext, useReducer, useEffect } from "react";

const initialState = {
  stepOne: false,
  stepTwo: false,
  stepThree: false,
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
  showInfo: false,
  isPopupVisible: false,
  dispatch: () => {},
  addToFormCollections: () => {},
  showInfoHandler: () => {},
  restForm: () => {},
});

export const FormContextProvider = ({ children }) => {
  const [formState, dispatch] = useReducer(formStepsReducer, initialState);
  const [formCollections, setFormCollections] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const addToFormCollections = (formData, obj) => {
    setFormCollections((prevState) => {
      return { ...prevState, [formData]: obj };
    });
  };
  const showInfoHandler = () => {
    setShowInfo((prevState) => !prevState);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  const restForm = () => {
    dispatch({ type: "RESET" });
    setPopupVisible(true);
    setShowInfo(false);
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
        showInfo,
        isPopupVisible,
        dispatch,
        addToFormCollections,
        showInfoHandler,
        restForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
