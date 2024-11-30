import React from 'react'
import deleteImg from '../assets/Delete.png'
import { IoIosClose } from "react-icons/io";

function DeleteModal({closeDeleteModal,model}) {
  const title =model==='department'?'Department':'Designation'
  return (
    <div>
     
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg max-w-2xl py-8 px-8 sm:px-14">
              {/* <button
     
              onClick={closeDeleteModal} className="absolute top-2 right-2 text-2xl rounded-md border-2 border-gray-300 text-gray-600 hover:text-gray-900 cursor-pointer">
                <IoIosClose />
              </button> */}

              {/* Delete Confirmation */}
              <div className="flex flex-col items-center">
              <span className="w-22 h-22 rounded-full mb-2 bg-[#EEF7EF] p-2 text-[#72A10F]">
               <img src={deleteImg} alt="" />
              </span>
                <div className="justify-center items-center text-center">
                  <p className="text-[24px] font-semibold text-gray-900">Delete {title}</p>
                  <p className="mt-4 text-gray-700 text-sm font-customBold2">Are you sure you want to remove this {title}?</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-x-6 mt-8 text-base">
              <button onClick={closeDeleteModal} className="bg-[#E8E8E8] w-[151px] text-smallHead xlx:text-sm font-semibold border py-2 text-gray-900 rounded-lg hover:bg-red-600 hover:text-white transition duration-300">
                  Cancel
                </button>
              <button  className="bg-[#022213] w-[151px] text-smallHead xlx:text-sm font-semibold text-white py-2 rounded-lg hover:bg-[#72A10F] transition duration-300">
                  Delete
                </button>
               
               
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default DeleteModal
