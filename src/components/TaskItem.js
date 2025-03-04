const TaskItem = ({ task, onDelete, onComplete, onEdit }) => {
  return (
    <div className="flex justify-between items-center flex-column flex-wrap py-3 bg-white mb-4 border-b border-gray-300">
      <div>
        <h3
          className={`font-bold ${
            task.completed ? "line-through text-gray-400" : "text-black"
          }`}
        >
          {task.taskName}
        </h3>
        <p
          className={`text-sm ${
            task.completed ? "text-gray-500" : "text-gray-700"
          }`}
        >
          {task.taskDesc}
        </p>
        <span
          className={`text-xs ${
            task.completed ? "text-gray-400" : "text-gray-600"
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
          className="text-yellow-500 hover:text-yellow-700"
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
