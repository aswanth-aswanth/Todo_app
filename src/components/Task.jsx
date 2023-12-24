import { IoTimeOutline } from "react-icons/io5";

function Task() {
  return (
    <div className="h-[140px] flex justify-between px-6 items-center my-6 rounded-3xl bg-white max-w-[1100px] shadow-2xl min-h-10 mx-auto">
      <div className="flex gap-4 h-[60px] ">
        <div>
          <p className=" font-bold text-gray-600 text-lg">start</p>
          <div className="flex items-center mt-2 gap-2">
            <IoTimeOutline className="text-[#7800EF]" />
            <p className=" text-[#7800EF] inline-block font-medium">9.00 am</p>
          </div>
        </div>
        <div>
          <p className=" font-bold text-gray-600 text-lg">end</p>
          <div className="flex items-center mt-2 gap-2">
            <IoTimeOutline className="text-[#7800EF]" />
            <p className=" text-[#7800EF] font-medium">10.00 am</p>
          </div>
        </div>
      </div>
      <p className="text-2xl text-gray-600 font-semibold">Nothing in here</p>
      <div className=" font-bold flex items-center flex-col justify-center bg-blue-500 py-2 rounded-lg shadow-lg  w-48">
        <p className="text-white">Remaining time</p>
        <p className=" text-yellow-300">58 min 60 sec</p>
      </div>
    </div>
  );
}

export default Task;
