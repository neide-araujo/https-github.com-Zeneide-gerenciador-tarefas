import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTasks({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (title.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-slate-700 border border-gray-500 rounded-lg shadow-lg p-4 my-4">
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        Nova Tarefa
      </h2>

      <input
        type="text"
        placeholder="Digite o título Novas Tarefas"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-400 rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-white"
      />

      <textarea
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-400 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-white"
      />

      <div className="flex justify-center">
        <button
          onClick={addTask}
          className="bg-slate-500 text-white px-6 py-2 rounded-lg hover:bg-slate-600 transition-colors border border-white"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default AddTasks;