import React, { useEffect, useState } from "react";

import {
  isNotEmpty,
  isValidEmail,
  isValidPhoneNumber,
  isSelected,
} from "../../utils/ValidationRules";
const classes =
  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-[#4C9BFB] sm:text-sm sm:leading-6 ring-gray-300 placeholder:text-gray-400";

const FormInput = (props) => {
  const {
    input,
    select,
    textarea,
    labelName,
    inputId,
    inputType,
    placeholder,
    pattern,
    options,
    colSpan,
    required,
    setValue,
    setValidation,
    errorMsg,
    paragraoh,
    valueKey,
  } = props;
  //!
  // todo ===[INPUT VALIDATION]===
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  let validateValue;
  if (
    inputId === "first-name" ||
    "middle-name" ||
    "last-name" ||
    "city" ||
    "date" ||
    "street-address"
  ) {
    validateValue = isNotEmpty;
  }
  if (inputId === "email") {
    validateValue = isValidEmail;
  }
  if (inputId === "phone") {
    validateValue = isValidPhoneNumber;
  }
  if (select) {
    validateValue = isSelected;
  }

  const validityKey = valueKey + "IsValid";

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  // todo ===[INPUT VALIDATION]===
  //!
  // todo ===[LIFTING STATE UP TO EVERY INDIVIDUAL INPUT]===
  useEffect(() => {
    if (enteredValue) {
      setValue((prevState) => {
        return { ...prevState, [valueKey]: enteredValue };
      });
      if (required) {
        setValidation((prevState) => {
          return { ...prevState, [validityKey]: valueIsValid };
        });
      }
    }
  }, [enteredValue]);
  // todo ===[LIFTING STATE UP TO EVERY INDIVIDUAL INPUT]===
  return (
    <div className={colSpan ? `sm:col-span-${colSpan}` : "col-span-full"}>
      {/* // todo ===[LABLE]=== */}
      <label
        htmlFor={inputId}
        className={`block text-sm font-medium leading-6 text-gray-900  ${
          required && "after:content-['*'] after:ml-0.5 after:text-pink-500"
        }`}
      >
        {labelName}
      </label>
      <div className="mt-2">
        {/* // todo ===[IF INPUT]=== */}
        {input && (
          <input
            id={inputId}
            name={inputId}
            type={inputType || "text"}
            placeholder={placeholder}
            className={` "" ${classes} ${
              hasError && required
                ? "ring-pink-500 text-pink-500 focus:ring-pink-500 form-input"
                : !hasError && valueIsValid
                ? "ring-teal-300"
                : "ring-gray-300"
            }`}
            pattern={pattern}
            value={enteredValue}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
          />
        )}
        {/* // todo ===[IF SELECT]=== */}
        {select && (
          <select
            id={inputId}
            name={inputId}
            className={`${classes} ${
              hasError && required
                ? "ring-pink-500 text-pink-500 focus:ring-pink-500 "
                : !hasError && valueIsValid
                ? "ring-teal-300"
                : "ring-gray-300"
            }`}
            value={enteredValue}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {/* // todo ===[IF TEXTAREA]=== */}
        {textarea && (
          <>
            <div className="mt-2">
              <textarea
                id={inputId}
                name={inputId}
                rows={3}
                className={`${classes} placeholder:text-gray-400`}
                onChange={valueChangeHandler}
                onBlur={inputBlurHandler}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">{paragraoh}</p>
          </>
        )}
      </div>
      {/* // todo ===[IF HAS ERRORE]=== */}
      {hasError && !valueIsValid && (
        <span className="flex items-center justify-end mt-1 ml-1 text-sm font-medium tracking-wide text-pink-500">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export default FormInput;
