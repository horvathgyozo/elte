const observer = new IntersectionObserver(onObserve, {
  threshold: 1.0,
});
function onObserve(entries) {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add(`animate__${entry.target.dataset.scrollAnimation}`);
    } else {
      // entry.target.classList.remove("animate__animated");
      // entry.target.classList.remove(`animate__${entry.target.dataset.scrollAnimation}`);
    }
  });
}
document.querySelectorAll("[data-scroll]").forEach(
  e => observer.observe(e)
)
