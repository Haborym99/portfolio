export default function Style(props) {
  const lightMode = (
    <div className="App" style={{ backgroundColor: "white" }}>
      <div className="left-side">
        <h2>About me:</h2>
        <p className="about-me"></p>
        <h2>Where you can find me:</h2>
        <p className="contact"></p>
      </div>
      <div className="center">
        <h2>Focus on: {props.focusOnProject}</h2>
      </div>
      <div className="right-side"></div>
      <ul className="project-array">{props.listOfProject}</ul>
    </div>
  );

  const nightMode = (
    <div className="App" style={{ backgroundColor: "black", color: "white" }}>
      <div className="left-side">
        <h2>About me:</h2>
        <p className="about-me"></p>
        <h2>Where you can find me:</h2>
        <p className="contact"></p>
      </div>
      <div className="center">
        <h2>Focus on: {props.focusOnProject}</h2>
      </div>
      <div className="right-side"></div>
      <ul className="project-array">{props.listOfProject}</ul>
    </div>
  );
  return props.mode === "light" ? lightMode : nightMode;
}
