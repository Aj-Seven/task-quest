import { useState } from "react";
import TaskItem from "./TaskItem";
import Dialog from "./Dialog";

const TaskList = ({ tasks, onDelete, onComplete, onEdit }) => {
  const [filterPriority, setFilterPriority] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sorting logic based on priority
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = ["Low", "Medium", "High"];
    return (
      priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );
  });

  // Filter tasks based on selected priority
  const filteredTasks = filterPriority
    ? sortedTasks.filter((task) => task.priority === filterPriority)
    : sortedTasks;

  // Separate completed and incomplete tasks
  const incompleteTasks = filteredTasks.filter((task) => !task.completed);
  const completedTasks = filteredTasks.filter((task) => task.completed);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto flex bg-white border border-gray-300 rounded-lg shadow-sm flex-col content-center mt-2 p-2">
      <h1 className="text-2xl font-bold ml-1 border-b-2 border-blue-500">
        Task List
      </h1>

      {/* Filter for task priority */}
      <div className="mt-2">
        <label
          htmlFor="priorityFilter"
          className="mr-1 text-md underline font-semibold"
        >
          Filter by Priority:
        </label>
        <select
          id="priorityFilter"
          className={`border border-gray-300 rounded-md p-1 ${
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
        <button
          onClick={() => setIsDialogOpen(true)}
          className="w-auto p-2 ml-0.5 mt-1.5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Completed Tasks
        </button>
      </div>

      {/* Incomplete Tasks */}
      <div className="mt-1">
        {incompleteTasks.length > 0 && (
          <h1 className="text-xl font-bold"> Active Tasks </h1>
        )}
        {incompleteTasks.length > 0 ? (
          incompleteTasks.map((task) => (
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
          <p className="text-center text-gray-500 p-4">
            No Active tasks available. Try Adding...
          </p>
        )}
      </div>

      {/* Completed Tasks Dialog Section */}
      {completedTasks.length > 0 ? (
        <div className="mt-4">
          <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
            <div className="mt-10 overflow-auto h-80">
              {completedTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDelete={onDelete}
                  onComplete={onComplete}
                  onEdit={onEdit}
                  priority={task.priority}
                />
              ))}
            </div>
          </Dialog>
        </div>
      ) : (
        <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl mt-12 p-10"> List is Empty </h1>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default TaskList;
