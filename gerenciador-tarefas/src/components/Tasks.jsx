// components/Tasks.jsx
import { Link } from "react-router-dom";

function Tasks({ tasks, setTasks }) {
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="bg-gray-400 border border-gray-500 rounded-lg shadow-lg p-4 flex justify-between items-center"
        >
          <div>
            <h2
              className={
                task.isCompleted
                  ? "line-through text-gray-700 font-semibold"
                  : "text-black font-semibold"
              }
            >
              {/* Título da tarefa vira um link para a página de detalhes */}
              <Link
                to={`/tasks/${task.id}`}
                className="text-blue-600 hover:text-blue-800 no-underline"
              >
                {task.title}
              </Link>
            </h2>
            <p className="text-gray-800">{task.description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => toggleTask(task.id)}
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
            >
              {task.isCompleted ? "Desmarcar" : "Concluir"}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Excluir
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;