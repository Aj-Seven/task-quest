import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Dialog from "./components/Dialog";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mode, setMode] = useState("Add Task");

  const addTask = (task) => {
    const newTasks = [...tasks, { ...task, id: tasks.length + 1 }];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const completeTask = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, ...task } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setMode("Edit Task");
    setTasks(tasks);
    setIsDialogOpen(true);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-1">
      <h2 className="text-center text-2xl font-bold">Task Manager</h2>
      <button
        onClick={() => {
          openDialog();
          setMode("Add Task");
        }}
        className="fixed bottom-0 right-2 m-4 rounded bg-blue-500 text-white p-2"
      >
        Add Task +
      </button>

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={completeTask}
        onEdit={editTask}
      />

      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <AddTask onAdd={addTask} mode={mode} />
      </Dialog>
    </div>
  );
};

export default App;
