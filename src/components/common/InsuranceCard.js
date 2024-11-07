import React from "react";

export const InsuranceCard = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Insurance Card</h3>
        <button className="text-teal-500">Edit</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start gap-4">
          {/* Insurance Carrier Name */}
          <div className="flex flex-col items-start">
            <strong>Insurance carrier name:</strong>
            <span>Delta Dental California</span>
          </div>

          {/* Patient / Member ID */}
          <div className="flex flex-col items-start">
            <strong>Patient / member ID:</strong>
            <span>114983100201</span>
          </div>

          {/* Group Number */}
          <div className="flex flex-col items-start">
            <strong>Group number:</strong>
            <span>00362-00001</span>
          </div>

          {/* Image Uploaded */}
          <div className="flex flex-col items-start">
            <strong>Image uploaded:</strong>
            <span className="text-teal-500">View image</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          {/* Subscriber ID */}
          <div className="flex flex-col items-start">
            <strong>Subscriber ID:</strong>
            <span>114983100201</span>
          </div>

          {/* Group / Employer Name */}
          <div className="flex flex-col items-start">
            <strong>Group / Employer name:</strong>
            <span>114983100201</span>
          </div>

          {/* Patient’s Relationship with Subscriber */}
          <div className="flex flex-col items-start">
            <strong>Patient’s Relationship with Subscriber:</strong>
            <span>Child</span>
          </div>
        </div>
      </div>
    </div>
  );
};
