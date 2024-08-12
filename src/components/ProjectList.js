import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  function handleDelete(id) {
    const remaining = projects.filter((project) => project.id !== id);
    setProjects(remaining);
    
    fetch(`http://localhost:4000/projects/${id}`, 
    { method: "DELETE" })
      .catch((error) => console.log(error));
  }

  return (
    <div className="border">
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ProjectList;
