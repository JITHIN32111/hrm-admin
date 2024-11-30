import React from "react";
import { IoIosClose } from "react-icons/io";
import { RiApps2Fill } from "react-icons/ri";
import img from '../assets/Group.png'
import CustomDropdown from "../layout/CustomDropdown";
function AddDepartment({ closeModal, model }) {
  const title = model === 'department' ? 'Department' : 'Designation'

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
        <div className="bg-white px-8 py-4 pb-12 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg  relative">
          {/* Close Button */}
          <button
            className="absolute top-4 border hover:bg-slate-50 rounded right-4 text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <IoIosClose size={20} />
          </button>

          {/* Title and Description */}
          <div className="flex items-center mb-6 mt-4">
            <div className="w-10 h-10 rounded-full bg-[#D8F3DC] flex items-center justify-center mr-4">
              <img src={img} alt="" className="w-[24px] h-[24px]" />
            </div>
            <div>
              <h2 className="text-sub-heading2 xlx:text-[17px] font-semibold text-black">Add {title}</h2>
              <p className="text-[#757575ED] text-smallHead xlx:text-[13px]">
                Add a {title} to get started!
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-3 sm:space-y-4 mt-12">
            {/* Department Name Input */}
            <div className="relative mt-4">
              <label htmlFor="departmentName" className="block text-gray-900 text-xs mb-2 sm:text-sm font-medium">
                {title} Name
              </label>
              <input
                type="text"
                id="departmentName"
                className="w-full px-4 text-sm sm:py-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter department name"
              />
            </div>
            {model === "designation" && (
              <div className="relative mt-4">
                <label
                  htmlFor="departmentDropdown"
                  className="block text-gray-900 text-xs mb-2 sm:text-sm font-medium"
                >
                  Department
                </label>
                <CustomDropdown
                  options={["IT", "Marketing", "Finance", "HR"]} // Pass your department list here
                  placeholder="Select Department"
                  onSelect={(selected) => console.log("Selected Department:", selected)} // Handle selection
                />
              </div>
            )}


            {/* Action Buttons */}
            <div className="flex  space-x-4 pt-6 pb-4">
              <button
                type="button"
                className="px-10 w-1/2 text-sm transition duration-300 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-red-500 hover:text-white"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-10 w-1/2 transition text-sm duration-300 py-2 bg-[#022213] text-white rounded-md hover:bg-[#72A10F]"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDepartment;
