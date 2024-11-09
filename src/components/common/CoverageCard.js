import React from "react"
import { PencilIcon } from "@heroicons/react/outline";
export const CoverageCard = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
    <div className="flex justify-between mb-4">
      <h3 className="text-[#000000] text-[1.25rem] font-bold">Coverage</h3>
      <div className="flex justify-between items-center ">
          <PencilIcon className="h-4 w-4 mr-1 text-[#049C8A]" />
          <button className="underline text-[#049C8A] text-[1rem] font-medium">
            Edit
          </button>
        </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-start gap-4">
        {/* Eligibility */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Eligibility:</span>
          <span className="text-[#283342] text-[1rem] font-medium" >Eligible</span>
        </div>

        {/* Policy Network Type */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Policy network type:</span>
          <span className="text-[#283342] text-[1rem] font-medium">PPO</span>
        </div>

        {/* Benefit Max */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Benefit Max:</span>
          <span className="text-[#283342] text-[1rem] font-medium">$2,000.00</span>
        </div>

        {/* Benefit Remaining */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Benefit Remaining:</span>
          <span className="text-[#283342] text-[1rem] font-medium">$500.00</span>
        </div>

        {/* Pre-Auth & Pre-D */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Pre-Auth & Pre-D:</span>
          <span className="text-[#283342] text-[1rem] font-medium">None</span>
        </div>

        {/* Age Restrictions */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Age Restrictions:</span>
          <span className="text-[#283342] text-[1rem] font-medium">19 max - Student</span>
        </div>

        {/* Coordination of Benefits */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Coordination of Benefits:</span>
          <span className="text-[#283342] text-[1rem] font-medium">Standard</span>
        </div>

        {/* Medically Necessary Only */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Medically Necessary Only:</span>
          <span className="text-[#283342] text-[1rem] font-medium">Yes</span>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        {/* Network Participation */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Network participation:</span>
          <span className="text-[#283342] text-[1rem] font-medium">Out of Network</span>
        </div>

        {/* Policy Effective Date */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Policy effective date:</span>
          <span className="text-[#283342] text-[1rem] font-medium">Jun/01/2019</span>
        </div>

        {/* Renewal */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Renewal:</span>
          <span className="text-[#283342] text-[1rem] font-medium">Lifetime</span>
        </div>

        {/* Coinsurance Percentage */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Coinsurance Percentage:</span>
          <span className="text-[#283342] text-[1rem] font-medium">50%</span>
        </div>

        {/* Waiting Period */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Waiting Period:</span>
          <span className="text-[#283342] text-[1rem] font-medium">None</span>
        </div>

        {/* Deductible */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Deductible:</span>
          <span className="text-[#283342] text-[1rem] font-medium">$0.00</span>
        </div>

        {/* Assignment of Benefits */}
        <div className="flex flex-col items-start">
          <span className="text-[#525257] text-[0.875rem] font-normal">Assignment of Benefits:</span>
          <span className="text-[#283342] text-[1rem] font-medium">Practice</span>
        </div>
      </div>
    </div>
  </div>
  )
}
