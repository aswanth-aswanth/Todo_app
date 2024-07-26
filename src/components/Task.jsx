import { IoTimeOutline } from "react-icons/io5";

function Task({data}) {

    const formatHourMinute = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      };
      const formatHourMinuteAMPM = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        return `${formattedHours}:${minutes} ${ampm}`;
      };
    console.log("data : ",data);
    const formatRemainingTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}m ${remainingSeconds}s`;
      };
  return (
    <div className="min-h-[140px] flex justify-between px-6 items-center my-6 rounded-3xl bg-white max-w-[1100px] shadow-2xl  mx-auto">
      <div className="flex gap-4 h-[60px] ">
        <div>
          <p className=" font-bold text-gray-600 text-lg">start</p>
          <div className="flex items-center mt-2 gap-2">
            <IoTimeOutline className="text-[#7800EF]" />
            <p className=" text-[#7800EF] inline-block font-medium">{formatHourMinuteAMPM(data.startTime)}</p>
          </div>
        </div>
        <div>
          <p className=" font-bold text-gray-600 text-lg">end</p>
          <div className="flex items-center mt-2 gap-2">
            <IoTimeOutline className="text-[#7800EF]" />
            <p className=" text-[#7800EF] font-medium">{formatHourMinuteAMPM(data.endTime)}</p>
          </div>
        </div>
      </div>
      <p className="text-2xl text-gray-600 font-semibold max-w-[50%] overflow-auto">{data.title}</p>
      <div className=" font-bold flex items-center flex-col justify-center bg-blue-500 py-2 rounded-lg shadow-lg  w-48">
        <p className="text-white">Remaining time</p>
        <p className=" text-yellow-300">{formatRemainingTime(data.remainingTime)}</p>
      </div>
    </div>
  );
}

export default Task;
