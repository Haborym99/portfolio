import forward from "./src/forward.svg";
import backward from "./src/backward.svg";
import { useState } from "react";
export default function List(props) {
  const [limiteStart, setLimiteStart] = useState(0);
  const [limiteEnd, setLimiteEnd] = useState(3);
  const projectArr = props.DB.filter(
    (project) => project.id > limiteStart && project.id <= limiteEnd
  ).map((project) => (
    <li
      key={project.key}
      onClick={() => props.focus(project)}
      id="project-list"
    >
      <img id="img-list" src={project.image} alt={project.name}></img>
      <p>{project.name}</p>
    </li>
  ));
  const projectArrDark = props.DB.filter(
    (project) => project.id > limiteStart && project.id <= limiteEnd
  ).map((project) => (
    <li
      key={project.key}
      onClick={() => props.focus(project)}
      id="project-list-dark"
    >
      <img id="img-list" src={project.image} alt={project.name}></img>
      <p>{project.name}</p>
    </li>
  ));
  function handlePages(event) {
    if (event.target.alt === "next-page" && limiteEnd <= projectArr.length) {
      setLimiteStart(limiteStart + 3);
      setLimiteEnd(limiteEnd + 3);
    } else if (event.target.alt === "previous-page" && limiteStart > 0) {
      setLimiteStart(limiteStart - 3);
      setLimiteEnd(limiteEnd - 3);
    }
    console.log(limiteStart);
    console.log(limiteEnd);
    console.log(event);
  }
  const smallView = (
    <div id="project-div">
      <ul id="project-array-background">{projectArr}</ul>
      <img
        id="next-page-list"
        src={forward}
        alt="next-page"
        onClick={handlePages}
      ></img>
      <img
        id="previous-page-list"
        src={backward}
        alt="previous-page"
        onClick={handlePages}
      ></img>
    </div>
  );

  const smallDarkView = (
    <div id="project-div-dark">
      <ul id="project-array-background">{projectArrDark}</ul>
      <img
        id="next-page-list"
        src={forward}
        alt="next-page"
        onClick={handlePages}
      ></img>
      <img
        id="previous-page-list"
        src={backward}
        alt="previous-page"
        onClick={handlePages}
      ></img>
    </div>
  );

  if (props.theme === "light") {
    return smallView;
  } else if (props.theme === "dark") {
    return smallDarkView;
  }
}
