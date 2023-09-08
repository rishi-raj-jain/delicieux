import React from "react";
import LogoNav from "/logo_nav.svg";

export const Nav = () => {
  return (
    <nav className="absolute z-50 top-0 left-0 right-0 py-8">
      <div className="max-w-[1280px] m-auto flex justify-center items-center">
        <a href="/" className="group">
          <img
            src={LogoNav}
            alt="Logo"
            className="lg:group-hover:scale-105 transition-all"
          />
        </a>
      </div>
    </nav>
  );
};
