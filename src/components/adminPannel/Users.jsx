import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import EmployeeCards from "./EmployeeCards";
const Users = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState("");

  const handleDropdownSelect = (value) => {
    setSelectedDropdownOption(value);
    setIsDropdownOpen(false);
    // You can perform additional actions with the selected value here
  };

  const employees = [
    {
      id: 1,
      name: "Ameera Jo",
      role: "Full stack developer",
      idNumber: "33441",
      location: "New York",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "John Smith",
      role: "UI/UX Designer",
      idNumber: "22331",
      location: "California",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Mary Jane",
      role: "Backend Developer",
      idNumber: "55422",
      location: "Texas",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Michael Lee",
      role: "QA Engineer",
      idNumber: "77441",
      location: "Florida",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Michael Lee",
      role: "QA Engineer",
      idNumber: "77441",
      location: "Florida",
      image: "https://via.placeholder.com/100",
    },   {
      id: 6,
      name: "Michael Lee",
      role: "QA Engineer",
      idNumber: "77441",
      location: "Florida",
      image: "https://via.placeholder.com/100",
    },
    // Add more employees as needed
  ];
  const dropdownOptions = ["Developer", "Staff"];

  return (
    <div className="p-6">
      {/* Search Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Employee ID"
          className="border h-[39px] border-gray-300 rounded-lg p-2 pt-1 w-[100px] md:w-[120px] lg:w-[200px] focus:outline-none placeholder:font-customBold placeholder:text-[#BDBDBD]"
        />
        <input
          type="text"
          placeholder="Employee Name"
          className="border h-[39px] border-gray-300 rounded-lg p-2 pt-1 w-[100px] md:w-[120px] lg:w-[200px]  focus:outline-none placeholder:font-customBold placeholder:text-[#BDBDBD]"
        />

        <div className="relative w-[110px] md:w-[130px] lg:w-[150px] xl:w-[217px] h-[40px] pt-0.5">
          {/* Dropdown */}
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center cursor-pointer text-sm"
          >
            <span className="text-[#BDBDBD] font-customBold ">
              {selectedDropdownOption || " Designation"}
            </span>
            {isDropdownOpen ? <IoIosArrowUp size={16} className="text-gray-500" /> : <IoIosArrowDown size={16} className="text-gray-500" />}
          </div>

          {/* Dropdown Options */}
          {isDropdownOpen && (
            <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {dropdownOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleDropdownSelect(option)}
                  className="px-4 py-2 font-customBold3  hover:bg-liteGreen cursor-pointer text-sm text-gray-800 hover:text-white"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className=" w-[70px] sm:w-[80px] lg:w-[132px]">
        <button className=" px-2 w-full  lg:mr-1 h-[38px] text-smallHead xl:text-sm bg-customGreen text-white rounded-lg hover:bg-liteGreen transition-all">
          Search
        </button>
        </div>
    
        
       
        {/* <span className="flex justify-center shadow-sm text-white bg-liteGreen items-center h-[39px] px-1 rounded-lg  border  border-gray-200"> 
        <RiSearch2Line size={20}/>

        </span> */}
      </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xlx:gap-12 pt-4">
        {employees.map((employee) => (
          <EmployeeCards key={employee.id} employee={employee} />
        ))}
      </div>
      {/* Employee Cards */}

    </div>
  );
};

export default Users;
