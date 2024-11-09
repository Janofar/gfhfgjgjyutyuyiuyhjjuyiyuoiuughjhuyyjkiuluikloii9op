import React from "react";
import { PencilIcon,EyeIcon  } from "@heroicons/react/outline";
import { PhotographIcon } from '@heroicons/react/solid';

export const InsuranceCard = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <h3 className="text-[#000000] text-[1.25rem] font-bold">Insurance Card</h3>
        <div className="flex justify-between items-center ">
          <PencilIcon className="h-4 w-4 mr-1 text-[#049C8A]" />
          <button className="underline text-[#049C8A] text-[1rem] font-medium">
            Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start gap-4">
          {/* Insurance Carrier Name */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal">Insurance carrier name:</span>
            <span className="text-[#283342] text-[1rem] font-medium">Delta Dental California</span>
          </div>

          {/* Patient / Member ID */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal">Patient / member ID:</span>
            <span className="text-[#283342] text-[1rem] font-medium">114983100201</span>
          </div>

          {/* Group Number */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal">Group number:</span>
            <span className="text-[#283342] text-[1rem] font-medium">00362-00001</span>
          </div>

          {/* Image Uploaded */}
          <div className="flex flex-col">
            <span className="text-[#525257] text-[0.875rem] text-start font-normal">Image uploaded:</span>
            <div className="flex items-center w-[100%] gap-2 text-teal-500">
            <div className="flex items-center"> 
                <PhotographIcon className="h-[1.5rem] w-[1.5rem] text-[#049C8A]" />
                <span className="text-[#4D5961] text-[0.88rem] pl-1">image.png
                </span>
              </div>
              <div className="flex items-center"> 
                <EyeIcon className="h-[1.5rem] w-[1.5rem] text-gray-500" />
                <span className="underline underline-offset-4 text-[#4D5961] text-[0.88rem] pl-1">View image
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          {/* Subscriber ID */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal">Subscriber ID:</span>
            <span className="text-[#283342] text-[1rem] font-medium" >114983100201</span>
          </div>

          {/* Group / Employer Name */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal">Group / Employer name:</span>
            <span className="text-[#283342] text-[1rem] font-medium" >114983100201</span>
          </div>

          {/* Patient’s Relationship with Subscriber */}
          <div className="flex flex-col items-start">
            <span className="text-[#525257] text-[0.875rem] font-normal">Patient’s Relationship with Subscriber:</span>
            <span className="text-[#283342] text-[1rem] font-medium" >Child</span>
          </div>
        </div>
      </div>
    </div>
  );
};
