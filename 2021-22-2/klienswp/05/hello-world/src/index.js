import React from "react";
import ReactDOM from "react-dom";

function Hello({ name, children }) {
  return name === "" ? (
    <h1>Nincs kit {Math.random()}</h1>
  ) : (
    <>
      <h1>Hello {name}!</h1>
      {children}
    </>
  );
}

setInterval(() => {
  ReactDOM.render(
    <Hello name="">
      <p>Udvözöllek</p>
    </Hello>,
    document.getElementById("root")
  );
}, 1000);
