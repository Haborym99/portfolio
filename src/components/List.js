import forward from "./src/forward.svg";
import backward from "./src/backward.svg";
import bigger from "./src/big.svg";
import small from "./src/small.svg";
import { useState } from "react";
export default function List(props) {
  const [size, setSize] = useState("small");
  const [limiteStart, setLimiteStart] = useState(0);
  const [limiteEnd, setLimiteEnd] = useState(3);
  const projectArr = props.DB.filter(
    (project) => project.key > limiteStart && project.key <= limiteEnd
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
    (project) => project.key > limiteStart && project.key <= limiteEnd
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

  const bigProjectArr = props.DB.map((project) => (
    <li
      key={project.key}
      onClick={() => props.focus(project) + setSize("small")}
      id="big-project-list"
    >
      <img id="big-img-list" src={project.image} alt={project.name}></img>
      <p>{project.name}</p>
    </li>
  ));
  const bigProjectArrDark = props.DB.map((project) => (
    <li
      key={project.key}
      onClick={() => props.focus(project) + setSize("small")}
      id="big-project-list-dark"
    >
      <img id="big-img-list" src={project.image} alt={project.name}></img>
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
  }
  const smallView = (
    <div id="project-div">
      <h2 style={{ textAlign: "center", top: "0px", margin: "0px" }}>
        Projects:
      </h2>
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
      <img
        id="project-big-button"
        src={bigger}
        alt="increase the size"
        onClick={() => setSize("big")}
      ></img>
    </div>
  );

  const smallDarkView = (
    <div id="project-div-dark">
      <h2 style={{ textAlign: "center", top: "0px", margin: "0px" }}>
        Projects:
      </h2>
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
      <img
        id="project-big-button"
        src={bigger}
        alt="increase the size"
        onClick={() => setSize("big")}
      ></img>
    </div>
  );

  const bigView = (
    <div id="big-view-project" className="slide-left">
      <h2>Here's all the projects I made:</h2>
      <ul id="big-view-project-list">{bigProjectArr}</ul>
      <img
        id="project-big-button"
        src={small}
        onClick={() => setSize("small")}
        alt="reduce the size"
      ></img>
    </div>
  );
  const bigViewDark = (
    <div id="big-view-project-dark" className="slide-left">
      <h2>Here's all the projects I made:</h2>
      <ul id="big-view-project-list-dark">{bigProjectArrDark}</ul>
      <img
        id="project-big-button"
        src={small}
        onClick={() => setSize("small")}
        alt="reduce the size"
      ></img>
    </div>
  );

  if (size === "small" && props.theme === "light") {
    return smallView;
  } else if (size === "small" && props.theme === "dark") {
    return smallDarkView;
  } else if (size === "big" && props.theme === "light") {
    return bigView;
  } else {
    return bigViewDark;
  }
}
