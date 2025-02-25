import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onComplete, onEdit }) => {
    return (
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onEdit={onEdit}
          />
        ))}
      </div>
    );
  };
  
  export default TaskList;
  