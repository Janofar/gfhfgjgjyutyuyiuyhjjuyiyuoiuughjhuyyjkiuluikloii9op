import React from "react"
export const CoverageCard = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
    <div className="flex justify-between mb-4">
      <h3 className="text-lg font-semibold">Coverage</h3>
      <button className="text-teal-500">Edit</button>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-start gap-4">
        {/* Eligibility */}
        <div className="flex flex-col items-start">
          <strong>Eligibility:</strong>
          <span>Eligible</span>
        </div>

        {/* Policy Network Type */}
        <div className="flex flex-col items-start">
          <strong>Policy network type:</strong>
          <span>PPO</span>
        </div>

        {/* Benefit Max */}
        <div className="flex flex-col items-start">
          <strong>Benefit Max:</strong>
          <span>$2,000.00</span>
        </div>

        {/* Benefit Remaining */}
        <div className="flex flex-col items-start">
          <strong>Benefit Remaining:</strong>
          <span>$500.00</span>
        </div>

        {/* Pre-Auth & Pre-D */}
        <div className="flex flex-col items-start">
          <strong>Pre-Auth & Pre-D:</strong>
          <span>None</span>
        </div>

        {/* Age Restrictions */}
        <div className="flex flex-col items-start">
          <strong>Age Restrictions:</strong>
          <span>19 max - Student</span>
        </div>

        {/* Coordination of Benefits */}
        <div className="flex flex-col items-start">
          <strong>Coordination of Benefits:</strong>
          <span>Standard</span>
        </div>

        {/* Medically Necessary Only */}
        <div className="flex flex-col items-start">
          <strong>Medically Necessary Only:</strong>
          <span>Yes</span>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        {/* Network Participation */}
        <div className="flex flex-col items-start">
          <strong>Network participation:</strong>
          <span>Out of Network</span>
        </div>

        {/* Policy Effective Date */}
        <div className="flex flex-col items-start">
          <strong>Policy effective date:</strong>
          <span>Jun/01/2019</span>
        </div>

        {/* Renewal */}
        <div className="flex flex-col items-start">
          <strong>Renewal:</strong>
          <span>Lifetime</span>
        </div>

        {/* Coinsurance Percentage */}
        <div className="flex flex-col items-start">
          <strong>Coinsurance Percentage:</strong>
          <span>50%</span>
        </div>

        {/* Waiting Period */}
        <div className="flex flex-col items-start">
          <strong>Waiting Period:</strong>
          <span>None</span>
        </div>

        {/* Deductible */}
        <div className="flex flex-col items-start">
          <strong>Deductible:</strong>
          <span>$0.00</span>
        </div>

        {/* Assignment of Benefits */}
        <div className="flex flex-col items-start">
          <strong>Assignment of Benefits:</strong>
          <span>Practice</span>
        </div>
      </div>
    </div>
  </div>
  )
}
