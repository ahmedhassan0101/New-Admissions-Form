import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-start h-24 border-t flex-start  border-[#C9E1FF] max-sm:px-5 lg:px-20">
      <h1 className="text-3xl font-semibold ">Footer</h1>
      <p className="flex-1 text-center">&copy; {currentYear} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
