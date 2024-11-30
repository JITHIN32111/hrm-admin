import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import uploadImg from "../assets/upload.png";

function Upload({ closeModal, updateProfileImage }) {
  const [isUploading, setIsUploading] = useState(false); // Track upload status

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true); // Show loader

      // Simulate upload delay
      setTimeout(() => {
        setIsUploading(false); // Hide loader
        updateProfileImage(file); // Update the profile image in the parent component

        closeModal(); // Close the modal
      }, 2000); // Simulate a 2-second upload
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4">
      <div className="bg-white px-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg py-16 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 border hover:bg-slate-50 rounded right-4 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          <IoIosClose size={20} />
        </button>

        {/* Upload Section */}
        <div className="flex flex-col justify-center items-center gap-y-5">
          {/* Loader */}
          {isUploading ? (
            <div className="flex flex-col items-center gap-y-3">
              <div className="w-10 h-10 border-4 border-t-green-500 border-gray-300 rounded-full animate-spin"></div>
              <span className="text-sm font-customBold3 text-gray-500">
                Uploading...
              </span>
            </div>
          ) : (
            <>
              <label
                htmlFor="file-upload"
                className="w-10 h-10 cursor-pointer rounded-full bg-[#D8F3DC] flex items-center justify-center"
              >
                <img src={uploadImg} alt="Upload" className="w-[24px] h-[24px]" />
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*" // Allow only image files
                onChange={handleFileChange}
                className="hidden" // Hide default file input
              />
              <span className="font-bold text-[18px] text-black">
                Click to Upload
              </span>
              <span className="text-sm font-customBold3 text-black">
                SVG, PNG, JPG, or GIF (max 800x400px)
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upload;
