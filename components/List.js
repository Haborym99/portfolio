export default function List(props) {
  const listOfProject = props.DB.map((project) => (
    <li
      key={project.key}
      onClick={() => props.focus(project)}
      id="project-list"
    >
      <img id="img-list" src={project.image} alt={project.name}></img>
      <p>{project.name}</p>
    </li>
  ));
  const smallView = (
    <div id="project-div">
      <ul id="project-array-background">{listOfProject}</ul>
    </div>
  );

  const listOfProjectDark = props.DB.map((project) => (
    <li
      key={project.key}
      onClick={() => props.focus(project)}
      id="project-list-dark"
    >
      <img id="img-list" src={project.image} alt={project.name}></img>
      <p>{project.name}</p>
    </li>
  ));
  const smallDarkView = (
    <div id="project-div-dark">
      <ul id="project-array-background">{listOfProjectDark}</ul>
    </div>
  );

  if (props.theme === "light") {
    return smallView;
  } else if (props.theme === "dark") {
    return smallDarkView;
  }
}
