export const isNotEmpty = (value) => value.trim() !== "";

export const isSelected = (value) => {
  return value.trim() !== "-Please choose an option-" && value.trim() !== "";
};

export const isValidEmail = (email) => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gm;
  return pattern.test(email);
};

export const isValidPhoneNumber = (phoneNumber) => {
  const pattern = /^01[0125][0-9]{8}$/gm;
  return pattern.test(phoneNumber);
};


export const areAllPropertiesTrue = (obj) => {
  return Object.values(obj).every((value) => value === true);
};
