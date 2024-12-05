import React, { useState } from "react";
import AccountSettings from "./AccountSettings";
import CompanySettings from "./CompanySettings";
import BillingDetails from './Billing'
import PasswordChange from "./PasswordChange";
import LeaveSettings from "./LeaveSettings";
// Subcomponents for each tab
const TrackSettings = () => <div>Track Settings Component</div>;


function Settings() {
  const [activeTab, setActiveTab] = useState("Account Settings");

  const tabs = [
    { name: "Account Settings", component: <AccountSettings /> },
    { name: "Track Settings", component: <TrackSettings /> },
    { name: "Password", component: <PasswordChange /> },
    { name: "Company Settings", component: <CompanySettings /> },
    { name: "Billing Details", component: <BillingDetails /> },
    { name: "Leave settings", component: <LeaveSettings /> },

  ];

  return (
   
<div className="pt-6">
  {/* Tabs Navigation */}
  <div className="flex border-b-2 pb-2 w-full relative text-[11px] sm:text-smallHead xlx:text-[13px]">
    {tabs.map((tab) => (
      <button
        key={tab.name}
        onClick={() => setActiveTab(tab.name)}
        className={`pl-2 md:pl-8  font-medium relative ${
          activeTab === tab.name
            ? "text-liteGreen"
            : "text-gray-600"
        } hover:text-liteGreen`}
      >
        
        {tab.name}
        {activeTab === tab.name && (
          <span className="absolute ml-1 md:ml-3.5 bottom-[-9px] left-1/2 transform -translate-x-1/2 h-[2.5px] w-[70%] bg-liteGreen"></span>
        )}
      </button>
    ))}
  </div>

  {/* Display Active Component */}
  <div className="mt-6 px-8">{tabs.find((tab) => tab.name === activeTab)?.component}</div>
</div>



   
  );
}

export default Settings;
