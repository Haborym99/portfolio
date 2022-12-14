import Style from "./components/style";
import "./App.css";
import { useState } from "react";

function App(props) {
  const [theme, setTheme] = useState("BASE");
  const [allProjects, setAll] = useState(props.projectsDB);
  //?Mettre setTheme dans une const avec anon function
  function handleMode(prop) {
    if (prop !== "light") {
      <Style mode={prop} setTheme={{ setTheme }} />;
    } else {
      <Style mode={prop} setTheme={{ setTheme }} />;
    }
    console.log(prop);
    console.log(theme);
  }
  const [focusOnProject, setFocus] = useState(allProjects[0].name);
  function handleFocus(choice) {
    setFocus(choice.name);
  }
  const listOfProject = allProjects.map((project) => (
    <li key={project.key} onClick={() => handleFocus(project)}>
      {project.name}
    </li>
  ));
  return (
    <div className="App" style={{ theme }}>
      <button onClick={() => handleMode("light")}>Light mode</button>
      <button onClick={() => handleMode("dark")}>Dark mode</button>
      <div className="left-side">
        <h2>About me:</h2>
        <p className="about-me"></p>
        <h2>Where you can find me:</h2>
        <p className="contact"></p>
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
