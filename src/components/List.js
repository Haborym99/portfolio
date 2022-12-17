export default function List(props) {
  const listOfProject = allProjects.map((project) => (
    <li key={project.key} onClick={() => handleFocus(project)} id="list">
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
