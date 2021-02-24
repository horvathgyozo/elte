const div = document.createElement("div");
div.innerHTML = `
  <div style="position: fixed; z-index: 2000; width: 100%">
    <div style="height: 5px; width: 60%; background-color: lightgray"></div>
  </div>
`;
document.body.prepend(div);
const progressBar = div.querySelector("div div");
progressBar.style.width = `20%`;
