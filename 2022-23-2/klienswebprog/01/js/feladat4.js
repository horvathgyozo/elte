(function () {
  const div = document.createElement("div");
  div.style.position = "fixed";
  div.style.zIndex = 2023;
  div.style.width = "0%";
  div.style.height = "5px";
  div.style.backgroundColor = "red";

  document.body.prepend(div);

  document.addEventListener("scroll", function () {
    const perc = window.scrollY / (document.body.scrollHeight - document.body.clientHeight);
    div.style.width = `${perc * 100}%`;
  });
})();