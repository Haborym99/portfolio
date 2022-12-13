import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { id: 1, key: 1, name: "projet 1" },
  { id: 2, key: 2, name: "projet 2" },
  { id: 3, key: 3, name: "projet 3" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App projectsDB={DATA} />
  </React.StrictMode>
);
