export default function Presentation(props) {
  const smallView = (
    <div id="presentation" className="left-side">
      <h2>About me:</h2>
      <div className="about-me">
        <p>
          Hello, and welcome to my portfolio! I'm Tristan Collon, a self-taught
          frontend developer.
          <span className="br"></span>
          <br />
          Here is three certifications from freeCodeCamp
          <br />
          (300h + each you can find them here)
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Frontend librairies</li>
          </ul>
          <br />
          My tech stack:
        </p>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>Sass</li>
          <li>jQuery</li>
        </ul>
        <p>Click here for further informations</p>
      </div>
      <h2>To contact me:</h2>
      <div className="contact">
        <p>Here's all my social link:</p>
        <ul>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Email</li>
          <li>Phone</li>
        </ul>
      </div>
      <div id="mode">
        <button
          type="button"
          className="light"
          onClick={() => props.handleMode("light")}
        >
          Light mode
        </button>
        <button
          type="button"
          className="dark"
          onClick={() => props.handleMode("dark")}
        >
          Dark mode
        </button>
      </div>
    </div>
  );
  return smallView;
}
