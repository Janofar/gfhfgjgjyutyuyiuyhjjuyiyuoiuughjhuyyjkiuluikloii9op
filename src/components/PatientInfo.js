import React from "react";
import { CakeIcon, CalendarIcon, PencilIcon } from "@heroicons/react/outline";
import { CoverageCard } from "./common/CoverageCard";
import { InsuranceCard } from "./common/InsuranceCard";
import { PatientInfoCard } from "./common/PatientInfoCard";

const PatientInfo = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Patient Info</h1>
          <button
            className="bg-black text-white flex items-center justify-center rounded-md"
            style={{ width: "112px", height: "40px" }}
          >
            <PencilIcon className="h-4 w-4 mr-1" />
            Edit
          </button>
        </div>
        <div
          className="flex items-center gap-4 mb-4 border border-gray-300 rounded-lg"
          style={{ backgroundColor: "#F8F5F4" }}
        >
          <div className="flex items-center justify-center ml-4 bg-red-500 text-white w-12 h-12 rounded-full text-xl font-semibold">
            D
          </div>
          <div>
            <div className="text-xl flex flex-wrap gap-8 pl-4 pt-4 font-semibold">
              Dave S George
            </div>
            <div className="flex flex-wrap gap-8 pl-4 pt-1 pb-4">
              <div>Male (21)</div>

              <div className="flex items-center gap-2">
                <CakeIcon className="h-6 w-6 text-gray-500" />
                <span>Jun 25, 2000</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-6 w-6 text-gray-500" />
                <span>Exam : mm-dd-yyyy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex border-b border-gray-300 mb-4">
          <button className="w-1/4 py-2 px-4 text-gray-800 border-b-2 border-teal-500 font-semibold">
            Patient
          </button>
          <div className="w-2/4 grid grid-cols-3 gap-4">
            <button className="py-2 px-4 text-gray-500">Tab 2</button>
            <button className="py-2 px-4 text-gray-500">Tab 3</button>
            <button className="py-2 px-4 text-gray-500">Tab 4</button>
          </div>
        </div>

        <div className="flex h-screen">
          {/* Tabs Section side bar*/}
          <aside className="w-1/4 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-4">
            <button className="w-full py-3 px-4 text-gray-800 hover:bg-gray-200 border-r-4 border-teal-500 font-semibold text-left group hover:rounded-tl-lg hover:rounded-bl-lg">
              Patient
            </button>
            <button className="w-full py-3 px-4 text-gray-800 hover:bg-gray-200 border-teal-500 font-semibold text-left group hover:rounded-tl-lg hover:rounded-bl-lg">
              Responsible Party1
            </button>
          </aside>
          {/* Patient Information Sections */}
          <div className="w-3/4 space-y-6">
            {/* Personal Info Card */}
            <PatientInfoCard />
            {/* Insurance Card */}
            <InsuranceCard />

            {/* Coverage Card */}
            <CoverageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
