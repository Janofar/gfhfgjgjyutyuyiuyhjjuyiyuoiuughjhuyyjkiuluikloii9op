import React, { useState } from "react";
import {
  MenuIcon,
  UserIcon,
  ShieldExclamationIcon,
  PlusIcon,
} from "@heroicons/react/solid";

export const Sidebar = () => {
  const [isSelected, setIsSelected] = useState(true);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <aside className="w-16 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-4">
      <button className="mb-4">
        <MenuIcon className="w-6 h-6 text-gray-500" />
      </button>
      <button
        className={`mb-4 p-2 ${
          isSelected ? "bg-black text-white rounded-[5px]" : ""
        }`}
        onClick={handleClick}
      >
        <UserIcon
          className={`w-6 h-6 ${
            isSelected ? "text-white" : "text-gray-500"
          } transition-colors`}
        />
      </button>
      <button className="mb-4 text-gray-500">
        <div className="relative inline-block">
          <ShieldExclamationIcon className="h-8 w-8 " />
          <PlusIcon className="h-5 w-5 text-white absolute top-0 right-0 bottom-0 left-0 m-auto" />
        </div>
      </button>
    </aside>
  );
};
