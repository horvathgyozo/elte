// const nav = document.querySelector('nav');
// window.addEventListener('scroll', onScroll);
// function onScroll(e) {
//   // if (window.scrollY > 200) {
//   //   nav.classList.add("navbar-scrolled");
//   // } else {
//   //   nav.classList.remove("navbar-scrolled");
//   // }
//   nav.classList.toggle("navbar-scrolled", window.scrollY > 200)
// }

// let waiting = false;
// const nav = document.querySelector('nav');
// window.addEventListener('scroll', onScroll);
// function onScroll(e) {
//   if (!waiting) {
//     nav.classList.toggle("navbar-scrolled", window.scrollY > 200)
//     waiting = true;
//     setTimeout(() => waiting = false, 100);
//   }
// }

const nav = document.querySelector('nav');
window.addEventListener('scroll', _.throttle(onScroll, 100));
function onScroll(e) {
  nav.classList.toggle("navbar-scrolled", window.scrollY > 200)
}

// window.addEventListener('scroll', 
//   _.throttle(() => document.querySelector("nav").classList.toggle("navbar-scrolled", window.scrollY > 200)), 100);