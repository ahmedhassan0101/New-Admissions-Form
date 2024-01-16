import React from "react";

import logoImage from "../../assets/UFE-Logo-Icon-Blue.png"; // Replace with the path to your logo image

const NavBar = () => {
  return (
    <nav className="flex items-center h-20 px-4">
      <div className="container flex items-center justify-between mx-auto border-b border-white">
        <img src={logoImage} alt="Logo" className="mb-4 h-14" />
        <div className="flex-grow text-center">
          <a
            href="https://ufe.edu.eg/"
            className="mx-4 font-medium text-blue-800 hover:text-white"
            target="_blank"
          >
            Home
          </a>
          <a
            href="https://ufe.edu.eg/about-us-2/"
            className="mx-4 font-medium text-blue-800 hover:text-white"
            target="_blank"
          >
            About
          </a>
          <a
            href="#"
            className="mx-4 font-medium text-blue-800 hover:text-white"
          >
            Other Links ...
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
