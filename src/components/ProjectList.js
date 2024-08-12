import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  function handleDelete(id) {
    const remaining = projects.filter((project) => project.id !== id);
    setProjects(remaining);

    fetch(`http://localhost:4000/projects/${id}`, { method: "DELETE" }).catch(
      (error) => console.log(error)
    );
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setProjects([...projects, formData]);

    fetch("http://localhost:4000/projects", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
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

      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add name of the project"
            name="name"
            id="name"
            onChange={handleChange}
          />
          <textarea
            id="description"
            name="description"
            placeholder="Add some description about the project"
            rows="4"
            cols="50"
            onChange={handleChange}
          />

          <select name="category" onChange={handleChange} required>
            <option value="">Select a category</option>
            <option value="education">Education</option>
            <option value="travel">Travel</option>
            <option value="productivity">Productivity</option>
          </select>

          <input type="submit" value="Add project" />
        </form>
      </div>
    </div>
  );
}

export default ProjectList;
