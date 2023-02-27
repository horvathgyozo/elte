// let l = false;
// document.addEventListener("scroll", function (e) {
//   if (!l) {
//     document.querySelector("nav").classList.toggle("navbar-scrolled", 
//       window.scrollY > 200);
//     l = true;
//     setTimeout(() => l = false, 3000);
//   }
// });

document.addEventListener("scroll", _.throttle(onScroll, 100));
function onScroll(e) {
  document.querySelector("nav").classList.toggle("navbar-scrolled", 
    window.scrollY > 200);
}