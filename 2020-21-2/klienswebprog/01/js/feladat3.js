const observer = new IntersectionObserver(onObserve, {
  threshold: 0.0,
  // root: null
});
function onObserve(entries) {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add(
        "animate__animated",
        `animate__${el.dataset.scrollAnimation}`
      );
    }
  });
}

document.querySelectorAll("[data-scroll]").forEach((el) => {
  observer.observe(el);
});
