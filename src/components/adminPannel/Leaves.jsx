import React, { useState } from "react";
import plus from '../../assets/plusIcon.png'

const LeaveTypeCard = () => {
  const [leaveTypes, setLeaveTypes] = useState([
    { name: "Sick Leave", days: "5Days", cycle: "Monthly", active: true },
    { name: "Casual Leave", days: "5Days", cycle: "Monthly", active: false },
    { name: "Annual Leave", days: "5Days", cycle: "Monthly", active: true },
  ]);

  const toggleActive = (index) => {
    setLeaveTypes((prev) =>
      prev.map((leave, i) =>
        i === index ? { ...leave, active: !leave.active } : leave
      )
    );
  };

  return (
    <div className="px-6 pt-4">
      <div className="flex justify-end mb-8">
        <button className="flex gap-x-1 w-2/7 items-center px-4 py-2 bg-[#022213] text-white rounded-md hover:bg-liteGreen transition-all text-smallHead font-customBold">
          <img src={plus} alt="" /> Add new leave type
        </button>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {leaveTypes.map((leave, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 bg-white flex flex-col  space-y-2"
          >
            <div className="flex justify-between items-center w-full">
              <h3
                className={`text-[22px] font-customBold ${
                  leave.active ? "text-black" : "text-gray-400"
                }`}
              >
                {leave.name}
              </h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={leave.active}
                  onChange={() => toggleActive(index)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#022213]"></div>
                <div
                  className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 peer-checked:translate-x-5"
                ></div>
              </label>
            </div>

            <div className="text-sm text-gray-600 flex flex-row pt-3">
              <p className="flex flex-col gap-y-2   ">
                <span className={`font-customBold text-smallHead xl:text-sm mr-8 ${
                  leave.active ? "text-customeGray2" : "text-gray-400"}`}>Allowed days: </span>
                <span className={`${
                  leave.active ? "text-black" : "text-gray-400"} text-sub-heading2 font-customBold`}>{leave.days}</span>
                
              </p>
              <p className="flex flex-col gap-y-2   ">
                <span className={`font-semibold ${
                  leave.active ? "text-customeGray2" : "text-gray-400"}`}>Leave cycle: </span>
                <span className={`${
                  leave.active ? "text-black" : "text-gray-400"} text-sub-heading2 font-customBold`}>{leave.cycle}</span>
              </p>
            </div>

            <div className="flex flex-row space-x-2 pt-4 justify-end items-end">
              <button
                className={`px-4 py-1 rounded-md text-sm font-medium ${
                  leave.active
                    ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!leave.active}
              >
                Edit
              </button>
              <button
                className={`px-4 py-1 rounded-md text-sm font-medium ${
                  leave.active
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!leave.active}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveTypeCard;
