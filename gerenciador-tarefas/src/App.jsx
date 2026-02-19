import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática para se tornar desenvolvedor full stack.",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-white flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Gerenciador de Tarefas
        </h1>

        <AddTasks tasks={tasks} setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;