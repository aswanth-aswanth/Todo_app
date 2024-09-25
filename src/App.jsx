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
      startTime:
        tasks.length > 0 ? tasks[tasks.length - 1].endTime : new Date(),
    };

    newTask.endTime = new Date(
      newTask.startTime.getTime() + newTask.remainingTime * 60000
    );

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
          remainingTime: Math.max(
            0,
            Math.round((t.endTime - new Date()) / 1000)
          ), // remaining time in seconds
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [tasks]);

  // console.log("task : ",task);
  // console.log("tasks : ",tasks);

  return (
    <>
      <div className="min-h-screen select-none bg-gradient-to-r from-cyan-500 to-blue-500 p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between text-white text-xl sm:text-2xl font-bold mb-8">
          <h1>Main tasks</h1>
          <p className="mt-2 sm:mt-0">15 december 2023</p>
        </div>
        {/* <div className="flex flex-col items-center mt-8 sm:mt-16 text-xl sm:text-2xl font-bold text-white mb-10">
          <p className="mb-4 sm:mb-0 sm:mr-20">Tasks</p>
          <div className="text-gray-600 flex flex-col sm:flex-row items-center w-full sm:w-auto">
            <input
              value={task.title}
              onChange={handleInputChange}
              className="pl-4 text-center rounded-xl h-12 w-full sm:w-[650px] mb-4 sm:mb-0"
              required
              placeholder="Add task"
              type="text"
            />
            <div className="relative flex items-center mb-4 sm:mb-0">
              <IoMdArrowDropup
                onClick={handleUpArrowClick}
                className="cursor-pointer text-gray-100 text-5xl mr-2"
              />
              <input
                value={task.remainingTime}
                onChange={(e) =>
                  setTask({
                    ...task,
                    remainingTime: parseInt(e.target.value, 10) || 0,
                  })
                }
                className="text-center rounded-xl h-12 w-16"
                type="text"
              />
              <IoMdArrowDropdown
                onClick={handleDownArrowClick}
                className="cursor-pointer text-gray-100 text-5xl ml-2"
              />
            </div>
            <button
              onClick={handleAddTask}
              className="border-4 p-1 px-1 rounded-xl text-white mt-4 sm:mt-0 sm:ml-6"
            >
              <FiPlus className="text-4xl" />
            </button>
          </div>
          <p className="mt-4 sm:mt-0 sm:ml-20">See all</p>
        </div> */}
        <div className="space-y-6">
          {tasks.map((item) => (
            <Task key={item.id} data={item} />
          ))}
        </div>
        <div className="bg-slate-200 h-1 rounded-2xl w-full sm:w-[400px] mx-auto my-20"></div>
        <div className="flex flex-col sm:flex-row justify-evenly pb-16 sm:pb-56">
          <TaskCard />
        </div>
      </div>
    </>
  );
}

export default App;
