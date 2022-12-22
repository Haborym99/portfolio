import { useState } from "react";
import linkedin from "./src/linkedin.svg";
import github from "./src/github.svg";
import email from "./src/email.svg";
import phone from "./src/phone.svg";

export default function Presentation(props) {
  const [size, setSize] = useState("small");
  const smallView = (
    <div id="presentation" className="left-side">
      <h2>About me:</h2>
      <div className="about-me">
        <p>
          Hello, and welcome to my portfolio!
          <br />
          I'm Tristan Collon, a self-taught frontend developer.
          <span className="br"></span>
          <h2>Certifications:</h2>
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
        <button
          type="button"
          id="center-big-button"
          onClick={() => setSize("big")}
        >
          Click here for more information
        </button>
      </div>
    </div>
  );

  const bigView = (
    <div id="presentation" className="left-side-big">
      <h2>Who I am?</h2>
      <div className="about-me">
        <p>
          Hello & welcome in my portfolio! I'm Tristan Collon, a self-taught
          frontend developer. I currently live in France, but I will move to a
          foreign country if necessary.
          <br />
          I'm constantly trying to learn new things, or practicing things I
          already know.
          <br />
          I don't mind working alone or in a team.
          <br />
          In addition to technology, I also love taking photos, playing video
          games, travelling, listening to music, running, lifting weight.
          <h2>Any degree?</h2>
          Only a bachelor degree but, I have certifications for web development
          and frontend development from freeCodeCamp, each of them asked about
          approximately 300h or more.
          <br />
          Now I'll give you a link to see each certifications plus a list of
          things that I learned with those certifications
        </p>
        <span className="br"></span>
        <ul>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/responsive-web-design"
              target="_blank"
              style={{ color: "inherit" }}
            >
              HTML/CSS
            </a>
          </li>
          <div className="container-list" align="center">
            <ul id="sub-list">
              <li>How web work</li>
              <li>Creating a website</li>
              <li>Manipulation of div</li>
              <li>Usage of different position</li>
              <li>Grid and column positionning</li>
              <li>Accesibility</li>
            </ul>
          </div>
          <span className="br"></span>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/javascript-algorithms-and-data-structures"
              target="_blank"
              style={{ color: "inherit" }}
            >
              JavaScript
            </a>
          </li>
          <div className="container-list">
            <ul id="sub-list">
              <li>Algorithm logic</li>
              <li>Array manipulation</li>
              <li>Object manipulation</li>
              <li>Functionnal programation</li>
              <li>ES6</li>
            </ul>
          </div>
          <span className="br"></span>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/front-end-development-libraries"
              target="_blank"
              style={{ color: "inherit" }}
            >
              Frontend librairies
            </a>
          </li>
          <div className="container-list">
            <ul id="sub-list">
              <li>React.js</li>
              <li>Redux</li>
              <li>jQuery</li>
              <li>Sass</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </ul>
        <span className="br"></span>
        <h2>Which tech I am actually using?</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>
        <h2>What I am actually doing?</h2>
        <p>
          Actually I am learning TypeScript, remaking old projects, and looking
          to create a high-end restaurant menu
        </p>
      </div>
      <h2>If you have any question:</h2>
      <div id="contact-big">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/tristan-collon/"
              target="_blank"
            >
              <img
                className="contact-big-logo"
                src={linkedin}
                style={{
                  width: "30px",
                }}
                alt="linkedin logo"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/Haborym99" target="_blank">
              <img
                className="contact-big-logo"
                src={github}
                style={{ width: "30px" }}
                alt="github logo"
              ></img>
            </a>
          </li>
          <li>
            <a href="mailto:tristan.collon@outlook.com">
              <img
                className="contact-big-logo"
                src={email}
                style={{ width: "30px" }}
                alt="email logo"
              ></img>
            </a>
          </li>
          <li>
            <a href="tel:+330637874588">
              <img
                className="contact-big-logo"
                src={phone}
                style={{ width: "30px" }}
                alt="phone logo"
              ></img>
            </a>
          </li>
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
        <button
          type="button"
          id="center-big-button"
          onClick={() => setSize("small")}
        >
          Click here for less information
        </button>
      </div>
    </div>
  );

  if (size === "small") {
    return smallView;
  } else {
    return bigView;
  }
}
