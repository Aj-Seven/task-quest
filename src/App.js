import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const editTask = (task) => {
    // Handle task editing logic here (e.g., show an edit form)
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} onEdit={editTask} />
    </div>
  );
};

export default App;

