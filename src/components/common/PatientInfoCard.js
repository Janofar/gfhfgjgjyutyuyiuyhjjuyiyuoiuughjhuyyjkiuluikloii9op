import React from "react";

export const PatientInfoCard = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Personal Info</h3>
        <button className="text-teal-500">Edit</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start gap-4">
          {/* Full name Row */}
          <div className="flex flex-col items-start">
            <strong>Full name:</strong>
            <span>Dave S George</span>
          </div>

          {/* DOB Row */}
          <div className="flex flex-col items-start">
            <strong>DOB:</strong>
            <span>FEB-01-1994</span>
          </div>

          {/* SSN Row */}
          <div className="flex flex-col items-start">
            <strong>SSN:</strong>
            <span>078-05-1120</span>
          </div>

          {/* Postal Address Row */}
          <div className="flex flex-col items-start">
            <strong>Postal Address:</strong>
            <span>132, My Street, Apartment 1001,</span>
            <span>Kingston, New York 12401</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          {/* Gender Row */}
          <div className="flex flex-col items-start">
            <strong>Gender:</strong>
            <span>Male</span>
          </div>

          {/* Phone Row */}
          <div className="flex flex-col items-start">
            <strong>Phone:</strong>
            <span>+1 (123) 456-7890</span>
          </div>

          {/* Relationship Row */}
          <div className="flex flex-col items-start">
            <strong>Relationship to subscriber:</strong>
            <span>Dependant</span>
          </div>
        </div>
      </div>
    </div>
  );
};
