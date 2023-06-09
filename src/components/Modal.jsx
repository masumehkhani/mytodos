import React from "react";

const Modal = ({ onCancel, onConfirm }) => {
  const deleteHandler = () => {
    onCancel();
  };
  const confirmlHandler = () => {
    onConfirm();
  };
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded z-10 bg-[#f5f2f4] sm:w-full md:w-auto">
      <p className="w-full p-6 text-center text-lg sm:text-xl">Are you sure?</p>
      <button
        onClick={deleteHandler}
        type="button"
        class="inline-block rounded bg-[#c65032] mx-2 px-6 pb-2 pt-2.5 text-xs sm:text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Confirm
      </button>
      <button
        onClick={confirmlHandler}
        type="button"
        class="inline-block rounded border-[#c65032] mx-2 px-6 pb-2 pt-2.5 text-xs sm:text-sm font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      >
        Cancel
      </button>
    </div>
  );
};

export default Modal;
