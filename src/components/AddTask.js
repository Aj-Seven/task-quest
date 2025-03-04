import React, { useState, useEffect } from "react";

const AddTask = ({ onAdd, mode }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [minDate, setMinDate] = useState(""); // State to hold minimum date and time

  useEffect(() => {
    // Get the current date and time
    const currentDate = new Date();

    // Adjusting current date and time to ensure we are not picking past times
    const formattedDate = currentDate.toISOString().slice(0, 16); // Extracts 'YYYY-MM-DDTHH:MM'
    setMinDate(formattedDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ taskName, taskDesc, dueDate, completed: false });
    setTaskName("");
    setTaskDesc("");
    setDueDate("");
  };

  // Function to format the date as DD/MM/YYYY HH:MM AM/PM
  const formatDate = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year} ${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  // Function to handle the due date change
  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setDueDate(formatDate(newDate)); // Store the formatted date
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-4 flex-col content-center"
    >
      <h1 className="text-2xl font-bold mb-1">{mode}</h1>

      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />

      <textarea
        placeholder="Task Description"
        value={taskDesc}
        onChange={(e) => setTaskDesc(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />

      <input
        type="datetime-local"
        value={new Date().toISOString().slice(0, 16)} // Set default datetime as current
        min={minDate} // Ensure the min date is the current date and time
        onChange={handleDateChange}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        {mode}
      </button>

      <div className="mt-4">
        <strong>Due Date: </strong>
        {dueDate}
      </div>
    </form>
  );
};

export default AddTask;
