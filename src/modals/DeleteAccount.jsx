import React from "react";

function DeleteAccount({ closeModal }) {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white px-8 py-8 pb-14 rounded-lg shadow-lg w-full max-w-md relative">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>

          {/* Content */}
          <div className="flex flex-col gap-y-4">
            <h2 className="text-lg font-bold text-black">Delete Account</h2>
            <p className="text-sm text-gray-600 font-customBold2    ">
              Are you sure you want to delete this account? All related
              information, including tasks, events, and projects, will be
              permanently lost and cannot be recovered.
            </p>

            {/* Password Input */}
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 mt-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-liteGreen text-sm"
            />

            {/* Buttons */}
            <div className="flex justify-end gap-x-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md text-smallHead font-customBold hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded-md text-smallHead font-customBold     hover:bg-red-600"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
