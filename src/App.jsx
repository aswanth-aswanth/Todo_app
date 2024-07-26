import React, { useState, useEffect } from "react";
import Task from "./components/Task.jsx";
import TaskCard from "./components/TaskCard.jsx";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const initialTask = {
  id: 1,
  title: "",
  startTime: new Date(),
  remainingTime: 60,
};

const initialTasks = [];

function App() {
  const [task, setTask] = useState(initialTask);
  const [tasks, setTasks] = useState(initialTasks);

  const handleInputChange = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleAddTask = () => {
    const newTask = {
      ...task,
      startTime: tasks.length > 0 ? tasks[tasks.length - 1].endTime : new Date(),
    };

    newTask.endTime = new Date(newTask.startTime.getTime() + newTask.remainingTime * 60000);

    setTasks([...tasks, newTask]);
    setTask(initialTask);
  };

  const handleUpArrowClick = () => {
    setTask((prevTask) => ({
      ...prevTask,
      remainingTime: Math.min(prevTask.remainingTime + 10, 60),
    }));
  };

  const handleDownArrowClick = () => {
    setTask((prevTask) => ({
      ...prevTask,
      remainingTime: Math.max(prevTask.remainingTime - 10, 0),
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((t) => ({
          ...t,
          remainingTime: Math.max(0, Math.round((t.endTime - new Date()) / 1000)), // remaining time in seconds
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [tasks]);

  // console.log("task : ",task);
  // console.log("tasks : ",tasks);

  return (
    <>
      <div className="min-h-screen select-none bg-gradient-to-r from-cyan-500 to-blue-500  pt-16">
        <div className="flex justify-between text-white text-2xl font-bold px-28">
          <h1>Main tasks</h1>
          <p>15 december 2023</p>
        </div>
        <div className="flex justify-center items-center mt-28 text-2xl font-bold  text-white mb-10">
          <p className="mr-20">Tasks</p>
          <div className="text-gray-600 flex items-center">
            <input value={task.title} onChange={handleInputChange} className="pl-4 text-center rounded-xl h-12  w-[650px] " required placeholder="Add task" type="text" />
            <div className=" relative ">
              <IoMdArrowDropup onClick={handleUpArrowClick} className="absolute -top-[36px]  cursor-pointer translate-x-[50%] text-gray-100 text-5xl" />
              <input value={task.remainingTime} onChange={(e) => setTask({ ...task, remainingTime: parseInt(e.target.value, 10) || 0 })} className="text-center rounded-xl h-12 w-16 ml-4" type="text" />
              <IoMdArrowDropdown onClick={handleDownArrowClick} className="absolute -bottom-[36px] cursor-pointer translate-x-[50%] text-gray-100 text-5xl" />
            </div>
            <button onClick={handleAddTask} className=" border-4 p-1 px-1 ml-6 rounded-xl text-white">
              <FiPlus className="text-4xl" />
            </button> 
          </div>
          <p className="ml-20">See all</p>
        </div>
        {tasks.map((item) => {
          return <Task data={item} />;
        })}
  
        <div className="bg-slate-200 h-1 rounded-2xl w-[400px] mx-auto my-20"></div>
        <div className="flex justify-evenly pb-56">
          <TaskCard />
        </div>
      </div>
    </>
  );
}

export default App;
