const TaskItem = ({ task, onDragStart }) => {
  return (
    <div
    draggable
    onDragStart={onDragStart}
    className="task-item flex items-center pl-2 cursor-grab bg-[#D9D9D9] w-full my-2 h-12 rounded-md text-sm sm:text-md font-bold text-gray-500 hover:outline outline-2 outline-gray-600 overflow-hidden"
  >
    <p className="truncate">{task.content}</p>
  </div>
  );
};

export default TaskItem;
