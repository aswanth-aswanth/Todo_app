import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { FiPlus } from "react-icons/fi";

const TaskList = ({ title, tasks, onDrop, setTasks }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(task));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedTask = JSON.parse(e.dataTransfer.getData("text/plain"));
    onDrop(droppedTask);
  };

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop} className="bg-[#F4F4F4] w-[400px] rounded-2xl p-4 shadow-2xl h-fit">
      <h3 className="text-xl  font-bold text-gray-500 text-center">{title}</h3>
      {title === "Task" && (
        <div className="flex">
          <input className="bg-[#D9D9D9]   border-0 w-full my-0 mt-2 h-12 rounded-md px-3 text-gray-500 font-bold" value={newTaskContent} onChange={(e) => setNewTaskContent(e.target.value)} />
          <button
            className="border-2 border-[#c8c7c7] px-2 ml-2 rounded-xl text-[#bbbbbb]"
            onClick={() => {
              if (newTaskContent.trim() !== "") {
                setTasks((prevTasks) => [...prevTasks, { id: `task${prevTasks.length + 1}`, content: newTaskContent, status: "tasks" }]);
                setNewTaskContent("");
              }
            }}
          >
            <FiPlus className="text-3xl" />
          </button>
        </div>
      )}
      {tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} onDragStart={(e) => handleDragStart(e, task)} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;
