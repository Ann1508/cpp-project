import React from 'react'

export default function ProjectCard({ project, onSelect }) {
  return (
    <div 
      className="p-4 bg-white rounded shadow hover:bg-indigo-50 cursor-pointer"
      onClick={() => onSelect(project.id)}
    >
      <div className="font-bold text-lg">{project.name}</div>
      <div className="text-sm text-gray-500">Задач: {project.tasks.length}</div>
    </div>
  )
}
