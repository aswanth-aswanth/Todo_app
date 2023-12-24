import { FiPlus } from "react-icons/fi";

function TaskCard() {
  return (
    <div className="bg-[#F4F4F4] w-[400px] rounded-2xl p-4 shadow-2xl min-h-[300px] ">
      <h3 className="text-xl mb-4 font-bold text-gray-500 text-center">To do</h3>
      <div className="flex">
        <input className=" bg-[#D9D9D9] w-full my-1 h-12 rounded-md px-3 text-gray-500 font-bold"/>
        <button className=" border-4 border-[#D9D9D9] px-2 ml-2 rounded-xl text-[#D9D9D9]"><FiPlus className=" text-3xl"/></button>
      </div>
        <div className=" bg-[#D9D9D9] w-full my-2 h-12 rounded-md"></div>
        <div className=" bg-[#D9D9D9] w-full my-2 h-12 rounded-md"></div>
        <div className=" bg-[#D9D9D9] w-full my-2 h-12 rounded-md"></div>
        <div className=" bg-[#D9D9D9] w-full my-2 h-12 rounded-md"></div>
    </div>
  );
}

export default TaskCard;
