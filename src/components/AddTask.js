import React, { useState, useEffect } from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment"; // Import Moment.js

const AddTask = ({
  onAdd,
  onUpdate,
  mode,
  taskName: initTaskName,
  taskDesc: initTaskDesc,
  dueDate: initDueDate,
  taskId,
  onSubmit,
}) => {
  const [taskName, setTaskName] = useState(initTaskName);
  const [taskDesc, setTaskDesc] = useState(initTaskDesc);
  const [dueDate, setDueDate] = useState(initDueDate);
  const [priority, setPriority] = useState("Low");
  const [minDate, setMinDate] = useState(null);

  // Use effect to set the minimum date for task due date (current date)
  useEffect(() => {
    setMinDate(moment().startOf("day"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = { taskName, taskDesc, dueDate, completed: false, priority };

    if (mode === "Edit Task") {
      onUpdate({ ...task, id: taskId });
    } else {
      onAdd(task);
    }

    setTaskName(""); // Reset input fields after submit
    setTaskDesc("");
    setDueDate("");
  };

  const handleTimeChange = (newTime) => {
    if (moment(newTime).isValid()) {
      // Format and store the date and time in the format: "MMMM D, YYYY hh:mm A"
      setDueDate(moment(newTime).format("MMMM D, YYYY hh:mm A"));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTimeout(() => {
          handleSubmit(e);
          onSubmit(e);
        }, 500);
      }}
      className="max-w-2xl mx-auto bg-white p-4 flex-col content-center"
    >
      <h1 className="text-2xl font-bold mb-2">{mode}</h1>

      <input
        type="text"
        placeholder="Enter Task Name"
        value={taskName}
        required
        onChange={(e) => setTaskName(e.target.value)}
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />

      <textarea
        placeholder="Enter Task Description"
        value={taskDesc}
        required
        onChange={(e) => setTaskDesc(e.target.value)}
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />

      {/* React Datetime Picker */}
      <label htmlFor="dueDate" className="block mb-2">
        Select Due Date & Time:
      </label>
      <Datetime
        value={dueDate ? moment(dueDate, "MMMM D, YYYY hh:mm A") : null} // Convert dueDate string back to Moment object
        onChange={handleTimeChange}
        dateFormat="MMMM D, YYYY"
        timeFormat="hh:mm A"
        minDate={minDate} // Ensure minDate is set to today's date (from midnight)
        className="w-full h-10 mb-4 p-2 border border-gray-300 rounded"
      />

      {/* Priority */}
      <label className="block mb-2" htmlFor="priority">
        Set Priority:
      </label>
      <select
        id="priority"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        {mode}
      </button>

      <div className="mt-4">
        <strong>Due Date & Time: </strong>
        {dueDate}
      </div>
    </form>
  );
};

export default AddTask;
