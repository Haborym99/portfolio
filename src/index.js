import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Calculator from "./components/src/calculator.png";
import Markdown from "./components/src/markdown_prw.png";
import Drums from "./components/src/drums.png";
import Quotations from "./components/src/quotations.PNG";
import Todo from "./components/src/todo.png";
import Menu from "./components/src/menu.png";

const DATA = [
  {
    id: 1,
    key: 1,
    name: "Menu",
    image: Menu,
    link: "https://haborym99.github.io/menu/",
  },
  {
    id: 2,
    key: 2,
    name: "To-do list",
    image: Todo,
    link: "https://haborym99.github.io/todo-list/",
  },
  {
    id: 3,
    key: 3,
    name: "Calculator",
    image: Calculator,
    link: "https://haborym99.github.io/calculator/",
  },
  {
    id: 4,
    key: 4,
    name: "Markdown previewer",
    image: Markdown,
    link: "https://haborym99.github.io/markdown_previewer/",
  },
  {
    id: 5,
    key: 5,
    name: "Drums machine",
    image: Drums,
    link: "https://haborym99.github.io/drum_machine/",
  },
  {
    id: 6,
    key: 6,
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
