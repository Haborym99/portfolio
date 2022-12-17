import { useState } from "react";
import css from "./app.css";
import Presentation from "./components/Presentation";
import Focus from "./components/Focus";
import List from "./components/List";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

function App(props) {
  const allProjects = props.projectsDB;
  const [mode, setMode] = useState("light");
  const [focusOnProject, setFocus] = useState(allProjects[0].name);
  function handleMode(props) {
    if (props === "light") {
      document.body.classList.remove("dark-mode");
      document
        .getElementById("presentation")
        .classList.remove("dark-left-side");
      document.getElementById("focus").classList.remove("dark-center");
      document
        .getElementById("project-array-background")
        .classList.remove("dark-right-side");
      document.getElementById("list").classList.remove("dark-list");
    } else {
      document.body.classList.add("dark-mode");
      document.getElementById("presentation").classList.add("dark-left-side");
      document.getElementById("focus").classList.add("dark-center");
      document
        .getElementById("project-array-background")
        .classList.add("dark-right-side");
      document.getElementById("list").classList.add("dark-list");
    }
  }
  function handleFocus(choice) {
    setFocus(choice.name);
  }

  return (
    <div>
      <button className="light" onClick={() => handleMode("light")}>
        Light mode
      </button>
      <button className="dark" onClick={() => handleMode("dark")}>
        Dark mode
      </button>
      <div className="App">
        <Presentation />
        <Focus focus={focusOnProject} />
        <List list={listOfProject} />
      </div>
    </div>
  );
}

export default App;
