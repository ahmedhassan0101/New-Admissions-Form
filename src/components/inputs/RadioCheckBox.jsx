import React, { useEffect, useState } from "react";

const RadioCheckBox = (props) => {
  const {
    radio,
    checkbox,
    legend,
    colSpan,
    options,
    required,
    setValue,
    setValidation,
    errorMsg,
    valueKey,
  } = props;
  //!
  // todo ===[INPUT VALIDATION]===
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [error, setError] = useState("");

  const checkboxChangeHandler = (event) => {
    const value = event.target.value;
    setSelectedCheckboxes((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const valueChangeHandler = (event) => {
    setSelectedOption(event.target.value);
    setError("");
  };
  const valueIsValid = selectedOption !== "";
  const validityKey = valueKey + "IsValid";

  // todo ===[INPUT VALIDATION]===
  //!
  // todo ===[LIFTING STATE UP TO EVERY INDIVIDUAL INPUT]===
  useEffect(() => {
    if (selectedOption) {
      setValue((prevState) => {
        return { ...prevState, [valueKey]: selectedOption };
      });
      if (required) {
        setValidation((prevState) => {
          return { ...prevState, [validityKey]: valueIsValid };
        });
      }
    }

    if (selectedCheckboxes && checkbox) {
      setValue((prevState) => {
        return { ...prevState, [valueKey]: selectedCheckboxes };
      });
    }
  }, [selectedOption, selectedCheckboxes]);
  // todo ===[LIFTING STATE UP TO EVERY INDIVIDUAL INPUT]===
  return (
    <fieldset className="sm:col-span-3">
    {/* // todo ===[LABLE]=== */}
      <legend
        className={`text-sm font-medium leading-6 text-gray-900  ${
          required && "after:content-['*'] after:ml-0.5 after:text-pink-500"
        }`}
      >
        {legend}
      </legend>
      {/* // todo ===[IF RADIO]=== */}
      {radio && (
        <div className={`grid grid-cols-${colSpan} mt-4`}>
          {options.map((option) => (
            <div key={option.inputId} className="flex items-center gap-x-3">
              <input
                type="radio"
                id={option.inputId}
                name={option.labelName}
                value={option.labelName}
                checked={selectedOption === option.labelName}
                onChange={valueChangeHandler}
                className="w-4 h-4 text-teal-300 border-gray-300 focus:ring-teal-300"
              />
              <label
                htmlFor={option.inputId}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {option.labelName}
              </label>
            </div>
          ))}
        </div>
      )}
      {/* // todo ===[IF CHECKBOX]=== */}
      {checkbox && (
        <div className="mt-6 space-y-6">
          {options.map((option) => (
            <div key={option.inputId} className="relative flex gap-x-3">
              <div className="flex items-center h-6">
                <input
                  id={option.inputId}
                  name={option.inputId}
                  type="checkbox"
                  value={option.labelName}
                  onChange={checkboxChangeHandler}
                  checked={selectedCheckboxes.includes(option.labelName)}
                  className="w-4 h-4 text-teal-300 border-gray-300 rounded focus:ring-teal-300"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor={option.inputId}
                  className="font-medium text-gray-900"
                >
                  {option.labelName}
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* // todo ===[IF HAS ERRORE]=== */}
      {error && (
        <span className="flex items-center justify-end mt-1 ml-1 text-sm font-medium tracking-wide text-pink-500">
          {errorMsg}
        </span>
      )}
    </fieldset>
  );
};

export default RadioCheckBox;
