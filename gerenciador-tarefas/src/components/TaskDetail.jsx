// TaskDetail.jsx
import { useParams } from "react-router-dom";

function TaskDetail({ tasks }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === id);

  if (!task) return <h2>Tarefa não encontrada</h2>;

  return (
    <div>
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.isCompleted ? "✅ Concluída" : "❌ Pendente"}</p>
    </div>
  );
}

export default TaskDetail;