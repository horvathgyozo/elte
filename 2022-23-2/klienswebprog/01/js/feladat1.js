document.addEventListener("click", function (e) {
  if (e.target.matches("#mainNav a.nav-link")) { // megfelelő linkre kattintva
    e.preventDefault();
    const url = e.target.href; // #portfolio
    const parts = url.split('#');
    const selector = `#${parts.pop()}`;
    document.querySelector(selector).scrollIntoView({ behavior: "smooth"});
  }
})