import { useState } from "react";
import linkedin from "./src/linkedin.svg";
import github from "./src/github.svg";
import email from "./src/email.svg";
import phone from "./src/phone.svg";
import bigger from "./src/big.svg";
import reduce from "./src/small.svg";

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
        </p>
        <h2>Certifications:</h2>
        <p>(300h + each you can find them here)</p>
        <ul>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              HTML/CSS
            </a>
          </li>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/front-end-development-libraries"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              Frontend librairies
            </a>
          </li>
        </ul>
        <br />
        <p>Actually I'm using:</p>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Figma</li>
          <li>Notion</li>
        </ul>
      </div>
      <h2>To contact me:</h2>
      <div id="contact-small">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/tristan-collon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact-small-logo"
                src={linkedin}
                style={{
                  width: "20px",
                }}
                alt="noopener noreferrer"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Haborym99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact-small-logo"
                src={github}
                style={{ width: "20px" }}
                alt="noopener noreferrer"
              ></img>
            </a>
          </li>
          <li>
            <a href="mailto:tristan.collon@outlook.com">
              <img
                className="contact-small-logo"
                src={email}
                style={{ width: "20px" }}
                alt="email logo"
              ></img>
            </a>
          </li>
          <li>
            <a href="tel:+330637874588">
              <img
                className="contact-small-logo"
                src={phone}
                style={{ width: "20px" }}
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
      </div>
      <img
        id="bigger-button"
        src={bigger}
        style={{ width: "25px" }}
        onClick={() => setSize("big")}
        alt="increase presentation window"
      ></img>
      <p
        style={{
          position: "absolute",
          top: "100%",
          left: "0%",
          right: "0%",
        }}
      >
        &copy; Tristan Collon
      </p>
    </div>
  );
  const smallViewDark = (
    <div id="presentation" className="left-side dark-left-side">
      <h2>About me:</h2>
      <div className="about-me">
        <p>
          Hello, and welcome to my portfolio!
          <br />
          I'm Tristan Collon, a self-taught frontend developer.
          <span className="br"></span>
        </p>
        <h2>Certifications:</h2>
        <p>(300h + each you can find them here)</p>
        <ul>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              HTML/CSS
            </a>
          </li>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/front-end-development-libraries"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              Frontend librairies
            </a>
          </li>
        </ul>
        <br />
        <p>Actually I'm using:</p>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Figma</li>
          <li>Notion</li>
        </ul>
      </div>
      <h2>To contact me:</h2>
      <div id="contact-small">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/tristan-collon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact-small-logo"
                src={linkedin}
                style={{
                  width: "20px",
                }}
                alt="noopener noreferrer"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Haborym99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact-small-logo"
                src={github}
                style={{ width: "20px" }}
                alt="noopener noreferrer"
              ></img>
            </a>
          </li>
          <li>
            <a href="mailto:tristan.collon@outlook.com">
              <img
                className="contact-small-logo"
                src={email}
                style={{ width: "20px" }}
                alt="email logo"
              ></img>
            </a>
          </li>
          <li>
            <a href="tel:+330637874588">
              <img
                className="contact-small-logo"
                src={phone}
                style={{ width: "20px" }}
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
      </div>
      <img
        id="bigger-button"
        src={bigger}
        style={{ width: "25px" }}
        onClick={() => setSize("big")}
        alt="increase presentation window"
      ></img>
      <p style={{ position: "absolute", top: "100%", left: "0%", right: "0%" }}>
        &copy; Tristan Collon
      </p>
    </div>
  );

  const bigView = (
    <div id="presentation" className="left-side-big slide-right">
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
        </p>
        <h2>Any degree?</h2>
        <p>
          A bachelor degree plus, certifications for web development and
          frontend development from freeCodeCamp, each of them asked about
          approximately 300h or more.
          <br />
          You'll find links to see each certifications plus a list of things
          that I learned with those certifications
        </p>
        <span className="br"></span>
        <ul>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/responsive-web-design"
              target="_blank"
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
          <li>Node.js</li>
          <li>Figma</li>
          <li>Notion</li>
        </ul>
        <h2>What I am actually doing?</h2>
        <p>
          Once my portfolio done I will learn TypeScript, remake old projects,
          and looking to create a high-end restaurant menu.
        </p>
      </div>
      <h2>If you have any question:</h2>
      <div id="contact-big">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/tristan-collon/"
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              href="https://github.com/Haborym99"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        <p
          style={{
            position: "absolute",
            top: "100%",
            left: "0%",
            right: "0%",
          }}
        >
          &copy; Tristan Collon
        </p>
      </div>
      <img
        id="smaller-button"
        src={reduce}
        style={{ width: "25px" }}
        onClick={() => setSize("small")}
        alt="decrease presentation window"
      ></img>
    </div>
  );
  const bigViewDark = (
    <div id="presentation" className="left-side-big dark-left-side slide-right">
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
        </p>
        <h2>Any degree?</h2>
        <p>
          A bachelor degree plus, certifications for web development and
          frontend development from freeCodeCamp, each of them asked about
          approximately 300h or more.
          <br />
          You'll find links to see each certifications plus a list of things
          that I learned with those certifications
        </p>
        <span className="br"></span>
        <ul>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Squaredius/responsive-web-design"
              target="_blank"
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
          <li>Node.js</li>
          <li>Figma</li>
          <li>Notion</li>
        </ul>
        <h2>What I am actually doing?</h2>
        <p>
          Once my portfolio done I will learn TypeScript, remake old projects,
          and looking to create a high-end restaurant menu.
        </p>
      </div>
      <h2>If you have any question:</h2>
      <div id="contact-big">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/tristan-collon/"
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              href="https://github.com/Haborym99"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        <p
          style={{
            position: "absolute",
            top: "100%",
            left: "0%",
            right: "0%",
          }}
        >
          &copy; Tristan Collon
        </p>
      </div>
      <img
        id="smaller-button"
        src={reduce}
        style={{ width: "25px" }}
        onClick={() => setSize("small")}
        alt="decrease presentation window"
      ></img>
    </div>
  );

  if (size === "small" && props.mode === "light") {
    return smallView;
  } else if (size === "small" && props.mode === "dark") {
    return smallViewDark;
  } else if (size === "big" && props.mode === "light") {
    return bigView;
  } else if (size === "big" && props.mode === "dark") {
    return bigViewDark;
  }
}
