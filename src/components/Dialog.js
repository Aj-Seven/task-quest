import React from "react";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-2 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left border border-gray-400 p-1 shadow-md transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="absolute top-0 right-0 pt-0 pr-0">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3.5 py-2 text-md font-bold text-red-500 ring-2 shadow-xs ring-gray-300 ring-inset hover:text-red-600 hover:bg-gray-100"
                onClick={onClose}
              >
                X
              </button>
            </div>
            <div className="pb-4 sm:p-6 sm:pb-4">{children}</div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
