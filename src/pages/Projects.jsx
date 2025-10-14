import React, { useState } from 'react'
import ProjectList from '../components/ProjectList'
import ProjectPage from './ProjectPage'

export default function Projects({ projects, setProjects }) {
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const selectedProject = projects.find(p => p.id === selectedProjectId)

  const updateProject = (projectId, newTasks) => {
    setProjects(prev =>
      prev.map(p => (p.id === projectId ? { ...p, tasks: newTasks } : p))
    )
  }

  return (
    <div className="p-4">
      {!selectedProject ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Проекты</h1>
          {/* Рендерим список проектов по пропсу projects */}
          <ProjectList projects={projects} onSelectProject={setSelectedProjectId} />
        </>
      ) : (
        <ProjectPage
          project={selectedProject}
          updateProject={updateProject}
          goBack={() => setSelectedProjectId(null)}
        />
      )}
    </div>
  )
}
