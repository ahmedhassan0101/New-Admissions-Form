import React from "react";

import logoImage from "../../assets//UFE-Logo-Main-White.png";

const SideLogo = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-white">
      <div className="flex flex-col items-center">
        <img
          src={logoImage}
          alt="Centered Image"
          className="h-56 font-medium max-lg:hidden"
        />
        <h2 className="text-4xl my-7 max-lg:my-3">APPLY NOW</h2>
        <h4 className="text-xl">
          Give yourself a chance to be admitted to UFE
        </h4>
      </div>
    </div>
  );
};
//
export default SideLogo;

//       <img src={logoImage} alt="Logo" className="" />
//

//     </div>

//   </div>
// </>
