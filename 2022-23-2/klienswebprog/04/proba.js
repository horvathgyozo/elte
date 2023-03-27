import cowsay from "cowsay";
import { add } from "./math.js";

console.log(add(10, 32));

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "-O",
    T: "U ",
  })
);

const alma = "piros";
console.log(alma);

const o = {
  a: 12,
  b: 30,
};
// const a = o.a;
// const b = o.b;

const { a, b } = o;
