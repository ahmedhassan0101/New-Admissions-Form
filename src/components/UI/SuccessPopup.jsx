import React from "react";

const SuccessPopup = () => {
  return (
    <div className="h-[calc(100vh-192px)] flex items-center justify-center">
      <div className="p-4 text-green-700 bg-green-100 border-b-4 border-green-500 rounded-lg">
        <p className="text-lg font-semibold">Registration Successful!</p>
        <p>Thank you for registering.</p>
      </div>
    </div>
  );
};

export default SuccessPopup;
