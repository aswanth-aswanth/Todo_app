import Task from "./components/Task.jsx";
import TaskCard from "./components/TaskCard.jsx";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
function App() {
  return (
    <>
      <div className="min-h-screen  bg-gradient-to-r from-cyan-500 to-blue-500  pt-16">
        <div className="flex justify-between text-white text-2xl font-bold px-28">
          <h1>Main tasks</h1>
          <p>15 december 2023</p>
        </div>
        <div className="flex justify-center items-center mt-28 text-2xl font-bold  text-white mb-10">
          <p className="mr-20">Tasks</p>
          <div className="text-gray-600 flex items-center">
            <input className="pl-4 text-center rounded-xl h-12  w-[650px] " placeholder="Add task" type="text" />
            <div className=" relative ">
              <IoMdArrowDropup className="absolute -top-[36px]  cursor-pointer translate-x-[50%] text-gray-100 text-5xl"/>
              <input className="text-center rounded-xl h-12 w-16 ml-4" type="text" />
              <IoMdArrowDropdown  className="absolute -bottom-[36px] cursor-pointer translate-x-[50%] text-gray-100 text-5xl"/>
            </div>
            <button className=" border-4 p-1 px-1 ml-6 rounded-xl text-white"><FiPlus className="text-4xl"/></button>
          </div>
          <p className="ml-20">See all</p>
        </div>
        <Task />
        <Task />
        <div className="bg-slate-200 h-1 rounded-2xl w-[400px] mx-auto my-20"></div>
        <div className="flex justify-evenly pb-56">
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </>
  );
}

export default App;
