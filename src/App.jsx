import TaskCard from "./components/TaskCard.jsx";

function App() {

  return (
    <>
      <div className="min-h-screen select-none bg-gradient-to-r from-cyan-500 to-blue-500 p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between text-white text-xl sm:text-2xl font-bold mb-8">
          <h1>Main tasks</h1>
          <p className="mt-2 sm:mt-0">15 december 2023</p>
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
