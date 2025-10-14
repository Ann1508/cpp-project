import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectList({ projects, onSelectProject }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map(p => (
        <ProjectCard key={p.id} project={p} onSelect={onSelectProject} />
      ))}
    </div>
  )
}
