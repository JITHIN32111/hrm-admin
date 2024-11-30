import React, { useState } from "react";
import img from '../../assets/Group.png'
import plus from '../../assets/plusIcon.png'
import folder from '../../assets/Folder_empty.png'
import AddDepartment from "../../modals/AddDepartment";
import EditDepartment from "../../modals/EditDepartment";
import DeleteModal from "../../modals/DeleteModal";
import CustomDropdown from "../../layout/CustomDropdown";
function Department() {
    const [showDep, setShowDep] = useState(true)
    const [open, setOpen] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const modal = 'department'

    const closeModal = () => {
        setOpen(false)
    }
    const closeEditModal = () => {
        setEditModal(false)
    }
    const closeDeleteModal = () => {
        setDeleteModal(false)
    }
    if (showDep) {
        return (
            <div className="flex flex-col justify-center pb-18 items-center h-full mx-auto gap-y-4">
                <img src={folder} alt="" />
                <span className="flex flex-col gap-y-2   text-sm xlx:text-[16px] justify-center items-center text-center">
                    <p>No records available for this department</p>
                    <p className="text-smallHead xlx:text-sm">It seems there are no tickets or data associated with this department yet</p>
                </span>
                <button onClick={() => setShowDep(false)} className="bg-customGreen flex justify-center items-center text-white rounded-lg px-3 py-2 text-smallHead w-[151px] h-[40px] hover:bg-liteGreen transition-all">
                    <img src={plus} alt="" />
                    <span className="pl-1" >Add Department</span>

                </button>
            </div>
        );
    }

    return (




        <div className="p-5 mt-3">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-4 px-2">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search Department"
                    className="w-1/3 lg:w-[328px] h-[42px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none  focus:border-gray-300"
                />


                {/* Add Department Button */}
                <button onClick={() => setOpen(true)} className="bg-customGreen flex justify-center items-center text-white rounded-lg px-3 py-2 text-smallHead w-[151px] h-[40px] hover:bg-liteGreen transition-all">
                    <img src={plus} alt="" />
                    <span className="pl-1">Add Department</span>

                </button>
            </div>

            {/* Grid of Departments */}
            <div className="grid grid-cols-2 pt-2 lg:grid-cols-3 xlss:grid-cols-4 gap-x-6 sm:gap-x-10 xlx:gap-x-[80px] xlss:gap-x-16 gap-y-10 px-2">
                {Array(9)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="border h-[100px] sm:h-[120px]  border-gray-200 rounded-lg p- bg-white flex flex-col justify-center"
                        >
                            <div className="flex flex-row pl-2 sm:pl-4 xl:pl-8 gap-x-0 sm:gap-x-2 xl:gap-x-4 xlx:gap-x-3 items-start">
                                <div className="w-10 h-10 xl:w-[64px] xl:h-[64px] xlx:w-[50px] xlx:h-[50px] bg-[#EEF7EF] rounded-full flex items-center justify-center">
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-[14px] h-[14px] xl:w-[30px] xl:h-[30px] xlx:w-[26px] xlx:h-[26px] object-contain" // Ensures the image fits well inside the container    
                                    />
                                </div>

                                {/* Department Name */}
                                <div className="flex flex-col gap-y-1">
                                    <h3 className="text-[#00000080] font-customBold3 text-sm sm:text-sub-heading  sm:mb-2 pl-2 sm:pl-0">
                                        {index === 3 ? "IT Management" : index === 9 ? "Marketing" : "Web Development"}
                                        {/* <span className="block text-smallHead xlx:text-[13px] font-customBold3" >web Development</span> */}
                                    </h3>

                                    {/* Buttons */}

                                </div>
                            </div>

                            <div className="flex justify-end space-x-2 pr-2">
                                <button onClick={() => setEditModal(true)} className="text-[#CCA300] bg-[#FFF7E6] rounded-full px-4 py-1 text-xs font-medium hover:bg-yellow-200">
                                    Edit
                                </button>
                                <button onClick={() => setDeleteModal(true)} className="text-[#CC0000] bg-[#FAEDEF] rounded-full px-4     py-1 text-xs font-medium hover:bg-red-200">
                                    Delete
                                </button>
                            </div>

                        </div>
                    ))}
            </div>
            <div className="flex justify-end items-center mt-4 space-x-2 text-smallHead xlx:text-sm">
                {/* Previous button */}
                <button className="text-[#9E9E9E] py-2 px-3 rounded-lg hover:text-gray-700 font-customBold3">
                    Previous
                </button>

                {/* Page numbers */}
                <button className="py-2 px-4 rounded-lg bg-[#72A10F] text-white">1</button>
                <button className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700">2</button>
                <button className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700">3</button>

                {/* Next button */}
                <button className="text-[#9E9E9E] py-2 px-3 rounded-lg hover:text-gray-700 font-customBold3">
                    Next
                </button>
            </div>
            {open && <AddDepartment closeModal={closeModal} model={modal} />}
            {editModal && <EditDepartment closeEditModal={closeEditModal} model={modal} />}
            {deleteModal && <DeleteModal closeDeleteModal={closeDeleteModal} model={modal} />}

        </div>
    );
}

export default Department;





;
