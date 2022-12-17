export default function List(props) {
  const listOfProject = props.DB.map((project) => (
    <li
      key={project.key}
      onClick={() => props.focus(project)}
      id="project-list"
    >
      {project.name}
    </li>
  ));
  const smallView = (
    <div id="project-div">
      <ul id="project-array-background">{listOfProject}</ul>
    </div>
  );
  return smallView;
}
