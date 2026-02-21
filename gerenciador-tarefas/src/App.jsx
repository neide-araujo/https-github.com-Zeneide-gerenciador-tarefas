// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import TaskDetail from "./components/TaskDetail";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Estudar matemática",
      description: "Estudar matemática para se tornar desenvolvedor full stack.",
      isCompleted: false,
    },
  ]);

  return (
    <BrowserRouter>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px]">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Gerenciador de Tarefas
          </h1>

          <Routes>
            {/* Página principal: lista e adicionar tarefas */}
            <Route
              path="/"
              element={
                <>
                  <AddTasks tasks={tasks} setTasks={setTasks} />
                  <Tasks tasks={tasks} setTasks={setTasks} />
                </>
              }
            />

            {/* Página de detalhe da tarefa */}
            <Route path="/tasks/:id" element={<TaskDetail tasks={tasks} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;