// window.addEventListener("scroll", function (e) {
//   // console.log(window.scrollY);
//   // if (window.scrollY > 200) {
//   //   document.querySelector("nav")
//   //     .classList.add("navbar-scrolled");
//   // } else {
//   //   document.querySelector("nav")
//   //     .classList.remove("navbar-scrolled");
//   // }
//   document.querySelector("nav").classList
//     .toggle("navbar-scrolled", window.scrollY > 200);
// });

// let waiting = false;
// window.addEventListener("scroll", function (e) {
//   if (!waiting) {
//     waiting = true;
//     document.querySelector("nav").classList
//       .toggle("navbar-scrolled", window.scrollY > 200);
//     setTimeout(() => waiting = false, 40);
//   } 
// });

// console.log(_);
window.addEventListener("scroll", _.throttle(function (e) {
  document.querySelector("nav").classList
    .toggle("navbar-scrolled", window.scrollY > 200);
}, 100));
