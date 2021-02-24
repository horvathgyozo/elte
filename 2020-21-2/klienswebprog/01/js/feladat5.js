const observer2 = new IntersectionObserver(onObserve2, {
  threshold: 0.0,
  // root: null
});
function onObserve2(entries) {
  entries.forEach((entry) => {
    console.log(entry);
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
  observer2.observe(el);
});
