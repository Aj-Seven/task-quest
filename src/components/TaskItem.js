const TaskItem = ({ task, onDelete, onComplete, onEdit, priority }) => {
  // Apply background color based on priority
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "bg-gradient-to-r from-red-100 to-red-500";
      case "Medium":
        return "bg-gradient-to-r from-yellow-100 to-yellow-500";
      case "Low":
        return "bg-gradient-to-r from-green-100 to-green-500";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-500";
    }
  };

  return (
    <div
      className={`flex justify-between items-center flex-column flex-wrap rounded-md border border-gray-400 ${getPriorityClass(
        priority
      )} p-4 m-2`}
    >
      <div className="flex flex-col w-full overflow-auto break-words">
        <h3
          className={`font-bold ${
            task.completed ? "line-through text-gray-400" : "text-black"
          }`}
        >
          {task.taskName}
        </h3>
        <p
          className={`text-xl ${
            task.completed ? " line-through text-gray-400" : "text-black"
          }`}
        >
          {task.taskDesc}
        </p>
        <span
          className={`text-md ${
            task.completed ? "line-through text-gray-400" : "text-black"
          }`}
        >
          Due: {task.dueDate}
        </span>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => onComplete(task)}
          className="text-green-500 hover:text-green-700"
        >
          Complete
        </button>
        <button
          onClick={() => onEdit(task)}
          className="text-cyan-500 hover:text-cyan-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
