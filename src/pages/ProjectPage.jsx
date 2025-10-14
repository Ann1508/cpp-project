import React, { useState } from 'react'
import TaskCard from '../components/TaskCard'
import { generateId } from '../utils/id'

export default function ProjectPage({ project, updateProject,  goBack }) {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignee: '',
    status: 'todo',
    due: new Date().toISOString().split('T')[0], // сегодняшняя дата
  })

  const handleAddTask = (e) => {
    e.preventDefault()
    const { title, description, assignee, status, due } = newTask
    if (!title || !description || !assignee || !status || !due) {
      alert('Пожалуйста, заполните все поля!')
      return
    }

    const taskToAdd = { ...newTask, id: generateId() }
    const updatedTasks = [...project.tasks, taskToAdd]
    updateProject(project.id, updatedTasks)

    setNewTask({
      title: '',
      description: '',
      assignee: '',
      status: 'todo',
      due: new Date().toISOString().split('T')[0],
    })
  }

  const statuses = ['todo', 'in-progress', 'done']

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{project.name}</h1>

      {/* Кнопка возврата */}
      <button
        onClick={goBack}
        className="mb-4 px-2 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
      >
        Назад к проектам
      </button>

      {/* Форма добавления задачи */}
      <form
        onSubmit={handleAddTask}
        className="mb-8 p-4 bg-white rounded shadow space-y-4 max-w-full"
      >
        <input
          type="text"
          placeholder="Название задачи"
          value={newTask.title}
          onChange={e => setNewTask({ ...newTask, title: e.target.value })}
          className="w-full px-3 py-2 border bg-purple-50 rounded"
        />
        <textarea
          placeholder="Описание"
          value={newTask.description}
          onChange={e => setNewTask({ ...newTask, description: e.target.value })}
          className="w-full px-3 py-2 border bg-purple-50 rounded resize-none"
        />
        <input
          type="text"
          placeholder="Исполнитель"
          value={newTask.assignee}
          onChange={e => setNewTask({ ...newTask, assignee: e.target.value })}
          className="w-full px-3 py-2 border bg-purple-50 rounded"
        />
        <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
          <select
            value={newTask.status}
            onChange={e => setNewTask({ ...newTask, status: e.target.value })}
            className="px-3 py-2 border bg-purple-50 rounded flex-1"
          >
            <option value="todo">ToDo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <input
            type="date"
            value={newTask.due}
            onChange={e => setNewTask({ ...newTask, due: e.target.value })}
            className="px-3 py-2 border bg-purple-50 rounded flex-1"
            min={new Date().toISOString().split('T')[0]} // чтобы нельзя было выбрать дату раньше сегодня
            />

            <button
            type="submit"
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
            >
            Добавить задачу
            </button>
        </div>
      </form>

      {/* Kanban доска */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statuses.map(status => (
          <div key={status} className="bg-white p-2 rounded">
            <h2 className="font-bold text-center mb-2">
              {status === 'todo'
                ? 'ToDo'
                : status === 'in-progress'
                ? 'In Progress'
                : 'Done'}
            </h2>
            {project.tasks.filter(t => t.status === status).map(t => (
              <TaskCard key={t.id} task={t} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
