import React from "react";
import logo from "../../assets/img/logo.png";
import profile from "../../assets/img/Picture.png";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-xl font-semibold">Hello Ortho</h1>
      </div>
      <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
        <img src={profile} alt="User" />
      </div>
    </header>
  );
};
