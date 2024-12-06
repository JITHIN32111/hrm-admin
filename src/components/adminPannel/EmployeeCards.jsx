import React, { useState, useRef } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import location from '../../assets/building.png';
import EmployeeId from '../../assets/tag-user.png';
import user from '../../assets/Ellipse 453.png';
import more from '../../assets/more-circle.png';
import useClickOutside from '../../customHooks/useClickOutside'; // Import the custom hook
import DeleteModal from "../../modals/DeleteModal";
const EmployeeCards = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const menuRef = useRef(null);

  // Use custom hook to detect outside clicks
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDelete=()=>{
    setDeleteModal(true)
  }
  console.log(deleteModal);
  
const closeModal=()=>{
  setDeleteModal(false)
}
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 pt-6 w-full xlx:w-full relative">
      {/* Action Menu */}
      <div className="absolute top-3 right-3">
        <div className="relative" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800"
          >
            <img src={more} alt="More" />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-0 w-[120px] bg-white border border-gray-200 rounded-md shadow-md z-10">
              <div
                onClick={() => alert("Edit action")}
                className="flex items-center px-4 py-2 text-smallHead xlx:text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                <MdEdit className="mr-2 text-gray-600" />
                Edit
              </div>
              <div
                onClick={() => handleDelete()}
                className="flex items-center px-4 py-2 text-smallHead xlx:text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
              >
                <MdDelete className="mr-2" />
                Delete
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src={user}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
        />
      </div>

      {/* Employee Details */}
      <div className="text-center mt-4">
        <h3 className="text-sub-heading2 xlx:text-lg font-customBold text-black">Ameera Jo</h3>
        <p className="text-customeGray2 text-smallHead xlx:text-sm font-customBold3 pt-3">
          Full stack developer
        </p>
      </div>

      {/* Additional Details */}
      <div className="mt-4 flex justify-center gap-6 text-black">
        <div className="flex items-center text-smallHead xlx:text-sm font-customBold3">
          <span className="material-icons-outlined mr-1 text-black">
            <img src={EmployeeId} alt="ID" />
          </span>
          33441
        </div>
        <div className="flex items-center text-smallHead xlx:text-sm font-customBold3 text-black">
          <span className="material-icons-outlined mr-1 text-black">
            <img src={location} alt="Location" />
          </span>
          New York
        </div>
      </div>

      {/* View Profile Button */}
      <div className="mt-6">
        <button className="w-full font-customBold py-2 text-smallHead xlx:text-sm bg-customGreen text-white text-sm rounded-md hover:bg-liteGreen transition-all duration-300">
          View profile
        </button>
      </div>
      {deleteModal && <DeleteModal model={'user'} closeDeleteModal={closeModal}/>}
    </div>
  );
};

export default EmployeeCards;
