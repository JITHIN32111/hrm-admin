import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import CustomDropdown from "../layout/CustomDropdown";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import Leaves from "../components/adminPannel/Leaves";
function AddLeave({ closeModal ,setShowLeaves}) {
  
  const [leaveTypes, setLeaveTypes] = useState([]); // State to store added leave types
  const [formValues, setFormValues] = useState({
    name: "",
    count: "",
    resetType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDropdownSelect = (value) => {
    setFormValues({ ...formValues, resetType: value });
  };

  const handleCreate = (e) => {
    

    e.preventDefault();
    if (formValues.name && formValues.count && formValues.resetType) {
      setLeaveTypes((prev) => [formValues, ...prev]); // Add to top of the list
      setFormValues({ name: "", count: "", resetType: formValues.resetType }); // Reset the form
    } else {
      alert("Please fill out all fields before creating a leave type.");
    }
  };
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(formValues);
  setShowLeaves(true)
  
}
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-2 sm:px-0">
        <div className="bg-white px-8 py-4 pb-12 rounded-lg shadow-lg w-full max-w-md sm:max-w-[474px] relative">
          {/* Close Button */}
          <button
            className="absolute top-4 border hover:bg-slate-50 rounded right-4 text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <IoIosClose size={20} />
          </button>

          {/* Title and Description */}
          <div className="flex items-center justify-center mb-6 mt-4">
            <div className="flex flex-col items-center">
              <h2 className="text-sub-heading2 xlx:text-[17px] font-semibold text-black">
                Add New Leave Type HRM system
              </h2>
              <p className="text-[#757575ED] text-smallHead xlx:text-[13px] flex flex-col justify-center items-center font-customBold3 pt-2">
                <span>Define and customize leave types for your</span>
                <span>organization</span>
              </p>
            </div>
          </div>

          {/* List of Added Leave Types */}
          <div className="mb-6 grid grid-cols-4 gap-x-2">
            {leaveTypes.map((leave, index) => (
              <div
                key={index}
                className="flex flex-row items-center bg-[#72A10F0F] justify-between border border-liteGreen rounded-full px-4 py-2 mb-2 w-[103px] h-[34px]"
              >
                <span
                  className="text-liteGreen text-sm truncate overflow-hidden whitespace-nowrap max-w-[70px]"
                  title={leave.name} // Show full text on hover
                >
                  {leave.name}
                </span>
                <button
                  className="text-liteGreen font-bold"
                  onClick={() =>
                    setLeaveTypes((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  <IoIosCloseCircle size={18} />
                </button>
              </div>
            ))}
          </div>


          {/* Form */}
          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            {/* Leave Type Name Input */}
            <div className="relative mt-4">
              <label
                htmlFor="name"
                className="block text-gray-900 text-xs mb-2 sm:text-sm font-medium"
              >
                Name of the leave type
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="w-full px-4 text-sm sm:py-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                placeholder="EX: casual leave"
              />
            </div>

            {/* Total Count Input */}
            <div className="relative mt-4">
              <label
                htmlFor="count"
                className="block text-gray-900 text-xs mb-2 sm:text-sm font-medium"
              >
                Total count
              </label>
              <input
                type="text"
                id="count"
                name="count"
                value={formValues.count}
                onChange={handleInputChange}
                className="w-full px-4 text-sm sm:py-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                placeholder="5 days"
              />
            </div>

            {/* Reset Type Dropdown */}
            <div className="relative mt-4">
              <label
                htmlFor="resetType"
                className="block text-gray-900 text-xs mb-2 sm:text-sm font-medium"
              >
                Leave types to reset
              </label>
              <CustomDropdown
                options={["Annually", "Monthly"]} // Pass options
                placeholder="Select Reset Type"
                onSelect={handleDropdownSelect}
              />
            </div>

            {/* Add Another Leave */}
            <span onClick={handleCreate} className="flex flex-row gap-x-1 items-center justify-start text-liteGreen cursor-pointer">
              <FiPlusCircle size={14} />
              <span className="text-smallHead xl:text-sm">
                Add another leave
              </span>
            </span>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6 pb-4">
              <button
                type="button"
                className="px-8 text-sm transition font-customBold duration-300 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-red-500 hover:text-white"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-10 transition text-sm duration-300 py-2 bg-[#022213] text-white rounded-md hover:bg-[#72A10F]"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddLeave;
