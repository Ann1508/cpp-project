export default function TaskCard({ task }) {
  return (
    <div className="p-2 mb-2 bg-purple-50 rounded shadow">
      <div className="font-medium">{task.title}</div>
      {task.description && <div className="text-sm text-gray-500">{task.description}</div>}
      {task.assignee && <div className="text-xs text-gray-400">Исполнитель: {task.assignee}</div>}
      {task.due && (
        <div className="text-xs text-gray-400">
          Дата: {new Date(task.due).toLocaleDateString()}
        </div>
      )}
    </div>
  )
}
