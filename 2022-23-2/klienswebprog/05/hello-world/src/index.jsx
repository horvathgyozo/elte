// import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Hello({ name, count, children }) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(<h1 key={i}>Hello {name}!</h1>);
  }

  return name === "" ? (
    <h1>Nincs kit {Math.random()}!</h1>
  ) : (
    <>
      {" "}
      {result} {children}
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);

setInterval(() => {
  root.render(
    <Hello name="" count="5">
      <p>A small message for you!</p>
      <p>Tetszőleges</p>
    </Hello>
  );
}, 1000);
