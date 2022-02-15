const div = document.createElement('div');
div.innerHTML = `
  <div style="position: fixed; z-index: 2000; width: 100%;">
    <div style="height: 5px; background-color: brown; width: 50%;"></div>
  </div>
`
document.body.prepend(div);
const progressBar = div.querySelector('div div div');
// console.log(div);
// console.log(progressBar);
progressBar.style.width = '80%';