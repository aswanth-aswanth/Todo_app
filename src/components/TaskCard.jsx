import React, { useState } from "react";
import TaskList from "./TaskList";

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);

  const handleDrop = (droppedTask, targetList) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== droppedTask.id);
      let updatedTask;

      if (targetList === "Completed") {
        updatedTask = { ...droppedTask, status: "completed" };
      } else if (targetList === "Pending") {
        updatedTask = { ...droppedTask, status: "pending" };
      } else {
        updatedTask = { ...droppedTask, status: "tasks" };
      }

      return [...updatedTasks, updatedTask];
    }); 
  };

  return (
    <div className="task-app flex gap-20 flex-wrap justify-center">
      <TaskList title="Task" tasks={tasks.filter((task) => task.status === "tasks")} onDrop={(task) => handleDrop(task, "Task")} setTasks={setTasks} />
      <TaskList title="Pending" tasks={tasks.filter((task) => task.status === "pending")} onDrop={(task) => handleDrop(task, "Pending")} setTasks={setTasks} />
      <TaskList title="Completed" tasks={tasks.filter((task) => task.status === "completed")} onDrop={(task) => handleDrop(task, "Completed")} setTasks={setTasks} />
    </div>
  );
};

export default TaskCard;
