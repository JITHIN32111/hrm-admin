import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordChange() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className=" w-full lg:pr-32 mt-10 flex flex-col justify-start items-center">
      {/* Title */}
      <h1 className="text-sub-heading font-customBold text-gray-900 mb-2">Password</h1>
      <p className="text-smallHead xlx:text-sm text-customeGray2 mb-6 font-customBold">
        Please enter your current password to change your password.
      </p>

      {/* Current Password */}
      <div className="mb-5">
        <label className="block text-sm font-customBold text-[#121212] mb-2">
          Current password
        </label>
        <div className="relative">
          <input
            type={showPassword.current ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={() => togglePasswordVisibility("current")}
          >
            {showPassword.current ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="mb-5">
        <label className="block text-sm font-customBold text-[#121212] mb-2">
          New password
        </label>
        <div className="relative">
          <input
            type={showPassword.new ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={() => togglePasswordVisibility("new")}
          >
            {showPassword.new ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Your new password must be more than 8 characters.
        </p>
      </div>

      {/* Confirm Password */}
      <div className="mb-5">
        <label className="block text-sm font-customBold text-[#121212] mb-2">
          Confirm new password
        </label>
        <div className="relative">
          <input
            type={showPassword.confirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={() => togglePasswordVisibility("confirm")}
          >
            {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-x-2 mt-6">
        <button
          type="button"
          className="px-6 py-2 text-sm bg-[#D9D9D9] text-[#121212] rounded-md hover:bg-red-500 hover:text-white transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 text-sm bg-customGreen text-white rounded-md hover:bg-liteGreen transition-all"
        >
          Update password
        </button>
      </div>
    </div>
  );
}

export default PasswordChange;

 
