import "./App.css";
import { useState } from "react";

function App(props) {
  const [allProjects, setAll] = useState(props.projectsDB);
  console.log("All project:");
  console.log(allProjects);
  const [focusOnProject, setFocus] = useState(allProjects[0].name);
  console.log("Focus goes on:");
  console.log(focusOnProject);
  function handleFocus(choice) {
    setFocus(choice.name);
  }
  const listOfProject = allProjects.map((project) => (
    <li key={project.key} onClick={() => handleFocus(project)}>
      {project.name}
    </li>
  ));
  return (
    <div className="App">
      <div className="left-side">
        <h2>About me:</h2>
        <h2>Where you can find me:</h2>
      </div>
      <div className="center">
        <h2>Focus on: {focusOnProject}</h2>
      </div>
      <div className="right-side"></div>
      <ul role="list" className="project-array">
        {listOfProject}
      </ul>
    </div>
  );
}

export default App;
