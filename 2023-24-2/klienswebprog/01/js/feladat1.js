document.addEventListener("click", function (e) {
  if (e.target.matches(".navbar a")) {
    e.preventDefault();
    const href = e.target.href;
    // console.log(href);
    const url = new URL(href);
    const hash = url.hash;
    // console.log(hash);
    document.querySelector(hash).scrollIntoView(
      { behavior: "smooth"});
  }
});