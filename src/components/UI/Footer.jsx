import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center h-10 text-center">
      <div className="container flex items-center justify-center text-white border-t border-white mxex-auto ">
        <p className="my-2">&copy; Copyright All Right Reserved {currentYear}, l’Université Française d’Égypte</p>
      </div>
    </footer>
  );
};

export default Footer;
