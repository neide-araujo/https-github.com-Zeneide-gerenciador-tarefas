import { useState } from "react";

function AddTasks({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (title.trim() === "") return;

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-gray-400 border border-gray-500 rounded-lg shadow-lg p-4 my-4">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2 mb-2"
      />
      <textarea
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded p-2 mb-4"
      />
      <div className="flex justify-center">
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default AddTasks;