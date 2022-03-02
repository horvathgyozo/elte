import cowsay from "cowsay";
import { add } from "./math.js";

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);
console.log(add(10, 32));

// const a = 12;
// console.log(a);
