import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Calculator from "./components/src/calculator.png";
import Markdown from "./components/src/markdown_prw.png";
import Drums from "./components/src/drums.png";
import Quotations from "./components/src/quotations.PNG";

const DATA = [
  {
    id: 1,
    key: 1,
    name: "Calculator",
    image: Calculator,
    link: "https://haborym99.github.io/calculator/",
  },
  {
    id: 2,
    key: 2,
    name: "Markdown previewer",
    image: Markdown,
    link: "https://haborym99.github.io/markdown_previewer/",
  },
  {
    id: 3,
    key: 3,
    name: "Drums machine",
    image: Drums,
    link: "https://haborym99.github.io/drum_machine/",
  },
  {
    id: 4,
    key: 4,
    name: "Quote generator",
    image: Quotations,
    link: "https://haborym99.github.io/Quote_Generator/",
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App projectsDB={DATA} />
  </React.StrictMode>
);
