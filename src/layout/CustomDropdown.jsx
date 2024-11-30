import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CustomDropdown = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Pass the selected option back to the parent
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center cursor-pointer text-sm"
      >
        <span className="text-gray-800">
          {selectedOption || placeholder || "Select an option"}
        </span>
        {isOpen ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-liteGreen cursor-pointer text-sm text-gray-800 hover:text-white"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
