import { React, useState } from "react";
import css from "./App.css";
import Presentation from "./components/Presentation";
import Focus from "./components/Focus";
import List from "./components/List";

function App(props) {
  const allProjects = props.projectsDB;
  const [mode, setMode] = useState("light");
  const [focusOnProject, setFocus] = useState(allProjects[0].name);
  const [prjctImg, setImg] = useState(allProjects[0].image);
  const [prjctLink, setLink] = useState(allProjects[0].link);
  function handleMode(props) {
    if (props === "light") {
      setMode("light");
      document.body.classList.remove("dark-mode");
      document
        .getElementById("presentation")
        .classList.remove("dark-left-side");
      document.getElementById("focus").classList.remove("dark-center");
      document
        .getElementById("project-array-background")
        .classList.remove("dark-right-side");
      document
        .getElementById("project-div")
        .classList.remove("dark-project-div");
    } else {
      setMode("dark");
      document.body.classList.add("dark-mode");
      document.getElementById("presentation").classList.add("dark-left-side");
      document.getElementById("focus").classList.add("dark-center");
      document
        .getElementById("project-array-background")
        .classList.add("dark-right-side");
    }
    document.getElementById("project-div").classList.add("dark-project-div");
  }
  function handleFocus(choice) {
    setFocus(choice.name);
    setImg(choice.image);
    setLink(choice.link);
  }
  return (
    <div>
      <div className="App">
        <Presentation handleMode={handleMode} />
        <Focus name={focusOnProject} img={prjctImg} link={prjctLink} />
        <List DB={allProjects} focus={handleFocus} theme={mode} />
      </div>
    </div>
  );
}

export default App;
