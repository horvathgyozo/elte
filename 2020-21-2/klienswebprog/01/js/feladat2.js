// window.addEventListener("scroll", onScroll);
// function onScroll(e) {
//   // console.log(window.scrollY);
//   const el = document.querySelector("nav.navbar");
//   // if (window.scrollY > 200) {
//   //   // nav add navbar-scrolled
//   //   el.classList.add("navbar-scrolled");
//   // } else {
//   //   // nav remove navbar-scrolled
//   //   el.classList.remove("navbar-scrolled");
//   // }
//   el.classList.toggle("navbar-scrolled", window.scrollY > 200);
// }

// let waiting = false;
// window.addEventListener("scroll", function (e) {
//   if (!waiting) {
//     document
//       .querySelector("nav")
//       .classList.toggle("navbar-scrolled", window.scrollY > 200);
//     window.setTimeout(function () {
//       waiting = false;
//     }, 1000);
//     waiting = true;
//   }
// });

// window.addEventListener("scroll", onScroll, 100);
window.addEventListener("scroll", _.throttle(onScroll, 100));
function onScroll(e) {
  // console.log(1);
  document
    .querySelector("nav")
    .classList.toggle("navbar-scrolled", window.scrollY > 200);
}
