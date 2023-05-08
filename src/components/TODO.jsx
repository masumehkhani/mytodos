import React from 'react'

const TODO = (props) => {
  return (
    <div className="w-full p-10 h-screen bg-[#cafafe]">
      <h1 className="text-5xl font-bold mb-10 text-[rgb(51,51,51)]">
        My ToDo!
      </h1>
      <div className="todo-container  bg-[#3feee6] border rounded-xl border-[#ccc] w-1/3 my-18 p-6">
        <h2 className="text-3xl mb-10">{props.title}</h2>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TODO
