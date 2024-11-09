import React from "react";
import { PencilIcon } from "@heroicons/react/outline";

export const PatientInfoCard = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <h3 className="text-[#000000] text-[1.25rem] font-bold">Personal Info</h3>
        <div className="flex justify-between items-center ">
          <PencilIcon className="h-4 w-4 mr-1 text-[#049C8A]" />
          <button className="underline text-[#049C8A] text-[1rem] font-medium">
            Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start gap-4">
          {/* Full name Row */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal" >Full name:</span>
            <span className="text-[#283342] text-[1rem] font-medium">Dave S George</span>
          </div>

          {/* DOB Row */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal" >DOB:</span>
            <span className="text-[#283342] text-[1rem] font-medium">FEB-01-1994</span>
          </div>

          {/* SSN Row */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal" >SSN:</span>
            <span className="text-[#283342] text-[1rem] font-medium">078-05-1120</span>
          </div>

          {/* Postal Address Row */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal" >Postal Address:</span>
            <span className="text-[#283342] text-[1rem] font-medium" >132, My Street, Apartment 1001,</span>
            <span className="text-[#283342] text-[1rem] font-medium" >Kingston, New York 12401</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          {/* Gender Row */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal" >Gender:</span>
            <span className="text-[#283342] text-[1rem] font-medium" >Male</span>
          </div>

          {/* Phone Row */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal">Phone:</span>
            <span className="text-[#283342] text-[1rem] font-medium" >+1 (123) 456-7890</span>
          </div>

          {/* Relationship Row */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal">Relationship to subscriber:</span>
            <span className="text-[#283342] text-[1rem] font-medium" >Dependant</span>
          </div>
        </div>
      </div>
    </div>
  );
};
