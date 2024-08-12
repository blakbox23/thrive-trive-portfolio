import React, { useState } from "react";
import TrialChild from "./TrialChild";

export default function Trial() {

const [projects, setProjects] = useState([]);
const [projectName, setProjectName ] = useState('');

function handleSubmit(e){
    e.preventDefault()
    setProjects([...projects, projectName ])
}
function handleChange(e){
    setProjectName(e.target.value)
}

    return (
    <>
      <h1>Trial component</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={projectName}/>
        <input type="submit" value="Add project"/>
      </form>

      {projects.map((project, index)=> <p key={index}>{project}</p>)}
    </>
  );
}


// onSubit ==> on the form
// onChange ==> input field
// onClick ==> button