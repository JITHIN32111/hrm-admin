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
    }, {
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




// import React from "react";

// const ProfilePage = () => {
//   return (
//     <div className="flex flex-col lg:flex-row gap-6 bg-gray-50 p-8">
//       {/* Left Section */}
//       <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-6">
//         {/* Header Section */}
//         <div className="flex items-center gap-6">
//           <img
//             src="https://via.placeholder.com/100"
//             alt="Profile"
//             className="rounded-full w-24 h-24"
//           />
//           <div>
//             <h2 className="text-2xl font-bold">Charlotte</h2>
//             <p className="text-gray-600">Human Resources</p>
//             <p className="text-gray-600">charlotte99@gmail.com</p>
//             <button className="mt-2 text-sm text-white bg-customGreen px-4 py-1 rounded-md hover:bg-liteGreen">
//               Upload Photo
//             </button>
//           </div>
//         </div>

//         <hr className="my-6" />

//         {/* Personal Information */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">Personal Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <p>
//               <span className="font-medium">Name:</span> charlotte99@gmail.com
//             </p>
//             <p>
//               <span className="font-medium">City State:</span> New York
//             </p>
//             <p>
//               <span className="font-medium">Department:</span> Human Resources
//             </p>
//             <p>
//               <span className="font-medium">Address:</span> 244 Market Street,
//               Suite 900
//             </p>
//             <p>
//               <span className="font-medium">Employee ID:</span> URTHR8999
//             </p>
//             <p>
//               <span className="font-medium">Phone:</span> (897) 333-543
//             </p>
//           </div>
//           <button className="mt-4 text-sm text-white bg-customGreen px-4 py-1 rounded-md hover:bg-liteGreen">
//             Edit
//           </button>
//         </div>

//         <hr className="my-6" />

//         {/* Education & Experience */}
//         <div className="flex flex-col gap-6">
//           {/* Education */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Education</h3>
//             <ul className="list-disc list-inside">
//               <li>
//                 <p className="font-medium">
//                   International College of Arts and Science (UG)
//                 </p>
//                 <p className="text-gray-600 text-sm">BSc Computer Science</p>
//                 <p className="text-gray-600 text-sm">2000-2003</p>
//               </li>
//             </ul>
//             <button className="mt-4 text-sm text-white bg-customGreen px-4 py-1 rounded-md hover:bg-liteGreen">
//               Edit
//             </button>
//           </div>

//           {/* Experience */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Experience</h3>
//             <ul className="list-disc list-inside">
//               <li>
//                 <p className="font-medium">
//                   Web Designer at Zen Corporation
//                 </p>
//                 <p className="text-gray-600 text-sm">Jan 2013 - Dec 2018</p>
//               </li>
//             </ul>
//             <button className="mt-4 text-sm text-white bg-customGreen px-4 py-1 rounded-md hover:bg-liteGreen">
//               Edit
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/4 flex flex-col gap-6">
//         {/* Profile Completion */}
//         <div className="bg-white rounded-lg shadow-md p-6 text-center">
//           <h3 className="text-lg font-bold">Complete Your Profile</h3>
//           <div className="relative w-24 h-24 mx-auto my-4">
//             <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="45"
//                 stroke="#e5e5e5"
//                 strokeWidth="10"
//                 fill="none"
//               />
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="45"
//                 stroke="#34d399"
//                 strokeWidth="10"
//                 strokeDasharray="282.743"
//                 strokeDashoffset="85"
//                 fill="none"
//               />
//             </svg>
//             <p className="absolute inset-0 flex items-center justify-center text-xl font-bold">
//               70%
//             </p>
//           </div>
//           <ul className="space-y-2 text-left text-sm">
//             <li className="text-gray-600">✔️ Setup Account</li>
//             <li className="text-gray-600">✔️ Upload Your Photo</li>
//             <li className="text-gray-600">✔️ Personal Info</li>
//             <li className="text-gray-600">✔️ Education & Experience</li>
//           </ul>
//         </div>

//         {/* Delete Account */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-lg font-bold mb-4">Delete Employee Account</h3>
//           <p className="text-sm text-gray-600 mb-4">
//             Are you sure you want to delete this employee's account? This action
//             is permanent and cannot be undone.
//           </p>
//           <button className="text-sm text-white bg-red-500 px-6 py-2 rounded-md hover:bg-red-600">
//             Delete Account
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
