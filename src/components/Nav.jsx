import React from 'react'
import Clock from './Clock'

export default function Nav({ current, onNavigate }) {
  const btnClass = (id) =>
  `px-3 py-2 rounded-md font-medium ${
    current === id
      ? 'bg-white ring-2 ring-offset-2 ring-purple-500 text-purple-600'
      : 'bg-transparent hover:bg-purple-300/50'
  }`

  return (
    <header className="relative bg-purple-500 text-white">
      {/* 🕒 Часы — в правом верхнем углу */}
      <div className="absolute top-2 right-4 z-10">
        <Clock />
      </div>

      {/* Основная навигация */}
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        {/* 🔹 Название теперь кликабельно */}
        <button
          onClick={() => onNavigate('home')}
          className="text-lg font-bold hover:text-indigo-200 transition-colors"
        >
          cpp-project
        </button>

        <nav className="space-x-2">
          <button className={btnClass('home')} onClick={() => onNavigate('home')}>
            Главная
          </button>
          <button className={btnClass('projects')} onClick={() => onNavigate('projects')}>
            Проекты
          </button>
          <button className={btnClass('profile')} onClick={() => onNavigate('profile')}>
            Профиль пользователя
          </button>
        </nav>
      </div>
    </header>
  )
}
