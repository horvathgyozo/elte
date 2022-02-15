(function () {
  const observer = new IntersectionObserver(onObserve, {
    threshold: 1.0,
  })
  function onObserve(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $('footer span').animateNumber({ number: 2022 });
      }
    })
  }
  observer.observe(document.querySelector('footer'))
})()