import Style from "./components/style";
import { useState } from "react";
function App(props) {
  const allProjects = props.projectsDB;
  const [mode, setMode] = useState("light");
  const [focusOnProject, setFocus] = useState(allProjects[0].name);
  function handleMode(props) {
    if (props === "light") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }
  function handleFocus(choice) {
    setFocus(choice.name);
  }
  const listOfProject = allProjects.map((project) => (
    <li key={project.key} onClick={() => handleFocus(project)}>
      {project.name}
    </li>
  ));
  return (
    <div>
      <button onClick={() => handleMode("light")}>Light mode</button>
      <button onClick={() => handleMode("dark")}>Dark mode</button>
      <Style
        listOfProject={listOfProject}
        focusOnProject={focusOnProject}
        mode={mode}
      />
    </div>
  );
}

export default App;
