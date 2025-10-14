import React, { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Profile from './pages/Profile'
import { generateId } from './utils/id'

// Изначальные проекты
const initialProjects = [
  {
    id: generateId(),
    name: 'Сайт портфолио',
    tasks: [
      { id: generateId(), title: 'Инициализация репозитория', description: 'Создать репозиторий на GitHub', assignee: 'Иван', status: 'done', due: new Date().toISOString() },
      { id: generateId(), title: 'Дизайн интерфейса', description: 'Создать макеты', assignee: 'Мария', status: 'in-progress', due: new Date().toISOString() },
      { id: generateId(), title: 'Написать документацию', description: 'Подготовить README', assignee: 'Алексей', status: 'todo', due: new Date().toISOString() },
    ]
  },
  { id: generateId(), name: 'Todo-приложение', tasks: [] }
]

export default function App() {
  const [page, setPage] = useState('home')
  const [projects, setProjects] = useState(initialProjects) // теперь состояние здесь

  return (
    <div className="min-h-screen bg-purple-100 text-purple-900">
      <Nav current={page} onNavigate={setPage} />
      <main className="max-w-4xl mx-auto p-6">
        {page === 'home' && <Home />}
        {page === 'projects' && (
          <Projects projects={projects} setProjects={setProjects} />
        )}
        {page === 'profile' && <Profile />}
      </main>
    </div>
  )
}
