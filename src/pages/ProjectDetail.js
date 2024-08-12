import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  const [project, setProject] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <p>Name: {project?.name} </p>
      <p>Description : {project?.description} </p>
      <p>Category: {project?.category}</p>
      <div>Authors: {project?.authors.map((author, index)=>(
        <p key={index}>{author}</p>
      ))}</div>
      <p></p>
    </>
  );
}

export default ProjectDetail;
