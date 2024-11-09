import React from "react";
import logo from "../../assets/img/logo.png";
import profile from "../../assets/img/Picture.png";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-[2.87rem] h-[2.87rem] rounded-full" />
        <h1 className="text-xl font-gilroy">Hello Ortho</h1>
      </div>
      <div className="bg-gray-300 rounded-full overflow-hidden">
        <img src={profile} alt="User" className="w-[3rem] h-[3rem]" />
      </div>
    </header>
  );
};
