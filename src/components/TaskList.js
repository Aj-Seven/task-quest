import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onComplete, onEdit, priority }) => {
  const [filterPriority, setFilterPriority] = useState("");

  // Sorting logic based on priority
  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = ["Low", "Medium", "High"];
    return (
      priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );
  });

  // Filter tasks based on selected priority
  const filteredTasks = filterPriority
    ? sortedTasks.filter((task) => task.priority === filterPriority)
    : sortedTasks;

  return (
    <div className="max-w-2xl mx-auto flex bg-white border border-gray-300 rounded-lg shadow-sm flex-col content-center mt-2 p-2">
      <h1 className="text-2xl font-bold ml-1 border-b-2 border-blue-500">
        {" "}
        Task List
      </h1>

      {/* Filter for task priority */}
      <div className="mt-2">
        <label htmlFor="priorityFilter" className="mr-2">
          Filter by Priority:
        </label>
        <select
          id="priorityFilter"
          className={`border p-2 ${
            filterPriority ? "bg-blue-100" : "bg-white"
          }`}
          onChange={(e) => setFilterPriority(e.target.value)}
          value={filterPriority}
        >
          <option value="">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div>
        {filteredTasks && filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
              onEdit={onEdit}
              priority={task.priority}
            />
          ))
        ) : (
          <p> Empty, Try Adding Task </p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
